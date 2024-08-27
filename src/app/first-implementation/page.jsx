import Table from "@/components/first-implementation/Table";
import "../../styles/table.scss";

async function page() {
  const res = await fetch('https://api.restful-api.dev/objects')
  const data = await res.json()
  
  return (
    <div>
      <Table tableData={data}  />
    </div>
  );
}

export default page;
