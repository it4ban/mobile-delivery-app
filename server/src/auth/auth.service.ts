import { PrismaService } from 'src/prisma.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthDto } from './dto/auth.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private usersService: UsersService,
		private jwtService: JwtService,
	) {}
	async register(dto: AuthDto) {}

	async login(username: string, pass: string): Promise<{ access_token: string }> {
		const user = await this.usersService.findOne(username);
		if (user?.password !== pass) {
			throw new UnauthorizedException();
		}

		const payload = { sub: user.userId, username: user.name };
		return {
			access_token: await this.jwtService.sign(payload),
		};
	}
}
