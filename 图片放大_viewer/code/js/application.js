var globalApplicationData = {
    // redirectIP:"https://192.168.1.52:8012",
    redirectIP:"http://221.178.97.41:8030",
};

//封装Promise
const jqPromiseAjax = (ajaxData) => {
    return new Promise((resolve,reject) => {
        $.ajax({
            url: ajaxData.url,
            type: ajaxData.type,
            dataType: 'json',
            data:ajaxData.params,
            // timeout: 5000,
            success(res) {
                resolve(res);
            },
            error(err) {
                reject(err);
            }
        });
    });
}

//文件上传的配置
const jqPromiseAjaxFile = (ajaxData) => {
    return new Promise((resolve,reject) => {
        $.ajax({
            url: ajaxData.url,
            type: ajaxData.type,
            processData: false,
            contentType: false,
            cache: false,
            data:ajaxData.params,
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,GET',
            },//设置请求头
            // timeout: 5000,
            success(res) {
                resolve(res);
            },
            error(err) {
                reject(err);
            }
        });
    });
}

//接口集合（外网）******************************************************************************

//查询村居最近一次导入的项目（扫码页面）   projectBrief.html
var getVillageProject = async (villId) => {
    var params = {villId:233};
    var ajax = {
        url:globalApplicationData.redirectIP+'/PublicApi/GetProjectList',
        type:'get',
        params:params,
    };
    var result =  await jqPromiseAjax(ajax).then(function (res) {
        return  res;
    }).catch(function (err) {
        return  err;
    });
    return result;
};

//当前村居项目受益人明细（查看受益人）   searchList.html
var getBeneficiary = async (villId,recordId,page,rows,username) => {
    var params = {villId:villId,recordId:recordId,page:page,rows:rows,username:username};
    var ajax = {
        url:globalApplicationData.redirectIP+'/PublicApi/GetBeneficiaryList',
        type:'get',
        params:params,
    };
    var result =  await jqPromiseAjax(ajax).then(function (res) {
        return  res;
    }).catch(function (err) {
        return  err;
    });
    return result;
};

//获取政策文件   policy.html
var getPolicy = async (recordId) => {
    var params = {recordId:recordId};
    var ajax = {
        url:globalApplicationData.redirectIP+'/PublicApi/GetRuralPolicyGuide',
        type:'get',
        params:params,
    };
    var result =  await jqPromiseAjax(ajax).then(function (res) {
        return  res;
    }).catch(function (err) {
        return  err;
    });
    return result;
};

//获取往期政策文件   policy.html
var getPastPolicy = async (polId) => {
    var params = {polId:polId};
    var ajax = {
        url:globalApplicationData.redirectIP+'/PublicApi/GetGetPolicyById',
        type:'get',
        params:params,
    };
    var result =  await jqPromiseAjax(ajax).then(function (res) {
        return  res;
    }).catch(function (err) {
        return  err;
    });
    return result;
};

//查看往期项目   projectList.html
var getPastProjects = async (projectName,villId,page,rows) => {
    var params = {projectName:projectName,villId:villId,page:page,rows:rows};
    var ajax = {
        url:globalApplicationData.redirectIP+'/PublicApi/GetLastProjectList',
        type:'get',
        params:params,
    };
    var result =  await jqPromiseAjax(ajax).then(function (res){
        return  res;
    }).catch(function (err) {
        return  err;
    });
    return result;
};

//获取我要监督跳转的方箱    所有有我要监督的页面
var getSupervisionJumpHref = async () => {
    var params = {};
    var ajax = {
        url:globalApplicationData.redirectIP+'/PublicApi/GetReportType',
        type:'get',
        params:params,
    };
    var result =  await jqPromiseAjax(ajax).then(function (res){
        return  res;
    }).catch(function (err) {
        return  err;
    });
    return result;
};

//保存我要监督反馈内容    feedback.html
var saveFeedbackData = async (formDataSend) => {
    var ajax = {
        url:globalApplicationData.redirectIP+'/PublicApi/SaveFeedBack',
        type:'post',
        params:formDataSend,
    };
    var result =  await jqPromiseAjaxFile(ajax).then(function (res){
        return  res;
    }).catch(function (err) {
        return  err;
    });
    return result;
};



//生成短信验证码并发送到手机   userMessage.html
var sendCodeToPhone = async (tellPhone) => {
    var params = {tellPhone:tellPhone};
    var ajax = {
        url:globalApplicationData.redirectIP+'/PublicApi/GetVerificationCode',
        type:'get',
        params:params,
    };
    var result =  await jqPromiseAjax(ajax).then(function (res){
        return  res;
    }).catch(function (err) {
        return  err;
    });
    return result;
};




//保存反馈人信息   userMessage.html
var saveUserMessage = async (username,tellphone,verificationCode,feedId) => {
    var params = {username:username,tellphone:tellphone,verificationCode:verificationCode,feedId:feedId};
    var ajax = {
        url:globalApplicationData.redirectIP+'/PublicApi/SaveFeedBackPerson',
        type:'post',
        params:params,
    };
    var result =  await jqPromiseAjax(ajax).then(function (res){
        return  res;
    }).catch(function (err) {
        return  err;
    });
    return result;
};

//获取所有政策文件   allPolicy.html
var getAllPolicy = async (titleName,depId,page,rows) => {
    var params = {titleName:titleName,depId:depId,page:page,rows:rows};
    var ajax = {
        url:globalApplicationData.redirectIP+'/PublicApi/GetPolicyList',
        type:'get',
        params:params,
    };
    var result =  await jqPromiseAjax(ajax).then(function (res){
        return  res;
    }).catch(function (err) {
        return  err;
    });
    return result;
};