function Post(props) {
    const { image, name } = props
    const originName = props.origin.name
    return (
        <div className="post" >
            <img src={image} alt="" />
            <p className="post__text">Имя: {name}</p>
            <p className="post__text">Кодовое имя: {originName}</p>
        </div>
    );
}

export default Post;