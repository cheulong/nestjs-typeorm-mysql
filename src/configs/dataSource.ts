import { Post } from 'src/typeorm/entities/post.entity';
import { Profile } from 'src/typeorm/entities/profile.entity';
import { Session } from 'src/typeorm/entities/session';
import { User } from 'src/typeorm/entities/user.entity';
import { DataSource } from 'typeorm';
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'long',
  password: '1234',
  database: 'nestjs_mysql',
  entities: [User, Post, Profile, Session],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
