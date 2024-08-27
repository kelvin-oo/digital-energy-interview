"use client";

import { useState } from "react";
import Link from "next/link";

const Table = ({ tableData }) => {
  const [tableOnly, setTableOnly] = useState(false);

  const handleClick = () => {
    setTableOnly(!tableOnly);
  };
  return (
    <section className={`${tableOnly ? "all-table" : "card-table"}`}>
      <div className="buttons">
        <button onClick={handleClick} className="table-button">
          {tableOnly ? "view as card" : "view as table"}
        </button>
        <button>
          <Link href="/second-implementation">View second implementation</Link>
        </button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Colour</th>
              <th>Capacity</th>
              <th>Generation</th>
              <th>Screen Size</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((data) => (
              <tr key={data.id}>
                <td data-label="Id">{data.id}</td>
                <td data-label="Name">{data.name}</td>
                <td data-label="Colour">
                  {data?.data?.color ? data.data.color : "unspecified"}
                </td>
                <td data-label="Capacity">
                  {data?.data?.capacity ? data.data.capacity : "unspecified"}
                </td>
                <td data-label="Generation">
                  {data?.data?.generation
                    ? data.data.generation
                    : "unspecified"}
                </td>
                <td data-label="Screen Size">
                  {data?.data?.["Screen size"]
                    ? data.data["Screen size"]
                    : "unspecified"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
