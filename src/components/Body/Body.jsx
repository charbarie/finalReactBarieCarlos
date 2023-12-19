
import CardList from '../CardList/CardList';
import './Body.css'

const Body = () => {
  console.log("entro a body")
  return (
    <>
    <div className='Bodys'>
    <h2>Lista de Productos:</h2>
    <CardList/>
    </div>
    </>
  );
};




export default Body;
