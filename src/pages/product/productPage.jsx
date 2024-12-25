import  { useState } from "react";
import ProductCard from "../../components/productCard";
import ProductData from "../productData";
import { useDebounce } from "use-debounce";


function ProductPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [highPrice , setHighPrice] = useState('')
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500); // Debounce for 500ms

  const filteredData = ProductData.filter((item) =>
    item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );



  return (
    <main className="m-2 md:m-5 pt-10 pb-28 md:pb-48 ">
      <div className="flex flex-col items-end gap-2 md:flex-row  md:items-center mx-auto px-4">
        {/* Search Section */}
        <section className="w-full md:w-1/2 mx-auto">
          <form className="w-full" onSubmit={(e)=>{e.preventDefault()}}>
            <input
              type="search"
              className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
              placeholder="Search Product"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </section>

        <section className="">
          <select name="" id="" className="p-2 px-5 focus:ring-4 outline-none focus:ring-primary-color rounded bg-slate-100">
            <option value="" disabled>Sort By</option>
            <option value="Value1" >High price</option>
            <option value="Value1">Low price</option>
            <option value="Value1">Newst arivales</option>
            <option value="Value1">Best sellers</option>
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
