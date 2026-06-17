import { createFileRoute, Link } from "@tanstack/react-router";

function Index() {
  return (
    <div className="px-4 md:px-12 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <section className="relative">
          <p
            className="absolute -top-8 md:-top-16 left-0 right-0 text-[4rem] md:text-[6rem] lg:text-[8rem] font-medium leading-none tracking-[-0.02em] text-ghost-watermark select-none pointer-events-none overflow-hidden whitespace-nowrap"
            aria-hidden="true"
          >
            SEARCH
          </p>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="eyebrow mb-6">
                <span className="eyebrow-dot" />
                検索
              </p>
              <h1 className="heading-hero mb-8">
                知りたいことを、
                <br />
                すぐに見つける
              </h1>
            </div>

            <div className="lg:pt-8">
              <p className="body-text mb-8 max-w-md">
                Telesma の検索機能を使って、必要な情報に素早くアクセスできます。上部の検索バーからキーワードを入力してください。
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#search-input" className="btn-primary no-underline">
                  検索を始める
                </a>
                <Link to="/about" className="btn-secondary no-underline">
                  詳しく見る
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 md:mt-32 lg:mt-40">
          <div className="bg-canvas-lifted rounded-hero p-8 md:p-12 lg:p-16">
            <p className="eyebrow mb-4">
              <span className="eyebrow-dot" />
              使い方
            </p>
            <h2 className="heading-section mb-6">シンプルな3ステップ</h2>
            <ol className="body-text m-0 pl-5 space-y-4 max-w-2xl">
              <li>上部ナビの検索バーにキーワードを入力</li>
              <li>Enter キーまたは「検索」ボタンをクリック</li>
              <li>結果一覧から目的のリンクを選択</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});
