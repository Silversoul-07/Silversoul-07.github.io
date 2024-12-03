import Profile from "@/components/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Praveen's Linktree",
  description: "The home page",
};

export default function Home() {
  return (
      <Profile />
  );
}