import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Address } from './address/address.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'users',
    username: 'postgres',
    password: '030602',
    entities: [User, Address],
    synchronize: true,
  }), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
