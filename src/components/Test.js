const Test = ({doStuff, darkTheme}) => {
    return (
        <div>
            <h1>Ide gas</h1>
            <button onClick={doStuff}>{darkTheme ? 'light' : 'dark'}</button>
        </div>
    )
}

export default Test
