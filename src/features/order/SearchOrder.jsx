import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/order/${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-4 py-3 text-sm outline-none ring-opacity-50 transition-all duration-300 placeholder:text-stone-400 focus:ring focus:ring-yellow-500 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}
