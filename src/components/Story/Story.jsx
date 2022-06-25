import moment from 'moment';
import PropTypes from 'prop-types';
import './Story.css';

export default function Story({ story, index }) {
    const formatTime = (timestamp) => {
        const year = new Date(timestamp).getFullYear();
        const month = new Date(timestamp).getMonth();
        const day = new Date(timestamp).getDate();

        return moment([year, month, day]).fromNow();
    };

    return (
        <li className="story">
            <p>
                <span>{`${index + 1}.`}</span> <span className="story__title">{`${story.title}`}</span>
            </p>
            {story.url ? (
                <a className="story__link" href={story.url} target="_blank" rel="noreferrer">
                    {story.url}
                </a>
            ) : (
                <p>{story.text}</p>
            )}
            <p className="story__desc">
                <span>{story.score}</span> <span>{story.score > 1 ? 'points' : 'point'}</span> by{' '}
                <span>{story.by}</span> {formatTime(story.time * 1000)}
            </p>
        </li>
    );
}

Story.defaultProps = {
    story: PropTypes.object,
};

Story.propTypes = {
    story: PropTypes.object,
    index: PropTypes.number.isRequired,
};
