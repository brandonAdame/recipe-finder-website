import Navbar from "@/components/Navbar";
import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

interface RootContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RootContext>()({
  component: () => (
    <div className="bg-slate-100/50">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </div>
  ),
});
