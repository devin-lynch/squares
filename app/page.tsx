'use client';
import Square from './_components/Square';

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="flex gap-4">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </main>
  );
}
