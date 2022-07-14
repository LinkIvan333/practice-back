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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../constants");
const crypto_1 = require("crypto");
let AuthService = class AuthService {
    constructor(usersService, jwtTokenService) {
        this.usersService = usersService;
        this.jwtTokenService = jwtTokenService;
    }
    async validateUser(mail, pass) {
        const user = await this.usersService.getUserByMail(mail);
        const hmac = (0, crypto_1.createHmac)('sha256', user.salt + pass)
            .digest()
            .toString('base64');
        return user && user.password === hmac;
    }
    async loginWithCredentials(user) {
        const payload = { username: user.login, sub: user.password };
        const data = await this.validateUser(payload.username, payload.sub);
        if (data) {
            return {
                status: 200,
                access_token: this.jwtTokenService.sign(payload, {
                    secret: constants_1.jwtConstants.secret,
                }),
            };
        }
        else {
            return {
                status: 401,
                response: 'Authentication error',
            };
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map