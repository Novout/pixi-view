export type Maybe<T> = T | undefined | null;
export type Key = string | number;

export interface ContentPath {
  path: string;
  directory: string;
}

export interface TemplateCreate {
  name: string;
  content: string;
}

export interface TemplateMontage {
  path: string;
  content: string;
}

export interface TemplateToPath {
  origin: string;
  to: string;
}

export interface ExecuteOptions {
  /* utilizing yarn, `false` is npm */
  yarn?: boolean;
}
