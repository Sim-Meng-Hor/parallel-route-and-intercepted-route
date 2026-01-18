// app/page.tsx
import Link from 'next/link';

export default function Home() {
  const photos = [1, 2, 3, 4, 5, 6];

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <div className="grid grid-cols-3 gap-6">
          {photos.map((id) => (
            <Link key={id} href={`/photos/${id}`}>
              <div className="flex h-32 w-full items-center justify-center rounded-lg bg-gray-200 shadow-sm hover:shadow-md hover:bg-gray-300 transition-all duration-300 cursor-pointer">
                <span className="text-2xl font-semibold text-gray-600">{id}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}