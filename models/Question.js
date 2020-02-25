const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Question Schema
const QuestionSchema = new Schema({
        title : {
                type: String,
                required: true,
        },
        number : {
                type: Number,
                required: true,
                min: 1,
                index: true,
                unique: true
        },
        type : {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Category'
        },
        description : {
                type: String
        },
        tip : {
                type: String,
                default: 'put your tips here'
        },
        analyze : {
                type: String,
                default: 'put your analyze information here'
        },
        solution : {
                type: String,
                default: 'put your solution here'
        },
        create_date : {
                type: Date,
                required: true,
                default:Date.now
        },
        coverImageName: {
                type: String
        },

});
const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;