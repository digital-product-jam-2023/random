export const SUPABASE_URL = process.env.SUPABASE_URL
export const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY
export const API_BASE = "/api"
export const API_DATA_ENDPOINT = `${API_BASE}/data`
export const API_SESSIONS_ENDPOINT = `${API_BASE}/sessions`
export const API_TEAMS_ENDPOINT = `${API_BASE}/teams`
export const STATE_DESCRIPTORS = [
  {
    "action": {
      "id": "Show-students",
      "text": "Load Students",
      "disabled": false,
    },
    "next": 1,
  },
  {
    "action": {
      "id": "select-students",
      "text": "Select Students",
      "disabled": false,
    },
    "next": 2,
  },
  {
    "action": {
      "id": "select-concept",
      "text": "Select Concept",
      "disabled": true,
    },
    "next": 3,
  },
  {
    "action": {
      "id": "next-team",
      "text": "Next Team",
      "disabled": false,
    },
    "next": 4, // TODO: should be 1, but easy to develop with 4
  },
  {
    "action": {
      "id": "final",
      "text": "Good Luck",
      "disabled": false,
    },
    "next": 0,
  }
];