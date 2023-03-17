import {Button} from "@mui/material";

function CustomButton(props) {
  return (
      <Button variant="contained"
              size="large">
        {props.children}
      </Button>
  );
}

export default CustomButton;
