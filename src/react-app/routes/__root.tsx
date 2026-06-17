import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SearchComponent } from "@/react-app/components/searchComponent";

const RootLayout = () => (
  <>
    <div className="min-h-screen bg-canvas text-ink font-sans antialiased flex flex-col">
      <div className="pt-6 px-4 md:px-12">
        <header className="max-w-7xl mx-auto">
          <nav
            className="flex items-center justify-between gap-4 md:gap-8 bg-white rounded-pill px-6 md:px-10 py-4 shadow-nav"
            aria-label="メインナビゲーション"
          >
            <Link
              to="/"
              className="text-xl font-medium tracking-[-0.02em] text-ink no-underline shrink-0"
            >
              Telesma
            </Link>

            <ul className="hidden md:flex items-center gap-12 list-none m-0 p-0">
              <li>
                <Link
                  to="/"
                  className="nav-link [&.active]:opacity-100 [&:not(.active)]:opacity-60"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="nav-link [&.active]:opacity-100 [&:not(.active)]:opacity-60"
                >
                  About
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-3 ml-auto md:ml-0">
              <SearchComponent />
            </div>
          </nav>
        </header>
      </div>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-ink text-white mt-24 md:mt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-24 md:pb-36">
          <h2 className="text-3xl md:text-4xl font-medium leading-[1.22] tracking-[-0.02em] mb-12 md:mb-16 max-w-xl">
            いつでも、必要なときにここにいます
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.04em] text-slate mb-4">
                サービス
              </h3>
              <ul className="list-none m-0 p-0 space-y-3">
                <li>
                  <Link to="/" className="text-sm text-white/90 no-underline hover:text-white">
                    検索
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.04em] text-slate mb-4">
                会社情報
              </h3>
              <ul className="list-none m-0 p-0 space-y-3">
                <li>
                  <Link to="/about" className="text-sm text-white/90 no-underline hover:text-white">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.04em] text-slate mb-4">
                サポート
              </h3>
              <ul className="list-none m-0 p-0 space-y-3">
                <li>
                  <span className="text-sm text-white/90">ヘルプセンター</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.04em] text-slate mb-4">
                法的情報
              </h3>
              <ul className="list-none m-0 p-0 space-y-3">
                <li>
                  <span className="text-sm text-white/90">プライバシーポリシー</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/30 mt-12 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-slate m-0">© 2026 Telesma</p>
            <p className="text-sm text-slate m-0">プライバシー · 利用規約</p>
          </div>
        </div>
      </footer>

      {process.env.NODE_ENV === "development" && <TanStackRouterDevtools />}
    </div>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
