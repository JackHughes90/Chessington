import Player from '../player';
import Square from '../square';
import Piece from './piece';
import King from './king';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    isKing (board, square) {
        return board.getPiece(square) instanceof King;
    }



    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let moves = [];
        let locU1 =   Square.at(location.row + 1, location.col);
        let locU2 =   Square.at(location.row + 2, location.col);
        let locD1 =   Square.at(location.row - 1, location.col);
        let locD2 =   Square.at(location.row - 2, location.col);
        let locU1R1 = Square.at(location.row + 1, location.col + 1);
        let locU1L1 = Square.at(location.row + 1, location.col - 1);
        let locD1R1 = Square.at(location.row - 1, location.col + 1); 
        let locD1L1 = Square.at(location.row - 1, location.col - 1);

        if (this.player === Player.WHITE && location.row != 7) {
            if (!board.getPiece(locU1)) {
                if (location.row === 1 && !board.getPiece(locU2)) {
                    moves.push(locU2);
                }
                moves.push(locU1);
            }
            if (board.getPiece(locU1L1) && board.getPiece(locU1L1).player === Player.BLACK) {
                if (!this.isKing(board, locU1L1)) {
                    moves.push(locU1L1);
                }
            }
            if (board.getPiece(locU1R1) && board.getPiece(locU1R1).player === Player.BLACK) {
                if (!this.isKing(board, locU1R1)) {
                    moves.push(locU1R1);
                } 
            }
        }
        if (this.player === Player.BLACK && location.row != 0) { 
            if (!board.getPiece(locD1)) { 
                if (location.row === 6) {
                    if (!board.getPiece((locD2))) {
                        moves.push(locD2)
                    }
                }
                moves.push(locD1);
            }
            if (board.getPiece(locD1L1)
                && board.getPiece(locD1L1).player === Player.WHITE) {
                    if (!this.isKing(board, locD1L1)) {
                        moves.push(locD1L1);
                    }
            }
            if (board.getPiece(locD1R1)
                && board.getPiece(locD1R1).player === Player.WHITE) {
                if (!this.isKing(board, locD1R1)) {
                    moves.push(locD1R1);
                }
            }
        }
        return moves
    }
}