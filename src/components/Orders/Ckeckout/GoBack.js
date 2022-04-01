import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

function GoBack() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Button onClick={() => navigate("/")} color="secondary" className="ms-1">
        Cancel
      </Button>
    </Fragment>
  );
}

export default GoBack;
