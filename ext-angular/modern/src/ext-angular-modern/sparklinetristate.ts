import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.sparkline.TriState
export class sparklinetristateMetaData {
	public static XTYPE: string = 'sparklinetristate';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'axisLock',
		'barSpacing',
		'barWidth',
		'bind',
		'border',
		'bottom',
		'centered',
		'cls',
		'colorMap',
		'constrainAlign',
		'contentEl',
		'controller',
		'data',
		'defaultListenerScope',
		'defaultPixelsPerValue',
		'disabled',
		'disableInteraction',
		'disableTooltips',
		'displayed',
		'docked',
		'draggable',
		'enableTagOptions',
		'enterAnimation',
		'eventHandlers',
		'exitAnimation',
		'flex',
		'floated',
		'focusCls',
		'fullscreen',
		'height',
		'hidden',
		'hideAnimation',
		'hideMode',
		'hideOnMaskTap',
		'highlightColor',
		'highlightLighten',
		'html',
		'id',
		'instanceCls',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'left',
		'lineColor',
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
		'negBarColor',
		'padding',
		'plugins',
		'posBarColor',
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
		'style',
		'tabIndex',
		'tipTpl',
		'toFrontOnShow',
		'tooltip',
		'tooltipPrefix',
		'tooltipSkipNull',
		'tooltipSuffix',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
		'translationMethod',
		'twoWayBindable',
		'ui',
		'userCls',
		'values',
		'viewModel',
		'weight',
		'width',
		'x',
		'xtype',
		'y',
		'zeroBarColor',
		'zIndex',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'added',parameters:'sparklinetristate,container,index'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'sparklinetristate'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'sparklinetristate'},
		{name:'beforetofront',parameters:'sparklinetristate'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'sparklinetristate,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'sparklinetristate'},
		{name:'floatingchange',parameters:'sparklinetristate,positioned'},
		{name:'focus',parameters:'sparklinetristate,event'},
		{name:'focusenter',parameters:'sparklinetristate,event'},
		{name:'focusleave',parameters:'sparklinetristate,event'},
		{name:'fullscreen',parameters:'sparklinetristate'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'sparklinetristate'},
		{name:'initialize',parameters:'sparklinetristate'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'moved',parameters:'sparklinetristate,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'sparklinetristate,positioned'},
		{name:'removed',parameters:'sparklinetristate,container,index'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'show',parameters:'sparklinetristate'},
		{name:'tofront',parameters:'sparklinetristate'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'sparklinetristate,newData'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'added',
		'beforebottomchange',
		'beforecenteredchange',
		'beforedisabledchange',
		'beforedockedchange',
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
		'show',
		'tofront',
		'topchange',
		'updatedata',
		'widthchange',
		'ready'
];
}
@Component({
  selector: sparklinetristateMetaData.XTYPE,
	inputs: sparklinetristateMetaData.INPUTNAMES,
	outputs: sparklinetristateMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => sparklinetristate)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class sparklinetristate extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,sparklinetristateMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,sparklinetristateMetaData);}
}