export const getAppConfigKey = () => {
    return (import.meta.env.VITE_APP_CONFIG ?? "").trim();
};
