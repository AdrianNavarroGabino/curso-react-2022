import PropTypes from "prop-types";

const newMessage = {
    message: 'Hola, mundo',
    title: 'Adrián'
};

const getResult = (a, b) => a + b;

export const FirstApp = ({ title, subtitle }) => {
    return (
        <>
            <div data-testid="test-title">{title}</div>
            {/*<code>{JSON.stringify(newMessage)}</code>*/}
            <p>{getResult(3, 6)}</p>
            <p>{subtitle}</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    subtitle: 0
}