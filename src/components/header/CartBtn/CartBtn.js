
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartBtn.css';

const CartBtn = () => {


  return (
    <>
      <div className="cart">
        <a href="/" className="cart-btn">
          <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
        </a>
      </div>
    </>
  );
}

export default CartBtn