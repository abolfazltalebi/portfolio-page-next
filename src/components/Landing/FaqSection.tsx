import {Plus, X} from 'lucide-react'

import { FaqSectionItems } from '@/constants/FaqSectionItems'
import Questions from '/public/image/container-3.webp'
import { useState } from 'react'

export default function FaqSection() {
    const [openAccordionId, setOpenAccordionId] = useState<number | null>(null)
    function handleOpen(id: number) {
        setOpenAccordionId(openAccordionId === id ? null : id)
    }
    return (
        <section className="">
            <div className="relative">
                <div>
                    <img src={Questions} className="w-full h-auto " alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                </div>
                <div className="absolute top-20 right-0 left-0 mx-auto space-y-3">
                    <h2 className="text-white text-4xl font-medium caption-top text-center">Frequently Asked Questions</h2>
                    <p className="text-center text-sm text-Grey-90">
                        Still you have any questions? Contact our Team via hello@squareup.com
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 ">
                {
                    FaqSectionItems.map((sItem) => {
                        return (
                            <div className={`p-6 flex flex-col gap-5 border border-neutral-800 transition-all duration-500 ${openAccordionId === sItem.id ? 'max-h-[200px]' : 'max-h-24 overflow-hidden'}`} key={sItem.id}>
                                <button className="flex items-center justify-between" onClick={() => handleOpen(sItem.id)}>
                                    <div className="flex items-center justify-normal gap-2 ">
                                        <div className="size-14 bg-gradient-to-b from-[#242424] to-[#242424]/0 rounded-xl flex items-center justify-center text-Green-70 ">{sItem.id}</div>
                                        <h2 className="text-Green-70 text-sm text-left font-medium">
                                            {sItem.title}
                                        </h2>
                                    </div>
                                    <div>
                                        <button>
                                            <Plus className={`size-5 text-white ${openAccordionId === sItem.id ? 'hidden' : ''}`} />
                                            <X className={`size-5 text-Green-70 ${openAccordionId === sItem.id ? '' : 'hidden'}`} />
                                        </button>
                                    </div>
                                </button>
                                {
                                    openAccordionId === sItem.id && (
                                        <div>
                                            <p className="text-sm text-Grey-60 leading-normal" style={{ wordBreak: "break-all" }}>
                                                {sItem.caption}
                                            </p>
                                        </div>
                                    )
                                }

                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
