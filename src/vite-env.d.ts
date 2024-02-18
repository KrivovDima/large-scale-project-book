/// <reference types="vite/client" />
/// <reference types="react" />

interface ImportMetaEnv {
    readonly VITE_APP_CONFIG: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
