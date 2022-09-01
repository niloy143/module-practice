// 1. Object with 6 different datatypes

const myBio = {
    name: 'Niloy Mahmud Apu',
    isMarried: false,
    age: 19,
    routine: function () {
        return `${this.name} does code everyday and goes to a dental for 5 hours.`
    },
    passion: ['coding', 'solving problem', 'math'],
    favouriteSong: {
        tahsan: 'icche',
        shironamhin: 'pakhi',
        warfaze: 'obak valobasa',
        lalonGiti: 'khachar vetor ochin pakhi'
    }
}

// 2. Template String: Access arrays third element and the object

const passionAndSong = `My third passion is ${myBio.passion} and My favourite songs are ${myBio.favouriteSong}`;

// 3. Arrow Function

const eightyNine = () => 89; // 3.1 (no parameter and return 89)

const dividedBySeventeen = x => x / 17; // 3.2 (one parameter and return it dividing by 17)

const addFiveAndSeven = (x, y) => ((x + 5) + (y + 7)) % 2 === 0 ? true : false; // 3.3 (two parameters)

const sumAndSquare = x => {
    const sum = x.reduce((a, b) => a + b, 0);
    return sum ** 2;
} // 3.4 (multi-line arrow function)


// 4. Array Map

const arrayOfNumbers = [34, 43, 23, 64, 12, 65];
const arrayOfNumbersMap = arrayOfNumbers.map(x => x / 7);

// 5. Difference between map, forEach, filter, find and reduce

/*
    map returns somthing for every element of an array.
    forEach does somthing for every element of an array.
    filter returns the true elements from an array according to condition.
    find returns only the first true element from an array according to condition.
    reduce does something through every element and return a single thing.
*/

// 6. Get an object excluding one property by destructuring policy

const { lalonGiti, ...modernSongs } = myBio.favouriteSong;

// 7. JSON placeholder (Show Photos)

const loadPhotos = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const data = await res.json();
    displayAlbum(data);
}

// 8. Dynamically display album
// 9. Use Arrow Function and ForEach

const displayAlbum = (images) => {
    const albumArea = document.getElementById('album-area');
    const albumArray = [];

    for (let i = 0; i < images.length / 25; i++) {
        albumArray[i] = [];
        for (let j = (i * 25); j < images.length; j++) {
            albumArray[i].push(images[j]);

            if (j % 25 === 24) {
                break;
            }
        }
    }

    albumArray.forEach(album => {
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('grid', 'grid-cols-5', 'gap-3');

        album.forEach(photo => {
            const imgElement = document.createElement('img');
            imgElement.setAttribute('src', `${photo.url}`);

            photoDiv.appendChild(imgElement)
        })

        albumArea.appendChild(photoDiv);
    })

    const showPhoto = document.getElementById('show-photo');
    albumArea.childNodes.forEach(photoDiv => {
        photoDiv.childNodes.forEach(photo => {
            photo.addEventListener('mouseover', function (event) {
                showPhoto.setAttribute('src', `${event.target.getAttribute('src')}`);
                photo.style.cursor = 'pointer';
            })
        })
    })
}
loadPhotos();

// 10. AudioDB

/* In Another File */