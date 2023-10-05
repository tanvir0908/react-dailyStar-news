/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import smallImage1 from "../../../assets/1.png";
import smallImage2 from "../../../assets/2.png";
import smallImage3 from "../../../assets/3.png";
import { NavLink } from "react-router-dom";

export default function LeftSideNav({ setCategoryID }) {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(0);

  const handleClickNavbar = (id) => {
    setCategoryID(id);
    setActive(id);
  };

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
          // <button
          //   onClick={() => handleClickNavbar(category.id)}
          //   className={`block text-2xl font-medium px-10 py-4`}
          //   key={category.id}
          // >
          //   {category.name}
          // </button>
          <NavLink
            onClick={() => handleClickNavbar(category.id)}
            className={`block text-2xl font-medium px-10 py-4  hover:bg-[#E7E7E7] rounded-lg`}
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
          date={"Jan 4, 2022"}
          category={"Sport"}
        />
        <SmallCard
          image={smallImage2}
          title={"Bayern Slams Authorities Over Flight Delay to Club World Cup"}
          date={"Jan 4, 2022"}
          category={"Sport"}
        />
        <SmallCard
          image={smallImage3}
          title={"Bayern Slams Authorities Over Flight Delay to Club World Cup"}
          date={"Jan 4, 2022"}
          category={"Sport"}
        />
      </div>
    </div>
  );
}
