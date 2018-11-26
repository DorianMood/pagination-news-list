import * as React from 'react';
import { User } from 'src/models/User';

interface IProps {
    user: User
}

class UserBox extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <li className="collection-item avatar">
                <i className="material-icons circle">folder</i>
                <span className="title">{this.props.user.userName}</span>
                <p>{this.props.user.userId}</p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
        );
    }
}

export default UserBox;
