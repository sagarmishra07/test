import { random } from 'src/utils/randomNumberGenerator';
import { randomArray } from 'src/utils/randomArrayGenerator';

export const randomDate = (randomNumber) => new Date(`${randomArray([2019, 2020, 2021])}-${random(1, 2, randomNumber)}-${random(1, 3, randomNumber)}`);
