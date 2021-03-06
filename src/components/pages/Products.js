import React from 'react'
import '../../App.css'

export default function Products() {
  return (
    <div className="products">
      <div className="container">
      <img src="/images/photo_2021-07-12_00-55-43.jpg" alt="Logo" />

        <ul>
          {' '}
          <h1>Какие услуги я предлагаю?</h1>
          <li>
            <div>
              Первым делом, конечно же, нестандартные и интересные туры.
              Направлений очень много и они охватывают почти всю Грузию. Вы
              сможете посетить
              <b> Сванетия, Рачу (горные регионы),</b> так и <b>Имеретию </b>
              (каньоны, водопады, туристические пещеры), а так же{' '}
              <b>Казбеки </b>и тд. Для вас уже написаны готовые пакеты - «Зимняя
              Сказка», «Весеннее пробуждение» и тд.
            </div>
          </li>
          <li>
            <div>
              Отдельно не могу не отметить экскурсии в Тбилиси, будь это
              обзорная экскурсия, или популярная экскурсия по парадным. Отличие
              в том, что экскурсии по парадным в большинстве случаев провожу я,
              а вот обзорную доверю своей команде. Кстати, в нашей команде
              квалифицированные гиды, опытные водители и Кэти.{' '}
              <span role="img" aria-label="emoji">
                😅
              </span>
            </div>
          </li>
          <li>
            <div>
              Для самостоятельных прогулок настоятельно рекомендую kml файл с
              адресами парадных в Тбилиси. Если вы не хотите тратить время на
              поиски парадных, вы можете приобрести файл и загрузить у себя в
              телефоне на карту. Там не только адреса, коды дверей, фотографии,
              истории, но самое главное файл работает в офлайн режиме. Еще один
              спойлер - готовлю такой же файл по парадным в Баку.
            </div>{' '}
          </li>
          <li>
            <div>
              Хочу отметить, что в этом году я начал организовывать туры и
              экскурсии в Азербайджане
              <span role="img" aria-label="flag">
                🇦🇿
              </span>
              . Там стандартные и нестандартные туры, а так же парадные в Баку
              не остаются без внимания путешественников. В будущем планирую сам
              провести экскурсию по парадным в родном городе.
            </div>{' '}
          </li>
        </ul>
        <div>
          <ul>
            Кроме всех перечисленных существуют следующие услуги:
            <li>
              <div>
                Составление маршрута вашего отдыха по Грузии. Когда меня
                спрашивали, почему я начал проводить туры, то самый честный
                ответ был: "Я знаю Грузию как свои пять пальцев". Я объездил всю
                Грузию, знаю карту, даже если меня разбудят ночью. У меня всегда
                есть план Б, если маршрут вдруг изменится, например, из-за
                погоды. Мои знания помогают мне составлять интересные маршруты,
                если туристы сами решили путешествовать по Грузии.
              </div>{' '}
            </li>
            <li>
              <div>
                Творческая часть - я провожу фотосессии, стараясь создать
                композицию. Часто использую уникальные локации и национальную
                грузинскую одежду. Фотосессию вы можете заказать и во время
                экскурсии по парадным, и даже во время тура.
              </div>
            </li>
          </ul>
        </div>
        <div>
          Что еще сказать? Всё, что я делаю и создаю, наглядно можете увидеть в моих блогах в инстаграм @fa_huu и телеграм @fa_huu. 
          Думаю, что вы оцените мои труды.
        </div>
      </div>
    </div>
  )
}
