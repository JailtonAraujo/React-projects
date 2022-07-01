import './GameOver.css'

const GameOver = ({retry}) => {
  return (
    <div className='game_over'>
        <h2>GameOver</h2>
        <button onClick={retry}>Reiniciar jogo</button>

    </div>
  )
}

export default GameOver