import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-[300px] flex flex-col">
      <CardHeader className="flex-grow">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>${product.price.toFixed(2)}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600">{product.description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}

