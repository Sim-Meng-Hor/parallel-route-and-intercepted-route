// app/@modal/(.)photos/[id]/photo-modal.tsx
"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { getPhotoById } from "../../../data/photos";

export default function PhotoModal() {
  const router = useRouter();
  const params = useParams<{ id?: string | string[] }>();
  const id = Array.isArray(params?.id) ? params?.id[0] : params?.id;
  const photo = getPhotoById(id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
      <div className="relative w-full max-w-2xl rounded-xl bg-white p-8 shadow-2xl mx-4">
        <button
          onClick={() => router.back()}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-white font-bold transition-all shadow-sm hover:bg-yellow-500"
        >

        </button>

        {!photo ? (
          <p className="text-gray-700">Photo not found.</p>
        ) : (
          <div className="space-y-3">
            <div>
              <h2 className="text-xl font-bold text-gray-800">{photo.title}</h2>
              <p className="text-sm text-gray-500">Photo ID {photo.id}</p>
            </div>

            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(min-width: 1024px) 640px, (min-width: 640px) 90vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
