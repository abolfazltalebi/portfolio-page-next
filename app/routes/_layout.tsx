import AboutSection from "~/components/Landing/AboutSection";
import ActionSection from "~/components/Landing/ActionSection";
import FaqSection from "~/components/Landing/FaqSection";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";
import HeroSection from "~/components/Landing/HeroSection";
import Services from "~/components/Landing/Services";
import Trustedsection from "~/components/Landing/Trustedsection";
import WhyChoos from "~/components/Landing/WhyChoos";

export default function Layout() {
    return (
        <div>
            <Header />
            <main className="md:px-[60px] lg:px-[160px]">
                <HeroSection />
                <Trustedsection />
                <Services />
                <WhyChoos />
                <AboutSection />
                <FaqSection />
                <ActionSection/>
            </main>
            <Footer />
        </div>
    )
}
