export default {
  parseServer: {
    serverURL: import.meta.env.VITE_PARSE_SERVER_URL || "",
    appId: import.meta.env.VITE_PARSE_SERVER_APP_ID || "",
    masterKey: import.meta.env.VITE_PARSE_SERVER_MASTER_KEY || "",
    restKey: import.meta.env.VITE_PARSE_SERVER_REST_KEY || "",
    jsKey: import.meta.env.VITE_PARSE_SERVER_JS_KEY || "",
  },
}
