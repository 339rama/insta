import { Controller, Get, Param } from '@nestjs/common';
import { ApiService } from '../service/api.service';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}
  
  @Get('stories/:user_id')
  async stories(@Param('user_id') user_id: number) {
    return await this.apiService.stories(user_id);
  }

  @Get('users')
  async users() {
    return await this.apiService.users();
  }
  @Get('search_exact/:user_name')
  async searchExact(@Param('user_name') user_name: string) {
    return await this.apiService.searchExact(user_name);
  }
}
