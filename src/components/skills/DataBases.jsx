import React from 'react';

const DataBases = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>DataBases</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>SQL</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>MongoDb</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Hive</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Neo4j</h3>
              <span className='skills__level'>Adavanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>HBase</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Pig</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBases;
