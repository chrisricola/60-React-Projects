import axios from 'axios';
import React, {useState} from 'react'

const Main = () => {
    const [books, setBooks] = useState([]);
    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + 'berserk' + '=free-ebooks&key=AIzaSyAQsVMU_m6dAugbBVcxNfSD61bcYe4MNYI' + '&maxResults=30')
        .then(res => setBooks(res.data.items))
        .catch(err => console.log(err))
  return (
    <div>
        {
            books.map((item) => {
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail; 
                return (
                    <div>
                        <h1>Hello</h1>
                        <img src={thumbnail} alt="" />
                        <h5>{item.volumeInfo.title}</h5>
                        <p>{item.volumeInfo.authors}</p>
                    </div>
                    
                ) 
            })
        }
    </div>
  )
}

export default Main

// AIzaSyAQsVMU_m6dAugbBVcxNfSD61bcYe4MNYI