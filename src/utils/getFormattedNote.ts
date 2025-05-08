import { TeamData } from "@/shared/types";

export const getFormattedNote = (
  note: string,
  winnerTeamId: number,
  localTeamData: TeamData,
  visitorTeamData: TeamData
) => {
  const winningteamData =
    localTeamData?.id === winnerTeamId ? localTeamData : visitorTeamData;
  return note?.replace(winningteamData?.name, winningteamData?.code);
};
