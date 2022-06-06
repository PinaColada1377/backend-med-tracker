import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ERRORS } from '@libs/constants';
import { UserEntity } from '@libs/entities';
import { SignUpBodyDTO } from '../dtos/auth.dtos';
import { comparePasswords, getHashByPassword } from '../helpers/password.helper';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersRepository: UsersRepository,
  ) {
  }

  public getMe(id: number): Promise<UserEntity> {
    return this.getUserOrFail({ id });
  }

  async signUp(signUpBodyDTO: SignUpBodyDTO): Promise<void> {
    const { email, password } = signUpBodyDTO;

    const userByEmail = await this.usersRepository.getUser({ email });
    if (userByEmail) {
      throw new BadRequestException([{ field: 'email', message: ERRORS.EMAIL_ALREADY_IN_USE }]);
    }

    const passwordHash = await getHashByPassword(password);
    await this.usersRepository.save({
      email,
      password: passwordHash,
    });
  }

  async signIn(email: string, password: string): Promise<UserEntity> {
    const user = await this.getUserOrFail({ email });

    const isPasswordCorrect = await comparePasswords(password, user.password);
    if (!isPasswordCorrect) {
      throw new UnauthorizedException([{ field: 'password', message: ERRORS.INVALID_PASSWORD }]);
    }

    return user;
  }

  async getUserOrFail(conditions: Partial<UserEntity>): Promise<UserEntity> {
    const user = await this.usersRepository.getUser(conditions);
    if (!user) {
      throw new NotFoundException([{ field: '', message: ERRORS.USER_NOT_FOUND }]);
    }
    return user;
  }

}
