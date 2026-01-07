import { Body, Controller, Get, HttpCode, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@HttpCode(200)
	@Post('register')
	register(@Body() dto: AuthDto) {
		return this.authService.register(dto);
	}

	@HttpCode(200)
	@Post('login')
	login(@Body() dto: AuthDto) {
		return this.authService.login(dto.name, dto.password);
	}

	@UseGuards(AuthGuard)
	@Get('profile')
	getProfile(@Request() req) {
		return req.user;
	}
}
