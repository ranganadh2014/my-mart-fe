import { NextRequest, NextResponse } from "next/server";
import { unProtectedRoutes } from "./app/common/constants/routes";

export function middleware(request: NextRequest) {

    //check whether authentication token present in the cookies
    const auth = request.cookies.get("Authentication")?.value;

    //Not authenticated 
    // & requested URL path is not in the unprotected routes list
    if(!auth 
        && !unProtectedRoutes.some(
            routePrefix => request.nextUrl.pathname.startsWith(routePrefix.path)
        )
    ) {
        // Redirect to login route
        return Response.redirect(new URL("/auth/login", request.url));
    }

    // Allow the request to proceed if authenticated or accessing an unprotected route
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
  };