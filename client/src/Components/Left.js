import { useEffect, useState } from 'react'
import '../CSS/Left.css'
import axios from 'axios';
import moment from 'moment';






export const Left = ({user}) => {

    const [userData, setUserData] = useState({
        Date: "9-Jan-23",
        Gender: "Female",
        ID: "EVT0042",
        Location: "Bangalore",
        Name: "Female20",
        Time: "8:51:41",
        id: "0lSd7MHSSSwZMaJIbQMT"
    });

    

    const [userImage, setUserImage] = 
        useState (
            'https://firebasestorage.googleapis.com/v0/b/clone-a5fb2.appspot.com/o/UserImages%2FFemale20.jpg?alt=media&token=67e6616c-1c50-4dca-9757-b429da2273bb'
        );



    const fetchUserImage = async (id) => {

        try {
    
            const {data} = await axios.get(
                `/api/users/img/${id}`
            )

            setUserImage(data.imageUrl);

        }

        catch(err) {
            console.log(err);
        }

    }


    useEffect(() => {

        const fetchUser = async () => {

            try {
    
                const {data} = await axios.get(
                    `/api/users/${user}`
                )
    
                setUserData(data);

                fetchUserImage(data.Name);
    
    
            }
    
            catch(err) {
                console.log(err);
            }
    
        }

        fetchUser();

    }, [user]);

    


    return(

        <div className="left">

            <div className='leftText'>
                
                <h3>{userData.ID}</h3>
                <h3>Person detected</h3>


                <p>
                    <span className='span'>Name</span> 
                    <span>: {userData.Name}</span>
                </p>

                <p>
                    <span className='span'>Location</span>
                    <span>: {userData.Location}</span>
                </p>
                <p>
                    <span className='span'>Date</span>
                    <span>: {moment(userData.Date).format('DD-MMM-YY')}</span>
                    
                    
                </p>
                <p>
                    <span className='span'>Time</span>
                    <span>: {userData.Time}</span>
                </p>

                <br/>

                <p>Description:</p>
                <div className='para'>
                    
                    <p>{userData.Name} detected at</p>
                    <p>{userData.Location} on</p>
                    <p>{moment(userData.Date).format('Do MMMM, YYYY')}</p>
                </div>
                

            </div>

            <div className='leftImage'>
                <h3>{userData.Gender}</h3>
                <img src={userImage}/>

            </div>

         </div>


    
        
    )
}