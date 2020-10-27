import React from "react";
import AddForm from "./add/AddForm";

export function Add({ history }) {
  return <AddForm header={"Dodaj nową zbiórkę"} history={history} />;
}
