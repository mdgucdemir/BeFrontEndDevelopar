
const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({

    title: {
        type: String,
        required: [true,"Please provide a title"],
        minlength: [10,"Please provide a title at least 10 characters"],
        unique: true,
    },
    content: {
        type: String,
        required: [true,"Please provide a content"],
        minlength: [20,"Please provide a title at least 20 characters"]
    },
    // Bu bir sorudur => bu-bir-sorudur (slug bu ise yarar)
    slug : String,    
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"

    },
    likeCount: {
        type: Number,
        default: 0
    },
    likes: [
        // bu soruya bir cok like geleceginden ve bu da bir cok id gelecegi anlamina geldigi icin bunu array olarak yapiyoruz. Bu array in her bir elemani objectId olucak
        {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        }
    ],
    answerCount: {
        type: Number,
        default: 0
    },
    answers: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Answer"
        }
    ]

});

QuestionSchema.pre("save", function(next){
    
    if(!this.isModified("title")) {
        next();
    } 

    this.slug = this.makeSlug();
    next();
});

QuestionSchema.methods.makeSlug = function() {
    return slugify(this.title, {
        replacement: '-',
        remove: /[*+~.()'"!:@]/g, 
        lower: true,      
      })
}

module.exports = mongoose.model("Question",QuestionSchema);