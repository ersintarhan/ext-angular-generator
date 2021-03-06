import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.toolbar.Breadcrumb
export class breadcrumbMetaData {
	public static XTYPE: string = 'breadcrumb';
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
		'buttonUI',
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
		'displayField',
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
		'overflowHandler',
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
		'selection',
		'session',
		'shadow',
		'shadowOffset',
		'shareableName',
		'shim',
		'showIcons',
		'showMenuIcons',
		'shrinkWrap',
		'stateEvents',
		'stateful',
		'stateId',
		'store',
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
		'useSplitButtons',
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
		{name:'activate',parameters:'breadcrumb'},
		{name:'add',parameters:'breadcrumb,component,index'},
		{name:'added',parameters:'breadcrumb,container,pos'},
		{name:'afterlayout',parameters:'breadcrumb,layout'},
		{name:'afterlayoutanimation',parameters:'breadcrumb'},
		{name:'afterrender',parameters:'breadcrumb'},
		{name:'beforeactivate',parameters:'breadcrumb'},
		{name:'beforeadd',parameters:'breadcrumb,component,index'},
		{name:'beforedeactivate',parameters:'breadcrumb'},
		{name:'beforedestroy',parameters:'breadcrumb'},
		{name:'beforehide',parameters:'breadcrumb'},
		{name:'beforeremove',parameters:'breadcrumb,component'},
		{name:'beforerender',parameters:'breadcrumb'},
		{name:'beforeshow',parameters:'breadcrumb'},
		{name:'beforestaterestore',parameters:'breadcrumb,state'},
		{name:'beforestatesave',parameters:'breadcrumb,state'},
		{name:'blur',parameters:'breadcrumb,event'},
		{name:'boxready',parameters:'breadcrumb,width,height'},
		{name:'change',parameters:'breadcrumb,node,prevNode'},
		{name:'childmove',parameters:'breadcrumb,component,prevIndex,newIndex'},
		{name:'deactivate',parameters:'breadcrumb'},
		{name:'destroy',parameters:'breadcrumb'},
		{name:'disable',parameters:'breadcrumb'},
		{name:'enable',parameters:'breadcrumb'},
		{name:'focus',parameters:'breadcrumb,event'},
		{name:'focusenter',parameters:'breadcrumb,event'},
		{name:'focusleave',parameters:'breadcrumb,event'},
		{name:'hide',parameters:'breadcrumb'},
		{name:'move',parameters:'breadcrumb,x,y'},
		{name:'remove',parameters:'breadcrumb,component'},
		{name:'removed',parameters:'breadcrumb,ownerCt'},
		{name:'render',parameters:'breadcrumb'},
		{name:'resize',parameters:'breadcrumb,width,height,oldWidth,oldHeight'},
		{name:'selectionchange',parameters:'breadcrumb,node,prevNode'},
		{name:'show',parameters:'breadcrumb'},
		{name:'staterestore',parameters:'breadcrumb,state'},
		{name:'statesave',parameters:'breadcrumb,state'},
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
		'change',
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
		'selectionchange',
		'show',
		'staterestore',
		'statesave',
		'ready'
];
}
@Component({
  selector: breadcrumbMetaData.XTYPE,
	inputs: breadcrumbMetaData.INPUTNAMES,
	outputs: breadcrumbMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => breadcrumb)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class breadcrumb extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,breadcrumbMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,breadcrumbMetaData);}
}
