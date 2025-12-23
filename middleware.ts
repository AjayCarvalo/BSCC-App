// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token as any;

    // Not logged in
    if (!token) {
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }

    const role = token.role as string | undefined;

    // Protect /admin routes
    if (pathname.startsWith("/admin")) {
      // only admins + membership admins + root admin
      if (!role || !["ROOT_ADMIN", "ADMIN", "MEMBERSHIP_ADMIN"].includes(role)) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    // Example: if you had /player-only routes, you could also check here
    // if (pathname.startsWith("/player")) {
    //   if (!role || role === "ROOT_ADMIN" || role === "ADMIN" || role === "MEMBERSHIP_ADMIN") {
    //     // maybe still allow admins, or restrict to PLAYER - up to you
    //   }
    // }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true, // we handle auth logic above
    },
  }
);

// Any routes listed here will pass through the middleware
export const config = {
  matcher: ["/admin/:path*", "/player/:path*"],
};
