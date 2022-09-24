function Image({pic}) {
    const baseUrl = 'http://localhost:3030/images/';
    return(
        <div className="image-container">
            <img src={baseUrl + pic}></img>
        </div>
        
    )
}

export default Image;