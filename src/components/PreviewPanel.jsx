import { Navbar } from "./ui/Navbar";
import { Card } from "./ui/Card";
import { Table } from "./ui/Table";

export default function PreviewPanel() {
  return (
    <div style={{ padding: "16px" }}>
      <Navbar title="Dashboard" />

      <Card title="Users">
        <Table
          columns={["Name", "Email"]}
          data={[
            { Name: "John", Email: "john@test.com" },
            { Name: "Alice", Email: "alice@test.com" }
          ]}
        />
      </Card>
    </div>
  );
}
