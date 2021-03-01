import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('(POST) api/v1/auth/sign-in', () => {
    return request(app.getHttpServer())
      .post('/api/v1/auth/sign-in')
      .expect(201)
      .expect('Sign In!');
  });

  it('(POST) api/v1/auth/sign-up', () => {
    return request(app.getHttpServer())
      .post('/api/v1/auth/sign-up')
      .expect(201)
      .expect('Sign Up!');
  });

  it('(POST) api/v1/auth/recover-password', () => {
    return request(app.getHttpServer())
      .post('/api/v1/auth/recover-password')
      .expect(201)
      .expect('Recover Password!');
  });
});
