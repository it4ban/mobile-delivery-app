import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, UsersModule],
	controllers: [AppController],
	providers: [PrismaService, AppService],
})
export class AppModule {}
