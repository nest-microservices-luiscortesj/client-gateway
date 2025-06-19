import { Controller,  Post, Body, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { NATS_SERVICE } from 'src/config';

@Controller('users')
export class UsersController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.client.send('createUser',createUserDto).pipe(
          catchError((err) => {
            throw new RpcException(err);
          }),
        );;
  }
}
