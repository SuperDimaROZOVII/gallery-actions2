import { useDispatch, useSelector } from 'react-redux';
import { favourite, load, remove } from './store/GalleryReducer';
import { useState } from 'react';
import { FaStar } from "react-icons/fa";
import "./index.css";
import "./custom.css";
//bootstrap imports:
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const dispatch = useDispatch()
  const [url, setUrl] = useState("")
  const images = useSelector(state => state.gallery.images)
  // const Star = ({ selected = false, onSelect = f => f }) => (
  //   <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
  // )
  return (
    <>
      <input type="text" placeholder='url' value={url} onChange={e => setUrl(e.target.value)}/>
      <button onClick={() => { dispatch(load(url)); setUrl('') }} className="btn btn-success">add Image</button>
      <div className="container"> 
         <div className="row align-items-start"> {/*   col-lg-4 col-md-12 mb-4 mb-lg-0  */}
          {images.map(image => (
            <div key={image.id} className='col-lg-4 mb-4 mb-lg-0'>
              <p />
              <button onClick={() => { dispatch(remove(image.id)) }} className='btn btn-danger' id="deleteButton">X</button>
              <p>favourited: {`${image.favourited}`}</p>
              <FaStar color={image.favourited ? "red" : "grey"} onClick={() => { dispatch(favourite(image.id)) }} />
              <img src={image.url} id={image.id} alt='failed to load' className="w-100 shadow-1-strong rounded mb-4" style={{position: 'relative', marginTop: "0px"}}/>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default App;
