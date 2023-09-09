import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarning } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple, faCrow, faGear, faTreeCity, faUser } from "@fortawesome/free-solid-svg-icons";
import {
    FaEnvelope,
    FaFacebook,
    FaKey,
    FaSearch,
    FaUser,
} from "react-icons/fa";
const UserSignUpModal = ({ showSignUp, handleCloseSignUp }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [selectedImage, setSelectedImage] = useState(null)

    const handleImageChange = (e) => {
        const selected = e.target.files[0];
    }
    return (
        <Modal size="lg" show={showSignUp} onHide={handleCloseSignUp}>
            <Modal.Header closeButton={false}>
                <Modal.Title className="m-auto">Create New User </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <div className="img-side">
                        <label htmlFor="file-input">
                            <img
                                id="preview-image"
                                className="img-fluid img-thumbnail"
                                width="400px "
                                src={
                                    selectedImage
                                        ? selectedImage
                                        : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                                }
                                alt="Profile Picture"
                            />
                        </label>

                        <input
                            className="form-control d-none"
                            type="file"
                            name=""
                            onChange={handleImageChange}
                            id="file-input"
                        />
                    </div>

                    <div className="d-flex w-100   ms-3 flex-column">

                        <div className="d-flex mb-3   align-items-center justify-content-between">
                            <div class="form-floating  ">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="Jonh Doe"

                                />
                                <label for="floatingInput" className="input-label">
                                    <div className="d-flex align-items-center">
                                        <FaUser />
                                        <span className="ms-2"> Username </span>
                                    </div>
                                </label>
                            </div>
                            <div className='d-flex align-items-center  w-50'>
                                <label className="form-label mx-3">Role</label>
                                <select

                                    className="form-select "

                                    aria-label="Default select example"
                                >

                                    <option selected value="1">Admin</option>
                                    <option value="2">Customer</option>
                                </select>

                            </div>

                        </div>


                        <div class="form-floating mb-3 ">
                            <input
                                type="email"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"

                            />
                            <label for="floatingInput" className="input-label">
                                <div className="d-flex align-items-center">
                                    <FaEnvelope />
                                    <span className="ms-2"> Email address</span>
                                </div>
                            </label>
                        </div>

                        <div class="form-floating">
                            <input
                                type="password"
                                class="form-control"
                                id="floatingPassword"
                                placeholder="Password"

                            />
                            <label for="floatingPassword">
                                <div className="d-flex align-items-center">
                                    <FaKey />
                                    <span className="ms-2">Password</span>
                                </div>
                            </label>
                        </div>



                        <Button
                            variant="warning"
                            className="w-100 mt-2 mb-5   "
                        // onClick={handleCloseSignUp}

                        >

                            Create User




                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default UserSignUpModal