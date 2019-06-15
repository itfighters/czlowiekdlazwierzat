import React, {Component} from "react";
import FormSms from './FormSms';

class SmsBox extends Component {
    constructor(props) {
        super(props);
        this.state = {content: '', numberSms: 0, numberUsersToSend: 0, valid: true};
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        const {content, numberSms, numberUsersToSend, valid} = this.state;

        return <FormSms content={content} onChange={this.onChange} numberSms={numberSms}
                        numberUsersToSend={numberUsersToSend} onSubmit={this.onSubmit} valid={valid}/>
    }

    onChange(e, {value}) {
        this.setState({content: value, valid: value !== ''})

    }

    onSubmit(event) {
        if(this.state.content === ''){
            this.setState({valid: false});
        } else
            console.log("Kliknięto przycisk wyślij")
    }
}

export default SmsBox;