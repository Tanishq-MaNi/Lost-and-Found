import React from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCard from '../../components/common/ItemCard'

const LostItems = () => {
      const navigate = useNavigate();

  return (
    <div className="p-5 max-w-350 mx-auto text-white sm:p-6">
        <button
        type="button"
        onClick={() => navigate("/user")}
        className="mb-5 text-sm text-gray-400 hover:text-white"
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-2xl font-semibold">
        All lost Items
      </h1>

      <div className="flex min-w-0 flex-col gap-3 mt-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
            <div key={id} className="min-w-0">
              <ItemCard />
            </div>
          ))}
        </div>

    </div>
  )
}

export default LostItems