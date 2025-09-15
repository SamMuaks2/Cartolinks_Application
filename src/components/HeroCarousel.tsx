"use client";

import Image from 'next/image'
import { useState } from 'react'


const slides = [
    {
        tag: 'NEW IMAGE MODEL',
        title: 'WAN 2.2',
        subtitle: 'WAN 2.2 Image generation',
        description: 'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.',
        image: '/hero1-plain.png'
    },
    {
        tag: 'OPEN SOURCE MODEL',
        title: 'Open Source Model',
        subtitle: 'FLUX.1 Krea',
        description: "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image",
        image: '/hero2-plain.png'
    }
]


export default function HeroCarousel() {
    const [idx, setIdx] = useState(0)


    return (
        <div className="relative">
            <div className="rounded-2xl overflow-hidden grid grid-cols-2 gap-4 bg-white dark:bg-slate-800 p-6 items-stretch">
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className="rounded-xl p-6 flex flex-col justify-between text-white relative"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

                        <div className="relative z-10">
                            <p className="mb-2 text-sm tracking-tight text-left">
                                {slide.tag}
                            </p>

                            <h2 className="mt-10 text-4xl font-bold tracking-tight text-center">
                                {slide.title}
                            </h2>

                            <div className="mt-6 flex gap-4">
                                <div className="flex-col">
                                    <h4 className="mt-2 text-lg font-bold">{slide.subtitle}</h4>
                                    <p className="mt-2 text-sm text-white max-w-prose">
                                        {slide.description}
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <button className="bg-white text-black dark:bg-slate-900 dark:text-white px-6 py-2 rounded-full shadow">
                                        Try {slide.title}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}