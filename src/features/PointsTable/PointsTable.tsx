import {
  Spinner,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { getStandings } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/react-query/queryKeys";
import { Table } from "flowbite-react";
import PointsTableRow from "./components/PointsTableRow/PointsTableRow";
import { CACHE_TIME } from "@/shared/constants";

interface IPointsTableProps {
  isActive: boolean;
}

const PointsTable = ({ isActive }: IPointsTableProps) => {
  const { data, isLoading } = useQuery({
    queryKey: queryKeys.dashboard.getStandings,
    queryFn: getStandings,
    refetchInterval: CACHE_TIME.getStandings,
    enabled: isActive,
    staleTime: CACHE_TIME.getStandings,
    gcTime: CACHE_TIME.getStandings,
  });

  return isLoading ? (
    <div className="flex justify-center">
      <Spinner />
    </div>
  ) : (
    <Table striped>
      <TableHead>
        <TableRow>
          <TableHeadCell>Position</TableHeadCell>
          <TableHeadCell>Team</TableHeadCell>
          <TableHeadCell>M</TableHeadCell>
          <TableHeadCell>W</TableHeadCell>
          <TableHeadCell>L</TableHeadCell>
          <TableHeadCell>NRR</TableHeadCell>
          <TableHeadCell>Points</TableHeadCell>
          <TableHeadCell>Last 5</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody className="divide-y">
        {data?.map((standing) => (
          <PointsTableRow {...standing} key={standing.position} />
        ))}
      </TableBody>
    </Table>
  );
};

export default PointsTable;
