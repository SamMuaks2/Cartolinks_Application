import { PhotoIcon, VideoCameraIcon, SparklesIcon } from '@heroicons/react/24/outline'


const items = [
    { title: 'Image', desc: 'Generate images with custom styles', badge: 'New', icon: PhotoIcon },
    { title: 'Video', desc: 'Generate videos with Hailuo, Pika', badge: '', icon: VideoCameraIcon },
    { title: 'Realtime', desc: 'Realtime AI rendering on a canvas', badge: '', icon: SparklesIcon },
    { title: 'Edit', desc: 'Add objects, change style, crop & more', badge: 'New', icon: PhotoIcon },
    { title: 'Motion Transfer', desc: 'Transfer motion to images and animate characters', badge: 'New', icon: SparklesIcon },
]


export default function GenerateGrid() {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Generate</h3>
                <a className="text-sm text-slate-500">Show all</a>
            </div>


            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {items.map((it) => (
                    <div key={it.title} className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-start gap-3">
                        <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-700">
                            <it.icon className="w-6 h-6 text-slate-600 dark:text-slate-200" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h4 className="font-medium">{it.title}</h4>
                                {it.badge ? <span className="text-xs text-white bg-blue-500 px-2 py-0.5 rounded">{it.badge}</span> : null}
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{it.desc}</p>
                        </div>
                        <div className="ml-auto">
                            <button className="text-sm bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded">Open</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}