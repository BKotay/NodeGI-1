// const square = function (x){
// return x * x
// }

// const sqaure = (x) => {
//  return x * x
// }

// const square = (x) => x * x
// console.log(square(2))


// Arrow Function
// this value are not best used w arrow functions and methods, arrow functions are good with everything else
const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestlist()  {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
              console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestlist()