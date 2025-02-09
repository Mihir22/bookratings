import PropTypes from "prop-types";

export default function List({ children }) {
  return <ul className="left-1 divide-y divide-slate-100">{children}</ul>;
}

List.propTypes = {
  // https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
