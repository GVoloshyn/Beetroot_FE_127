//1 Створіть об'єкт room з параметри:
// ключ height зі значенням 3
// ключ tv зі значенням samsung
// ключ big зі значенням true

let room ={
    height:3,
    tv: 'samsung',
    big: true
}
//2 Виведіть в alert тип даних параметра big
alert(room.big)
//3 Перевірте, що цей об'єкт не є порожнім і що в ньому є ключ age.

let user = {
    name: "John",
    age: 30
};
if (user && user.age !== undefined) {
    console.log("object not empty");
} else {
    console.log("object is empty");
}

//4 Отримайте з цього об'єкту елемент, де name == "Bob" і збережіть це в будь-якій змінній.
let users = {
    user_1: {
        name: "John",
        age: 30
    },
    user_2: {
        name: "Bob",
        age: 21
    },
    user_3: {
        name: "Anna",
        age: 19
    }
}

let user2Name = users.user_2.name

//5 Видаліть із об'єктів (завдання 4) об'єкт з name == "Anna".
delete users.user_3

//Отримайте з об'єкта obj значення id у констанду id, не використовуючи вираз obj.id
const obj = {
    id: 5,
    token: 12343423
};

const { id } = obj;

//6 Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.
let car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2022,
    averageSpeed: 120,
    fuelTankCapacity: 60,
    averageFuelConsumption: 8,
    drivers: [],

    displayInformation() {
        alert(`
      Manufacturer: ${this.manufacturer},
      Model: ${this.model},
      Year of manufacture: ${this.year},
      Average speed: ${this.averageSpeed},
      Fuel tank capacity: ${this.fuelTankCapacity},
      Average fuel consumption: ${this.averageFuelConsumption},
      Drivers: ${this.drivers.join(", ") || "No drivers"}
    `);
    },

    addDriver(driverName) {
        this.drivers.push(driverName);
    },

    checkDrivers(driverName) {
        return this.drivers.includes(driverName);
    },

    calculateTimeAndFuelForDistance(distance) {
        let time = distance / this.averageSpeed;
        let numberOfBreaks = Math.floor(time / 4);
        let breakDuration = numberOfBreaks + 1;
        let totalDuration = time + breakDuration;

        let fuelConsumption = (distance / 100) * this.averageFuelConsumption;

        alert(`
      For covering a distance of ${distance} km:
      Total travel time: ${totalDuration} hours,
      Fuel consumption: ${fuelConsumption} liters
    `);
    }
};

