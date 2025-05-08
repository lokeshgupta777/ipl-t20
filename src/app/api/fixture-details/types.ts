import { IFixture } from "../fixtures/types";

export interface IFixtureDetailRun {
  resource: string;
  id: number;
  fixture_id: number;
  team_id: number;
  inning: number;
  score: number;
  wickets: number;
  overs: number;
  pp1: string | null;
  pp2: string | null;
  pp3: string | null;
  updated_at: string;
}

interface IFixtureDetailBallBat {
  resource: string;
  id: number;
  country_id: number;
  firstname: string;
  lastname: string;
  fullname: string;
  image_path: string;
  dateofbirth: string;
  gender: string;
  battingstyle: string;
  bowlingstyle: null | string;
  position: {
    resource: string;
    id: number;
    name: string;
  };
  updated_at: string;
}

interface IFixtureDetailBallBowl {
  resource: string;
  id: number;
  country_id: number;
  firstname: string;
  lastname: string;
  fullname: string;
  image_path: string;
  dateofbirth: string;
  gender: string;
  battingstyle: string;
  bowlingstyle: string;
  position: {
    resource: string;
    id: number;
    name: string;
  };
  updated_at: string;
}

interface IFixtureDetailBallScore {
  resource: string;
  id: number;
  name: string;
  runs: number;
  four: boolean;
  six: boolean;
  bye: number;
  leg_bye: number;
  noball: number;
  noball_runs: number;
  is_wicket: boolean;
  ball: boolean;
  out: boolean;
}

interface IFixtureDetailBallTeam {
  resource: string;
  id: number;
  name: number;
  code: number;
  image_path: string;
  country_id: number;
  national_team: boolean;
  updated_at: string;
}

interface IFixtureDetailBall {
  resource: string;
  id: number;
  fixture_id: number;
  team_id: number;
  ball: number;
  scoreboard: string;
  batsman_one_on_creeze_id: number;
  batsman_two_on_creeze_id: number;
  batsman_id: number;
  bowler_id: number;
  batsmanout_id: null | number;
  catchstump_id: null | number;
  runout_by_id: null | number;
  score_id: number;
  batsman: IFixtureDetailBallBat;
  bowler: IFixtureDetailBallBowl;
  score: IFixtureDetailBallScore;
  team: IFixtureDetailBallTeam;
  updated_at: string;
}

export interface IFixtureDetails extends IFixture {
  runs: IFixtureDetailRun[];
  balls: IFixtureDetailBall[];
}
