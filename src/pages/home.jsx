import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBell } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/buttons/btn";
import ProductCard from "../components/ProductCard";
import productData from "./productData";
import HeroSectionImg from '../assets/heroSectionIm.png';

const BrandLogo = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-28 object-contain h-28 cursor-pointer" />
);

function Home() {
  return (
    <main className="p-5 pb-44">
      
      {/* Hero Section */}
      <section className="my-5 md:my-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="h-full p-5 rounded flex flex-col justify-center">
          <h1 className="text-2xl md:text-5xl font-bold text-primary-color drop-shadow">
            Premium Animal Products
          </h1>
          <p className="text-[17px] md:text-xl my-4 md:my-7 lg:my-4 text-black/50">
            Explore high-quality products for your pets food, toys, accessories, and more delivered right to your door.
          </p>
          <div className="w-fit">
          <Button label="Explore more" path="/product" />
          </div>
        </div>

        <figure className="order-first lg:order-last overflow-hidden cursor-zoom-in">
          <img
            src={HeroSectionImg}
            alt="Pet products collection"
            className="w-full h-full rounded hover:scale-110 transition-all"
          />
        </figure>
      </section>

      {/* Featured Products Section */}
      <section>
        <h1 className="text-2xl mb-5 md:text-3xl font-bold text-primary-color drop-shadow">
          Featured Products
        </h1>

        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-5">
          {productData.slice(0, 10).map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </section>

        <div className="p-2 font-bold text-primary-color text-lg flex items-center gap-1">
          <NavLink to='/menu'>Explore more</NavLink>
          <FontAwesomeIcon icon={faArrowRight} className="hover:translate-x-2 transition-all" size="1x" />
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="p-5 md:p-10 border-t my-10" id="section">
        <fieldset className="w-full md:w-1/2 m-auto text-sm md:text-lg">
          <legend className="text-3xl text-primary-color drop-shadow font-semibold font-Inter">
            Lets keep in touch
          </legend>
          <p className="my-2 font-semibold text-gray-600">
            Subscribe to our newsletter to receive the latest products and gifts
          </p>
          <form className="flex flex-col md:flex-row gap-5" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
            />
            <button type="submit" className="text-white bg-primary-color w- hover:bg-secondary-color rounded py-3 px-8">
            <span className="flex items-center">
           Subscribe
              <FontAwesomeIcon icon={faBell } className="text-yellow-500"/>
           </span>
            </button>
          </form>
        </fieldset>
      </section>

      {/* Brand Logos Section */}
      <section>
        <h1 className="text-3xl text-center text-primary-color drop-shadow font-semibold font-Inter">
          Our Brands
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-6 place-content-center w-full md:w-2/3 m-auto">
          <BrandLogo src="https://petsplans.com/cdn/shop/files/LogoStefanplast2016_pos_200x.png?v=1642774661" alt="Stefanplast logo" />
          <BrandLogo src="https://petsplans.com/cdn/shop/files/2_1_58283427-9a72-46e8-bc35-d8d1508962fb_200x.jpg?v=1634768990" alt="Brand 2" />
          <BrandLogo src="https://petsplans.com/cdn/shop/files/logo_RoyalCanin_1000x700_2ae0f545-4804-4b88-844e-448b1dd86058_200x.jpg?v=1634769022" alt="Royal Canin logo" />
          <BrandLogo src="https://petsplans.com/cdn/shop/files/FlamingoPetProducts_250x150px_200x.png?v=1666381694" alt="Flamingo Pet Products logo" />
          <BrandLogo src="https://petsplans.com/cdn/shop/files/logo-brit_200x.png?v=1708261700" alt="Brit logo" />
          <BrandLogo src="https://petsplans.com/cdn/shop/files/17438012_205195456631559_3108134701013925888_a_1_200x.jpg?v=1637882980" alt="Brand 6" />
        </div>
      </section>
    </main>
  );
}

BrandLogo.propTypes = {

        src : PropTypes.string.isRequired,
        alt : PropTypes.string.isRequired,

}

export default Home;
