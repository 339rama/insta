import { Injectable } from "@nestjs/common";
import { IgApiClient } from "instagram-private-api";
import { Credential } from "src/modules/credentials/models/credential.entity";

type InitOptions = {
  brokeFunc: (value?: any)=> any;
  args?: any; 
}

@Injectable()
export class ApiClient extends IgApiClient{
  public readonly credential: Credential = {} as Credential
  constructor(){
    super()
    console.log('INIT CLIENT');
  }

  public async init(
    credential: Credential, 
    options?: InitOptions, 
    failSilently: boolean = true,
    ){
    console.log('INIT', credential);
    try {
      this.credential.id = credential.id;
      this.credential.is_banned = credential.is_banned;
      this.credential.password = credential.password;
      this.credential.username = credential.username;
      this.credential.proxy = credential?.proxy;
      const {username, password} = this.credential;
      
      // this.state.generateDevice('insta_blogger_whatever');
      // await this.simulate.preLoginFlow();
      this.request.end$.subscribe(async () => {
        const serialized = await this.state.serialize();
        delete serialized.constants; // this deletes the version info, so you'll always use the version provided by the library
        console.log(serialized);
        
      });
      const created = await this.account.create(
        {username: 'insta_blogger_whatever', 
        password: 'badegg1996', 
        email: 'akakiiinsta@mail.ru', 
        first_name: 'Akakii'
      })
      // process.nextTick(async () => await this.simulate.postLoginFlow());
      console.log(created);
      // this.state.generateDevice(username);
      // await this.simulate.preLoginFlow();
      // const loggedInUser = await this.account.login(username, password);
      // process.nextTick(async () => await this.simulate.postLoginFlow());
      
      // this.state.generateDevice(username);
      // if(this.credential.proxy) {
      //   this.state.proxyUrl = this.credential.proxy;
      // }
      // await this.simulate.preLoginFlow();
      // const loggedInUser = await this.account.login(username, password);
      // process.nextTick(async () => await this.simulate.postLoginFlow());
      if (options){
        return options.brokeFunc(options.args);
      } 
    } catch (error) {
      console.log('errrrrr', error);
      if (!failSilently) {
      console.log('f', error);

        return error
      };
    }
  }
  public async stories(userId: number){
      // const reelsFeed = this.feed.reelsMedia({
      //   userIds: [userId],
      // });
      // const storyItems = await reelsFeed.items();
      // if (storyItems.length === 0) {
      //   console.log(`stories is empty`);
      //   return `stories is empty`;
      // }
      return userId
        
  }

  public async searchExact(username:string){
    return await this.user.searchExact(username);
  }

}
