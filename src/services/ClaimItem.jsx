import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import FoundItemCard from "../components/common/FoundItemCard";
import { ArrowIcon } from "../assets/Icons";

const ClaimItem = () => {
 const navigate = useNavigate();

    const [reason, setReason] = useState(
        "This is my phone. It has a small scratch on the back and a transparent case."
    );
    const [proofImages, setProofImages] = useState([]);
    const fileInputRef = useRef(null);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files || []);
        const newImages = files.map((file) => ({
            id: `${file.name}-${file.lastModified}-${Math.random()}`,
            file,
            preview: URL.createObjectURL(file),
        }));

        setProofImages((prev) => [...prev, ...newImages]);
        e.target.value = "";
    };

    const removeImage = (id) => {
        setProofImages((prev) => {
            const image = prev.find((img) => img.id === id);
            if (image) URL.revokeObjectURL(image.preview);
            return prev.filter((img) => img.id !== id);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!reason.trim()) {
            alert("Please provide a reason for claiming this item.");
            return;
        }

        // Connect this to your backend claim API.
        console.log({
            itemId: "item-101",
            reason,
            proofFiles: proofImages.map((image) => image.file),
        });
    };

    return (
        <div className="">
            <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="flex items-center gap-1 mb-5 text-sm text-gray-400 hover:text-white"
            >
                <ArrowIcon />
                Back to Dashboard
            </button>

            <h1 className="text-2xl font-semibold">
                Claim Item
            </h1>

            {/* item details  */}
            <section>
                {/* <h1>
                    Item Details
                </h1>
                <div>

                </div> */}
                <FoundItemCard />
            </section>

            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">

                {/* Claim reason */}
                <div>
                    <label
                        htmlFor="claim-reason"
                        className="mb-2 block text-sm"
                    >
                        Reason for Claim
                    </label>

                    <textarea
                        id="claim-reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        placeholder="Describe the item and explain why it belongs to you..."
                        required
                        rows={3}
                        className="w-full resize-y rounded-lg border border-white/10 bg-[#19202A] p-3 outline-none focus:border-sky-500"
                    />
                </div>

                {/* Proof upload */}
                <div>
                    <label
                        className="mb-2 block text-sm">
                        Upload Proof (Optional)
                    </label>

                    <div className="flex flex-wrap gap-2">
                        {proofImages.map((image) => (
                            <div
                                key={image.id}
                                className="group relative h-16 w-16 overflow-hidden rounded-lg border border-[#343c46]"
                            >
                                <img
                                    src={image.preview}
                                    alt="Claim proof"
                                    className="h-full w-full object-cover"
                                />

                                <button
                                    type="button"
                                    onClick={() => removeImage(image.id)}
                                    aria-label="Remove proof image"
                                    className="absolute right-1 top-1 rounded-full bg-black/75 px-1.5 text-xs text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                                >
                                    ×
                                </button>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            aria-label="Add proof image"
                            className="flex h-16 w-16 items-center justify-center rounded-lg border border-dashed border-[#414953] bg-[#10151b] text-2xl font-light text-gray-300 transition hover:border-blue-500 hover:bg-[#1b2430]"
                        >
                            +
                        </button>

                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            multiple
                            capture="environment"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </div>

                    <p className="mt-1.5 text-[9px] text-gray-500">
                        Add photos that help verify your ownership.
                    </p>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className=" rounded-lg bg-sky-600 p-3 font-medium transition hover:bg-sky-500"
                >
                    Submit Claim
                </button>
            </form>

        </div>

    );
};

export default ClaimItem;
