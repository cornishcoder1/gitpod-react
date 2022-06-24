import React from "react";

//Arrow function
const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello! {props.name}. I see you are {props.age} years old; {props.greeting}</h1>;
} 

export default FunctionalGreetingWithProps;