import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [TypeOrmModule, UserModule, UserService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}