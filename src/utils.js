const paginate = (followers) => {
  const itemsPerPage = 9
  const numberOfPages = Math.ceil(followers.length / itemsPerPage)

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    // index=[0,1,2,3,4,5,6,7,8,9,10,11]
    // ⬇⬇ start= 0 9 18 27 36 45 54 63 72 81 90 99
    const start = index * itemsPerPage
    return followers.slice(start, start + itemsPerPage)
  })

  return newFollowers
}

export default paginate

// note:                     reference code
// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
// Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]