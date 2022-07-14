import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { Infomodel } from "./types";
export declare class AppController {
    private readonly appService;
    private authService;
    constructor(appService: AppService, authService: AuthService);
    login(req: any): Promise<{
        status: number;
        access_token: string;
        response?: undefined;
    } | {
        status: number;
        response: string;
        access_token?: undefined;
    }>;
    getInfomodel(): Promise<Infomodel>;
}
