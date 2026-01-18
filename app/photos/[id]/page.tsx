// app/photos/[id]/page.tsx
import Link from 'next/link';

export default function PhotoPage({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-10">
      {/* Back button to go home */}
      <Link 
        href="/" 
        className="mb-8 text-sm font-medium text-gray-500 hover:text-black transition-colors"
      >
        ← Back to Gallery
      </Link>

      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 p-20 shadow-sm">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Photo Detail View
          </h1>
          <p className="text-2xl text-slate-500">
            Currently viewing ID: <span className="text-yellow-500 font-bold">{params.id}</span>
          </p>
          
          {/* Large visual placeholder to match the grid style */}
          <div className="mt-10 mx-auto flex h-64 w-64 items-center justify-center rounded-2xl bg-gray-200 text-6xl font-bold text-gray-400">
            {params.id}
          </div>
        </div>
      </div>
    </main>
  );
}