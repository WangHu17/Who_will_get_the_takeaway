(function () {
    var button = document.getElementsByTagName('button')[0];
    var ullist = document.getElementsByTagName('ul')[0];
    var arrList = [];
    var close = document.getElementById('close');
    var mask = document.getElementsByClassName('mask')[0];
    var icobtn = document.getElementsByClassName('ico')[0];
    var min=NaN;
    var index;
    close.onclick = function () {
        mask.style.display = 'none';
        // console.log('ok')
    }
    icobtn.onclick = function () {
        mask.style.display = 'block';
    }
    button.onmousedown = function () {
        this.style.backgroundPosition = '0 ' + (-80) + 'px';
        cteatNumer()
        this.onmouseup = function () {
            this.style.backgroundPosition = '0 ' + (-40) + 'px';
        }
    };
    button.onmouseenter = function () {
        this.style.backgroundPosition = '0 ' + (-40) + 'px';
        this.onmouseleave = function () {
            this.style.backgroundPosition = '0 ' + 0 + 'px';
        }
    };
//鼠标滑过的时候背景变化


    Array.prototype.min = function () {
        var min = this[0];
        var len = this.length;
        for (var i = 1; i < len; i++) {
            if (this[i] < min) {
                min = this[i];
            }
        }
        return min;
    }
    //数组取最小值
    function cteatNumer() {
        var num = Math.floor(Math.random() * 100);
        if(min == num){
            cteatNumer();
            return;
        }     //判断是否有最小值重复   
        arrList.push(num);
        if (arrList.length > 11) {
            if (num > min && index == 0) {
                arrList.splice(1, 1);
            } else {
                arrList.shift();
            }
            console.log(arrList);
        }
        console.log(arrList.min());
       
        min = arrList.min();//最小值
        index = arrList.indexOf(min);//最小值在数组中的索引
        refurbishDom(arrList, index);
    }
    function refurbishDom(arr, index) {
        ullist.innerHTML = '';
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            ullist.innerHTML += '<li>' + '扔出了一个' + arr[i] + '</li>';
        }
        ullist.getElementsByTagName('li')[index].className = 'takeout-list';
    }




})()