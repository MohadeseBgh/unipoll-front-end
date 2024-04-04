import { Inter } from "next/font/google";
import Login from "@/pages/login";
import Header from "@/components/header";
import Professor from "@/components/professor";
import Search from "@/components/search";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <>
          <div className={"w-screen h-screen bg-white"} >
                  <Search/>
          </div>
      </>
  );
}
