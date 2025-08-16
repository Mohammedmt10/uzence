import DataTables from "../components/ui/dataTables";
import  { useState } from "react";

interface User {
  id: number;
  name: string;
  age: number;
}

const sampleData: User[] = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
];

const columns = [
  { key: "name", title: "Name", dataIndex: "name" as keyof User },
  { key: "age", title: "Age", dataIndex: "age" as keyof User },
];

export default {
  title: "Components/DataTables",
  component: DataTables,
};

export const Basic = () => {
  const [selectedRows, setSelectedRows] = useState<User[]>([]);

  return (
    <div style={{ maxWidth: 600 }}>
      <DataTables<User>
        data={sampleData}
        columns={columns}
        selectable
        onRowSelect={(rows) => setSelectedRows(rows)}
      />
      <pre>Selected Rows: {JSON.stringify(selectedRows, null, 2)}</pre>
    </div>
  );
};
