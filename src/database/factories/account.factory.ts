import Faker from 'faker'
import { define } from 'typeorm-seeding';
import Account from '../entities/account/account.entity';
import AccountRole from '../types/AccountRole';
import AccountStatus from '../types/AccountStatus';

define(Account, (faker: typeof Faker) => {
  const gender = faker.random.number(1);
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);

  const account = new Account();
  account.email = faker.internet.email(firstName);
  account.firstName = firstName;
  account.lastName = lastName;
  account.role = AccountRole.ADMIN;
  account.status = AccountStatus.CREATED;
  account.password = faker.random.word();
  return account;
});
