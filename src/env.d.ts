/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly VARIABLE_1: string;
  readonly VARIABLE_2: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}