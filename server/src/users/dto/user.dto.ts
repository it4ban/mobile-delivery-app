import { IsEmail, IsString, Max, Min, MinLength, IsInt } from 'class-validator';

export class UserDto {
	@IsInt()
	@Min(1)
	userId: number;

	@MinLength(3, { message: 'Name must be at least 3 characters long' })
	@IsString()
	name: string;

	@IsEmail()
	email: string;

	@MinLength(6, { message: 'Password must be at least 6 characters long' })
	@IsString()
	password: string;
}
