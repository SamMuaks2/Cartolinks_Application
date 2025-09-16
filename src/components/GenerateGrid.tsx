import {
    PhotoIcon,
    VideoCameraIcon,
    BoltIcon,
    ArrowTrendingUpIcon,
    PencilSquareIcon,
    UserGroupIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline'


const items = [
    { title: 'Image', desc: 'Generate images with custom styles in Flux and Ideogram.', badge: 'New', icon: PhotoIcon, color: "bg-[#717171] text-white" },
    { title: 'Video', desc: 'Generate videos with Hailuo, Pika, Runway, Luma, and more.', badge: '', icon: VideoCameraIcon, color: "bg-yellow-100 text-yellow-600" },
    { title: 'Realtime', desc: 'Realtime AI rendering on a canvas Instant feedback loops.', badge: '', icon: BoltIcon, color: "bg-cyan-100 text-cyan-600" },
    { title: 'Enhancer', desc: 'Upscale and enhance images and videos up to 22k', badge: '', icon: ArrowTrendingUpIcon, color: "bg-slate-100 text-slate-700" },
    { title: 'Edit', desc: 'Add objects, change style, or expand photos and generations.', badge: 'New', icon: PencilSquareIcon, color: "bg-purple-100 text-purple-600" },
    { title: 'Video Lipsync', desc: 'Lip sync any video to any audio.', badge: 'New', icon: UserGroupIcon, color: "bg-green-100 text-green-600" },
    { title: 'Motion Transfer', desc: 'Transfer motion to images and animate characters.', badge: 'New', icon: SparklesIcon, color: "bg-black text-white" },
    { title: 'Train', desc: 'Teach Krea to replicate your style, products, or characters.', badge: '', icon: SparklesIcon },
]


export default function GenerateGrid() {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Generate</h3>
                <a className="text-sm text-slate-500 hover:underline" href="#">Show all</a>
            </div>


            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {items.map((it) => (
                    <div key={it.title} className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-start gap-3">
                        <div className={`p-3 rounded-lg ${it.color}`}>
                            <it.icon className="w-6 h-6" />
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <h4 className="font-medium">{it.title}</h4>
                                {it.badge ? (
                                    <span className="text-xs text-white bg-blue-500 px-2 py-0.5 rounded">
                                        {it.badge}
                                    </span>
                                ) : null}
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {it.desc}
                            </p>
                        </div>

                        <div className="ml-auto">
                            <button className="text-sm bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded">
                                Open
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}