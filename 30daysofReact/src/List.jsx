import React from 'react'
import propTypes from 'prop-types'

const List = (props) => {

  const itemLists = props.item;
  const category = props.category;

  const listItems = itemLists.map(fruits => <li key={fruits.id}>{fruits.name} : {fruits.calories}</li>)

   // const lowCalFruit = fruits.filter(fruit => fruit.calories <= 100);
   // const highFruit = fruits.filter(fruit => fruit.calories >= 100);

  // fruits.sort((a,b)=> a.name.localeCompare(b.name));
  // fruits.sort((a,b)=> b.name.localeCompare(a.name));
  // fruits.sort((a,b) => a.calories - b.calories);
  // fruits.sort((a,b) => b.calories - a.calories);

 // const listItems = lowCalFruit.map(fruits => <li key={fruits.id}>{fruits.name} : {fruits.calories}</li>)
 // const listItems = highFruit.map(fruits => <li key={fruits.id}>{fruits.name} : {fruits.calories}</li>)

  return (
    <>
    <h3>{category}</h3>
    <ol>
      {listItems}
    </ol>
    </>
  )
}

List.defaultProps = {
  item:[],
  category:"Category"
}

List.propTypes = {
  item:propTypes.arrayOf(propTypes.shape({id:propTypes.number, name:propTypes.string,calories:propTypes.number})),
  category:propTypes.string,
}

export default List