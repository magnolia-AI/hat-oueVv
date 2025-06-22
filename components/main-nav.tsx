
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Import usePathname

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button"; // For potential mobile menu toggle
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // For mobile menu
import { Menu } from 'lucide-react'; // Hamburger icon

const navLinks = [
  { href: "/", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }, // Assuming a contact page might be added later
];

export function MainNav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">🎩 Hat Haven</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex flex-grow">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      pathname === link.href ? "bg-accent text-accent-foreground" : ""
                    )}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          <Link href="/cart" className="text-sm font-medium hover:text-primary hidden md:block">
            🛒 Cart (0) {/* Placeholder cart */}
          </Link>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link 
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold mb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  🎩 Hat Haven
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium",
                      pathname === link.href ? "text-primary bg-accent" : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link 
                  href="/cart"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    pathname === "/cart" ? "text-primary bg-accent" : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                  )}
                >
                  🛒 Cart (0)
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

