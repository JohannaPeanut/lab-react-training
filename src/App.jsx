import './App.css';
import IdCard from './components/IdCard.jsx';
import Greeting from './components/Greeting.jsx';
import Random from './components/Random.jsx';


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
    <div className="App">
     
      <IdCard person={IdArray[0]}/>
      <IdCard person={IdArray[1]}/>
      
      <Greeting lang='en' text='Johanna'/>
      <Greeting lang='de' text='Tomek'/>
      <Greeting lang='fr' text='Ludwig'/>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    </div>
  );
}

export default App;
