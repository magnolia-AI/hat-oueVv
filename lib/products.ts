export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Baseball Cap',
    price: 25.00,
    imageUrl: 'https://images.unsplash.com/photo-1577520023028-f6087b7a1d1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A timeless baseball cap for everyday wear.',
  },
  {
    id: '2',
    name: 'Stylish Beanie',
    price: 20.00,
    imageUrl: 'https://images.unsplash.com/photo-1612423284934-20a689240d2e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Keep warm with this comfortable and stylish beanie.',
  },
  {
    id: '3',
    name: 'Wide-Brim Sun Hat',
    price: 35.00,
    imageUrl: 'https://images.unsplash.com/photo-1534215754734-18e597746416?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Perfect for sunny days, offering excellent sun protection.',
  },
  {
    id: '4',
    name: 'Trucker Hat',
    price: 28.00,
    imageUrl: 'https://images.unsplash.com/photo-1588880331179-fd7387575d31?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A classic trucker hat with a breathable mesh back.',
  },
  {
    id: '5',
    name: 'Bucket Hat',
    price: 22.00,
    imageUrl: 'https://images.unsplash.com/photo-1620026605273-03099951664c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A trendy bucket hat for a casual look.',
  },
  {
    id: '6',
    name: 'Fedora Hat',
    price: 45.00,
    imageUrl: 'https://images.unsplash.com/photo-1543322106-959d81423408?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A stylish fedora for a sophisticated touch.',
  },
];

