util.date = {
//将日期化成标准模式
    changeToStand:function(date){
        return date.replace(/-/g,'/');
    },
//日期的排序
    sort:function(date){
        return date.sort(function(a,b){
            a = util.date.changeToStand(a),b = util.date.changeToStand(b);
            return  new Date(a).getTime() - new Date(b).getTime(); 
        })
    }
}