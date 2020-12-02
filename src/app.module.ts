import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './modules/api/api.module';
import { DatabaseModule } from './modules/database/database.module';
import { CredentialModule } from './modules/credentials/credential.module';

@Module({
  imports: [
    ApiModule,
    ConfigModule.forRoot({
      envFilePath: ['./config/env', `./config/.env`],
    }),
    DatabaseModule,
    CredentialModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
