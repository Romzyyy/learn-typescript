const character = 'luigi'

console.log(character)

const inputs = document.querySelectorAll('input')
console.log(inputs)

inputs.forEach((input) => {
    console.log(input)
})

let isBlack = false

// isBlack = 'yes'
// isBlack = 10
isBlack = true

const circ = (params: number) => {
    return params * Math.PI
}

console.log(circ(8))

//array
let names = ['lugitect', 'samsul', 'joko']

names.push('nanas')
// names.push(9)
// names[0] = 3

let mixed = ['way', 10, 'affe', 4, 1]
mixed.push(11)
mixed.push('adfo')
mixed[0] = 9
// mixed.push(true)

// object
let ninja = {
    name: 'mari',
    age: 30,
    katana: true,
}

ninja.name = 'ryu'
ninja.age = 20
// ninja.age = 'who'
// ninja.skill = ['fight', 'sneak']

ninja = {
    name: 'yosh',
    age: 20,
    katana: false,
}

// explicit type
let charc: string
let age: number
let login: boolean

charc = 'yoss'
age = 20
login = true

// array
let ninjas: string[] = []
ninjas.push('20')

// union
let mixeds: (string | number)[] = []
mixeds.push('naon')
mixeds.push(20)
// mixeds.push(true)

let uid: string | number
uid = '123'
uid = 123
// uid = false

// object
let ninjaOne: object
ninjaOne = { name: 'yoss', age: 20 }
ninjaOne = []

let ninjaTwo: {
    name: string
    age: number
    login: boolean
}

ninjaTwo = {
    name: 'yoss',
    age: 20,
    login: false,
    // skill: 'fight'
}

// dynamic (any)
let ages: any = 25
console.log(ages)

ages = '123'
console.log(ages)

ages = true
console.log(ages)

ages = { name: 'mario' }
console.log(ages)

let mixd: any[] = []
mixd.push(1)
mixd.push('one')
mixd.push(false)
console.log(mixd)

let ninjs: { name: any; age: any }

ninjs = { name: 'mario', age: 20 }
console.log(ninjs)

ninjs = { name: 20, age: 'mario' }
console.log(ninjs)
