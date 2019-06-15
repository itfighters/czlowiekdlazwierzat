import React, { Component } from 'react';
import PostForm from "./PostForm";
import {Grid, Header} from 'semantic-ui-react';

class AddForm extends Component {
    render() {
        return (
            <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle" marginTop="10px">
                <Grid.Column style={{ maxWidth: 450 }} >
                    <Header as="h2" color="black" textAlign="center">
                        Dodaj formularz
                        </Header>
<PostForm></PostForm>
                </Grid.Column>
            </Grid>

        )
    }
}
export default AddForm