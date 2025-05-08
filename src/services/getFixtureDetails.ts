import axiosInstance from "@/lib/api/axios";
import { TeamData } from "@/shared/types";
import { QueryFunctionContext } from "@tanstack/react-query";

export interface IFixtureDetailsDataRun {
  fixture_id: number;
  team_data: TeamData;
  inning: number;
  score: number;
  wickets: number;
  overs: number;
  updated_at: string;
}

export interface IFixtureDetailsData {
  winner_team_data: TeamData | null;
  draw_noresult: string | null;
  runs: IFixtureDetailsDataRun[];
}

export const getFixtureDetails = async (queryContext: QueryFunctionContext) => {
  const queryParams = {
    fixture_id: queryContext.queryKey?.[2],
    include: queryContext.queryKey?.[1],
  };

  try {
    const { data } = await axiosInstance.get("/fixture-details", {
      params: queryParams,
    });
    return data as IFixtureDetailsData;
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
