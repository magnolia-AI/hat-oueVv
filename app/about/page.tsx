
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center">
          About The Hat Hub
        </h1>
        <div className="prose prose-lg sm:prose-xl text-gray-700 mx-auto">
          <p className="lead text-xl text-gray-600 mb-8 text-center">
            Discover the passion and craftsmanship behind every hat we offer.
          </p>
          <figure className="my-8">
            {/* You can replace this with an actual image of your storefront or team */}
            <img 
              src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Artisan crafting a hat" 
              className="rounded-lg shadow-xl mx-auto w-full h-auto object-cover"
              style={{ maxHeight: '400px' }}
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              Crafting unique hats with dedication.
            </figcaption>
          </figure>
          <p>
            Welcome to The Hat Hub, your premier destination for high-quality, stylish headwear. 
            Founded in 2024, our mission is to bring you a curated collection of hats that 
            not only look great but also feel amazing to wear. We believe that a hat is more 
            than just an accessory; it's a statement, a part of your identity.
          </p>
          <p>
            Our journey began with a simple love for hats and a desire to share that passion 
            with the world. We partner with skilled artisans and reputable manufacturers who 
            share our commitment to quality and craftsmanship. From classic fedoras and cozy 
            beanies to trendy baseball caps and elegant sun hats, each piece in our collection 
            is carefully selected to ensure it meets our high standards.
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-4">Our Values</h2>
          <ul>
            <li><strong>Quality Craftsmanship:</strong> We source hats made from the finest materials with meticulous attention to detail.</li>
            <li><strong>Unique Styles:</strong> Our collection features a diverse range of designs to suit every taste and occasion.</li>
            <li><strong>Customer Satisfaction:</strong> Your happiness is our priority. We strive to provide excellent service and a seamless shopping experience.</li>
            <li><strong>Passion for Hats:</strong> We genuinely love what we do, and we hope our passion shines through in every product we offer.</li>
          </ul>
          <p>
            Thank you for choosing The Hat Hub. We're excited to help you find your perfect hat!
          </p>
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/">Explore Our Hats</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

