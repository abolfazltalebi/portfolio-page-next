import HeroSectionImage from "./HeroSectionImage";
import HeroSectionTexts from "./HeroSectionTexts";

export default function HeroSection() {
    return (
        <div className="flex">
            <HeroSectionTexts />
            <HeroSectionImage />
        </div>
    )
}
