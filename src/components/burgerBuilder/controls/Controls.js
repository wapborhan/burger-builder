import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Button } from "reactstrap";

const controls = [
  { type: "salad", label: "Salad" },
  { type: "cheese", label: "Cheese" },
  { type: "meat", label: "Meat" },
];

const BuildControl = (props) => {
  return (
    <div className="d-flex">
      <div className="mx-auto ml-5 fw-bold">{props.label}</div>
      <button onClick={props.delete} className="btn btn-danger btn-sm m-1">
        Less
      </button>
      <button onClick={props.added} className="btn btn-success btn-sm m-1">
        More
      </button>
    </div>
  );
};

const Controls = (props) => {
  return (
    <div className="container ml-md-5 text-center">
      <Card className="mt-4 mb-4 text-center">
        <CardHeader className="bg-danger text-light">
          <h4>Add Ingredients</h4>
        </CardHeader>
        <CardBody>
          {controls.map((item) => {
            return (
              <BuildControl
                key={Math.random()}
                label={item.label}
                type={item.type}
                added={() => props.ingredientAdded(item.type)}
                delete={() => props.ingredientRemove(item.type)}
              />
            );
          })}
        </CardBody>
        <CardFooter>
          <h5>
            Price: <strong>{props.price}</strong> BDT
          </h5>
        </CardFooter>
        <CardFooter>
          <Button
            color="success"
            disabled={!props.purchasable}
            className="w-100"
            onClick={props.toggleModal}
          >
            Order Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Controls;
