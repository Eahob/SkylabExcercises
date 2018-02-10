'use strict'

class HangmanGame extends React.Component {
    constructor() {
        super()
        this.state = {
            game: {},
            gameResponse: {}
        }
    }

    newGame(word, attempts) {
        let game = new Hangman(word, attempts)
        this.setState({ game })
    }
    round(playerResponse) {
        let gameResponse = this.state.game.try(playerResponse)
        this.setState({ gameResponse })
    }
    render() {
        return <div><GameSet onGameSetInfo={this.newGame.bind(this)}/>
        <span onClick={() => this.newGame('hola', 10)}>lol </span>
        <span onClick={() => this.round('l')}> kek</span>
        </div>
    }
}
class GameSet extends React.Component {
    constructor() {
        super()
        this.state = {
            word:'',
            attempts:1
        }
    }
    keepWord = e => this.setState({ word: e.target.value })
    keepAttempts = e => this.setState({ attempts: e.target.value })
    gameSetInfo = () => {
        if (this.state.word) { this.props.onGameSetInfo(this.state.word)}
        this.setState({ word: '' })
    }
    render() {
        return <form onSumit={e => {
                e.preventDefault()
                this.gameSetInfo()
            }}>
            <label>Enter a word:</label>
            <input type="text" placeholder="A word to guess" onChange={this.keepWord} value={this.state.word}/>
            <label>Number of attemps: </label>
            <input type="number" min="1" onChange={this.keepAttempts} value={this.state.attempts}/>
            <input type="submit" value="GO" />
        </form>
    }
}

ReactDOM.render(<HangmanGame />, document.getElementById('main'))
