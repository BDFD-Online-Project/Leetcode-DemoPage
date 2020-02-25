const mongoose = require('mongoose');
const Schema = mongoose.Schema;
Question = require('./Question');
//Create Category Schema
const CategorySchema = new Schema({
    category_name : {
        type: String,
        required: true
    },
    type_name : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default:Date.now
    }
});

CategorySchema.pre('remove', function(next){
    Question.find ({type:this.id}, (err, questions)=> {
       if(err){
           next(err)
       } else if (questions.length>0){
           next(new Error (`This category has ${questions.length} questions in database stills`))
       } else {
           next()
       }
    })
})


const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;