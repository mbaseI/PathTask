import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './style.module.css';
import Slider from 'react-slick';

const Home: React.FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 0,
    swipe: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          swipe: true,
        },
      },
    ],
  };
  return (
    <>
      <div className={styles.home}>
        <div className={styles.home__column}>
          <div className={styles.home__columnContent}>
            <h1 className={styles.home__headText}>
              Refresh Your Office Attire or Kick Back in Stylish Sneakers for the Weekend
            </h1>
            <button className={styles.home__button}>
              SHOP NOW
              <FontAwesomeIcon className={styles.home__buttonIcon} icon={faChevronRight} />
            </button>
          </div>
          <img
            className={`${styles.home__image} ${styles.xsHidden}`}
            src={
              'https://s3-alpha-sig.figma.com/img/1790/4ddc/76441038e48fc2b45f52a63650a5a90e?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AjfMpZy0bHnra~jDb3IDX7xSv06xPpbUEPeS9~cvYVWTg3nmYIHSOptXOHe67Q3RTgu1IypXLp7NtxAUk6Ug6JQ7ycCSS89m3nj6td9PMSpU4WIuqx7G6Sq2hxREMUwh7qseRLGXzf8nfAAZlj3JyqURCKxe5~vhlt0bbRwWXA-kVxSj-qWQD7XeZhJ8BooogVclqyQt0ylD0bkSpkwgmhILh3Khc29HteBrfptgAjBmZ~E-w~4hD0O-U~yMSCr6u6o~DNr9zSEjgd0s4~bH-7pYi1OJZKczhuz448r75pXYrmUGH9ZQPRFs08LIyPxM9OTSPFiUCtgagQGnihe8Jg__'
            }
            alt={'Nike Air Max'}
          />
        </div>

        <div className={styles.home__column}>
          <Slider {...settings}>
            <div className={styles.home__columnContent}>
              <img
                className={styles.home__image}
                src={
                  'https://s3-alpha-sig.figma.com/img/fb3f/b5af/6093e2ace4f4a98ae3d6277e0c55e29b?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q7C4Kr8RoO-bMqh2VfjPGD9t7OZRvmjFgX6-wzxTEObsG54su6GR1-ApiIXr4MqYNni9d-u~9l3ibq1PEZihp3Rdb~EDTp68D7gTIUd2VTHztD6AvZNmXmpk0YDzYEfvXycbAY0yD~SFq5S8kUH0Nj6fbPhJaUvqk0zhcd9lvMQJMY1bdVi-dcDo43Vpdl8yYEdetSSuWIyPnKbw0xa~YPPKBh8INSUxnA-p8NDn3hyZZI6TQVKuMprbUVeAMtwMSp2XHnRLkPzlsprP-naP9MrAy93zlXoPOCAyMNmEtfaLJI6U~cmwFciDuMyLd~aFUqMa20k3pTPVexndmuQ0nA__'
                }
                alt={'Nike Air Max'}
              />
              <div className={styles.home__productInfo}>
                <p className={styles.home__productTitle}>Nike Air Max</p>
                <p className={styles.home__productPrice}>$190</p>
              </div>
            </div>
            <img
              className={styles.home__image}
              src={
                'https://s3-alpha-sig.figma.com/img/1790/4ddc/76441038e48fc2b45f52a63650a5a90e?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AjfMpZy0bHnra~jDb3IDX7xSv06xPpbUEPeS9~cvYVWTg3nmYIHSOptXOHe67Q3RTgu1IypXLp7NtxAUk6Ug6JQ7ycCSS89m3nj6td9PMSpU4WIuqx7G6Sq2hxREMUwh7qseRLGXzf8nfAAZlj3JyqURCKxe5~vhlt0bbRwWXA-kVxSj-qWQD7XeZhJ8BooogVclqyQt0ylD0bkSpkwgmhILh3Khc29HteBrfptgAjBmZ~E-w~4hD0O-U~yMSCr6u6o~DNr9zSEjgd0s4~bH-7pYi1OJZKczhuz448r75pXYrmUGH9ZQPRFs08LIyPxM9OTSPFiUCtgagQGnihe8Jg__'
              }
              alt={'Nike Air Max'}
            />
          </Slider>
          <div>
            <p className={styles.home__description}>
              Refresh your office attire or kick back in stylish sneakers for the weekend. Our
              collection seamlessly blends comfort and style, perfect for both professional settings
              and casual outings. Whether you’re doing, our sneakers will keep you looking sharp and
              feeling great.
            </p>
            <span className={styles.home__navbutton}>Read More</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
