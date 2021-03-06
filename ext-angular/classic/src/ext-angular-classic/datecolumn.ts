import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.grid.column.Date
export class datecolumnMetaData {
	public static XTYPE: string = 'datecolumn';
	public static INPUTNAMES: string[] = [
		'actions',
		'activeChildTabIndex',
		'activeCounter',
		'activeItem',
		'align',
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
		'cellFocusable',
		'cellWrap',
		'childEls',
		'cls',
		'columns',
		'columnsText',
		'columnWidth',
		'componentCls',
		'componentLayout',
		'constrain',
		'constraintInsets',
		'constrainTo',
		'contentEl',
		'controller',
		'data',
		'dataIndex',
		'defaultAlign',
		'defaultFocus',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'defaultWidth',
		'detachOnRemove',
		'dirtyText',
		'disabled',
		'disabledCls',
		'dock',
		'draggable',
		'editor',
		'editRenderer',
		'emptyCellText',
		'enableColumnHide',
		'enableTextSelection',
		'exportRenderer',
		'exportStyle',
		'exportSummaryRenderer',
		'field',
		'fixed',
		'flex',
		'floating',
		'focusableContainer',
		'focusCls',
		'focusOnToFront',
		'format',
		'formatter',
		'formBind',
		'frame',
		'groupable',
		'header',
		'headerWrap',
		'height',
		'hidden',
		'hideable',
		'hideMode',
		'html',
		'id',
		'ignoreExport',
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
		'lockable',
		'locked',
		'margin',
		'maskDefaults',
		'maskElement',
		'maxHeight',
		'maxWidth',
		'menuDisabled',
		'menuText',
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
		'producesHTML',
		'publishes',
		'reference',
		'referenceHolder',
		'region',
		'renderConfig',
		'renderData',
		'renderer',
		'renderSelectors',
		'renderTo',
		'renderTpl',
		'resetFocusPosition',
		'resizable',
		'resizeHandles',
		'saveDelay',
		'scope',
		'scrollable',
		'sealed',
		'session',
		'shadow',
		'shadowOffset',
		'shareableName',
		'shim',
		'shrinkWrap',
		'sortable',
		'sortAscText',
		'sortClearText',
		'sortDescText',
		'sorter',
		'stateEvents',
		'stateful',
		'stateId',
		'style',
		'summaryRenderer',
		'suspendLayout',
		'tabGuard',
		'tabIndex',
		'tdCls',
		'text',
		'toFrontOnShow',
		'tooltip',
		'tooltipType',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'triggerVisible',
		'twoWayBindable',
		'ui',
		'uiCls',
		'updater',
		'userCls',
		'variableRowHeight',
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
		{name:'activate',parameters:'datecolumn'},
		{name:'add',parameters:'datecolumn,component,index'},
		{name:'added',parameters:'datecolumn,container,pos'},
		{name:'afterlayout',parameters:'datecolumn,layout'},
		{name:'afterlayoutanimation',parameters:'datecolumn'},
		{name:'afterrender',parameters:'datecolumn'},
		{name:'beforeactivate',parameters:'datecolumn'},
		{name:'beforeadd',parameters:'datecolumn,component,index'},
		{name:'beforedeactivate',parameters:'datecolumn'},
		{name:'beforedestroy',parameters:'datecolumn'},
		{name:'beforehide',parameters:'datecolumn'},
		{name:'beforeremove',parameters:'datecolumn,component'},
		{name:'beforerender',parameters:'datecolumn'},
		{name:'beforeshow',parameters:'datecolumn'},
		{name:'beforestaterestore',parameters:'datecolumn,state'},
		{name:'beforestatesave',parameters:'datecolumn,state'},
		{name:'blur',parameters:'datecolumn,event'},
		{name:'boxready',parameters:'datecolumn,width,height'},
		{name:'childmove',parameters:'datecolumn,component,prevIndex,newIndex'},
		{name:'columnhide',parameters:'ct,column'},
		{name:'columnmove',parameters:'ct,column,fromIdx,toIdx'},
		{name:'columnresize',parameters:'ct,column,width'},
		{name:'columnschanged',parameters:'ct'},
		{name:'columnshow',parameters:'ct,column'},
		{name:'deactivate',parameters:'datecolumn'},
		{name:'destroy',parameters:'datecolumn'},
		{name:'disable',parameters:'datecolumn'},
		{name:'enable',parameters:'datecolumn'},
		{name:'focus',parameters:'datecolumn,event'},
		{name:'focusenter',parameters:'datecolumn,event'},
		{name:'focusleave',parameters:'datecolumn,event'},
		{name:'headerclick',parameters:'ct,column,e,t'},
		{name:'headercontextmenu',parameters:'ct,column,e,t'},
		{name:'headertriggerclick',parameters:'ct,column,e,t'},
		{name:'hide',parameters:'datecolumn'},
		{name:'menucreate',parameters:'ct,menu'},
		{name:'move',parameters:'datecolumn,x,y'},
		{name:'remove',parameters:'datecolumn,component'},
		{name:'removed',parameters:'datecolumn,ownerCt'},
		{name:'render',parameters:'datecolumn'},
		{name:'resize',parameters:'datecolumn,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'datecolumn'},
		{name:'sortchange',parameters:'ct,column,direction'},
		{name:'staterestore',parameters:'datecolumn,state'},
		{name:'statesave',parameters:'datecolumn,state'},
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
		'columnhide',
		'columnmove',
		'columnresize',
		'columnschanged',
		'columnshow',
		'deactivate',
		'destroy',
		'disable',
		'enable',
		'focus',
		'focusenter',
		'focusleave',
		'headerclick',
		'headercontextmenu',
		'headertriggerclick',
		'hide',
		'menucreate',
		'move',
		'remove',
		'removed',
		'render',
		'resize',
		'show',
		'sortchange',
		'staterestore',
		'statesave',
		'ready'
];
}
@Component({
  selector: datecolumnMetaData.XTYPE,
	inputs: datecolumnMetaData.INPUTNAMES,
	outputs: datecolumnMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => datecolumn)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class datecolumn extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,datecolumnMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,datecolumnMetaData);}
}
