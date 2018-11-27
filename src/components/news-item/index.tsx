import * as React from 'react';
import { News } from 'src/models/News';

interface IProps {
    news: News;
    liked?: boolean;
    onLike: (postId: number) => void;
}

const NewsItem: React.SFC<IProps> = (props) => {
    const { news } = props;

    const onLikeClick = () => {
        props.onLike(news.id);
    }

    return (
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{news.title}</span>
                <p>{news.text}.</p>
            </div>
            <div className="card-action">
                <a href="#">{news.author.userName}</a>
                <a href="#">{news.date}</a>
                <a href="#" onClick={onLikeClick}>
                    <i className="material-icons circle right">
                        {props.liked ? "favorite_border" : "favorite"}
                    </i>
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
