
import React , {useEffect,useState} from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import { Link } from 'react-router-dom';


const AllUsers = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const fetcher = await axios.get("https://backendapi-08dv.onrender.com/api/user");
      console.log(fetcher.data.user);
      
      setData(fetcher.data.user);
    } catch (error) {
      console.log(error);

    }finally {
      setIsLoading(false);
    }
  };
  useEffect(()=>{
    document.title = 'All-users || Page'
    getData()
  },[])
  return (
    <main className='container py-4'>
      <h2>All users</h2>
      {isLoading && <Spinner animation="border"/>}
      <div className='container pt-5 row justiy-content-between align-items-center gap-4'>
        {data && data.length < 1 ? (
            <h1 className='text-danger'>No Users yet...create one</h1>
            ) : (
              data.map((datum)=>{
                const {_id, name, email, gender, profession } =
                datum;
                return (
                  <div key={_id} className='card col-lg-5 p-3 shadow-sm'>
                    <Link className='text-decoration-none' 
                     to={`/SingleUser/${_id}`}>
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <p>{gender}</p>
                    <p>{profession}</p>
                    <span className='text-danger'>click to see more....</span>
                    
                    
                    </Link>
                  </div>
                )
              })
            ) 
        
      
      }




      </div>




    </main>
  )
}

export default AllUsers