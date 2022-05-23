const Random = (props) => {
    
    let randomNo = Math.floor(Math.random() * props.max - props.min);
    return (
      <div>
          <p>A random Number between {props.min} and {props.max} is {randomNo}</p>
      </div>
    );
  };
  
  export default Random;