import { COOKIES_OPTIONS, JWT } from 'config';
import ms from 'ms';

export const COOKIE = {
  ACCESS_TOKEN: 'Authorization',
};

export const COOKIE_EXPIRES = (): Date => (new Date(Date.now() + ms(JWT.EXPIRATION)));

export const PASSWORD_SALT_ROUNDS = 10;
export const MIN_PASSWORD_LENGTH = 4;
export const MAX_PASSWORD_LENGTH = 255;

export const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?:&_;-])[A-Za-z\d@$!%*?:&_;-]+$/;

export const COOKIE_SECURE_OPTIONS = {
  httpOnly: true,
  secure: COOKIES_OPTIONS.SECURE,
  sameSite: COOKIES_OPTIONS.SAME_SITE,
};

