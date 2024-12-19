import ourServices2 from '/public/image/container-2.webp'
import { whyItems } from '@/constants/WhyItems'

export default function WhyChoos() {
    return (
        <section className="">
            <div className="relative">
                <div>
                    <img src={ourServices2} className="w-full h-auto rounded" alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                </div>
                <div className="absolute top-20 right-0 left-0 mx-auto space-y-3">
                    <h2 className="text-white text-4xl font-medium caption-top text-center">Why Choose SquareUp?</h2>
                    <p className="text-center text-sm text-Grey-90">
                    Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                {
                    whyItems.map((sItem) => {
                        return (
                            <div className="p-6 pb-24 flex flex-col gap-5 border border-neutral-800" key={sItem.id}>
                                <div className="flex items-center gap-2">
                                    <div className="size-14 bg-gradient-to-b from-[#242424] to-[#242424]  rounded-xl flex items-center justify-center text-Green-50 ">{sItem.icon}</div>
                                    <h2 className="text-white text-base font-medium">
                                        {sItem.title}
                                    </h2>
                                </div>
                                <div>
                                    <p className="text-sm text-Grey-60 line-clamp-6 leading-normal" style={{ wordBreak: "break-all" }}>
                                        {sItem.caption} 
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
