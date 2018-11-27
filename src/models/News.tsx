import { User } from './User';

export class News {
    public id: number;
    public title: string;
    public text: string;
    public date: string;
    public author: User;
    public likes: User[];
}