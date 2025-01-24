import React, { useEffect, useState } from 'react';
import axios from 'axios'

function MyCreatedCourses(){

    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/faculty/createdcourses');
            setData(response.data);
        } catch (err) {
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <div className='flex flex-col mt-[2rem] ml-[4rem] gap-2 '>
            <h1>Created Courses Detail</h1>
                <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                    <thead>
                    <tr >
                        <th className='font-light'>Course Code</th>
                        <th className='font-light'>Course Name</th>
                        <th className='font-light'>Department</th>
                        <th className='font-light'>L-T-P-S-C</th>
                        <th className='font-light'>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((d,index) => (
                            <tr className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white hover:bg-gray-200'} >
                                <td>2025-I</td>
                                <td>{d.courseCode}</td>
                                <td>{d.courseName}</td>
                                <td>{d.departmentName}</td>
                                <td>{d.ltpsc}</td>
                                <td className='font-semibold'>Approved by Admin</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
};

export default MyCreatedCourses;
