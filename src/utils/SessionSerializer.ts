import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/typeorm/entities/user.entity';
import { UsersService } from 'src/users/services/users/users.service';

export class SessionSerializer extends PassportSerializer {
  constructor(private usersService: UsersService) {
    super();
  }

  serializeUser(user: User, done: (err, user: User) => void) {
    console.log('SerializeUser');
    done(null, user);
  }
  async deserializeUser(user: User, done: (err, user: User) => void) {
    console.log('Deserialize User');
    const userDB = await this.usersService.findUserById(user.id);
    return userDB ? done(null, userDB) : done(null, null);
  }
}
