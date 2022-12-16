import { AdminService } from './admin.service';
import { CreateAdminDto, UpdateAdminDto, UpdatePasswordAdminDto } from './dto/admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    createAdmin(donnees: CreateAdminDto, req: any): Promise<void>;
    findallAdmin(req: any): Promise<import("../entities/Administrateurs").Administrateurs[]>;
    findAdminById(donnees: {
        id: number;
    }, req: any): Promise<import("../entities/Administrateurs").Administrateurs>;
    findAdminByToken(req: any): Promise<import("../entities/Administrateurs").Administrateurs>;
    updateAdmin(donnees: UpdateAdminDto, req: any): Promise<void>;
    updatePasswordAdmin(donnees: UpdatePasswordAdminDto, req: any): Promise<void>;
}
