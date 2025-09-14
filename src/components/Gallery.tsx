export default function Gallery() {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Gallery</h3>
                <a className="text-sm text-slate-500">See all</a>
            </div>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="h-36 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700"></div>
                ))}
            </div>
        </div>
    )
}