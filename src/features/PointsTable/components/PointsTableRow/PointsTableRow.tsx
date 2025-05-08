import { IStandingData } from "@/services/getStandings";
import { TableCell, TableRow } from "flowbite-react";
import TableRowName from "./components/TableRowName/TableRowName";
import TableRowRecent from "./components/TableRowRecent/TableRowRecent";

const PointsTableRow = (props: IStandingData) => {
  return (
    <TableRow>
      <TableCell>{props?.position}</TableCell>
      <TableCell>
        <TableRowName
          icon={props.team_data.image_path}
          code={props.team_data.code}
        />
      </TableCell>
      <TableCell>{props.played}</TableCell>
      <TableCell>{props.won}</TableCell>
      <TableCell>{props.lost}</TableCell>
      <TableCell>{props.run_rate}</TableCell>
      <TableCell>
        <span className="font-bold">{props.points}</span>
      </TableCell>
      <TableCell>
        <TableRowRecent results={props.recent_form} />
      </TableCell>
    </TableRow>
  );
};

export default PointsTableRow;
