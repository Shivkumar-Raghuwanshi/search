import Search from "@/components/Search";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <div className=" bg-gray-50 w-full h-20 md:h-28 p-2 drop-shadow-lg">
      <div className="flex justify-between w-full items-center gap-2 px-3">
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

      <Search />
    </div>
  );
}
