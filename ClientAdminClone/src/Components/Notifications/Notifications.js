import React, { Component } from 'react';
import EmailBox from './EmailBox';

export default class Notifications extends Component {
    render() {

        return (
            <React.Fragment>
                <Header as="h2" color="black" textAlign="center">Dodaj notyfikację</Header>
                <SmsBox></SmsBox>
                <EmailBox></EmailBox>
                <PushBox></PushBox>
            </React.Fragment>
        );
    }
}