import type { NextRequest } from 'next/server'
import {withAuth} from "@kinde-oss/kinde-auth-nextjs/middleware";
import { KindeState } from '@kinde-oss/kinde-auth-nextjs/types';

export default withAuth(async function middleware(request: NextRequest & {kindeAuth: {user: KindeState["user"], token: Record<string, any>}}) {
  console.log(request.kindeAuth.token);
});


// See "Matching Paths" below to learn more
export const config = {
  matcher: '/doctors/:path*',
}