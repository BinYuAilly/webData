var word = {
    string(){
        // return [
        //     "明月几时有", "把酒问青天",
        //     "不知天上宫阙", "今夕是何年",
        //     "我欲乘风归去", "唯恐琼楼玉宇",
        //     "高处不胜寒", "起舞弄清影", "何似在人间",
        //     "转朱阁", "低绮户", "照无眠",
        //     "不应有恨", "何事长向别时圆",
        //     "人有悲欢离合", "月有阴晴圆缺",
        //     "此事古难全",
        //     "但愿人长久", "千里共婵娟",
        // ]
        // 每年的这个时候,祝福就会象海洋涌向你,希望我的祝福象一叶轻舟,载你乘风破浪,到达成功的彼岸！新年快乐！
        return [
            "每年的这个时候","祝福就会象海洋涌向你","希望我的祝福象一叶轻舟","载你乘风破浪","到达成功的彼岸","新年快乐"
        ]
    }
}
var initHanArr = (function(){
    
    var globalData = {
        HanArr:word.string(),
    }
    return {
        render(){
            let html = '',htmlAll='';
            let changeIndex = "";
            let sty = "margin-top:20px;";
            let cnt = 0;
            console.log(globalData.HanArr, "globalData.HanArr------")
            globalData.HanArr.forEach((item,index)=>{
                (function() {
                    cnt = 0;
                    for(let i in item){
                        if(changeIndex!=index){
                            changeIndex = index;
                            html += `
                                <div id='type_${index}_${i}' style="${i==0 ? sty : ''}"></div>
                            `;
                        }else{
                            cnt++;
                            html += `
                                <div id='type_${index}_${i}'></div>
                            `;
                        }
                    }
                    // $(".container").append(html);
                    // html = '<br><br>';
                })()
            })
            // html +="<div class='end-author' style='margin-top: 50px;'>|</div>";
            // html +="<div class='end-author'>|</div>";
            // html +="<div class='end-author fontSize'>苏</div>";
            // html +="<div class='end-author fontSize'>轼</div>";
            $(".container").html(html);
            setTimeout(()=>{
                this.animateWriter();
            },200)
        },
        HanWriter(){
            const BASE_CONFIG = {
                width: 60,
                height: 60,
                padding: 2,
                delayBetweenStrokes: 0,
                strokeAnimationSpeed: 10,
                showCharacter: false,
                showOutline: false,
            }
            const WRITER_CONFIG = {
                ...BASE_CONFIG,
                strokeColor: '#f9dc60'
            };
            let writerList = [];
            globalData.HanArr.forEach((item,index)=>{
                for(let i in item){
                    writerList.push(HanziWriter.create(`type_${index}_${i}`, item[i], WRITER_CONFIG));
                    if(index >= globalData.HanArr.length-1 && i >=item.length-1){
                        writerList.push(null);
                    }
                }
            })
            console.log(writerList, "writerList++++")
            return writerList;
       
        },
        async animateWriter(){
            let writerList = this.HanWriter();
            for (const writer of writerList) {
                if(!writer){
                    // $(".end-author").show();
                    setTimeout(()=>{
                        $(".container").remove();
                    },3000)
                }else{
                    await writer.animateCharacter();
                }
            }
        }

    }

}())