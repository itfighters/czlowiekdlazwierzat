import React, {Component} from "react";
import FormEmail from './FormEmail';

class EmailBox extends Component {
    constructor(props) {
        super(props);
        this.state = {content: '', numberUsersToSend: 0, valid: true};
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        const {content, numberUsersToSend, valid} = this.state;

        return <FormEmail content={content} onChange={this.onChange}
                        numberUsersToSend={numberUsersToSend} onSubmit={this.onSubmit} valid={valid}/>
    }

    onChange(e, {value}) {
        this.setState({content: value, valid: value !== ''})
    }
    onSubmit(event) {
        if(this.state.content === ''){
            this.setState({valid: false});
        }
        else
        console.log("Kliknięto przycisk wyślij")
    }
}

export default EmailBox;