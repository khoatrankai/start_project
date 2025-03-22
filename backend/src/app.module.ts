import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { ConflictExceptionFilter } from './common/filters/conflict-exception.filter';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: ConflictExceptionFilter,
    },
  ],
  imports: [ ConfigModule.forRoot({
    isGlobal: true, 
  }),
    DatabaseModule,UserModule,RoleModule
  ]
})
export class AppModule {}
