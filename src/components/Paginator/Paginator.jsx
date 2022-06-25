import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Button from '../Button/Button';

export default function Paginator({ page, handlePaginator, isDisableButton }) {
    const { storyIds } = useSelector((state) => state.stories);
    let pageNumber = page;
    const limit = storyIds.length;

    return (
        <div>
            <Button
                isDisabled={pageNumber === 1 || isDisableButton}
                label="PREV"
                handleButton={() => handlePaginator('prev', (pageNumber -= 1))}
            />
            <p>
                Page <span>{pageNumber}</span> of <span>{limit}</span>
            </p>
            <Button
                isDisabled={pageNumber === limit || isDisableButton}
                label="NEXT"
                handleButton={() => handlePaginator('next', (pageNumber += 1))}
            />
        </div>
    );
}

Paginator.defaultProps = {
    isDisableButton: false,
    page: 1,
    handlePaginator: () => null,
};

Paginator.propTypes = {
    isDisableButton: PropTypes.bool,
    page: PropTypes.number,
    handlePaginator: PropTypes.func,
};
