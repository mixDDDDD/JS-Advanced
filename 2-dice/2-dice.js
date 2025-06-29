'use strict';

const ALLOW_DICES = ['d4', 'd6', 'd8', 'd10', 'd12', 'd16', 'd20'];
const DICE_REGEX = /^d(\d+)$/i;

// Функция генерации случайного числа
function getRandomNumber(min = 1, max = 20) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция проверки корректности кубика
function errorMessage(dice) {
    if (typeof dice !== 'string' || !ALLOW_DICES.includes(dice.toLowerCase())) {
        return `Игральная кость ${dice} не подходит для игры. Доступные значения: [${ALLOW_DICES.join(', ')}]`;
    }
    return null;
}

// Функция получения случайного значения кубика
function getRandomDiceValue(dice, fn) {
    const error = errorMessage(dice);
    if (error) {
        return { dice, error };
    }
    const max = fn(dice);
    if (!max || max <= 0) {
        return { dice, error: `Некорректное число граней: ${max}` };
    }
    return { dice, num: getRandomNumber(1, max) };
}

// Функция парсинга кубика
function parseDice(dice) {
    const match = dice.match(DICE_REGEX);
    if (!match) return null;
    return Number.parseInt(match[1]);
}

// Тесты
const testCases = ['d4', 'd20', 'd12', 'd3', 'dabc', 'd-6', null];
testCases.forEach(dice => {
    console.log(getRandomDiceValue(dice, parseDice));
});