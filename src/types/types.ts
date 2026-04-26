export type Locale = "ru" | "en";

export type Theme = "dark" | "light";

export type Params = Promise<{ locale: string }>;

export interface ChildrenLocale {
  children: React.ReactNode;
  params: Params;
}
