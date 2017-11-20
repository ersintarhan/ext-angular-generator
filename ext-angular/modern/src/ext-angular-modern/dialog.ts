import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.Dialog
export class dialogMetaData {
	public static XTYPE: string = 'dialog';
	public static INPUTNAMES: string[] = [
		'activeChildTabIndex',
		'activeItem',
		'allowFocusingDisabledChildren',
		'alwaysOnTop',
		'anchor',
		'anchorPosition',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'autoDestroy',
		'autoSize',
		'axisLock',
		'bbar',
		'bind',
		'bodyBorder',
		'bodyPadding',
		'bodyStyle',
		'border',
		'bottom',
		'buttonAlign',
		'buttonDefaults',
		'buttons',
		'buttonToolbar',
		'cardSwitchAnimation',
		'centered',
		'closable',
		'closeAction',
		'closeToolText',
		'cls',
		'collapsed',
		'collapsible',
		'constrainAlign',
		'constrainDrag',
		'contentEl',
		'control',
		'controller',
		'data',
		'defaultFocus',
		'defaultListenerScope',
		'defaults',
		'defaultToolWeights',
		'defaultType',
		'disabled',
		'dismissAction',
		'dismissHandler',
		'displayed',
		'docked',
		'draggable',
		'enterAnimation',
		'eventHandlers',
		'exitAnimation',
		'flex',
		'floated',
		'focusableContainer',
		'focusCls',
		'fullscreen',
		'header',
		'headerPosition',
		'height',
		'hidden',
		'hideAnimation',
		'hideMode',
		'hideOnMaskTap',
		'html',
		'icon',
		'iconAlign',
		'iconCls',
		'id',
		'inactiveChildTabIndex',
		'innerCls',
		'instanceCls',
		'itemId',
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'layout',
		'lbar',
		'left',
		'listeners',
		'manageBorders',
		'margin',
		'masked',
		'maskTapHandler',
		'maxHeight',
		'maximizable',
		'maximizeAnimation',
		'maximized',
		'maximizeProxy',
		'maximizeTool',
		'maxWidth',
		'minButtonWidth',
		'minHeight',
		'minWidth',
		'modal',
		'modelValidation',
		'name',
		'nameable',
		'nameHolder',
		'padding',
		'plugins',
		'publishes',
		'rbar',
		'record',
		'reference',
		'referenceHolder',
		'relative',
		'renderTo',
		'resetFocusPosition',
		'resizable',
		'restorable',
		'restoreAnimation',
		'restoreTool',
		'right',
		'ripple',
		'scrollable',
		'session',
		'shadow',
		'shareableName',
		'shim',
		'showAnimation',
		'standardButtons',
		'style',
		'tabIndex',
		'tbar',
		'title',
		'titleAlign',
		'toFrontOnShow',
		'toolDefaults',
		'tools',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
		'translationMethod',
		'twoWayBindable',
		'ui',
		'userCls',
		'viewModel',
		'weight',
		'weighted',
		'width',
		'x',
		'xtype',
		'y',
		'zIndex',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'activate',parameters:'newActiveItem,dialog,oldActiveItem'},
		{name:'activeItemchange',parameters:'sender,value,oldValue'},
		{name:'add',parameters:'dialog,item,index'},
		{name:'added',parameters:'dialog,container,index'},
		{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecollapse',parameters:'dialog'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeexpand',parameters:'dialog'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'dialog'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaximize',parameters:'dialog'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeresizedragstart',parameters:'dialog,context'},
		{name:'beforerestore',parameters:'dialog'},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'dialog'},
		{name:'beforetofront',parameters:'dialog'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'dialog,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'collapse',parameters:'dialog'},
		{name:'deactivate',parameters:'oldActiveItem,dialog,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'drawerhide',parameters:'dialog'},
		{name:'drawershow',parameters:'dialog'},
		{name:'erased',parameters:'dialog'},
		{name:'expand',parameters:'dialog'},
		{name:'floatingchange',parameters:'dialog,positioned'},
		{name:'focus',parameters:'dialog,event'},
		{name:'focusenter',parameters:'dialog,event'},
		{name:'focusleave',parameters:'dialog,event'},
		{name:'fullscreen',parameters:'dialog'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'dialog'},
		{name:'initialize',parameters:'dialog'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maximize',parameters:'dialog'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'move',parameters:'dialog,item,toIndex,fromIndex'},
		{name:'moved',parameters:'dialog,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'dialog,positioned'},
		{name:'remove',parameters:'dialog,item,index'},
		{name:'removed',parameters:'dialog,container,index'},
		{name:'renderedchange',parameters:'dialog,item,rendered'},
		{name:'resize',parameters:'element,info'},
		{name:'resizedrag',parameters:'dialog,context'},
		{name:'resizedragcancel',parameters:'dialog,context'},
		{name:'resizedragend',parameters:'dialog,context'},
		{name:'resizedragstart',parameters:'dialog,context'},
		{name:'restore',parameters:'dialog'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'show',parameters:'dialog'},
		{name:'tofront',parameters:'dialog'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'dialog,newData'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'activeItemchange',
		'add',
		'added',
		'beforeactiveItemchange',
		'beforebottomchange',
		'beforecenteredchange',
		'beforecollapse',
		'beforedisabledchange',
		'beforedockedchange',
		'beforeexpand',
		'beforeheightchange',
		'beforehiddenchange',
		'beforehide',
		'beforeleftchange',
		'beforemaxHeightchange',
		'beforemaximize',
		'beforemaxWidthchange',
		'beforeminHeightchange',
		'beforeminWidthchange',
		'beforeorientationchange',
		'beforeresizedragstart',
		'beforerestore',
		'beforerightchange',
		'beforescrollablechange',
		'beforeshow',
		'beforetofront',
		'beforetopchange',
		'beforewidthchange',
		'blur',
		'bottomchange',
		'centeredchange',
		'collapse',
		'deactivate',
		'destroy',
		'disabledchange',
		'dockedchange',
		'drawerhide',
		'drawershow',
		'erased',
		'expand',
		'floatingchange',
		'focus',
		'focusenter',
		'focusleave',
		'fullscreen',
		'heightchange',
		'hiddenchange',
		'hide',
		'initialize',
		'leftchange',
		'maxHeightchange',
		'maximize',
		'maxWidthchange',
		'minHeightchange',
		'minWidthchange',
		'move',
		'moved',
		'orientationchange',
		'painted',
		'positionedchange',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'resizedrag',
		'resizedragcancel',
		'resizedragend',
		'resizedragstart',
		'restore',
		'rightchange',
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
  selector: dialogMetaData.XTYPE,
	inputs: dialogMetaData.INPUTNAMES,
	outputs: dialogMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => dialog)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class dialog extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,dialogMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,dialogMetaData);}
}