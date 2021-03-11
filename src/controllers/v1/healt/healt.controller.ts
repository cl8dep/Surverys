import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/v1/healt')
class HealtController {
  constructor() {}

  @Get()
  healt(): string {
    return 'Ok';
  }  
}

export default HealtController;
