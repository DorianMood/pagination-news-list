import * as React from 'react';
import './App.css';
import UsersList from './components/users-list';
import NewsList from './components/news-list';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <UsersList />
                <NewsList />
            </div>
        );
    }
}

export default App;
