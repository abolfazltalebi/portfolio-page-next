import ourServices from '/public/image/container-3.webp'
import { serviceItems } from '@/constants/ServicesItems'

export default function Services() {
    return (
        <section className="">
            <div className="relative">
                <div>
                    <img src={ourServices} className="w-full h-auto rounded" alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                </div>
                <div className="absolute top-20 right-0 left-0 mx-auto space-y-3">
                    <h2 className="text-white text-4xl font-medium caption-top text-center">our services</h2>
                    <p className="text-center text-sm text-Grey-90">
                        Transform your brand with our innovative digital solutions that captivate and engage your audience.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3">
                {
                    serviceItems.map((sItem) => {
                        return (
                            <div className="p-6 flex flex-col gap-5 border border-neutral-800" key={sItem.id}>
                                <div className="size-12 bg-gradient-to-b from-[#242424] to-[#242424] shadow rounded-xl flex items-center justify-center text-Green-50 ">{sItem.icon}</div>
                                <div className="space-y-4">
                                    <h2 className="text-white text-xl font-medium">
                                        {sItem.title}
                                    </h2>
                                    <p className="text-sm text-Grey-60 line-clamp-6 leading-normal" style={{ wordBreak: "break-all" }}>
                                        {sItem.caption}
                                    </p>
                                </div>
                                <div className="mt-14">
                                    <button className='w-full text-sm bg-Grey-20 text-white py-3 rounded-xl capitalize '>learn more</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
