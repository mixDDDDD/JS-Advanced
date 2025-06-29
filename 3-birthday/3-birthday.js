function isUserOver14(birthDateString) {
    if (birthDateString.length !== 10 || birthDateString[4] !== '-' || birthDateString[7] !== '-') {
        return false;
    }

    const [birthYear, birthMonth, birthDay] = birthDateString.split('-').map(Number);

    if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay)) {
        return false;
    }

    if (birthYear < 1900 || birthMonth < 1 || birthMonth > 12 || birthDay < 1 || birthDay > 31) {
        return false;
    }

    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    if (birthDate.getFullYear() !== birthYear || 
        birthDate.getMonth() + 1 !== birthMonth || 
        birthDate.getDate() !== birthDay) {
        return false;
    }

    const currentDate = new Date();
    if (birthDate > currentDate) {
        return false;
    }

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    const dayDiff = currentDate.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age >= 14;
};

console.log(isUserOver14("2005-06-22")); // true (20 лет)
console.log(isUserOver14("2011-06-23")); // true (14 лет)
console.log(isUserOver14("2009-06-21")); // true (16 лет)
console.log(isUserOver14("2015-06-22")); // false (10 лет)
console.log(isUserOver14("invalid")); // false (невалидный формат)
console.log(isUserOver14("2026-06-22")); // false (будущая дата)
console.log(isUserOver14("2005-13-22")); // false (невалидный месяц)
console.log(isUserOver14("2005-04-31")); // false (невалидный день)
