import { useState } from 'react';

export default function ContactForm() {
    const [budget, setBudget] = useState(1);

    return (
        <section className="max-w-4xl mx-auto p-24 border-b border-neutral-800">
            <form action="" className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#242424] p-12 rounded-lg flex flex-col gap-2">
                        <label htmlFor="name" className="text-white">Full Name</label>
                        <input type="text" className="bg-transparent border-b border-neutral-800 pb-1 text-white outline-none" placeholder="Type Here" />
                    </div>
                    <div className="bg-[#242424] p-12 rounded-lg flex flex-col gap-2">
                        <label htmlFor="email" className="text-white">Email</label>
                        <input type="email" className="bg-transparent border-b border-neutral-800 pb-1 text-white outline-none" placeholder="Type Here" />
                    </div>
                </div>
                <div className="bg-[#242424] p-12 rounded-lg space-y-5">
                    <h2 className="text-white text-2xl font-medium">Why are you contacting us?</h2>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="webDesign" id="" className="size-4  bg-neutral-800 p-1 rounded border border-solid border-[#333333]  outline-none" />
                            <label htmlFor="webDesign" className="text-white">Web Design</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="Collaboration" id="Collaboration" className="bg-neutral-800 p-1 rounded border border-solid border-[#333333] outline-none" />
                            <label htmlFor="Collaboration" className="text-white">Collaboration</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="MobileAppDesign" id="MobileAppDesign" className="size-4  bg-neutral-800 p-1 rounded border border-solid border-[#333333]  outline-none" />
                            <label htmlFor="MobileAppDesign" className="text-white">Mobile App Design</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="Others" id="Others" className="size-4  bg-neutral-800 p-1 rounded border border-solid border-[#333333]  outline-none" />
                            <label htmlFor="Others" className="text-white">Others</label>
                        </div>
                       
                    </div>
                </div>
                <div className="bg-[#242424] p-6 space-y-5">
                    <h2 className="text-white text-2xl font-medium">Your Budget</h2>
                    <p className="text-sm text-white">
                        Slide to indicate your budget range
                    </p>
                    <input
                        type="range"
                        min="1"
                        max="100000"
                        className="w-full"
                        onChange={(e) => setBudget(Number(e.target.value))}
                    />
                    <span className="text-white">${budget}</span>
                </div>
            </form>
        </section>
    )
}
