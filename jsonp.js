function jsonp(url, options) {
    var $script = document.createElement('script');
    // url拼接
    // 判断url中是否存在?
    if(url.indexOf('?') > -1) {
        url += '&_=' + Date.now(); 
    } else {
        url += '?_=' + Date.now(); 
    }
    for(var i in options) {
        url += '&' + i + '=' + options[i];
    }

    $script.src = url;
    document.body.appendChild($script);
}


// jsonp("http://localhost:8888/1808/24day/24day-down/jsonp/jsonp.php", {"username": 'xixi', "callback": "getData"});
// function getData(data) {

//     console.log(data);
// }

// jsonp("http://localhost:8888/1808/24day/24day-down/jsonp/jsonp.php", {"callback": "setAge"});
// function setAge(data) {
//     // 把数据里面的年龄进行+1
//     var arr = data.data;
//     for(var i = 0; i < arr.length; i++) {
//         arr[i].age += 1;
//     }
//     console.log(arr);
// }