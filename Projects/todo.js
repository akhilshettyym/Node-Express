import readline from "readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const todos = [];

const showMenu = () => {
    console.log("------------------------------------");
    console.log("To Do List CLI");
    console.log("------------------------------------");
    console.log("1. Add a Task ");
    console.log("2. View Tasks ");
    console.log("3. Exit ");
     console.log("------------------------------------");
    rl.question("Choose an option : ", handleInput);
}

const handleInput = (option) => {
    if(option === "1") {
        rl.question("Enter the task : ", (task) => {
            todos.push(task);
            console.log("Task added : ", task);
            showMenu();
        });
    } else if(option === "2") {
        console.log("===================================");
        console.log("\n Your Todo Lists...");
        console.log("===================================");
        todos.forEach((task, index) => {
            console.log(`${index+1}. ${task}`);
        })
        showMenu();
    } else if(option === "3") {
        console.log("------------------------------------");
        console.log("Good bye...");
        console.log("===================================");
        rl.close();
    } else {
        console.log("Invalid option !!!");
        showMenu();
    }
}

showMenu();