
const NumbersTable = (props) => {

    const arrayOfNo = []
    for(let i=1; i<=props.limit; i++) arrayOfNo.push(i);
    const even = (no) => {return no%2===0}

  return (
    <div>
        <h1>Numbers Table</h1>
        <div className="table">
            {arrayOfNo.map((no) => (
             <div key={no}>{even(no) ?
                <div className="redSquare">{no}</div> : <div className="square">{no}</div>
             }
             </div>
            ))}
        </div>
    </div>
  )
}

export default NumbersTable