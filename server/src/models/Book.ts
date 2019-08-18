import pool from '../db/connection';

export default class Book {
  constructor(
    private author: string[], 
    private title: string, 
    private description: string
  ) {}

  public static save = async (book: Book): Promise<Book>  => {
    const response = await pool.query(`
      INSERT INTO books (author, title, description) 
      VALUES ('{${book.author.join(',')}}', '${book.title}', '${book.description}') 
      RETURNING *;`
    );
    return response.rows[0];
  };

  public static getAll = async () => {
    const response = await pool.query(`
      SELECT * FROM books;
    `);
    return response.rows;
  };

  public static update = async (id: string, title: string) => {
    const response = await pool.query(`
      UPDATE books 
      SET title='${title}'
      WHERE id='${id}'
      RETURNING *;
    `);
    return response.rows[0];
  }

  public static deleteOne = async (id: string) => {
    const response = await pool.query(`
      DELETE FROM books WHERE id=${id}
      RETURNING *;
    `);
    return response.rows[0];
  };

  public static deleteAll = async () => {
    const response = await pool.query(`
      DELETE FROM books;
    `);
  }
}