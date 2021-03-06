import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.form.FieldContainer
export class fieldcontainerMetaData {
	public static XTYPE: string = 'fieldcontainer';
	public static INPUTNAMES: string[] = [
		'actions',
		'activeChildTabIndex',
		'activeCounter',
		'activeError',
		'activeErrorsTpl',
		'activeItem',
		'afterBodyEl',
		'afterLabelTextTpl',
		'afterLabelTpl',
		'afterSubTpl',
		'alignOnScroll',
		'alignTarget',
		'allowFocusingDisabledChildren',
		'alwaysOnTop',
		'anchor',
		'anchorSize',
		'animateShadow',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaErrorText',
		'ariaHelp',
		'ariaLabel',
		'ariaLabelledBy',
		'autoDestroy',
		'autoEl',
		'autoFitErrors',
		'autoRender',
		'autoScroll',
		'autoShow',
		'baseBodyCls',
		'baseCls',
		'beforeBodyEl',
		'beforeLabelTextTpl',
		'beforeLabelTpl',
		'beforeSubTpl',
		'bind',
		'border',
		'bubbleEvents',
		'childEls',
		'cls',
		'columnWidth',
		'combineErrors',
		'combineLabels',
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
		'errorMsgCls',
		'fieldBodyCls',
		'fieldDefaults',
		'fieldLabel',
		'fixed',
		'flex',
		'floating',
		'focusableContainer',
		'focusCls',
		'focusOnToFront',
		'formBind',
		'formItemCls',
		'frame',
		'height',
		'hidden',
		'hideEmptyLabel',
		'hideLabel',
		'hideMode',
		'html',
		'id',
		'inactiveChildTabIndex',
		'invalidCls',
		'itemId',
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'labelableRenderTpl',
		'labelAlign',
		'labelAttrTpl',
		'labelCls',
		'labelClsExtra',
		'labelConnector',
		'labelPad',
		'labelSeparator',
		'labelStyle',
		'labelWidth',
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
		'msgTarget',
		'nameable',
		'nameHolder',
		'overCls',
		'overflowX',
		'overflowY',
		'padding',
		'plugins',
		'preventMark',
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
		{name:'activate',parameters:'fieldcontainer'},
		{name:'add',parameters:'fieldcontainer,component,index'},
		{name:'added',parameters:'fieldcontainer,container,pos'},
		{name:'afterlayout',parameters:'fieldcontainer,layout'},
		{name:'afterlayoutanimation',parameters:'fieldcontainer'},
		{name:'afterrender',parameters:'fieldcontainer'},
		{name:'beforeactivate',parameters:'fieldcontainer'},
		{name:'beforeadd',parameters:'fieldcontainer,component,index'},
		{name:'beforedeactivate',parameters:'fieldcontainer'},
		{name:'beforedestroy',parameters:'fieldcontainer'},
		{name:'beforehide',parameters:'fieldcontainer'},
		{name:'beforeremove',parameters:'fieldcontainer,component'},
		{name:'beforerender',parameters:'fieldcontainer'},
		{name:'beforeshow',parameters:'fieldcontainer'},
		{name:'beforestaterestore',parameters:'fieldcontainer,state'},
		{name:'beforestatesave',parameters:'fieldcontainer,state'},
		{name:'blur',parameters:'fieldcontainer,event'},
		{name:'boxready',parameters:'fieldcontainer,width,height'},
		{name:'childmove',parameters:'fieldcontainer,component,prevIndex,newIndex'},
		{name:'deactivate',parameters:'fieldcontainer'},
		{name:'destroy',parameters:'fieldcontainer'},
		{name:'disable',parameters:'fieldcontainer'},
		{name:'enable',parameters:'fieldcontainer'},
		{name:'errorchange',parameters:'fieldcontainer,error'},
		{name:'fielderrorchange',parameters:'fieldcontainer,field,error'},
		{name:'fieldvaliditychange',parameters:'fieldcontainer,field,isValid'},
		{name:'focus',parameters:'fieldcontainer,event'},
		{name:'focusenter',parameters:'fieldcontainer,event'},
		{name:'focusleave',parameters:'fieldcontainer,event'},
		{name:'hide',parameters:'fieldcontainer'},
		{name:'move',parameters:'fieldcontainer,x,y'},
		{name:'remove',parameters:'fieldcontainer,component'},
		{name:'removed',parameters:'fieldcontainer,ownerCt'},
		{name:'render',parameters:'fieldcontainer'},
		{name:'resize',parameters:'fieldcontainer,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'fieldcontainer'},
		{name:'staterestore',parameters:'fieldcontainer,state'},
		{name:'statesave',parameters:'fieldcontainer,state'},
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
		'errorchange',
		'fielderrorchange',
		'fieldvaliditychange',
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
  selector: fieldcontainerMetaData.XTYPE,
	inputs: fieldcontainerMetaData.INPUTNAMES,
	outputs: fieldcontainerMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => fieldcontainer)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class fieldcontainer extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,fieldcontainerMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,fieldcontainerMetaData);}
}
