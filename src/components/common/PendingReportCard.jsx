import React from 'react'

const PendingReportCard = () => {

    const item =
    {
        id: "101",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=200",
        name: "AirPods Case",
        type: "Found",
        location: "Canteen",
        date: "Oct 5, 2026",
        description: "White AirPods case found on table.",
    }


    return (
        <div className='bg-[#141B26] p-3 rounded-xl sm:p-3'>
            {/* Image and details */}
            <div className="flex items-start gap-4">
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#252b32]">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-semibold leading-6">
                            {item.name}
                        </h3>

                        <button
                            type="button"
                            aria-label={`More options for ${item.name}`}
                            className="shrink-0 rounded-lg text-xl leading-5 text-gray-400 hover:bg-white/10 hover:text-white cursor-pointer"
                        >
                            ⋮
                        </button>
                    </div>

                    <p className="mt-0.5 text-sm text-gray-300">
                        {item.type} · {item.location}
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                        {item.date}
                    </p>

                    <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-400">
                        {item.description}
                    </p>
                </div>
            </div>

            {/* Action buttons */}
            <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                    type="button"
                    className="cursor-pointer rounded-xl bg-emerald-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500 active:scale-[0.98]"
                >
                    Verify
                </button>

                <button
                    type="button"
                    className="cursor-pointer rounded-xl bg-red-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-red-500 active:scale-[0.98]"
                >
                    Reject
                </button>
            </div>

        </div>

    );


}

export default PendingReportCard