// const coding = ["js", "rust", "node", "reactjs", "solana"]

// const values = coding.forEach((item) => {  // foreach never return any thing
//     console.log(item);
//     return item
// })

// console.log(values);



// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);
// const result = myNums.filter((num) => { return num > 5 })

// console.log(result);


// const books = [
//     {
//         title: "Book One",
//         genre: "Non-fiction",
//         publish: "1981",
//         edition: "1989"
//     },
//     {
//         title: "Book Two",
//         genre: "Fiction",
//         publish: "1995",
//         edition: "2002"
//     },
//     {
//         title: "Book Three",
//         genre: "Science Fiction",
//         publish: "2008",
//         edition: "2015"
//     },
//     {
//         title: "Book Four",
//         genre: "Mystery",
//         publish: "2012",
//         edition: "2019"
//     },
//     {
//         title: "Book Five",
//         genre: "Fantasy",
//         publish: "1989",
//         edition: "1994"
//     },
//     {
//         title: "Book Six",
//         genre: "Thriller",
//         publish: "2000",
//         edition: "2006"
//     },
//     {
//         title: "Book Seven",
//         genre: "Romance",
//         publish: "1998",
//         edition: "2004"
//     },
//     {
//         title: "Book Seven",
//         genre: "Romance",
//         publish: "2000",
//         edition: "2004"
//     },
//     {
//         title: "Book Eight",
//         genre: "Historical Fiction",
//         publish: "1976",
//         edition: "1983"
//     },
//     {
//         title: "Book Nine",
//         genre: "Biography",
//         publish: "2017",
//         edition: "2020"
//     },
//     {
//         title: "Book Ten",
//         genre: "Self-help",
//         publish: "2005",
//         edition: "2011"
//     }
// ];


// // const userBooks = books.filter((bk)=> bk.genre === 'Romance' )
// const userBooks = books.filter((bk) => {
//     return bk.publish >= 2000 && bk.genre === "Romance"
// })
// console.log(userBooks);



// const newNums1 = []
// myNums.forEach((num) => {
//     newNums.push(num + 10)
// })
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNums.filter((num) => { return num + 10 })
// const newNums = myNums
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num >= 40)

// console.log(newNums);


// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce((acc, currval) => {
//     console.log(`acc : ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        item: "js course",
        price: 2900

    },
    {
        item: "pytohn course",
        price: 3900

    }
    ,
    {
        item: "rust course",
        price: 4900

    }
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalPrice);