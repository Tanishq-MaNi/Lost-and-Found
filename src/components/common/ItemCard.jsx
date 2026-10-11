import { useNavigate } from "react-router-dom";

const ItemCard = () => {

  const navigate = useNavigate();


  const item = {
    id: "101",
    image:
      "https://www.themessycorner.in/cdn/shop/files/13_9af1caee-0bef-49bc-9306-df24647436e9.jpg?v=1781002689&width=800",
    name: "Wallet",
    type: "Found",
    location: "Library",
    date: "Oct 5, 2025",
    statusColor: "bg-amber-600",
    status: "Matched",
  };

  return (
    <article 
    onClick={()=>navigate('/user/claim-item')}
    className="flex min-w-0 items-center gap-3 rounded-xl border border-white/5 bg-[#171e27] p-3 transition-colors hover:bg-[#1b2430]">

      {/* Item image */}
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#222c38] sm:h-19 sm:w-19">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="block h-full w-full object-cover"
        />
      </div>

      {/* Item details */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-gray-100 sm:text-[15px]">
          {item.name}
        </h3>

        <p className="mt-1 truncate text-[13px] text-gray-400">
          {item.type} · {item.location}
        </p>

        <p className="mt-1 text-[13px] text-gray-400">
          {item.date}
        </p>
      </div>

      {/* Status */}
      <span
        className={`max-w-24 shrink-0 truncate rounded-full px-2 py-1.5 text-[10px] font-medium sm:px-3 sm:text-xs ${item.statusColor}`}
      >
        {item.status}
      </span>
    </article>
  );
};

export default ItemCard;
