import './App.css';
import Navbar from './Navbar';
// import Hero from './Hero';
import Card from './Card';
import data from './data';
// import kate from '../src/images/katie-zaferes.png';
// import star from '../src/images/star.png';

export default function App() {

  const cards = data.map(item => {
    return(
        <Card
          key={item.id}
          {...item} //Spread: brings in all props so  that you dont have to name every property
          />
    )
  })

  return (
    <div>
        <Navbar/>
        <section className='cards-list'>
          {cards}
        </section>
    </div>
  );
}


