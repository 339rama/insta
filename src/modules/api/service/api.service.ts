import { Injectable } from '@nestjs/common';
import { CredentialService } from 'src/modules/credentials/services/credential.service';
import { ApiClient } from '../client';

@Injectable()
export class ApiService {
  constructor(
    private client: ApiClient,
    private credentialService: CredentialService
    ){
    (async () => {
      console.log('api start');
      this.client.init({id: 1, password: 'test', username: 'test', is_banned: false, proxy: null})
      // for await (const cr of await this.credentialService.getCredentials()){
      //   const initError = await this.client.init(cr, null, false);
      //   if(initError){
      //     await this.credentialService.setBanned(cr.id);
      //     console.log('ERROR in first init', initError);
      //   } else {
      //     console.log('success', cr);
      //     break;
      //   }
      // }
    })();
  }
  
  public async stories(userId: number) {
    try {
      return await this.client.stories(userId)
    } catch (error) {
      const bannedId = this.client.credential.id;
      this.credentialService.setBanned(bannedId);
      const cr = await this.credentialService.getNextCredential(bannedId);
      return this.client.init(cr, {brokeFunc: this.stories, args: userId});
    }
  }
  public async users() {
    return 'users'
  }
  public async searchExact(username: string) {
    return await this.client.searchExact(username)
  }
  }