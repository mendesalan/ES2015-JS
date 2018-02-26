import TaskCollection from './TaskCollection.js'

// Useful strings additions

let text = 'star wars a new hope'

console.log('Variable type string, ', text)
console.log('text.includes(wars)', text.includes('wars'))
console.log('text.startsWith(star)', text.startsWith('star'))
console.log('text.endsWith(hope)', text.endsWith('hope'))

console.log('tro', 'lo'.repeat(100) )



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Arrays //


console.log(
    [2, 3, 4, 5, 6, 10].includes(25)
)
///
console.log(
    [2, 3, 4, 5, 6, 10].find(function(item){
        return item > 5
    })
)
///
console.log(
    [2, 3, 4, 5, 6, 10].find(item => item > 5)
)


class User {
    constructor(name, isAdmin) {
        this.name = name
        this.isAdmin = isAdmin
    }
}

let users = [
    new User('John', false),
    new User('Jane', true),
    new User('Joseph', false)
]

console.log(

    users.find(user => user.isAdmin),
    '======>',
    users.find(user => user.isAdmin).name

)
