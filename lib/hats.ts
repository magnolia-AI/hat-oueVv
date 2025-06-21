
export type Hat = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  isNew?: boolean; // Optional property for new hats
};

export const hats: Hat[] = [
  {
    id: "1",
    name: "Classic Fedora",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1570823604106-c364191c850a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isNew: true,
  },
  {
    id: "2",
    name: "Sporty Baseball Cap",
    price: 25.00,
    imageUrl: "https://images.unsplash.com/photo-1588806509916-f3b145a96d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    name: "Elegant Sun Hat",
    price: 35.50,
    imageUrl: "https://images.unsplash.com/photo-1601004818610-d8869105b07c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isNew: true,
  },
  {
    id: "4",
    name: "Cozy Beanie",
    price: 18.75,
    imageUrl: "https://images.unsplash.com/photo-1576871337036-32860c231795?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    name: "Stylish Beret",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1596700683058-20835f839218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    name: "Adventure Bucket Hat",
    price: 22.00,
    imageUrl: "https://images.unsplash.com/photo-1610488663806-382a4664a784?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "7",
    name: "Vintage Top Hat",
    price: 75.00,
    imageUrl: "https://images.unsplash.com/photo-1596700683058-20835f839218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "8",
    name: "Casual Dad Hat",
    price: 20.00,
    imageUrl: "https://images.unsplash.com/photo-1507297619379-3d1425176157?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

