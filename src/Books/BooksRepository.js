import HttpGateway from "../Shared/HttpGateway.js";

class BooksRepository {
  httpGateway = null;
  programmersModel = null;
  apiUrl = "https://api.logicroom.co/api/pete@logicroom.co/";

  constructor() {
    this.httpGateway = new HttpGateway();
  }

  loadApiData = async () => {
    const booksDto = await this.httpGateway.get(this.apiUrl + "books");
    this.programmersModel.value = booksDto.result.map(bookDto => {
      return bookDto;
    });
  };
}

const booksRepository = new BooksRepository();
export default booksRepository;
