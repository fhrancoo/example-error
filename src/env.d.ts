/// <reference types="astro/client" />
type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {
    readonly VARIABLE_1: string;
    readonly VARIABLE_2: string;
  }
}