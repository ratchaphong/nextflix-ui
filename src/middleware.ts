// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   // Match all pathnames except for
//   // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
//   // - … the ones containing a dot (e.g. `favicon.ico`)
//   matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
// };
import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default function middleware(req: NextRequest) {
  const localeCookie = req.cookies.get("NEXT_LOCALE")?.value;
  const url = req.nextUrl.pathname;

  console.log("🔍 Requested URL:", url);
  console.log("🌐 Cookie NEXT_LOCALE:", localeCookie);
  // console.log("📄 Headers", Object.fromEntries(req.headers.entries()));

  return createMiddleware(routing)(req);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
