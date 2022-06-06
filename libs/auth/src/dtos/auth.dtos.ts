import { ApiProperty, PickType } from '@nestjs/swagger';
import { ApiPropertyEmail, ApiPropertyString } from '@libs/api-decorators';
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH, PASSWORD_PATTERN } from '@libs/constants';
import { UserEntity } from '@libs/entities';

export class MeResponseDTO extends UserEntity {}

export class SignUpBodyDTO extends PickType(UserEntity, ['password'] as const) {

  @ApiPropertyEmail()
  email: string;

  @ApiPropertyString({ minLength: MIN_PASSWORD_LENGTH, maxLength: MAX_PASSWORD_LENGTH, pattern: PASSWORD_PATTERN })
  password: string;

}

export class SignUpResponseDTO {

  @ApiProperty()
  accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

}

export class SignInBodyDTO {

  @ApiPropertyEmail()
  email: string;

  @ApiPropertyString({ minLength: MIN_PASSWORD_LENGTH, maxLength: MAX_PASSWORD_LENGTH, pattern: PASSWORD_PATTERN })
  password: string;

}

export class SignInResponseDTO {

  @ApiProperty()
  accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

}
