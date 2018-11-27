import { action } from 'typesafe-actions';
import { User } from 'src/models';

export const changeUser = (user: User) => {
    return action('CHANGE_USER', user);
}