const CreditCard = (props) => {
    const style ='';
    const icon = '';
    const lastDigits = props.number.slice(12,17);
    // if(props.type === "Visa ") {
    //     style = {backgroundColor: 'green'};
    //     ico
    // } 
    return (
      <div className="credit-card" style={{backgroundColor: props.bgColor, color: props.color}}>
          <h1>{props.type}</h1>
          <h5>···· ···· ···· {lastDigits}</h5>
          <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
          <p>{props.owner}</p>
      </div>
    );
  };
  
  export default CreditCard;