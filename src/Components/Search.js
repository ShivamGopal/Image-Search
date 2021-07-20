import { FaSearch } from 'react-icons/fa';

const Search = ({inp,fetchImages,images,query}) => {
  return (
    <div>
      <input className='input-style' type='text' placeholder='Search for photos' onChange={inp}/>
      <button type='submit' className='btn' onClick={fetchImages}><FaSearch color='white' /></button>
    </div>
  )
}

export default Search
