import PropTypes from "prop-types";

const newMessage = {
    message: 'Hola, mundo',
    title: 'Adrián'
};

const getResult = (a, b) => a + b;

export const FirstApp = ({title, subtitle}) => {
    return (
        <>
            <h1>{title}</h1>
            <code>{JSON.stringify(newMessage)}</code>
            <p>{getResult(3, 6)}</p>
            <p>Soy un subtítulo: {subtitle + 1}</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 0
}