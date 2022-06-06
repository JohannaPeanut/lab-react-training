const Rating = (props) => {

    const roundedRating = Math.round(Number(props.children))
    
    let rating = '☆'.repeat(5-roundedRating) + '★'.repeat(roundedRating);
    // if (roundedRating === 0) rating = '☆☆☆☆☆'
    // if (roundedRating === 1) rating = '★☆☆☆☆'
    // if (roundedRating === 2) rating = '★★☆☆☆'
    // if (roundedRating === 3) rating = '★★★☆☆'
    // if (roundedRating === 4) rating = '★★★★☆'
    // if (roundedRating === 5) rating = '★★★★★'
    return (
      <div className="credit-card">
          <h1>{rating}</h1>
      </div>
    );
  };
  
  export default Rating;