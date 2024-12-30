import  { useState } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../productData';
import ProductCard from '../../components/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData.find(p => p.id === parseInt(id));
  const filteredData = productData.filter(f => f.category === product.category && f.id !== product.id);
  
  const [quantity, setQuantity] = useState(0);

  const handleIncreaseQuantity = () => setQuantity(prev => prev + 1);
  const handleDecreaseQuantity = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="p-5 py-10 cursor-pointer">
      <section className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-10">
        <figure className="overflow-hidden">
          <img
            src={product.coverImg}
            alt={product.name}
            className="w-full h-96 object-contain hover:scale-110 transition-all"
          />
        </figure>
        <section className="flex flex-col gap-4 text-lg col-span-2">
          <h4 className="text-white text-sm bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 rounded-full p-1 px-2 w-fit">
            {product.category}
          </h4>
          <h1 className="text-3xl font-bold text-primary-color">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <span className="text-primary-color font-bold">
            ${product.price.toFixed(2)}{' '}
            <sub className="line-through text-gray-600">${(product.price + 100).toFixed(2)}</sub>
          </span>

          <div className="flex gap-5">
            <div className="p-1 w-60 ring-2 ring-primary-color rounded-full flex justify-between items-center">
              <button
                className="rounded-full hover:bg-slate-100 py-1 px-3"
                aria-label="Decrease quantity"
                onClick={handleDecreaseQuantity}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="rounded-full hover:bg-slate-100 py-1 px-3"
                aria-label="Increase quantity"
                onClick={handleIncreaseQuantity}
              >
                +
              </button>
            </div>

            <button className="bg-primary-color w-96 hover:bg-secondary-color font-semibold text-white p-2 rounded text-center flex items-center justify-center space-x-2 cursor-grab">
              <span>Add to cart</span>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </section>
      </section>

      <section className="my-20">
        <h1 className="text-lg font-bold text-black/60">Similar products</h1>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-5 mt-10 place-items-center">
          {filteredData.map((data, index) => (
            <ProductCard key={data.id || index} item={data} />
          ))}
        </section>
      </section>
    </main>
  );
};

export default ProductDetails;
