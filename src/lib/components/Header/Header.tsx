import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className='flex items-center justify-between border-b border-b-slate-100 py-[20px] md:px-[80px] lg:px-[160px]'>
            <HeaderLogo />
            <div className="flex items-center gap-8">
                <Navbar />
                <HeaderButton />
            </div>
        </header>
    )
}
