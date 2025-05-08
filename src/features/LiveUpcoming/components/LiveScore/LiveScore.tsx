import { IFixtureDetailsDataRun } from "@/services/getFixtureDetails";
import { TeamData } from "@/shared/types";
import { Card } from "flowbite-react";
import Image from "next/image";

interface ILiveScoreProps {
  winnerTeamData: TeamData | null;
  runs: IFixtureDetailsDataRun[];
}

const LiveScore = (props: ILiveScoreProps) => {
  const { runs, winnerTeamData } = props;
  const first = runs[0];
  const second = runs[1];
  return (
    <Card>
      <div className="flex flex-row items-center gap-x-16 justify-center">
        <div className="flex flex-col gap-1">
          <div className="flex gap-x-5 items-center">
            <div>
              <Image
                src={first.team_data.image_path}
                width={30}
                height={30}
                alt="logo"
              />
              <p>{first.team_data.code}</p>
            </div>
            {first.overs || first?.score ? (
              <div>
                <p>
                  {first.score}/{first.wickets}
                </p>
                <p> ({first.overs})</p>
              </div>
            ) : null}
          </div>
          <p className="font-bold text-green-600">
            {winnerTeamData?.id === first?.team_data?.id ? "Winner" : ""}
          </p>
        </div>
        <hr className="h-10 w-[1px] bg-gray-300" />
        <div className="flex flex-col gap-1">
          <div className="flex gap-x-5 items-center">
            {second.overs || second?.score ? (
              <div>
                <p>
                  {second.score}/{second.wickets}
                </p>
                <p> ({second.overs})</p>
              </div>
            ) : null}
            <div>
              <Image
                src={second.team_data.image_path}
                width={30}
                height={30}
                alt="logo"
              />
              <p>{second.team_data.code}</p>
            </div>
          </div>
          <p className="font-bold text-green-600">
            {winnerTeamData?.id === second?.team_data?.id ? "Winner" : ""}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default LiveScore;
