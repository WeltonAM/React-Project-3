import './StartScreen.css'
import secret from '../assets/secret.gif'

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
      <img src={secret} alt="secretWord" />
        <button className='play-btn' onClick={startGame} >Começar o jogo</button>
    </div>
  )
}

export default StartScreen