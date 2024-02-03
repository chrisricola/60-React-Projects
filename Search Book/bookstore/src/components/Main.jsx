import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

const Main = () => {
    const [books, setBooks] = useState([]);
    const params = useParams(); 

    const getBooks = (name) => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + name + '=free-ebooks&key=AIzaSyBwNNlsOxRG1CanfoEZkZtlFplVnRWAQvc&maxResults=30')
          .then(res => setBooks(res.data.items))
          .catch(err => console.log(err))
      }
    
      useEffect(() => {
        getBooks(params.name);
      }, [params.name]);
  return (
    <div className='row' style={{ margin: '50px'}}>
        {
            books.map((item) => {
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail; 
                return (
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className='projectCard'>
                            <img src={thumbnail} alt="" style={{marginTop: "20px", width: "120px", height:"150px"}}/>
                            <div className="info">
                                <h5 style={{color: "black", fontSize: "12px"}}>{item.volumeInfo.title}</h5>
                                <p style={{color: "black", fontSize: "12px"}}>{item.volumeInfo.authors}</p>
                                <button className='btn btn-sm btn-success' style={{marginBottom:"40px", marginTop:"0px"}}>
                                    <a href={item.volumeInfo.previewLink} style={{textDecoration:"none",color:"white" }}>Get Book</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    
                ) 
            })
        }
    </div>
  )
}

export default Main

// AIzaSyAQsVMU_m6dAugbBVcxNfSD61bcYe4MNYI

// AIzaSyDng0qhpyvXLUhgueXIkJg_fggDGl5gG5o

// AIzaSyBwNNlsOxRG1CanfoEZkZtlFplVnRWAQvc