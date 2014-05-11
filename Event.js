/********************事件event start************************/
        
        util.event = {
        //取消事件默认行为
            preventDe:function(e){
                e = window.event||e;
                if(window.attachEvent){
                    e.returnValue = false;
                }else if(window.addEventListener){
                    e.preventDefault();
                }
            },
            cancelBu:function(e){
                e = window.event||e;
                if(window.addEventListener){
                    e.stopPropagation();
                }else if(window.attachEvent){
                    e.cancelBubble = true;
                }
            },
            
        
        }
/********************事件event start************************/