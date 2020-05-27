import { connect } from "react-redux";
import Header from "../components/header/header.component";
import { bindActionCreators } from "redux";
import * as cartActions from "../redux/cart/cart.actions";

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
  count: cart.items.length,
  items: cart.items,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
