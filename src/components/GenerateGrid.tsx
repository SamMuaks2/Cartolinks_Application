import Image from "next/image";


const items = [
    { title: 'Image', desc: 'Generate images with custom styles in Flux and Ideogram.', badge: 'New', icon: "/image-icon.png" },
    { title: 'Video', desc: 'Generate videos with Hailuo, Pika, Runway, Luma, and more.', badge: '', icon: "/video-icon.png" },
    { title: 'Realtime', desc: 'Realtime AI rendering on a canvas Instant feedback loops.', badge: '', icon: "/realtime-icon.png" },
    { title: 'Enhancer', desc: 'Upscale and enhance images and videos up to 22k', badge: '', icon: "/enhancer-icon.png" },
    { title: 'Edit', desc: 'Add objects, change style, or expand photos and generations.', badge: 'New', icon: "/edit-icon.png" },
    { title: 'Video Lipsync', desc: 'Lip sync any video to any audio.', badge: 'New', icon: "/lipsync-icon.png" },
    { title: 'Motion Transfer', desc: 'Transfer motion to images and animate characters.', badge: 'New', icon: "/motion-icon.png" },
    { title: 'Train', desc: 'Teach Krea to replicate your style, products, or characters.', badge: '', icon: "/train-icon.png" },
]


export default function GenerateGrid() {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Generate</h3>
                <a className="text-sm text-slate-500">Show all</a>
            </div>

            <div className="mt-4 grid grid-cols-4 p-y-6 gap-4">
                {items.map((it) => (
                    <div
                        key={it.title}
                        className="w-[290px] h-[68px] flex-shrink-0 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center gap-3"
                    >
                        <div
                            className="p-0 rounded-lg flex items-center justify-center"
                        >
                            <Image
                                src={it.icon}
                                alt={it.title}
                                width={30}
                                height={30}
                                className="object-contain"
                            />
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

                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                {it.desc}
                            </p>
                        </div>

                        <div>
                            <button
                                className=" text-xs bg-slate-100 dark:bg-slate-900 rounded flex justify-center items-center flex-shrink-0"
                                style={{ width: "31px", height: "16px", flexDirection: "column" }}
                            >
                                Open
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}