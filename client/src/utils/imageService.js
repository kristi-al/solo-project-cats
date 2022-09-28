const baseUrl = 'http://localhost:3030/';

export const postImage = (formData) => {

    console.log(formData);
    return fetch(baseUrl + 'image', { 
         method: 'PUT',
         body: formData,
     }).then((result) => result.json())
     //.then(data => console.log(data))
     .catch(error => console.log(error))
}

export const getImages = async () => {
    const result = await fetch(baseUrl + 'images');
    return await result.json()

}