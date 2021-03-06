import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.grid.column.Column
export class gridcolumnMetaData {
	public static XTYPE: string = 'gridcolumn';
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
		{name:'activate',parameters:'gridcolumn'},
		{name:'add',parameters:'gridcolumn,component,index'},
		{name:'added',parameters:'gridcolumn,container,pos'},
		{name:'afterlayout',parameters:'gridcolumn,layout'},
		{name:'afterlayoutanimation',parameters:'gridcolumn'},
		{name:'afterrender',parameters:'gridcolumn'},
		{name:'beforeactivate',parameters:'gridcolumn'},
		{name:'beforeadd',parameters:'gridcolumn,component,index'},
		{name:'beforedeactivate',parameters:'gridcolumn'},
		{name:'beforedestroy',parameters:'gridcolumn'},
		{name:'beforehide',parameters:'gridcolumn'},
		{name:'beforeremove',parameters:'gridcolumn,component'},
		{name:'beforerender',parameters:'gridcolumn'},
		{name:'beforeshow',parameters:'gridcolumn'},
		{name:'beforestaterestore',parameters:'gridcolumn,state'},
		{name:'beforestatesave',parameters:'gridcolumn,state'},
		{name:'blur',parameters:'gridcolumn,event'},
		{name:'boxready',parameters:'gridcolumn,width,height'},
		{name:'childmove',parameters:'gridcolumn,component,prevIndex,newIndex'},
		{name:'columnhide',parameters:'ct,column'},
		{name:'columnmove',parameters:'ct,column,fromIdx,toIdx'},
		{name:'columnresize',parameters:'ct,column,width'},
		{name:'columnschanged',parameters:'ct'},
		{name:'columnshow',parameters:'ct,column'},
		{name:'deactivate',parameters:'gridcolumn'},
		{name:'destroy',parameters:'gridcolumn'},
		{name:'disable',parameters:'gridcolumn'},
		{name:'enable',parameters:'gridcolumn'},
		{name:'focus',parameters:'gridcolumn,event'},
		{name:'focusenter',parameters:'gridcolumn,event'},
		{name:'focusleave',parameters:'gridcolumn,event'},
		{name:'headerclick',parameters:'ct,column,e,t'},
		{name:'headercontextmenu',parameters:'ct,column,e,t'},
		{name:'headertriggerclick',parameters:'ct,column,e,t'},
		{name:'hide',parameters:'gridcolumn'},
		{name:'menucreate',parameters:'ct,menu'},
		{name:'move',parameters:'gridcolumn,x,y'},
		{name:'remove',parameters:'gridcolumn,component'},
		{name:'removed',parameters:'gridcolumn,ownerCt'},
		{name:'render',parameters:'gridcolumn'},
		{name:'resize',parameters:'gridcolumn,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'gridcolumn'},
		{name:'sortchange',parameters:'ct,column,direction'},
		{name:'staterestore',parameters:'gridcolumn,state'},
		{name:'statesave',parameters:'gridcolumn,state'},
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
  selector: gridcolumnMetaData.XTYPE,
	inputs: gridcolumnMetaData.INPUTNAMES,
	outputs: gridcolumnMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => gridcolumn)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class gridcolumn extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,gridcolumnMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,gridcolumnMetaData);}
}
