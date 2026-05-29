
import { createFileRoute } from "@tanstack/react-router";

export function Index() {
  return (
    <div className="p-2">
      <h1>検索テスト</h1>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});
