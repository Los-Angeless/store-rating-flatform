import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RatingsModule } from './ratings/ratings.module';
import { StoresModule } from './stores/stores.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',  // replace with your MySQL username
      password: '#Nishant2002',  // replace with your MySQL password
      database: 'store_rating_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    UsersModule,
    StoresModule,
    RatingsModule,
    AuthModule,
  ],
})
export class AppModule {}
