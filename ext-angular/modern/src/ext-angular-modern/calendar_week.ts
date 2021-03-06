import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.panel.Week
export class calendar_weekMetaData {
	public static XTYPE: string = 'calendar-week';
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
		'firstDayOfWeek',
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
		'value',
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
		{name:'activate',parameters:'newActiveItem,calendar-week,oldActiveItem'},
		{name:'activeItemchange',parameters:'sender,value,oldValue'},
		{name:'add',parameters:'calendar-week,item,index'},
		{name:'added',parameters:'calendar-week,container,index'},
		{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecollapse',parameters:'calendar-week'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeeventadd',parameters:'calendar-week,context'},
		{name:'beforeeventdragstart',parameters:'calendar-week,context'},
		{name:'beforeeventedit',parameters:'calendar-week,context'},
		{name:'beforeeventresizestart',parameters:'calendar-week,context'},
		{name:'beforeexpand',parameters:'calendar-week'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'calendar-week'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeresizedragstart',parameters:'calendar-week,context'},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'calendar-week'},
		{name:'beforetofront',parameters:'calendar-week'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'calendar-week,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'collapse',parameters:'calendar-week'},
		{name:'deactivate',parameters:'oldActiveItem,calendar-week,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'drawerhide',parameters:'calendar-week'},
		{name:'drawershow',parameters:'calendar-week'},
		{name:'erased',parameters:'calendar-week'},
		{name:'eventadd',parameters:'calendar-week,context'},
		{name:'eventdrop',parameters:'calendar-week,context'},
		{name:'eventedit',parameters:'calendar-week,context'},
		{name:'eventresize',parameters:'calendar-week,context'},
		{name:'eventtap',parameters:'calendar-week,context'},
		{name:'expand',parameters:'calendar-week'},
		{name:'floatingchange',parameters:'calendar-week,positioned'},
		{name:'focus',parameters:'calendar-week,event'},
		{name:'focusenter',parameters:'calendar-week,event'},
		{name:'focusleave',parameters:'calendar-week,event'},
		{name:'fullscreen',parameters:'calendar-week'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'calendar-week'},
		{name:'initialize',parameters:'calendar-week'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'move',parameters:'calendar-week,item,toIndex,fromIndex'},
		{name:'moved',parameters:'calendar-week,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'calendar-week,positioned'},
		{name:'remove',parameters:'calendar-week,item,index'},
		{name:'removed',parameters:'calendar-week,container,index'},
		{name:'renderedchange',parameters:'calendar-week,item,rendered'},
		{name:'resize',parameters:'element,info'},
		{name:'resizedrag',parameters:'calendar-week,context'},
		{name:'resizedragcancel',parameters:'calendar-week,context'},
		{name:'resizedragend',parameters:'calendar-week,context'},
		{name:'resizedragstart',parameters:'calendar-week,context'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'show',parameters:'calendar-week'},
		{name:'tofront',parameters:'calendar-week'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'calendar-week,newData'},
		{name:'validateeventadd',parameters:'calendar-week,context'},
		{name:'validateeventdrop',parameters:'calendar-week,context'},
		{name:'validateeventedit',parameters:'calendar-week,context'},
		{name:'validateeventresize',parameters:'calendar-week,context'},
		{name:'valuechange',parameters:'calendar-week,context'},
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
  selector: calendar_weekMetaData.XTYPE,
	inputs: calendar_weekMetaData.INPUTNAMES,
	outputs: calendar_weekMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_week)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar_week extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_weekMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_weekMetaData);}
}
