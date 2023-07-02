const RestaurantCard = ({img,name,rating}) => {
    return (
      <div className="card">
        <img src={img} />
        <h2>{name}</h2>
        <h4>{rating} star</h4>
      </div>
    );
  };

export default RestaurantCard;