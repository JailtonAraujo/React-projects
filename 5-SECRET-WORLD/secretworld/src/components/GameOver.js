import './GameOver.css'

const GameOver = ({retry,score}) => {
  return (
    <div className='game_over'>
        <h2>Fim de jogo</h2>
        <h2>A sua pontuação foi: <span>{score}</span> </h2>
        <button onClick={retry}>Reiniciar jogo</button>

    </div>
  )
}

export default GameOver