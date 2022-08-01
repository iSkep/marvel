const Spinner = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', background: 'rgb(255, 255, 255)', display: 'block', shapeRendering: 'auto'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <path d="M23 50A27 27 0 0 0 77 50A27 28.7 0 0 1 23 50" fill="#9f0013" stroke="none">
                <animateTransform attributeName="transform" type="rotate" dur="0.4444444444444444s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50.85;360 50 50.85"></animateTransform>
            </path>
        </svg>
    )
}

export default Spinner;