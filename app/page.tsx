
import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">Home</h1>
      <Link href="/projects/list" className="text-blue-600 hover:text-blue-800 underline text-lg">
        See Projects
      </Link>
    </main>
  );
}
