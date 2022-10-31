import {
  AuthenticatedGuard,
  LocalAuthGuard,
} from './../../../utils/LocalGuard';
import {
  Controller,
  Req,
  Post,
  UseGuards,
  Get,
  Session,
  Request,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    console.log(req.user);
    return req.user;
  }

  @Get()
  async getAuthSession(@Session() session: Record<string, any>) {
    console.log(session);
    console.log(session.id);
    session.authenticated = true;
    return session;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('status')
  async getAuthStatus(@Req() req: Request) {
    return req;
  }
}
