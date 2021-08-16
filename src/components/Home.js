import moment from 'moment'
import React, { useEffect, useState } from 'react'

import { apiFetch, getProducts } from './Helper'
import { BiCctv } from 'react-icons/bi';
import { BsTag } from 'react-icons/bs';

import PopForm from "./PopUp"


function Home() {

    const [cameraState, setCameraState] = useState([])

    useEffect(() => {
        Preload()
    }, [])
    const Preload = () => {
        return getProducts().then((data) => {
            if (data.error) {
                console.log(data.error);
            }
            else {
                console.log("ok", data);
                setCameraState(data)
            }
        }
        )
    }

    const List = () => {
        return (
            <div className="container">
                {/* <p>Showing All({cameraState.length})</p> */}
                <p>Showing All(7)</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="table-responsive">
                                <table className="table table-borderless">
                                    <thead className="text-muted">
                                        <tr className="small">
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col">DeviceID</th>
                                            <th scope="col">
                                                Last activity
                                            </th>
                                            <th scope="col">
                                                Tags
                                            </th>

                                        </tr>

                                    </thead>
                                    <tbody>

                                        {cameraState && cameraState.map((camera, index) => (
                                            <tr
                                            // key={index} 
                                            >
                                                <td>
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <input type="checkbox" />
                                                        </div>


                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="row">
                                                        <div className="">


                                                            <img
                                                                // src={camera.SnapshotSignedUrl}
                                                                src={'https://s3.us-east-2.amazonaws.com/futopstech.com/images/industries_index/06.png'}

                                                                width="80"
                                                                alt="..."
                                                            />
                                                            <BiCctv />
                                                        </div>


                                                    </div>
                                                </td>

                                                <td>
                                                    {/* {camera.DeviceID} */}

                                                    DEB-NUC8i3BE-G6BE01300NXK

                                                </td>
                                                <td>



                                                    {/* {moment(camera.LastActivityTime.substring(0, 10), "YYYYMMDD").fromNow()} */}
                                                    {moment("2021-08-16 12:26:09", "YYYYMMDD HH:mm:ss").fromNow()}

                                                </td>

                                                <td>
                                                    {/* {camera.Tags} */}
                                                    {camera.category.name}
                                                    "consectetur", "Dolor Sit", "Vestibulum", "Office"
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                                <div className="text-right align-items-end mr-40 ">
                                    <PopForm />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        )
    }

    const Top = () => {
        return (
            <div>

                <div className="container">
                    <div className="row align-items-start">
                        <BiCctv />
                        <h6 className="ml-3"> Camera View</h6>
                    </div>

                    <div className="row align-items-end">
                        <div className=" col-md-6">
                            <h6>Search</h6>
                            <div className="input-group ">

                                <input className="" type="text" placeholder="Search by device" />
                                <div>

                                    <select id="dropdown" style={{ height: "30px" }}>
                                        <option value="N/A">
                                            Tags
                                        </option>
                                        <option value="N/A">
                                            DeviceID
                                        </option>

                                    </select>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-6 ">
                            <div className="row align-items-start">
                                <h6 className="ml-3"> Latest Snapshot </h6>
                            </div>
                            <div className="card align-items-center ">
                                <img
                                    src={'https://s3.us-east-2.amazonaws.com/futopstech.com/images/industries_index/06.png'}
                                    width="400"
                                    height="400"

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    const titleBar = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 className="text-center">Camera Management</h4>
                    </div>
                    <div>
                        <img
                            src={'https://s3.us-east-2.amazonaws.com/futopstech.com/images/industries_index/06.png'}
                            width="60"
                            height="40"
                        />
                        <p>John Smith</p>
                    </div>

                </div></div>
        )
    }

    return (
        <div>
            {titleBar()}
            <hr></hr>
            {Top()}
            <br></br>
            {List()}
        </div>


    )
}

export default Home
