import React from 'react';
import { Input } from 'semantic-ui-react'


const InputExampleFocus = () => <Input focus placeholder='Search...' />
export function Login() {
    return (
        <div>
        <h1>Login</h1>
        <div class="ui focus input"><input type="text" placeholder="Search..." /></div>
        </div>
    )
}
export default InputExampleFocus
