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

const FormEmail = ({
  content,
  onChange,
  numberUsersToSend,
  onSubmit,
  valid,
}) => (
  <Grid textAlign="center">
    <Grid.Column style={{ maxWidth: 500 }}>
      <Header as="h2" color="yellow" textAlign="center">
        WYSYŁANIE WIADOMOŚCI E-MAIL
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="paw"
            iconPosition="left"
            placeholder="Wpisz treść wiadomości"
            value={content}
            onChange={onChange}
          />

          <Button
            color="yellow"
            fluid
            size="large"
            onClick={onSubmit}
            disabled={!valid}
          >
            Wyślij {valid ? '' : ' Uwaga! Nieprawidłowy format danych'}
          </Button>
        </Segment>
      </Form>
      <Message>
        Prenumeratorzy E-MAIL
        <br />
        <Label>
          <Icon name="users" />
          {numberUsersToSend}
        </Label>
      </Message>
    </Grid.Column>
  </Grid>
);

export default FormEmail;
