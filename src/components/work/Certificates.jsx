import React from 'react';
import './work.css';
import Works from './Works';
import CertificatesChild from './CertificatesChild';

const Certificates = () => {
  return (
    <section className='work section' id='portfolio'>
      <h2 className='section__title'>Certificates</h2>
      {/* <span className='section__subtitle'>Most recent works</span> */}

      <CertificatesChild />
    </section>
  );
};

export default Certificates;
