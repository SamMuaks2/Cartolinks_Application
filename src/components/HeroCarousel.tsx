"use client";

import Image from 'next/image'
import { useState } from 'react'


const slides = [
    {
        title: 'WAN 2.2',
        subtitle: 'WAN 2.2 Image generation',
        description: 'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.',
        // image: '/hero1.jpg'
        image: '/hero1-plain.png'
    },
    {
        title: 'FLUX.1 Krea',
        subtitle: 'Open Source Model',
        description: "We're making the weights to our FLUX.1 Krea model open-source.",
        image: '/hero2.jpg'
    }
]


export default function HeroCarousel() {
    const [idx, setIdx] = useState(0)


    return (
        <div className="relative">
            <div className="rounded-2xl overflow-hidden grid grid-cols-3 gap-4 bg-white dark:bg-slate-800 p-6 items-stretch">
                <div
                    // className="col-span-2 rounded-xl bg-gray-100 dark:bg-slate-700 p-6 flex flex-col justify-between bg-cover bg-center"
                    className="col-span-2 rounded-xl p-6 flex flex-col justify-between bg-cover bg-center"
                    style={{ backgroundImage: `url(${slides[idx].image})` }}
                >
                    <div>
                        {/* <div className="background-image w-full h-56 rounded-lg overflow-hidden relative">
                            <Image src={slides[idx].image} alt={slides[idx].title} fill style={{ objectFit: 'cover' }} />
                        </div> */}

                        <h2 className="mt-14 text-5xl font-bold tracking-tight text-center">{slides[idx].title}</h2>

                        <div className="mt-6 flex items-center gap-4">
                            <div>
                                <h4 className="mt-4 text-1xl font-bold">{slides[idx].subtitle}</h4>
                                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 max-w-prose">{slides[idx].description}</p>
                            </div>

                            <div className="mt-16">
                                <button className="bg-white dark:bg-slate-900 px-4 py-2 rounded-full shadow">Try {slides[idx].title}</button>
                                <div className="flex gap-2">
                                    {slides.map((_, i) => (
                                        <button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full ${i === idx ? 'bg-slate-900 dark:bg-white' : 'bg-slate-300 dark:bg-slate-600'}`}></button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 p-4 flex items-center justify-center">
                    <div className="w-full h-56 rounded-lg overflow-hidden relative">
                        <Image src={slides[idx].image} alt={slides[idx].title} fill style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        </div >
    )
}