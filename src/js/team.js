import { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from './app';

export default class Team {
    
    static charactersArray = [
        new Magician('Маг'),
        new Bowerman('Лучник'),
        new Swordsman('Мечник'),
        new Daemon('Демон'),
        new Undead('Нежить'),
        new Zombie('Зомби'),
    ];

    *[Symbol.iterator]() {
        yield* this.charactersArray;
    }
}
