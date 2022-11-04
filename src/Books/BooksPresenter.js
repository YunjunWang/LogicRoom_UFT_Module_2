import booksRepository from "./BooksRepository.js";

export default class BooksPresenter {
  load = async (callback) => {
    const transformPmToVm = (booksPm) => {
      const mapBooksPmForBooksVm = (bookPm) => {
        return { name: bookPm.name };
      };
      const booksVm = booksPm.map(mapBooksPmForBooksVm);

      callback(booksVm);
    };
    booksRepository.getBooks(transformPmToVm);
  };

  addBook(bookPm) {
    booksRepository.addBook(bookPm);
  }

  reset() {
    booksRepository.reset();
  }
}
