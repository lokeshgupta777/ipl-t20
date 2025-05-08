import { IFixture } from "../fixtures/types";

export const filterLiveData = (fixtures: IFixture[]) => {
  const liveMatchData = fixtures?.find(
    ({ season_id }) =>
      season_id?.toString() === process.env.SPORTSMONK_IPL2025_ID
  );

  return liveMatchData;
};
