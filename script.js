let MyName="Mitch Cuckovich"
let age="25"
let birthday="January 24"
let pineapplePizza = prompt("Do you like Pineapple on your Pizza? Yes or No?")
let lifeEvents=["I was born in Troy, Michigan" , "I went to Hope College" , "I went to Junior Olympics when i was 10 years old. I placed 14th in the nation in the 800 meter event" , "I'm a graduate of a Grand Circus bootcamp"]
let i = 0

if (pineapplePizza=="Yes") {
    console.log(
        `My name is ${MyName} I was born on ${birthday} and I am ${age} years old. I like Pineapple on my Pizza.`
    )
} else {
    console.log(
        `My name is ${MyName} I was born on ${birthday} and I am ${age} years old. I like do not Pineapple on my Pizza. I am normal.`
    )
}

for(n = 0; n<lifeEvents.length; n++){
    console.log(lifeEvents[n])
}

while (true) {
    let randomNumber = Math.floor(Math.random()*10)
    if (randomNumber !== 5) {
        console.log(randomNumber + " " + "!==5")
    } else {
    console.log("5===5. it took counter iterations to randomly generate the number 5")
    break;
    }
}

console.log("start of extra challenges")

{
    let hours = 20;
    let wage = 10;
    let pay = 0;

    for(let i = 0; i < 7; i++){
        pay += wage*hours
    }
    console.log(`for ${hours} hours at $${wage}/hour, $${pay} is your weekly gross pay`)
}
{
    let hours = 40;
    let wage = 10;
    let pay = 0;

    for(let i = 0; i < 7; i++){
        pay += wage*hours
    }
    console.log(`for ${hours} hours at $${wage}/hour, $${pay} is your weekly gross pay`)
}
{
    let hours = 50;
    let wage = 10;
    let pay = 0;

    if(hours > 40){
        wage *= 1.5
    }

    for(let i = 0; i < 7; i++){
        pay += wage*hours
    }
    console.log(`for ${hours} hours at $${wage}/hour, $${pay} is your weekly gross pay`)
}
{
    let hours = 60;
    let wage = 12;
    let pay = 0;

    if(hours > 40){
        wage *= 1.5
    }

    for(let i = 0; i < 7; i++){
        pay += wage*hours
    }
    console.log(`for ${hours} hours at $${wage}/hour, $${pay} is your weekly gross pay`)
}

