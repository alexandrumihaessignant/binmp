import {Link} from "react-router-dom";
import {Breadcrumbs} from "@mui/material";

function CustomBreadcrumbs(props) {

  const buildLinks = () => {
    if (props.links === undefined) {
      return (<></>);
    } else {
      return props.links.map((link) => (
          <Link
              key={link.title}
              underline="hover"
              color="inherit"
              to={link.to}>
            {link.title}
          </Link>
      ));
    }
  }

  return (
      <Breadcrumbs aria-label="breadcrumb"
                   separator="›"
                   maxItems={2}>
        <Link underline="hover" color="inherit" to="/">
          Home
        </Link>
        {buildLinks()}
      </Breadcrumbs>
  );
}

export default CustomBreadcrumbs
