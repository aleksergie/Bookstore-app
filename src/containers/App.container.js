import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from "../redux/books/books.actions";
import App from "../components/App.component";

const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(bookActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
