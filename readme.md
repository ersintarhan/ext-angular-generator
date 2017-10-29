# ext-angular-generator

## PreRequisites:

* Node.js - https://nodejs.org/  (choose current)
* Angular CLI - npm install -g @angular/cli@latest

## Instructions on how to get the sample running (run in terminal window)

* mkdir ext-angular
* cd ext-angular
* git clone https://github.com/mgusmano/ext-angular-generator
* npm install -g @angular/cli@latest
* ng new ExtAngularExample --minimal
* cp -R ext-angular-generator/files/ ExtAngularExample/src
* cd ExtAngularExample
* npm install --save bootstrap@latest
* copy the Ext JS 6.5.2 framework to a folder named src/assets/ext-6.5.2
	- get the Ext JS 6.5.2 framework from https://support.sencha.com
	- also get the Ext Premium Addons and copy them to the packages folder of the framework
	- only need the build and packages folders
* replace these sections in .angular-cli.json

```javascript
"styles": [
	"assets/ext-6.5.2/build/modern/theme-material/resources/theme-material-all.css",
	"assets/ext-6.5.2/packages/pivot/build/modern/material/resources/pivot-all.css",
	"assets/ext-6.5.2/packages/calendar/build/modern/material/resources/calendar-all.css",
	"assets/ext-6.5.2/build/packages/charts/modern/modern-material/resources/charts-all.css",
	"assets/ext-6.5.2/packages/d3/build/modern/material/resources/d3-all.css",
	"assets/ext-6.5.2/packages/exporter/build/modern/resources/exporter-all.css",
	"assets/ext-6.5.2/packages/pivot-d3/build/modern/material/resources/pivot-d3-all.css",
	"../node_modules/bootstrap/dist/css/bootstrap.css",
	"styles.css
],
"scripts": [
	"assets/ext-6.5.2/build/ext-modern-all.js",
	"assets/ext-6.5.2/packages/exporter/build/modern/exporter.js",
	"assets/ext-6.5.2/packages/pivot/build/modern/pivot.js",
	"assets/ext-6.5.2/packages/calendar/build/modern/calendar.js",
	"assets/ext-6.5.2/build/packages/charts/modern/charts.js",
	"assets/ext-6.5.2/packages/d3/build/modern/d3.js",
	"assets/ext-6.5.2/packages/pivot-d3/build/modern/pivot-d3.js",
	"assets/ext-6.5.2/packages/pivot-locale/${package.build.dir}/modern/pivot-locale-en.js"
],
```
* ng serve

to remove the compiler warning:
* edit ext-6.5.2/build/packages/charts/modern/modern-material/resources/charts-all.css
	replace  display:box  with  display:flex