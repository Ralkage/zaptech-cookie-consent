'use strict';

System.register('zaptech/cookie-consent/main', ['flarum/app', 'flarum/extend', 'flarum/components/PermissionGrid', 'flarum/components/Page'], function (_export, _context) {
    "use strict";

    var app, extend, PermissionGrid, Page;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsPermissionGrid) {
            PermissionGrid = _flarumComponentsPermissionGrid.default;
        }, function (_flarumComponentsPage) {
            Page = _flarumComponentsPage.default;
        }],
        execute: function () {

            app.initializers.add('zaptech-cookie-consent', function () {
                extend(Page.prototype, 'init', function () {
                    var ctext, btext, blink, lrntext, bcolor, bcolor1, bcolor2, bcolor3, fbcolor, fbcolor1;
                    ctext = app.forum.attribute("cookie-consent.ctext");
                    btext = app.forum.attribute("cookie-consent.btext");
                    blink = app.forum.attribute("cookie-consent.blink");
                    lrntext = app.forum.attribute("cookie-consent.lrntext");
                    bcolor = app.forum.attribute("cookie-consent.bcolor");
                    bcolor1 = app.forum.attribute("cookie-consent.bcolor1");
                    bcolor2 = app.forum.attribute("cookie-consent.bcolor2");
                    bcolor3 = app.forum.attribute("cookie-consent.bcolor3");
                    if (bcolor3 = 0) {
                        fbcolor = '#000000';
                        fbcolor1 = '#ffffff';
                    } else if (bcolor3 = 1) {
                        fbcolor = '#ffffff';
                    };
                    $('head').prepend('<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css"/><script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js"></script><script>window.addEventListener("load", function(){window.cookieconsent.initialise({"palette":{"popup":{"background": "' + fbcolor + '"}, "button":{"background": "' + fbcolor + '"}}, "theme": "classic", "content":{"message": "' + ctext + '", "dismiss": "' + btext + '", "link": "' + lrntext + '", "href": "' + blink + '"}})});</script>');
                    var toppadding = Number($('#cookieconsent').height()) + 52;
                });
            });
        }
    };
});