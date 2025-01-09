"use client";

import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";
import { ReactElement } from "react";
import { AuthContext } from "./auth/contexts/auth-context";

interface ProviderProps {
  children: ReactElement[];
  authenticated: boolean;
}

export default function Providers({ children, authenticated }: ProviderProps) {
  return(
    // NextJS integration with MUI. Designed to work with Nextjs AppRouter
    <AppRouterCacheProvider>
      {/* All the child components can get authentication status from this context */}
      <AuthContext.Provider value={authenticated}>
        {children}
      </AuthContext.Provider>
    </AppRouterCacheProvider>
  );
}