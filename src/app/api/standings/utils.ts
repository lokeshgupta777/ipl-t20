import { IStanding } from "./types";
import teamStaticData from "../data/teamStaticData.json";

export const transformStandingsData = (standings: IStanding[]) => {
  return (standings || []).map((standing) => {
    const teamData = teamStaticData?.find(({ id }) => id == standing.team_id);

    return {
      position: standing.position,
      team_data: teamData,
      played: standing.played,
      won: standing.won,
      lost: standing.lost,
      draw: standing.draw,
      noresult: standing.noresult,
      run_rate: standing.netto_run_rate,
      points: standing.points,
      recent_form: standing.recent_form,
    };
  });
};
