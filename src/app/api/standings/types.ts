type TResult = "W" | "L" | "N" | "D";

interface ILegend {
  resource: string;
  id: number;
  stage_id: number;
  season_id: number;
  league_id: number;
  position: number;
  description: string;
  updated_at: string;
}

export interface IStanding {
  resource: string;
  legend_id: number;
  team_id: number;
  stage_id: number;
  season_id: number;
  league_id: number;
  position: number;
  points: number;
  played: number;
  won: number;
  lost: number;
  draw: number;
  noresult: number;
  runs_for: number;
  overs_for: number;
  runs_against: number;
  overs_against: number;
  netto_run_rate: number;
  recent_form: TResult[];
  updated_at: string;
  legend: ILegend;
}
