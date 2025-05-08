import { IFixtureData } from "@/services/getFixtures";
import { getFormattedDate, getFormattedNote } from "@/utils";
import { Card } from "flowbite-react";
import Image from "next/image";

const FixturesCard = (fixtureData: IFixtureData) => {
  return (
    <Card className="w-full lg:w-[calc((100%/2)-8px)] 2xl:w-[calc((100%/3)-16px)]">
      <div className="flex justify-between">
        <span>{fixtureData?.round}</span>
        <span>{getFormattedDate(new Date(fixtureData?.starting_at))}</span>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center">
          {fixtureData?.local_team_data && (
            <Image
              src={fixtureData?.local_team_data?.image_path}
              alt="team_logo"
              height={24}
              width={24}
            />
          )}
          <span className="text-md ml-1">
            {fixtureData?.local_team_data?.code ?? "TBD"}
          </span>
        </div>
        <span className="font-bold text-white bg-black rounded-full p-1 text-xs m-4">
          VS
        </span>
        <div className="flex items-center">
          {fixtureData?.visitor_team_data && (
            <Image
              src={fixtureData?.visitor_team_data?.image_path}
              alt="team_logo"
              height={24}
              width={24}
            />
          )}
          <span className="text-md ml-1">
            {fixtureData?.visitor_team_data?.code ?? "TBD"}
          </span>
        </div>
      </div>
      <div>
        {getFormattedNote(
          fixtureData?.note,
          fixtureData?.winner_team_id,
          fixtureData?.local_team_data,
          fixtureData?.visitor_team_data
        )}
      </div>
    </Card>
  );
};

export default FixturesCard;
