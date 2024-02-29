import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import classes from './Home.module.css';
import TextBox from '../components/TextBox/TextBox';
import Form from '../components/Form/Form';
import FotoBox from '../components/FotoBox/FotoBox';

function Home(): JSX.Element {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  return (
    <div className={classes.container}>
      <Header windowSize={width} />
      {width >= 900 && <FotoBox />}
      <Form windowSize={width} />
      <TextBox windowSize={width} />
      <Footer windowSize={width} />
    </div>
  );
}

export default Home;
