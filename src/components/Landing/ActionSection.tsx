import bgActionSection from '@/assets/image/container-1.webp'

export default function ActionSection() {
    return (
        <section>
            <div className="relative">
                <div>
                    <img src={bgActionSection} className="w-full h-auto " alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                </div>
                <div className="absolute top-[40%] right-0 left-0 mx-auto space-y-3">
                    <h2 className="text-white text-4xl font-medium caption-top text-center">Thank you for your Interest in SquareUp.</h2>
                    <p className="text-center text-sm text-Grey-90">
                        We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.
                    </p>
                    <div className='flex items-center justify-center'>
                        <button className="bg-Green-50 capitalize px-5 py-3 rounded-xl text-center text-sm transition-all hover:bg-Green-60">
                            Start Project
                        </button>
                    </div> 
                </div>
            </div>
        </section>
    )
}
