"use client";

import Image from "next/image";
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
import { Badge } from "@/components/ui/badge"; // Import Badge component

type HatCardProps = {
  hat: Hat;
};

export function HatCard({ hat }: HatCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
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
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <span className="text-2xl font-extrabold text-gray-900">${hat.price.toFixed(2)}</span>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}

