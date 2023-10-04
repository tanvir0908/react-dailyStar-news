import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function LeftSideNav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-semibold">All Categories</h2>
      <div className="mt-5" id="left-nav">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}o
            className="block text-2xl font-medium px-10 py-4"
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
