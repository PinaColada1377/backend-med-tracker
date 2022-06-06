import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { COOKIE, COOKIE_EXPIRES, COOKIE_SECURE_OPTIONS } from '@libs/constants';
import {
  Auth,
  MeResponseDTO,
  RequestWithUser,
  SignInBodyDTO,
  SignInResponseDTO,
  SignUpBodyDTO,
  SignUpResponseDTO,
} from '@libs/auth';
import { AuthService } from '../services';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {
  }

  @Get('me')
  @Auth()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: MeResponseDTO })
  async me(@Req() { user }: RequestWithUser): Promise<MeResponseDTO> {
    return new MeResponseDTO(await this.authService.getMe(user.id));
  }

  @Post('sign-up')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: SignUpResponseDTO })
  async signUp(@Body() signUpBodyDTO: SignUpBodyDTO, @Res() res: Response): Promise<void> {
    await this.authService.signUp(signUpBodyDTO);

    const { email, password } = signUpBodyDTO;
    const { id } = await this.authService.signIn(email, password);
    const accessToken = this.jwtService.sign({ id });

    res.cookie(COOKIE.ACCESS_TOKEN, accessToken, {
      expires: COOKIE_EXPIRES(),
      ...COOKIE_SECURE_OPTIONS,
    });
    res.send(new SignUpResponseDTO(accessToken));
  }

  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: SignInResponseDTO })
  async signIn(@Body() { email, password }: SignInBodyDTO, @Res() res: Response): Promise<void> {
    const { id } = await this.authService.signIn(email, password);
    const accessToken = this.jwtService.sign({ id });

    res.cookie(COOKIE.ACCESS_TOKEN, accessToken, {
      expires: COOKIE_EXPIRES(),
      ...COOKIE_SECURE_OPTIONS,
    });

    res.send(new SignInResponseDTO(accessToken));
  }

  @Post('log-out')
  @HttpCode(HttpStatus.OK)
  logOut(@Res() res: Response): void {
    res.clearCookie(COOKIE.ACCESS_TOKEN, COOKIE_SECURE_OPTIONS);
    res.send();
  }

}
