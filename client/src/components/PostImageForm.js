import { postImage } from "../utils/imageService";

function PostImageForm() {

    const changeHandler = () => {
        const image = document.getElementById('pic').files[0];
        if (image) {
            const newImage = document.getElementById("image1");
            newImage.src = URL.createObjectURL(image);
            localStorage.setItem('myImage', newImage.src);
        }
    }

    const clickHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', event.target.pic.files[0]);
        console.log(event.target.pic.files[0]);
        for(var pair of formData.entries()) {
            console.log(pair[0]+', '+pair[1]);
          }
        postImage(formData);
    }

    return(
        <div className="post-image-form">
            <form id="form" onSubmit={event => clickHandler(event)} encType="multipart/form-data">
                <input type="file" name="pic" id="pic" onChange={changeHandler}></input>
                <button id="post-button">Post</button>
            </form>
        <img id="image1" width="400px" height="400px" />
        </div>   
    )
}

export default PostImageForm;