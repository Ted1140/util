/********************浏览器特性检测start*******************/           
            util.support = {
                //检测浏览器是否支持css3
                isSuportCss3: function(){
                    (function(){
                        var div = document.createElement('div'),vendor = 'Khtml Ms O Moz Webkit',len = vendor.length;
                        return function(prop){
                            if(prop in div.style) return true;
                            
                            prop = prop.replace(/^[a-z]/,function(val){
                                return val.toUpperCase();
                            });
                            
                            while(len--){
                                if(vendor[len] + prop in div.style) return true;
                            }
                            return false;
                        }
                    })()
                }
                
                
            }           
            
/********************浏览器特性检测end*******************/ 