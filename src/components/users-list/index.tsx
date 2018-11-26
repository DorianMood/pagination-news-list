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
    }

    public fetchUsers = () => {
        console.log(1);
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
