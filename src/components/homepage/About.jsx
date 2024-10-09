import React from 'react';

export default function About(){
    return(
        <section id="about" className="section-about">
          <div className="container section__container">
            <h2 className="section__title">О нас</h2>
            <div className="section__text">
              <p>
                Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы
                наблюдаем, как с каждым днем все больше людей заказывают жд
                билеты через интернет.
              </p>
              <p>
                Сегодня можно заказать железнодорожные билеты онлайн всего в 2
                клика, но стоит ли это делать? Мы расскажем о преимуществах
                заказа через интернет.
              </p>
              <p className="section__text-bold">
                Покупать жд билеты дешево можно за 90 суток до отправления
                поезда. Благодаря динамическому ценообразованию цена на билеты в
                это время самая низкая.
              </p>
            </div>
          </div>
        </section>
    )
}