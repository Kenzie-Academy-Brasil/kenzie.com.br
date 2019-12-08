import React from "react";
import Layout from "@layout/default";

import Thumbnail from "@components/thumbnail";

import FirstImage from "@images/about-us/photo-1.png";
import SecondImage from "@images/about-us/photo-2.png";

import "@styles/pages/about-us.scss";

const Index = () => {
  return (
    <Layout>
      <div className="page">
        <div className="container">
          <div className="column">
            <div className="page-head">
              <h3>Quem somos</h3>

              {/* prettier-ignore */}
              <p>
                Começamos em <span class="is-bold">2017</span> nos <span class="is-bold">Estados Unidos</span> com o
                propósito de oferecer a oportunidade para pessoas se formarem e
                ingressarem no mercado de <span class="is-bold">tecnologia rapidamente</span>, 
                sem mensalidade e com <span class="is-bold">alta qualidade</span>.
              </p>

              <iframe
                width="560"
                height="315"
                className="kz-about-us-iframe"
                src="https://www.youtube.com/embed/aKrv8YsMYaY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="kz-about-us-section container">
          <div className="columns is-vcentered">
            <div className="column is-8">
              <Thumbnail src={FirstImage} reverse={true} />
            </div>

            <div className="column is-4">
              {/* prettier-ignore */}
              <p>
                Agora iniciamos nosso trabalho no <span class="is-bold">Brasil</span>, trazendo todo a
                experiência adquirida no mercado americano. Nosso objetivo é
                fomentar essa área, garantindo que nossos alunos
                tenham a expertise para atuação como <span class="is-bold">desenvolvedor full-stack</span>
                após <span class="is-bold">12 meses de curso</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="kz-about-us-section container">
          <div className="columns is-vcentered">
            <div className="column is-5">
              {/* prettier-ignore */}
              <p>
                A <span class="is-bold">Kenzie Academy</span> atua a mais de <span class="is-bold">3 anos</span>, 
                com mais de <span class="is-bold">500 alunos matriculados</span>. Recentemente, levantamos um 
                fundo de investimento de <span class="is-bold">US$100 milhões</span> para dar oportunidade a 
                milhares de novos alunos transformarem suas vidas.
              </p>
            </div>

            <div className="column is-8">
              <Thumbnail src={SecondImage} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;