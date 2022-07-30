import axios from "axios";
import { useEffect, useState } from "react";

function App() {
   const [images, setImages] = useState(null);

   const getData = async () => {
      try {
         axios
            .get(`https://jsonplaceholder.typicode.com/photos`)
            .then((res) => setImages(res.data));
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      getData();
   }, []);
   return (
      <div className="app">
         {images?.map((image, index) => {
            const { albumId, id, url, title, thumbnailUrl } = image;

            if (albumId <= 2) {
               return (
                  <div key={index} className="img-container">
                     <div className="img-box">
                        <img src={url} alt={id} />
                     </div>
                     <p>{title}</p>
                  </div>
               );
            }
         })}
      </div>
   );
}

export default App;
