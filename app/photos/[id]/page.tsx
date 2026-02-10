// app/photos/[id]/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { getPhotoById } from "../../data/photos";

export default function PhotoPage() {
  const params = useParams<{ id?: string | string[] }>();
  const id = Array.isArray(params?.id) ? params?.id[0] : params?.id;
  const photo = getPhotoById(id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-10">
      <Link
        href="/"
        className="mb-8 text-sm font-medium text-gray-500 transition-colors hover:text-black"
      >
        {"<- Back to Gallery"}
      </Link>

      <div className="w-full max-w-3xl overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 p-10 shadow-sm">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Photo Detail View
          </h1>
          {!photo ? (
            <p className="text-lg text-slate-500">Photo not found.</p>
          ) : (
            <>
              <p className="text-lg text-slate-500">{photo.title}</p>
              <div className="relative mx-auto mt-8 aspect-square w-full max-w-xl overflow-hidden rounded-2xl">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(min-width: 1024px) 560px, (min-width: 640px) 80vw, 100vw"
                  className="object-cover"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
