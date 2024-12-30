import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import ProductData from "../productData";
import { useDebounce } from "use-debounce";

function ProductPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSort, setSelectedSort] = useState(""); // To handle the selected sorting filter
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500); // Debounce for search input

  // Sorting and filtering logic
  const filteredData = ProductData
    .filter((item) =>
      item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (selectedSort) {
        case "high-price":
          return b.price - a.price; // Sort by price (High to Low)
        case "low-price":
          return a.price - b.price; // Sort by price (Low to High)
        case "new-arrivals":
          return new Date(b.releaseDate) - new Date(a.releaseDate); // Sort by newest
        case "best-sellers":
          return b.sales - a.sales; // Sort by best sellers
        default:
          return 0; // Default (no sorting)
      }
    });

  return (
    <main className="m-2 md:m-5 pt-10 pb-28 md:pb-48 ">
      <div className="flex flex-col items-end gap-2 md:flex-row md:items-center mx-auto px-4">
        {/* Search Section */}
        <section className="w-full md:w-1/2 mx-auto">
          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
              placeholder="Search Product"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </section>

        {/* Sort By Dropdown */}
        <section className="">
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="p-2 px-5 focus:ring-4 outline-none focus:ring-primary-color rounded bg-slate-100"
          >
            <option value="" disabled>
              Sort By
            </option>
            <option value="high-price">High Price</option>
            <option value="low-price">Low Price</option>
            <option value="new-arrivals">Newest Arrivals</option>
            <option value="best-sellers">Best Sellers</option>
          </select>
        </section>
      </div>

      {/* Product Cards Section */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-5 mt-10 place-items-center">
        {filteredData.map((data, index) => (
          <ProductCard key={data.id || index} item={data} />
        ))}
      </section>
    </main>
  );
}

export default ProductPage;
