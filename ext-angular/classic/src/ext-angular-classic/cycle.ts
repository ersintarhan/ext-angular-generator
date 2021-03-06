import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.button.Cycle
export class cycleMetaData {
	public static XTYPE: string = 'cycle';
	public static INPUTNAMES: string[] = [
		'activeCounter',
		'alignOnScroll',
		'alignTarget',
		'allowDepress',
		'alwaysOnTop',
		'anchor',
		'animateShadow',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'arrowAlign',
		'arrowCls',
		'arrowHandler',
		'arrowTooltip',
		'arrowVisible',
		'autoEl',
		'autoRender',
		'autoScroll',
		'autoShow',
		'baseCls',
		'baseParams',
		'bind',
		'border',
		'changeHandler',
		'childEls',
		'clickEvent',
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
		'destroyMenu',
		'disabled',
		'disabledCls',
		'dock',
		'draggable',
		'enableToggle',
		'fixed',
		'flex',
		'floating',
		'focusCls',
		'focusOnToFront',
		'forceGlyph',
		'forceIcon',
		'formBind',
		'frame',
		'glyph',
		'handleMouseEvents',
		'handler',
		'height',
		'hidden',
		'hideMode',
		'href',
		'hrefTarget',
		'html',
		'icon',
		'iconAlign',
		'iconCls',
		'id',
		'itemId',
		'items',
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
		'menu',
		'menuAlign',
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
		'params',
		'plugins',
		'prependText',
		'pressed',
		'preventDefault',
		'publishes',
		'reference',
		'region',
		'renderConfig',
		'renderData',
		'renderSelectors',
		'renderTo',
		'renderTpl',
		'repeat',
		'resizable',
		'resizeHandles',
		'saveDelay',
		'scale',
		'scope',
		'scrollable',
		'session',
		'shadow',
		'shadowOffset',
		'shareableName',
		'shim',
		'showEmptyMenu',
		'showText',
		'shrinkWrap',
		'stateEvents',
		'stateful',
		'stateId',
		'style',
		'tabIndex',
		'text',
		'textAlign',
		'toFrontOnShow',
		'toggleGroup',
		'toggleHandler',
		'tooltip',
		'tooltipType',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'twoWayBindable',
		'ui',
		'uiCls',
		'userCls',
		'value',
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
		{name:'activate',parameters:'cycle'},
		{name:'added',parameters:'cycle,container,pos'},
		{name:'afterlayoutanimation',parameters:'cycle'},
		{name:'afterrender',parameters:'cycle'},
		{name:'arrowclick',parameters:'cycle,e'},
		{name:'beforeactivate',parameters:'cycle'},
		{name:'beforedeactivate',parameters:'cycle'},
		{name:'beforedestroy',parameters:'cycle'},
		{name:'beforehide',parameters:'cycle'},
		{name:'beforerender',parameters:'cycle'},
		{name:'beforeshow',parameters:'cycle'},
		{name:'beforestaterestore',parameters:'cycle,state'},
		{name:'beforestatesave',parameters:'cycle,state'},
		{name:'beforetoggle',parameters:'cycle,pressed'},
		{name:'blur',parameters:'cycle,event'},
		{name:'boxready',parameters:'cycle,width,height'},
		{name:'change',parameters:'cycle,item'},
		{name:'click',parameters:'cycle,e'},
		{name:'deactivate',parameters:'cycle'},
		{name:'destroy',parameters:'cycle'},
		{name:'disable',parameters:'cycle'},
		{name:'enable',parameters:'cycle'},
		{name:'focus',parameters:'cycle,event'},
		{name:'focusenter',parameters:'cycle,event'},
		{name:'focusleave',parameters:'cycle,event'},
		{name:'glyphchange',parameters:'cycle,newGlyph,oldGlyph'},
		{name:'hide',parameters:'cycle'},
		{name:'iconchange',parameters:'cycle,oldIcon,newIcon'},
		{name:'menuhide',parameters:'cycle,menu'},
		{name:'menushow',parameters:'cycle,menu'},
		{name:'menutriggerout',parameters:'cycle,menu,e'},
		{name:'menutriggerover',parameters:'cycle,menu,e'},
		{name:'mouseout',parameters:'cycle,e'},
		{name:'mouseover',parameters:'cycle,e'},
		{name:'move',parameters:'cycle,x,y'},
		{name:'removed',parameters:'cycle,ownerCt'},
		{name:'render',parameters:'cycle'},
		{name:'resize',parameters:'cycle,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'cycle'},
		{name:'staterestore',parameters:'cycle,state'},
		{name:'statesave',parameters:'cycle,state'},
		{name:'textchange',parameters:'cycle,oldText,newText'},
		{name:'toggle',parameters:'cycle,pressed'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
		'arrowclick',
		'beforeactivate',
		'beforedeactivate',
		'beforedestroy',
		'beforehide',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'beforetoggle',
		'blur',
		'boxready',
		'change',
		'click',
		'deactivate',
		'destroy',
		'disable',
		'enable',
		'focus',
		'focusenter',
		'focusleave',
		'glyphchange',
		'hide',
		'iconchange',
		'menuhide',
		'menushow',
		'menutriggerout',
		'menutriggerover',
		'mouseout',
		'mouseover',
		'move',
		'removed',
		'render',
		'resize',
		'show',
		'staterestore',
		'statesave',
		'textchange',
		'toggle',
		'ready'
];
}
@Component({
  selector: cycleMetaData.XTYPE,
	inputs: cycleMetaData.INPUTNAMES,
	outputs: cycleMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => cycle)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class cycle extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,cycleMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,cycleMetaData);}
}
