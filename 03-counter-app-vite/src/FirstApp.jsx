const newMessage = {
    message: 'Hola, mundo',
    title: 'Adrián'
};

const getResult = (a, b) => a + b;

export const FirstApp = () => {
    return (
        <>
            <h1>Hola, mundo</h1>
            <code>{JSON.stringify(newMessage)}</code>
            <p>{getResult(3, 6)}</p>
            <p>Soy un subtítulo</p>
        </>
    );
}