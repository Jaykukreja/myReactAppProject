const FoodItemCard = ({ item }) => {

    // const {user} = useContext(userContext);
  
    return (
      <div className="w-60 p-2 m-2 shadow-lg bg-pink-100 flex-wrap ">
        <h4>{item}</h4>
        {/* <h1 className="text-red-800 font-bold">{user.name}</h1> */}
      </div>
    );
  };
  
  export default FoodItemCard;
  