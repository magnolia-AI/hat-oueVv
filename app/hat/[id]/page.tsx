import Image from 'next/image';
import { hats, Hat } from '@/lib/hats';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

type HatDetailPageProps = {
  params: {
    id: string;
  };
};

// Function to generate static paths for all hats
export async function generateStaticParams() {
  return hats.map((hat) => ({
    id: hat.id,
  }));
}

export default function HatDetailPage({ params }: HatDetailPageProps) {
  const hat = hats.find((h) => h.id === params.id);

  if (!hat) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Hat Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find the hat you're looking for.</p>
        <Button asChild>
          <Link href="/">Back to All Hats</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
          <Image
            src={hat.imageUrl}
            alt={hat.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {hat.isNew && (
            <Badge variant="destructive" className="absolute top-4 left-4 text-sm font-bold uppercase tracking-wide px-3 py-1.5 rounded-full">New</Badge>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">{hat.name}</h1>
          <p className="text-3xl font-extrabold text-gray-800 mb-6">${hat.price.toFixed(2)}</p>
          
          <div className="prose prose-lg text-gray-700 mb-6">
            <p>This is a fantastic {hat.name.toLowerCase()}. Crafted with the finest materials, it offers both style and comfort. Perfect for any occasion, whether you're dressing up or keeping it casual.</p>
            <p>Features:</p>
            <ul>
              <li>Premium quality fabric</li>
              <li>Comfortable fit</li>
              <li>Durable and long-lasting</li>
              <li>Stylish design</li>
            </ul>
          </div>
          
          <div className="flex items-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md">
              Add to Cart
            </Button>
            {/* Future: Quantity selector could go here */}
          </div>
          
          <div className="mt-8">
            <Button variant="outline" asChild>
              <Link href="/"> &larr; Back to All Hats</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

