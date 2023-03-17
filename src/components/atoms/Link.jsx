import {NavLink} from "react-router-dom";

import {AppRoutes} from "../../constants/AppRoutes";

function Link(props) {
  return (
      <NavLink to={props.to}>{props.children}</NavLink>
  );
}

export default Link;
