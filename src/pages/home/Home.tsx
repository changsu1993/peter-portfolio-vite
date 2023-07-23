import { Header } from '../../components';
import { About } from '../../pages';

const Home = () => {
  return (
    <>
      <Header />
      <section className='section-about'>
        <About />
      </section>
    </>
  );
};

export default Home;
