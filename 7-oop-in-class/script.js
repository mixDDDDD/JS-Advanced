'use strict';

class Character {
    #race;
    #name;
    #lang;

    constructor(race, name, lang) {
        this.#race = race;
        this.#name = name;
        this.#lang = lang;
    }
    
    get race() { return this.#race; }
    get name() { return this.#name; }
    get lang() { return this.#lang; }

    speak() {
      return `Язык: ${this.lang} / Персонаж: ${this.name}`;
    }
}

class Ork extends Character {
  constructor(race, name, lang, weapon) {
      super(race, name, lang);
      this.weapon = weapon;
  }

  hit() {
    return `Удар ${this.weapon}`;
  }

  speak() {
      return `${super.speak()} / Раса: ${this.race}`;
    }
}

class Elf extends Character {
  constructor(race, name, lang, spell) {
      super(race, name, lang);
      this.spell = spell;
  }

  cast() {
    return `Каст ${this.spell}`;
  }

  speak() {
      return `${super.speak()} / Раса: ${this.race}`;
    }
}

const ork = new Ork('Орк', 'Громмаш', 'Орочий', 'Топором!');
const elf = new Elf('Эльф', 'Кельтас', 'Эльфийский', 'Огненного столба!');

console.log(ork.hit());
console.log(elf.cast());
console.log(ork.speak());
console.log(elf.speak()); 