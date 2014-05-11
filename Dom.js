/********************DOM操作start*******************/ 
                util.Dom = {
                    // get elements by className
                    getElementsByClassName: function(className,context){
                        context = context || document;
                        if(context.getElementsByClassName){
                            return context.getElementsByClassName(className);
                        }else{
                            var eles = context.getElmentsByTagName('*'),
                                    reg = new RegExp(className,'g'),re = [];
                            for(var i=0,len=eles.length;i<len;i++){
                                if(reg.test(eles[i].className)){
                                    re.push(eles[i]);
                                }
                            }
                            return re; 
                        }
                    },
                    
                    
                }
                
/********************DOM操作end*******************/  