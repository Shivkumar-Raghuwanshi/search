import Search from "@/components/Search";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="fixed z-20 md:flex justify-between w-full bg-slate-100 items-center gap-2 px-3 hidden ">
        <Link href="/documentation" className="hidden md:block">
          <Button>Documentation</Button>
        </Link>
        <Link
          href={"https://github.com/Shivkumar-Raghuwanshi/search"}
          target="_blank"
          className="hidden md:block"
        >
          <FaGithub className="w-8 h-10" />
        </Link>
      </div>
      <div className="absolute md:py-10">
        <Search />
      </div>
    </div>
  );
}
