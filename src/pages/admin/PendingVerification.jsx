import React from 'react'
import { useState } from 'react'

import PendingReportCard from '../../components/common/PendingReportCard'

import { SearchIcon } from '../../assets/Icons'

const PendingVerification = () => {
    const [search, setSearch] = useState("")

    return (
        <>
            {/* Search */}
            <section>
                <label
                    htmlFor="item-search"
                    className="mb-2 block text-sm font-medium text-slate-300"
                >
                    Find Reports
                </label>

                <div className="flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-[#141b26] px-4 transition focus-within:border-sky-400/60 focus-within:ring-2 focus-within:ring-sky-400/10">
                    <SearchIcon size={20} colour="#94a3b8" />

                    <input
                        id="item-search"
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by item name..."
                        className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                    />
                </div>
            </section>

            {/* pending reports list */}
            <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-5">
                <PendingReportCard/>
                <PendingReportCard/>
                <PendingReportCard/>
                <PendingReportCard/>
                <PendingReportCard/>
            </section>

        </>
    )
}

export default PendingVerification