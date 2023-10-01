export class User {

  private _id: number;
  private _login: string;
  private _password: string;

  constructor(id: number, login: string, password: string) {
    this._id = id;
    this._login = login;
    this._password = password;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get login(): string {
    return this._login;
  }

  set login(login: string) {
    this._login = login;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }
}