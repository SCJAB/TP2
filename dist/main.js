// 1. Construct if and if ...else

let UI_age = prompt("Enter your age: ")

if (UI_age >= 25)
{
    alert("25 years old and up")
}

else 
{
    alert("Sorry, you need to be 25 years old and up.");
}

// 2. Construct for loops

// Condition 1
for (let i = 0; i <= 30; i++)
{
    console.log(i);
}
console.log("Done");

// Condition 2
for (let i = 0; i <= 40; i += 2) 
{
    if (i % 2 === 0) 
    {
      console.log(i);
    }
}
console.log("Done");

// Condition 3
for (let i = 40; i >= 10; i--) 
{
    if (i % 3 === 0) 
    {
      console.log(i);
    }
}
console.log("Done");