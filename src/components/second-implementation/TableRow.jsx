const TableRow = ({ id, name, data }) => {
  return (
    <div className="divide-y text-[#424242] divide-black font-varela-round">
      <div className="grid grid-cols-12 gap-x-10 px-3 py-3 text-base lg:text-lg ">
        <div className="">{id}</div>
        <div className="col-span-3">{name} </div>
        <div className="w-[8.25rem] col-span-2">
          {data?.color ? data?.color : "unspecified"}
        </div>
        <div className="text-center col-span-2">
          {data?.capacity ? data.capacity : "unspecified"}
        </div>
        <div className="text-center col-span-2 ">
          {data?.generation ? data.generation : "unspecified"}
        </div>
        <div className="text-center col-span-2 ">
          {data?.["Screen size"] ? data["Screen size"] : "unspecified"}
        </div>
      </div>
    </div>
  );
};

export default TableRow;
