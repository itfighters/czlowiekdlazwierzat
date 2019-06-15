import React, { Component } from 'react';
import PostForm from "./PostForm";
import postService from '../service/postService';
import { Loader, Grid, Header } from 'semantic-ui-react';


class updateForm extends Component {
    state = { loaded: false, form: null }
    componentDidMount() {
        //const {id} = this.props;
        const id = 23;
        postService.getForm(id)
            .then(form => this.setState({ form, loaded: true }))
    }
    render() {
        if (this.state.loaded)
            return <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle" marginTop="10px">
                <Grid.Column style={{ maxWidth: 450 }} >
                    <Header as="h2" color="black" textAlign="center">
                        Edytuj formularz
            </Header>
                    <PostForm form={this.state.form} isUpdate></PostForm>
                </Grid.Column>
            </Grid>
        else {
            return <Loader active inline='centered' />
        }
    }
}
export default updateForm