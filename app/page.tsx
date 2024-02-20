import Square from './_components/Square';

export default function Home() {
  return (
    <main className="flex justify-center items-center border-2 border-yellow-300 min-h-screen">
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
