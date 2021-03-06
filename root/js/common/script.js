$(function ()
{

    /* humberger menu
-------------------------------------------------------------------- */
    function addFixed()
    {
        scrollpos = $(window).scrollTop();
        $('body').addClass('is-fix').css({
            'top': -scrollpos
        });
    }

    function removeFixed()
    {
        $('body').removeClass('is-fix').css({
            'top': 0
        });
        window.scrollTo(0, scrollpos);
    }

    // hamburger click
    $('.hamburger').on('click', function ()
    {
        if (!$('body').is('.is-fix'))
        {
            $('.mark').addClass('is-active');
            addFixed();
        } else
        {
            $('.mark').removeClass('is-active');
            $('.sNav').removeClass('is-active');
            removeFixed();
        }

        return false;
    });

    // globalnav__bg click
    $('.globalNavSP__bg').on('click', function ()
    {
        $('.mark').removeClass('is-active');
        removeFixed();
    });

/* ScrollTop
-------------------------------------------------------------------- */
    $('.js-scrollTopTrigger').on('click', function ()
    {
        $('body, html').animate({ scrollTop: 0 }, 400);
        return false;
    });


/* :hover invalid, when use touchdevise
-------------------------------------------------------------------- */
    var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

    if (touch)
    {
        try
        {
            for (var si in document.styleSheets)
            {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;

                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--)
                {
                    if (!styleSheet.rules[ri].selectorText) continue;

                    if (styleSheet.rules[ri].selectorText.match(':hover'))
                    {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) { }
    }


    /* fadeIn
-------------------------------------------------------------------- */
    $(window).on('load scroll', function ()
    {

        var box = $('.fadeIn');
        var animated = 'animated';

        box.each(function ()
        {

            var boxOffset = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
            var wh = $(window).height();

            //画面内のどの位置で処理を実行するかで「100」の値を変更
            if (scrollPos > boxOffset - wh + 50)
            {
                $(this).addClass(animated);
            }
        });

    });


});


