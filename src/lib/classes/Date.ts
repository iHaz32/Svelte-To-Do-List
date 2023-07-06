class Date {
    day: number;
    month: number;
    year: number;
  
    constructor(day: number, month: number, year: number) {
      this.day = day;
      this.month = month;
      this.year = year;
    }
  
    format(): string {
      return `${this.day}/${this.month}/${this.year}`;
    }
  }
  
  export default Date;