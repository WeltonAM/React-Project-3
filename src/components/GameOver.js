import './GameOver.css'

const GameOver = ({ retry, score }) => {
  return (
    <div className='gameOver'>
      <div>
        <h1>Game Over!</h1>

        <h2>Sua pontuação foi:
          <br />
          <span>{score}</span>
        </h2>

        <button className='play-btn' onClick={retry}>Jogar Novamente</button>
      </div>
    </div>
  )
}

export default GameOver