import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowIcon } from '../../assets/Icons'
import FoundItemCard from '../../components/common/FoundItemCard'

const LostItems = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-1 mb-5 text-sm text-gray-400 hover:text-white"
      >
        <ArrowIcon />
        Back to Dashboard
      </button>

      <h1 className="text-2xl font-semibold">
        All lost Items
      </h1>

      <div className="flex min-w-0 flex-col gap-3 mt-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
          <div key={id} className="min-w-0">
            <FoundItemCard />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LostItems