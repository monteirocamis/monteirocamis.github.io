import React from "react";

export default function BannersPartners() {
  return (
    <div>
      {/*<!-- separator --> */}
      <div className="separator-small"></div>

      {/*<!-- banners  parceiro --> */}
      <div className="row">
        <div className="col-100 medium-50">
          <div className="container">
            <a
              className="link external"
              href="https://airtable.com/shrX4RjlqscZGc3kN"
            >
              <div className="content-box banner-service">
                <div className="content color-white content-left">
                  <h5 className="title-item color-white">
                    Cadastre um serviço
                  </h5>
                  <p className="text-small">
                    Sabe costurar, upcycling, passar ou lavar como ninguém?{" "}
                  </p>
                  <p className="text-small">
                    {" "}
                    Ofereça serviços e complemente sua renda.
                  </p>
                </div>
                <div className="content content-right">
                  <div className="button button-icon-large">
                    <ion-icon
                      name="arrow-forward-outline"
                      role="img"
                      className="md hydrated"
                      aria-label="arrow forward outline"
                    ></ion-icon>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="col-100 medium-50">
          <div className="container-brand">
            <a
              className="link external"
              href="https://airtable.com/shrp4Mg60naE3Di8A"
            >
              <div className="content-box banner-brand">
                <div className="content color-white content-left">
                  <h5 className="title-item color-white">
                    Cadastre uma marca sustentável
                  </h5>
                  <p className="text-small">
                    Sua marca é sustentável e/ou circular?
                  </p>
                  <p className="text-small">
                    Cadastre-se aqui e conecte-se com a comunidade Weloop.
                  </p>
                </div>

                <div className="content content-right">
                  <div className="button button-icon-large">
                    <ion-icon
                      name="arrow-forward-outline"
                      role="img"
                      className="md hydrated"
                      aria-label="arrow forward outline"
                    ></ion-icon>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
