import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SearchComponent } from "@/react-app/components/searchComponent";

const RootLayout = () => (
  <>
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <header className="h-16 border-b border-slate-200 bg-white flex flex-justify-between items-center px-6">
        <nav className="flex justify-between w-auto gap-4">
          <h1 className="text-xl font-black text-blue-600 tracking-tight">
            Telesma
          </h1>
          <ul className="flex space list-none gap-4">
            <li>
              <Link to="/" className="[&.active]:font-bold color-inherit decoration-none ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="[&.active]:font-bold color-inherit decoration-none">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <SearchComponent />
      </header>
      <Outlet />{" "}
      {process.env.NODE_ENV === "development" && <TanStackRouterDevtools />}
    </div>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
