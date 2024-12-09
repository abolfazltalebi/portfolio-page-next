import { HeaderItems } from '@/constants/HeaderItems'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <ul className='flex items-center gap-6'>
                {
                    HeaderItems.map((hItem) => {
                        return (
                            <li key={hItem.id} className='px-2 py-2 rounded-md font-medium capitalize text-sm transition-all hover:bg-white'>
                                <Link href={hItem.href}>{hItem.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
