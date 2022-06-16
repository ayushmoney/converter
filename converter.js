const text = require("body-parser/lib/types/text");
var Extrator = require("html-extractor");
var myExtrator = new Extrator();
var convert = (obj) =>{
    var arr = [];
    obj.map(ele=>{
        var temp = {};
        var str = "";
        // myExtrator.extract( ele.text, function( err, data ){
        //     console.log(data.div);
        // })
        var a = [];
        if(ele.text.includes("<div>")){
            a = ele.text.split('<div>').join('$').split('</div>').join('$').split('<br>').join('$').split('$');
            a.map(e=>{
                str = str + e;
            })
            temp[ele.partyType] = str;
        }
        else
        temp[ele.partyType] = ele.text;
        
        arr.push(temp)
    })
    return arr;
}

module.exports = {convert};