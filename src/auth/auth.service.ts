import { Injectable, Logger } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constants';
import { createHmac } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtTokenService: JwtService,
  ) {}

  async validateUser(mail: string, pass: string): Promise<any> {
    const user = await this.usersService.getUserByMail(mail);
    const hmac = createHmac('sha256', user.salt + pass)
      .digest()
      .toString('base64');
    return user && user.password === hmac;
  }

  async loginWithCredentials(user: any) {
    const payload = { username: user.login, sub: user.password };
    const data = await this.validateUser(payload.username, payload.sub);
    if (data) {
      return {
        status: 200,
        access_token: this.jwtTokenService.sign(payload, {
          secret: jwtConstants.secret,
        }),
      };
    } else {
      return {
        status: 401,
        response: 'Authentication error',
      };
    }
  }
}
