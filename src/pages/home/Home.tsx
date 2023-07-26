import { Header } from '../../components';
import { About, Contact, ProjectPage } from '../../pages';

const Home = () => {
  return (
    <>
      <Header />
      <section className='section-about'>
        <About />
      </section>
      <ProjectPage />
      <Contact />
    </>
  );
};

export default Home;
