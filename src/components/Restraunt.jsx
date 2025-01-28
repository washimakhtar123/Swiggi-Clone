// eslint-disable-next-line react/prop-types
const Restraunt = ({ name, image, caloriesPerServing, cuisine, rating }) => {
    return (
      <div className="border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition">
        <img
          src={image}
          alt={name}
          className="rounded-md w-full h-40 object-cover mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600">Cuisine: {cuisine}</p>
        <p className="text-gray-600">Calories: {caloriesPerServing} cal</p>
        <p className="text-yellow-500 font-medium">Rating: {rating}</p>
      </div>
    );
  };
  
  export default Restraunt;
  