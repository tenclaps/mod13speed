$(document).ready(function(){

    //手持ち札
    deck_p = [  001,002,003,004,005,006,007,008,009,010,011,012,013,
                201,202,203,204,205,206,207,208,209,210,211,212,213]
    deck_e = [  101,102,103,104,105,106,107,108,109,110,111,112,113,
                301,302,303,304,305,306,307,308,309,310,311,312,313];
    showCard("#e_deck",0,14);
    showCard("#p_deck",0,14);

    deck_p.shuffle();
    deck_e.shuffle();

    //場の数字を格納する変数
    field_p_nums = [0,0,0,0]
    field_e_nums = [0,0,0,0]
    field_c_nums = [0,0]

    //初めにカードを配る
    showCard("#e0",parseInt(deck_e[0]/100),deck_e[0]%100);  field_e_nums[0] = deck_e.shift()%100;
    showCard("#e1",parseInt(deck_e[0]/100),deck_e[0]%100);  field_e_nums[1] = deck_e.shift()%100;
    showCard("#e2",parseInt(deck_e[0]/100),deck_e[0]%100);  field_e_nums[2] = deck_e.shift()%100;
    showCard("#e3",parseInt(deck_e[0]/100),deck_e[0]%100);  field_e_nums[3] = deck_e.shift()%100;
    showCard("#c0",3,14);
    showCard("#c1",3,14);
    showCard("#p0",parseInt(deck_p[0]/100),deck_p[0]%100);  field_p_nums[0] = deck_p.shift()%100;
    showCard("#p1",parseInt(deck_p[0]/100),deck_p[0]%100);  field_p_nums[1] = deck_p.shift()%100;
    showCard("#p2",parseInt(deck_p[0]/100),deck_p[0]%100);  field_p_nums[2] = deck_p.shift()%100;
    showCard("#p3",parseInt(deck_p[0]/100),deck_p[0]%100);  field_p_nums[3] = deck_p.shift()%100;

    //1000ms後に中央にカードを出す
    setTimeout(function(){
                showCard("#c0",parseInt(deck_e[0]/100),deck_e[0]%100);
                showCard("#c1",parseInt(deck_p[0]/100),deck_p[0]%100);
                field_c_nums[0] = deck_e.shift()%100;
                field_c_nums[1] = deck_p.shift()%100;

                $("#p_deck").click(function(){
                    setTimeout(function(){
                                showCard("#c0",parseInt(deck_e[0]/100),deck_e[0]%100);
                                showCard("#c1",parseInt(deck_p[0]/100),deck_p[0]%100);
                                field_c_nums[0] = deck_e.shift()%100;
                                field_c_nums[1] = deck_p.shift()%100;
                    },1000);
                });

    },1000);

    $("#p0 .card").draggable({stop:function(evt,ui){
            if(mod13(field_c_nums[0],field_c_nums[1]).indexOf(field_p_nums[0]) != -1){
                x0 = $("#c0").position().left;
                y0 = $("#c0").position().top;
                x1 = $("#c1").position().left;
                y1 = $("#c1").position().top;

                x = $("#p0").position().left + $("#p0 .card").position().left;
                y = $("#p0").position().top + $("#p0 .card").position().top;

                if(((x-x0)*(x-x0) + (y-y0)*(y-y0)) < 100*100){
                    moveCard("#p0","#c0");
                    field_c_nums[0] = field_p_nums[0];
                }else if(((x-x1)*(x-x1) + (y-y1)*(y-y1)) < 100*100){
                    moveCard("#p0","#c1");
                    field_c_nums[1] = field_p_nums[0];
                }else{
                    console.log(ui.position.top);
                    $("#p0 .card").animate({top:0,left:0},"fast");
                }

            }else{
                $("#p0 .card").animate({top:0,left:0},"fast");
            }
        }
    });
    $("#p1 .card").draggable({stop:function(evt,ui){
            if(mod13(field_c_nums[0],field_c_nums[1]).indexOf(field_p_nums[1]) != -1){
                x0 = $("#c0").position().left;
                y0 = $("#c0").position().top;
                x1 = $("#c1").position().left;
                y1 = $("#c1").position().top;

                x = $("#p1").position().left + $("#p1 .card").position().left;
                y = $("#p1").position().top + $("#p1 .card").position().top;

                if(((x-x0)*(x-x0) + (y-y0)*(y-y0)) < 100*100){
                    moveCard("#p1","#c0");
                    field_c_nums[0] = field_p_nums[1];
                }else if(((x-x1)*(x-x1) + (y-y1)*(y-y1)) < 100*100){
                    moveCard("#p1","#c1");
                    field_c_nums[1] = field_p_nums[1];
                }else{
                    console.log(ui.position.top);
                    $("#p1 .card").animate({top:0,left:0},"fast");
                }

            }else{
                $("#p1 .card").animate({top:0,left:0},"fast");
            }
        }
    });
    $("#p2 .card").draggable({stop:function(evt,ui){
            if(mod13(field_c_nums[0],field_c_nums[1]).indexOf(field_p_nums[2]) != -1){
                x0 = $("#c0").position().left;
                y0 = $("#c0").position().top;
                x1 = $("#c1").position().left;
                y1 = $("#c1").position().top;

                x = $("#p2").position().left + $("#p2 .card").position().left;
                y = $("#p2").position().top + $("#p2 .card").position().top;

                if(((x-x0)*(x-x0) + (y-y0)*(y-y0)) < 100*100){
                    moveCard("#p2","#c0");
                    field_c_nums[0] = field_p_nums[2];
                }else if(((x-x1)*(x-x1) + (y-y1)*(y-y1)) < 100*100){
                    moveCard("#p2","#c1");
                    field_c_nums[1] = field_p_nums[2];
                }else{
                    console.log(ui.position.top);
                    $("#p2 .card").animate({top:0,left:0},"fast");
                }

            }else{
                $("#p2 .card").animate({top:0,left:0},"fast");
            }
        }
    });
    $("#p3 .card").draggable({stop:function(evt,ui){
            if(mod13(field_c_nums[0],field_c_nums[1]).indexOf(field_p_nums[3]) != -1){
                x0 = $("#c0").position().left;
                y0 = $("#c0").position().top;
                x1 = $("#c1").position().left;
                y1 = $("#c1").position().top;

                x = $("#p3").position().left + $("#p3 .card").position().left;
                y = $("#p3").position().top + $("#p3 .card").position().top;

                if(((x-x0)*(x-x0) + (y-y0)*(y-y0)) < 100*100){
                    moveCard("#p3","#c0");
                    field_c_nums[0] = field_p_nums[3];
                }else if(((x-x1)*(x-x1) + (y-y1)*(y-y1)) < 100*100){
                    moveCard("#p3","#c1");
                    field_c_nums[1] = field_p_nums[3];
                }else{
                    console.log(ui.position.top);
                    $("#p3 .card").animate({top:0,left:0},"fast");
                }

            }else{
                $("#p3 .card").animate({top:0,left:0},"fast");
            }
        }
    });

});

