import { NextRequest } from "next/server";
import { unauthenticatedRoutes } from "./app/common/constants/routes";

export function middleware(request: NextRequest) {
    //check authentication token in the cookie
    const auth = request.cookies.get("Authentication")?.value;

    if(!auth && !unauthenticatedRoutes.some((route)=> request.nextUrl.pathname.startsWith(route.path))) {
        return Response.redirect(new URL("/auth/login", request.url));
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
  };