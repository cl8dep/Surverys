import { Controller, Post } from '@nestjs/common';

@Controller('api/v1/auth')
class AppController {
  constructor() {}

  @Post('/sign-in')
  signIn(): string {
    return 'Sign In!';
  }

  @Post('/sign-up')
  signUp(): string {
    return 'Sign Up!';
  }

  @Post('/recover-password')
  recoverPassword(): string {
    return 'Recover Password!';
  }
}

export default AppController;
