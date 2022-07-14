import {Injectable, Logger} from '@nestjs/common';
import {UserEntity} from './user.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, UpdateResult} from 'typeorm';
import {createHmac, randomBytes} from 'crypto';
import {PostResponse, UserPublicModel} from "../types";

function isPasswordValid(password): boolean {
    if (password.length < 8) {
        return false
    }
    return true
}

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRep: Repository<UserEntity>,
    ) {
    }

    async getUser(id: number): Promise<UserPublicModel> {
        const User = await this.usersRep.findOneBy({userID: id});
        return {
            userID: User.userID,
            name: User.name,
            phoneNumber: User.phoneNumber,
            points: User.points,
        }
    }

    async registerUser(mail: string, password: string): Promise<PostResponse> {
        const existedUser = await this.getUserByMail(mail)
        if (existedUser) {
            return {
                status: 401,
                response: 'Account already exist'
            }
        }
        if (!isPasswordValid(password)) {
            return {
                status: 401,
                response: 'Incorrect new password'
            }
        }
        const salt = randomBytes(16).toString('base64');
        const hmac = createHmac('sha256', salt + password)
            .digest()
            .toString('base64');
        const User = new UserEntity(mail, hmac, salt);
        await User.save();
        return {
            status: 200,
        }
    }

    async getUserByMail(mail: string): Promise<UserEntity> {
        return this.usersRep.findOneBy({mail: mail});
    }

    async editUser(
        id: number,
        name?: string,
        phoneNumber?: string,
        password?: string,
    ): Promise<PostResponse> {
        const User = await this.usersRep.findOneBy({userID: id});
        if (password) {
            if (!isPasswordValid(password)) {
                return {
                    status: 401,
                    response: 'Incorrect new password'
                }
            }
            const oldPass = createHmac('sha256', User.salt + password)
                .digest()
                .toString('base64');
            if (oldPass !== User.password) {
                return {
                    status: 401,
                    response: 'Wrong old password'
                }
            }
            const salt = randomBytes(16).toString('base64');
            const hmac = createHmac('sha256', salt + password)
                .digest()
                .toString('base64');
            const updatedUser = {
                ...User,
                password: hmac,
                salt: salt,
            };
            await this.usersRep.update(updatedUser.userID, updatedUser);
            return {
                status: 200,
            }
        }
        const updatedUser = {
            ...User,
            name: name || User.name,
            number: phoneNumber || User.phoneNumber,
        };
        await this.usersRep.update(updatedUser.userID, updatedUser);
        return {
            status: 200,
        }
    }
}
