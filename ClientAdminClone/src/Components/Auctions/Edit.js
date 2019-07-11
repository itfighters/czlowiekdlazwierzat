import React from 'react';
import EmailBox from '../Notifications/EmailBox';
import SmsBox from '../Notifications/SmsBox';
import PushBox from '../Notifications/PushBox';
import AddForm from '../Auctions/add/AddForm';
import { Divider, Grid, Segment, Header } from 'semantic-ui-react'

export function Edit({ match }) {
    return (
        <Segment>
            <AddForm header={'Edytuj danę zbiórki'} />
            <br/><br/><br/><br/><br/><br/><br/>
            <Divider horizontal>Lub</Divider>
            <Header as="h2" color="black" textAlign="center">Dodaj notyfikację</Header>
            <SmsBox></SmsBox>
            <EmailBox></EmailBox>
            <PushBox></PushBox>
        </Segment>
    )
}