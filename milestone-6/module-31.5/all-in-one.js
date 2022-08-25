const constantVar = 'constant';
const letVar = 'let';
const obj = {
    name: 'Something Mia',
    age: '19',
    sing: 'Tumi asha agami',
    mic: 'Hello1234'
}

const templateString = `This ${constantVar} variable and this is ${letVar} variable. ${obj.name} sings ${sing}.`;

const divideBy5 = x => x / 5;

const multiplyInput = (x, y) => (x + 2) * (y + 2);

const multiplication3x = (x, y, z) => x * y * z;

const multiLine = (x, y) => {
    const xM = x + 2;
    const yM = y + 2;

    return xM * yM;
}

const numbers = [23, 34, 12, 54, 65, 32, 67];

const fiveTimes = numbers.map(x => x * 5);

const oddNumbers = numbers.filter(x => x % 2 !== 0);

const phones = [
    { name: 'Samsung', price: '23000', color: 'blue' },
    { name: 'Nokia', price: '5000', color: 'red' },
    { name: 'iPhone', price: '143000', color: 'black' }
]

const fiveThousand = phones.find(x => x.price === 5000);

const { name } = { name: 'Niloy', age: '19', job: 'developer' };

const [, , three] = [4234, 423, 453, 123, 532];

function threeParam(x, y, z = 7) {
    return x + y + z;
}

const myBio = {
    name: 'Niloy',
    age: '19',
    job: 'developer',
    friends: [
        {
            name: 'Mahmudul',
            age: '19',
            subject: [
                'bangla',
                'economic',
                'geography'
            ]
        },
        {
            name: 'Romjan',
            age: '19',
            subject: [
                'bangla',
                'biology',
                'physics'
            ]
        }
    ],
    subject: [
        'bangla',
        'accounting',
        'finance'
    ]
};

const physicsPage17 = myBio.friends[1].subject[2]?.page17;