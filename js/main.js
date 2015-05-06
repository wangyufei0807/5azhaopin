/**
 * 脚本加载项
 * Created by Administrator on 15-3-31.
 */
requirejs.config({
    paths: {
        jquery: './lib/jquery-1.8.3.min',
        flexslider: './lib/jquery.flexslider-min'
    },
    shim: {
        'flexslider': ['jquery']
    }
});

require(['jquery','flexslider'], function ($,flexslider) {
    $(document).ready(function () {
        alert(11);
    })
});



