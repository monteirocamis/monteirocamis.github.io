import React from "react";
import Footer from "../Footer";
import Menu from "../Menu";
import logo from "../../assets/weloop-logo-bw.png";
import sale from "../../assets/sale.png";
import rent from "../../assets/rent.png";
import exchange from "../../assets/exchange.png";
import brands from "../../assets/brands.png";
import repair from "../../assets/repair.png";
import laundry from "../../assets/laundry.png";
import upcycling from "../../assets/upcycling.png";
import donation from "../../assets/donation.png";
import last1 from "../../assets/last1.jpg";
import last2 from "../../assets/last2.jpg";
import last3 from "../../assets/last3.jpg";
import last4 from "../../assets/last4.jpg";

export default function Home() {
  return (
    <body>
      <Menu />
      <div id="home-title-container">
        <img id="home-logo" src={logo}></img>
      </div>
      <div className="main-container">
        <div className="larger-container">
          <h3>O que você procura?</h3>
          <div className="container-home-lg-buttons">
            <div className="smaller-container-two-buttons">
              <button className="home-lg-button">
                <img className="img-home-lg-button" id="sale" src={sale}></img>
                <p>Venda</p>
              </button>
              <button className="home-lg-button">
                <img className="img-home-lg-button" id="rent" src={rent}></img>
                <p>Aluguel</p>
              </button>
            </div>
            <div className="smaller-container-two-buttons">
              <button className="home-lg-button">
                <img
                  className="img-home-lg-button"
                  id="exchange"
                  src={exchange}
                ></img>
                <p>Troca</p>
              </button>
              <button className="home-lg-button">
                <img
                  className="img-home-lg-button"
                  id="brands"
                  src={brands}
                ></img>
                <p>Marcas</p>
              </button>
            </div>
          </div>
          {/*<h3>Contrate um serviço</h3>
        <div className="container-home-lg-buttons">
          <div className="smaller-container-two-buttons">
            <button className="home-lg-button"> <img className="img-home-lg-button" id="repair" src={repair}></img><p>Reparo</p></button>
            <button className="home-lg-button"> <img className="img-home-lg-button" id="laundry" src={laundry}></img><p>Lavanderia</p></button>
          </div>
          <div className="smaller-container-two-buttons">
            <button className="home-lg-button"> <img className="img-home-lg-button" id="upcycling" src={upcycling}></img><p>Upcycling</p></button>
            <button className="home-lg-button"> <img className="img-home-lg-button" id="donation" src={donation}></img><p>Doação</p></button>
          </div>
        </div>*/}
        </div>
        <div className="banner-main-container">
          <button className="banner" id="banner1">
            <h3 id="cadastre-um-servico">Cadastre um serviço</h3>
            <div id="p-cadastre">
              <p1>
                Sabe costurar, fazer upcycling, passar ou lavar como ninguém?
              </p1>
              <p2>Ofereça estes e outros serviços e complemente sua renda.</p2>
            </div>
          </button>
          <button className="banner" id="banner2">
            <h3 id="cadastre-uma-marca">Cadastre uma marca sustentável</h3>
            <div id="p-cadastre">
              <p1>Sua marca é sustentável e/ou circular?</p1>
              <p2>Cadastre-se aqui e conecte-se com a comunidade Weloop.</p2>
            </div>
          </button>
        </div>
        <div className="banner-main-container">
          <button className="banner" id="dicas">
            Dicas Weloop
          </button>
          <button className="banner" id="blog">
            Blog Weloop
          </button>
        </div>
        <div
          className="larger-container"
          id="larger-container-ultimos-produtos"
        >
          <h3>Últimos produtos</h3>
          <div className="ultimos-produtos-main-container">
            <div className="ultimos-produtos-container">
              <button className="ultimos-produtos-btn">
                <img className="last" id="last1" src={last1}></img>
                <div className="ultimos-produtos-preco">
                  <p className="ultimos-produtos-descricao">Moletom vintage</p>
                  <h2>R$ 80,00</h2>
                  <p className="ultimos-produtos-localizacao">
                    RIO DE JANEIRO, RJ
                  </p>
                </div>
              </button>
              <button className="ultimos-produtos-btn">
                <img className="last" id="last2" src={last2}></img>
                <div className="ultimos-produtos-preco">
                  <p className="ultimos-produtos-descricao">Jaqueta jeans</p>
                  <h2>R$ 120,00/dia</h2>
                  <p className="ultimos-produtos-localizacao">SÃO PAULO, SP</p>
                </div>
              </button>
            </div>
            <div className="ultimos-produtos-container">
              <button className="ultimos-produtos-btn">
                <img className="last" id="last3" src={last3}></img>
                <div className="ultimos-produtos-preco">
                  <p className="ultimos-produtos-descricao">Vestido plush</p>
                  <h2>R$ 80,00/dia</h2>
                  <p className="ultimos-produtos-localizacao">SÃO PAULO, SP</p>
                </div>
              </button>
              <button className="ultimos-produtos-btn">
                <img className="last" id="last4" src={last4}></img>
                <div className="ultimos-produtos-preco">
                  <p className="ultimos-produtos-descricao">
                    Cropped customizado
                  </p>
                  <h2>R$ 25,00</h2>
                  <p className="ultimos-produtos-localizacao">SÃO PAULO, SP</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}
