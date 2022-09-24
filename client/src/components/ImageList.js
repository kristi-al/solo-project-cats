import PostImageForm from './PostImageForm';
import Image from './Images';



function ImageList({image, setImages}) {
    //console.log(image)
    return(
        <div className="image-list-container">
            <PostImageForm />
            {image.map((i) => <Image pic={i}/>)} 
        </div>
        
    )
}

export default ImageList;