import React, {useState, useEffect} from 'react'
import {storage} from '../Firebase/Firebase'
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage"
import {v4} from 'uuid'

const ImageUpload = () => {

  const [imageUpload, setImageUpload] = useState(null)
  const [imageList, setImageList] = useState([])

  const imageListRef = ref(storage, "images/")
  const uploadImage = () => {
    if(imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snaphsot) => {
      getDownloadURL(snaphsot.ref).then((url) => {
        setImageList((prev) => [...prev, url])
      })
    })
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) =>{
          setImageList((prev) => [...prev, url]);
        })
      })
    })
  },[]);

  return (
    <div>
      <input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}}/>
      <button onClick={uploadImage}>upload images</button>

      {imageList.map((url) => {
        return <video src={url}></video>
      })}
    </div>
  )
}

export default ImageUpload
