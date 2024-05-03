/// <reference types="astro/client" />
type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals {
    runtime: any;
  }
}

interface Locals extends Runtime {
  otherLocals: {
    test: string;
  };
  env: {
    VARIABLE_1: string;
    VARIABLE_2: string;
  };
}

interface ImportMetaEnv {
  readonly VARIABLE_1: string;
  readonly VARIABLE_2: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}