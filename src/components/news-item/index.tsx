import * as React from 'react';
import { News } from 'src/models/News';

interface IProps {
    news: News
    liked?: boolean
}

const NewsItem: React.SFC<IProps> = (props) => {
    const { news } = props;

    return (
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{news.title}</span>
                <p>{news.text}.</p>
            </div>
            <div className="card-action">
                <a href="#">{news.author.userName}</a>
                <a href="#">{news.date}</a>
                <a href="#">
                    <i className="material-icons circle right">
                        {props.liked ? "favorite_border" : "favorite"}
                    </i>
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
