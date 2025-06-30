'use strict';

function Character(race, name, lang) {
  this.race = race;
  this.name = name;
  this.lang = lang;
}

Character.prototype.speak = function() {
  return `Язык: ${this.lang} / Персонаж: ${this.name}`;
};

function Ork(race, name, lang, weapon) {
  Character.call(this, race, name, lang);
  this.weapon = weapon;
}

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;

Ork.prototype.hit = function() {
  return `Удар ${this.weapon}`;
};

function Elf(race, name, lang, spell) {
  Character.call(this, race, name, lang);
  this.spell = spell;
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.cast = function() {
  return `Каст ${this.spell}`;
};

const ork = new Ork('Орк', 'Громмаш', 'Орочий', 'топором!');
const elf = new Elf('Эльф', 'Кельтас', 'Эльфийский', 'огненного столба!');

console.log(ork.hit());
console.log(elf.cast());
console.log(ork.speak());
console.log(elf.speak()); 