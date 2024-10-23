import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GeneralDataForm, EducationForm, PracticalForm } from './Forms'




function App() {
    const [isEditable, setIsEditable] = useState(true);

    const handleEdit = (e) => {
        e.preventDefault();
        setIsEditable(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditable(false);
        console.log("Form submited!")
    }
    return (
        <>
            <h1>Please enter your info</h1><br /><br />
            <div className='form-container'>
                <form onSubmit={handleSubmit} id="basic-info-form" className="form-section">
                    <GeneralDataForm edit={isEditable}></GeneralDataForm>
                    <EducationForm edit={isEditable}></EducationForm>
                    <PracticalForm edit={isEditable}></PracticalForm>

                    {/* Botón Editar */}
                    {!isEditable && (
                        <button type="button" onClick={handleEdit}>
                            Edit
                        </button>
                    )}

                    {/* Botón Submit */}
                    {isEditable && (
                        <button type="submit">
                            Submit
                        </button>
                    )}

                </form>
            </div>
            Edit: {isEditable.toString()}
        </>
    )
}

export default App