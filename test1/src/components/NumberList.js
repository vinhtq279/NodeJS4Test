function NumberList(props){
    const numbers = props.numbers;
    //const listItems = numbers.map((item) => <li key={item.toString()}>{item}</li>);
    const listItems = numbers.map(mapFunction);
    function mapFunction(item){
        return <li key={item.toString()}>{item}</li>
    }
    return(
        <ul>{listItems}</ul>
    );
}

export default NumberList;