# ============================================
# Stage 1: Base (node + pnpm only)
# ============================================
FROM node:22-alpine AS base
LABEL maintainer="inforberi"

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Enable pnpm via corepack
RUN corepack enable


# ============================================
# Stage 2: Builder
# ============================================
FROM base AS builder
WORKDIR /app

# Copy dependency manifests
COPY package.json pnpm-lock.yaml* ./

# Install all deps (dev + prod)
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build Next.js standalone output
RUN pnpm build


# ============================================
# Stage 3: Production runner (minimal)
# ============================================
FROM node:22-alpine AS runner
WORKDIR /app

# Install ONLY required runtime tool
RUN apk add --no-cache dumb-init

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser  --system --uid 1001 nextjs

# Copy standalone output (includes server.js + node_modules)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Copy static assets
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["node", "server.js"]