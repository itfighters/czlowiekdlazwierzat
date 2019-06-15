import React, { Component } from 'react';
import PostForm from './PostForm';
import postService from '../service/postService';
import { Loader, Grid, Header } from 'semantic-ui-react';
import EmailBox from './EmailBox';
import SmsBox from './SmsBox';
import PushBox from './PushBox';

const prepareForm = ({
  account,
  contactNumber,
  dateFrom,
  dateTo,
  addressFrom,
  addressTo,
  ...remaining
}) => ({
  checkboxKonto: account,
  phone: contactNumber,
  dateStart: dateFrom,
  dateEnd: dateTo,
  addressStart: addressFrom,
  addressEnd: addressTo,
  ...remaining,
});

class updateForm extends Component {
  state = { loaded: false, form: null };
  componentDidMount() {
    const { id } = this.props.match.params;

    postService
      .getForm(id)
      .then(form => this.setState({ form: prepareForm(form), loaded: true }));
  }

  onSubmit = form => {
    const { id } = this.props.match.params;
    return postService.updateForm(id, form);
  };

  render() {
    if (this.state.loaded)
      return (
        <Grid
          textAlign="center"
          style={{ height: '100vh' }}
          verticalAlign="middle"
          marginTop="10px"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="black" textAlign="center">
              Edytuj formularz
            </Header>
            <PostForm form={this.state.form} isUpdate />
            <EmailBox />
            <SmsBox />
            <PushBox />
          </Grid.Column>
        </Grid>
      );
    else {
      return <Loader active inline="centered" />;
    }
  }
}
export default updateForm;
