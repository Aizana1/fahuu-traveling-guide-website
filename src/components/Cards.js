import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className="cards">
      <h1>Ближайшие туры и экскурсии</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/photo_2021-07-11_23-55-42.jpg"
              text="Поход на озеро Удзиро (Рача)"
              description="23-24 июля"
              label="Поход"
              path="/tours"
            />
            <CardItem
              src="images/photo_2021-07-11_23-50-16.jpg"
              text="Тур в Тушетию"
              description="25-29 июля"
              label="Тур"
              path="/tours"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/photo_2021-07-12_00-02-29.jpg"
              text="Поход на каньоны Биртвиси"
              description="15 июля"
              label="Поход"
              path="/tours"
            />
            <CardItem
              src="images/photo_2021-07-12_00-24-42.jpg"
              text="Восхождения на вершину Казбек"
              label="Казбек"
              description = "18-23 июля"
              path="/tours"
            />
            <CardItem
              src="images/photo_2021-07-12_00-00-28.jpg"
              text="Тур в Гомис Мта "
              label="Тур"
              path="/tours"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/photo_2021-07-11_17-47-28.jpg"
              text="Экскурсии по парадным Тбилиси"
              description=""
              label="Экскурсия"
              path="/tours"
            />
            <CardItem
              src="images/photo_2021-07-14_00-09-53.jpg"
              text="Тур в Сванетию "
              label="Тур"
              path="/tours"
            />
            <CardItem
              src="images/photo_2021-07-12_00-00-28.jpg"
              text="Тур в Имерети "
              label="Тур"
              path="/tours"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
