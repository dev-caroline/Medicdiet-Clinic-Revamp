const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: String },
    age: { type: Number },
    gender: { type: String },
    dob: { type: Date },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    height: { type: String },
    weight: { type: String },
    goal: { type: String },
    dietPlan: { type: String },
    medicalDiagnosis: { type: String },
    medicalConditions: { type: String },
    medications: { type: String },
    currentMedication: { type: String },
    allergies: { type: String },
    surgicalHistory: { type: String },
    physicalActivityLevel: { type: String },
    mealPreferences: { type: String },
    dailyMeals: { type: String },
    snacks: { type: String },
    specialDiet: { type: String },
    stressLevel: { type: String },
    sleepPattern: { type: String },
    isPregnant: { type: String },
    planningConception: { type: String },
    pastDietProgram: { type: String },
    takenDietPills: { type: String },
    pillsDuration: { type: String },
    pillsType: { type: String },
    weightLoss: { type: String },
    weightGain: { type: String },
    familyHistory: { type: [String] },
    otherFamilyHistory: { type: String },
    additionalNotes: { type: String }
}, {
    timestamps: true
});

const FormData = mongoose.model('FormData', formSchema);

module.exports = FormData;
