// Objects and factories
function createBook(title, author, readStatus = false) {
  return {
    title: title,
    author: author,
    readStatus: readStatus,

    getDescription() {
      return `${this.title} was written by ${this.author}. I ${this.read ? 'have' : 'have not'} read`;
    },

    readBook() {
      this.readStatus = true;
    }
  }
}

let mythos = createBook('Mythos', 'Stephen Fry');
let meTalkPretty = createBook('Me Talk Pretty One Day', 'David Sedaris');
let aunts = createBook("Aunts aren't Gentleman", 'PG Wodehouse');


