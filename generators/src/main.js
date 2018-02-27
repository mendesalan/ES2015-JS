// the star * says that the function/method is a generator
function *range(start, end) {
    while (start <= end) {
        yield start

        start++
    }
}

let iterator = range(1, 5)

console.log( iterator.next() )

console.log( iterator.next() )

console.log( iterator.next() )

console.log( iterator.next() )

console.log( iterator.next() )

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//\\ Sets //\\

// new Set([])
let tags = [
    'php',
    'javascript',
    'vue',
    'javascript'
]

let setTags = new Set(tags)

setTags = [...setTags].filter( tag => tag.length === 3) // [...setTags] casts to an array
console.log(setTags)
