import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.d3.hierarchy.partition.Sunburst
export class d3_sunburstMetaData {
	public static XTYPE: string = 'd3-sunburst';
	public static INPUTNAMES: string[] = [
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
		'clipScene',
		'cls',
		'colorAxis',
		'componentCls',
		'constrainAlign',
		'contentEl',
		'controller',
		'data',
		'defaultListenerScope',
		'disabled',
		'displayed',
		'docked',
		'draggable',
		'enterAnimation',
		'eventHandlers',
		'exitAnimation',
		'expandEventName',
		'flex',
		'floated',
		'focusCls',
		'fullscreen',
		'height',
		'hidden',
		'hideAnimation',
		'hideMode',
		'hideOnMaskTap',
		'hierarchyCls',
		'html',
		'id',
		'instanceCls',
		'interactions',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'layout',
		'left',
		'linkKey',
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
		'nodeChildren',
		'nodeClass',
		'nodeKey',
		'nodeText',
		'nodeTransform',
		'nodeValue',
		'noParentValue',
		'noSizeLayout',
		'padding',
		'partitionCls',
		'plugins',
		'publishes',
		'record',
		'reference',
		'relative',
		'renderLinks',
		'renderTo',
		'right',
		'ripple',
		'rootVisible',
		'scrollable',
		'selectEventName',
		'selection',
		'session',
		'shadow',
		'shareableName',
		'shim',
		'showAnimation',
		'size',
		'sorter',
		'store',
		'style',
		'tabIndex',
		'textPadding',
		'toFrontOnShow',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'transitions',
		'translatable',
		'translationMethod',
		'twoWayBindable',
		'ui',
		'userCls',
		'viewModel',
		'weight',
		'width',
		'x',
		'xtype',
		'y',
		'zIndex',
		'zoomParentDotRadius',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'added',parameters:'d3-sunburst,container,index'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'d3-sunburst'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'d3-sunburst'},
		{name:'beforetofront',parameters:'d3-sunburst'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'d3-sunburst,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'d3-sunburst'},
		{name:'floatingchange',parameters:'d3-sunburst,positioned'},
		{name:'focus',parameters:'d3-sunburst,event'},
		{name:'focusenter',parameters:'d3-sunburst,event'},
		{name:'focusleave',parameters:'d3-sunburst,event'},
		{name:'fullscreen',parameters:'d3-sunburst'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'d3-sunburst'},
		{name:'initialize',parameters:'d3-sunburst'},
		{name:'layout',parameters:'component'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'moved',parameters:'d3-sunburst,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'d3-sunburst,positioned'},
		{name:'removed',parameters:'d3-sunburst,container,index'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'sceneresize',parameters:'component,scene,size'},
		{name:'scenesetup',parameters:'component,scene'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'show',parameters:'d3-sunburst'},
		{name:'tofront',parameters:'d3-sunburst'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'d3-sunburst,newData'},
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
		'layout',
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
		'sceneresize',
		'scenesetup',
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
  selector: d3_sunburstMetaData.XTYPE,
	inputs: d3_sunburstMetaData.INPUTNAMES,
	outputs: d3_sunburstMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => d3_sunburst)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class d3_sunburst extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,d3_sunburstMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,d3_sunburstMetaData);}
}