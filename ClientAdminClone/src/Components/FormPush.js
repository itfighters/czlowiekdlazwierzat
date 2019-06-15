import React from 'react'
import {Button, Form, Grid, Header, Label, Message, Segment, Icon} from 'semantic-ui-react'

const FormPush = ({content, onChange, numberUsersToSend, onSubmit, valid}) => (
    <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
        <Grid.Column style={{maxWidth: 500}}>
            <Header as='h2' color='olive' textAlign='center'>
                WYSYŁANIE NOTYFIKACJI PUSH
            </Header>
            <Form size='large'>
                <Segment stacked>
                    <Form.Input fluid icon='paw' iconPosition='left' placeholder='Wpisz treść notyfikacji' value={content}
                                onChange={onChange}/>

                    <Button color='olive' fluid size='large' onClick={onSubmit} disabled={!valid}>
                        Wyślij {valid ? '' : " Nieprawidłowy format danych"}
                    </Button>
                </Segment>
            </Form>
            <Message>Prenumeratorzy notyfikacji PUSH<br/>
                <Label>
                    <Icon name='users'/>{numberUsersToSend}
                </Label>
            </Message>

        </Grid.Column>
    </Grid>
)


export default FormPush;
