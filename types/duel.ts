type Player = {
  name: string;
  image: {
    src: string;
    alt: string;
  };
}

export type Duel = {
  id: string;
  player1: Player;
  likesPlayer1: number;
  player2: Player;
  likesPlayer2: number;
}
