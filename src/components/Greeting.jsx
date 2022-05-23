const Greeting = (props) => {
    let greeting =''
    if(props.lang==='en') greeting = "Hello"
    if(props.lang==='es') greeting = "Hola"
    if(props.lang==='fr') greeting = "Bonjour"
    if(props.lang==='de') greeting = "Hallo"
    return (
      <div>
          <p>{greeting} {props.text}</p>
      </div>
    );
  };
  
  export default Greeting;