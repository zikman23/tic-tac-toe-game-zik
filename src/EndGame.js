const EndGame = ({ newGame, player, draw, X_PLAYER, O_PLAYER }) => {
  return (
    <div className="end-game-screen">
      {!draw && <span className="win-text">{player ? O_PLAYER : X_PLAYER} Wins!</span>}
      {draw && <span className="win-text">Draw</span>}
      <button className="btn" onClick={newGame}>
        Play again
      </button>
    </div>
  );
};
export default EndGame;
