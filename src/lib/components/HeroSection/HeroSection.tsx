import Image from "next/image";
import hSection from "@/assets/image/hSection.webp";
import { ArrowBigRight, Phone } from "lucide-react";
export default function HeroSection() {
  return (
    <section className="flex flex-wrap md:flex-nowrap items-center px-[160px] mt-12">
      <div className="">
        <div className="bg-white px-3 py-2 rounded-md capitalize text-Grey-20 inline-block text-sm">
          <p>hello there</p>
        </div>
        <div className="space-y-4 my-4">
          <h2 className="text-5xl text-Grey-10 font-medium">
            Jeffery Cannon Welcome’s You!
          </h2>
          <p className="text-Grey-30 text-sm">
            I am a passionate and experienced web designer, dedicated to
            creating visually stunning and highly functional websites. Explore
            my portfolio to see the power of effective design in action
          </p>
        </div>
        <div className="flex items-center gap-4 my-4">
          <button className="bg-Purple-50 px-5 py-3 rounded-xl flex items-center gap-1 capitalize text-sm transition-all hover:bg-Purple-60">
            <Phone className="size-4" />
            book a call
          </button>
          <button className="bg-transparent px-5 py-3 rounded-xl flex items-center gap-1 capitalize text-sm transition-all  hover:bg-white text-black">
            view portfolio
            <ArrowBigRight className="size-4" />
          </button>
        </div>
        <div className="bg-white py-4 rounded-l-md flex items-center justify-around text-Grey-30 mt-12">
          <div className="flex flex-col gap-2">
            <p className="text-4xl text-Grey-10 font-bold">
              55<span className="text-Purple-50">+</span>
            </p>
            <p className="text-sm">Completed Projects</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-4xl text-Grey-10 font-bold">
              20<span className="text-Purple-50">+</span>
            </p>
            <p className="text-sm">Happy Customers</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-4xl text-Grey-10 font-bold">
              08<span className="text-Purple-50">+</span>
            </p>
            <p className="text-sm">Completed Projects</p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={hSection}
          width={500}
          height={500}
          alt={"hero section image"}
          className="w-full h-auto bg-auto"
        />
      </div>
    </section>  )
}
