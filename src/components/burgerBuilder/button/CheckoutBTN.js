import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

function History() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Button color="success" onClick={() => navigate("/checkout")}>
        Continue to Checkout
      </Button>
    </Fragment>
  );
}

export default History;
