import React, { Component } from 'react';
import { TextArea, Input, Checkbox, Button, Image, Form, Dropdown } from 'semantic-ui-react';

class ValidForm extends Component {
    validState = { validtitle: "", validimage: "", validdescription: "", validmultichoiceCategories: "", validdotpayLink: "", validpaypalLink: "", validsiepomagaLink: "", validcheckboxKonto: "", validdateStart: "", validdateEnd: "", validadressStart: "", validadressEnd: "", validphone: "" }
    onChange = (e, {name, value }) => {
        console.log(name);
        console.log(value);
        this.setState({ [name]: value});
    }
    formSubmitted = (e) => {
        e.preventDefault();
        console.log(this.validState);
    }
    options = [
        { key: 'klucz', text: 'nazwa', value: 'wartosc' },
    ]

    render() {
        const { validtitle, validimage, validdescription, validmultichoiceCategories, validdotpayLink, validpaypalLink, validsiepomagaLink, validcheckboxKonto, validdateStart, validdateEnd, validadressStart, validadressEnd, validphone} = this.state;

        return (
            <Form onSubmit={this.formSubmitted}>
                <Form.Field control={Input} name="title" label='Tytuł' placeholder="Tytuł" value={title} onChange={this.onChange} />
                <Form.Field>
        <Image src='/images/wireframe/image.png' size='small' alt='Wrong img :(' wrapped name="image" value={image} onChange={this.onChange}/>
        </Form.Field>
                <Form.Field control={TextArea} label='Opis' placeholder='Opis' name="description" value={description} onChange={this.onChange}/>
                <Form.Field label='Wybierz kategorię' control='Wybierz' >
                    <Dropdown placeholder='Kategorie' fluid multiple selection options={this.options} name="multichoiceCategories" value={multichoiceCategories} onChange={this.onChange}/>
                </Form.Field>
                <Form.Field control={Input} label="Dotpay" placeholder="Link do dotpay" name="dotpayLink" value={dotpayLink} onChange={this.onChange}/>
                <Form.Field control={Input} label="Paypal" placeholder="Link do paypal" name="paypalLink" value={paypalLink} onChange={this.onChange}/>
                <Form.Field control={Input} label="siepomaga" placeholder="Link do siepomaga" name="siepomagaLink" value={siepomagaLink} onChange={this.onChange}/>
                <Form.Field control={Checkbox} label="Konto" name="chceckboxKonto" value={checkboxKonto} onChange={this.onChange}/>
                <Form.Group widths='equal'>
                    <Form.Field control={Input} label="Data początkowa" placeholder="Data początkowa" name="dateStart" value={dateStart} onChange={this.onChange}/>
                    <Form.Field control={Input} label="Data końcowa" placeholder="Data końcowa" name="dateEnd" value={dateEnd} onChange={this.onChange}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field control={Input} label="Adres początkowy" placeholder="Adres początkowy" name="adressStart" value={adressStart} onChange={this.onChange}/>
                    <Form.Field control={Input} label="Adres końcowy" placeholder="Adres końcowy" name="adressEnd" value={adressEnd} onChange={this.onChange}/>
                </Form.Group>
                <Form.Field control={Input} label="Telefon" placeholder="Wprowadź numer telefonu" name="phone" value={phone} onChange={this.onChange}/>
                <Button type='submit'>Wyślij</Button>
            </Form>
        )
    }
}

export default ValidForm;
