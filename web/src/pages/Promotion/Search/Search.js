import React, { useEffect, useState } from "react";
import PromotionCard from "components/Promotion/Card/Card";
import axios from "axios";

const PagesPromotionSearch = () => {
  const [promotion, setPromotion] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/promotions?_embed=comments")
      .then((response) => {
        setPromotion(response.data);
      });
  }, []);

  return (
    <div
      className="App"
      style={{
        maxWidth: 800,
        margin: "30px auto",
      }}
    >
      {promotion.map((promotion) => (
        <PromotionCard promotion={promotion} />
      ))}
    </div>
  );
};

export default PagesPromotionSearch;
