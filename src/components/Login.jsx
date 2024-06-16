import './styles/Login.css';
import UncontrolledExample from './imgs/Carousel';

export const Login = () => {
  return (
    <>
      <div className='container-buttons'>
        <input type='button' className='button' value='HOME' />
        <input type='button' className='button' value='PRÉ-MATRICULA' />
        <input type='button' className='button' value='EVENTOS' />
        <input type='button' className='button' value='LOGIN' />
      </div>
      <UncontrolledExample />
    </>
  );
};
