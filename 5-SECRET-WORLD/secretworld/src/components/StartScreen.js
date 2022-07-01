import './StartScreen.css'

function StartScreen({startGame}) {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Click no botão abaixo para começar o jogo!</p>
        <button onClick={startGame}>Começar jogo!</button>
    </div>
  )
}

export default StartScreen