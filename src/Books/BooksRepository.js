import HttpGateway from "../Shared/HttpGateway.js";
import Observable from "../Shared/Observable.js";

class BooksRepository {
  httpGateway = null;
  programmersModel = null;
  apiUrl = "https://api.logicroom.co/api/yunjun.wangirl@gmail.com/";

  constructor() {
    this.httpGateway = new HttpGateway();
    this.programmersModel = new Observable([]);
  }

  getBooks = async (callback) => {
    this.programmersModel.subscribe(callback);

    await this.loadApiData();
    this.programmersModel.notify();
  };

  addBook = async (bookPm) => {
    await this.addApiData(bookPm);
    await this.loadApiData();

    this.programmersModel.notify();
  };

  reset = async () => {
    await this.resetApiData();
    await this.loadApiData();

    this.programmersModel.notify();
  };

  loadApiData = async () => {
    const booksDto = await this.httpGateway.get(this.apiUrl + "books");
    this.programmersModel.value = booksDto.result.map((bookDto) => {
      return bookDto;
    });
  };

  addApiData = async (bookPm) => {
    const bookDto = {
      name: bookPm.name,
      author: bookPm.author,
    };
    await this.httpGateway.post(this.apiUrl + "books", bookDto);
  };

  resetApiData = async () => {
    await this.httpGateway.get(this.apiUrl + "reset");
  };
}

const booksRepository = new BooksRepository();
export default booksRepository;
