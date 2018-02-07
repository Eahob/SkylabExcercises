'use strict'

class HangmanGame extends React.Component {
    constructor() {
        super()
        this.state = {
            game:{},
            gameResponse:{}
        }
    }
    
    newGame(word,attempts) {
        let game = new Hangman(word, attempts)
        this.setState({game})
    }
    round (playerResponse) {
        let gameResponse = this.state.game.try(playerResponse)
        this.setState({gameResponse})
    }
    render () {
        return <p><span onClick={()=>this.newGame('hola',10)}>lol </span><span onClick={()=>this.round('l')}> kek</span></p>
    }
}
function playButton (props) {
    return <button></button>
}


ReactDOM.render(<HangmanGame />,document.getElementById('main'))
