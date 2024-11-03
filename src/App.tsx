import "./styles.css";
import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// Define types for menu items and categories
interface MenuItem {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

interface CategoriesProps {
  categories: string[];
  filterItems: (category: string) => void;
}

const allCategories: string[] = [
  "all",
  ...Array.from(new Set(items.map((item: MenuItem) => item.category))),
];

console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(items);
  const [categories, setCategories] = useState<string[]>(allCategories);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter(
      (item: MenuItem) => item.category === category
    );
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
