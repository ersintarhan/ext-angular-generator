import { Component } from '@angular/core';
//import { AgencyService } from '../../service/agency.service';

@Component({
	selector: 'heading',
	styleUrls: ['./heading.component.css'],
//	styles:[require('./header.component.css').toString()],
	templateUrl: 'heading.component.html',

	//selector: 'header',
	//styles: [``],
	//template: `<div>hi</div>`


})
export class HeadingComponent { 
	//public thePivotGrid: any;
	public objArray:any = [
		{name: 'All Agencies'}, 
		{name: 'Department of Agriculture'}, 
		{name: 'Department of Commerce'}, 
		{name: 'Department of the Interior'}, 
		{name: 'Department of Defense'},
		{name: 'Department of Homeland Security'},
	];

//	constructor(public agencyService: AgencyService) {}

	// readyPivotGrid(thePivotGrid) {
	// 	this.thePivotGrid = thePivotGrid;
	// }

	onSelect(value) {
		if (value == 'All Agencies') {
//			this.agencyService.getAgencyPortfolioStore().filter('agencyName','');
//			this.thePivotGrid.extjsObject.getStore().filter('agencyName','');
		} else {
//			this.agencyService.getAgencyPortfolioStore().filter('agencyName',value);
//			this.thePivotGrid.extjsObject.getStore().filter('agencyName',value);
		}
	}


}
