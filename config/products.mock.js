export const productsByCategory = {
  Hoodies: [
    {
      id: 1,
      name: "PokerMindset Hoodie",
      slug: "pokermindset-hoodie",
      category: "Hoodies",
      price: 2499,
      image: "/images/products/hoodie.jpg",
    },
    {
      id: 2,
      name: "All In Hoodie",
      slug: "all-in-hoodie",
      category: "Hoodies",
      price: 2599,
      image: "/images/products/hoodie.jpg",
    },
    {
      id: 3,
      name: "Grinder Hoodie",
      slug: "grinder-hoodie",
      category: "Hoodies",
      price: 2399,
      image: "/images/products/hoodie.jpg",
    },
    {
      id: 4,
      name: "Final Table Hoodie",
      slug: "final-table-hoodie",
      category: "Hoodies",
      price: 2699,
      image: "/images/products/hoodie.jpg",
    },
    {
      id: 5,
      name: "Ace High Hoodie",
      slug: "ace-high-hoodie",
      category: "Hoodies",
      price: 2499,
      image: "/images/products/hoodie.jpg",
    },
  ],

  "T-Shirts": [
    {
      id: 6,
      name: "All In Tee",
      slug: "all-in-tee",
      category: "T-Shirts",
      price: 1499,
      image: "/images/products/tshirt.jpg",
    },
    {
      id: 7,
      name: "Grind Mode Tee",
      slug: "grind-mode-tee",
      category: "T-Shirts",
      price: 1399,
      image: "/images/products/tshirt.jpg",
    },
    {
      id: 8,
      name: "Poker Life Tee",
      slug: "poker-life-tee",
      category: "T-Shirts",
      price: 1599,
      image: "/images/products/tshirt.jpg",
    },
    {
      id: 9,
      name: "Final Table Tee",
      slug: "final-table-tee",
      category: "T-Shirts",
      price: 1499,
      image: "/images/products/tshirt.jpg",
    },
    {
      id: 10,
      name: "Mindset Tee",
      slug: "mindset-tee",
      category: "T-Shirts",
      price: 1299,
      image: "/images/products/tshirt.jpg",
    },
  ],

  Caps: [
    {
      id: 11,
      name: "Grinder Cap",
      slug: "grinder-cap",
      category: "Caps",
      price: 999,
      image: "/images/products/cap.jpg",
    },
    {
      id: 12,
      name: "PokerMindset Cap",
      slug: "pokermindset-cap",
      category: "Caps",
      price: 1099,
      image: "/images/products/cap.jpg",
    },
    {
      id: 13,
      name: "All In Cap",
      slug: "all-in-cap",
      category: "Caps",
      price: 999,
      image: "/images/products/cap.jpg",
    },
    {
      id: 14,
      name: "Final Table Cap",
      slug: "final-table-cap",
      category: "Caps",
      price: 1199,
      image: "/images/products/cap.jpg",
    },
    {
      id: 15,
      name: "Ace Cap",
      slug: "ace-cap",
      category: "Caps",
      price: 899,
      image: "/images/products/cap.jpg",
    },
  ],

  Accessories: [
    {
      id: 16,
      name: "Poker Chips Set",
      slug: "poker-chips-set",
      category: "Accessories",
      price: 2999,
      image: "/images/products/chips.jpg",
    },
    {
      id: 17,
      name: "Poker Mug",
      slug: "poker-mug",
      category: "Accessories",
      price: 799,
      image: "/images/products/mug.jpg",
    },
    {
      id: 18,
      name: "Mindset Notebook",
      slug: "mindset-notebook",
      category: "Accessories",
      price: 599,
      image: "/images/products/notebook.jpg",
    },
    {
      id: 19,
      name: "Card Protector",
      slug: "card-protector",
      category: "Accessories",
      price: 499,
      image: "/images/products/chips.jpg",
    },
    {
      id: 20,
      name: "Poker Tote Bag",
      slug: "poker-tote-bag",
      category: "Accessories",
      price: 899,
      image: "/images/products/mug.jpg",
    },
  ],
};

export const allProducts = Object.values(productsByCategory).flat();

export const getProductBySlug = (slug) => {
  return allProducts.find((product) => product.slug === slug);
};
