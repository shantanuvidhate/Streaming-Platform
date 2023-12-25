import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function getSession() {
    console.log(authOptions)
    return await getServerSession(authOptions);
  }
  