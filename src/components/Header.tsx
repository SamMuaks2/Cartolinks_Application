"use client";

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
                <div className="w-10 h-10 bg-slate-800 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-slate-800 font-bold">KA</div>
                <div>
                    <h1 className="text-lg font-semibold">krea AI</h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400">curated by Mobbin</p>
                </div>
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