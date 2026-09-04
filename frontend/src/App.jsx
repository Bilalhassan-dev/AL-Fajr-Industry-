import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ManufactureSection from './components/ManufactureSection';
import Capabilities from './components/Capabilities';
import Products from './components/Products';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [modalSource, setModalSource] = useState(null); // null | 'get_in_touch' | 'know_more' | 'start_project'

  return (
    <>
      <Navbar onGetInTouch={() => setModalSource('get_in_touch')} />
      <Hero onKnowMore={() => setModalSource('know_more')} />
      <ManufactureSection onStartProject={() => setModalSource('start_project')} />
      <Capabilities />
      <Products />
      <Footer />

      {modalSource && (
        <ContactModal source={modalSource} onClose={() => setModalSource(null)} />
      )}
    </>
  );
}
