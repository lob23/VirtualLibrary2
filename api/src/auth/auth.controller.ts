import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { AccessTokenDto } from './dto/response/access-token.dto';
import { LoginDto } from './dto/request/login.dto';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get()
    async verify(@Req() req: Request) {
        return req['user'].sub;
    }
    
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<AccessTokenDto> {
        console.log('loginDto', loginDto.email);
        return await this.authService.login(loginDto.email, loginDto.password);
    }
} 