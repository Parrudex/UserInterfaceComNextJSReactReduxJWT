// @mui
import { enUS, frFR, zhCN, viVN, arSD, ptBR } from "@mui/material/locale";
// routes
import { PATH_DASHBOARD } from "./routes/paths";

function getEnvValue(key) {
  if (process.env[key] !== undefined) {
    return process.env[key];
  }
}

// API
// ----------------------------------------------------------------------

//export const API_URL = getEnvValue("APP_API_URL");
export const API_URL = "http://localhost:8080/api";


export const FIREBASE_API = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

export const COGNITO_API = {
  userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
  clientId: process.env.AWS_COGNITO_CLIENT_ID,
};

export const AUTH0_API = {
  clientId: process.env.AUTH0_CLIENT_ID,
  domain: process.env.AUTH0_DOMAIN,
};

export const MAPBOX_API = process.env.MAPBOX_API;

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = PATH_DASHBOARD.general.app; // as '/dashboard/app'

export const APP_BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL
export const API_BASE_URL= `${APP_BASE_URL}/api`
export const AUTH_URL = `${APP_BASE_URL}/oauth/token`
export const S3_KEY_SECRET =  process.env.NEXT_PUBLIC_APP_S3_KEY_SECRET
export const S3_KEY_ID =  process.env.NEXT_PUBLIC_APP_S3_KEY_ID
export const S3_BUCKET_NAME =  process.env.NEXT_PUBLIC_APP_S3_BUCKET_NAME



// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 92,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 280,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export const ICON = {
  NAVBAR_ITEM: 22,
  NAVBAR_ITEM_HORIZONTAL: 20,
};

// SETTINGS
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------

export const cookiesExpires = 3;

export const cookiesKey = {
  themeMode: "themeMode",
  themeLayout: "themeLayout",
  themeStretch: "themeStretch",
  themeContrast: "themeContrast",
  themeDirection: "themeDirection",
  themeColorPresets: "themeColorPresets",
};

export const defaultSettings = {
  themeMode: "light",
  themeDirection: "ltr",
  themeContrast: "default",
  themeLayout: "horizontal",
  themeColorPresets: "default",
  themeStretch: false,
};

// MULTI LANGUAGES
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: "Portuguese (Brazil)",
    value: "pt_br",
    systemValue: ptBR,
    icon: "/assets/icons/flags/ic_flag_sa.svg",
  },
  {
    label: "English",
    value: "en",
    systemValue: enUS,
    icon: "/assets/icons/flags/ic_flag_en.svg",
  },
  {
    label: "French",
    value: "fr",
    systemValue: frFR,
    icon: "/assets/icons/flags/ic_flag_fr.svg",
  },
  {
    label: "Vietnamese",
    value: "vn",
    systemValue: viVN,
    icon: "/assets/icons/flags/ic_flag_vn.svg",
  },
  {
    label: "Chinese",
    value: "cn",
    systemValue: zhCN,
    icon: "/assets/icons/flags/ic_flag_cn.svg",
  },
  {
    label: "Arabic (Sudan)",
    value: "ar",
    systemValue: arSD,
    icon: "/assets/icons/flags/ic_flag_sa.svg",
  }
];

export const defaultLang = allLangs[0]; // Portuguese (Brazil)
