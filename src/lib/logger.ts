const isProd = process.env.NODE_ENV === "production";

export const logger = {
  log: (...args: Parameters<typeof console.log>) => {
    if (!isProd) console.log(...args);
  },
  error: (...args: Parameters<typeof console.error>) => {
    console.error(...args);
  },
  warn: (...args: Parameters<typeof console.warn>) => {
    if (!isProd) console.warn(...args);
  },
  info: (...args: Parameters<typeof console.info>) => {
    if (!isProd) console.info(...args);
  },
};
