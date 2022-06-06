import { Injectable } from '@nestjs/common';
import { AuthService as AuthLibService, SignUpBodyDTO } from '@libs/auth';
import { UserEntity } from '@libs/entities';

@Injectable()
export class AuthService {

  constructor(
    private readonly authLibService: AuthLibService,
  ) {}

  getMe(id: number): Promise<UserEntity> {
    return this.authLibService.getMe(id);
  }

  signUp(signUpBodyDTO: SignUpBodyDTO): Promise<void> {
    return this.authLibService.signUp(signUpBodyDTO);
  }

  signIn(email: string, password: string): Promise<UserEntity> {
    return this.authLibService.signIn(email, password);
  }

}
