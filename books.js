/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros divididos nas categorias de clássicos da Literatura Britânica e Americana.
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "British Literature",
        books: [
            
            {
                title: "The Picture of Dorian Gray",
                author: "Oscar Wilde",
            },

            {
                title: "Wuthering Heights",
                author: "Emily Brontë",
            },
            
            {
                title: "Nineteen Eighty-Four",
                author: "George Orwell",
            }, 
            
            {
                title: "Great Expectations",
                author: "Charles Dickens",
            },
            
            {
                title: "Emma",
                author: "Jane Austen",
            },
            
            {
                title: "The Lord of the Rings",
                author: "J. R. R. Tolkien",
            },

            {
                title: "Frankenstein",
                author: "Mary Shelley",
            },
        ],
    },

    {
        category: "American Literature",
        books: [
            {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
            },

            
            {
                title: "The Kite Runner",
                author: "Khaled Hosseini",
            },
            
            {
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
            },

            {
                title: "The Grapes of Wrath",
                author: "John Steinbeck",
            },

            {
                title: "The Scarlet Letter",
                author: "Nathaniel Hawthorne",
            },

            {
                title: "The Raven",
                author: "Edgar Allan Poe",
            },

            {
                title: "Leaves of Grass",
                author: "Walt Whitman",
            },
           
           
        ],
    },
];

const totalCategories = booksByCategory.length;

console.log(totalCategories);

for (let category of booksByCategory) {
    console.log('Total de livros da categoria:' , category.category)
    console.log(category.books.length)

}

function countAuthors() {
    let authors =[];

    for (let category of booksByCategory) {
        for(let book of category.books) {
            if (authors.indexOf(book.author) == -1){
                    authors.push(book.author)
            } 
        }
    }


    console.log("Total de autores: " , authors.length)
}

countAuthors();

function booksOfAuthor(author) {
    let books =[];

    for (let category of booksByCategory) {
        for(let book of category.books) {
            if (book.author === author) {
                    books.push(book.title)
            } 
        }
    }


    console.log(`Livros do autor ${author}: " , ${books.join(", ")}`)
}

booksOfAuthor('Mary Shelley')