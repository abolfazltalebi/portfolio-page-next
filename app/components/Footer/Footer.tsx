import { HeaderItems } from "~/constants/HeaderItems";
import logo from "/public/image/icon/abstract-design-logo.svg";
import {
  Facebook,
  Instagram,
  Linkedin,
  LocateIcon,
  Mail,
  Phone,
} from "lucide-react";
export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-12 md:px-[60px] lg:px-[180px] w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <img src={logo} className="size-12" alt="" />
          <p className="text-white text-base font-medium">SquareUp</p>
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
        <div className="border border-neutral-800 rounded-lg p-6 flex items-center justify-around gap-4">
          <p className="text-white">Stay Connected</p>
          <div className="size-12 bg-gradient-to-b from-[#242424] to-[#242424]/0 rounded-xl flex items-center justify-center text-Green-70 ">
            <Facebook />
          </div>
          <div className="size-12 bg-gradient-to-b from-[#242424] to-[#242424]/0 rounded-xl flex items-center justify-center text-Green-70 ">
            <Instagram />
          </div>
          <div className="size-12 bg-gradient-to-b from-[#242424] to-[#242424]/0 rounded-xl flex items-center justify-center text-Green-70 ">
            <Linkedin />
          </div>
        </div>
      </div>
      <div className="my-10 border border-neutral-800"></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border-b border-neutral-800 pb-2">
            <Mail className="size-4 text-Green-70" />
            <a href="mailto:hello@squareup.com" className="text-white">hello@squareup.com</a>
          </div>
          <div className="flex items-center gap-2 border-b border-neutral-800 pb-2">
            <Phone className="size-4 text-Green-70" />
            <a href="phone:+98993121232321" className="text-white">+98993121232321</a>
          </div>
          <div className="flex items-center gap-2 border-b border-neutral-800 pb-2">
            <LocateIcon className="size-4 text-Green-70" />
            <p className="text-white">Somewhere in the World</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-neutral-700">
            © 2023 SquareUp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
