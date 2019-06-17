// Array.prototype.filterspace = function(){
//     var arr1 = this;
//     console.log(arr1);
// };
Array,prototype.filterspace = function(){
    var arr1 = this;
    var result = arr1.map(function(value){
        return value.trim();
    });
    return result;
}