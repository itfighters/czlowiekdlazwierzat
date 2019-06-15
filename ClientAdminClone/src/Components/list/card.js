import React from 'react';
import { Card, Image, Button, List } from 'semantic-ui-react';
// import {ButtonContainer} from './list/ButtonContainer';
// import{CategoryContainer} from './list/CategoryContainer';
// import CategoryContainer from './CategoryContainer';

const CardExampleCardProps = ({ title, description, src, undertitle, namecategory, categories }) => (
  <Card>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{undertitle}</Card.Meta>
      <Image floated='right' src={src} />
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content>
      {/* <CategoryContainer categories={categories} /> */}
    </Card.Content>
    <Card.Content>
      <Button>Edycja i powiadomenia</Button>
    </Card.Content>
  </Card>

)

export default CardExampleCardProps
