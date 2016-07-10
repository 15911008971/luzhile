function Slider(obj) {
    this.slider = obj.slider,
    this.prev = obj.prev,
    this.next = obj.next,
    this.type = obj.type,
    this.autoplay=obj.autoplay,
    this.callback= obj.callback,
    this.init(),
    this.initDom(),
    this.initEvent()
       
}
Slider.prototype = {
    init: function () {
        this._width = $(window).width(),
            this._height = $(window).height(),
            this._idx = 0;
    },
    initDom: function () {
        self = this,
            this._item = this.slider.find(".main");

        for (var i = 0; i < self._item.length; i++) {

            $(self._item[i]).css("-webkit-transform", "translate3d(0," + i * self._height + "px,0)");
        }
    },
    initEvent: function () {
        var moveY,
            startY,
            offsetY;
        $(this._item).on("touchstart", function (e) {
            e.preventDefault();
            startY = e.touches[0].screenY;
        })
        $(this._item).on("touchmove", function (e) {
                e.preventDefault();
                moveY = e.touches[0].screenY;
                offsetY = moveY - startY;
                //console.log(offsetY)
                width = self._width;
                height = self._height;
                //_offsetX=self.offsetX;

                for (var i = 0; i < self._item.length; i++) {
                    if ($(self._item[i])) {
                      $(self._item[i]).css("-webkit-transform", "translate3d(0," + (((i - self._idx) * height) + offsetY) + "px,0)");
                      $(self._item[i]).css("-webkit-transition", "none");
                    }
                }
            })

                this.autoplay && setInterval(function(){
                    self.yidong("+1");
                },1000)
                this.prev.on("click",function(e){
                   
                    self.yidong("-1",e.type);
                }),
                this.next.on("click",function(e){
                  
                    self.yidong("+1",e.type);
                }),


            $(this._item).on("touchend", function (e) {
                var _offset = offsetY;
                if (offsetY < 0) {
                    self.yidong("+1",e.type);
                } else {
                    self.yidong("-1",e.type);
                }
            })
    },
    yidong: function (_num,type) {
        //console.log(num);

        var idx = this._idx,
            width = this._width,
            item = this._item,
            height = this._height;


        if (typeof (_num) == "number") {
            newnum = _num;
        }
        if (typeof (_num) == "string") {
            newnum = idx + _num * 1;
            //console.log(newnum);
        }
        if (newnum > item.length - 1) {
            newnum = 0;
            self.initDom();
        }
        if (newnum < 0) {
            newnum = 0;
        }
        item[newnum] && $(item[newnum]).css("-webkit-transform", "translate3d(0,0,0)");
        item[newnum - 1] && $(item[newnum - 1]).css("-webkit-transform", "translate3d(0,"+(-height)+"px,0)");
        item[newnum + 1] && $(item[newnum + 1]).css("-webkit-transform", "translate3d( 0,"+ height + "px,0)");


        item[newnum] && $(item[newnum]).css("-webkit-transition", "all 0.6s");
        item[newnum - 1] && $(item[newnum - 1]).css("-webkit-transition", "all 0.6s");
        item[newnum + 1] && $(item[newnum + 1]).css("-webkit-transition", "a11 0.6s");
        this._idx = newnum;
        if(!type) return false;
        if(type.indexOf(this.type) == 0){
             this.callback();
        }
       
       //console.log(type);
    }


}