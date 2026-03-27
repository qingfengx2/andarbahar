
import { director, loader, sys } from "cc";
import { appUrlConfig } from "./appUrlConfig";
export let ajax_api = {
    get: function (url, params, resp, err_resp) {

        var params_url = '';
        if (params != null) {
            for (var k in params) {
                if (params_url == '')
                    params_url = k + '=' + params[k];
                else
                    params_url += '&' + k + '=' + params[k];
            }
        }

        var whole_url = url;

        if (params_url != '') {
            if (whole_url.indexOf('?') != -1)
                whole_url += '&' + params_url;
            else
                whole_url += '?' + params_url;
        }

        console.log('ajax加载:' + whole_url);

        //var xhr = new XMLHttpRequest();
        var xhr = loader.getXMLHttpRequest();
        var timeout = false;//是否超时
        var timer = setTimeout(function () {
            timeout = true;
            xhr.abort();//请求中止
        }, 5000);

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;//忽略未完成的请求

            if (timeout) {
                // window.toastManager && window.toastManager.toast("The server is busy,please try later");
                if (err_resp != null)
                    err_resp();
                clearTimeout(timer);//取消等待的超时
                return;
            }

            clearTimeout(timer);//取消等待的超时

            if (xhr.status < 200) {
                if (err_resp != null)
                    err_resp();
                return;
            } else if (xhr.status >= 200 && xhr.status < 400) {
                var response = xhr.responseText;
                console.log("get请求返回的内容response====" + response);
                try {
                    if (resp != null) {
                        let result = JSON.parse(response);
                        resp(result);
                        if (result.code != undefined && result.code != null && result.code != 0) {
                            // window.toastManager && window.toastManager.toastByCode(result.code);
                        }
                    }
                }
                catch (err) {
                    if (err_resp != null)
                        err_resp();
                }
            } else if (xhr.status < 500) {
                // 认证错误 或 参数错误
                if (xhr.status === 400) {
                    console.log("参数错误");
                } else if (xhr.status === 401) {
                    console.log("认证失败，请重新登录");
                    sys.localStorage.removeItem("phoneNum");
                    sys.localStorage.removeItem("password");
                    sys.localStorage.removeItem("authorization");
                    director.loadScene("login");
                    // window.toastManager && window.toastManager.toast("Failed to identify your account, please re-login");
                    console.log("Failed to identify your account, please re-login");
                } else if (xhr.status === 429) {
                    console.log("Request is too frequent, please try later");
                    // window.toastManager && window.toastManager.toast("Request is too frequent, please try later");
                    return;
                }
                else {
                    console.log("其他错误");
                }

                if (err_resp != null)
                    err_resp();

                return;
            } else {
                console.log("服务器繁忙，请稍后再试");
                // console.log("The server is busy,please try later");
                // window.toastManager && window.toastManager.toast("The server is busy,please try later");

                if (err_resp != null)
                    err_resp();

                return;
            }
        };
        xhr.onerror = function () {
            console.log('没有网络连接，请稍后再试');
            // console.log("Cann't connect server, please check your network");
            // window.toastManager && window.toastManager.toast("Cann't connect server, please check your network");

            if (err_resp != null)
                err_resp();
            clearTimeout(timer);//取消等待的超时
        };

        //xhr.open("GET", whole_url, true);
        xhr.open("GET", whole_url);
        // xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", sys.localStorage.getItem('authorization'));

        xhr.withCredentials = true;
        xhr.send();
    },

    getGateWays: function (url, params, resp, err_resp) {
        var params_url = '';
        if (params != null) {
            for (var k in params) {
                if (params_url == '')
                    params_url = k + '=' + params[k];
                else
                    params_url += '&' + k + '=' + params[k];
            }
        }

        var whole_url = url;

        if (params_url != '') {
            if (whole_url.indexOf('?') != -1)
                whole_url += '&' + params_url;
            else
                whole_url += '?' + params_url;
        }

        // if (cc.sys.localStorage.getItem('JSESSIONID') != null)
        // {
        //     if (whole_url.indexOf('?') != -1)
        //         whole_url += '&JSESSIONID=' + cc.sys.localStorage.getItem('JSESSIONID');
        //     else
        //         whole_url += '?JSESSIONID=' + cc.sys.localStorage.getItem('JSESSIONID');
        // }

        console.log('ajax加载:' + whole_url);

        //var xhr = new XMLHttpRequest();
        var xhr = loader.getXMLHttpRequest();
        var timeout = false;//是否超时
        var timer = setTimeout(function () {
            timeout = true;
            xhr.abort();//请求中止
        }, 10000);
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;//忽略未完成的请求
            if (timeout) {
                if (err_resp != null)
                    err_resp();
                clearTimeout(timer);//取消等待的超时
                return;
            }
            clearTimeout(timer);//取消等待的超时
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                console.log("get请求返回的内容response====" + response);
                try {
                    if (resp != null) {
                        let result = JSON.parse(response);
                        resp(result);
                        if (result.code != undefined && result.code != null && result.code != 0) {
                            // window.toastManager.toastByCode(result.code);
                            console.log("错误码：" + result.code);
                        }
                    }
                }
                catch (err) {

                }
            } else {
                var result = {
                    "gateways": [
                        {
                            "host": "ws://bjgame.tpmas.xyz",
                            "port": "80/ws8000"
                        },
                        {
                            "host": "ws://bjgame.tpmas.xyz",
                            "port": "80/ws8001"
                        }
                    ],
                    "domain": "http://bjgame.tpmas.xyz/h5/",
                    "wss": "ws://bjgame.tpmas.xyz/wsgame"
                };
                console.log("get请求无返回时， 赋值");
                resp(result);
                console.log("get请求无返回时， 赋值完成");
                // if (result.code != undefined && result.code != null && result.code != 0) {
                //     window.toastManager.toastByCode(result.code);
                // }
            }

        };
        //xhr.open("GET", whole_url, true);
        xhr.open("GET", whole_url);
        // xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", sys.localStorage.getItem('authorization'));

        xhr.withCredentials = false;
        xhr.send();
    },

    postText: function (url, params, resp, err_resp, insertHead) {
        this._post(url, params, resp, err_resp, insertHead, true);
    },

    _post: function (url, params, resp, err_resp, insertHead, isText) {
        var whole_url = url;

        console.log('ajax加载:' + whole_url + ",post=" + JSON.stringify(params));

        var xhr = loader.getXMLHttpRequest();
        var timeout = false;//是否超时
        var timer = setTimeout(function () {
            timeout = true;
            xhr.abort();//请求中止
        }, 10000);

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;//忽略未完成的请求

            if (timeout) {
                console.log("The server is busy,please try later");
                if (err_resp != null)
                    err_resp();
                clearTimeout(timer);//取消等待的超时
                return;
            }

            clearTimeout(timer);//取消等待的超时

            if (xhr.status < 200) {
                if (err_resp != null)
                    err_resp();
                return;
            }
            else if (xhr.status >= 200 && xhr.status < 400) {
                var response = xhr.responseText;
                console.log("post请求返回的内容response====" + response);
                try {
                    if (resp != null) {
                        if (url === appUrlConfig.LinkOut_Register) {
                            let arr = response.split("\n");
                            if (arr.length > 1) {
                                response = arr[1];
                            }
                        }
                        let result = JSON.parse(response);
                        resp(result);
                        if (result.code != undefined && result.code != null && result.code != 0) {
                            if (url !== appUrlConfig.POST_NineGameRegister) {
                                // window.toastManager && window.toastManager.toastByCode(result.code);
                                console.log("错误码：" + result.code);
                            }
                        }
                    }
                }
                catch (err) {
                    if (err_resp != null)
                        err_resp();
                }
            } else if (xhr.status < 500) {
                // 认证错误 或 参数错误
                if (xhr.status === 400) {
                    console.log("参数错误");
                } else if (xhr.status === 401) {
                    console.log("认证失败，请重新登录");
                    // console.log("Failed to identify your account, please re-login");
                    // window.toastManager && window.toastManager.toast("Failed to identify your account, please re-login");

                } else if (xhr.status === 429) {
                    // window.toastManager && window.toastManager.toast("Request is too frequent, please try later");
                    return;
                }
                else {
                    console.log("其他错误");
                }

                if (err_resp != null)
                    err_resp();

                return;
            } else {
                console.log("服务器繁忙，请稍后再试");
                // console.log("The server is busy,please try later");
                // window.toastManager && window.toastManager.toast("The server is busy,please try later");

                if (err_resp != null)
                    err_resp();

                return;
            }
        };
        xhr.onerror = function () {
            console.log('没有网络连接，请稍后再试');
            // console.log("Cann't connect server, please check your network");
            // window.toastManager && window.toastManager.toast("Cann't connect server, please check your network");
            if (err_resp != null)
                err_resp();

            clearTimeout(timer);//取消等待的超时
        };

        xhr.open("POST", whole_url, true);
        xhr.withCredentials = true;
        // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", sys.localStorage.getItem('authorization'));

        xhr.send(JSON.stringify(params));
    },

    patch: function (url, params, resp, err_resp, insertHead) {
        var whole_url = url;

        console.log('ajax加载:' + whole_url + ",patch=" + JSON.stringify(params));

        var xhr = loader.getXMLHttpRequest();
        var timeout = false;//是否超时
        var timer = setTimeout(function () {
            timeout = true;
            xhr.abort();//请求中止
        }, 10000);
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;//忽略未完成的请求

            if (timeout) {
                console.log("The server is busy,please try later");
                if (err_resp != null)
                    err_resp();
                clearTimeout(timer);//取消等待的超时
                return;
            }

            clearTimeout(timer);//取消等待的超时

            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                console.log("patch请求返回的内容response====" + response);
                try {
                    if (resp != null)
                        resp(JSON.parse(response));
                }
                catch (err) {

                }
            }
        };
        xhr.onerror = function () {
            console.log('没有网络连接，请稍后再试');
            // console.log("Cann't connect server, please check your network");
            // window.toastManager && window.toastManager.toast("Cann't connect server, please check your network");
            if (err_resp != null)
                err_resp();

            clearTimeout(timer);//取消等待的超时
        };

        xhr.open("PATCH", whole_url);
        xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", sys.localStorage.getItem('authorization'));

        xhr.send(JSON.stringify(params));
    },


    post: function (url, params, resp, err_resp, insertHead) {
        this._post(url, params, resp, err_resp, insertHead, false);
    },

    postSend: function (url, params, resp, err_resp) {

        var whole_url = url;

        if (sys.localStorage.getItem('JSESSIONID') != null) {
            if (whole_url.indexOf('?') != -1)
                whole_url += '&JSESSIONID=' + sys.localStorage.getItem('JSESSIONID');
            else
                whole_url += '?JSESSIONID=' + sys.localStorage.getItem('JSESSIONID');
        }

        console.log('ajax加载:' + whole_url);

        var xhr = new XMLHttpRequest();
        //var xhr = loader.getXMLHttpRequest();
        var timeout = false;//是否超时
        var timer = setTimeout(function () {
            timeout = true;
            xhr.abort();//请求中止
        }, 10000);
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;//忽略未完成的请求
            if (timeout) {
                if (err_resp != null)
                    err_resp();
                clearTimeout(timer);//取消等待的超时
                return;
            }
            clearTimeout(timer);//取消等待的超时
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                console.log("post请求返回的内容response====" + response);
                try {
                    if (resp != null)
                        resp(JSON.parse(response));
                }
                catch (err) {

                }
            }
        };
        xhr.open("POST", whole_url, true);
        xhr.withCredentials = true;
        //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(params);
    }
};

// module.exports = ajax_api;