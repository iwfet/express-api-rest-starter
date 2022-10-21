export class DateGMT {
    #date;
    #option = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timezone: "America/Sao_Paulo",
    };
  
    constructor(date = new Date()) {
      this.#date = new Date(date).toLocaleDateString("pt-BR", this.#option);
    }
  
    getData() {
      return this.#date;
    }
  
    getDateFull() {
      return this.#date.slice(0, 10);
    }
  }
  