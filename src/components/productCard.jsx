import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ item }) => {   
    

    return (
        <article className="hover:shadow cursor-pointer w-full md:w-64">
            <figure className="h-60  p-2 w-full flex justify-center">
                <img 
                    src={item.coverImg} 
                    alt={`Image of ${item.name}`} 
                    className="h-60 object-cover rounded-md w-full hover:scale-105 transition-all" 
                    loading='lazy'
                />
            </figure>

            <div className="flex flex-col  p-2">
                <div>
                    <h4 className="text-gray-600 text-sm md:text-lg font-medium">{item.name}</h4>
                    <h4 className="text-gray-600 text-lg font-medium">
                        {item.price}$ /

                            <sub className="line-through text-gray-400 ml-2">
                                {item.price + 100}$
                            </sub>
                        
                    </h4>
                </div>

                <button className="bg-primary-color hover:bg-secondary-color font-semibold text-white p-2 rounded text-center mt-5 flex items-center justify-center space-x-2 cursor-grab">
                    <span>Add to cart</span>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
            </div>
        </article>
    );
};

ProductCard.propTypes = {
    item : PropTypes.shape({
        name : PropTypes.string.isRequired,
        coverImg : PropTypes.string.isRequired,
        price : PropTypes.number.isRequired,
        
    }).isRequired
}

export default ProductCard;
