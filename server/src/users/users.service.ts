import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
	private readonly users: UserDto[] = [
		{
			userId: 1,
			name: 'Test User',
			email: 'test@example.com',
			password: 'password',
		},
		{
			userId: 2,
			name: 'Test User 2',
			email: 'test2@example.com',
			password: 'password2',
		},
	];
	constructor() {}

	async findOne(username: string): Promise<UserDto | undefined> {
		return this.users.find((user) => user.name === username);
	}
}
