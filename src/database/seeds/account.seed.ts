import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Account from "../entities/account/account.entity";

class AccountSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Account)().create();
  }
}

export default AccountSeed;
