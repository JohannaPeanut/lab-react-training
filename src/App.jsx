import './App.css';
import IdCard from './components/IdCard.jsx';
import Greeting from './components/Greeting.jsx';
import Random from './components/Random.jsx';
import Counter from './components/Counter.jsx';
import BoxColor from './components/BoxColor.jsx';
import CreditCard from './components/CreditCard.jsx';
import Rating from './components/Rating.jsx';

const IdArray = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date('1992-07-14'),
    img: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date('1988-05-11'),
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

function App() {
  return (
    <div className= "App">
      <h2>Iteration 1</h2>
      <IdCard person={IdArray[0]}/>
      <IdCard person={IdArray[1]}/>
      <h2>Iteration 2</h2>
      <Greeting lang='en' text='Johanna'/>
      <Greeting lang='de' text='Tomek'/>
      <Greeting lang='fr' text='Ludwig'/>
      <h2>Iteration 3</h2>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <h2>Iteration 4</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h2>Iteration 5</h2>
      <CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" 
/>
    
<CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
/>
    
<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" 
/>
      <h2>Iteration 6</h2>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <h2>Iteration 4</h2>
      <h2>Iteration 4</h2>

      <Counter />
    </div>
  );
}

export default App;
