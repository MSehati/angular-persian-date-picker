
var persianDatePickerApp = angular.module('PersianDatePickerApp', []);
persianDatePickerApp.directive('persianDatePicker', function ($compile) {

    function link(scope, element, attrs) {

        var objClass = attrs.class.replace(/input-icon-left|input-icon-right|input-icon|span*/gi, '');

        if (!scope.placeHolder)
            scope.placeHolder = '';

        elm = element.find('input')[0];
        elm.id = element[0].id || 'persianDatePicker' + Math.floor((Math.random() * 100) + 1).toString();

        elm.type = 'text';

        elm.onchange = function (newValue) {
            try {
                if (typeof (newValue) == "object")
                    newValue = this.value;
                scope.$apply(function () {
                    scope.ngModel = newValue;
                });
            }
            catch (e) {
                alert(e);
            }
        };

       
        scope.persianDatePicker = function (textBoxEvent, today) {
            PersianDatePicker.Show(textBoxEvent.currentTarget, today);
        };

    }

    return {
        link: link,
        replace: true,
        scope: {
            ngModel: '=',
            placeHolder: '@?',
            ngDisabled:'=?'
        },
        restrict: 'E',
        template: "<div class='input-group form-group'><input type='text' class='form-control' ng-disabled='ngDisabled' ng-model='ngModel' autocomplete='off' ng-click='persianDatePicker($event);' placeholder='{{placeHolder}}' /> <span class='input-group-btn'> " +
                                                '<button class="btn btn-default" type="button" ng-disabled="ngDisabled" ><i class="fa fa-calendar"></i></button> </span></div>'
    };
});
