import React from 'react';
import GameService from '../../services/gameService';

export default class GameWrapper extends React.Component {
  componentDidMount() {
    GameService.openGame(this.props.match.params.gameCode);
  }

  render() {
    return (
      <div className='game-container'>
        <div id="game-launch">
          {this.props.match.params.gameCode}
        </div>
      </div>
    );
  }
}