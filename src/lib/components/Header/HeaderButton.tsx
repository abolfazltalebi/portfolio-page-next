import { PhoneIcon } from '@heroicons/react/16/solid'
import React from 'react'

export default function HeaderButton() {
    return (
        <div>
            <button className="flex items-center justify-center gap-2 text-sm capitalize rounded-md bg-Purple-50 w-[120px] h-[45px] text-white font-medium">
                <PhoneIcon className='size-6' />
                call me
            </button>
        </div>
    )
}
