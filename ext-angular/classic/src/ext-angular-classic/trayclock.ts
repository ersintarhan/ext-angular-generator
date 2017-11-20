import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.ux.desktop.TrayClock
export class trayclockMetaData {
	public static XTYPE: string = 'trayclock';
	public static INPUTNAMES: string[] = [
		'activeCounter',
		'alignOnScroll',
		'alignTarget',
		'alwaysOnTop',
		'anchor',
		'animateShadow',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'autoEl',
		'autoRender',
		'autoScroll',
		'autoShow',
		'baseCls',
		'bind',
		'border',
		'childEls',
		'cls',
		'columnWidth',
		'componentCls',
		'componentLayout',
		'constrain',
		'constraintInsets',
		'constrainTo',
		'contentEl',
		'controller',
		'data',
		'defaultAlign',
		'defaultListenerScope',
		'disabled',
		'disabledCls',
		'dock',
		'draggable',
		'fixed',
		'flex',
		'floating',
		'focusCls',
		'focusOnToFront',
		'formBind',
		'frame',
		'height',
		'hidden',
		'hideMode',
		'html',
		'id',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'liquidLayout',
		'listeners',
		'liveDrag',
		'loader',
		'margin',
		'maskDefaults',
		'maskElement',
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'modelValidation',
		'nameable',
		'overCls',
		'overflowText',
		'overflowX',
		'overflowY',
		'padding',
		'plugins',
		'publishes',
		'reference',
		'region',
		'renderConfig',
		'renderData',
		'renderSelectors',
		'renderTo',
		'renderTpl',
		'resizable',
		'resizeHandles',
		'saveDelay',
		'scrollable',
		'session',
		'shadow',
		'shadowOffset',
		'shareableName',
		'shim',
		'shrinkWrap',
		'stateEvents',
		'stateful',
		'stateId',
		'style',
		'tabIndex',
		'text',
		'toFrontOnShow',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'twoWayBindable',
		'ui',
		'uiCls',
		'userCls',
		'viewModel',
		'weight',
		'width',
		'xtype',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'activate',parameters:'trayclock'},
		{name:'added',parameters:'trayclock,container,pos'},
		{name:'afterlayoutanimation',parameters:'trayclock'},
		{name:'afterrender',parameters:'trayclock'},
		{name:'beforeactivate',parameters:'trayclock'},
		{name:'beforedeactivate',parameters:'trayclock'},
		{name:'beforedestroy',parameters:'trayclock'},
		{name:'beforehide',parameters:'trayclock'},
		{name:'beforerender',parameters:'trayclock'},
		{name:'beforeshow',parameters:'trayclock'},
		{name:'beforestaterestore',parameters:'trayclock,state'},
		{name:'beforestatesave',parameters:'trayclock,state'},
		{name:'blur',parameters:'trayclock,event'},
		{name:'boxready',parameters:'trayclock,width,height'},
		{name:'deactivate',parameters:'trayclock'},
		{name:'destroy',parameters:'trayclock'},
		{name:'disable',parameters:'trayclock'},
		{name:'enable',parameters:'trayclock'},
		{name:'focus',parameters:'trayclock,event'},
		{name:'focusenter',parameters:'trayclock,event'},
		{name:'focusleave',parameters:'trayclock,event'},
		{name:'hide',parameters:'trayclock'},
		{name:'move',parameters:'trayclock,x,y'},
		{name:'removed',parameters:'trayclock,ownerCt'},
		{name:'render',parameters:'trayclock'},
		{name:'resize',parameters:'trayclock,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'trayclock'},
		{name:'staterestore',parameters:'trayclock,state'},
		{name:'statesave',parameters:'trayclock,state'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
		'beforeactivate',
		'beforedeactivate',
		'beforedestroy',
		'beforehide',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'deactivate',
		'destroy',
		'disable',
		'enable',
		'focus',
		'focusenter',
		'focusleave',
		'hide',
		'move',
		'removed',
		'render',
		'resize',
		'show',
		'staterestore',
		'statesave',
		'ready'
];
}
@Component({
  selector: trayclockMetaData.XTYPE,
	inputs: trayclockMetaData.INPUTNAMES,
	outputs: trayclockMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => trayclock)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class trayclock extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,trayclockMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,trayclockMetaData);}
}