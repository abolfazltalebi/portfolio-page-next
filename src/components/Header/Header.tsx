import { HeaderItems } from "@/constants/HeaderItems";
import logo from '@/image/icon/abstract-design-logo.svg'

export default function Header() {
  return (
    <header className="flex items-center justify-between md:px-[60px] lg:px-[160px] py-4 bg-Grey-15">
      {/* logo */}
      <div className="flex items-center gap-1">
        <img src={logo} className="size-8" alt="" />
        <p className="text-white text-sm capitalize">square up</p>
      </div>
      <nav className="hidden md:inline">
        <ul className="flex items-center gap-6 text-sm">
          {HeaderItems.map((hItem) => {
            return (
              <li
                key={hItem.id}
                className="px-2 py-2 transition-all hover:bg-Grey-20 font-normal text-white capitalize rounded-md"
              >
                <a href={hItem.link}>{hItem.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* button */}
      <button className="bg-Green-50  px-5 py-3 rounded-xl text-center text-sm transition-all hover:bg-Green-60">
        Contact Us
      </button>

    </header>
  );
}
