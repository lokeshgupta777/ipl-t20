import { Spinner } from "flowbite-react";
import { getFixtures } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/react-query/queryKeys";
import FixturesCard from "./components/FixtureCard/FixturesCard";
import { CACHE_TIME } from "@/shared/constants";

interface IFixturesProps {
  isActive: boolean;
}

const Fixtures = ({ isActive }: IFixturesProps) => {
  const { data, isLoading } = useQuery({
    queryKey: queryKeys.dashboard.getFixtures,
    queryFn: getFixtures,
    refetchInterval: CACHE_TIME.getFixtures,
    enabled: isActive,
    staleTime: CACHE_TIME.getFixtures,
    gcTime: CACHE_TIME.getFixtures,
  });

  return isLoading ? (
    <div className="flex justify-center">
      <Spinner />
    </div>
  ) : (
    <div className="flex flex-wrap gap-y-4 gap-x-4 justify-between">
      {data?.map((fixtureData) => (
        <FixturesCard {...fixtureData} key={fixtureData.id} />
      ))}
    </div>
  );
};

export default Fixtures;
