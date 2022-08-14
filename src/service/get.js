class Get {
  async getItem(url) {
    return await fetch(url).then((res) => {
      console.log(res);
      return res;
    });
  }
}

export default Get;
