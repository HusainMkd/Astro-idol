/// <reference types="astro/client" />

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.svg?component' {
  const content: string;
  export default content;
}
