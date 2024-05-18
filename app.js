const game = new Game();
game.start();

import { Game, GameSavingData } from './game.js';
import {readGameSaving as loadGame} from './game.js';
import {writeGameSaving as SaveGame } from './game.js';