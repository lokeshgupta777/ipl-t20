import axiosInstance from "@/lib/api/axios";
import { TeamData } from "@/shared/types";
import { QueryFunctionContext } from "@tanstack/react-query";

export type TResult = "W" | "L" | "N" | "D";

export interface IStandingData {
  position: number;
  team_data: TeamData;
  played: number;
  won: number;
  lost: number;
  draw: number;
  noresult: number;
  run_rate: number;
  points: number;
  recent_form: TResult[];
}

export const getStandings = async (queryContext: QueryFunctionContext) => {
  try {
    const { data } = await axiosInstance.get("/standings");
    return data as IStandingData[];
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
