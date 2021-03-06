import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.panel.Day
export class calendar_dayMetaData {
	public static XTYPE: string = 'calendar-day';
	public static INPUTNAMES: string[] = [
		'activeChildTabIndex',
		'activeItem',
		'allowFocusingDisabledChildren',
		'alwaysOnTop',
		'anchor',
		'anchorPosition',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'autoDestroy',
		'autoSize',
		'axisLock',
		'bbar',
		'bind',
		'bodyBorder',
		'bodyPadding',
		'bodyStyle',
		'border',
		'bottom',
		'buttonAlign',
		'buttonDefaults',
		'buttons',
		'buttonToolbar',
		'cardSwitchAnimation',
		'centered',
		'closable',
		'closeAction',
		'closeToolText',
		'cls',
		'collapsed',
		'collapsible',
		'configExtractor',
		'constrainAlign',
		'contentEl',
		'control',
		'controller',
		'data',
		'dayHeader',
		'defaultFocus',
		'defaultListenerScope',
		'defaults',
		'defaultToolWeights',
		'defaultType',
		'disabled',
		'displayed',
		'docked',
		'draggable',
		'enterAnimation',
		'eventHandlers',
		'eventRelayers',
		'exitAnimation',
		'flex',
		'floated',
		'focusableContainer',
		'focusCls',
		'fullscreen',
		'header',
		'headerPosition',
		'height',
		'hidden',
		'hideAnimation',
		'hideMode',
		'hideOnMaskTap',
		'html',
		'icon',
		'iconAlign',
		'iconCls',
		'id',
		'inactiveChildTabIndex',
		'innerCls',
		'instanceCls',
		'itemId',
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'layout',
		'lbar',
		'left',
		'listeners',
		'manageBorders',
		'margin',
		'masked',
		'maxHeight',
		'maxWidth',
		'minButtonWidth',
		'minHeight',
		'minWidth',
		'modal',
		'modelValidation',
		'name',
		'nameable',
		'nameHolder',
		'padding',
		'plugins',
		'publishes',
		'rbar',
		'record',
		'reference',
		'referenceHolder',
		'relative',
		'renderTo',
		'resetFocusPosition',
		'resizable',
		'right',
		'ripple',
		'scrollable',
		'session',
		'shadow',
		'shareableName',
		'shim',
		'showAnimation',
		'standardButtons',
		'style',
		'tabIndex',
		'tbar',
		'title',
		'titleAlign',
		'toFrontOnShow',
		'toolDefaults',
		'tools',
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
		'view',
		'viewModel',
		'visibleDays',
		'weight',
		'weighted',
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
		{name:'activate',parameters:'newActiveItem,calendar-day,oldActiveItem'},
		{name:'activeItemchange',parameters:'sender,value,oldValue'},
		{name:'add',parameters:'calendar-day,item,index'},
		{name:'added',parameters:'calendar-day,container,index'},
		{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecollapse',parameters:'calendar-day'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeeventadd',parameters:'calendar-day,context'},
		{name:'beforeeventdragstart',parameters:'calendar-day,context'},
		{name:'beforeeventedit',parameters:'calendar-day,context'},
		{name:'beforeeventresizestart',parameters:'calendar-day,context'},
		{name:'beforeexpand',parameters:'calendar-day'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'calendar-day'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeresizedragstart',parameters:'calendar-day,context'},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'calendar-day'},
		{name:'beforetofront',parameters:'calendar-day'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'calendar-day,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'collapse',parameters:'calendar-day'},
		{name:'deactivate',parameters:'oldActiveItem,calendar-day,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'drawerhide',parameters:'calendar-day'},
		{name:'drawershow',parameters:'calendar-day'},
		{name:'erased',parameters:'calendar-day'},
		{name:'eventadd',parameters:'calendar-day,context'},
		{name:'eventdrop',parameters:'calendar-day,context'},
		{name:'eventedit',parameters:'calendar-day,context'},
		{name:'eventresize',parameters:'calendar-day,context'},
		{name:'eventtap',parameters:'calendar-day,context'},
		{name:'expand',parameters:'calendar-day'},
		{name:'floatingchange',parameters:'calendar-day,positioned'},
		{name:'focus',parameters:'calendar-day,event'},
		{name:'focusenter',parameters:'calendar-day,event'},
		{name:'focusleave',parameters:'calendar-day,event'},
		{name:'fullscreen',parameters:'calendar-day'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'calendar-day'},
		{name:'initialize',parameters:'calendar-day'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'move',parameters:'calendar-day,item,toIndex,fromIndex'},
		{name:'moved',parameters:'calendar-day,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'calendar-day,positioned'},
		{name:'remove',parameters:'calendar-day,item,index'},
		{name:'removed',parameters:'calendar-day,container,index'},
		{name:'renderedchange',parameters:'calendar-day,item,rendered'},
		{name:'resize',parameters:'element,info'},
		{name:'resizedrag',parameters:'calendar-day,context'},
		{name:'resizedragcancel',parameters:'calendar-day,context'},
		{name:'resizedragend',parameters:'calendar-day,context'},
		{name:'resizedragstart',parameters:'calendar-day,context'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'show',parameters:'calendar-day'},
		{name:'tofront',parameters:'calendar-day'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'calendar-day,newData'},
		{name:'validateeventadd',parameters:'calendar-day,context'},
		{name:'validateeventdrop',parameters:'calendar-day,context'},
		{name:'validateeventedit',parameters:'calendar-day,context'},
		{name:'validateeventresize',parameters:'calendar-day,context'},
		{name:'valuechange',parameters:'calendar-day,context'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'activeItemchange',
		'add',
		'added',
		'beforeactiveItemchange',
		'beforebottomchange',
		'beforecenteredchange',
		'beforecollapse',
		'beforedisabledchange',
		'beforedockedchange',
		'beforeeventadd',
		'beforeeventdragstart',
		'beforeeventedit',
		'beforeeventresizestart',
		'beforeexpand',
		'beforeheightchange',
		'beforehiddenchange',
		'beforehide',
		'beforeleftchange',
		'beforemaxHeightchange',
		'beforemaxWidthchange',
		'beforeminHeightchange',
		'beforeminWidthchange',
		'beforeorientationchange',
		'beforeresizedragstart',
		'beforerightchange',
		'beforescrollablechange',
		'beforeshow',
		'beforetofront',
		'beforetopchange',
		'beforewidthchange',
		'blur',
		'bottomchange',
		'centeredchange',
		'collapse',
		'deactivate',
		'destroy',
		'disabledchange',
		'dockedchange',
		'drawerhide',
		'drawershow',
		'erased',
		'eventadd',
		'eventdrop',
		'eventedit',
		'eventresize',
		'eventtap',
		'expand',
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
		'move',
		'moved',
		'orientationchange',
		'painted',
		'positionedchange',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'resizedrag',
		'resizedragcancel',
		'resizedragend',
		'resizedragstart',
		'rightchange',
		'scrollablechange',
		'show',
		'tofront',
		'topchange',
		'updatedata',
		'validateeventadd',
		'validateeventdrop',
		'validateeventedit',
		'validateeventresize',
		'valuechange',
		'widthchange',
		'ready'
];
}
@Component({
  selector: calendar_dayMetaData.XTYPE,
	inputs: calendar_dayMetaData.INPUTNAMES,
	outputs: calendar_dayMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_day)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar_day extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_dayMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_dayMetaData);}
}
