import React, {useEffect, useState} from "react";

const PromotionSearch = () => {
  const [promotion, setPromotion] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/promotions?_embed=comments")
      .then((response) => {
        setPromotion(response.data);
      });
  }, []);
  return (
      <div>
         {promotion.map((promotion) => (
        <PromotionCard promotion={promotion} />
      ))}
      </div>
  )
  
};

export default PromotionSearch;
