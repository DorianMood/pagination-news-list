import * as React from 'react';
import { User } from 'src/models/User';
import UserBox from '../user-box';

interface IState {
    users: User[]
}

class UsersList extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            users: [
                { userName: "Nikita", userId: "123" },
                { userName: "Nikita", userId: "123" }
            ]
        }
        this.fetchUsers();
    }

    public fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(json => {
                const users: User[] = [];
                for (const element of json) {
                    const user: User = {
                        userId: element['id'],
                        userName: element['username']
                    }
                    users.push(user);
                }
                this.setState({...this.state, users});
            });
    }

    public render() {
        return (
            <ul className="collection">
                {this.state.users.map((el, i) => <UserBox user={el} key={i} />)}
            </ul>
        );
    }
}

export default UsersList;
