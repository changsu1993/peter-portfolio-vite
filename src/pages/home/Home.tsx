import { Header } from '../../components';
import { About, ProjectPage } from '../../pages';

const Home = () => {
  return (
    <>
      <Header />
      <section className='section-about'>
        <About />
      </section>
      <ProjectPage />
    </>
  );
};

export default Home;
