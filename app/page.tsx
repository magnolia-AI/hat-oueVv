import { HatCard } from "@/components/hat-card";
import { hats } from "@/lib/hats";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Welcome to the Hat Store!</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {hats.map((hat) => (
          <HatCard key={hat.id} hat={hat} />
        ))}
      </div>
    </div>
  );
}

