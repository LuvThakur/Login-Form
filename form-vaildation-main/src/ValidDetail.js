import React from 'react'

export default function ValidDetail({ userDetail }) {
    return (
        <div className="my-5 rounded-4" style={{ width: '25rem', margin: 'auto', backgroundColor: 'black', color: 'white' }}>
            <div className="py-5 px-3">
                <div className='mb-3'>
                    <label htmlFor="fname" className='form-label fw-semibold fs-5'>First Name: {' '}{userDetail.name}</label>
                </div>

                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-semibold fs-5">Email address:{' '}{userDetail.email}</label>
                </div>
                <div className="mb-3 ">
                    <label htmlFor="phonenumber" className="form-label fw-semibold fs-5">Phone Number:{' '}{userDetail.phone}</label>
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputPassword1" className="form-label fw-semibold fs-5">Address:{' '}{userDetail.address}</label>
                </div>
            </div>
        </div>
    )
}
