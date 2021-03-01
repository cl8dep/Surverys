import { Test, TestingModule } from '@nestjs/testing';
import AccountController from '.';
describe('AppController', () => {
  let appController: AccountController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AccountController],
      providers: [],
    }).compile();

    appController = app.get<AccountController>(AccountController);
  });

  describe('root', () => {
    it('should return "Hello!"', () => {
      expect(appController.getHello()).toBe('Hello!');
    });
  });
});
