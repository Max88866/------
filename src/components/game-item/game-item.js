import React from "react";
import { GameCover } from "../game-cover";
import { GameBuy } from "../game-buy";
import { GameGenre } from "../game-genre";
import "./game-item.css";

// import Img1 from "./../img/img1.jpeg";
// import Img2 from "./../img/img2.jpg";
// import Img3 from "./../img/img3.jpeg";
// import Img4 from "./../img/img4.jpeg";
// import Img5 from "./../img/img5.jpeg";
// import Img6 from "./../img/img6.png";

// const Gallery = [
//   {
//     id: 11,
//     imgsrc: Img1,
//   },
//   {
//     id: 12,
//     imgsrc: Img2,
//   },
//   {
//     id: 13,
//     imgsrc: Img3,
//   },
//   {
//     id: 14,
//     imgsrc: Img4,
//   },
//   {
//     id: 15,
//     imgsrc: Img5,
//   },
//   {
//     id: 16,
//     imgsrc: Img6,
//   },
// ];

export const GameItem = ({ game }) => {
  return (
    <div className="container">
      <div className="game-item">
        <GameCover image={game.image} />
        <div className="game-item_details">
          <span className="game-item_title">{game.title}</span>
          <div className="game-item_genre">
            {game.genres.map((genre) => (
              <GameGenre genre={genre} key={genre} />
            ))}
          </div>
          <div className="game-item_buy">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};
