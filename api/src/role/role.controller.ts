import { Controller, Get, Req } from '@nestjs/common';
import { RoleService } from './role.service';
import { Request } from 'express';

@Controller('role')
export class RoleController {
    constructor(private readonly roleService: RoleService) { }

    @Get()
    async getYourRole(@Req() req: Request) {
        return await this.roleService.getAuthLevel(req['user'].sub);
    }
}
