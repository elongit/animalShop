import ArrowBtn from "../components/buttons/arrowBtn";
const CheckOutForm = () => {
  return (
    <main className="my-10 p-5">  
    <ArrowBtn path={-1}/>
      <fieldset className="w-full md:w-2/3 lg:w-1/2 m-auto">
        <legend className="text-2xl mb-5 font-bold drop-shadow text-primary-color">
          Checkout
        </legend>
        <form
          action=""
          className="flex flex-col gap-5 text-lg"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="cardName" className="text-gray-600 font-semibold ">
            Card name :
          </label>
          <input
            type="text"
            name="cardName"
            id="cardName"
            placeholder="Name on Card"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          />
          <label htmlFor="address" className="text-gray-600 font-semibold ">
            Address :
          </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Your address"
            className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
          />

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label htmlFor="city" className="text-gray-600 font-semibold ">
                City:
              </label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Your city "
                className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
              />
            </div>
            <div>
              <label htmlFor="zip" className="text-gray-600 font-semibold ">
                Zip :
              </label>
              <input
                type="number"
                name="zip"
                id="zip"
                placeholder="Zip code"
                className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="expiryDate"
                className="text-gray-600 font-semibold "
              >
                Expire Date:
              </label>

              <input
                type="text"
                name="expiryDate"
                id="expiryDate"
                placeholder="Exiry date "
                className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
              />
            </div>
            <div>
              <label htmlFor="ccv"  className="text-gray-600 font-semibold ">CCV :</label>
              <input
                type="text"
                name="ccv"
                id="ccv"
                placeholder="***"
                className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="check" id="check" />
            <label htmlFor="check" className=" text-gray-600">
              Save card details for future purchases
            </label>
          </div>
          <button
            type="submit"
            className="text-xl text-white bg-primary-color hover:bg-secondary-color rounded py-3 px-8"
          >
            Save card
          </button>
        </form>
      </fieldset>
    </main>
  );
};

export default CheckOutForm;
