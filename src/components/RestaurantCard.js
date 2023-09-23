const RestaurantCard = ({ img, name, rating, cuisines, away }) => {

  // const {user} = useContext(userContext);

  return (
    <div className="w-60 p-2 m-2 shadow-lg bg-pink-100 flex-wrap ">
      <img src={img} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{rating}</h4>
      <h4>{away} away</h4>
      {/* <h1 className="text-red-800 font-bold">{user.name}</h1> */}
    </div>
  );
};

export default RestaurantCard;