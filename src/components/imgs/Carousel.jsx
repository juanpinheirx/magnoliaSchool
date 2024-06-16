import Carousel from 'react-bootstrap/Carousel';
import { Image1 } from './Image1';
import { Image2 } from './Image2';

function UncontrolledExample() {
  return (
    <Carousel style={
      {
        width: '100%',
        height: '100%',
      }
    
    } >
      <Carousel.Item>
        <Image1 text="First slide" />
        <Carousel.Caption>
          <h3 style={
            {
              color: 'black',
              textShadow: '1px 1px 1px white',
            }
          } >2025 é o ano da educação Magnólia</h3>
          <p style={
            {
              color: 'black',
              textShadow: '1px 1px 1px white',
            }
          
          } >Estamos com as mastrículas abertas!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image2 text="Second slide" />
        <Carousel.Caption>
          <h3 style={
            {
              color: 'black',
              textShadow: '1px 1px 1px white',
            }
          
          } >Vem com a gente</h3>
          <p style={
            {
              color: 'black',
              textShadow: '1px 1px 1px white',
            }
          } >Estamos com as mastrículas abertas!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;