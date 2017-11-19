import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.ux.Explorer
export class explorerMetaData {
	public static XTYPE: string = 'explorer';
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
		'animCollapse',
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
		'bbar',
		'bind',
		'bodyBorder',
		'bodyCls',
		'bodyPadding',
		'bodyStyle',
		'border',
		'breadcrumb',
		'bubbleEvents',
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
		'columnWidth',
		'componentCls',
		'componentLayout',
		'constrain',
		'constrainHeader',
		'constraintInsets',
		'constrainTo',
		'contentEl',
		'contentView',
		'controller',
		'data',
		'defaultAlign',
		'defaultButton',
		'defaultButtonTarget',
		'defaultDockWeights',
		'defaultFocus',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'detachOnRemove',
		'disabled',
		'disabledCls',
		'dock',
		'dockedItems',
		'draggable',
		'expandToolText',
		'fbar',
		'fixed',
		'flex',
		'floatable',
		'floating',
		'focusableContainer',
		'focusCls',
		'focusOnToFront',
		'formBind',
		'frame',
		'frameHeader',
		'glyph',
		'header',
		'headerOverCls',
		'headerPosition',
		'height',
		'hidden',
		'hideCollapseTool',
		'hideMode',
		'html',
		'icon',
		'iconAlign',
		'iconCls',
		'id',
		'inactiveChildTabIndex',
		'itemId',
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'layout',
		'lbar',
		'liquidLayout',
		'listeners',
		'liveDrag',
		'loader',
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
		'nameable',
		'nameHolder',
		'overCls',
		'overflowX',
		'overflowY',
		'overlapHeader',
		'padding',
		'placeholder',
		'placeholderCollapseHideMode',
		'plugins',
		'preventHeader',
		'publishes',
		'rbar',
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
		'shrinkWrap',
		'shrinkWrapDock',
		'simpleDrag',
		'stateEvents',
		'stateful',
		'stateId',
		'store',
		'style',
		'suspendLayout',
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
		'tree',
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
		{name:'activate',parameters:'explorer'},
		{name:'add',parameters:'explorer,component,index'},
		{name:'added',parameters:'explorer,container,pos'},
		{name:'afterlayout',parameters:'explorer,layout'},
		{name:'afterlayoutanimation',parameters:'explorer'},
		{name:'afterrender',parameters:'explorer'},
		{name:'beforeactivate',parameters:'explorer'},
		{name:'beforeadd',parameters:'explorer,component,index'},
		{name:'beforeclose',parameters:'panel'},
		{name:'beforecollapse',parameters:'p,direction,animate'},
		{name:'beforedeactivate',parameters:'explorer'},
		{name:'beforedestroy',parameters:'explorer'},
		{name:'beforeexpand',parameters:'p,animate'},
		{name:'beforehide',parameters:'explorer'},
		{name:'beforeremove',parameters:'explorer,component'},
		{name:'beforerender',parameters:'explorer'},
		{name:'beforeshow',parameters:'explorer'},
		{name:'beforestaterestore',parameters:'explorer,state'},
		{name:'beforestatesave',parameters:'explorer,state'},
		{name:'blur',parameters:'explorer,event'},
		{name:'boxready',parameters:'explorer,width,height'},
		{name:'childmove',parameters:'explorer,component,prevIndex,newIndex'},
		{name:'close',parameters:'panel'},
		{name:'collapse',parameters:'p'},
		{name:'deactivate',parameters:'explorer'},
		{name:'destroy',parameters:'explorer'},
		{name:'disable',parameters:'explorer'},
		{name:'dockedadd',parameters:'explorer,component,index'},
		{name:'dockedremove',parameters:'explorer,component'},
		{name:'enable',parameters:'explorer'},
		{name:'expand',parameters:'p'},
		{name:'float',parameters:''},
		{name:'focus',parameters:'explorer,event'},
		{name:'focusenter',parameters:'explorer,event'},
		{name:'focusleave',parameters:'explorer,event'},
		{name:'glyphchange',parameters:'explorer,newGlyph,oldGlyph'},
		{name:'hide',parameters:'explorer'},
		{name:'iconchange',parameters:'p,newIcon,oldIcon'},
		{name:'iconclschange',parameters:'p,newIconCls,oldIconCls'},
		{name:'move',parameters:'explorer,x,y'},
		{name:'remove',parameters:'explorer,component'},
		{name:'removed',parameters:'explorer,ownerCt'},
		{name:'render',parameters:'explorer'},
		{name:'resize',parameters:'explorer,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'explorer'},
		{name:'staterestore',parameters:'explorer,state'},
		{name:'statesave',parameters:'explorer,state'},
		{name:'titlechange',parameters:'p,newTitle,oldTitle'},
		{name:'unfloat',parameters:''},
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
		'beforeclose',
		'beforecollapse',
		'beforedeactivate',
		'beforedestroy',
		'beforeexpand',
		'beforehide',
		'beforeremove',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'childmove',
		'close',
		'collapse',
		'deactivate',
		'destroy',
		'disable',
		'dockedadd',
		'dockedremove',
		'enable',
		'expand',
		'float',
		'focus',
		'focusenter',
		'focusleave',
		'glyphchange',
		'hide',
		'iconchange',
		'iconclschange',
		'move',
		'remove',
		'removed',
		'render',
		'resize',
		'show',
		'staterestore',
		'statesave',
		'titlechange',
		'unfloat',
		'ready'
];
}
@Component({
  selector: explorerMetaData.XTYPE,
	inputs: explorerMetaData.INPUTNAMES,
	outputs: explorerMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => explorer)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class explorer extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,explorerMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,explorerMetaData);}
}