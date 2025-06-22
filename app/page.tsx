import { HatCard } from "@/components/hat-card";
import { hats } from "@/lib/hats";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
        <Image
          src="https://images.unsplash.com/photo-1534234021-3e02876867b6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="A stylish person wearing a cool hat"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-lg">
            Hat Haven
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl drop-shadow-md">
            Discover Your Perfect Headwear
          </p>
          <button className="mt-8 rounded-full bg-white px-8 py-3 text-lg font-semibold text-gray-900 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50">
            Shop Now
          </button>
        </div>
      </section>

      {/* Hats Grid Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-10 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Our Latest Collection
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {hats.map((hat) => (
            <HatCard key={hat.id} hat={hat} />
          ))}
        </div>
      </section>
    </>
  );
}

