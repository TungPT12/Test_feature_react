import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { useState } from "react";


function UploadImg() {
      const [image, setImage] = useState();
      const [showImage, setShowImage] = useState('');
      const upload = () => {
        const uploadImg = uploadBytesResumable(ref(storage,`images/${image.name}`),image);
        uploadImg.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          // eslint-disable-next-line default-case
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
            console.log("dxg")
        }, 
        () => {

          getDownloadURL(uploadImg.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
          });
        }
      );
    }

    const showIMG = () => {
        if(showImage !== '' || showImage !== undefined || showImage !== null) {
            return <h1>No</h1>
        } else {
            return <img src={showImage} alt="Ảnh"/>
        }
    }
    return (
        <>
        <h1>Test upload</h1>
            <label htmlFor="upload_file">Chọn anof</label>
            <input type="file" id="upload_file" onChange={
                (e) => {
                    // console.log(e.target.files[0])
                    setImage(e.target.files[0])
                }
            }/>
            <button onClick={upload}>Upload</button>
            {
               showIMG()
            }

        </>
    );
}

export default UploadImg ;