import { IFixture } from "./types";
import teamStaticData from "../data/teamStaticData.json";

export const transformFixturesData = (fixtures: IFixture[]) => {
  return (fixtures || []).map((fixture) => {
    const localTeamData = teamStaticData?.find(
      ({ id }) => id == fixture.localteam_id
    );

    const visitorTeamData = teamStaticData?.find(
      ({ id }) => id == fixture.visitorteam_id
    );

    return {
      id: fixture?.id,
      local_team_data: localTeamData,
      visitor_team_data: visitorTeamData,
      round: fixture.round,
      starting_at: fixture.starting_at,
      status: fixture.status,
      live: fixture.live,
      note: fixture.note,
      winner_team_id: fixture.winner_team_id,
    };
  });
};
