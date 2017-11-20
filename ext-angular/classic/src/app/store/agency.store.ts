declare var Ext: any;
import {ExtClass} from '../../ext-angular-classic/ExtClass';

export class AgencyStore extends ExtClass {
	constructor (createConfig?: any) {
		let className: any = 'AgencyStore';
		let extend: any = 'Ext.data.Store';
		//let extend: any = 'Ext.Button';
		let defineConfig: any = {
			autoLoad: true,
			proxy: {
				//type: 'jsonp',
				type: 'ajax',
				reader: {
					type: 'json',
					rootProperty: 'result'
				},
				//url: 'https://itdashboard.gov/api/v1/ITDB2/dataFeeds/agency?json=true'
				//url: 'data/agencyJsonP.json'
				url: 'assets/resources/app/data/agency.json'
			},
			fields: [
				{name: 'agencyName'},
				{name: 'agencyCode'},
				{name: 'agencyAbbreviation'},
				{name: 'agencyType'}
			],
			filters: [
				function(item) {
					return item.data.agencyType == '1-CFO Act';
				}
			]
		};
		super(className, extend, defineConfig, createConfig);

		//super.sayHi()
	}

	// getX() {
	// 	//console.log(super)
	// 	return super.getX();
	// }
}