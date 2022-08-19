import Piece from './piece';
import Square from '../square';
import Player from '../player';
import King from './king';


export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }
    // function to check what current player is (BLACK OR WHITE)
    // combine these functions!!
    
    checkOpposingPiece(board,square){
        return (this.player===board.getPiece(square).player);
    }
//comment
    isKing (board, square) {
        return board.getPiece(square) instanceof King;
    }
    
    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let moves = [];
        
        // looking left
        for (let i = 0; i < location.col; i++) {
            if (board.getPiece(Square.at(location.row, i))){
                moves = [];
                if (!this.checkOpposingPiece(board, Square.at(location.row, i)) && !this.isKing(board, Square.at(location.row, i))) {
                    moves.push(Square.at(location.row, i));
                }
            } else {
                moves.push(Square.at(location.row, i));
            }
            
        }

        // looking right
        for (let i = 7; i > location.col; i--) {
            if (board.getPiece(Square.at(location.row, i))){
                moves = [];
                if (!this.checkOpposingPiece(board, Square.at(location.row, i)) && !this.isKing(board, Square.at(location.row, i))) {
                    moves.push(Square.at(location.row, i));
                }
            } else {
                moves.push(Square.at(location.row, i));
            }
            
        }

        // looking down
        for (let i = 0; i < location.row; i++) {
            if (board.getPiece(Square.at(i, location.col))){
                moves = [];
                if (!this.checkOpposingPiece(board, Square.at(i, location.col)) && !this.isKing(board, Square.at(i, location.col))) {
                    moves.push(Square.at(i, location.col));
                }
            }
            else {
                moves.push(Square.at(i, location.col));
            }
            
        }

        // looking up
        for (let i = 7; i > location.row; i--) {
            if (board.getPiece(Square.at(i, location.col))){
                moves = [];
                if (!this.checkOpposingPiece(board, Square.at(i, location.col)) && !this.isKing(board, Square.at(i, location.col))) {
                    moves.push(Square.at(i, location.col));
                }
            }
            else {
                moves.push(Square.at(i, location.col));
            }
            
        }

        return moves;
    }
}
