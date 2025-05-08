import FixturesCard from "@/features/Fixtures/components/FixtureCard/FixturesCard";
import { queryKeys } from "@/lib/react-query/queryKeys";
import { getFixtures } from "@/services";
import { CACHE_TIME } from "@/shared/constants";
import { getUpcomingMatch } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";

const Upcoming = () => {
  const { data, isLoading } = useQuery({
    queryKey: queryKeys.dashboard.getFixtures,
    queryFn: getFixtures,
    refetchInterval: CACHE_TIME.getFixtures,
    staleTime: CACHE_TIME.getFixtures,
    gcTime: CACHE_TIME.getFixtures,
  });

  const upcomingMatch = getUpcomingMatch(data ?? []);

  return isLoading ? (
    <div className="flex justify-center">
      <Spinner />
    </div>
  ) : upcomingMatch ? (
    <FixturesCard {...upcomingMatch} />
  ) : null;
};

export default Upcoming;
