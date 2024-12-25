import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import ProductData from "../productData";

function ShoppingCart() {
  // State to manage item quantities
  const [quantities, setQuantities] = useState(
    ProductData.slice(0, 10).map((item) => ({
      id: item.id,
      quantity: 1, // Default to 1 for each item
    }))
  );

  // Update quantity for a specific item
  const updateQuantity = (id, delta) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) } // Prevent quantity from going below 1
          : item
      )
    );
  };

  // Calculate subtotal dynamically
  const calculateSubtotal = () => {
    return quantities.reduce((total, item) => {
      const product = ProductData.find((product) => product.id === item.id);
      return total + product.price * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <main className="p-5 pb-48 grid grid-col-1 lg:grid-cols-4 gap-5">
      <section className="p-2 lg:col-span-3 bg-slate-50 overflow-x-auto">
        <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-800 cursor-pointer">
          <thead>
            <tr className="px-6 py-3 md:text-lg rounded-s-lg text-center">
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Quantity</th>
              <th className="px-6 py-4">Unit Price</th>
              <th className="px-6 py-4">Total Price</th>
              <th className="px-6 py-4 text-primary-color"><FontAwesomeIcon icon={faTrashAlt}/></th>
            </tr>
          </thead>
          <tbody>
            {ProductData.slice(0, 1).map((item) => {
              const quantity = quantities.find((q) => q.id === item.id)?.quantity || 1;
              return (
                <tr key={item.id} className="bg-white text-lg border-b text-center">
                  <td>
                    <article className="hover:shadow cursor-pointer w-fit">
                      <figure className="h-fit p-2 w-full flex justify-center">
                        <img
                          src={item.coverImg}
                          alt={item.name}
                          className="h-20 object-cover rounded-md w-20"
                          loading="lazy"
                        />
                      </figure>
                    </article>
                  </td>
                  <td>{item.name}</td>
                  <td className="px-6 py-4">
                    <div className="p-1 ring-2 ring-primary-color rounded-full flex justify-between items-center">
                    
                      <button
                      className="rounded-full hover:bg-slate-100 py-1 px-3"
                        aria-label="Decrease quantity"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                      className="rounded-full hover:bg-slate-100 py-1 px-3"
                        aria-label="Increase quantity"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    
                    </div>
                  </td>
                  <td className="px-6 py-4 ">${item.price}</td>
                  <td className="px-6 py-4">${(item.price * quantity).toFixed(2)}</td>
               
               <td>
               <button type="button" className="bg-primary-color hover:bg-secondary-color px-2 py-1 rounded text-white font-bold">
                <FontAwesomeIcon icon={faTrashAlt}/>
                </button>
               </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <aside className="p-5 bg-slate-50 text-lg 
      
      font-semibold text-gray-600">
        <h1 className="font-bold">Your cart summary</h1>
        <h3>
          Total ({ProductData.slice(0, 1).length} items): ${calculateSubtotal()}
        </h3>

        <div className="mt-3">
          <button
            type="button"
            className="px-6 py-1.5 text-white rounded-full bg-primary-color hover:bg-secondary-color"
          >
            <NavLink to='/checkout'>
            Proceed to checkout
            </NavLink>
          </button>
        </div>
      </aside>
    </main>
  );
}

export default ShoppingCart;
