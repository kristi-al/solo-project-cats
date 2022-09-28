import { postImage } from "../utils/imageService";
import ReactCrop, {  Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
//import { publicDecrypt } from "crypto";
//import { filename } from "../../../server/controller/resize";

function PostImageForm(props) {

    const changeHandler = () => {
        const image = document.getElementById('pic').files[0];
        if (image) {
            const newImage = document.getElementById("crop-image");
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
        postImage(formData)
        .then(filename => {

            //props.image.push(filename.filename)
            props.setImages(prevFile => {
                return [
                    filename.filename, ...prevFile,
                    
                ]
            })

            // console.log(filename.filename);
            // return props.image.unshift(filename.filename)
        }
           
            
            //props.image.push(filename.filename)
            // props.setImages(prevFile => {
            //     return {
            //         filename, ...prevFile,
                    
            //     }
            // })
        );
        props.cb();
    }

    return(
        <div>
            <div className="black fullscreen"></div>
            <div className="post-image-form fullscreen">
                <div id="post">
                <button className="close" onClick={() =>props.cb()}></button>
                    <form id="form" onSubmit={event => clickHandler(event)} encType="multipart/form-data">
                        <label for="pic" class="custom-file-upload">Choose a file</label>
                        <input type="file" name="pic" id="pic" onChange={changeHandler} required></input>
                        <img src="" id="crop-image" width="400px" height="400px"></img>
                        <button id="post-button">Post</button>
                    </form>
                    
                </div>
           
            </div>


        </div>   
    )
}

export default PostImageForm;