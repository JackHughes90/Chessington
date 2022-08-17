import Player from '../player';
import Square from '../square';
import Piece from './piece';
import King from './king';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let moves = []
        if (this.player === Player.WHITE && location.row != 7) {
            if (!board.getPiece(Square.at(location.row + 1, location.col))) {
                if (location.row === 1) {
                    if (!board.getPiece((Square.at(location.row + 2, location.col)))) {
                        moves.push(Square.at(location.row + 2, location.col))
                    }
                }
                moves.push(Square.at(location.row + 1, location.col))
            }
            if (board.getPiece(Square.at(location.row + 1, location.col - 1))
                && board.getPiece(Square.at(location.row + 1, location.col - 1)).player === Player.BLACK) {    
                moves.push(Square.at(location.row + 1, location.col - 1));
            }
            if (board.getPiece(Square.at(location.row + 1, location.col + 1))
                && board.getPiece(Square.at(location.row + 1, location.col + 1)).player === Player.BLACK) {
                moves.push(Square.at(location.row + 1, location.col + 1));
            }
        }
        if (this.player === Player.BLACK && location.row != 0) { 
            if (!board.getPiece(Square.at(location.row - 1, location.col))) { 
                if (location.row === 6) {
                    if (!board.getPiece((Square.at(location.row - 2, location.col)))) {
                        moves.push(Square.at(location.row - 2, location.col))
                    }
                }
                moves.push(Square.at(location.row - 1, location.col))
            }
            if (board.getPiece(Square.at(location.row - 1, location.col - 1))
                && board.getPiece(Square.at(location.row - 1, location.col - 1)).player === Player.WHITE) {
                moves.push(Square.at(location.row - 1, location.col - 1));
            }
            if (board.getPiece(Square.at(location.row - 1, location.col + 1))
                && board.getPiece(Square.at(location.row - 1, location.col - 1)).player === Player.WHITE) {
                moves.push(Square.at(location.row - 1, location.col + 1));
            }
        }
        return moves
    }
}

// && board.getPiece(Square.at(location.row - 1, location.col - 1)) != board.findPiece(King.Player.WHITE)
// && board.getPiece(Square.at(location.row - 1, location.col - 1)) != board.findPiece(King.Player.WHITE)
// Hello world