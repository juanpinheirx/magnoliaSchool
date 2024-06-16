import './styles/Header.css';
import magnolia from '../assets/magnolia.svg';

export const Header = () => {
  return (
    <>
      <div className='container1'>
        <div id='um'>
          <img src={magnolia} alt='Logo' className='magnolia' />
        </div>
        <div id='dois'>
          <h1>COLÉGIO MAGNÓLIA LOURENÇO</h1>
        </div>
      </div>
      <div className='container2'>
        <h2>ENSINO BÁSICO, FUNDAMENTAL E MÉDIO.</h2>
      </div>

      <hr className='linha'></hr>
    </>
  );
};
