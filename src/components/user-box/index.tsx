import * as React from 'react';
import { User } from 'src/models/User';
import { IState } from 'src/reducers';
import { connect } from 'react-redux';
import { changeUser } from 'src/actions';

interface IProps {
    user: User;
    selected?: boolean;
    onChangeCurrentUser: (user: User) => void;
    currentUser: User;
}

class UserBox extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public onChangeCurrentUserWrapper = () => {
        this.props.onChangeCurrentUser(this.props.user);
    }

    public render() {
        return (
            <li className="collection-item avatar">
                <i className="material-icons circle">folder</i>
                <span className="title">{this.props.user.userName}</span>
                <p>{this.props.user.userId}</p>
                <a href="#"
                    className="secondary-content"
                    onClick={this.onChangeCurrentUserWrapper}>
                    <i className="material-icons">
                        {this.props.currentUser
                            && this.props.currentUser.userId === this.props.user.userId ?
                            "person" : "person_outline"}
                    </i>
                </a>
            </li>
        );
    }
}

const mapStateToProps = (store: IState) => {
    return {
        currentUser: store.currentUser
    }
}

export default connect(mapStateToProps, dispatch => ({
    onChangeCurrentUser(user: User) {
        dispatch(changeUser(user));
    }
}))(UserBox);
