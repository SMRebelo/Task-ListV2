const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []; //Creating the object

//! Getting acesse to the button ADD + getting accesse to the users input text!
document.querySelector("#add").addEventListener("click", () =>{ //getting accesse to the add button and creating a event on click
    const item = document.querySelector("#inputBox"); // getting accesse to do user input he wants to add

    createItem(item); // inizializing the function to create here but im writing the function below.
})

//! Creating a function to create items with the argument we read as we click in the button add
function createItem(item){
    itemsArray.push(item.value); // first i add the value of item do the array
    localStorage.setItem("items", JSON.stringify(itemsArray)); // and then i save it as a string using the stringify!
    location.reload();
}

//! Starting the function for displaying the items. i will use a loop for to read all the values
function displayItems() {
    let items = ""

    for (let i = 0; i < itemsArray.length; i++) {
        items += 
        
    }
}   