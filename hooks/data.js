import { useEffect } from "react";
import useSWR from "swr";
import { API_DATA_ENDPOINT, API_SESSIONS_ENDPOINT, API_TEAMS_ENDPOINT } from "../config";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useData() {
  const { data, error } = useSWR(API_DATA_ENDPOINT, fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export function useSession() {
  const { data, error } = useSWR(API_SESSIONS_ENDPOINT, fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
