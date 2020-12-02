import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Credential } from '../models/credential.entity';

@Injectable()
export class CredentialService {
  constructor(
    @InjectRepository(Credential)
    private credentialRepository: Repository<Credential>,
  ) {}
  

  public async getCredentials(limit: number = 10){
    const query = await this.credentialRepository.createQueryBuilder();
    query.where('is_banned = :is_banned', {is_banned: false});
    query.limit(limit);
    return await query.getMany();
  }
  public async getNextCredential(id: number){
    const query = await this.credentialRepository.createQueryBuilder();
    query.where('is_banned = :is_banned AND id != :id', {is_banned: false, id });
    return await query.getOne();
  }
  public async getFirstCredential(){
    const query = await this.credentialRepository.createQueryBuilder();
    query.where('is_banned = :is_banned', {is_banned: false });
    return await query.getOne();
  }
  public async setBanned(id: number){
    await this.credentialRepository.update(id, {is_banned: true})
  }
  public async getActiveCredentialsCount(){
    const query = await this.credentialRepository.createQueryBuilder();
    query.where('is_banned = :is_banned', {is_banned: false});
    return await query.getCount();
  } 
}
