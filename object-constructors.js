const myLibrary = [];

function Book(title, author, pages, status) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor.")
    }
    this.bookID = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

    this.info = function() {
        return(`${title} by ${author}, ${pages} pages, ${status}`);
    };

    //add function to toggle read status
}

function addBookToLibrary() {
    //ask for book details
    //make variables and use constructor to make book

    //use return from constructor to add to library array

}

function showLibrary() {
    //take array from library and list them in a table in DOM?
}


function removeBookFromLibrary () {

}

//create event to call add book function when pressed.
//form should be listed in DOM

//create event to call remove book function when pressed.
//remove book button should be in the table 

//create event to showLibrary 
//library should be shown in dom



