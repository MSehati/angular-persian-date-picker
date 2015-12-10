Angular Persian Date Picker
======================
angular persian date picker is a directive that let irainian users select persian date from calender.

See demo:
http://jsbin.com/kodayaguza/edit?html,output

Installation
------------
this package can be installed by bower

bower install angular-persian-date-picker

Usage
-----

* Refrence to below files after angular,bootstrap,font awesome and bootbox 
````html 
<link rel="stylesheet" href="bower_component/angularPersianDate/dist/PersianDatePicker.min.css">
<script src="bower_component/angularPersianDate/dist/PersianDatePicker.js"></script>
````

* Include module 'PersianDatePickerApp' in your app/module
````javascript
var app =  angular.module('ExampleApp', ['PersianDatePickerApp']);
````

* Use directive in html page
````html 
<persian-date-picker ng-model="obj.persianDate" ></persian-date-picker>
````

About
-----
* this directive use a jquery persian date pickert created by Rahmat Rezaei (Rahmat.Rezaei@yahoo.com).
* this directive is created by Mohsen Mahmodi Hashemi.

