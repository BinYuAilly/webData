// 选择下拉框
var combobox = {
    select:function(item, json) {
        // console.log($(item))
        $(item).combobox(
            {
                data: json,
                valueField: 'id',
                textField: 'text',//选项字段
                prompt: '请选择',
                onSelect: function (period) {
                    // console.log(period, reqData)
                    console.log(period, "----")
                }
            }
        );
    }
}
module.exports={
    combobox:combobox
}