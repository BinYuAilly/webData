
var init = {
    getNowDate(){//YYYY-MM-DD 日期格式
        let month = (new Date().getMonth()+1);
        let day = new Date().getDate();
        if( String(month).length ==1 ){
          month = "0"+month;
        }     
        if( String(day).length ==1 ){
          day = "0"+day;
        }
        let nowDate = new Date().getFullYear() + '-' + month + "-" + day;
        return nowDate;
    },
    // 20210625 --- bins add
    //日期格式 为 YYYY-MM-DD
    getDayDiff(nowDate,endDate){//合同到期时间计算
        // console.log(nowDate,endDate);
        return (new Date(endDate).getTime() - new Date(nowDate).getTime()) / (24*60*60*1000) ;
    }
}