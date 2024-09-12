export class UserLoginViewModel {
    constructor(
      public email: string,
      public password: string,
      public csrfToken: string | undefined
    ) {}
  }
  