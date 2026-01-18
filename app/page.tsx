// app/page.tsx
import Link from 'next/link';

export default function Home() {
  const photos = [1, 2, 3, 4, 5, 6];

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="grid grid-cols-3 gap-6">
        {photos.map((id) => (
          <Link key={id} href={`/photos/${id}`}>
            <div className="flex h-44 w-44 cursor-pointer items-center justify-center rounded-xl bg-gray-200 text-3xl font-semibold shadow-sm hover:bg-gray-300 transition-colors">
              {id}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}