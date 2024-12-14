import { SkillItems } from "@/constants/SkillsItems";
import HeroSection from "@/lib/components/HeroSection/HeroSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="space-y-4 px-[160px] my-12">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-Grey-10 text-2xl capitalize">creative skills</h2>
          <p className="text-Grey-30 text-sm">
            As a web designer, I possess a diverse set of skills and expertise
            to bring your web design visions to life
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {SkillItems.map((sItem) => {
            return (
              <div
                className="bg-white p-3 rounded-lg flex flex-col items-center justify-center gap-2"
                key={sItem.id}
              >
                <div className="size-16 rounded-xl bg-Purple-50  shadow-inner">
                  {sItem.icon}
                </div>
                <div className="space-y-2">
                  <h2 className="text-Grey-10 text-xl">{sItem.name}</h2>
                  <p className="text-sm text-Grey-20">
                    {sItem.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
