import * as React from 'react';
import { News } from 'src/models/News';
import NewsItem from '../news-item';
import Pagination from '../pagination';

const PAGE_SIZE = 10;

interface IState {
    news: News[]
    page: number
}

class NewsList extends React.Component<{}, IState> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            news: [
                {
                    author: { userName: "Nikita", userId: "123" },
                    date: "123",
                    likes: [],
                    text: "text",
                    title: "title"
                },
                {
                    author: { userName: "Nikita", userId: "123" },
                    date: "123",
                    likes: [],
                    text: "text",
                    title: "title"
                },
                {
                    author: { userName: "Nikita", userId: "123" },
                    date: "123",
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
                        likes: []
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

    public render() {
        return (
            <>
                {this.state.news
                    .slice(
                        this.state.page * PAGE_SIZE,
                        (this.state.page + 1) * PAGE_SIZE)
                    .map((el, i) => <NewsItem news={el} key={i} />)}
                <Pagination
                    active={this.state.page}
                    max={Math.ceil(this.state.news.length / PAGE_SIZE)}
                    onClick={this.onPaginationClick} />
            </>
        );
    }
}

export default NewsList;
