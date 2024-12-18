import AboutContainer from '/public/image/container-3.webp'
import { AboutSectionItems } from '~/constants/AboutContainerItems'

export default function AboutSection() {
    return (
        <section className="">
            <div className="relative">
                <div>
                    <img src={AboutContainer} className="w-full h-auto rounded" alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                </div>
                <div className="absolute top-20 right-0 left-0 mx-auto space-y-3">
                    <h2 className="text-white text-4xl font-medium caption-top text-center">What our Clients say About us</h2>
                    <p className="text-sm text-center px-8 text-Grey-90">
                        At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Heres what some of our satisfied clients have to say about their experience working with us                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                {
                    AboutSectionItems.map((AItem) => {
                        return (
                            <div className="p-6 flex flex-col gap-5 border border-neutral-800" key={AItem.id}>
                                <h2 className="text-lg font-medium text-Green-80 h-12">{AItem.title}</h2>
                                <p className="text-sm text-Grey-90 leading-normal line-clamp-3" style={{ wordBreak: "break-all" }}>
                                    {AItem.caption}
                                </p>
                                <div className="bg-Grey-15 border border-neutral-800 mt-12 p-2 rounded-lg flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <img src={AItem.image} alt="" />
                                        </div>
                                        <div className="space-y-1">
                                            <h2 className="text-Grey-90 text-sm">{AItem.userName}</h2>
                                            <p className='text-Grey-90/80 text-[12px]'>{AItem.job}</p>
                                        </div>
                                    </div>
                                    <div className=' bg-Grey-20 py-3 px-3 rounded-lg transition-all duration-300 hover:scale-105 '>
                                        <a href={AItem.website} className='text-white text-sm '>open website</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
