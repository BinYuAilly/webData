var init = {
    // 自适应
    adapt(){
        // console.log(document.all)
        // document.all("test").height=test.document.body.scrollHeight;
        // document.all("test").width=test.document.body.scrollWidth;
        // let winWidth = $("#app").children();
        // console.log(winWidth);
    },
    render(){
        let html = `
            <iframe id="try1" src="./html/try1.html"></iframe>
        `
        $("#app").html(html);
        let w = $("#try1").parent().width();
        let h = $("#try1").parent().height();
        $("#try1").width(w);
        $("#try1").height(h);
        // console.log( $("#try1").parent().height(), $("#try1").parent().width() );
    }
}
// module.exports={
//     init:init
// }