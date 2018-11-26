import * as React from 'react';
import './App.css';
import NewsList from './components/news-list';
import UsersList from './components/users-list';

class App extends React.Component {
    public render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <UsersList />
                    </div>
                    <div className="col-lg-9">
                        <NewsList />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
