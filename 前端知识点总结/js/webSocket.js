    // 创建 websocket 连接
    function createConnection() {
        var WebSocketHost = "ws://66.66.2.14:8081/yzssapp/";
        //判断当前浏览器是否支持WebSocket
        if ('WebSocket' in window) {
            // websocket = new WebSocket(`ws://127.0.0.1:8081/yzssapp/webSocketBySpring/WebSocket?mchNo=${globalData.userId}`);
            websocket = new WebSocket(WebSocketHost + `webSocketBySpring/WebSocket?mchNo=${globalData.userId}`);
        } else {

        }
        //连接发生错误的回调方法
        websocket.onerror = function () {
            console.log("onerror");
        };
        //连接成功建立的回调方法
        websocket.onopen = function (event) {
            console.log(event, "onopen");
        }
        //接收到消息的回调方法
        websocket.onmessage = function (event) {
            console.log(event, 'onmessage');
        }
        //连接关闭的回调方法
        websocket.onclose = function () {

            console.log('onclose');
        }
        //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
        window.onbeforeunload = function () {
            websocket.close();
        }
    },