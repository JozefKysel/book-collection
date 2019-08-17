export default class Book {
  constructor(
    private name: string, 
    private authors: string[], 
    private description: string
  ) {}

  public static save = (book: Book) => {
    console.log('savingBooks')
  }

  public static getAll = () => {
    console.log('all books');
  }

  public static update = (id: string) => {
    console.log('update', id);
  }

  public static deleteOne = (id: string) => {
    console.log('delete one', id);
  }

  public static deleteAll = () => {
    console.log('delete all');
  }
}