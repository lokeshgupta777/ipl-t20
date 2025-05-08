import axiosInstance from "@/lib/api/axios";
import { QueryFunctionContext } from "@tanstack/react-query";

export interface ILiveMatches {
  fixture_id: number;
}

export const getLiveMatches = async (queryContext: QueryFunctionContext) => {
  try {
    const { data } = await axiosInstance.get("/live-matches");
    return data as ILiveMatches;
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
