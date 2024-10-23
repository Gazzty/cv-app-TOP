// Here I'll put the form for the user to input the general data
import { useState } from "react"
import './App.css'

export function GeneralDataForm({edit}){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    return(
        <>
            {/* Name */}
            <label>Enter your name: 
                <input
                type="text"
                readOnly={!edit}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={edit ? 'input-form-label' : 'input-readonly'}
                />
            </label><br />
            {/* Email */}
            <label className="form-label">Enter your email:
            <input
                type="text"
                value={email}
                readOnly={!edit}
                onChange={(e) => setEmail(e.target.value)}
                className={edit ? 'input-form-label' : 'input-readonly'}
                />
            </label><br />
            {/* Phone */}
            <label className="form-label"> Enter your phone number: 
            <input
                type="text"
                value={phone}
                readOnly={!edit}
                onChange={(e) => setPhone(e.target.value)}
                className={edit ? 'input-form-label' : 'input-readonly'}
                />
            </label><br />
            {/* Address */}
            <label className="form-label"> Enter your address:
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={edit ? 'input-form-label' : 'input-readonly'}
                />
            </label><br />
        </>
    )
}

export function EducationForm({edit}){
    const [school, setSchool] = useState("")
    const [title, setTitle] = useState("")
    const [dateStudy, setDateStudy] = useState(new Date())

    return(
        <>
            <label>Enter your highschool name: 
                <input
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                readOnly={!edit}
                className={edit ? 'input-form-label' : 'input-readonly'}
                />
            </label><br />
            <label>Enter your highest title: 
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                readOnly={!edit}
                className={edit ? 'input-form-label' : 'input-readonly'}
                />
            </label><br />
            <label>
                <input
                type="date"
                value={dateStudy}
                onChange={(e) => setDateStudy(e.target.value)}
                readOnly={!edit}
                className={edit ? 'input-form-label' : 'input-readonly'}
                />
            </label><br />
        </>
    )
}

export function PracticalForm({edit}){
    const [company, setCompany] = useState("")
    const [position, setPosition] = useState("")
    const [mainResp, setMainResp] = useState("")
    const [dateFrom, setDateFrom] = useState(new Date)
    const [dateTo, setDateTo] = useState(new Date)

    return(
        <>
            <label className="form-label">Enter the company name:
                <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                readOnly={!edit}
                className={edit ? 'input-form-label' : 'input-readonly'}
                />
            </label><br />
            <label className="form-label">Enter your position:
                <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                readOnly={!edit}
                className={edit ? 'input-form-label' : 'input-readonly'}
                />
            </label><br />
            <label className="form-label">Enter your main responsability:
                <textarea
                value={mainResp}
                onChange={(e) => setMainResp(e.target.value)}
                readOnly={!edit}
                className={edit ? 'input-form-label' : 'input-readonly'}
                />
            </label><br />
            <label>From:
                <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                readOnly={!edit}
                className={edit ? 'input-form-label' : 'input-readonly'}
                />
            </label><br />
            <label>Until:
                <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                readOnly={!edit}
                className={edit ? 'input-form-label' : 'input-readonly'}
                />
            </label><br />
        </>
    )
}