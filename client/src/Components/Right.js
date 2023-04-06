import { useEffect, useState } from 'react';
import '../CSS/Right.css'
import TuneIcon from '@mui/icons-material/Tune';
import axios from 'axios';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';



export const Right = ({setUser}) => {

    const [info, setInfo] = useState([]);
    
    const [filterValue, setFilterValue] = useState('');

    const [filterType, setFilterType] = useState('');

    const [filterDate, setFilterDate] = useState('');

    const [isOpen, setIsOpen] = useState(false);


    console.log("filterValue", filterValue);

    console.log("filterType", filterType);



    const fetchData = async () => {
        try {

            const {data} = await axios.get(
                '/api/users/'
            );

            setInfo(data);

            console.log("normal dta", data);


        }

        catch(err) {
            console.log(err);
        }
    }
    

    const filterData = async () => {


        try {

            if(filterDate) {

                const {data} = await axios.get(
                    `/api/filter/${filterType}/${filterDate}`
                )

                setInfo(data);

                console.log("filtered dta", data);

            }

            else {

                const {data} = await axios.get(
                    `/api/filter/${filterType}/${filterValue}`
                )

                setInfo(data);

                console.log("filtered dta", data);
            }

        }

        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {

            fetchData();        

    }, []);




    return(

        <div>

        <div className="right">


            <div className='rightHeader'>
                <h3>Events</h3>
                <p><TuneIcon 
                onClick={() => {
                    setIsOpen(true);
                }}
                /></p>


                {
                    isOpen && 

                    <div className="filterComponent">

                    <div className='filter-header'>
                        <h3>Filter By</h3>
                        <div 
                        onClick={() => {
                            setIsOpen(false);
                        }}
                        ><CloseIcon/></div>
                    </div>

                    

                    <div>
                        <h5>Location</h5>
                        <div>
                            <input type = 'radio' name = 'select' 
                            onChange={(e) => {
                                setFilterValue('Chennai');
                                setFilterType('Location');
                            }}
                            />
                            <label>Chennai</label>
                        </div>

                        <div>
                            <input type = 'radio' name = 'select'
                            onChange={(e) => {
                                setFilterValue('Hyderabad');
                                setFilterType('Location');
                            }}
                            />
                            <label>Hyderabad</label>
                        </div>

                        <div>
                            <input type = 'radio' name = 'select'
                            onChange={(e) => {
                                setFilterValue('Bangalore');
                                setFilterType('Location');
                            }}
                            />
                            <label>Bangalore</label>
                        </div>
                    </div>



                    <div>
                        <h5>Gender</h5>
                        <div>
                            <input type = 'radio' name = 'select'
                            onChange={(e) => {
                                setFilterValue('Male');
                                setFilterType('Gender');
                            }}
                            />
                            <label>Male</label>
                        </div>

                        <div>
                            <input type = 'radio' name = 'select'
                            onChange={(e) => {
                                setFilterValue('Female');
                                setFilterType('Gender');
                            }}
                            />
                            <label>Female</label>
                        </div>

                    </div>



                    <div className='filter-date'>
                        <h5>Date</h5>
                        
                        
                        <DatePicker className='filter-date-input' selected={filterDate} 
                        dateFormat='dd-MMM-yy'
                        onChange={(date) => {

                            setFilterDate(date);
                            setFilterType('Date');
                          
                        }} 
                        />
                   


                    </div>

                    <div className='filter-btns'>

                    <button className='blue-btn'
                    onClick={() => {
                        filterData();
                        setIsOpen(false);
                    }}
                    >Apply Filter</button>

                    <button className='white-btn'
                    onClick={() => {
                        window.location.reload(true);
                    }}
                    >Clear Filter</button>

                    </div>

                    </div>

                }
                

            </div>



            {

            info?.map((i) => (
                <div className='rightBody' 
                onClick={() => {
                    setUser(i.id);
                }}
                >
                    <div className='rightBody-flex'>

                    <div>
                        <p>{i.ID} : {i.Location}</p>
                    </div>
                    
                    <div className='rightBody-date'>
                        {/* <p>{i.Date}</p> */}
                        <p>{moment(i.Date).format("DD-MM-YY")}</p>
                        &nbsp;
                        <p>{i.Time}</p>
                    </div>

                    </div>

                    <br/>

                    <p>Person detected.</p>

                </div>
            ))

            }

        </div>

        

        </div>


    )
}