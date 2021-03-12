import React, { Component } from 'react';
import './Joke.css';
class Joke extends Component {
  getColor() {
    if (this.props.votes >= 15) {
      return '#4CAF50';
    } else if (this.props.votes >= 12) {
      return '#8BC34A';
    } else if (this.props.votes >= 9) {
      return '#CDDC39';
    } else if (this.props.votes >= 6) {
      return '#FFEB3B';
    } else if (this.props.votes >= 3) {
      return '#FFC107';
    } else if (this.props.votes >= 0) {
      return '#FF9800';
    } else {
      return '#F44336';
    }
  }
  getEmoji() {
    if (this.props.votes >= 15) {
      return 'em em-rolling_on_the_floor_laughing';
    } else if (this.props.votes >= 12) {
      return 'em em-laughing';
    } else if (this.props.votes >= 9) {
      return 'em em-smiley';
    } else if (this.props.votes >= 6) {
      return 'em em-slightly_smiling_face';
    } else if (this.props.votes >= 3) {
      return 'em em-neutral_face';
    } else if (this.props.votes >= 0) {
      return 'em em-confused';
    } else {
      return 'em em-angry';
    }
  }

  //change for swicht

  /*
  var foo = 0;
switch (foo) {
    case -1:
        console.log('1 negativo');
        break;
    case 0: // foo é 0 então aqui o critério foi correspondido, então esse bloco vai rodar
        console.log(0)
        // NOTA: o break esquecido deveria estar aqui
    case 1: // nenhuma instrução break em 'case 0:' então essa instrução vai rodar também
        console.log(1);
        break; // o programa encontra esse break então não vai continuar para o 'case 2:'
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}
  */

  render() {
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <i className="fas fa-arrow-up" onClick={this.props.upvote} />
          <span className="Joke-votes" style={{ borderColor: this.getColor() }}>
            {this.props.votes}
          </span>
          <i className="fas fa-arrow-down" onClick={this.props.downvote} />
        </div>
        <div className="Joke-text">{this.props.text}</div>
        <div className="Joke-smiley">
          <i className={this.getEmoji()} />
        </div>
      </div>
    );
  }
}

export default Joke;
