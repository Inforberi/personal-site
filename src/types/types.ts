export type Locale = "ru" | "en";

export type Theme = "dark" | "light";

export type Params = Promise<{ locale: Locale }>;

export interface ChildrenLocale {
  children: React.ReactNode;
  params: Params;
}
