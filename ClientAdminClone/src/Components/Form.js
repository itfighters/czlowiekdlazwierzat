import React, {Component} from 'react';
import '../Styles/App.css';
import { Dropdown, TextArea, Input, Checkbox } from 'semantic-ui-react';

class Form extends Component {
    state = { title:"", image:"", description:"", multichoiceCategories:"", dotpayLink:"", paypalLink:"", siepomagaLink:"", checkboxKonto:"", date:"", adress:"", phone:""}
formChanged = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
}
formSubmitted = (e) => {
    e.preventDefault();
        const state = this.state;
        state[e.target.name] = e.target.value;
    this.setState(state);
    }
    // const options = [
    //     { key: 'klucz', text: 'nazwa', value: 'wartosc' },
    //   ]
    
render () {
    return (
        <Form>
        <Form.Field control={Input} label='Tytuł' placeholder="Tytuł" />
        {/* <Form.Field>
        <Image src='/images/wireframe/image.png' size='small' alt='Wrong img :(' wrapped />
        </Form.Field> */}
        <Form.Field control={TextArea} label='Opis' placeholder='Opis' />
        <Form.Field label='Wybierz kategorię' control='Wybierz'>
        <Dropdown placeholder='Kategorie' fluid multiple selection options={options} />
      </Form.Field>
        <Form.Field control={Input} label>
          <label>Dotpay</label>
          <input placeholder='Link Dotpay' />
        </Form.Field>
        <Form.Field>
          <label>Paypal</label>
          <input placeholder='Link Paypal' />
        </Form.Field>
        <Form.Field>
          <label>siepomaga</label>
          <input placeholder='Link siepomaga' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Konto' />
        </Form.Field>

        <Form.Button type='submit'>Wyślij</Form.Button>
      </Form>   
    )
}
}

export default Form;
