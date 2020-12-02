import { Module } from "@nestjs/common";
import { CredentialModule } from "../credentials/credential.module";
import { ApiClient } from "./client";
import { ApiController } from "./controllers/api.controller";
import { ApiService } from "./service/api.service";

@Module({
  imports: [CredentialModule],
  controllers: [ApiController],
  providers: [ApiService, ApiClient],
})
export class ApiModule {}