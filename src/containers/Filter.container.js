import { connect } from "react-redux";
import Filter from "../components/filter/filter.component";
import { bindActionCreators } from "redux";
import * as filterActions from "../redux/filter/filter.actions";

const mapStateToProps = ({ books }) => ({
  filteredBy: books.filteredBy,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(filterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
