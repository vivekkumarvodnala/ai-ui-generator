import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export default function ChatPanel() {
  return (
    <div style={{ padding: "16px" }}>
      <h3>AI Chat</h3>

      <Input placeholder="Describe your UI..." />

      <Button label="Generate" />
    </div>
  );
}
