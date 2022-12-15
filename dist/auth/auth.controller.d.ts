import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    authPersonnes(donnees: AuthDto): Promise<import("./dto/auth.dto").AuthResponseToken>;
    authAdmin(donnees: AuthDto): Promise<import("./dto/auth.dto").AuthResponseToken>;
}
