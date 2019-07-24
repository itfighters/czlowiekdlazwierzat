import React from "react";
import { Divider, Segment } from "semantic-ui-react";
import Notifications from "../Notifications/Notifications";
import AddForm from "./add/AddForm";

export function Edit({ match }) {
  let auctionId = match.params.id;
  return (
    <Segment>
      <AddForm header={"Edytuj danę zbiórki"} auctionId={auctionId} />
      <Divider horizontal>Lub</Divider>
      <Notifications auctionId={Number(match.params.id)} />
    </Segment>
  );
}
