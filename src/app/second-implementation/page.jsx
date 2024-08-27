import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Table from "@/components/second-implementation/Table";

async function page() {
  const queryClient = new QueryClient();
  const tableData = await queryClient.prefetchQuery({
    queryKey: ["tableData"],
    queryFn: async () => {
      const response = await fetch("https://api.restful-api.dev/objects");
      return response.json();
    },
  });
  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Table />
      </HydrationBoundary>
    </>
  );
}

export default page;
