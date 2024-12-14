import { HeaderItems } from "@/constants/HeaderItems";
import { Link, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between md:px-[60px] lg:px-[160px] py-4">
      {/* logo */}
      <div>
        <h2 className="text-xl text-Purple-50 font-medium">Portfolio page</h2>
      </div>
      <div className="flex items-center gap-6">
        <nav>
          <ul className="flex items-center gap-6 text-sm">
            {HeaderItems.map((hItem) => {
              return (
                <li
                  key={hItem.id}
                  className="px-2 py-2 transition-all hover:bg-white font-normal text-Grey-20 capitalize rounded-md"
                >
                  <Link href={hItem.link}>{hItem.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* button */}
        <button className="bg-Purple-50 px-5 py-3 rounded-xl flex items-center gap-1 capitalize text-sm transition-all hover:bg-Purple-60">
          <Phone className="size-4" />
          call me
        </button>
      </div>
    </header>
  );
}
