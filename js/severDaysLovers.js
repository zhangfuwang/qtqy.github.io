(function(glabal,undefined){

    var tools = {

        setFontSize:function(size){
            var oHtml = document.querySelector("html");
            var width = oHtml.getBoundingClientRect().width;
            oHtml.style.fontSize = width/size + "px";
        }

    }

    glabal.tools = tools;

})(window,undefined);

$("#data").mobiscroll().date({
    theme: "android-ics",
    lang: "zh",
    display: 'bottom',
    dateFormat: 'yy-mm-dd', //返回结果格式化为年月格式
    // wheels:[], 设置此属性可以只显示年月，此处演示，就用下面的onBeforeShow方法,另外也可以用treelist去实现
    //onBeforeShow: function (inst) { inst.settings.wheels[0].length>2?inst.settings.wheels[0].pop():null; }, //弹掉“日”滚轮
    headerText: function (valueText) { //自定义弹出框头部格式
        array = valueText.split('-');
        return array[0] + "年" + array[1] + "月" + array[2] + "日";
    },
    onSelect: function (valueText, inst) {
        $(this).find("#birthday").val(valueText);
        /*$.post("inc/person.org.php", {apart: "resume_base", birthday: valueText}, function (result) {
         if (result == 'ok') {
         $(this).find(".mbase-menu-txt").html(valueText);
         }
         else {
         error('网络繁忙，请您稍后再试');
         }
         });这是后端入库部分*/
    }
});
$("#sex").click(function () {
    var that = this;
    //console.log("1");
    $("#sex-list").mobiscroll().treelist({
        theme: "android-ics",
        lang: "zh",
        display: 'bottom',
        //inputClass: 'tmp',
        headerText: '请您选择',
        onSelect: function (valueText) {
            var m = $(this).find("li").eq(valueText).html();
            $("#sex-list_dummy").val(m).addClass("text-pink").r;
            //$("#grnder").val(" ");
            //$(" #gender ").val(m).next().css({"display":none});
            /*$.post("inc/person.org.php", {apart: "resume_base", sex: m}, function (result) {
             if (result == 'ok') {
             $(that).find(".mbase-menu-txt").html(m);
             }
             else {
             error('网络繁忙，请您稍后再试');
             }
             //});后端入库部分*/
        }
    });
    $("input[id^=sex-list]").focus();
});
$("#genderMatching").click(function () {
    var that = this;
    //console.log("1");
    $("#gender-list").mobiscroll().treelist({
        theme: "android-ics",
        lang: "zh",
        display: 'bottom',
        //inputClass: 'tmp',
        headerText: '请您选择',
        onSelect: function (valueText) {
            var m = $(this).find("li").eq(valueText).html();
            $("#gender-list_dummy").val(m).addClass("text-pink").prev().css({"display":"none"});;

        }
    });
    $("input[id^=gender-list]").focus();
});
$("#area").click(function () {
    var that = this;
    //console.log("1");
    $("#area-list").mobiscroll().treelist({
        theme: "android-ics",
        lang: "zh",
        display: 'bottom',
        //inputClass: 'tmp',
        headerText: '请您选择',
        onSelect: function (valueText) {
            var m = $(this).find("li").eq(valueText).html();
            $("#area-list_dummy").val(m).addClass("text-pink").prev().css({"display":"none"});;

        }
    });
    $("input[id^=area-list]").focus();
});
$("#ageMatching").click(function () {
    var that = this;
    //console.log("1");
    $("#age-list").mobiscroll().treelist({
        theme: "android-ics",
        lang: "zh",
        display: 'bottom',
        //inputClass: 'tmp',
        headerText: '请您选择',
        onSelect: function (valueText) {
            var m = $(this).find("li").eq(valueText).html();
            $("#age-list_dummy").val(m).addClass("text-pink").prev().css({"display":"none"});

        }
    });
    $("input[id^=age-list]").focus();
});
$("#current-area").click(function () {
    var that = this;
    console.log("1");
    $("#current-area-list").mobiscroll().treelist({
        theme: "android-ics",
        lang: "zh",
        display: 'bottom',
        inputClass: 'tmp',
        headerText: '请您选择',
        onSelect: function (valueText, inst) {
            console.log(valueText);
            var n = valueText.split(' ');
            var m1 = $(this).children("li").eq(n[0]).find("div").html();
            var m1_id = $(this).children("li").eq(n[0]).find("div").attr("data-value");
            var m2 = $(this).children("li").eq(n[0]).find("li").eq(n[1]).html();
            var m2_id = $(this).children("li").eq(n[0]).find("li").eq(n[1]).attr("data-value");
            console.log(m1);
            console.log(m2);
            console.log(m1_id);
            console.log(m2_id);
            $("#current-area-list_dummy")
            $("#current-area-list_dummy").val(m1+"  "+m2).addClass("text-pink").prev().css({"display":"none"});
            /*$.post("inc/person.org.php", {apart: "resume_base", current_area: m1+m2, current_areaPID: m1_id, current_areaCID: m2_id}, function (result) {
             if (result == 'ok') {
             $(that).find(".mbase-menu-txt").html(m1+m2);
             }
             else {
             error('网络繁忙，请您稍后再试');
             }
             });后端处理部分*/
        }
    });
    $("input[id^=current-area-list]").focus();
});
$("input").addClass("text-pink").css({"font-weight":400});
$("textarea").focus(function(){
    $(this).html(" ");
});