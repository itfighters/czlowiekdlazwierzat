import
{
  Button,
  Grid,
  Header,
  Label,
  Message,
  Confirm,
  Icon,
} from 'semantic-ui-react';
import React, { Component } from 'react';
import notificationService from '../../service/notificationService';
import PropTypes from 'prop-types';


class NotificationBox extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      collapsed: true,
      confirmOpen: false
    };
  }

  render()
  {
    const { type, notificationDetails, submitConfirmed } = this.props;

    return (
      <Grid textAlign="center">
        <Grid.Column style={{ maxWidth: 500 }}>
          <div style={{ 'cursor': 'pointer' }}>
            <Header as="h4" color="teal" textAlign="center" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
              <p>Dodaj notyfikację {type} {this.state.collapsed}
                <i className={"angle icon " + (this.state.collapsed ? 'down' : 'up')} />
              </p>
            </Header>
          </div>
          <div style={{ 'display': this.state.collapsed ? 'none' : 'block' }}>
            <Message>
              Prenumeratorzy notyfikacji {type}
              <br />
              <Label>
                <Icon name="users" />
                {notificationDetails.subscribed != null ? notificationDetails.subscribed : 'obliczam...'}
              </Label>
            </Message>
            <Message>
              Liczba wysłanych notyfikacji {type} w tym miesiącu
        <br />
              <Label>
                <Icon name="envelope open outline" />
                {notificationDetails.alreadySent != null && notificationDetails.monthlyLimit != null ?
                  `${notificationDetails.alreadySent}/${notificationDetails.monthlyLimit}`
                  : 'obliczam...'}
              </Label>
            </Message>
            <Button
              color="teal"
              fluid
              size="large"
              onClick={() => this.onSubmit()}
            >
              Wyślij
              </Button>
          </div>
        </Grid.Column>
        <Confirm open={this.state.confirmOpen}
          header={'Potwierdź'}
          confirmButton={'Wyślij'}
          cancelButton={'Anuluj'}
          content={'Potwierdzasz wysłanie notyfikacji?'}
          onCancel={() => this.setState({ confirmOpen: false })}
          onConfirm={() =>
          {
            this.setState({ confirmOpen: false });
            submitConfirmed();
          }} />
      </Grid>
    );
  }

  onSubmit = () => this.setState({
    confirmOpen: true
  });
}

NotificationBox.propTypes = {
  type: PropTypes.string.isRequired,
  submitConfirmed: PropTypes.func.isRequired,
  notificationDetails: PropTypes.exact({
    subscribed: PropTypes.number,
    alreadySent: PropTypes.number,
    monthlyLimit: PropTypes.number
  })
}

export default NotificationBox;

