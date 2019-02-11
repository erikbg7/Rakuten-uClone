import React from 'react';


const Footer = () => (
  <div className="footer">
    <div className="footer__info"><h1 className="footer__info__title">Rakuten TV - Tu cine en casa</h1><p
      className="footer__info__text">Disfruta de los últimos estrenos en tu SMART TV y muchos otros dispositivos en tan
      sólo unos clics. Los mejores blockbusters, clásicos premiados y series al instante. Sin contratos ni compromisos.
      Pruébalo ahora y gana Rakuten Súper Puntos con cada compra que realices.</p><a
      className="footer__info__block footer__info__block--howitworks" href="https://ayuda.rakuten.tv"
      target="_blank"><span className="footer__info__block__title">Cómo funciona</span><span
      className="footer__info__block__text">Rakuten TV es compatible con la gran mayoría de dispositivos conectados.</span></a><a
      className="footer__info__block footer__info__block--payments" href="https://ayuda.rakuten.tv"
      target="_blank"><span className="footer__info__block__title">Más formas de pago</span><span
      className="footer__info__block__text">Rakuten TV es compatible con PayPal y con tarjetas de crédito Visa y Mastercard.</span></a><a
      className="footer__info__block footer__info__block--support" href="https://ayuda.rakuten.tv" target="_blank"><span
      className="footer__info__block__title">Ayuda y soporte</span><span className="footer__info__block__text">¿Tienes problemas con nuestro servicio? Ponte en contacto con nuestro equipo de soporte</span></a>
    </div>
    <div className="footer__mini">
      <div className="footer__mini__company">
        <div className="footer__mini__company__wrapper"><a className="footer__mini__company__logo" href="/es"
                                                           target="_self"></a><a className="footer__mini__company__link"
                                                                                 target="_blank"
                                                                                 href="https://rd.rakuten.co.jp/s2/?R2=https%3A%2F%2Fglobal.rakuten.com%2Fcorp%2Fabout%2Fes%2F&amp;D2=638.0.254405.0.32266630&amp;C3=7406e2fdf8a0c2952abce3c27575c64205b95818"
                                                                                 rel="external">Acerca de Rakuten</a><a
          className="footer__mini__company__link" target="_blank" href="/es/pages/impressum">Quiénes somos</a><a
          className="footer__mini__company__link" target="_blank" href="/es/pages/terms_and_conditions_of_use">Condiciones
          de uso</a><a className="footer__mini__company__link" target="_blank" href="/es/pages/privacy_policy">Política
          de privacidad y cookies</a><a className="footer__mini__company__link" target="_blank"
                                        href="https://jobs.rakuten.tv" rel="external">Trabaja con nosotros</a></div>
        <span
          className="footer__mini__company__link footer__mini__company__link--full footer__mini__company__link--nondecored">2009 </span>
      </div>
    </div>
  </div>
);

export { Footer };