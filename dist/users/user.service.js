"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("./user.model");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const crypto_1 = require("crypto");
function isPasswordValid(password) {
    if (password.length < 8) {
        return false;
    }
    return true;
}
let UsersService = class UsersService {
    constructor(usersRep) {
        this.usersRep = usersRep;
    }
    async getUser(id) {
        const User = await this.usersRep.findOneBy({ userID: id });
        return {
            userID: User.userID,
            name: User.name,
            phoneNumber: User.phoneNumber,
            points: User.points,
        };
    }
    async addUser(mail, password) {
        const existedUser = await this.getUserByMail(mail);
        if (existedUser) {
            return {
                status: 401,
                response: 'Account already exist'
            };
        }
        if (!isPasswordValid(password)) {
            return {
                status: 401,
                response: 'Incorrect new password'
            };
        }
        const salt = (0, crypto_1.randomBytes)(16).toString('base64');
        const hmac = (0, crypto_1.createHmac)('sha256', salt + password)
            .digest()
            .toString('base64');
        const User = new user_model_1.UserModel(mail, hmac, salt);
        await User.save();
        return {
            status: 200,
        };
    }
    async getUserByMail(mail) {
        return this.usersRep.findOneBy({ mail: mail });
    }
    async editUser(id, name, phoneNumber, password) {
        const User = await this.usersRep.findOneBy({ userID: id });
        if (password) {
            if (!isPasswordValid(password)) {
                return {
                    status: 401,
                    response: 'Incorrect new password'
                };
            }
            const oldPass = (0, crypto_1.createHmac)('sha256', User.salt + password)
                .digest()
                .toString('base64');
            if (oldPass !== User.password) {
                return {
                    status: 401,
                    response: 'Wrong old password'
                };
            }
            const salt = (0, crypto_1.randomBytes)(16).toString('base64');
            const hmac = (0, crypto_1.createHmac)('sha256', salt + password)
                .digest()
                .toString('base64');
            const updatedUser = Object.assign(Object.assign({}, User), { password: hmac, salt: salt });
            await this.usersRep.update(updatedUser.userID, updatedUser);
            return {
                status: 200,
            };
        }
        const updatedUser = Object.assign(Object.assign({}, User), { name: name || User.name, number: phoneNumber || User.phoneNumber });
        await this.usersRep.update(updatedUser.userID, updatedUser);
        return {
            status: 200,
        };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_model_1.UserModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=user.service.js.map