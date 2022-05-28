import { useEffect, useState } from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import NewPost from "./components/NewPost";

function App() {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    const getImage = () => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setImage({
          url: img.src,
          width: img.width,
          height: img.height,
        });
      };
    };

    file && getImage();
  }, [file]);

  return (
    <div>
      <Navbar />
      {image ? (
        <NewPost image={image} />
      ) : (
        <div className="newPostCard">
          <div className="addPost">
          <img
              src="https://pics.me.me/Instagram-Tag-someone-cacf09.png"/>
           
            <img
              src="https://i.pinimg.com/550x/c2/06/5e/c2065ec58777bf0918d4b5e712e72775.jpg"
              alt=""
              className="avatar"
            />
            <div className="postForm">
              <input
                type="text"
                placeholder="Upload Image"
                className="postInput"
              />
              <label htmlFor="file">
                <img
                  className="addImg"
                  src="https://cdn1.iconfinder.com/data/icons/rounded-black-basic-ui/139/Photo_Add-RoundedBlack-512.png"
                  alt=""
                />
                <img
                  className="addImg"
                  src="https://www.clipartmax.com/png/middle/466-4666000_open-cdr-clipart-folder-icon-black-and-white.png"
                  alt=""
                />
                <img
                  className="addImg"
                  src="https://banner2.cleanpng.com/20180517/kuw/kisspng-laptop-computer-monitors-computer-icons-desktop-co-pc-5afe07e27c98d5.3515218015265976025104.jpg"
                  alt=""
                />
                <button>Add</button>
              </label>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                id="file"
                style={{ display: "none" }}
                type="file"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;