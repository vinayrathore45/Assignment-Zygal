import React, {useState, useEffect,Component} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


 const HomePage = () => {
    const[text,setText] = useState([]);
    
    const navigate = useNavigate();
    useEffect(() => {
        const fetchText = async() => {
           try {
              const res = await axios({
                url: 'http://localhost:5000/searchText',
                method: 'get',
              });
              setText(res.data.searchedText);
            } catch (error) {
              console.error(error);
            }
         }
         fetchText();
       });
     
       return (
         <div className="HomePage-container">
            <header>
               <button className="logout-button" onClick={() => {
                 localStorage.removeItem("user");
                 navigate('/');
               }}>Logout</button>
            </header>
            <div className="HomePage">
                   <header>
                     <h3>texts</h3>
                   </header>
                   <div className="text-container">
                      {
                       text.length > 0 && text.map(item => {
                          return <li key={item._id}>
                            <span>{item.content}</span><br/>
                           </li>
                       })
                      }
                   </div>
               </div>
            </div>
       )
     }


 export default HomePage