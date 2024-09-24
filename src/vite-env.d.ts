/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly MODE: string; // Add your custom environment variables here
    // readonly VITE_DISABLE_DOM_TO_CODE: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
