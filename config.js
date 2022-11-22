export const SUPABASE_URL = process.env.SUPABASE_URL;
export const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
export const API_BASE = "/api";
export const API_DATA_ENDPOINT = `${API_BASE}/data`;
export const API_SESSIONS_ENDPOINT = `${API_BASE}/sessions`;
export const API_TEAMS_ENDPOINT = `${API_BASE}/teams`;
export const DEFAULT_BACKGROUND_COLOR = "#FFFFFF";
export const BACKGROUND_COLORS = [
  "#8D8D93",
  "#0028B6",
  "#DB6E4C",
  "#AFDB00",
  "#616A3D",
  "#8654D7",
  "#7688C8",
  "#74AB73",
  "#EAAB31",
  "#E86216",
  "#C28563",
  "#FF8896",
  "#51CDDE",
  "#00442F",
  "#A83434",
  "#BEB063",
];
export const STATE_DESCRIPTORS = [
  {
    action: {
      id: "show-students",
      text: "טען סטודנטים",
      disabled: false,
    },
    cycleBackground: true,
    next: 1,
  },
  {
    action: {
      id: "select-students",
      text: "צור קבוצה",
      disabled: false,
    },
    cycleBackground: true,
    next: 2,
  },
  {
    action: {
      id: "select-concept",
      text: "צור משפט",
      disabled: true,
    },
    cycleBackground: true,
    next: 3,
  },
  {
    action: {
      id: "next-team",
      text: "לקבוצה הבאה",
      disabled: false,
    },
    cycleBackground: true,
    next: 1,
  },
  {
    action: {
      id: "final",
      text: "בהצלחה!",
      disabled: false,
    },
    cycleBackground: false,
    next: 0,
  },
];
export const FINAL_STATE_NEXT = 4;
export const FINAL_STATE_ACTION_TEXT = "לרשימה המלאה";
export const RERUN_CONCEPT_ACTION_TEXT = "רוצים שוב";
export const BUTTON_DISABLED_ACTION_TEXT = "טוען ...";
