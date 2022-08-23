const friends = ['Mahmudul', 'Romjan', 'Nahid', 'Roni', 'Subhani']

const evenFriends = (arrName) => {
    const evenFriendArray = [];
    for (const evenFriend of arrName) {
        if(evenFriend.length%2 === 0) {
            evenFriendArray.push(evenFriend);
        }
    }
    return evenFriendArray;
}

console.log(evenFriends(friends));