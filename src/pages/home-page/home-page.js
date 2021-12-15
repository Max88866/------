import React from "react";
import { GameItem } from "../../components/game-item";
import "./home-page.css";
// import Img1 from "./img/img1.jpeg";
import Img2 from "./img/img2.jpg";
import Img3 from "./img/img3.jpeg";
import Img4 from "./img/img4.jpeg";
import Img5 from "./img/img5.jpeg";
import Img6 from "./img/img6.png";

const GAMES = [
  {
    image: "https://pbs.twimg.com/media/EG-DUwMVAAEZU1D.jpg",
    title: "Forza Horizon 5",
    genres: ["Гонки", "Симулятор", "Открытый мир"],
    price: 2343,
    video: "https://www.youtube.com/embed/FYH9n37B7Yw",
    id: 1,
    description:
      "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
  },
  {
    image: Img2,
    title: "Battlefield 2042",
    genres: ["Экшен", "Шутер", "Война"],
    video: "https://www.youtube.com/embed/ASzOzrB-a9E",
    price: 2433,
    id: 2,
    description:
      "Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.",
  },
  {
    image: Img3,
    title: "Life is Strange True Colors",
    genres: ["Глубокий сюжет", "Протагонистка"],
    video: "https://www.youtube.com/embed/b6CkzwVAr0M",
    price: 3021,
    id: 3,
    description:
      "Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.",
  },
  {
    image: Img4,
    title: "Grand Theft Auto V",
    genres: ["Открытый мир", "Экшен"],
    video: "https://www.youtube.com/embed/QkkoHAzjnUs",
    price: 789,
    id: 4,
    description:
      "Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.",
  },
  {
    image: Img5,
    title: "Tom Clancy's Rainbow Six® Siege",
    video: "https://www.youtube.com/embed/6wlvYh0h63k",
    genres: ["Тактика", "Шутер"],
    price: 982,
    id: 5,
    description:
      "Tom Clancy's Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.",
  },
  {
    image: Img6,
    title: "Assassin’s Creed Valhalla",
    genres: ["Паркур", "РПГ", "Открытый мир"],
    video: "https://www.youtube.com/embed/ssrNcwxALS4",
    price: 2863,
    id: 6,
    description:
      "Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.",
  },
  {
    image:
      "https://cs6.pikabu.ru/post_img/big/2015/04/26/6/1430037626_1786129976.jpg",
    title: "Сrystal lake",
    genres: ["Тактика", "Симулятор", "Открытый мир"],
    price: 1344,
    video: "https://www.youtube.com/embed/FYH9n37B7Yw",
    id: 1,
    description:
      "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
  },
  {
    image:
      "https://aasarchitecture.com/wp-content/uploads/Parkorman-by-Dror-02.jpg",
    title: "Fairy forest",
    genres: ["РПГ", "Симулятор", "Открытый мир"],
    price: 1783,
    video: "https://www.youtube.com/embed/FYH9n37B7Yw",
    id: 1,
    description:
      "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
  },
  {
    image:
      "https://fsb.zobj.net/crop.php?r=btbc8qxCfSITOo2TSN67GJoUYDgkwCJJW31WGtMAHJGp8gwOrZq2pyqDBQkbgzzICMcXCU2f6FT_Cu_EG2G3zxodYiENz5AogNDojqu5U69pCGCTkAqwrKtO8KdXiLdpFnR7_qnzC-UK28Oe",
    title: "Forest Hut",
    genres: ["РПГ", "Симулятор", "Открытый мир"],
    price: 1253,
    video: "https://www.youtube.com/embed/FYH9n37B7Yw",
    id: 1,
    description:
      "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
  },
  {
    image: "https://zastavok.net/ts/prazdniki/1639343083.jpg",
    title: "Santa claus",
    genres: ["Тактика", "Симулятор", "Открытый мир"],
    price: 2103,
    video: "https://www.youtube.com/embed/FYH9n37B7Yw",
    id: 1,
    description:
      "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
  },
  {
    image:
      "https://img2.goodfon.com/original/1400x1050/0/3d/zamok-gogencollern.jpg",
    title: "Wonderful lake",
    genres: ["РПГ", "Симулятор", "Открытый мир"],
    price: 2273,
    video: "https://www.youtube.com/embed/FYH9n37B7Yw",
    id: 1,
    description:
      "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
  },
  {
    image: "https://pbs.twimg.com/media/CwqFBY1WQAApb5V.jpg:large",
    title: "Night castle",
    genres: ["Экшен", "Симулятор", "Открытый мир"],
    price: 1993,
    video: "https://www.youtube.com/embed/FYH9n37B7Yw",
    id: 1,
    description:
      "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
  },
];

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home">
        {GAMES.map((obj) => (
          <GameItem game={obj} key={obj.id} />
        ))}
      </div>
    </div>
  );
};
