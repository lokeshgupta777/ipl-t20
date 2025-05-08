import Image from "next/image";

interface ITableRowNameProps {
  code: string;
  icon: string;
}

const TableRowName = (props: ITableRowNameProps) => {
  const { code, icon } = props;

  return (
    <div className="flex items-center">
      <Image src={icon} width={20} height={20} alt="logo" />
      <span className="ml-1">{code}</span>
    </div>
  );
};

export default TableRowName;
