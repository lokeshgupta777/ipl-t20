import { IFixtureDetailRun, IFixtureDetails } from "./types";
import teamStaticData from "../data/teamStaticData.json";

const getFormattedRuns = (runDetails: IFixtureDetailRun) => {
  return {
    fixture_id: runDetails.fixture_id ?? null,
    team_data: teamStaticData?.find(({ id }) => id === runDetails.team_id),
    inning: runDetails.inning ?? null,
    score: runDetails.score ?? null,
    wickets: runDetails.wickets ?? null,
    overs: runDetails.overs ?? null,
    updated_at: runDetails.updated_at ?? null,
  };
};

export const transformFixtureDetailsData = (
  fixtureDetails: IFixtureDetails
) => {
  let first = fixtureDetails?.runs?.[0];
  let second = fixtureDetails?.runs?.[1];

  if (!first) {
    const tossWonTeamId = fixtureDetails?.toss_won_team_id;
    const tossLossTeamId =
      fixtureDetails?.toss_won_team_id ^
      fixtureDetails?.visitorteam_id ^
      fixtureDetails?.localteam_id;
    if (fixtureDetails?.elected === "batting") {
      first = { team_id: tossWonTeamId } as any;
      second = { team_id: tossLossTeamId } as any;
    } else {
      first = { team_id: tossLossTeamId } as any;
      second = { team_id: tossWonTeamId } as any;
    }
  }

  if (!second) {
    second = {
      team_id:
        first.team_id === fixtureDetails.localteam_id
          ? fixtureDetails.visitorteam_id
          : fixtureDetails.localteam_id,
    } as any;
  }

  return {
    winner_team_data:
      teamStaticData?.find(({ id }) => id === fixtureDetails.winner_team_id) ??
      null,
    draw_noresult: fixtureDetails?.draw_noresult,
    runs: [getFormattedRuns(first), getFormattedRuns(second)],
  };
};
