// // // // // function getCanVoteMessage(age) {
// // // // //    return age >= 18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
// // // // // }



// // // // // // Kỳ vọng
// // // // // console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
// // // // // console.log(getCanVoteMessage(15)) 

// // // // var orders = [
// // // //    {
// // // //        name: 'Khóa học HTML - CSS Pro',
// // // //        price: 3000000
// // // //    },
// // // //    {
// // // //        name: 'Khóa học Javascript Pro',
// // // //        price: 2500000
// // // //    },
// // // //    {
// // // //        name: 'Khóa học React Pro',
// // // //        price: 3200000
// // // //    }
// // // // ]
// // // // function getTotal(orders) {
// // // //    let totalPrice = 0;
// // // //    for (let i = 0; i < orders.length; i++) {
// // // //        totalPrice = totalPrice + orders[i].price;
// // // //    }
// // // //   console.log(totalPrice)
// // // // }

// // // // var array = [ "Thuộc tính name có giá trị Nguyen Van A",
// // // //     "Thuộc tính age có giá trị 16"]

// // // // // Expected results:
// // // // getTotal(orders) // Output: 8700000
// // // // console.log(array)

// // // var watchList = [
// // //   {
// // //     "Title": "Inception",
// // //     "Year": "2010",
// // //     "Rated": "PG-13",
// // //     "Released": "16 Jul 2010",
// // //     "Runtime": "148 min",
// // //     "Genre": "Action, Adventure, Crime",
// // //     "Director": "Christopher Nolan",
// // //     "Writer": "Christopher Nolan",
// // //     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
// // //     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
// // //     "Language": "English, Japanese, French",
// // //     "Country": "USA, UK",
// // //     "imdbRating": "8.8",
// // //     "imdbVotes": "1,446,708",
// // //     "imdbID": "tt1375666",
// // //     "Type": "movie",
// // //   },
// // //   {
// // //     "Title": "Interstellar",
// // //     "Year": "2014",
// // //     "Rated": "PG-13",
// // //     "Released": "07 Nov 2014",
// // //     "Runtime": "169 min",
// // //     "Genre": "Adventure, Drama, Sci-Fi",
// // //     "Director": "Christopher Nolan",
// // //     "Writer": "Jonathan Nolan, Christopher Nolan",
// // //     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
// // //     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
// // //     "Language": "English",
// // //     "Country": "USA, UK",
// // //     "imdbRating": "8.6",
// // //     "imdbVotes": "910,366",
// // //     "imdbID": "tt0816692",
// // //     "Type": "movie",
// // //   },
// // //   {
// // //     "Title": "The Dark Knight",
// // //     "Year": "2008",
// // //     "Rated": "PG-13",
// // //     "Released": "18 Jul 2008",
// // //     "Runtime": "152 min",
// // //     "Genre": "Action, Adventure, Crime",
// // //     "Director": "Christopher Nolan",
// // //     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
// // //     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
// // //     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
// // //     "Language": "English, Mandarin",
// // //     "Country": "USA, UK",
// // //     "imdbRating": "9.0",
// // //     "imdbVotes": "1,652,832",
// // //     "imdbID": "tt0468569",
// // //     "Type": "movie",
// // //   },
// // //   {
// // //     "Title": "Batman Begins",
// // //     "Year": "2005",
// // //     "Rated": "PG-13",
// // //     "Released": "15 Jun 2005",
// // //     "Runtime": "140 min",
// // //     "Genre": "Action, Adventure",
// // //     "Director": "Christopher Nolan",
// // //     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
// // //     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
// // //     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
// // //     "Language": "English, Urdu, Mandarin",
// // //     "Country": "USA, UK",
// // //     "imdbRating": "8.3",
// // //     "imdbVotes": "972,584",
// // //     "imdbID": "tt0372784",
// // //     "Type": "movie",
// // //   },
// // //   {
// // //     "Title": "Avatar",
// // //     "Year": "2009",
// // //     "Rated": "PG-13",
// // //     "Released": "18 Dec 2009",
// // //     "Runtime": "162 min",
// // //     "Genre": "Action, Adventure, Fantasy",
// // //     "Director": "James Cameron",
// // //     "Writer": "James Cameron",
// // //     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
// // //     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
// // //     "Language": "English, Spanish",
// // //     "Country": "USA, UK",
// // //     "imdbRating": "7.9",
// // //     "imdbVotes": "876,575",
// // //     "imdbID": "tt0499549",
// // //     "Type": "movie",
// // //   }
// // // ];

// // // function movieByChristopherNolan (watchList) {
// // //   let listFilmOfChristopherNolan = [];
// // //   listFilmOfChristopherNolan = watchList.filter(
// // //     (value, index, array) => {
// // //       return value.Director === "Christopher Nolan";
// // //     }
// // //   );
// // //   return listFilmOfChristopherNolan;
// // // }


// // // function calculateRating(watchList) {
// // //     let listMovieOfChristopherNolan = [];
// // //     listMovieOfChristopherNolan = movieByChristopherNolan(watchList);
// // //     let sumIMDBRating = listMovieOfChristopherNolan.reduce((sum , currentValue, currentIndex, arrr) => {
// // //         rating = parseFloat(currentValue.imdbRating);
// // //         return sum += rating;
// // //     }, 0)
// // //     let count = listMovieOfChristopherNolan.length;
// // //     return sumIMDBRating/count;
// // // }


// // // // Expected results
// // // console.log(calculateRating(watchList)); // Output: 8.675

// // var arr = [
// //     ['name', 'Sơn Đặng'],
// //     ['age', 18],
// // ];


// // function arrToObj(arr) {
// //     let expectedObj = arr.reduce((newObj, currValue, currIndex, array) => {
// //         newObj[currValue[0]] = currValue[1];
// //         return newObj;
// //     }, {});
// //     return expectedObj;
// // }

// // // console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

// // var arrrayDepth = [1,2,3];

// // var output = arrrayDepth.reduce( (initArray, currentValue) => {
// //     return initArray.concat();
// // }, []);

// // console.log(output);

// var topic = [
//     {
//         topic: "FE",
//         courses: [
//            {
//             id: 1,
//             title: "HTML, CSS"
//            },
           
//            {
//             id: 2,
//             title: "JS"
//            },

//         ]
//     },
//     {
//         topic: "BE",
//         courses: [
//            {
//             id: 1,
//             title: "Java"
//            },
           
//            {
//             id: 2,
//             title: "Node JS"
//            },

//         ]
//     }
// ]

// var newCourse = topic.reduce((course, currentValue) => {
//     return course.concat(currentValue.courses)
// }, [])

// console.log(newCourse)
var a = 1;
var b = ++a * a--;
console.log(b)