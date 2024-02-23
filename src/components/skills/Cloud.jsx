import React from 'react';

const Cloud = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Cloud</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>AWS</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          {/* <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Gitlab</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Eclipse</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div> */}
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Big Data - Hadoop and spark</h3>
              <span className='skills__level'>Adavanced</span>
            </div>
          </div>

          {/* <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Intellij</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>STS</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cloud;
