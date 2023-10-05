export class User {

  private _id: string | undefined;
  private _login: string;
  private _password: string;

  constructor(login: string, password: string) {
    this._login = login;
    this._password = password;
  }

  get id(): string | undefined {
    return this._id;
  }

  set id(id: string) {
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