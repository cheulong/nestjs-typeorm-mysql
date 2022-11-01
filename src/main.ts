import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { Session } from './typeorm/entities/session';
import { TypeormStore } from 'connect-typeorm';
import { AppDataSource } from './configs/dataSource';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const sessionRepository = AppDataSource.getRepository(Session);
  app.use(
    session({
      name: 'Nestjs_Session_ID',
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000,
      },
      store: new TypeormStore().connect(sessionRepository),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
