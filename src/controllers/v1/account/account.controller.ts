import { Controller, Get } from '@nestjs/common';

@Controller('api/v1/account')
class AccountController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'Hello!';
  }
}

export default AccountController;
