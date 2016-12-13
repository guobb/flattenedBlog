;$(function () {
    'use strict';
    var sidebar = $('#sidebar'), // 选择侧栏
        mask = $('.mask'), // 选择mask
        backButtom = $('.back-to-top'), // 选择返回菜单
        sidebar_trigger = $('#sidebar_trigger'); // 选择侧栏触发器

    function showSideber () { // 显示侧栏

        //console.log('222');
        mask.fadeIn(); // 显示mask
        sidebar.css('right', 0); // 调整侧栏相关的css
    }

    function hideSideber () { // 隐藏侧栏
        mask.fadeOut(); // 隐藏mask
        sidebar.css('right', -sidebar.width());
    }

    sidebar_trigger.on('click', showSideber); // 监听侧栏触发器
    mask.on('click', hideSideber); // 监听mask
    backButtom.on('click',function () {  // 监听返回按钮
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    $(window).on('scroll', function(){ // 监听window scroll事件
        // 如果滚动的部分高于窗口的高度...
        if($(window).scrollTop() > $(window).height()){
            // 显示返回数据
            backButtom.fadeIn();
            // 否则隐藏返回数据
        }else {
            backButtom.fadeOut();
        }
    });
    //阻止页面刷新回到顶部按钮显示
    $(window).trigger('scroll');
});