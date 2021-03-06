import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.grid.property.Grid
export class propertygridMetaData {
	public static XTYPE: string = 'propertygrid';
	public static INPUTNAMES: string[] = [
		'actions',
		'activeChildTabIndex',
		'activeCounter',
		'activeItem',
		'alignOnScroll',
		'alignTarget',
		'allowDeselect',
		'allowFocusingDisabledChildren',
		'alwaysOnTop',
		'anchor',
		'anchorSize',
		'animateShadow',
		'animCollapse',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'autoDestroy',
		'autoEl',
		'autoLoad',
		'autoRender',
		'autoScroll',
		'autoShow',
		'baseCls',
		'bbar',
		'bind',
		'bodyBorder',
		'bodyCls',
		'bodyPadding',
		'bodyStyle',
		'border',
		'bubbleEvents',
		'bufferedRenderer',
		'buttonAlign',
		'buttons',
		'childEls',
		'closable',
		'closeAction',
		'closeToolText',
		'cls',
		'collapsed',
		'collapsedCls',
		'collapseDirection',
		'collapseFirst',
		'collapseMode',
		'collapseToolText',
		'collapsible',
		'columnLines',
		'columns',
		'columnWidth',
		'componentCls',
		'componentLayout',
		'constrain',
		'constrainHeader',
		'constraintInsets',
		'constrainTo',
		'contentEl',
		'controller',
		'customEditors',
		'customRenderers',
		'data',
		'defaultAlign',
		'defaultButton',
		'defaultButtonTarget',
		'defaultDockWeights',
		'defaultFocus',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'deferRowRender',
		'detachOnRemove',
		'disabled',
		'disabledCls',
		'disableSelection',
		'dock',
		'dockedItems',
		'draggable',
		'emptyText',
		'enableColumnHide',
		'enableColumnMove',
		'enableColumnResize',
		'enableLocking',
		'expandToolText',
		'fbar',
		'features',
		'fixed',
		'flex',
		'floatable',
		'floating',
		'focusableContainer',
		'focusCls',
		'focusOnToFront',
		'forceFit',
		'formBind',
		'frame',
		'frameHeader',
		'glyph',
		'header',
		'headerBorders',
		'headerOverCls',
		'headerPosition',
		'height',
		'hidden',
		'hideCollapseTool',
		'hideHeaders',
		'hideMode',
		'html',
		'icon',
		'iconAlign',
		'iconCls',
		'id',
		'inactiveChildTabIndex',
		'inferTypes',
		'itemId',
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'layout',
		'lbar',
		'leadingBufferZone',
		'liquidLayout',
		'listeners',
		'liveDrag',
		'loader',
		'lockedGridConfig',
		'lockedViewConfig',
		'lockText',
		'manageHeight',
		'margin',
		'maskDefaults',
		'maskElement',
		'maxHeight',
		'maxWidth',
		'minButtonWidth',
		'minHeight',
		'minWidth',
		'modal',
		'modelValidation',
		'multiColumnSort',
		'multiSelect',
		'nameable',
		'nameColumnWidth',
		'nameField',
		'nameHolder',
		'normalGridConfig',
		'normalViewConfig',
		'numFromEdge',
		'overCls',
		'overflowX',
		'overflowY',
		'overlapHeader',
		'padding',
		'placeholder',
		'placeholderCollapseHideMode',
		'plugins',
		'preventHeader',
		'propertyNames',
		'publishes',
		'rbar',
		'record',
		'reference',
		'referenceHolder',
		'region',
		'renderConfig',
		'renderData',
		'renderSelectors',
		'renderTo',
		'renderTpl',
		'reserveScrollbar',
		'resetFocusPosition',
		'resizable',
		'resizeHandles',
		'rowLines',
		'rowViewModel',
		'saveDelay',
		'scroll',
		'scrollable',
		'sealedColumns',
		'selection',
		'selModel',
		'selType',
		'session',
		'shadow',
		'shadowOffset',
		'shareableName',
		'shim',
		'shrinkWrap',
		'shrinkWrapDock',
		'simpleDrag',
		'simpleSelect',
		'sortableColumns',
		'source',
		'sourceConfig',
		'split',
		'stateEvents',
		'stateful',
		'stateId',
		'store',
		'style',
		'subGridXType',
		'suspendLayout',
		'syncRowHeight',
		'tabGuard',
		'tabIndex',
		'tbar',
		'title',
		'titleAlign',
		'titleCollapse',
		'titleRotation',
		'toFrontOnShow',
		'tools',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'trailingBufferZone',
		'twoWayBindable',
		'ui',
		'uiCls',
		'unlockText',
		'userCls',
		'valueField',
		'variableRowHeight',
		'view',
		'viewConfig',
		'viewModel',
		'viewType',
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
		{name:'activate',parameters:'propertygrid'},
		{name:'add',parameters:'propertygrid,component,index'},
		{name:'added',parameters:'propertygrid,container,pos'},
		{name:'afterlayout',parameters:'propertygrid,layout'},
		{name:'afterlayoutanimation',parameters:'propertygrid'},
		{name:'afterrender',parameters:'propertygrid'},
		{name:'beforeactivate',parameters:'propertygrid'},
		{name:'beforeadd',parameters:'propertygrid,component,index'},
		{name:'beforecellclick',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforecellcontextmenu',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforecelldblclick',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforecellkeydown',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforecellmousedown',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforecellmouseup',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforeclose',parameters:'panel'},
		{name:'beforecollapse',parameters:'p,direction,animate'},
		{name:'beforecontainerclick',parameters:'propertygrid,e'},
		{name:'beforecontainercontextmenu',parameters:'propertygrid,e'},
		{name:'beforecontainerdblclick',parameters:'propertygrid,e'},
		{name:'beforecontainerkeydown',parameters:'propertygrid,e'},
		{name:'beforecontainerkeypress',parameters:'propertygrid,e'},
		{name:'beforecontainerkeyup',parameters:'propertygrid,e'},
		{name:'beforecontainermousedown',parameters:'propertygrid,e'},
		{name:'beforecontainermouseout',parameters:'propertygrid,e'},
		{name:'beforecontainermouseover',parameters:'propertygrid,e'},
		{name:'beforecontainermouseup',parameters:'propertygrid,e'},
		{name:'beforedeactivate',parameters:'propertygrid'},
		{name:'beforedeselect',parameters:'propertygrid,record,index'},
		{name:'beforedestroy',parameters:'propertygrid'},
		{name:'beforeexpand',parameters:'p,animate'},
		{name:'beforehide',parameters:'propertygrid'},
		{name:'beforeitemclick',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeitemcontextmenu',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeitemdblclick',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeitemkeydown',parameters:''},
		{name:'beforeitemkeypress',parameters:''},
		{name:'beforeitemkeyup',parameters:''},
		{name:'beforeitemlongpress',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeitemmousedown',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeitemmouseenter',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeitemmouseleave',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeitemmouseup',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeload',parameters:'store,operation'},
		{name:'beforepropertychange',parameters:'source,recordId,value,oldValue'},
		{name:'beforereconfigure',parameters:'propertygrid,store,columns,oldStore,oldColumns'},
		{name:'beforeremove',parameters:'propertygrid,component'},
		{name:'beforerender',parameters:'propertygrid'},
		{name:'beforerowbodyclick',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodycontextmenu',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodydblclick',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodykeydown',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodykeypress',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodykeyup',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodylongpress',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodymousedown',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodymouseup',parameters:'view,rowBodyEl,e'},
		{name:'beforerowexit',parameters:'propertygrid,keyEvent,prevRow,nextRow,forward'},
		{name:'beforeselect',parameters:'propertygrid,record,index'},
		{name:'beforeselectionextend',parameters:'grid,An,extension'},
		{name:'beforeshow',parameters:'propertygrid'},
		{name:'beforestaterestore',parameters:'propertygrid,state'},
		{name:'beforestatesave',parameters:'propertygrid,state'},
		{name:'blur',parameters:'propertygrid,event'},
		{name:'boxready',parameters:'propertygrid,width,height'},
		{name:'cellclick',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'cellcontextmenu',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'celldblclick',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'cellkeydown',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'cellmousedown',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'cellmouseup',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'childmove',parameters:'propertygrid,component,prevIndex,newIndex'},
		{name:'close',parameters:'panel'},
		{name:'collapse',parameters:'p'},
		{name:'columnhide',parameters:'ct,column'},
		{name:'columnmove',parameters:'ct,column,fromIdx,toIdx'},
		{name:'columnresize',parameters:'ct,column,width'},
		{name:'columnschanged',parameters:'ct'},
		{name:'columnshow',parameters:'ct,column'},
		{name:'containerclick',parameters:'propertygrid,e'},
		{name:'containercontextmenu',parameters:'propertygrid,e'},
		{name:'containerdblclick',parameters:'propertygrid,e'},
		{name:'containerkeydown',parameters:'propertygrid,e'},
		{name:'containerkeypress',parameters:'propertygrid,e'},
		{name:'containerkeyup',parameters:'propertygrid,e'},
		{name:'containermousedown',parameters:'propertygrid,e'},
		{name:'containermouseout',parameters:'propertygrid,e'},
		{name:'containermouseover',parameters:'propertygrid,e'},
		{name:'containermouseup',parameters:'propertygrid,e'},
		{name:'deactivate',parameters:'propertygrid'},
		{name:'deselect',parameters:'propertygrid,record,index'},
		{name:'destroy',parameters:'propertygrid'},
		{name:'disable',parameters:'propertygrid'},
		{name:'dockedadd',parameters:'propertygrid,component,index'},
		{name:'dockedremove',parameters:'propertygrid,component'},
		{name:'enable',parameters:'propertygrid'},
		{name:'expand',parameters:'p'},
		{name:'filteractivate',parameters:'propertygrid,column'},
		{name:'filterchange',parameters:'store,filters'},
		{name:'filterdeactivate',parameters:'propertygrid,column'},
		{name:'float',parameters:''},
		{name:'focus',parameters:'propertygrid,event'},
		{name:'focusenter',parameters:'propertygrid,event'},
		{name:'focusleave',parameters:'propertygrid,event'},
		{name:'glyphchange',parameters:'propertygrid,newGlyph,oldGlyph'},
		{name:'groupchange',parameters:'store,grouper'},
		{name:'headerclick',parameters:'ct,column,e,t'},
		{name:'headercontextmenu',parameters:'ct,column,e,t'},
		{name:'headermenucreate',parameters:'grid,menu,headerCt'},
		{name:'headertriggerclick',parameters:'ct,column,e,t'},
		{name:'hide',parameters:'propertygrid'},
		{name:'iconchange',parameters:'p,newIcon,oldIcon'},
		{name:'iconclschange',parameters:'p,newIconCls,oldIconCls'},
		{name:'itemclick',parameters:'propertygrid,record,item,index,e'},
		{name:'itemcontextmenu',parameters:'propertygrid,record,item,index,e'},
		{name:'itemdblclick',parameters:'propertygrid,record,item,index,e'},
		{name:'itemkeydown',parameters:''},
		{name:'itemkeypress',parameters:''},
		{name:'itemkeyup',parameters:''},
		{name:'itemlongpress',parameters:'propertygrid,record,item,index,e'},
		{name:'itemmousedown',parameters:'propertygrid,record,item,index,e'},
		{name:'itemmouseenter',parameters:'propertygrid,record,item,index,e'},
		{name:'itemmouseleave',parameters:'propertygrid,record,item,index,e'},
		{name:'itemmouseup',parameters:'propertygrid,record,item,index,e'},
		{name:'load',parameters:'propertygrid,records,successful,operation'},
		{name:'lockcolumn',parameters:'propertygrid,column'},
		{name:'move',parameters:'propertygrid,x,y'},
		{name:'processcolumns',parameters:'lockedColumns,normalColumns'},
		{name:'propertychange',parameters:'source,recordId,value,oldValue'},
		{name:'reconfigure',parameters:'propertygrid,store,columns,oldStore,oldColumns'},
		{name:'remove',parameters:'propertygrid,component'},
		{name:'removed',parameters:'propertygrid,ownerCt'},
		{name:'render',parameters:'propertygrid'},
		{name:'resize',parameters:'propertygrid,width,height,oldWidth,oldHeight'},
		{name:'rowbodyclick',parameters:'view,rowBodyEl,e'},
		{name:'rowbodycontextmenu',parameters:'view,rowBodyEl,e'},
		{name:'rowbodydblclick',parameters:'view,rowBodyEl,e'},
		{name:'rowbodykeydown',parameters:'view,rowBodyEl,e'},
		{name:'rowbodykeypress',parameters:'view,rowBodyEl,e'},
		{name:'rowbodykeyup',parameters:'view,rowBodyEl,e'},
		{name:'rowbodylongpress',parameters:'view,rowBodyEl,e'},
		{name:'rowbodymousedown',parameters:'view,rowBodyEl,e'},
		{name:'rowbodymouseup',parameters:'view,rowBodyEl,e'},
		{name:'rowclick',parameters:'propertygrid,record,element,rowIndex,e'},
		{name:'rowcontextmenu',parameters:'propertygrid,record,tr,rowIndex,e'},
		{name:'rowdblclick',parameters:'propertygrid,record,element,rowIndex,e'},
		{name:'rowkeydown',parameters:'propertygrid,record,element,rowIndex,e'},
		{name:'rowmousedown',parameters:'propertygrid,record,tr,rowIndex,e'},
		{name:'rowmouseup',parameters:'propertygrid,record,element,rowIndex,e'},
		{name:'select',parameters:'propertygrid,record,index'},
		{name:'selectionchange',parameters:'propertygrid,selected'},
		{name:'selectionextenderdrag',parameters:'grid,An,extension'},
		{name:'show',parameters:'propertygrid'},
		{name:'sortchange',parameters:'ct,column,direction'},
		{name:'staterestore',parameters:'propertygrid,state'},
		{name:'statesave',parameters:'propertygrid,state'},
		{name:'titlechange',parameters:'p,newTitle,oldTitle'},
		{name:'unfloat',parameters:''},
		{name:'unlockcolumn',parameters:'propertygrid,column'},
		{name:'viewready',parameters:'propertygrid'},
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
		'beforecellclick',
		'beforecellcontextmenu',
		'beforecelldblclick',
		'beforecellkeydown',
		'beforecellmousedown',
		'beforecellmouseup',
		'beforeclose',
		'beforecollapse',
		'beforecontainerclick',
		'beforecontainercontextmenu',
		'beforecontainerdblclick',
		'beforecontainerkeydown',
		'beforecontainerkeypress',
		'beforecontainerkeyup',
		'beforecontainermousedown',
		'beforecontainermouseout',
		'beforecontainermouseover',
		'beforecontainermouseup',
		'beforedeactivate',
		'beforedeselect',
		'beforedestroy',
		'beforeexpand',
		'beforehide',
		'beforeitemclick',
		'beforeitemcontextmenu',
		'beforeitemdblclick',
		'beforeitemkeydown',
		'beforeitemkeypress',
		'beforeitemkeyup',
		'beforeitemlongpress',
		'beforeitemmousedown',
		'beforeitemmouseenter',
		'beforeitemmouseleave',
		'beforeitemmouseup',
		'beforeload',
		'beforepropertychange',
		'beforereconfigure',
		'beforeremove',
		'beforerender',
		'beforerowbodyclick',
		'beforerowbodycontextmenu',
		'beforerowbodydblclick',
		'beforerowbodykeydown',
		'beforerowbodykeypress',
		'beforerowbodykeyup',
		'beforerowbodylongpress',
		'beforerowbodymousedown',
		'beforerowbodymouseup',
		'beforerowexit',
		'beforeselect',
		'beforeselectionextend',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'cellclick',
		'cellcontextmenu',
		'celldblclick',
		'cellkeydown',
		'cellmousedown',
		'cellmouseup',
		'childmove',
		'close',
		'collapse',
		'columnhide',
		'columnmove',
		'columnresize',
		'columnschanged',
		'columnshow',
		'containerclick',
		'containercontextmenu',
		'containerdblclick',
		'containerkeydown',
		'containerkeypress',
		'containerkeyup',
		'containermousedown',
		'containermouseout',
		'containermouseover',
		'containermouseup',
		'deactivate',
		'deselect',
		'destroy',
		'disable',
		'dockedadd',
		'dockedremove',
		'enable',
		'expand',
		'filteractivate',
		'filterchange',
		'filterdeactivate',
		'float',
		'focus',
		'focusenter',
		'focusleave',
		'glyphchange',
		'groupchange',
		'headerclick',
		'headercontextmenu',
		'headermenucreate',
		'headertriggerclick',
		'hide',
		'iconchange',
		'iconclschange',
		'itemclick',
		'itemcontextmenu',
		'itemdblclick',
		'itemkeydown',
		'itemkeypress',
		'itemkeyup',
		'itemlongpress',
		'itemmousedown',
		'itemmouseenter',
		'itemmouseleave',
		'itemmouseup',
		'load',
		'lockcolumn',
		'move',
		'processcolumns',
		'propertychange',
		'reconfigure',
		'remove',
		'removed',
		'render',
		'resize',
		'rowbodyclick',
		'rowbodycontextmenu',
		'rowbodydblclick',
		'rowbodykeydown',
		'rowbodykeypress',
		'rowbodykeyup',
		'rowbodylongpress',
		'rowbodymousedown',
		'rowbodymouseup',
		'rowclick',
		'rowcontextmenu',
		'rowdblclick',
		'rowkeydown',
		'rowmousedown',
		'rowmouseup',
		'select',
		'selectionchange',
		'selectionextenderdrag',
		'show',
		'sortchange',
		'staterestore',
		'statesave',
		'titlechange',
		'unfloat',
		'unlockcolumn',
		'viewready',
		'ready'
];
}
@Component({
  selector: propertygridMetaData.XTYPE,
	inputs: propertygridMetaData.INPUTNAMES,
	outputs: propertygridMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => propertygrid)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class propertygrid extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,propertygridMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,propertygridMetaData);}
}
