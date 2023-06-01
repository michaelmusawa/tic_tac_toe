var place_holder = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let players = [];

class Player {
    constructor(name, marker) {
        this._name = name;
        this._marker = marker;
    }

    get name() {
        return this._name;
    }

    get marker() {
        return this._marker;
    }

    play() {
        let player_choice = parseInt(prompt(`${this._name}, it's your turn. Choose a number between 1-9:`));

        place_holder.forEach((element, index) => {
            console.log (element)
            console.log (index)

            if (element === player_choice) {
                place_holder[index] = this._marker;
            }
        });
    }

    create_players() {
        
        let first_player_name = prompt("First player enter username:");
        let first_player_marker = prompt("Choose marker X or O:");
        let second_player_name = prompt("Second player enter username:");
        let second_player_marker = () => {
            if (first_player_marker === 'X') {
                return 'O';
            } else {
                return 'X';
            }
        };
        const first_player = new Player(first_player_name, first_player_marker);
        const second_player = new Player(second_player_name, second_player_marker);
        players.push(first_player);
        players.push(second_player);
    }

    play_round() {
        players.forEach((player) => {
            this.play();
        });
    }
}

class Board {
    constructor(first_row, second_row, third_row) {
        this._first_row = first_row;
        this._second_row = second_row;
        this._third_row = third_row;
    }

    get first_row() {
        return this._first_row;
    }

    get second_row() {
        return this._second_row;
    }

    get third_row() {
        return this._third_row;
    }
    

    create_board() {
        const horizontalLine = "+---+---+---+"

        this._first_row = place_holder.slice(0, 3);
        this._second_row = place_holder.slice(3, 6);
        this._third_row = place_holder.slice(6, 9);

    
        console.log(horizontalLine);
        this.first_row.forEach((element, index) => {
            console.log(`| ${element} |`);
        });
        console.log(horizontalLine);
        this.second_row.forEach((element, index) => {
            console.log(`| ${element} |`);
        });
        console.log(horizontalLine);
        this.third_row.forEach((element, index) => {
            console.log(`| ${element} |`);
        });
        console.log(horizontalLine);
    }
}    

// Example usage
let board = new Board;
let game_players = new Player;
game_players.create_players();

let round = 0;
while (round <= 4){
    game_players.play_round();
    board.create_board();
    round ++;

}



