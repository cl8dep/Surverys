import { Test, TestingModule } from '@nestjs/testing';
import Controller from '.';
describe('AppController', () => {
  let appController: Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Controller],
      providers: [],
    }).compile();

    appController = app.get<Controller>(Controller);
  });

  describe('root', () => {
    it('should return "Sign In!"', () => {
      expect(appController.signIn()).toBe('Sign In!');
    });
    it('should return "Sign Up!"', () => {
        expect(appController.signUp()).toBe('Sign Up!');
      });
      it('should return "Recover Password!"', () => {
        expect(appController.recoverPassword()).toBe('Recover Password!');
      });
  });
});
