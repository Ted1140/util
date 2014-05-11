/********************string start***********************/
 util.string = {
    
//获取字符串中出现次数最多的字符
    getMaxStr:function(str){
        var result = {},returnStr = [],returnNum = 0;
        for(var i=0,len=str.length;i<len;i++){
                result[str[key]]?result[str[key]]++:result[str[key]]=0;
            }
        }
        //找出出现次数最多的字符,考虑到出现次数最多的字符有2个以上的情况，使用数组returnStr来保存字符
        for(var key in result){
            if(result[key] > returnNum){
                returnStr = [key];
                returnNum = result[key];
            }else if(result[key] == returnNum){
                returnStr.push(key);
            }
        }
        
        return {result:returnStr.join(' and '),number:returnNum}
    } ,
    
        
//将字符串转换成驼峰模型
        camelCase:function(str){
            return str.replace(/-(.)/g, function(all,$1){
                    return $1.toUpperCase();    
            }）  
        },
                                                 
//将字符串反转
        reverseStr:function(str){
            return str.split('').reverse().join('');    
        },
            
//对字符串进行加密处理
        strEncode:function(str){
            var re = [];
            for(var i=0,len=str.length;i<len;i++){
                re.push(str.charCodeAt(i).toString(8));
            }
            return re.join('-')
        },
//对字符串解密
            strDecode:function(str){
                var arr = str.split('-'),re=[];
                for(var i=0,len=arr.length;i<len;i++){
                    re.push(String.fromCharCode(parseInt(arr[i],8)));
                }
                return re.join('')
            }
    
},

//判断字符串是否以某个字符串结尾
    endWith:function(str,suffix){
        return  str.indexOf(suffix,str.length - suffix.length) !== -1;
    }
        

            

    
                
 
                    

