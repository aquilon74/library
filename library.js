// BOOK
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    let is_read = this.read ? 'already read' : 'not read yet';
    return [this.title, this.author, this.pages, is_read];
};

Book.prototype.setRead = function(read){
    this.read = read;
};

Book.prototype.getRead = function(){
    return this.read;
}

// LIBRARY
function Library(){
    this.bookList = [];
}

Library.prototype.addBook = function(title, author, pages, read){
    let book = new Book(title, author, pages, read);
    this.bookList.push(book);
};

Library.prototype.getBook = function(index){
    return this.bookList[index];
};

Library.prototype.getBookInfo = function(index){
    return this.bookList[index].info();
};

Library.prototype.getAllBooks = function(){
    return this.bookList;
};

Library.prototype.getAllBooksInfo = function(){
    let booksInfo = [];
    for(let i = 0; i < this.bookList.length; i++){
        booksInfo.push(this.bookList[i].info());
    }
    return booksInfo;
};

Library.prototype.removeBook = function(index){
    this.bookList.splice(index, 1);
};

Library.prototype.setRead = function(index, read){
    this.bookList[index].setRead(read)
};

Library.prototype.getRead = function(index){
    return this.bookList[index].getRead();
}



// FUNCTIONS
function renderConsole(library){
    console.table(library.getAllBooksInfo());
}


function consoleTest(){
    let testLibrary = new Library();

    console.log('Add "The Hobbit" by J.R.R. Tolkien');

    testLibrary.addBook('The hobbit', 'J.R.R. Tolkien', 230, false);
    renderConsole(testLibrary);

    console.log('Add "Harry Potter" by J.K. Rowling');

    testLibrary.addBook('Harry Potter', 'J.K. Rowling', 500, true);
    renderConsole(testLibrary);

    console.log('Read "The Hobbit"');

    testLibrary.setRead(0, true);
    renderConsole(testLibrary);

    console.log('delete "The Hobbit"');

    testLibrary.removeBook(0);
    renderConsole(testLibrary);
}




