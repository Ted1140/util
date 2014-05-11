/********************array start************************/
util.array = {
//为数组添加index方法
    indexArray:function(arr,key){
        for(var i=0,len=arr.length;i<len;i++){
            if(arr[i] == key){
                return i;
            }
        }
        return -1;
    },
    
//数组去重
    unique:function(arr){
        var result = [], temp = {};
        for(var i=0,len=arr.length;i<len;i++){
            if(!temp[arr[i]]){
                result.push(arr[i]);
                temp[arr[i]] = true;
            }
        }
        return result;
    } 

}
    
/********************array end************************/ 