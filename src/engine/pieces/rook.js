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
        
        // horizontal movement
        for (let i = 0; i <= 7; i++) {
            i === location.col ?
            moves = moves : moves.push(Square.at(location.row, i));
        }

        // vertical movement
        for (let i = 0; i <= 7; i++) {
            i === location.row ?
            moves = moves : moves.push(Square.at(i, location.col));
        }

        return moves;
    }
}
