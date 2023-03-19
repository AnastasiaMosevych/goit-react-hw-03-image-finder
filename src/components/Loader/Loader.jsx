import { ColorRing } from 'react-loader-spinner';
import { Component } from 'react';
import { Container } from 'components/App.styled';

export class Loader extends Component {
  render() {
    return <Container>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        margin="0 auto"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
      />
    </Container>
  }
}
