"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { DataTable } from "./DataTables";
import { List, columns } from "./Columns";

async function getData(): Promise<List[]> {
  // Simulating fetching data from an API
  return [
    {
      title: "Sample Letter 1",
      status: "Sent",
      recipient: "John Doe",
    },
    {
      title: "Sample Letter 2",
      status: "In progress",
      recipient: "Jane Smith",
    },
    {
      title: "Sample Letter 3",
      status: "Unsent",
      recipient: "Alice Johnson",
    },
    // Add more sample data as needed
  ];
}

export default function LetterList() {
  const [data, setData] = useState<List[]>([]);

  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      const fetchedData = await getData();
      setData(fetchedData);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="flex-1">
        <main className="flex flex-col gap-4 m-4 p-4 md:gap-8 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">Letter List</h2>

          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-5 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search Letters..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-2/3"
                />
              </div>
            </form>
          </div>

          {/* Render the DataTable with fetched data */}
          <DataTable<List, keyof List> columns={columns} data={data} />
        </main>
      </div>
    </>
  );
}
