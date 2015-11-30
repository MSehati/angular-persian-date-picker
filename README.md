Angular Persian Date Picker
======================
angular persian date picker is a directive that let irainian users select persian date from calender.

See demo:

Installation
------------
this package can be installed by bower

bower install angular-persian-date-picker

Usage
-----

* Refrence to these files after angular,bootstrap,font awesome and bootbox (minified css and js files will be added to this package soon)
````html 
<link rel="stylesheet" href="bower_component/angularPersianDate/style/PersianDatePicker.min.css">
<link rel="stylesheet" href="bower_component/angularPersianDate/style/rightPersianDatePicker.css">
<script src="bower_component/angularPersianDate/src/jalali.js"></script>
<script src="bower_component/angularPersianDate/src/PersianDatePicker.js"></script>
<script src="bower_component/angularPersianDate/src/PersianDateDirective.js"></script>
````

* Include module 'PersianDatePickerApp' in your app/module
````javascript
var app =  angular.module('ExampleApp', ['PersianDatePickerApp']);
````

* Use directive in html page
````html 
<persian-date-picker ng-model="obj.persianDate" ></persian-date-picker>
````
