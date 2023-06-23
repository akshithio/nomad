import NextAuth from "next-auth";
import { authOptions } from "@component/server/auth";

export default NextAuth(authOptions);
