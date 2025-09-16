"use client";

import Image from "next/image";
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'


export default function Header() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])


    return (
        <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="krea AI Logo"
                        width={20}
                        height={20}
                        className="object-contain"
                    />

                    <Image
                        src="/placeholder-image.png"
                        alt="Profile Image"
                        width={30}
                        height={30}
                        className="ml-8 object-contain"
                    />

                    <div className="inline-flex text-sm px-3 py-2 rounded-full bg-slate-100 items-center justify-center text-black">benevolentnimblebat</div>

                    <a href="#">
                        <Image
                            src="/dropdown-icon.png"
                            alt="Profile Image"
                            width={10}
                            height={20}
                            className="pt-4 object-contain"
                        />
                    </a>
                </div>
            </div>

            <div className="flex px-4 py-2 rounded-full bg-slate-100 items-center justify-center gap-7">
                <a href="#">
                    <Image
                        src="/nav-home.png"
                        alt="home-icon"
                        width={30}
                        height={30}
                        className="object-contain"
                    />
                </a>

                <a href="#">
                    <Image
                        src="/nav-image.png"
                        alt="image-icon"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </a>

                <a href="#">
                    <Image
                        src="/nav-video.png"
                        alt="video-icon"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </a>

                <a href="#">
                    <Image
                        src="/nav-enhance.png"
                        alt="enhancer-icon"
                        width={15}
                        height={15}
                        className="object-contain"
                    />
                </a>

                <a href="#">
                    <Image
                        src="/nav-realtime.png"
                        alt="realtime-icon"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </a>

                <a href="#">
                    <Image
                        src="/nav-edit.png"
                        alt="edit-icon"
                        width={10}
                        height={10}
                        className="object-contain"
                    />
                </a>

                <a href="#">
                    <Image
                        src="/nav-gallery.png"
                        alt="storage-icon"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </a>
            </div>


            <div className="flex items-center gap-3">
                <nav className="hidden md:flex gap-4 text-sm text-slate-600 dark:text-slate-300">
                    <button className="py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">Gallery</button>
                    <button className="py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">Support</button>
                </nav>


                <div className="flex items-center gap-2">
                    {mounted ? (
                        <button
                            aria-label="Toggle Theme"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800"
                        >
                            {theme === 'dark' ? (
                                <SunIcon className="w-5 h-5 text-yellow-400" />
                            ) : (
                                <MoonIcon className="w-5 h-5 text-slate-600" />
                            )}
                        </button>
                    ) : null}


                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center text-white">S</div>
                </div>
            </div>
        </header>
    )
}