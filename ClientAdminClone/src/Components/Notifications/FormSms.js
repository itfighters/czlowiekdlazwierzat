import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Label,
  Message,
  Segment,
  Icon,
} from 'semantic-ui-react';

const FormSms = ({
  content,
  onChange,
  numberSms,
  numberUsersToSend,
  onSubmit,
  valid,
}) => (
  <Grid textAlign="center">
    <Grid.Column style={{ maxWidth: 500 }}>
      <Header as="h4" color="teal" textAlign="center">
        WYSYŁANIE WIADOMOŚCI SMS
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="paw"
            iconPosition="left"
            placeholder="Wpisz treść SMS"
            value={content}
            onChange={onChange}
          />

          <Button
            color="teal"
            fluid
            size="large"
            onClick={onSubmit}
            disabled={!valid}
          >
            Wyślij {valid ? '' : ' Nieprawidłowy format danych'}
          </Button>
        </Segment>
      </Form>
      <Message>
        Prenumeratorzy SMS
        <br />
        <Label>
          <Icon name="users" />
          {numberSms}
        </Label>
      </Message>
      <Message>
        Licza darmowych SMS
        <br />
        <Label>
          <Icon name="envelope open outline" /> {numberUsersToSend}
        </Label>
      </Message>
    </Grid.Column>
  </Grid>
);

export default FormSms;
