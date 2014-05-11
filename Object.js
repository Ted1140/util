 util.deepclone = function(o){
        if(typeof o != 'object' || !o){
            return o;
        }else{
            var result = new (o.constructor)();
            for(var key in o){
                if(o.hasOwnProperty(key)){
                    typeof o[key] === 'object'?result[key] = arguments.callee(o[key]):result[key] = o[key];
                }
            }
        }
        return result;
    }

 util.isPlainObject = function(o){
            if(!o || Object.prototype.toString.call(o) !== [Object object] || o.nodeType || isWindow(o)){
                  return false;
            }
            try{
                if(o.constructor && !o.hasOwnProperty('constructor') && !o.prototype.hasOWnProperty('isPrototypeOf')){
                    return false;
                }
            }catch(e){
                return false;
            }
            for(var key in o){}
            return key === undefined || o.hasOwnProperty(key);
        }