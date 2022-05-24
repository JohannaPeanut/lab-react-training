const BoxColor = (props) => {
    
    
    return (
      <div className="card" style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>
          <h4>rgb({props.r}, {props.g}, {props.b})</h4>
      </div>
    );
  };
  
  export default BoxColor;