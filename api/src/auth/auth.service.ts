import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import em from 'src/error-message';
import { JwtService } from '@nestjs/jwt';
import { AccessTokenDto } from './dto/response/access-token.dto';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async login(email: string, password: string) : Promise<AccessTokenDto> {
        const user = await this.usersService.getByEmail(email);
        if (!user) {
            throw new UnauthorizedException(em('INVALID_CREDENTIALS'));
        }
        const isPasswordMatch = await bcrypt.compare(password, user.User_password);
        if (!isPasswordMatch) {
            throw new UnauthorizedException(em('INVALID_CREDENTIALS'));
        }
        const payload = { 
            sub: user._id,
            email: user.User_email,
        };
        return { accessToken: await this.jwtService.signAsync(payload) };
    }
}
