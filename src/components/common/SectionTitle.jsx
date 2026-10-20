import React from 'react'

const SectionTitle = ({ title, description, action }) => {
    return (
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
                <h2 className="text-xl font-semibold tracking-tight text-white">
                    {title}
                </h2>
                <p className="mt-1 text-sm text-slate-400">{description}</p>
            </div>
            {action}
        </div>
    );
}

export default SectionTitle