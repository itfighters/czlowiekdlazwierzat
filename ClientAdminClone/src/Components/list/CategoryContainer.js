import React from 'react';
import { Image, List } from 'semantic-ui-react';

function ListItem(props) {

  return <List.Item>
    <Image avatar src={props.image} />
    <List.Content>
      <List.Header>{props.name}</List.Header>
    </List.Content>
  </List.Item>
}

function CategoryList(props) {
  const categories = props.categories;
  const listItems = categories.map(({ image, name }) =>

    <ListItem key={name}
      image={image} name={name} />

  );
  return (
    <List>
      {listItems}
    </List>
  );
}
export default CategoryList;
