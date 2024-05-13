import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const accessToken = request.cookies.get("access-token");
  if (request.nextUrl.pathname.endsWith("/login")) {
    if (accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  if (request.nextUrl.pathname.endsWith("/register")) {
    if (accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/list-company"],
};
