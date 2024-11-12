import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="sisyphus-logo">
        <img src="image/testimonial.png" alt="Sisyphus Logo" />
      </div>
      <div className="testimonial-content">
        <p className="testimonial-text">
          We've been using Untitled to kick start every new project and can't imagine
          working without it.
        </p>
        <div className="author-info">
          <img src="https://s3-alpha-sig.figma.com/img/fcd7/e604/94e98ef4a34b3228a1783b7f500b0df6?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YoPw~ezubkPGIFB2YAzqrMDvBhf6244Ks7gYsCuJiLaw6FzSc0X2eC~zU~7nNAynLqeRlzDAsXJcTxAnodY8YxNseOD~s~hHoW-eQcyHueyygInTpmMhAdAd6769cuJpkaFgMKb3S6L1cNeEbnFbafSM~VwG118DaVl9~dng5zc6fYNYk0YHj0Pqd2KM5jxKCLQ6NT0L45kDgxepCYRhTPstnH0jrNNy5EzZA7RkMHpTdjI3GozZr5ECJUrV-GBqdvqNqKtlUnTtbkroJENxP44PxS~dY0gyBpsM4i-Q87zD-avy5G5j2LulmrV70kX1tBDSYWUnRvRVVN83tTxRiA__" alt="Candice Wu" className="author-image" />
          <div className="author-details">
            <p className="author-name">Candice Wu</p>
            <p className="author-title">Product Manager, Sisyphus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
