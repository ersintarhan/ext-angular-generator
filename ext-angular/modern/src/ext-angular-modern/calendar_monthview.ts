import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.view.Month
export class calendar_monthviewMetaData {
	public static XTYPE: string = 'calendar-monthview';
	public static INPUTNAMES: string[] = [
		'addForm',
		'addOnSelect',
		'allowSelection',
		'alwaysOnTop',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'axisLock',
		'bind',
		'border',
		'bottom',
		'centered',
		'cls',
		'compact',
		'compactOptions',
		'constrainAlign',
		'contentEl',
		'controller',
		'controlStoreRange',
		'data',
		'dayFormat',
		'defaultListenerScope',
		'disabled',
		'displayed',
		'docked',
		'draggable',
		'droppable',
		'editForm',
		'enterAnimation',
		'eventDefaults',
		'eventHandlers',
		'exitAnimation',
		'firstDayOfWeek',
		'flex',
		'floated',
		'focusCls',
		'fullscreen',
		'gestureNavigation',
		'header',
		'height',
		'hidden',
		'hideAnimation',
		'hideMode',
		'hideOnMaskTap',
		'html',
		'id',
		'instanceCls',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'left',
		'listeners',
		'margin',
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'modelValidation',
		'name',
		'nameable',
		'overflowText',
		'padding',
		'plugins',
		'publishes',
		'record',
		'reference',
		'relative',
		'renderTo',
		'right',
		'ripple',
		'scrollable',
		'session',
		'shadow',
		'shareableName',
		'shim',
		'showAnimation',
		'showOverflow',
		'store',
		'style',
		'tabIndex',
		'timezoneOffset',
		'toFrontOnShow',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
		'translationMethod',
		'twoWayBindable',
		'ui',
		'userCls',
		'value',
		'viewModel',
		'visibleDays',
		'visibleWeeks',
		'weekendDays',
		'weight',
		'width',
		'x',
		'xtype',
		'y',
		'zIndex',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'added',parameters:'calendar-monthview,container,index'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeeventadd',parameters:'calendar-monthview,context'},
		{name:'beforeeventdragstart',parameters:'calendar-monthview,context'},
		{name:'beforeeventedit',parameters:'calendar-monthview,context'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'calendar-monthview'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'calendar-monthview'},
		{name:'beforetofront',parameters:'calendar-monthview'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'calendar-monthview,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'calendar-monthview'},
		{name:'eventadd',parameters:'calendar-monthview,context'},
		{name:'eventdrop',parameters:'calendar-monthview,context'},
		{name:'eventedit',parameters:'calendar-monthview,context'},
		{name:'eventtap',parameters:'calendar-monthview,context'},
		{name:'floatingchange',parameters:'calendar-monthview,positioned'},
		{name:'focus',parameters:'calendar-monthview,event'},
		{name:'focusenter',parameters:'calendar-monthview,event'},
		{name:'focusleave',parameters:'calendar-monthview,event'},
		{name:'fullscreen',parameters:'calendar-monthview'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'calendar-monthview'},
		{name:'initialize',parameters:'calendar-monthview'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'moved',parameters:'calendar-monthview,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'calendar-monthview,positioned'},
		{name:'removed',parameters:'calendar-monthview,container,index'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'select',parameters:'calendar-monthview,context'},
		{name:'selectrange',parameters:'calendar-monthview,context'},
		{name:'show',parameters:'calendar-monthview'},
		{name:'tofront',parameters:'calendar-monthview'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'calendar-monthview,newData'},
		{name:'validateeventadd',parameters:'calendar-monthview,context'},
		{name:'validateeventdrop',parameters:'calendar-monthview,context'},
		{name:'validateeventedit',parameters:'calendar-monthview,context'},
		{name:'valuechange',parameters:'calendar-monthview,context'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'added',
		'beforebottomchange',
		'beforecenteredchange',
		'beforedisabledchange',
		'beforedockedchange',
		'beforeeventadd',
		'beforeeventdragstart',
		'beforeeventedit',
		'beforeheightchange',
		'beforehiddenchange',
		'beforehide',
		'beforeleftchange',
		'beforemaxHeightchange',
		'beforemaxWidthchange',
		'beforeminHeightchange',
		'beforeminWidthchange',
		'beforeorientationchange',
		'beforerightchange',
		'beforescrollablechange',
		'beforeshow',
		'beforetofront',
		'beforetopchange',
		'beforewidthchange',
		'blur',
		'bottomchange',
		'centeredchange',
		'destroy',
		'disabledchange',
		'dockedchange',
		'erased',
		'eventadd',
		'eventdrop',
		'eventedit',
		'eventtap',
		'floatingchange',
		'focus',
		'focusenter',
		'focusleave',
		'fullscreen',
		'heightchange',
		'hiddenchange',
		'hide',
		'initialize',
		'leftchange',
		'maxHeightchange',
		'maxWidthchange',
		'minHeightchange',
		'minWidthchange',
		'moved',
		'orientationchange',
		'painted',
		'positionedchange',
		'removed',
		'resize',
		'rightchange',
		'scrollablechange',
		'select',
		'selectrange',
		'show',
		'tofront',
		'topchange',
		'updatedata',
		'validateeventadd',
		'validateeventdrop',
		'validateeventedit',
		'valuechange',
		'widthchange',
		'ready'
];
}
@Component({
  selector: calendar_monthviewMetaData.XTYPE,
	inputs: calendar_monthviewMetaData.INPUTNAMES,
	outputs: calendar_monthviewMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_monthview)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar_monthview extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_monthviewMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_monthviewMetaData);}
}
