// app/page.tsx
import Image from "next/image";
import Link from "next/link";

import { photos } from "./data/photos";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {photos.map((photo) => (
            <Link key={photo.id} href={`/photos/${photo.id}`} scroll={false}>
              <div className="group relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-200 shadow-sm transition-all duration-300 hover:shadow-md">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
                  {photo.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
