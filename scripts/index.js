const data = [{
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://www.mercedes-benz-mena.com/en/passengercars/mercedes-benz-cars/models/e-class/sedan-w213-fl/explore/_jcr_content/notificationboxes/notificationbox/image.MQ6.12.20211013084329.jpeg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

class Transport {
    constructor(type, brand, price) {
        this.type = type;
        this.brand = brand;
        this.price = price;
        this.doors = null;
        this.maxSpeed = null;
    }

    getInfo() {
        console.log(`Тип: ${this.type}, марка: ${this.brand}`)
    }
    getPrice() {
        console.log(`Цена: ${this.price} руб.`)
    }
}

class Car extends Transport {
    constructor(type, brand, price, doors) {
        super(type, brand, price);
        this.doors = doors;
    }
    getDoorsCount() {
        console.log(`Количество дверей: ${this.doors}`)
    }
}

class Bike extends Transport {
    constructor(type, brand, price, maxSpeed) {
        super(type, brand, price);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
        console.log(`Максимальная скорость мотоцикла: ${this.maxSpeed} км/ч`)
    }
}

data.forEach(function (item) {
    if (item.type === 'car') {
        const car = new Car(item.type, item.brand, item.price, item.doors)
        car.getInfo();
        car.getPrice();
        car.getDoorsCount();
    } else if (item.type === 'bike') {
        const bike = new Bike(item.type, item.brand, item.price, item.maxSpeed);
        bike.getInfo();
        bike.getPrice();
        bike.getMaxSpeed();
    }
});