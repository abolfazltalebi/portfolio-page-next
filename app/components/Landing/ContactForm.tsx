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
                        <div className="inline-flex items-center">
                            <label  className="flex items-center cursor-pointer relative" for="check-2">
                                <input type="checkbox"
                                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                                    id="check-2" />
                                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" strokeWidth="1">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label htmlFor=',' className="cursor-pointer ml-2 text-slate-600 text-sm" for="check-2">
                                Remember Me
                            </label>
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
