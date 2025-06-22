
"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link
import { Hat } from "@/lib/hats";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type HatCardProps = {
  hat: Hat;
};

export function HatCard({ hat }: HatCardProps) {
  return (
    <Link href={`/hat/${hat.id}`} passHref legacyBehavior>
      <a className="block outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg">
        <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] h-full">
          <CardHeader className="p-0 relative">
            <div className="relative h-48 w-full">
              <Image
                src={hat.imageUrl}
                alt={hat.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {hat.isNew && (
              <Badge variant="destructive" className="absolute top-2 right-2 text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-full">New</Badge>
            )}
          </CardHeader>
          <CardContent className="flex-grow p-4">
            <CardTitle className="text-xl font-bold text-gray-800 mb-2">{hat.name}</CardTitle>
            <CardDescription className="mt-1 text-gray-600 text-sm line-clamp-2">
              A stylish and comfortable hat, perfect for any occasion.
            </CardDescription>
          </CardContent>
          <CardFooter className="flex items-center justify-between p-4 pt-0 mt-auto">
            <span className="text-2xl font-extrabold text-gray-900">${hat.price.toFixed(2)}</span>
            {/* The button click will be handled by the parent Link for navigation. 
                If specific button action is needed, stopPropagation might be required, 
                but for now, it's fine. Or it could be a separate "Quick Add" feature later. */}
            <Button 
              asChild={false} // Ensure this button doesn't act as a Link child
              onClick={(e) => {
                e.preventDefault(); // Prevent navigation when clicking the button itself
                // Add to cart logic would go here
                console.log(`Add ${hat.name} to cart`);
                // For now, let's just log. In a real app, this would trigger a cart update.
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </a>
    </Link>
  );
}

