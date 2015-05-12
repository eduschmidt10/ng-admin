/*global describe,it,expect,$$,element,browser,by*/
describe('ListView', function () {
    'use strict';

    var listUrl;

    beforeEach(function() {
        listUrl = encodeURI(browser.baseUrl + '/#/comments/list?search={"post_id":"9"}&page=1');
        browser.get(listUrl);
    });

    describe('ma-list-button', function () {
        it('should restore the list with filter when used from edit', function () {
            browser.executeScript('window.scrollTo(810, 481)').then(function () {
                $$('ma-edit-button a').then(function (elements) {
                    expect(elements[0].getText()).toBe(' Edit');
                    elements[0].click();
                    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/#/comments/edit/2');
                    $$('ma-list-button a').then(function (elements) {
                        elements[0].click();
                        expect(browser.getCurrentUrl()).toBe(listUrl);
                    });
                });
            });
        });

        it('should restore the list with filter when used from delete', function () {
            browser.get(listUrl);
            browser.executeScript('window.scrollTo(810, 481)').then(function () {

                $$('ma-delete-button a').then(function (elements) {
                    expect(elements[0].getText()).toBe(' Delete');
                    elements[0].click();
                    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/#/comments/delete/2');
                    $$('button.btn-default').then(function (elements) {
                        elements[0].click();
                        expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/#/comments/edit/2');

                        $$('ma-list-button a').then(function (elements) {
                            elements[0].click();
                            expect(browser.getCurrentUrl()).toBe(listUrl);
                        });
                    });
                });
            });
        });
    });

});
