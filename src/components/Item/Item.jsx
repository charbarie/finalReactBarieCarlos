
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = ({ product }) => {
  return (
    <article className='CardItem'>
      <header className='Header'>
        <h2 className='ItemHeader'>{product.name}</h2>
      </header>
      <img src={product.image} alt={product.description} />
      <section>
        <p className='data'>Precio: ${product.price}</p>
        <p className='data'>Stock disponible: {product.stock}</p>
      </section>
      <footer className='Itemfooter'>
      <Link to={`./category/${product.id}`} className='Option'>{product.category}</Link>
      </footer>
    </article>
  );
};

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category:PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
