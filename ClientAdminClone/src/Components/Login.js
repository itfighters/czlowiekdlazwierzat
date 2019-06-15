import React from 'react';
import { Button, Form, Grid, Message, Header, Segment, Label } from 'semantic-ui-react'
import {
    Link
} from 'react-router-dom';
import loginService from '../service/loginService';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login_re: '',
            password_re: '',
            credentials_invalid: false
        };

        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeLogin = (event) => {
        const { value } = event.target

        this.setState({
            login_re: value
        });
    }
    handleChangePassword = (event) => {
        const { value } = event.target
        this.setState({
            password_re: value
        });
    }

    handleSubmit(event) {
        loginService.sendLogUser(this.state.login_re, this.state.password_re).then(response => {
            if (response.success) {
                localStorage.setItem("token", response)
                this.props.history.push('/List');

            }
            else {
                this.setState({ credentials_invalid: true });
            }
        })
        event.preventDefault();
    }
    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='black' textAlign='center'>
                        Jesteś administratorem? Zaloguj się:
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input
                                fluid icon="user"
                                iconPosition='left'
                                placeholder='Login'
                                type='text'
                                value={this.state.userLogin}
                                onChange={this.handleChangeLogin}
                            />
                            <Form.Input
                                fluid icon="lock"
                                iconPosition='left'
                                placeholder='Hasło'
                                type='password'
                                value={this.state.userPassword}
                                onChange={this.handleChangePassword}
                            />
                            <Button onClick={this.handleSubmit} color='black' fluid size='large'>
                                Zaloguj
                             </Button>
                             {this.state.credentials_invalid && <Label fluid icon = "warning circle" basic color='red' pointing>
                             Nieprawidłowe dane logowania!</Label>}
                        </Segment>  
                    </Form>
                  
                    <Message>
                        Pomyłka? <Link to={`/`}>Wróć na stronę główną</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}
export default Login;