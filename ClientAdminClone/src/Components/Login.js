import React from 'react';
import { Button, Form, Grid, Message, Header, Segment } from 'semantic-ui-react'
import {
    Link
} from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '1234',
            password_re: '',
            password_has_error: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    checkPassword() {
        if (!this.state.password || this.state.password != this.state.password_re) {
            this.setState({ password_has_error: true });
        }
        else {
            this.setState({ password_has_error: false });
        }
    }

    handleChange = (event) => {
        const { value } = event.target

        this.setState({
            password_re: value
        }, () =>
                this.checkPassword()

        );
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.password_has_error === true) {
            alert('wrong password!')
        }
        else {
            alert('good pass!')
        }
    }

    //    handleClick (event) {

    //         const { password, userPassword } = this.state;
    //         if (password !== userPassword) {
    //             alert("Passwords don't match");
    //         } else {
    //             alert("Password matches!");
    //         }
    //         event.preventDefault();

    //     }
    //     handleChange(event) {
    //         this.setState({userPassword: event.target.userPassword});
    //       }

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
                                fluid icon="lock"
                                iconPosition='left'
                                placeholder='Wprowadź kod token...'
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