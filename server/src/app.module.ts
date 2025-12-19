import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { AppService } from './app.service';

@Module({
	imports: [AuthModule],
	controllers: [AppController],
	providers: [PrismaService, AppService],
})
export class AppModule {}
