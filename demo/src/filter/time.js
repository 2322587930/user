

export default (times)=>{
    times=Number(times)
        //  var time = new Date(times);
        let time= new Date(times)
        var y = time.getFullYear();
        console.log(y)
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + s;
    }
