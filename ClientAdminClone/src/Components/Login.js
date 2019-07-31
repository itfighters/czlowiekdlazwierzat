import React from 'react';
import { Button, Form, Grid, Message, Header, Segment } from 'semantic-ui-react'
import {
    Link
} from 'react-router-dom';
import loginService from '../service/loginService';
import { authTokenKey, isAuthenticated } from '../Utils/auth';
import { toast } from 'react-toastify';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logine: '',
            password: '',
            invalid_credentials: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        loginService.sendLogUser(this.state.login, this.state.password)
            .then(response => response.json())
            .then(response => {
                if (response.token) {
                    localStorage.setItem(authTokenKey, response.token);
                    this.props.history.push('/admin/list');
                }
                else {
                    this.setState({ invalid_credentials: true });
                    toast.error("Błędne dane logowania");
                }
            })
        event.preventDefault();
    }

    render() {
        if (isAuthenticated()) {
            this.props.history.push('/admin/list');
            return null;
        }
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='black' textAlign='center'>
                        Zaloguj się jako administrator:
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input
                                fluid icon="user"
                                iconPosition='left'
                                placeholder='Wprowadź login'
                                type='text'
                                value={this.state.login}
                                onChange={(e) => { this.setState({ login: e.target.value }) }}
                            />
                            <Form.Input
                                fluid icon="lock"
                                iconPosition='left'
                                placeholder='Wprowadź hasło'
                                type='password'
                                value={this.state.password}
                                onChange={(e) => { this.setState({ password: e.target.value }) }}
                            />
                            <Button onClick={this.handleSubmit} color='black' fluid size='large'>
                                Zaloguj
                             </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Nie jesteś administratorem? <Link to={`/`}>Wróć na stronę główną</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}
export default Login;