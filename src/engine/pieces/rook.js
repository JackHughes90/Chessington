import Piece from './piece';
import Square from '../square';
import Player from '../player';


export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let moves = [];
        
        // looking left
        for (let i = 0; i < location.col; i++) {
            if (board.getPiece(Square.at(location.row, i))){
                moves = [];
            } else {
                moves.push(Square.at(location.row, i));
            }
            
        }

        // looking right
        for (let i = 7; i > location.col; i--) {
            if (board.getPiece(Square.at(location.row, i))){
                moves = [];
            } else {
                moves.push(Square.at(location.row, i));
            }
            
        }

        // looking down
        for (let i = 0; i < location.row; i++) {
            if (board.getPiece(Square.at(i, location.col))){
                moves = [];
            }
            else {
                moves.push(Square.at(i, location.col));
            }
            
        }

        // looking up
        for (let i = 7; i > location.row; i--) {
            if (board.getPiece(Square.at(i, location.col))){
                moves = [];
            }
            else {
                moves.push(Square.at(i, location.col));
            }
            
        }

        return moves;
    }
}
