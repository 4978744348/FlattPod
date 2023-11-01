export class User {

  private _id: string;
  private _email: string;

  constructor(id: string, email: string) {
    this._id = id;
    this._email = email;
  }

  static getProperties (): string[] {
    return ['email'];
  }

  get id(): string | undefined {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }
}


// export class User {

//   private _id: string | undefined;
//   private _login: string;
//   private _password: string;
//   private _email: string;

//   constructor(login: string, password: string, email: string) {
//     this._login = login;
//     this._password = password;
//     this._email = email;
//   }

//   get id(): string | undefined {
//     return this._id;
//   }

//   set id(id: string) {
//     this._id = id;
//   }

//   get login(): string {
//     return this._login;
//   }

//   set login(login: string) {
//     this._login = login;
//   }

//   get password(): string {
//     return this._password;
//   }

//   set password(password: string) {
//     this._password = password;
//   }

//   get email(): string {
//     return this._email;
//   }

//   set email(email: string) {
//     this._email = email;
//   }
// }