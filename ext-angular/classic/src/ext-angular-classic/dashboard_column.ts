import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.dashboard.Column
export class dashboard_columnMetaData {
	public static XTYPE: string = 'dashboard-column';
	public static INPUTNAMES: string[] = [
		'actions',
		'activeChildTabIndex',
		'activeCounter',
		'activeItem',
		'alignOnScroll',
		'alignTarget',
		'allowFocusingDisabledChildren',
		'alwaysOnTop',
		'anchor',
		'anchorSize',
		'animateShadow',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'autoDestroy',
		'autoEl',
		'autoRender',
		'autoScroll',
		'autoShow',
		'baseCls',
		'bind',
		'border',
		'bubbleEvents',
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
		'defaultFocus',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'detachOnRemove',
		'disabled',
		'disabledCls',
		'dock',
		'draggable',
		'fixed',
		'flex',
		'floating',
		'focusableContainer',
		'focusCls',
		'focusOnToFront',
		'formBind',
		'frame',
		'height',
		'hidden',
		'hideMode',
		'html',
		'id',
		'inactiveChildTabIndex',
		'itemId',
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'layout',
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
		'nameHolder',
		'overCls',
		'overflowX',
		'overflowY',
		'padding',
		'plugins',
		'publishes',
		'reference',
		'referenceHolder',
		'region',
		'renderConfig',
		'renderData',
		'renderSelectors',
		'renderTo',
		'renderTpl',
		'resetFocusPosition',
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
		'suspendLayout',
		'tabGuard',
		'tabIndex',
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
		{name:'activate',parameters:'dashboard-column'},
		{name:'add',parameters:'dashboard-column,component,index'},
		{name:'added',parameters:'dashboard-column,container,pos'},
		{name:'afterlayout',parameters:'dashboard-column,layout'},
		{name:'afterlayoutanimation',parameters:'dashboard-column'},
		{name:'afterrender',parameters:'dashboard-column'},
		{name:'beforeactivate',parameters:'dashboard-column'},
		{name:'beforeadd',parameters:'dashboard-column,component,index'},
		{name:'beforedeactivate',parameters:'dashboard-column'},
		{name:'beforedestroy',parameters:'dashboard-column'},
		{name:'beforehide',parameters:'dashboard-column'},
		{name:'beforeremove',parameters:'dashboard-column,component'},
		{name:'beforerender',parameters:'dashboard-column'},
		{name:'beforeshow',parameters:'dashboard-column'},
		{name:'beforestaterestore',parameters:'dashboard-column,state'},
		{name:'beforestatesave',parameters:'dashboard-column,state'},
		{name:'blur',parameters:'dashboard-column,event'},
		{name:'boxready',parameters:'dashboard-column,width,height'},
		{name:'childmove',parameters:'dashboard-column,component,prevIndex,newIndex'},
		{name:'deactivate',parameters:'dashboard-column'},
		{name:'destroy',parameters:'dashboard-column'},
		{name:'disable',parameters:'dashboard-column'},
		{name:'enable',parameters:'dashboard-column'},
		{name:'focus',parameters:'dashboard-column,event'},
		{name:'focusenter',parameters:'dashboard-column,event'},
		{name:'focusleave',parameters:'dashboard-column,event'},
		{name:'hide',parameters:'dashboard-column'},
		{name:'move',parameters:'dashboard-column,x,y'},
		{name:'remove',parameters:'dashboard-column,component'},
		{name:'removed',parameters:'dashboard-column,ownerCt'},
		{name:'render',parameters:'dashboard-column'},
		{name:'resize',parameters:'dashboard-column,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'dashboard-column'},
		{name:'staterestore',parameters:'dashboard-column,state'},
		{name:'statesave',parameters:'dashboard-column,state'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'afterlayout',
		'afterlayoutanimation',
		'afterrender',
		'beforeactivate',
		'beforeadd',
		'beforedeactivate',
		'beforedestroy',
		'beforehide',
		'beforeremove',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'childmove',
		'deactivate',
		'destroy',
		'disable',
		'enable',
		'focus',
		'focusenter',
		'focusleave',
		'hide',
		'move',
		'remove',
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
  selector: dashboard_columnMetaData.XTYPE,
	inputs: dashboard_columnMetaData.INPUTNAMES,
	outputs: dashboard_columnMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => dashboard_column)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class dashboard_column extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,dashboard_columnMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,dashboard_columnMetaData);}
}
