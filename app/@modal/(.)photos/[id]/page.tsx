// app/@modal/(.)photos/[id]/page.tsx
"use client";
import { useRouter } from "next/navigation";

export default function PhotoModal({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    // Backdrop overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg rounded-xl bg-white p-10 shadow-2xl mx-4">
        
        {/* Yellow Close Button */}
        <button 
          onClick={() => router.back()}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-white font-bold hover:bg-yellow-500 transition-all shadow-sm"
        >
          ✕
        </button>

        <div className="space-y-1">
          <h2 className="text-xl font-bold text-gray-800">Photo ID</h2>
          <p className="text-gray-600">Hello {params.id}</p>
        </div>
      </div>
    </div>
  );
}