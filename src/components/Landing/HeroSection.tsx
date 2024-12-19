import hSection from "/public/image/herosection.webp";

export default function HeroSection() {
  return (
    <section className="relative">
      <div>
        <img src={hSection} className="w-full h-auto" alt="hero section" />
      </div>
      <div className="absolute top-16 left-0 right-0 flex flex-col items-center justify-center gap-6">
        <h2 className="text-5xl text-white text-center font-medium">
          A Digital Product Studio
          that will Work
        </h2>
        <div className="bg-[#242424]/20 backdrop-blur-md inline-block px-6 py-4 rounded-xl border border-neutral-800">
          <div className="flex items-center gap-1 text-white">
            <p className="capitalize text-Grey-60">for</p>,
            <div className="bg-Grey-20 py-1.5 px-3 rounded-xl text-white capitalize">startups</div>,
            <div className="bg-Grey-20 py-1.5 px-3 rounded-xl text-white capitalize">Enterprise leaders</div>,
            <div className="bg-Grey-20 py-1.5 px-3 rounded-xl text-white capitalize">Media & Publishers</div>,
            <p className=" text-Grey-60">and</p>,
            <div className="bg-Grey-20 py-1.5 px-3 rounded-xl text-white capitalize">Social Good</div>,
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-[#242424]/20 backdrop-blur-md capitalize px-6 py-3 rounded-xl border border-neutral-800 text-center text-sm text-white">
            our works
          </button>
          <button className="bg-Green-50 capitalize px-5 py-3 rounded-xl text-center text-sm transition-all hover:bg-Green-60">
            contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
