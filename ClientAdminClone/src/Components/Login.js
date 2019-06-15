import React from 'react';
import { Button, Form, Grid, Message, Header, Segment } from 'semantic-ui-react'
import {
    Link
} from 'react-router-dom';
import loginService from '../service/loginService';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login_re:'',
            password_re: '',
            password_has_error: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleChange = (event) => {
        const { value } = event.target

        this.setState({
            password_re: value
        });
    }

    handleSubmit(event) {
        loginService.sendLogUser(this.state.login_re, this.state.password_re).then(response=>
            {if(response.success){
                localStorage.setItem("token", response)
            }
            else{
                this.setState({password_has_error: true})
                alert('Hasło nieprawidłowe!')
            }})
        event.preventDefault();
    }
    render() {
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
                                value={this.state.userPassword}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                fluid icon="lock"
                                iconPosition='left'
                                placeholder='Wprowadź hasło'
                                type='password'
                                value={this.state.userPassword}
                                onChange={this.handleChange}
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