import { queryKeys } from "@/lib/react-query/queryKeys";
import { getLiveMatches } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { CACHE_TIME } from "../constants";

export const useGetLiveMatch = () => {
  const { data, isLoading } = useQuery({
    queryKey: queryKeys.dashboard.getLiveMatches,
    queryFn: getLiveMatches,
    staleTime: CACHE_TIME.getLiveMatches,
    gcTime: CACHE_TIME.getLiveMatches,
  });

  return { fixtureId: data?.fixture_id || null, isLoading };
};
