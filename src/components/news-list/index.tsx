import * as React from 'react';
import { News } from 'src/models/News';
import NewsItem from '../news-item';
import Pagination from '../pagination';
import { User } from 'src/models';
import * as reducer from '../../reducers';
import { connect } from 'react-redux';

const PAGE_SIZE = 10;

interface IProps {
    currentUser: User;
}

interface IState {
    news: News[];
    page: number;
}

class NewsList extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);

        this.state = {
            news: [
                {
                    author: { userName: "Nikita", userId: "123" },
                    date: "123",
                    id: 1,
                    likes: [],
                    text: "text",
                    title: "title"
                },
                {
                    author: { userName: "Nikita", userId: "123" },
                    date: "123",
                    id: 2,
                    likes: [],
                    text: "text",
                    title: "title"
                },
                {
                    author: { userName: "Nikita", userId: "123" },
                    date: "123",
                    id: 3,
                    likes: [],
                    text: "text",
                    title: "title"
                }
            ],
            page: 0
        }
        this.fetchUsers();
    }

    public fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json())
            .then(json => {
                const newsList = [];
                for (const element of json) {
                    const news: News = {
                        date: "123",
                        title: element['title'],
                        text: element['body'],
                        author: {
                            userName: element['userId'],
                            userId: element['userId']
                        },
                        likes: [],
                        id: element['id']
                    }
                    newsList.push(news);
                }
                this.setState({
                    news: newsList
                })
            });
    }

    public onPaginationClick = (page: number) => {
        this.setState({ ...this.state, page })
    }

    public onPostLike = (postId: number) => {
        console.log('like');
        const news: News[] = this.state.news.map((el, i) =>
            el.id === postId ? {
                ...el,
                likes: el.likes.concat(this.props.currentUser)
                } : el
        );
        this.setState({
            news
        })
    }

    public render() {
        const compareUsers = (user1: User, index: number) => {
            return user1.userId === this.props.currentUser.userId ? true : false;
        }
        return (
            <>
                {this.state.news
                    .slice(
                        this.state.page * PAGE_SIZE,
                        (this.state.page + 1) * PAGE_SIZE)
                    .map((el, i) =>
                        <NewsItem
                            news={el}
                            key={i}
                            liked={el.likes.find(compareUsers) !== undefined}
                            onLike={this.onPostLike}
                        />
                    )}
                <Pagination
                    active={this.state.page}
                    max={Math.ceil(this.state.news.length / PAGE_SIZE)}
                    onClick={this.onPaginationClick} />
            </>
        );
    }
}

const mapStateToProps = (store: reducer.IState) => {
    return {
        currentUser: store.currentUser
    }
}

export default connect(mapStateToProps, {})(NewsList);
