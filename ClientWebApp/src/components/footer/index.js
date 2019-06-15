//Footer
//1. Dodaj sekcje z informacjami o partnerach, dodaj animacje
//2. Dodaj sekcje z informacjami o fundacji
//3. Dodaj działający przycisk z facebook

import React, { Component } from 'react';
import About from './about';
import Partners from './partners'
export default class Footer extends Component {

    render() {
        return (
            <footer>
                <Partners />

                <About />

            </footer>
        )
    }
}

