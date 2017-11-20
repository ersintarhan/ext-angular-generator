import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.ux.colorpick.Field
export class colorfieldMetaData {
	public static XTYPE: string = 'colorfield';
	public static INPUTNAMES: string[] = [
		'activeCounter',
		'activeError',
		'activeErrorsTpl',
		'afterBodyEl',
		'afterLabelTextTpl',
		'afterLabelTpl',
		'afterSubTpl',
		'alignOnScroll',
		'alignTarget',
		'allowBlank',
		'allowOnlyWhitespace',
		'alwaysOnTop',
		'anchor',
		'animateShadow',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaErrorText',
		'ariaHelp',
		'ariaLabel',
		'ariaLabelledBy',
		'autoEl',
		'autoFitErrors',
		'autoHideInputMask',
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
		'blankText',
		'border',
		'checkChangeBuffer',
		'checkChangeEvents',
		'childEls',
		'cls',
		'color',
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
		'dirtyCls',
		'disabled',
		'disabledCls',
		'disableKeyFilter',
		'dock',
		'draggable',
		'editable',
		'emptyCls',
		'emptyText',
		'enableKeyEvents',
		'enforceMaxLength',
		'errorMsgCls',
		'fieldBodyCls',
		'fieldCls',
		'fieldLabel',
		'fieldStyle',
		'fieldSubTpl',
		'fixed',
		'flex',
		'floating',
		'focusCls',
		'focusOnToFront',
		'format',
		'formatText',
		'formBind',
		'formItemCls',
		'frame',
		'grow',
		'growAppend',
		'growMax',
		'growMin',
		'height',
		'hidden',
		'hideEmptyLabel',
		'hideLabel',
		'hideMode',
		'hideTrigger',
		'html',
		'id',
		'inputAttrTpl',
		'inputId',
		'inputMask',
		'inputType',
		'inputWrapCls',
		'invalidCls',
		'invalidText',
		'isTextInput',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'labelableRenderTpl',
		'labelAlign',
		'labelAttrTpl',
		'labelCls',
		'labelClsExtra',
		'labelPad',
		'labelSeparator',
		'labelStyle',
		'labelWidth',
		'liquidLayout',
		'listeners',
		'liveDrag',
		'loader',
		'margin',
		'maskDefaults',
		'maskElement',
		'maskRe',
		'matchFieldWidth',
		'maxHeight',
		'maxLength',
		'maxLengthText',
		'maxWidth',
		'minHeight',
		'minLength',
		'minLengthText',
		'minWidth',
		'modal',
		'modelValidation',
		'msgTarget',
		'name',
		'nameable',
		'openCls',
		'overCls',
		'overflowX',
		'overflowY',
		'padding',
		'pickerAlign',
		'pickerOffset',
		'plugins',
		'popup',
		'preventMark',
		'previousColor',
		'publishes',
		'readOnly',
		'readOnlyCls',
		'reference',
		'regex',
		'regexText',
		'region',
		'renderConfig',
		'renderData',
		'renderSelectors',
		'renderTo',
		'renderTpl',
		'repeatTriggerClick',
		'requiredCls',
		'resizable',
		'resizeHandles',
		'saveDelay',
		'scrollable',
		'selectOnFocus',
		'session',
		'shadow',
		'shadowOffset',
		'shareableName',
		'shim',
		'shrinkWrap',
		'size',
		'stateEvents',
		'stateful',
		'stateId',
		'stripCharsRe',
		'style',
		'submitValue',
		'tabIndex',
		'toFrontOnShow',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'triggerCls',
		'triggers',
		'triggerWrapCls',
		'twoWayBindable',
		'ui',
		'uiCls',
		'userCls',
		'validateBlank',
		'validateOnBlur',
		'validateOnChange',
		'validation',
		'validationField',
		'validator',
		'value',
		'valuePublishEvent',
		'viewModel',
		'vtype',
		'vtypeText',
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
		{name:'activate',parameters:'colorfield'},
		{name:'added',parameters:'colorfield,container,pos'},
		{name:'afterlayoutanimation',parameters:'colorfield'},
		{name:'afterrender',parameters:'colorfield'},
		{name:'autosize',parameters:'colorfield,width'},
		{name:'beforeactivate',parameters:'colorfield'},
		{name:'beforedeactivate',parameters:'colorfield'},
		{name:'beforedestroy',parameters:'colorfield'},
		{name:'beforehide',parameters:'colorfield'},
		{name:'beforerender',parameters:'colorfield'},
		{name:'beforeshow',parameters:'colorfield'},
		{name:'beforestaterestore',parameters:'colorfield,state'},
		{name:'beforestatesave',parameters:'colorfield,state'},
		{name:'blur',parameters:'colorfield,event'},
		{name:'boxready',parameters:'colorfield,width,height'},
		{name:'change',parameters:'colorfield,color,previousColor'},
		{name:'collapse',parameters:'field'},
		{name:'deactivate',parameters:'colorfield'},
		{name:'destroy',parameters:'colorfield'},
		{name:'dirtychange',parameters:'colorfield,isDirty'},
		{name:'disable',parameters:'colorfield'},
		{name:'enable',parameters:'colorfield'},
		{name:'errorchange',parameters:'colorfield,error'},
		{name:'expand',parameters:'field'},
		{name:'focus',parameters:'colorfield,event'},
		{name:'focusenter',parameters:'colorfield,event'},
		{name:'focusleave',parameters:'colorfield,event'},
		{name:'hide',parameters:'colorfield'},
		{name:'keydown',parameters:'colorfield,e'},
		{name:'keypress',parameters:'colorfield,e'},
		{name:'keyup',parameters:'colorfield,e'},
		{name:'move',parameters:'colorfield,x,y'},
		{name:'removed',parameters:'colorfield,ownerCt'},
		{name:'render',parameters:'colorfield'},
		{name:'resize',parameters:'colorfield,width,height,oldWidth,oldHeight'},
		{name:'select',parameters:'field,value'},
		{name:'show',parameters:'colorfield'},
		{name:'specialkey',parameters:'colorfield,e'},
		{name:'staterestore',parameters:'colorfield,state'},
		{name:'statesave',parameters:'colorfield,state'},
		{name:'validitychange',parameters:'colorfield,isValid'},
		{name:'writeablechange',parameters:'colorfield,Read'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
		'autosize',
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
		'change',
		'collapse',
		'deactivate',
		'destroy',
		'dirtychange',
		'disable',
		'enable',
		'errorchange',
		'expand',
		'focus',
		'focusenter',
		'focusleave',
		'hide',
		'keydown',
		'keypress',
		'keyup',
		'move',
		'removed',
		'render',
		'resize',
		'select',
		'show',
		'specialkey',
		'staterestore',
		'statesave',
		'validitychange',
		'writeablechange',
		'ready'
];
}
@Component({
  selector: colorfieldMetaData.XTYPE,
	inputs: colorfieldMetaData.INPUTNAMES,
	outputs: colorfieldMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => colorfield)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class colorfield extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,colorfieldMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,colorfieldMetaData);}
}