import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Espresso",
      slug: "espresso",
      category: "coffee",
      image: "/images/Espresso_Thumb.png",
      price: 3,
      brand: "VN",
      rating: 4.5,
      numReviews: 8,
      countInStock: 37,
      description:
        "A strong and intense coffee shot with a rich, bold flavor and a layer of crema on top.",
      isFeatured: true,
      banner: "/images/Background.jpg",
    },
    {
      name: "Iced Cappuccino",
      slug: "iced_cappuccino",
      category: "coffee",
      image: "/images/Iced_Cappuccino_Thumb.png",
      price: 3,
      brand: "VN",
      rating: 4.5,
      numReviews: 8,
      countInStock: 45,
      description:
        "A delightful combination of espresso, milk, and ice, creating a refreshing and flavorful coffee drink with the characteristic richness of coffee and the creamy texture from milk.",
      isFeatured: true,
      banner: "/images/Background.jpg",
    },
    {
      name: "Coffee Frappe Cream",
      slug: "coffee_frappe_cream",
      category: "coffee",
      image: "/images/Coffee_Frappe_cream_Thumb.png",
      price: 3,
      brand: "VN",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description:
        "A strong and intense coffee shot with a rich, bold flavor and a layer of crema on top.",
      isFeatured: true,
      banner: "/images/Background.jpg",
    },

    {
      name: "Mellow Mango Superfuzions",
      slug: "mellow_mango_superfuzions",
      category: "juice_fruit",
      image: "/images/Mellow_Mango_Superfuzions_Thumb.jpg",
      price: 3,
      brand: "VN",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description:
        "A delightful and refreshing beverage known for its tropical twist and vibrant flavors.",
      isFeatured: true,
      banner: "/images/Background.jpg",
    },
    {
      name: "Watermelon Mint Refresher",
      slug: "watermelon_mint_refresher",
      category: "juice_fruit",
      image: "/images/Watermelon_Mint_Refresher_Thumb.jpg",
      price: 3,
      brand: "VN",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description:
        "A perfect choice for those seeking a cooling and hydrating experience, especially on hot days.",
      isFeatured: true,
      banner: "/images/Background.jpg",
    },
    {
      name: "Peach Hibiscus",
      slug: "peach_hibiscus",
      category: "juice_fruit",
      image: "/images/Peach_Hibiscus_Iced_Tea_Thumb_Fuze_Logo.jpg",
      price: 3,
      brand: "VN",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description:
        "A perfect choice for those seeking a cooling and hydrating experience, especially on hot days.",
      isFeatured: true,
      banner: "/images/Background.jpg",
    },
  ],
};

export default data;
