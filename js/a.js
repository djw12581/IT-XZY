var Dmset = (function () {
    //定义构造器
    var Dmset = function (options) {
        this.init(options||{});//初始化操作
        this.bind();//绑定监听
    };
//原型上拓展功能
    Dmset.prototype = {
        init:function(options){
            this.options = options;
            this.dom_span= document.createElement('span');
            this.dom_inpt = document.querySelector('input[type="text"]');
            this.dom_main = document.querySelector('main');
            this.dom_main.style.overflow='hidden';
            this.dom_span.className = 'inline-text';
            this.dom_btns = document.querySelector('#btn-shut');
            this.dom_btnc = document.querySelector('#btn-clear');
            this.index = 0;
            this.y = this.random(380);
            this.arr=[this.y];
            this.dom_span.style.right=this.index+'px';
            this.dom_span.style.top=this.arr[this.index]+'px';
        },
        bind:function () {
            var _this = this;
            this.dom_btns.addEventListener('click',function () {
                _this.shut();
            });
            this.dom_btnc.addEventListener('click',function () {
                _this.clear();
            })
        },
        shut:function () {
            this.init();
            this.dom_main.appendChild(this.dom_span);
            this.dom_span.innerHTML = this.dom_inpt.value;
            this.color([]);
            this.setTime();

        },
        clear:function () {
            var spp = document.querySelectorAll("main span")||[];
            var aspp = spp.length;
            for (var i=aspp;i--;){
                this.dom_main.removeChild(spp[i]);
            }
        },
        random:function (t) {
            return Math.floor(Math.random()*t);
        },
        color:function (ar) {
            for (let i=0;i<3;i++){
                ar.push(this.random(100));
                var narr=ar.join('');
            }
            this.dom_span.style.color='#'+narr;
        },
        setTime:function () {
            var _this_ = this;
            var timer= setInterval(function() {
                if(_this_.index<=300){
                        _this_.index+=1;
                    }else if(_this_.index>300&&_this_.index<=600){
                        _this_.index+=1.2;
                    }else if(_this_.index>600&&_this_.index<=800){
                        _this_.index+=1.5;
                    }else if(_this_.index>800){
                        clearInterval(timer);
                        _this_.dom_main.removeChild(_this_.dom_span);
                    }
                    _this_.dom_span.style.right=_this_.index+'px';
                },10);
            },
    };
    return Dmset;
})();
