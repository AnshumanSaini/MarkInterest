import React ,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
const Feed = ({ userData }) => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const {categoryId} = useParams();

  useEffect(() => {
    let currUser = localStorage.getItem("token");
    setLoading(true);
    // console.log({categoryId});
    if(categoryId !== undefined){
      //fetch specific category feeds
      // console.log("if is running");
      const fetchData = async () => {
        const response = await fetch(`https://markinterest.onrender.com/api/pin/getpin/${categoryId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": currUser,
          },
        });
        // console.log(response);
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Response is not in JSON format");
        }
        const json = await response.json();
        return json;
      };
      fetchData().then((data)=>{
        setPins(data);
        setLoading(false);
        // console.log({data: data});
      })
    }
    else{
      // console.log("else is running");
      //fetch general category feeds
      const fetchData = async () => {
        const response = await fetch('https://markinterest.onrender.com/api/pin/getallpin', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": currUser,
          },
        });
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Response is not in JSON format");
        }
        const json = await response.json();
        // const data = Object.values(json);
        return json;
      };
      fetchData().then((data)=>{
        setPins(data);
        setLoading(false);
      })
    }
  }, [categoryId])
  
  if(loading) return <Spinner message="We are adding new ideas to your feed!"/>
  if(!pins?.length) return <h2>No pins available</h2>
  return (
    <div>
      {pins && <MasonryLayout pins={pins} userData={userData} />}
    </div>
  )
}

export default Feed