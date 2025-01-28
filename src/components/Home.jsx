import { useEffect, useState } from "react";
import Restraunt from "./Restraunt";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [sowData, setSowData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    getRestraunt();
  }, []);

  async function getRestraunt() {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      if (data?.recipes) {
        setSowData(data.recipes);
        setOriginalData(data.recipes);
      } else {
        console.error("No recipes found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleSearch = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
    filterData(searchTextValue, rating);
  };

  const handleRatingChange = (e) => {
    const ratingValue = e.target.value;
    if (ratingValue >= 0 && ratingValue <= 5) {
      setRating(ratingValue);
      filterData(searchText, ratingValue);
    }
  };

  const filterData = (searchTextValue, ratingValue) => {
    const filteredData = originalData.filter((data) => {
      return (
        data.name.toLowerCase().includes(searchTextValue.toLowerCase()) &&
        data.rating >= ratingValue
      );
    });
    setSowData(filteredData);
  };

  return sowData.length === 0 ? (
    <div className="flex justify-center items-center h-screen text-gray-500">
      <p>There is no content available.</p>
    </div>
  ) : (
    <div className="p-4">
      <div className="mb-4 flex flex-col md:flex-row gap-4">
        <input
          className="border border-gray-300 p-2 rounded-md w-full md:w-1/3"
          type="text"
          value={searchText}
          placeholder="Search recipes..."
          onChange={handleSearch}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={() => filterData(searchText, rating)}
        >
          Search
        </button>
        <div className="flex items-center gap-2">
          <label htmlFor="rating" className="text-gray-700">
            Sort by rating:
          </label>
          <input
            type="number"
            id="rating"
            className="border border-gray-300 p-2 rounded-md w-20"
            value={rating}
            onChange={handleRatingChange}
            min="0"
            max="5"
          />
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {sowData.map((res) => (
          <Link to={`/cart/${res.id}`} key={res.id}>
            <Restraunt {...res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
