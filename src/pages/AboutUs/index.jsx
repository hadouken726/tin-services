import React, { useEffect, useRef } from "react";

import Glass from "../../components/Glass";
import Header from "../../components/Header";
import Carousel from "react-multi-carousel";
import VanillaTilt from "vanilla-tilt";
import "react-multi-carousel/lib/styles.css";

import globe from "../../assets/globe.svg";
import visibility from "../../assets/visibility.svg";
import wallet from "../../assets/wallet.svg";
import security from "../../assets/security.svg";
import agility from "../../assets/agility.svg";
import { Container, Mission, Card } from "./styles";

const Tilt = (props) => {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, {
      max: 25,
      speed: 400,
      glare: true,
      scale: 1.2,
    });
  }, []);

  return <div ref={tilt} {...rest} />;
};

const AboutUs = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const options = {
    speed: 400,
    max: 25,
  };

  return (
    <Container>
      <Glass size={90}>
        <Header current="about" />
        <Carousel
          responsive={responsive}
          draggable={true}
          showDots={true}
          arrows={true}
          renderButtonGroupOutside={true}
        >
          <Mission>
            <div className="textBox">
              <h1>O que a Tin Services tem como missão?</h1>

              <p>
                Unir dois polos interessados, clientes e prestadores de
                serviços. Fazendo com que essa interação se concentre em uma
                única plataforma que potencialize o setor de serviços. Fazendo
                com que ambas as partes saiam satisfeitas.
              </p>
            </div>
            <div className="imageBox">
              <img src={globe} alt="Globe" draggable="false" />
            </div>
          </Mission>
          <Mission className="benefits">
            <h2>O que a Tin services entrega de benefícios?</h2>

            <div className="cardsBox">
              <Card>
                <Tilt className="tilt" options={options}>
                  <Glass size={100}>
                    <div className="benefit">
                      <img
                        src={visibility}
                        alt="Visibilidade"
                        draggable="false"
                      />
                      <span>Visibilidade</span>
                    </div>
                  </Glass>
                </Tilt>
              </Card>

              <Card>
                <Tilt options={options}>
                  <Glass size={100}>
                    <div className="benefit">
                      <img src={wallet} alt="Facilidade" draggable="false" />
                      <span>Facilidade</span>
                    </div>
                  </Glass>
                </Tilt>
              </Card>
              <Card>
                <Tilt options={options}>
                  <Glass size={100}>
                    <div className="benefit">
                      <img src={security} alt="Segurança" draggable="false" />
                      <span>Segurança</span>
                    </div>
                  </Glass>
                </Tilt>
              </Card>
              <Card>
                <Tilt options={options}>
                  <Glass size={100}>
                    <div className="benefit">
                      <img src={agility} alt="Agilidade" draggable="false" />
                      <span>Agilidade</span>
                    </div>
                  </Glass>
                </Tilt>
              </Card>
            </div>
          </Mission>
        </Carousel>
      </Glass>
    </Container>
  );
};

export default AboutUs;
