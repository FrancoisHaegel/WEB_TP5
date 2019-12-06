export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public gender: string,
    public login: string,
    public password: string,
    public city: string,
    public postalCode: number,
    public address: string,
    public email: string,
    public phoneNumber: string,
    public country: string
  ){}
}