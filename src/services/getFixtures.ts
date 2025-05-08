import axiosInstance from "@/lib/api/axios";
import { TeamData } from "@/shared/types";
import { QueryFunctionContext } from "@tanstack/react-query";

export interface IFixtureData {
  id: number;
  local_team_data: TeamData;
  visitor_team_data: TeamData;
  round: string;
  starting_at: string;
  status: string;
  live: boolean;
  note: string;
  winner_team_id: number;
}

export const getFixtures = async (queryContext: QueryFunctionContext) => {
  try {
    const { data } = await axiosInstance.get("/fixtures");
    return data as IFixtureData[];
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
