/// <reference types="vite/client" />
/// <reference types="react" />

interface ImportMetaEnv {
    readonlyVITE_API_CLIENT: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
