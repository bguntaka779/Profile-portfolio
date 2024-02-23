import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { certificatesData } from './CertificatesData';
// import { projectsNav } from './Data';
import CertificateItems from './CertificateItems';

const CertificatesChild = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [certificates, setCertificates] = useState(certificatesData);
  const [active, setActive] = useState(0);

  // useEffect(() => {
  //   if (item.name === 'all') {
  //     setCertificates(projectsData);
  //   } else {
  //     const newProjects = projectsData.filter((project) => {
  //       return project.category.toLowerCase() === item.name;
  //     });
  //     setCertificates(newProjects);
  //   }
  // }, [item]);

  // const handleClick = (e, index) => {
  //   setItem({ name: e.target.textContent.toLowerCase() });
  //   setActive(index);
  // };
  return (
    <div>
      {/* <div className='work__filters'>
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? 'active-work' : ''} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div> */}

      <div className='work__container container grid'>
        {certificates.map((item) => {
          return <CertificateItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default CertificatesChild;
