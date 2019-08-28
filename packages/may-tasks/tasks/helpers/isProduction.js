import { argv } from "yargs";

export const isProduction = !!argv.production;
