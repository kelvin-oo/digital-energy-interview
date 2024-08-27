"use client";
import TableRow from "./TableRow";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function Table() {
  const {
    data: tableData,
    error,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: ["tableData"],
    queryFn: () => fetchQuery("https://api.restful-api.dev/objects"),
  });

  return (
    <>
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          padding: ".2rem",
          border: "1px solid black",
          margin: "1rem 1rem",
        }}
      >
        <Link href="/first-implementation">View First Implementation</Link>
      </button>
      <div className="divide-y text-[#424242] divide-black font-varela-round">
        <div className="grid grid-cols-12 gap-x-10 px-3 py-3 text-base lg:text-lg whitespace-nowrap">
          <div className="text-black font-extrabold">Id</div>
          <div className="text-black font-extrabold col-span-3">Name</div>
          <div className="col-span-2 font-extrabold text-black">Color</div>
          <div className="text-center font-extrabold col-span-2 text-black">
            Capacity
          </div>
          <div className="text-center font-extrabold col-span-2 text-black">
            Generation
          </div>
          <div className="text-center font-extrabold col-span-2 text-black">
            Screen Size
          </div>
        </div>

        {tableData.map(({ ...props }, index) => (
          <TableRow key={index} {...props} />
        ))}
      </div>
    </>
  );
}
