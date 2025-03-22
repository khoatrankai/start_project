/* eslint-disable @typescript-eslint/no-unused-expressions */
import {
  ConflictException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { AccountUsers } from 'src/database/entities/account_users.entity';
@Injectable()
export class UserService {
  constructor(
    
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

 

 

  
}