Array.prototype.shuffle = function() {
    var i = this.length;
    while(i){
        var j = Math.floor(Math.random()*i);
        var t = this[--i];
        this[i] = this[j];
        this[j] = t;
    }
    return this;
}

function mod13(x,y){

    function rev(x){
        switch(x){
            case 1:
                return 1;
            case 2:
                return 7;
            case 3:
                return 9;
            case 4:
                return 10;
            case 5:
                return 8;
            case 6:
                return 11;
            case 7:
                return 2;
            case 8:
                return 5;
            case 9:
                return 3;
            case 10:
                return 4;
            case 11:
                return 6;
            case 12:
                return 12;
        }
    }

    sum = (x + y)%13;
    diff_a = (x - y + 13)%13;
    diff_b = (y - x + 13)%13;
    pro = (x*y)%13;
    if (y != 13){
        div_a = (x * rev(y))%13;
    }else{
        div_a = 0
    }
    if (x != 13){
        div_b = (y * rev(x))%13;
    }else{
        div_b = 0
    }

    return [sum,diff_a,diff_b,pro,div_a,div_b];
}

function showCard(id,mark,num){
    console.log(mark,num)
    if(isNaN(mark)){
        alert("game finished!");
    }
    $(id).append("<div class=\"card\"></div>");
    if((0 <= mark <=3) && (1<= num <= 13)){
        x = 72 - 72*(num);
        y = -0 - 96*mark;
        $(id+" .card").css("background-position",String(x)+ "px " + String(y)+"px");
        return true;
    }else{
        return false;
    }
}

function moveCard(from,to){
    pos_from = $(from).position();
    pos_to = $(to).position();
    //div要素の中身なので、親に対する相対位置で移動
    $(from + " .card").animate({top:pos_to.top-pos_from.top,left:pos_to.left-pos_from.left},
            "fast",
            "swing",
            function(){
                //行き先のカードを消す
                $(to+" .card").remove();
                //新たな親の中に入るので相対位置を0,0にした後、移動。
                $(from+" .card").css("top",0).css("left",0).appendTo(to);
                //カードをめくる
                showCard(from,parseInt(deck_p[0]/100),deck_p[0]%100);  field_p_nums[parseInt(from.substring(2))] = deck_p.shift()%100;
                $(from+" .card").draggable({stop:function(evt,ui){
                        if(mod13(field_c_nums[0],field_c_nums[1]).indexOf(field_p_nums[parseInt(from.substring(2))]) != -1){
                            x0 = $("#c0").position().left;
                            y0 = $("#c0").position().top;
                            x1 = $("#c1").position().left;
                            y1 = $("#c1").position().top;

                            x = $(from).position().left + $(from+" .card").position().left;
                            y = $(from).position().top + $(from+" .card").position().top;

                            if(((x-x0)*(x-x0) + (y-y0)*(y-y0)) < 100*100){
                                moveCard(from,"#c0");
                                field_c_nums[0] = field_p_nums[parseInt(from.substring(2))];
                            }else if(((x-x1)*(x-x1) + (y-y1)*(y-y1)) < 100*100){
                                moveCard(from,"#c1");
                                field_c_nums[1] = field_p_nums[parseInt(from.substring(2))];
                            }else{
                                console.log(ui.position.top);
                                $(from+" .card").animate({top:0,left:0},"fast");
                            }

                        }else{
                            $(from+" .card").animate({top:0,left:0},"fast");
                        }
                    }
                });
            }
    );
}
