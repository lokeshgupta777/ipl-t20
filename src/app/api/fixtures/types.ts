export interface IDlData {
  score: number | null;
  overs: number | null;
  wickets_out: number | null;
}

export interface IFixture {
  resource: string;
  id: number;
  league_id: number;
  season_id: number;
  stage_id: number;
  round: string;
  localteam_id: number;
  visitorteam_id: number;
  starting_at: string;
  type: string;
  live: boolean;
  status: string;
  last_period: string | null;
  note: string;
  venue_id: number;
  toss_won_team_id: number;
  winner_team_id: number;
  draw_noresult: boolean | null;
  first_umpire_id: number;
  second_umpire_id: number;
  tv_umpire_id: number;
  referee_id: number;
  man_of_match_id: number;
  man_of_series_id: number | null;
  total_overs_played: number;
  elected: string;
  super_over: boolean;
  follow_on: boolean;
  localteam_dl_data: IDlData;
  visitorteam_dl_data: IDlData;
  rpc_overs: number | null;
  rpc_target: number | null;
  weather_report: any[];
}
