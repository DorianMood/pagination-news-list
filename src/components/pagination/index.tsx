import * as React from 'react';

interface IProps {
    onClick: (page: number) => void;
    active: number;
    max: number;
}
class Pagination extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public click = (id: number) => {
        this.props.onClick(id);
    }

    public render() {
        const { active, max } = this.props;
        const elements = [];
        for (let i = 0; i < max; i++) {
            elements.push(
                <li className={
                    i === active ?
                        "active" : "waves-effect"}>
                    <a href="#!" onClick={this.click.bind(this, i)}>{i + 1}</a>
                </li>
            );
        }

        return (
            <ul className="pagination">
                <li className="waves-effec">
                    <a
                        href="#!"
                        onClick={this.click.bind(this, Math.max(active - 1, 0))}>
                        <i className="material-icons">chevron_left</i>
                    </a>
                </li>

                {elements}

                <li className="waves-effect">
                    <a
                        href="#!"
                        onClick={this.click.bind(this, Math.min(active + 1, max - 1))}>
                        <i className="material-icons">chevron_right</i>
                    </a>
                </li>
            </ul>
        );
    }
};

export default Pagination;
