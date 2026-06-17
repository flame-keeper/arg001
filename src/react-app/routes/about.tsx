import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="px-4 md:px-12 py-16 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow mb-6">
          <span className="eyebrow-dot" />
          About
        </p>
        <h1 className="heading-hero mb-8">Telesma について</h1>
        <div className="space-y-6 body-text">
          <p>
            Telesma は、シンプルで使いやすい検索体験を提供する Web アプリケーションです。温かみのあるエディトリアルなデザインの中で、必要な情報へスムーズにたどり着けます。
          </p>
          <p>
            このプロジェクトは Cloudflare Workers と React を使って構築されています。
          </p>
        </div>
        <div className="mt-10">
          <Link to="/" className="btn-primary no-underline">
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
