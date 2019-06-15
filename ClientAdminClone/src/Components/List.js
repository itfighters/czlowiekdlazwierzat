import React from 'react';
import { list } from '../Utils/mock'
import Card from './list/card';
// import {ButtonContainer} from './list/ButtonContainer';
// import{CategoryContainer} from './list/CategoryContainer';

export function List() {
    return (
        <div>
            <h1>Lista zbiorek</h1>
            {list.map(item => <Card {...item} />)}
        </div>
    )
}