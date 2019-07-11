import React from 'react';
import { Divider, Segment, Header } from 'semantic-ui-react'
import Notifications from '../Notifications/Notifications';

export function Edit({ match }) {
    return (
        <Segment>
            {/* <AddForm header={'Edytuj danę zbiórki'} /> */}
            <br/><br/><br/><br/><br/><br/><br/>
            <Divider horizontal>Lub</Divider>
            <Notifications auctionId={Number(match.params.id)}/>
        </Segment>
    )
}