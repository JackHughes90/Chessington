import Piece from './piece';
import Square from '../square';
import Player from '../player';
import King from './king';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    checkOpposingPiece(board,square){
        return (this.player===board.getPiece(square).player);
    }

    isKing (board, square) {
        return board.getPiece(square) instanceof King;
    }
    

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let moves = [];
        
        for (let i = 1; i < (7 - location.row); i++) {
            moves.push(Square.at(location.row + i, location.col + i));
        }
        for (let i = 1; i <= (location.row); i++) {
            moves.push(Square.at(location.row - i, location.col - i));
        }
        for (let i = 1; i < (7 - location.col); i++) {
            moves.push(Square.at(location.row + i, location.col - i));
        }
        for (let i = 1; i < (location.col); i++) {
            moves.push(Square.at(location.row - i, location.col + i));
        }

        return moves;
        
        // looking left + up
        // for (let i = location.col; i <= 0; i--) {
        //     if (board.getPiece(Square.at(location.row, i))){
        //         moves = [];
        //         if (!this.checkOpposingPiece(board, Square.at(location.row, i)) && !this.isKing(board, Square.at(location.row, i))) {
        //             moves.push(Square.at(location.row, i));
        //         }
        //     } else {
        //         moves.push(Square.at(location.row, i));
        //     }
            
        // }

        // // looking right
        // for (let i = 7; i > location.col; i--) {
        //     if (board.getPiece(Square.at(location.row, i))){
        //         moves = [];
        //         if (!this.checkOpposingPiece(board, Square.at(location.row, i)) && !this.isKing(board, Square.at(location.row, i))) {
        //             moves.push(Square.at(location.row, i));
        //         }
        //     } else {
        //         moves.push(Square.at(location.row, i));
        //     }
            
        // }

        // // looking down
        // for (let i = 0; i < location.row; i++) {
        //     if (board.getPiece(Square.at(i, location.col))){
        //         moves = [];
        //         if (!this.checkOpposingPiece(board, Square.at(i, location.col)) && !this.isKing(board, Square.at(i, location.col))) {
        //             moves.push(Square.at(i, location.col));
        //         }
        //     }
        //     else {
        //         moves.push(Square.at(i, location.col));
        //     }
            
        // }

        // // looking up
        // for (let i = 7; i > location.row; i--) {
        //     if (board.getPiece(Square.at(i, location.col))){
        //         moves = [];
        //         if (!this.checkOpposingPiece(board, Square.at(i, location.col)) && !this.isKing(board, Square.at(i, location.col))) {
        //             moves.push(Square.at(i, location.col));
        //         }
        //     }
        //     else {
        //         moves.push(Square.at(i, location.col));
        //     }
            
        // }

        
    }
}
