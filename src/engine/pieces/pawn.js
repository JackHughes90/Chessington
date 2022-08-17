import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let moves = []
        if (this.player === Player.WHITE) {
            if (board.getPiece(Square.at(location.row + 1, location.col))){
                return moves = []
            } if (location.row === 1){
                // console.log(board.getPiece(Square.at(location.row, location.col))[1] + 'Hello Jack')
                // moves.push(Square.at(location.row + 2, location.col))
            }
            moves.push(Square.at(location.row + 1, location.col))
            } else {
            // if (){
            //     return moves = []
                if (location.row === 6){
                moves.push(Square.at(location.row - 2, location.col))
            }
            moves.push(Square.at(location.row - 1, location.col))
        } 
        return moves
    }
}

//Hello