import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // ✅ import toastify
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate(); // ✅ initialize navigat
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        height: '',
        weight: '',
        goal: '',
        medicalConditions: '',
        medications: '',
        allergies: '',
        physicalActivityLevel: '',
        mealPreferences: '',
        dailyMeals: '',
        snacks: '',
        specialDiet: '',
        stressLevel: '',
        sleepPattern: '',
        familyHistory: [],
        additionalNotes: '',
        dob: '',
        address: '',
        city: '',
        state: '',
        country: '',
        dietPlan: '',
        medicalDiagnosis: '',
        surgicalHistory: '',
        isPregnant: '',
        planningConception: '',
        pastDietProgram: '',
        takenDietPills: '',
        pillsDuration: '',
        pillsType: '',
        weightLoss: '',
        weightGain: '',
        otherFamilyHistory: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (name === 'familyHistory') {
            const updatedHistory = [...formData.familyHistory];
            if (checked) {
                updatedHistory.push(e.target.value);
            } else {
                const index = updatedHistory.indexOf(e.target.value);
                if (index > -1) {
                    updatedHistory.splice(index, 1);
                }
            }
            setFormData({
                ...formData,
                familyHistory: updatedHistory
            });
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://medicdietclinic-backendd.onrender.com/form', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200 || response.status === 201) {
                toast.success('Form submitted successfully!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    age: '',
                    gender: '',
                    height: '',
                    weight: '',
                    goal: '',
                    medicalConditions: '',
                    medications: '',
                    allergies: '',
                    physicalActivityLevel: '',
                    mealPreferences: '',
                    dailyMeals: '',
                    snacks: '',
                    specialDiet: '',
                    stressLevel: '',
                    sleepPattern: '',
                    familyHistory: [],
                    additionalNotes: '',
                    dob: '',
                    address: '',
                    city: '',
                    state: '',
                    country: '',
                    dietPlan: '',
                    medicalDiagnosis: '',
                    surgicalHistory: '',
                    isPregnant: '',
                    planningConception: '',
                    pastDietProgram: '',
                    takenDietPills: '',
                    pillsDuration: '',
                    pillsType: '',
                    weightLoss: '',
                    weightGain: '',
                    otherFamilyHistory: ''
                });

                setTimeout(() => {
                    navigate('/'); // ✅ redirect back to landing after 3 sec
                }, 4000);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            toast.error('Error submitting the form. Please try again.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const handleBack = () => {
        navigate('/'); 
    };


    return (
        <div className="container">
                    <ToastContainer />
            <form onSubmit={handleSubmit} className="form-card p-4 rounded-3 mt-0" >
                <h2 className="text-center mb-5 fw-bold" style={{ color: "black", textDecorationLine:'underline' }}>Welcome to Your Nutrition Consultation!</h2>

                {/* Personal Information Section */}
                <div className="section mb-4 p-4">
                    <h4 className="mb-3" style={{ color: "black" }}>Personal Information</h4>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <input
                                type="text"
                                className="form-control shadow-sm"
                                placeholder="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <input
                                type="text"
                                className="form-control shadow-sm"
                                placeholder="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <input
                        type="email"
                        className="form-control shadow-sm mb-3"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        className="form-control shadow-sm mb-3"
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <input
                                type="number"
                                className="form-control shadow-sm"
                                placeholder="Age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <select
                                className="form-select shadow-sm"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <input
                        type="date"
                        className="form-control shadow-sm mb-3"
                        placeholder="Date of Birth"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        className="form-control shadow-sm mb-3"
                        placeholder="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="form-control shadow-sm mb-3"
                        placeholder="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="form-control shadow-sm mb-3"
                        placeholder="State"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="form-control shadow-sm mb-3"
                        placeholder="Country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="form-control shadow-sm mb-3"
                        placeholder="Diet Plan"
                        name="dietPlan"
                        value={formData.dietPlan}
                        onChange={handleChange}
                    />
                </div>

                {/* Health & Medical History Section */}
                <div className="section mb-4 p-4">
                    <h4 className="mb-3" style={{ color: "black" }}>Health & Medical History</h4>
                    <input
                        type="number"
                        className="form-control shadow-sm mb-3"
                        placeholder="Height (cm)"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        className="form-control shadow-sm mb-3"
                        placeholder="Weight (kg)"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        className="form-control shadow-sm mb-3"
                        rows="4"
                        placeholder="Medical Conditions (if any)"
                        name="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={handleChange}
                    />
                    <textarea
                        className="form-control shadow-sm mb-3"
                        rows="4"
                        placeholder="Current Medications (if any)"
                        name="medications"
                        value={formData.medications}
                        onChange={handleChange}
                    />
                    <textarea
                        className="form-control shadow-sm mb-3"
                        rows="4"
                        placeholder="Food Allergies (if any)"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleChange}
                    />
                    <textarea
                        className="form-control shadow-sm mb-3"
                        rows="4"
                        placeholder="Medical Diagnosis"
                        name="medicalDiagnosis"
                        value={formData.medicalDiagnosis}
                        onChange={handleChange}
                    />
                    <textarea
                        className="form-control shadow-sm mb-3"
                        rows="4"
                        placeholder="Surgical History"
                        name="surgicalHistory"
                        value={formData.surgicalHistory}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="form-control shadow-sm mb-3"
                        placeholder="Is Pregnant"
                        name="isPregnant"
                        value={formData.isPregnant}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="form-control shadow-sm mb-3"
                        placeholder="Planning Conception"
                        name="planningConception"
                        value={formData.planningConception}
                        onChange={handleChange}
                    />
                    <textarea
                        className="form-control shadow-sm mb-3"
                        rows="4"
                        placeholder="Past Diet Program"
                        name="pastDietProgram"
                        value={formData.pastDietProgram}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="form-control shadow-sm mb-3"
                        placeholder="Taken Diet Pills"
                        name="takenDietPills"
                        value={formData.takenDietPills}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="form-control shadow-sm mb-3"
                        placeholder="Pills Duration"
                        name="pillsDuration"
                        value={formData.pillsDuration}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="form-control shadow-sm mb-3"
                        placeholder="Pills Type"
                        name="pillsType"
                        value={formData.pillsType}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="form-control shadow-sm mb-3"
                        placeholder="Weight Loss Goal"
                        name="weightLoss"
                        value={formData.weightLoss}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="form-control shadow-sm mb-3"
                        placeholder="Weight Gain Goal"
                        name="weightGain"
                        value={formData.weightGain}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="form-control shadow-sm mb-3"
                        placeholder="Other Family History"
                        name="otherFamilyHistory"
                        value={formData.otherFamilyHistory}
                        onChange={handleChange}
                    />
                </div>

                {/* Lifestyle & Dietary Habits Section */}
                <div className="section mb-4 p-4">
                    <h4 className="mb-3" style={{ color: "black" }}>Lifestyle & Dietary Habits</h4>
                    <select
                        className="form-select shadow-sm mb-3"
                        name="physicalActivityLevel"
                        value={formData.physicalActivityLevel}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select Physical Activity Level</option>
                        <option value="Sedentary">Sedentary</option>
                        <option value="Lightly active">Lightly active</option>
                        <option value="Moderately active">Moderately active</option>
                        <option value="Very active">Very active</option>
                        <option value="Super active">Super active</option>
                    </select>
                    <input
                        type="text"
                        className="form-control shadow-sm mb-3"
                        placeholder="Meal Preferences (Vegetarian, Vegan, etc.)"
                        name="mealPreferences"
                        value={formData.mealPreferences}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        className="form-control shadow-sm mb-3"
                        placeholder="How many meals per day?"
                        name="dailyMeals"
                        value={formData.dailyMeals}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        className="form-control shadow-sm mb-3"
                        placeholder="How many snacks per day?"
                        name="snacks"
                        value={formData.snacks}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        className="form-control shadow-sm mb-3"
                        placeholder="Any special diet (e.g., Keto, Paleo)?"
                        name="specialDiet"
                        value={formData.specialDiet}
                        onChange={handleChange}
                    />
                </div>

                {/* Stress, Sleep, and Mental Health Section */}
                <div className="section mb-4 p-4">
                    <h4 className="mb-3" style={{ color: "black" }}>Stress & Mental Health</h4>
                    <select
                        className="form-select shadow-sm mb-3"
                        name="stressLevel"
                        value={formData.stressLevel}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select Your Stress Level</option>
                        <option value="Low">Low</option>
                        <option value="Moderate">Moderate</option>
                        <option value="High">High</option>
                    </select>
                    <textarea
                        className="form-control shadow-sm mb-3"
                        rows="4"
                        placeholder="Please describe your sleep patterns."
                        name="sleepPattern"
                        value={formData.sleepPattern}
                        onChange={handleChange}
                    />
                </div>

                {/* Family History Section */}
                <div className="section mb-4 p-4">
                    <h4 className="mb-3" style={{ color: "black" }}>Family Health History</h4>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="diabetes"
                            name="familyHistory"
                            value="Diabetes"
                            checked={formData.familyHistory.includes("Diabetes")}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="diabetes" className="form-check-label">Diabetes</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="heartDisease"
                            name="familyHistory"
                            value="Heart Disease"
                            checked={formData.familyHistory.includes("Heart Disease")}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="heartDisease" className="form-check-label">Heart Disease</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="cancer"
                            name="familyHistory"
                            value="Cancer"
                            checked={formData.familyHistory.includes("Cancer")}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="cancer" className="form-check-label">Cancer</label>
                    </div>
                </div>

                {/* Additional Notes Section */}
                <div className="section mb-4 p-4">
                    <h4 className="mb-3" style={{ color: "black" }}>Additional Notes</h4>
                    <textarea
                        className="form-control shadow-sm mb-3"
                        rows="4"
                        placeholder="Anything else you'd like us to know?"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                    />
                </div>

                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-dark px-4 py-2" onClick={handleBack}>
                        Back
                    </button>
                    <button type="submit" className="btn btn-warning px-4 py-2">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;