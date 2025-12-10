import mongoose from 'mongoose';

const familySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Le nom est obligatoire']
    },
    familyType: {
        type: String,
        enum: ['recomposé', 'normal', 'parent seul'],
        required: [true, 'Le type de famille est obligatoire'],
    },
    address: {
        type: String,
        required: [true, 'L\'adresse est obligatoire']
    },
    phone: {
        type: String,
        required: [true, 'Le numéro de téléphone est obligatoire']
    },
     members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false
        }
    ]
}, { timestamps: true });

export const Family = mongoose.model('Family', familySchema);