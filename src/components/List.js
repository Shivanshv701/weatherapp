import React from 'react'

import axios from "axios";

import { useNavigate } from 'react-router-dom';

import './List.css';

export default function List() {

  const [data, setData] = React.useState([]);

  const [loaded, setLoaded] = React.useState(false);

  const [update, setUpdate] = React.useState('');

  const navigate = useNavigate();

  
  React.useEffect(() => {

    getPost();

  }, []);

  const Delete = async (_id) => {

    await axios.delete(`https://watchlist-7199.herokuapp.com/api/delete/${_id}`, {

      headers: { Authorization: "Bearer " + localStorage.getItem("token") }

    })

    setData(data.filter((p) => p._id !== _id));

    setUpdate(update);

  }


  const getPost = async () => {

    await axios.get("https://watchlist-7199.herokuapp.com/api/get", {

      headers: { Authorization: "Bearer " + localStorage.getItem("token") }

    })

      .then(res => setData(res.data)).catch((err) => {

      

      });

  

    setLoaded(true)

  }

  const favmore = (name) => {

    navigate(`/favmore/${name}`)

  }


  if (loaded) {

 

    return (

      <div className='boxsize ' >

        <div className='col-md-4 offset-md-4 list-footer'>

          <h5 className='text-into mt-5 text-center' >Your WatchList</h5>

          <hr />

          <div className='mt-5 mx-2 my-5 boxsize2 '>
          <ul  className='list-group mb-3'>
            {

              data.map(item =>

                

                  <li key={item._id} className='list-group-item list-group-item-success my-1'>{item.cityname}
                    <i style={{ color: 'red' }} className="fa-solid fa-trash-can float-end text-denger " onClick={() => Delete(item._id)}></i>
                     <i style={{color :'blue'}} className="fa-solid fa-circle-info float-end mx-3" onClick={() => favmore(item.cityname)}>
                     </i>
                     </li>

                

              )

            }
            </ul>

          </div>

        </div>

      </div>

    )

  }

}