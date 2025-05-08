import { TResult } from "@/services/getStandings";

interface ITableRecentRowProps {
  results: TResult[];
}

const TableRowRecent = (props: ITableRecentRowProps) => {
  const { results } = props;
  return (
    <div className="flex items-center gap-1">
      {results?.map((res, idx) => {
        let color = "";
        if (res === "W") color = "text-green-400";
        else if (res === "L") color = "text-red-400";
        else color = "text-gray-400";
        return (
          <span className={`font-bold ${color}`} key={idx}>
            {res}
          </span>
        );
      })}
    </div>
  );
};

export default TableRowRecent;
