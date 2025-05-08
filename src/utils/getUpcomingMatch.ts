import { IFixtureData } from "@/services/getFixtures";

export const getUpcomingMatch = (fixtures: IFixtureData[]) => {
  const upcomingMatch = fixtures?.find(
    ({ starting_at }) => new Date(starting_at)?.getTime() > Date.now()
  );
  return upcomingMatch ?? null;
};
