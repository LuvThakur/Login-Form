import React, { useState } from 'react'
import ValidDetail from './ValidDetail';

export default function LoginPage() {

    const [isSubmitted, setSubmitted] = useState(false);
    const [userDetail, setUserDetail] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleNameChange = (event) => {
        const { name, value } = event.target;
        setUserDetail((prevUserDetail) => ({
            ...prevUserDetail,// use to copy all dataso no lost
            [name]: value,
        }));
    }

    const toglefun = () => {
        setSubmitted(previsSubmitted => !previsSubmitted);//here !previsSubmitted(false)  means opposite value of previous value of isSubmitted(true)
    }


    const isvalid = userDetail.name && userDetail.email && userDetail.address;
    return (
        <div>
            {!isSubmitted ? (
                <div className="my-5 rounded-4" style={{ width: '25rem', margin: 'auto', backgroundColor: 'rgb(244 198 137)' }}>
                    <form className='mx-4 my-4 px-3 py-4  needs-validation'>
                        <div className='mb-3'>
                            <label htmlFor="fname" className='form-label fw-semibold fs-5'>First Name:*</label>
                            <input type='text' className='form-control border-0' id='fname' name='name' value={userDetail.name} onChange={handleNameChange} placeholder='First Name' required />
                        </div>

                        <div className="mb-3 ">
                            <label htmlFor="exampleInputEmail1" className="form-label fw-semibold fs-5">Email address:*</label>
                            <input type="email" className="form-control border-0" name='email' value={userDetail.email} onChange={handleNameChange} placeholder='abc@gmail.com' id="exampleInputEmail1" required />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="phonenumber" className="form-label fw-semibold fs-5">Phone Number:</label>
                            <input type="text" className="form-control border-0" name='phone' value={userDetail.phone} onChange={handleNameChange} placeholder='' id="phonenumber" />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold fs-5">Address:*</label>
                            <input type="text" className="form-control border-0" name='address' value={userDetail.address} onChange={handleNameChange} id="exampleInputPassword1" required />
                        </div>

                        <div >
                            <button type="submit" disabled={!isvalid} onClick={toglefun} className="d-block mx-auto btn btn-danger fw-semibold fs-5">Submit</button>
                        </div>
                    </form>

                </div>
            ) : (
                < ValidDetail userDetail={userDetail} />
            )
            }

        </div>
    )
}
