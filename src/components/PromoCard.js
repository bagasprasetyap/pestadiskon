import React from "react";

const PromoCard = promos => {
  console.log(promos.promos[0]);
  return (
    <div>
      {promos.promos.map(promo => {
        return (
          <div className="card col l4 medium " key={promo.id}>
            <div className="card-image waves-effect waves-block waves-light">
              <img alt="gambar" className="activator" src={promo.image_url} />
            </div>
            <div className="card-content">
              <span
                className="card-title activator black-text"
                style={{
                  fontSize: "10pt",
                  fontWeight: "bold"
                }}
              >
                {promo.shop_name}
              </span>
              <h5
                style={{
                  marginTop: "5px",
                  color: promo.provider === "ovo" ? "yellow" : "blue"
                }}
              >
                {promo.provider}
              </h5>
              <p>
                <a
                  href={promo.merchant_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grey-text"
                >
                  Promo Link
                </a>
              </p>
            </div>
            <div className="card-reveal">
              <span
                className="card-title activator black-text"
                style={{ fontSize: "12pt", fontWeight: "bold" }}
              >
                {promo.shop_name}
              </span>
              <p>{promo.discount_detail}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PromoCard;
