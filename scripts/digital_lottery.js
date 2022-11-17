const d = document;

export default function lottery(selector, btn) {
  const $winnerBtn = d.getElementById(btn);
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
      ramdom = Math.floor(Math.random() * $players.length),
      winner = $players[ramdom];
    console.log(winner);

    return `El Ganador es ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target === $winnerBtn) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}
