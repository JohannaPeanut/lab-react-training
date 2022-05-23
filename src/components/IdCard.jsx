const IdCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={props.person.img} alt="" />
      </div>
      <div className="card-content">
        <p><b>Last Name: </b>{props.person.lastName}</p>
        <p><b>First Name: </b>{props.person.firstName}</p>
        <p><b>Gender: </b>{props.person.gender}</p>
        <p><b>height: </b>{props.person.height}</p>
        <p><b>birth: </b>{props.person.birth.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default IdCard;
