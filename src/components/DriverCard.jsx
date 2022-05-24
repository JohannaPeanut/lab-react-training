import Rating from './Rating.jsx';

const DriverCard = (props) => {
    
    return (
      <div className="driver-card">
        <img className="profile-img" src={props.img} alt="" />
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>{props.car.model} - {props.car.licensePlate}</p>
      </div>
    );
  };
  
  export default DriverCard;