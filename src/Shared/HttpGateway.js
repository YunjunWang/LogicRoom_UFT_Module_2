export default class HttpGateway {
  get = async path => {
    const response = await fetch(path);
    const booksDto = response.json();
    return booksDto;
  };

  post = async (path, requestDto) => {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(requestDto),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const responseDto = response.json();
    return responseDto;
  };
}
