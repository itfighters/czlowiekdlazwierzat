import React, { Component } from 'react';
import notificationService from '../../service/notificationService';
import PropTypes from 'prop-types';
import NotificationBox from './NotificationBox';

export default class Notifications extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            NotificationDetails: {
                Sms: {
                    alreadySent: null,
                    monthlyLimit: null,
                    subscribed: null
                },
                Push: {
                    alreadySent: null,
                    monthlyLimit: null,
                    subscribed: null
                },
                Email: {
                    alreadySent: null,
                    monthlyLimit: null,
                    subscribed: null
                }
            }
        }
    }

    componentWillMount()
    {
        notificationService.notificationsDetails(this.props.auctionId)
            .then(resp => resp.json())
            .then(resp =>
            {
                this.setState({ NotificationDetails: resp });
            });
    }

    render()
    {
        return (
            <React.Fragment>
                <NotificationBox
                    type={'SMS'}
                    notificationDetails={this.state.NotificationDetails.Sms}
                    submitConfirmed={() => { this.confirmed('sms') }} />
                <NotificationBox
                    type={'Email'}
                    notificationDetails={this.state.NotificationDetails.Email}
                    submitConfirmed={() => { this.confirmed('email') }} />
                <NotificationBox
                    type={'Push'}
                    notificationDetails={this.state.NotificationDetails.Push}
                    submitConfirmed={() => { this.confirmed('push') }} />
            </React.Fragment>
        );
    }

    confirmed(notificationType)
    {
        console.log(notificationType);
        notificationService.sendNotification(this.props.auctionId,notificationType)
        .then(resp=>{
            console.log(resp);
        })
    }
}

Notifications.propTypes = {
    auctionId: PropTypes.number.isRequired
}