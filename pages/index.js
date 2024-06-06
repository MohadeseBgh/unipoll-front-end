import { Inter } from "next/font/google";
import Login from "@/pages/login";
import Header from "@/components/header";
import Search from "@/components/search";
import {useEffect} from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    useEffect(() => {
        localStorage.setItem('jwtToken',null);
    }, []);
  return (
      <>
          <div className={"w-screen h-screen bg-white"} >
                  <Login/>
          </div>
      </>
  );
}
