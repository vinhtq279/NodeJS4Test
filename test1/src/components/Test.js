import React, { Fragment } from 'react';

function ListItem(props) {
  const {item} = props;
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}
const arr1 = [{id: 'a', term: 'vinh'}, {id: 'b', term: 'quang'}];
function Test(){
    return(
        <Glossary items={arr1} />
    );
}

export default Test;