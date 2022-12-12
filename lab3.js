/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = { 
    date: function (d) {
    newDate = new Date(d);
    return newDate;
},
    add: function(value, time){
            switch (time){
                case "months":
                    newDate.setMonth(newDate.getMonth() + value);
                    break;
                case "days":
                    newDate.setDate(newDate.getDate() + value);
                    break;
                case "years":
                    newDate.setFullYear(newDate.getFullYear() + value);
                    break;
                case "hours":
                    newDate.setHours(newDate.getHours() + value);
                    break;
                case "minutes":
                    newDate.setMinutes(newDate.getMinutes() + value);
                    break;

            }
    },
    subtract: function (value, time){
        switch (time){
            case "months":
                newDate.setMonth(newDate.getMonth() - value);
                break;
            case "days":
                newDate.setDate(newDate.getDate() - value);
                break;
            case "years":
                newDate.setFullYear(newDate.getFullYear() - value);
                break;
            case "hours":
                newDate.setHours(newDate.getHours() - value);
                break;
            case "minutes":
                newDate.setMinutes(newDate.getMinutes() - value);
                break;

        }
    }

}
