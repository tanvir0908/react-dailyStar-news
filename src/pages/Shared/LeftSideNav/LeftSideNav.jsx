import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SmallCard from "./SmallCard";
import smallImage1 from "../../../assets/1.png";
import smallImage2 from "../../../assets/2.png";
import smallImage3 from "../../../assets/3.png";

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
            to={`/category/${category.id}`}
            o
            className="block text-2xl font-medium px-10 py-4"
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
      <div>
        <SmallCard
          image={smallImage1}
          title={"Bayern Slams Authorities Over Flight Delay to Club World Cup"}
          date={'Jan 4, 2022'}
          category={'Sport'}
        />
        <SmallCard
          image={smallImage2}
          title={"Bayern Slams Authorities Over Flight Delay to Club World Cup"}
          date={'Jan 4, 2022'}
          category={'Sport'}
        />
        <SmallCard
          image={smallImage3}
          title={"Bayern Slams Authorities Over Flight Delay to Club World Cup"}
          date={'Jan 4, 2022'}
          category={'Sport'}
        />
      </div>
    </div>
  );
}
