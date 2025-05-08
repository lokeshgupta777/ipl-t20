import { queryKeys } from "@/lib/react-query/queryKeys";
import { getFixtureDetails } from "@/services";
import { useGetLiveMatch } from "@/shared/hooks";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";
import LiveScore from "./components/LiveScore/LiveScore";
import Upcoming from "./components/Upcoming/Upcoming";
import { CACHE_TIME } from "@/shared/constants";

const LiveUpcoming = () => {
  const { fixtureId, isLoading: liveMatchLoading } = useGetLiveMatch();

  const { data, isFetching, isLoading } = useQuery({
    queryKey: queryKeys.dashboard.getFixtureDetailsRuns(fixtureId!),
    queryFn: getFixtureDetails,
    refetchInterval: (queryData) =>
      !queryData.state.data?.winner_team_data &&
      !queryData.state.data?.draw_noresult
        ? CACHE_TIME.getFixtureDetailsRuns
        : false,
    staleTime: CACHE_TIME.getFixtureDetailsRuns,
    gcTime: CACHE_TIME.getFixtureDetailsRuns,
    enabled: !!fixtureId,
  });

  const loading = isLoading || liveMatchLoading;
  return loading ? (
    <div className="flex justify-center">
      <Spinner />
    </div>
  ) : fixtureId ? (
    <div>
      <div className="flex justify-between">
        <p className="font-bold text-green-600">Live</p>
        {!data?.winner_team_data && !data?.draw_noresult && (
          <p>
            {isFetching
              ? "Updating..."
              : `Updates every ${
                  CACHE_TIME.getFixtureDetailsRuns / 1000
                } seconds`}
          </p>
        )}
      </div>
      <LiveScore
        runs={data?.runs ?? []}
        winnerTeamData={data?.winner_team_data ?? null}
      />
    </div>
  ) : (
    <div>
      <p className="font-bold text-green-600 mb-2">Upcoming</p>
      <Upcoming />
    </div>
  );
};

export default LiveUpcoming;
