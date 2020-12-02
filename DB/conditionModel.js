const { mongoose } = require('./config');

const conditionSchema = mongoose.Schema({ 
    power: String,
    control: String,
    corpus: String,
    signal: Boolean, // 0 - нет, 1 - есть
    led: Boolean, // 0 - нет, 1 - есть
    dispetcher: Boolean, // 0 - нет, 1 - есть
    createDate: Date,
});

module.exports.conditionModel = mongoose.model('condition', conditionSchema);
