import React from 'react';
import { Card, Image, Button, Grid,  } from 'semantic-ui-react';

import CategoryContainer from './CategoryContainer';

const CardExampleCardProps = ({ title, description, src, undertitle, namecategory, categories }) => (
  <Grid>
    <Grid.Column  className="liststyle">
    <Card.Group>
      <Card>
    
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{undertitle}</Card.Meta>
      <Image floated='right' src={src} />
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content>
      <CategoryContainer categories={categories} />
    </Card.Content>
    <Card.Content>
      <Button>Edycja i powiadomenia</Button>
    </Card.Content>
  </Card>
  
  <Card>
  
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{undertitle}</Card.Meta>
      <Image floated='right' src={src} />
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content>
      <CategoryContainer categories={categories} />
    </Card.Content>
    <Card.Content>
      <Button >Edycja i powiadomenia</Button>
    </Card.Content>
  </Card>
  </Card.Group>
  </Grid.Column></Grid>

)


export default CardExampleCardProps
