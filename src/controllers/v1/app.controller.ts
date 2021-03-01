import { Controller, Get } from '@nestjs/common';

@Controller()
class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return "Hello!";
  }
}

export default AppController;
