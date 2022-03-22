
import mongoose from "mongoose"
const { model, Schema } = mongoose
const userSchema = new Schema({
    first_name: {
        type: String,
        minlength: [3, 'First Name Minimum Length Is Three'],
        required: [true, 'First Name Is Required']
    },
    last_name: {
        type: String,
        minlength: [3, 'Last Name Minimum Length Is Three'],
        required: [true, 'Last Name Is Required']
    },

    age: {
        type: Number,
        min: [18, 'Age Minimum Age Is 18'],
        required: [true, 'Age Is Required']
    },
    bday: {
        type: Date,
        required: [true, 'Birth Of Date Is Required']
    },
    city: {
        type: String,
        required: [true, 'City Is Required']
    },
    state: {
        type: String,
        required: [true, 'State Is Required']
    },
    email: {
        type: String,
        unique: [true, 'Email Account Already Exist'],
        required: [true, 'Email Is Required']
    },
    gender: {
        type: String,
        required: [true, 'Gender Is Required']
    },
    mobile: {
        type: String,
        unique: [true, 'Mobile Account Already Exist'],
        minlength: [11, 'Mobile Minimum Length Is 11'],
        maxlength: [16, 'Mobile Maximum Length Is 16'],
        required: [true, 'Mobile Is Required']
    },
    address: {
        type: String,
        minlength: [3, 'Address Minimum Length Is Three'],
        required: [true, 'Address Is Required']
    },
    zipeCode: {
        type: String,
    },
    telehone: {
        type: String
    },
    education: {
        type: String,
    },
    
    department: {
        type: String
    },
   
    maritalStatus: {
        type: String
    },
    password: String
    
    
}, {
    timestamps: true
})

export const User = model('User', userSchema)
