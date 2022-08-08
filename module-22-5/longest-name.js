const friendsName = ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'chinku'];

function bestFriend(friends) {
    let longestNameIndex = 0;
    let longestNameLength = friends[longestNameIndex].length;
    for(let i=0; i<friends.length; i++) {
        if(friends[i].length > longestNameLength) {
            longestNameLength = friends[i].length;
            longestNameIndex = i;
        }
        else {
            continue;
        }
    }
    const longestName = friends[longestNameIndex];
    return longestName;
}

console.log(bestFriend(friendsName));