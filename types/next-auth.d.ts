import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: User;
  }
  
  interface User{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  }
}
