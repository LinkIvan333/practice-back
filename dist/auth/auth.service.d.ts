import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtTokenService;
    constructor(usersService: UserService, jwtTokenService: JwtService);
    validateUser(mail: string, pass: string): Promise<any>;
    loginWithCredentials(user: any): Promise<{
        status: number;
        access_token: string;
        response?: undefined;
    } | {
        status: number;
        response: string;
        access_token?: undefined;
    }>;
}
