// app/@modal/(.)photos/[id]/page.tsx
"use client";
import { useRouter } from "next/navigation";

export default function PhotoModal({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-xl rounded-2xl bg-white p-12 shadow-2xl">
        
        {/* Yellow Close Button from your screenshot */}
        <button 
          onClick={() => router.back()}
          className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-white font-bold hover:bg-yellow-500 transition-colors shadow-md"
        >
          ✕
        </button>

        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-slate-800">Photo ID</h2>
          <p className="text-xl text-slate-500 font-medium">Hello {params.id}</p>
        </div>
      </div>
    </div>
  );
}