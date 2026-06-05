import {
  EpgViewComponent
} from "./sidimad-epg-view.js";
import {
  FilterPipe
} from "./sidimad-filter-pipe.js";
import "./sidimad-epg-desc.js";
import {
  IpcCommand
} from "./sidimad-empty.js";
import {
  SettingsComponent
} from "./sidimad-settings.js";
import "./sidimad-settings-service.js";
import "./sidimad-epg.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./sidimad-about.js";
import "./sidimad-playlists.js";
import "./sidimad-whats-new.js";
import "./sidimad-portal-status.js";
import {
  PlaylistErrorViewComponent
} from "./sidimad-playlist-error.js";
import "./sidimad-skeleton.js";
import {
  MatListItemAvatar,
  MatListItemTitle,
  MatListModule,
  MatListOption,
  MatSelectionList
} from "./sidimad-list.js";
import {
  VodDetailsComponent
} from "./sidimad-vod-details.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./sidimad-spinner.js";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardModule
} from "./sidimad-card.js";
import "./sidimad-empty.js";
import {
  ContentType
} from "./sidimad-content-type.js";
import "./sidimad-select.js";
import {
  PlaylistInfoComponent
} from "./sidimad-dialogs.js";
import {
  PlaylistsService
} from "./sidimad-database.js";
import {
  ActivatedRoute,
  CdkCopyToClipboard,
  ClipboardModule,
  ExternalPlayerInfoDialogComponent,
  MAT_DIALOG_DATA,
  MatCheckboxModule,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix,
  MatSnackBar,
  PortalStore,
  RouterLink,
  SettingsStore,
  Store,
  VideoPlayer,
  WebPlayerViewComponent,
  XtreamCodeActions,
  selectCurrentPlaylist
} from "./sidimad-store.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./sidimad-tooltip.js";
import {
  MatPseudoCheckbox,
  SelectionModel
} from "./sidimad-checkbox.js";
import "./sidimad-divider.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  DOWN_ARROW,
  DataService,
  DefaultValueAccessor,
  Directionality,
  ENTER,
  ERROR,
  FocusMonitor,
  FormsModule,
  LEFT_ARROW,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatRipple,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  OPEN_MPV_PLAYER,
  OPEN_VLC_PLAYER,
  REMOTE_CONTROL_CHANGE_CHANNEL,
  RIGHT_ARROW,
  SPACE,
  ScrollingModule,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  UP_ARROW,
  XTREAM_REQUEST,
  XTREAM_RESPONSE,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled,
  hasModifierKey
} from "./sidimad-browser.js";
import {
  AsyncPipe,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  KeyValuePipe,
  NgIf,
  NgModule,
  NgOptimizedImage,
  NgZone,
  Output,
  Pipe,
  Subject,
  ViewChild,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  debounceTime,
  distinctUntilChanged,
  effect,
  forwardRef,
  inject,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./sidimad-app.js";

// node_modules/@angular/material/fesm2022/button-toggle.mjs
var _c0 = ["button"];
var _c1 = ["*"];
function MatButtonToggle_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-pseudo-checkbox", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", {
  providedIn: "root",
  factory: MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY
});
function MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY() {
  return {
    hideSingleSelectionIndicator: false,
    hideMultipleSelectionIndicator: false,
    disabledInteractive: false
  };
}
var MAT_BUTTON_TOGGLE_GROUP = new InjectionToken("MatButtonToggleGroup");
var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatButtonToggleGroup),
  multi: true
};
var MatButtonToggleChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MatButtonToggleGroup = class _MatButtonToggleGroup {
  _changeDetector = inject(ChangeDetectorRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _multiple = false;
  _disabled = false;
  _disabledInteractive = false;
  _selectionModel;
  /**
   * Reference to the raw value that the consumer tried to assign. The real
   * value will exclude any values from this one that don't correspond to a
   * toggle. Useful for the cases where the value is assigned before the toggles
   * have been initialized or at the same that they're being swapped out.
   */
  _rawValue;
  /**
   * The method to be called in order to update ngModel.
   * Now `ngModel` binding is not supported in multiple selection mode.
   */
  _controlValueAccessorChangeFn = () => {
  };
  /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
  _onTouched = () => {
  };
  /** Child button toggle buttons. */
  _buttonToggles;
  /** The appearance for all the buttons in the group. */
  appearance;
  /** `name` attribute for the underlying `input` element. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._markButtonsForCheck();
  }
  _name = inject(_IdGenerator).getId("mat-button-toggle-group-");
  /** Whether the toggle group is vertical. */
  vertical;
  /** Value of the toggle group. */
  get value() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    if (this.multiple) {
      return selected.map((toggle) => toggle.value);
    }
    return selected[0] ? selected[0].value : void 0;
  }
  set value(newValue) {
    this._setSelectionByValue(newValue);
    this.valueChange.emit(this.value);
  }
  /**
   * Event that emits whenever the value of the group changes.
   * Used to facilitate two-way data binding.
   * @docs-private
   */
  valueChange = new EventEmitter();
  /** Selected button toggles in the group. */
  get selected() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    return this.multiple ? selected : selected[0] || null;
  }
  /** Whether multiple button toggles can be selected. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = value;
    this._markButtonsForCheck();
  }
  /** Whether multiple button toggle group is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markButtonsForCheck();
  }
  /** Whether buttons in the group should be interactive while they're disabled. */
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markButtonsForCheck();
  }
  /** The layout direction of the toggle button group. */
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Event emitted when the group's value changes. */
  change = new EventEmitter();
  /** Whether checkmark indicator for single-selection button toggle groups is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  _hideSingleSelectionIndicator;
  /** Whether checkmark indicator for multiple-selection button toggle groups is hidden. */
  get hideMultipleSelectionIndicator() {
    return this._hideMultipleSelectionIndicator;
  }
  set hideMultipleSelectionIndicator(value) {
    this._hideMultipleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  _hideMultipleSelectionIndicator;
  constructor() {
    const defaultOptions = inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, {
      optional: true
    });
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
    this.hideSingleSelectionIndicator = defaultOptions?.hideSingleSelectionIndicator ?? false;
    this.hideMultipleSelectionIndicator = defaultOptions?.hideMultipleSelectionIndicator ?? false;
  }
  ngOnInit() {
    this._selectionModel = new SelectionModel(this.multiple, void 0, false);
  }
  ngAfterContentInit() {
    this._selectionModel.select(...this._buttonToggles.filter((toggle) => toggle.checked));
    if (!this.multiple) {
      this._initializeTabIndex();
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value Value to be set to the model.
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /** Handle keydown event calling to single-select button toggle. */
  _keydown(event) {
    if (this.multiple || this.disabled || hasModifierKey(event)) {
      return;
    }
    const target = event.target;
    const buttonId = target.id;
    const index = this._buttonToggles.toArray().findIndex((toggle) => {
      return toggle.buttonId === buttonId;
    });
    let nextButton = null;
    switch (event.keyCode) {
      case SPACE:
      case ENTER:
        nextButton = this._buttonToggles.get(index) || null;
        break;
      case UP_ARROW:
        nextButton = this._getNextButton(index, -1);
        break;
      case LEFT_ARROW:
        nextButton = this._getNextButton(index, this.dir === "ltr" ? -1 : 1);
        break;
      case DOWN_ARROW:
        nextButton = this._getNextButton(index, 1);
        break;
      case RIGHT_ARROW:
        nextButton = this._getNextButton(index, this.dir === "ltr" ? 1 : -1);
        break;
      default:
        return;
    }
    if (nextButton) {
      event.preventDefault();
      nextButton._onButtonClick();
      nextButton.focus();
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent(toggle) {
    const event = new MatButtonToggleChange(toggle, this.value);
    this._rawValue = event.value;
    this._controlValueAccessorChangeFn(event.value);
    this.change.emit(event);
  }
  /**
   * Syncs a button toggle's selected state with the model value.
   * @param toggle Toggle to be synced.
   * @param select Whether the toggle should be selected.
   * @param isUserInput Whether the change was a result of a user interaction.
   * @param deferEvents Whether to defer emitting the change events.
   */
  _syncButtonToggle(toggle, select, isUserInput = false, deferEvents = false) {
    if (!this.multiple && this.selected && !toggle.checked) {
      this.selected.checked = false;
    }
    if (this._selectionModel) {
      if (select) {
        this._selectionModel.select(toggle);
      } else {
        this._selectionModel.deselect(toggle);
      }
    } else {
      deferEvents = true;
    }
    if (deferEvents) {
      Promise.resolve().then(() => this._updateModelValue(toggle, isUserInput));
    } else {
      this._updateModelValue(toggle, isUserInput);
    }
  }
  /** Checks whether a button toggle is selected. */
  _isSelected(toggle) {
    return this._selectionModel && this._selectionModel.isSelected(toggle);
  }
  /** Determines whether a button toggle should be checked on init. */
  _isPrechecked(toggle) {
    if (typeof this._rawValue === "undefined") {
      return false;
    }
    if (this.multiple && Array.isArray(this._rawValue)) {
      return this._rawValue.some((value) => toggle.value != null && value === toggle.value);
    }
    return toggle.value === this._rawValue;
  }
  /** Initializes the tabindex attribute using the radio pattern. */
  _initializeTabIndex() {
    this._buttonToggles.forEach((toggle) => {
      toggle.tabIndex = -1;
    });
    if (this.selected) {
      this.selected.tabIndex = 0;
    } else {
      for (let i = 0; i < this._buttonToggles.length; i++) {
        const toggle = this._buttonToggles.get(i);
        if (!toggle.disabled) {
          toggle.tabIndex = 0;
          break;
        }
      }
    }
  }
  /** Obtain the subsequent toggle to which the focus shifts. */
  _getNextButton(startIndex, offset) {
    const items = this._buttonToggles;
    for (let i = 1; i <= items.length; i++) {
      const index = (startIndex + offset * i + items.length) % items.length;
      const item = items.get(index);
      if (item && !item.disabled) {
        return item;
      }
    }
    return null;
  }
  /** Updates the selection state of the toggles in the group based on a value. */
  _setSelectionByValue(value) {
    this._rawValue = value;
    if (!this._buttonToggles) {
      return;
    }
    const toggles = this._buttonToggles.toArray();
    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Value must be an array in multiple-selection mode.");
      }
      this._clearSelection();
      value.forEach((currentValue) => this._selectValue(currentValue, toggles));
    } else {
      this._clearSelection();
      this._selectValue(value, toggles);
    }
    if (!this.multiple && toggles.every((toggle) => toggle.tabIndex === -1)) {
      for (const toggle of toggles) {
        if (!toggle.disabled) {
          toggle.tabIndex = 0;
          break;
        }
      }
    }
  }
  /** Clears the selected toggles. */
  _clearSelection() {
    this._selectionModel.clear();
    this._buttonToggles.forEach((toggle) => {
      toggle.checked = false;
      if (!this.multiple) {
        toggle.tabIndex = -1;
      }
    });
  }
  /** Selects a value if there's a toggle that corresponds to it. */
  _selectValue(value, toggles) {
    for (const toggle of toggles) {
      if (toggle.value === value) {
        toggle.checked = true;
        this._selectionModel.select(toggle);
        if (!this.multiple) {
          toggle.tabIndex = 0;
        }
        break;
      }
    }
  }
  /** Syncs up the group's value with the model and emits the change event. */
  _updateModelValue(toggle, isUserInput) {
    if (isUserInput) {
      this._emitChangeEvent(toggle);
    }
    this.valueChange.emit(this.value);
  }
  /** Marks all of the child button toggles to be checked. */
  _markButtonsForCheck() {
    this._buttonToggles?.forEach((toggle) => toggle._markForCheck());
  }
  static \u0275fac = function MatButtonToggleGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatButtonToggleGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatButtonToggleGroup,
    selectors: [["mat-button-toggle-group"]],
    contentQueries: function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatButtonToggle, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonToggles = _t);
      }
    },
    hostAttrs: [1, "mat-button-toggle-group"],
    hostVars: 6,
    hostBindings: function MatButtonToggleGroup_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function MatButtonToggleGroup_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.multiple ? "group" : "radiogroup")("aria-disabled", ctx.disabled);
        \u0275\u0275classProp("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
      }
    },
    inputs: {
      appearance: "appearance",
      name: "name",
      vertical: [2, "vertical", "vertical", booleanAttribute],
      value: "value",
      multiple: [2, "multiple", "multiple", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
      hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
      hideMultipleSelectionIndicator: [2, "hideMultipleSelectionIndicator", "hideMultipleSelectionIndicator", booleanAttribute]
    },
    outputs: {
      valueChange: "valueChange",
      change: "change"
    },
    exportAs: ["matButtonToggleGroup"],
    features: [\u0275\u0275ProvidersFeature([MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
      provide: MAT_BUTTON_TOGGLE_GROUP,
      useExisting: _MatButtonToggleGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleGroup, [{
    type: Directive,
    args: [{
      selector: "mat-button-toggle-group",
      providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
        provide: MAT_BUTTON_TOGGLE_GROUP,
        useExisting: MatButtonToggleGroup
      }],
      host: {
        "class": "mat-button-toggle-group",
        "(keydown)": "_keydown($event)",
        "[attr.role]": "multiple ? 'group' : 'radiogroup'",
        "[attr.aria-disabled]": "disabled",
        "[class.mat-button-toggle-vertical]": "vertical",
        "[class.mat-button-toggle-group-appearance-standard]": 'appearance === "standard"'
      },
      exportAs: "matButtonToggleGroup"
    }]
  }], () => [], {
    _buttonToggles: [{
      type: ContentChildren,
      args: [forwardRef(() => MatButtonToggle), {
        // Note that this would technically pick up toggles
        // from nested groups, but that's not a case that we support.
        descendants: true
      }]
    }],
    appearance: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideMultipleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatButtonToggle = class _MatButtonToggle {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _idGenerator = inject(_IdGenerator);
  _animationDisabled = _animationsDisabled();
  _checked = false;
  /**
   * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
   * take precedence so this may be omitted.
   */
  ariaLabel;
  /**
   * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
   */
  ariaLabelledby = null;
  /** Underlying native `button` element. */
  _buttonElement;
  /** The parent button toggle group (exclusive selection). Optional. */
  buttonToggleGroup;
  /** Unique ID for the underlying `button` element. */
  get buttonId() {
    return `${this.id}-button`;
  }
  /** The unique ID for this button toggle. */
  id;
  /** HTML's 'name' attribute used to group radios for unique selection. */
  name;
  /** MatButtonToggleGroup reads this to assign its own value. */
  value;
  /** Tabindex of the toggle. */
  get tabIndex() {
    return this._tabIndex();
  }
  set tabIndex(value) {
    this._tabIndex.set(value);
  }
  _tabIndex;
  /** Whether ripples are disabled on the button toggle. */
  disableRipple;
  /** The appearance style of the button. */
  get appearance() {
    return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
  }
  set appearance(value) {
    this._appearance = value;
  }
  _appearance;
  /** Whether the button is checked. */
  get checked() {
    return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
  }
  set checked(value) {
    if (value !== this._checked) {
      this._checked = value;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the button is disabled. */
  get disabled() {
    return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  _disabled = false;
  /** Whether the button should remain interactive when it is disabled. */
  get disabledInteractive() {
    return this._disabledInteractive || this.buttonToggleGroup !== null && this.buttonToggleGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  _disabledInteractive;
  /** Event emitted when the group value changes. */
  change = new EventEmitter();
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const toggleGroup = inject(MAT_BUTTON_TOGGLE_GROUP, {
      optional: true
    });
    const defaultTabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    }) || "";
    const defaultOptions = inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, {
      optional: true
    });
    this._tabIndex = signal(parseInt(defaultTabIndex) || 0, ...ngDevMode ? [{
      debugName: "_tabIndex"
    }] : []);
    this.buttonToggleGroup = toggleGroup;
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
    this.disabledInteractive = defaultOptions?.disabledInteractive ?? false;
  }
  ngOnInit() {
    const group = this.buttonToggleGroup;
    this.id = this.id || this._idGenerator.getId("mat-button-toggle-");
    if (group) {
      if (group._isPrechecked(this)) {
        this.checked = true;
      } else if (group._isSelected(this) !== this._checked) {
        group._syncButtonToggle(this, this._checked);
      }
    }
  }
  ngAfterViewInit() {
    if (!this._animationDisabled) {
      this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled");
    }
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    const group = this.buttonToggleGroup;
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (group && group._isSelected(this)) {
      group._syncButtonToggle(this, false, false, true);
    }
  }
  /** Focuses the button. */
  focus(options) {
    this._buttonElement.nativeElement.focus(options);
  }
  /** Checks the button toggle due to an interaction with the underlying native button. */
  _onButtonClick() {
    if (this.disabled) {
      return;
    }
    const newChecked = this.isSingleSelector() ? true : !this._checked;
    if (newChecked !== this._checked) {
      this._checked = newChecked;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
        this.buttonToggleGroup._onTouched();
      }
    }
    if (this.isSingleSelector()) {
      const focusable = this.buttonToggleGroup._buttonToggles.find((toggle) => {
        return toggle.tabIndex === 0;
      });
      if (focusable) {
        focusable.tabIndex = -1;
      }
      this.tabIndex = 0;
    }
    this.change.emit(new MatButtonToggleChange(this, this.value));
  }
  /**
   * Marks the button toggle as needing checking for change detection.
   * This method is exposed because the parent button toggle group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  /** Gets the name that should be assigned to the inner DOM node. */
  _getButtonName() {
    if (this.isSingleSelector()) {
      return this.buttonToggleGroup.name;
    }
    return this.name || null;
  }
  /** Whether the toggle is in single selection mode. */
  isSingleSelector() {
    return this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
  }
  static \u0275fac = function MatButtonToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatButtonToggle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatButtonToggle,
    selectors: [["mat-button-toggle"]],
    viewQuery: function MatButtonToggle_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonElement = _t.first);
      }
    },
    hostAttrs: ["role", "presentation", 1, "mat-button-toggle"],
    hostVars: 14,
    hostBindings: function MatButtonToggle_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatButtonToggle_focus_HostBindingHandler() {
          return ctx.focus();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("id", ctx.id)("name", null);
        \u0275\u0275classProp("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-disabled-interactive", ctx.disabledInteractive)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      id: "id",
      name: "name",
      value: "value",
      tabIndex: "tabIndex",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      appearance: "appearance",
      checked: [2, "checked", "checked", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change"
    },
    exportAs: ["matButtonToggle"],
    ngContentSelectors: _c1,
    decls: 7,
    vars: 13,
    consts: [["button", ""], ["type", "button", 1, "mat-button-toggle-button", "mat-focus-indicator", 3, "click", "id", "disabled"], [1, "mat-button-toggle-checkbox-wrapper"], [1, "mat-button-toggle-label-content"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 3, "disabled"]],
    template: function MatButtonToggle_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 1, 0);
        \u0275\u0275listener("click", function MatButtonToggle_Template_button_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onButtonClick());
        });
        \u0275\u0275conditionalCreate(2, MatButtonToggle_Conditional_2_Template, 2, 1, "div", 2);
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(5, "span", 4)(6, "span", 5);
      }
      if (rf & 2) {
        const button_r3 = \u0275\u0275reference(1);
        \u0275\u0275property("id", ctx.buttonId)("disabled", ctx.disabled && !ctx.disabledInteractive || null);
        \u0275\u0275attribute("role", ctx.isSingleSelector() ? "radio" : "button")("tabindex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("aria-pressed", !ctx.isSingleSelector() ? ctx.checked : null)("aria-checked", ctx.isSingleSelector() ? ctx.checked : null)("name", ctx._getButtonName())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.buttonToggleGroup && (!ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideSingleSelectionIndicator || ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideMultipleSelectionIndicator) ? 2 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("matRippleTrigger", button_r3)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
      }
    },
    dependencies: [MatRipple, MatPseudoCheckbox],
    styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);border-radius:var(--mat-button-toggle-legacy-shape);transform:translateZ(0)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}@media(forced-colors: active){.mat-button-toggle-standalone,.mat-button-toggle-group{outline:solid 1px}}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}@media(forced-colors: active){.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-button-toggle-legacy-text-color);font-family:var(--mat-button-toggle-legacy-label-text-font);font-size:var(--mat-button-toggle-legacy-label-text-size);line-height:var(--mat-button-toggle-legacy-label-text-line-height);font-weight:var(--mat-button-toggle-legacy-label-text-weight);letter-spacing:var(--mat-button-toggle-legacy-label-text-tracking);--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-legacy-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle-checkbox-wrapper{display:inline-block;justify-content:flex-start;align-items:center;width:0;height:18px;line-height:18px;overflow:hidden;box-sizing:border-box;position:absolute;top:50%;left:16px;transform:translate3d(0, -50%, 0)}[dir=rtl] .mat-button-toggle-checkbox-wrapper{left:auto;right:16px}.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:12px}[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:auto;right:12px}.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper{width:18px}.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper{transition:width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper{transition:none}.mat-button-toggle-checked{color:var(--mat-button-toggle-legacy-selected-state-text-color);background-color:var(--mat-button-toggle-legacy-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-button-toggle-legacy-disabled-state-text-color);background-color:var(--mat-button-toggle-legacy-disabled-state-background-color);--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-button-toggle-legacy-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));background-color:var(--mat-button-toggle-background-color, transparent);font-family:var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));line-height:var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));font-weight:var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-state-background-color, transparent)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-button-toggle-legacy-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-button-toggle-height, 40px)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-button-toggle-legacy-state-layer-color)}@media(forced-colors: active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-animations-enabled .mat-button-toggle-button{transition:padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-button{transition:none}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:30px}[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:0;padding-right:30px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggle, [{
    type: Component,
    args: [{
      selector: "mat-button-toggle",
      encapsulation: ViewEncapsulation.None,
      exportAs: "matButtonToggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.mat-button-toggle-standalone]": "!buttonToggleGroup",
        "[class.mat-button-toggle-checked]": "checked",
        "[class.mat-button-toggle-disabled]": "disabled",
        "[class.mat-button-toggle-disabled-interactive]": "disabledInteractive",
        "[class.mat-button-toggle-appearance-standard]": 'appearance === "standard"',
        "class": "mat-button-toggle",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.id]": "id",
        "[attr.name]": "null",
        "(focus)": "focus()",
        "role": "presentation"
      },
      imports: [MatRipple, MatPseudoCheckbox],
      template: `<button #button class="mat-button-toggle-button mat-focus-indicator"
        type="button"
        [id]="buttonId"
        [attr.role]="isSingleSelector() ? 'radio' : 'button'"
        [attr.tabindex]="disabled && !disabledInteractive ? -1 : tabIndex"
        [attr.aria-pressed]="!isSingleSelector() ? checked : null"
        [attr.aria-checked]="isSingleSelector() ? checked : null"
        [disabled]="(disabled && !disabledInteractive) || null"
        [attr.name]="_getButtonName()"
        [attr.aria-label]="ariaLabel"
        [attr.aria-labelledby]="ariaLabelledby"
        [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
        (click)="_onButtonClick()">
  @if (buttonToggleGroup && (
    !buttonToggleGroup.multiple && !buttonToggleGroup.hideSingleSelectionIndicator ||
    buttonToggleGroup.multiple && !buttonToggleGroup.hideMultipleSelectionIndicator)
  ) {
    <div class="mat-button-toggle-checkbox-wrapper">
      <mat-pseudo-checkbox
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"/>
    </div>
  }

  <span class="mat-button-toggle-label-content">
    <ng-content></ng-content>
  </span>
</button>

<span class="mat-button-toggle-focus-overlay"></span>
<span class="mat-button-toggle-ripple" matRipple
     [matRippleTrigger]="button"
     [matRippleDisabled]="this.disableRipple || this.disabled">
</span>
`,
      styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);border-radius:var(--mat-button-toggle-legacy-shape);transform:translateZ(0)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}@media(forced-colors: active){.mat-button-toggle-standalone,.mat-button-toggle-group{outline:solid 1px}}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}@media(forced-colors: active){.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-button-toggle-legacy-text-color);font-family:var(--mat-button-toggle-legacy-label-text-font);font-size:var(--mat-button-toggle-legacy-label-text-size);line-height:var(--mat-button-toggle-legacy-label-text-line-height);font-weight:var(--mat-button-toggle-legacy-label-text-weight);letter-spacing:var(--mat-button-toggle-legacy-label-text-tracking);--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-legacy-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle-checkbox-wrapper{display:inline-block;justify-content:flex-start;align-items:center;width:0;height:18px;line-height:18px;overflow:hidden;box-sizing:border-box;position:absolute;top:50%;left:16px;transform:translate3d(0, -50%, 0)}[dir=rtl] .mat-button-toggle-checkbox-wrapper{left:auto;right:16px}.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:12px}[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:auto;right:12px}.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper{width:18px}.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper{transition:width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper{transition:none}.mat-button-toggle-checked{color:var(--mat-button-toggle-legacy-selected-state-text-color);background-color:var(--mat-button-toggle-legacy-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-button-toggle-legacy-disabled-state-text-color);background-color:var(--mat-button-toggle-legacy-disabled-state-background-color);--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-button-toggle-legacy-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));background-color:var(--mat-button-toggle-background-color, transparent);font-family:var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));line-height:var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));font-weight:var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-state-background-color, transparent)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-button-toggle-legacy-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-button-toggle-height, 40px)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-button-toggle-legacy-state-layer-color)}@media(forced-colors: active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-animations-enabled .mat-button-toggle-button{transition:padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-button{transition:none}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:30px}[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:0;padding-right:30px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}\n"]
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    _buttonElement: [{
      type: ViewChild,
      args: ["button"]
    }],
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appearance: [{
      type: Input
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }]
  });
})();
var MatButtonToggleModule = class _MatButtonToggleModule {
  static \u0275fac = function MatButtonToggleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatButtonToggleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatButtonToggleModule,
    imports: [MatCommonModule, MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
    exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatRippleModule, MatButtonToggle, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
      exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle]
    }]
  }], null, null);
})();

// src/app/shared/pipes/sort.pipe.ts
var SortPipe = class _SortPipe {
  transform(array, sortType) {
    if (!array || !sortType) {
      return array;
    }
    return array.sort((a, b) => {
      if (sortType === "date") {
        return parseInt(b.added) - parseInt(a.added);
      } else if (sortType === "rating") {
        const ratingA = isNaN(parseFloat(a.rating)) ? 0 : parseFloat(a.rating);
        const ratingB = isNaN(parseFloat(b.rating)) ? 0 : parseFloat(b.rating);
        return ratingB - ratingA;
      } else if (sortType === "alpha") {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      } else {
        return 0;
      }
    });
  }
  static {
    this.\u0275fac = function SortPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SortPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "sortBy", type: _SortPipe, pure: true });
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SortPipe, factory: _SortPipe.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortPipe, [{
    type: Pipe,
    args: [{
      name: "sortBy",
      standalone: true
    }]
  }, {
    type: Injectable
  }], null, null);
})();

// src/app/xtream/category-content-view/category-content-view.component.ts
function CategoryContentViewComponent_Conditional_0_For_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                        ");
    \u0275\u0275elementStart(1, "img", 3);
    \u0275\u0275listener("error", function CategoryContentViewComponent_Conditional_0_For_4_Conditional_5_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n                    ");
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", item_r2.stream_icon || item_r2.cover || item_r2.logo);
  }
}
function CategoryContentViewComponent_Conditional_0_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                        ");
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275text(2, "\n                    ");
  }
}
function CategoryContentViewComponent_Conditional_0_For_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                        ");
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "\n                            ");
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                    ");
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "XTREAM.IMDB_RATING"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", item_r2.rating || item_r2.rating_imdb, "\n                        ");
  }
}
function CategoryContentViewComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "mat-card", 1);
    \u0275\u0275listener("click", function CategoryContentViewComponent_Conditional_0_For_4_Template_mat_card_click_1_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.itemClicked.emit(item_r2));
    });
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "mat-card-content");
    \u0275\u0275text(4, "\n                    ");
    \u0275\u0275conditionalCreate(5, CategoryContentViewComponent_Conditional_0_For_4_Conditional_5_Template, 3, 1);
    \u0275\u0275conditionalCreate(6, CategoryContentViewComponent_Conditional_0_For_4_Conditional_6_Template, 3, 0);
    \u0275\u0275conditionalCreate(7, CategoryContentViewComponent_Conditional_0_For_4_Conditional_7_Template, 8, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n                ");
    \u0275\u0275elementStart(9, "mat-card-actions");
    \u0275\u0275text(10, "\n                    ");
    \u0275\u0275elementStart(11, "div", 2);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n        ");
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(item_r2.stream_icon || item_r2.cover || item_r2.logo ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!item_r2.stream_icon && !item_r2.cover && !item_r2.logo ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.rating || item_r2.rating_imdb ? 7 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r2.name || "No name");
  }
}
function CategoryContentViewComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "app-playlist-error-view", 6);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("description", \u0275\u0275pipeBind1(2, 3, "PORTALS.EMPTY_LIST_VIEW.NO_SEARCH_RESULTS"))("showActionButtons", false)("viewType", "NO_SEARCH_RESULTS");
  }
}
function CategoryContentViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275repeaterCreate(3, CategoryContentViewComponent_Conditional_0_For_4_Template, 16, 4, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(5, "filterBy");
    \u0275\u0275pipe(6, "sortBy");
    \u0275\u0275conditionalCreate(7, CategoryContentViewComponent_Conditional_0_Conditional_7_Template, 4, 5);
    \u0275\u0275pipe(8, "filterBy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(6, 5, \u0275\u0275pipeBind3(5, 1, ctx_r2.items, ctx_r2.searchPhrase(), "name"), ctx_r2.sortType()));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!((tmp_2_0 = \u0275\u0275pipeBind3(8, 8, ctx_r2.items, ctx_r2.searchPhrase(), "name")) == null ? null : tmp_2_0.length) ? 7 : -1);
  }
}
function CategoryContentViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275element(1, "app-playlist-error-view", 7);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4, "\n");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 4, "PORTALS.ERROR_VIEW.EMPTY_CATEGORY.TITLE"))("description", \u0275\u0275pipeBind1(3, 6, "PORTALS.ERROR_VIEW.EMPTY_CATEGORY.DESCRIPTION"))("showActionButtons", false)("viewType", "EMPTY_CATEGORY");
  }
}
var CategoryContentViewComponent = class _CategoryContentViewComponent {
  constructor() {
    this.itemClicked = new EventEmitter();
    this.portalStore = inject(PortalStore);
    this.searchPhrase = this.portalStore.searchPhrase;
    this.sortType = this.portalStore.sortType;
  }
  static {
    this.\u0275fac = function CategoryContentViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoryContentViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryContentViewComponent, selectors: [["app-category-content-view"]], inputs: { items: "items" }, outputs: { itemClicked: "itemClicked" }, decls: 2, vars: 1, consts: [[1, "grid"], [3, "click"], [1, "title"], ["fill", "", "priority", "", "placeholder", "", "placeholder", "data:image/png;base64,iVBORw0K...", 1, "stream-icon", 3, "error", "ngSrc"], [1, "stream-icon-placeholder"], [1, "rating", 3, "matTooltip"], ["title", "No results", 3, "description", "showActionButtons", "viewType"], [3, "title", "description", "showActionButtons", "viewType"]], template: function CategoryContentViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CategoryContentViewComponent_Conditional_0_Template, 10, 12)(1, CategoryContentViewComponent_Conditional_1_Template, 5, 8);
      }
      if (rf & 2) {
        \u0275\u0275conditional((ctx.items == null ? null : ctx.items.length) > 0 ? 0 : 1);
      }
    }, dependencies: [
      MatCardModule,
      MatCard,
      MatCardActions,
      MatCardContent,
      MatIconModule,
      MatIcon,
      MatTooltipModule,
      MatTooltip,
      NgOptimizedImage,
      PlaylistErrorViewComponent,
      TranslateModule,
      FilterPipe,
      SortPipe,
      TranslatePipe
    ], styles: ['\n\n[_nghost-%COMP%] {\n  overflow-y: auto;\n  padding: 10px;\n}\nmat-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: none;\n}\nmat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 170px;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .stream-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative !important;\n  display: block;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .stream-icon-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #999;\n  max-height: 300px;\n  min-height: 255px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .stream-icon-placeholder[_ngcontent-%COMP%]::after {\n  content: "No cover";\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  word-break: break-all;\n  text-align: center;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.rating[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 6px;\n  background-color: #3bb33b;\n  color: #fff;\n  font-size: 0.8em;\n  border-radius: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 5px;\n}\n.rating[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 18px;\n  width: 18px;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryContentViewComponent, [{
    type: Component,
    args: [{ selector: "app-category-content-view", imports: [
      FilterPipe,
      SortPipe,
      MatCardModule,
      MatIconModule,
      MatTooltipModule,
      NgOptimizedImage,
      PlaylistErrorViewComponent,
      TranslateModule
    ], template: `@if (items?.length > 0) {
    <div class="grid">
        @for (
            item of items
                | filterBy: searchPhrase() : 'name'
                | sortBy: sortType();
            track $index
        ) {
            <mat-card (click)="itemClicked.emit(item)">
                <mat-card-content>
                    @if (item.stream_icon || item.cover || item.logo) {
                        <img
                            class="stream-icon"
                            [ngSrc]="
                                item.stream_icon || item.cover || item.logo
                            "
                            fill
                            priority
                            placeholder
                            placeholder="data:image/png;base64,iVBORw0K..."
                            (error)="
                                $event.target.src =
                                    './assets/images/default-poster.png'
                            "
                        />
                    }
                    @if (!item.stream_icon && !item.cover && !item.logo) {
                        <div class="stream-icon-placeholder"></div>
                    }
                    @if (item.rating || item.rating_imdb) {
                        <div
                            class="rating"
                            [matTooltip]="'XTREAM.IMDB_RATING' | translate"
                        >
                            <mat-icon>star</mat-icon
                            >{{ item.rating || item.rating_imdb }}
                        </div>
                    }
                </mat-card-content>
                <mat-card-actions>
                    <div class="title">{{ item.name || 'No name' }}</div>
                </mat-card-actions>
            </mat-card>
        }
        @if (!(items | filterBy: searchPhrase() : 'name')?.length) {
            <app-playlist-error-view
                title="No results"
                [description]="
                    'PORTALS.EMPTY_LIST_VIEW.NO_SEARCH_RESULTS' | translate
                "
                [showActionButtons]="false"
                [viewType]="'NO_SEARCH_RESULTS'"
            />
        }
    </div>
} @else {
    <app-playlist-error-view
        [title]="'PORTALS.ERROR_VIEW.EMPTY_CATEGORY.TITLE' | translate"
        [description]="
            'PORTALS.ERROR_VIEW.EMPTY_CATEGORY.DESCRIPTION' | translate
        "
        [showActionButtons]="false"
        [viewType]="'EMPTY_CATEGORY'"
    />
}
`, styles: ['/* src/app/xtream/category-content-view/category-content-view.component.scss */\n:host {\n  overflow-y: auto;\n  padding: 10px;\n}\nmat-card {\n  overflow: hidden;\n  transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: none;\n}\nmat-card:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n}\n.grid mat-card {\n  cursor: pointer;\n  width: 170px;\n}\n.grid mat-card mat-card-content {\n  padding: 0;\n  margin: 0;\n}\n.grid mat-card .stream-icon {\n  width: 100%;\n  position: relative !important;\n  display: block;\n}\n.grid mat-card .stream-icon-placeholder {\n  width: 100%;\n  background: #999;\n  max-height: 300px;\n  min-height: 255px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.grid mat-card .stream-icon-placeholder::after {\n  content: "No cover";\n}\n.grid mat-card .title {\n  word-break: break-all;\n  text-align: center;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.rating {\n  position: absolute;\n  top: 5px;\n  right: 6px;\n  background-color: #3bb33b;\n  color: #fff;\n  font-size: 0.8em;\n  border-radius: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 5px;\n}\n.rating mat-icon {\n  font-size: 16px;\n  height: 18px;\n  width: 18px;\n}\n'] }]
  }], null, { items: [{
    type: Input,
    args: [{ required: true }]
  }], itemClicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryContentViewComponent, { className: "CategoryContentViewComponent", filePath: "src/app/xtream/category-content-view/category-content-view.component.ts", lineNumber: 28 });
})();

// src/app/xtream/category-view/category-view.component.ts
function CategoryViewComponent_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "mat-card", 0);
    \u0275\u0275listener("click", function CategoryViewComponent_Conditional_1_For_2_Template_mat_card_click_1_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.categoryClicked.emit(item_r2));
    });
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "mat-card-content");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                        ", item_r2.category_name || item_r2.name || "No category name", "\n                    ");
  }
}
function CategoryViewComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275element(1, "app-playlist-error-view", 1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("description", \u0275\u0275pipeBind1(2, 3, "PORTALS.EMPTY_LIST_VIEW.NO_SEARCH_RESULTS"))("showActionButtons", false)("viewType", "NO_SEARCH_RESULTS");
  }
}
function CategoryViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275repeaterCreate(1, CategoryViewComponent_Conditional_1_For_2_Template, 7, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(3, "filterBy");
    \u0275\u0275conditionalCreate(4, CategoryViewComponent_Conditional_1_Conditional_4_Template, 4, 5);
    \u0275\u0275pipe(5, "filterBy");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(3, 1, ctx_r2.items, ctx_r2.searchPhrase(), "category_name"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!((tmp_2_0 = \u0275\u0275pipeBind3(5, 5, ctx_r2.items, ctx_r2.searchPhrase(), "category_name")) == null ? null : tmp_2_0.length) ? 4 : -1);
  }
}
function CategoryViewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "app-playlist-error-view", 2);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 4, "PORTALS.ERROR_VIEW.EMPTY_CATEGORY.TITLE"))("description", \u0275\u0275pipeBind1(3, 6, "PORTALS.ERROR_VIEW.EMPTY_CATEGORY.DESCRIPTION"))("showActionButtons", false)("viewType", "EMPTY_CATEGORY");
  }
}
var CategoryViewComponent = class _CategoryViewComponent {
  constructor() {
    this.categoryClicked = new EventEmitter();
    this.portalStore = inject(PortalStore);
    this.searchPhrase = this.portalStore.searchPhrase;
  }
  static {
    this.\u0275fac = function CategoryViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoryViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryViewComponent, selectors: [["app-category-view"]], inputs: { items: "items" }, outputs: { categoryClicked: "categoryClicked" }, decls: 3, vars: 1, consts: [["appearance", "outlined", 1, "category-item", 3, "click"], ["title", "No results", 3, "description", "showActionButtons", "viewType"], [3, "title", "description", "showActionButtons", "viewType"]], template: function CategoryViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0, "\n        ");
        \u0275\u0275conditionalCreate(1, CategoryViewComponent_Conditional_1_Template, 6, 9)(2, CategoryViewComponent_Conditional_2_Template, 5, 8);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.items == null ? null : ctx.items.length) > 0 ? 1 : 2);
      }
    }, dependencies: [
      MatCardModule,
      MatCard,
      MatCardContent,
      MatIconModule,
      PlaylistErrorViewComponent,
      TranslateModule,
      FilterPipe,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  overflow-y: auto;\n  padding: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  overflow-wrap: break-word;\n}\n.category-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 200px;\n}\n@media (max-width: 800px) {\n  .category-item[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryViewComponent, [{
    type: Component,
    args: [{ selector: "app-category-view", template: `
        @if (items?.length > 0) {
            @for (
                item of items | filterBy: searchPhrase() : 'category_name';
                track $index
            ) {
                <mat-card
                    appearance="outlined"
                    class="category-item"
                    (click)="categoryClicked.emit(item)"
                >
                    <mat-card-content>
                        {{
                            item.category_name ||
                                item.name ||
                                'No category name'
                        }}
                    </mat-card-content>
                </mat-card>
            }
            @if (
                !(items | filterBy: searchPhrase() : 'category_name')?.length
            ) {
                <app-playlist-error-view
                    title="No results"
                    [description]="
                        'PORTALS.EMPTY_LIST_VIEW.NO_SEARCH_RESULTS' | translate
                    "
                    [showActionButtons]="false"
                    [viewType]="'NO_SEARCH_RESULTS'"
                />
            }
        } @else {
            <app-playlist-error-view
                [title]="'PORTALS.ERROR_VIEW.EMPTY_CATEGORY.TITLE' | translate"
                [description]="
                    'PORTALS.ERROR_VIEW.EMPTY_CATEGORY.DESCRIPTION' | translate
                "
                [showActionButtons]="false"
                [viewType]="'EMPTY_CATEGORY'"
            />
        }
    `, imports: [
      FilterPipe,
      MatCardModule,
      MatIconModule,
      PlaylistErrorViewComponent,
      TranslateModule
    ], styles: ["/* src/app/xtream/category-view/category-view.component.scss */\n:host {\n  overflow-y: auto;\n  padding: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n}\nmat-card-content {\n  overflow-wrap: break-word;\n}\n.category-item {\n  cursor: pointer;\n  width: 200px;\n}\n@media (max-width: 800px) {\n  .category-item {\n    width: 100%;\n  }\n}\n"] }]
  }], null, { items: [{
    type: Input,
    args: [{ required: true }]
  }], categoryClicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryViewComponent, { className: "CategoryViewComponent", filePath: "src/app/xtream/category-view/category-view.component.ts", lineNumber: 64 });
})();

// src/app/xtream/navigation-bar/navigation-bar.component.ts
function NavigationBarComponent_Conditional_12_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "mat-button-toggle", 12);
    \u0275\u0275text(2, "\n          ");
    \u0275\u0275elementStart(3, "mat-icon", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n          ");
    \u0275\u0275elementStart(6, "span", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n      ");
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", item_r4.contentType);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function NavigationBarComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "mat-button-toggle-group", 11);
    \u0275\u0275listener("change", function NavigationBarComponent_Conditional_12_Template_mat_button_toggle_group_change_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeContentType($event.value));
    });
    \u0275\u0275text(2, "\n      ");
    \u0275\u0275repeaterCreate(3, NavigationBarComponent_Conditional_12_For_4_Template, 10, 3, null, null, \u0275\u0275componentInstance().trackByValue, true);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n  ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.contentType);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.contentTypeNavigationItems);
  }
}
function NavigationBarComponent_For_52_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n          ");
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n          ");
  }
}
function NavigationBarComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275listener("click", function NavigationBarComponent_For_52_Template_div_click_1_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.processBreadcrumbClick(item_r6));
    });
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
    \u0275\u0275conditionalCreate(6, NavigationBarComponent_For_52_Conditional_6_Template, 4, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n      ");
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const \u0275$index_87_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275$index_87_r7 !== ctx_r2.breadcrumbs.length - 1 ? 6 : -1);
  }
}
function NavigationBarComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n          ");
    \u0275\u0275elementStart(1, "button", 15);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function NavigationBarComponent_Conditional_58_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clickFavorites());
    });
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n        ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "TOP_MENU.TOGGLE_FAVORITE_FLAG"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n              ", ctx_r2.isFavoriteStream ? "star" : "star_outline", "\n            ");
  }
}
function NavigationBarComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275text(2, "\n          ");
    \u0275\u0275elementStart(3, "button", 17);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "sort");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const sortPlaylistMenu_r9 = \u0275\u0275reference(64);
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(4, 2, "CHANNELS.SORT_BY"))("matMenuTriggerFor", sortPlaylistMenu_r9);
  }
}
function NavigationBarComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275text(2, "\n          ");
    \u0275\u0275elementStart(3, "mat-form-field", 19);
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275elementStart(5, "mat-icon", 20);
    \u0275\u0275text(6, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n            ");
    \u0275\u0275elementStart(8, "input", 21);
    \u0275\u0275listener("ngModelChange", function NavigationBarComponent_Conditional_61_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.searchPhraseUpdate.next($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n      ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx_r2.searchPhrase());
  }
}
var NavigationBarComponent = class _NavigationBarComponent {
  constructor() {
    this.searchVisible = true;
    this.sortVisible = false;
    this.clientSideSearch = true;
    this.showCategories = false;
    this.favoriteVisible = false;
    this.contentTypeChanged = new EventEmitter();
    this.breadcrumbClicked = new EventEmitter();
    this.favoritesClicked = new EventEmitter();
    this.searchTextChanged = new EventEmitter();
    this.addToFavoritesClicked = new EventEmitter();
    this.removeFromFavoritesClicked = new EventEmitter();
    this.ContentTypeEnum = ContentType;
    this.dialog = inject(MatDialog);
    this.portalStore = inject(PortalStore);
    this.store = inject(Store);
    this.searchPhrase = this.portalStore.searchPhrase;
    this.searchPhraseUpdate = new Subject();
    this.currentPlaylist = this.store.selectSignal(selectCurrentPlaylist);
    this.sortType = this.portalStore.sortType;
    this.isFavoriteStream = false;
    this.settingsStore = inject(SettingsStore);
    this.searchPhraseUpdate.pipe(debounceTime(600), distinctUntilChanged()).subscribe((value) => {
      this.setSearchText(value);
    });
  }
  openPlaylistDetails() {
    this.dialog.open(PlaylistInfoComponent, {
      data: this.currentPlaylist()
    });
  }
  processBreadcrumbClick(item) {
    this.setSearchText("");
    this.breadcrumbClicked.emit(item);
  }
  setSortType(type) {
    this.portalStore.setSortType(type);
  }
  setSearchText(text) {
    if (this.clientSideSearch)
      this.portalStore.setSearchPhrase(text);
    else
      this.searchTextChanged.emit(text);
  }
  changeContentType(type) {
    this.setSearchText("");
    this.contentTypeChanged.emit(type);
  }
  trackByValue(_i, value) {
    return value.contentType;
  }
  clickFavorites() {
    const item = this.activeLiveStream;
    if (!this.isFavoriteStream) {
      this.addToFavoritesClicked.emit({
        name: item.name,
        stream_id: item.stream_id,
        cover: item.stream_icon,
        stream_type: "live"
      });
      this.isFavoriteStream = true;
    } else {
      this.removeFromFavoritesClicked.emit(item.stream_id);
      this.isFavoriteStream = false;
    }
  }
  ngOnChanges(changes) {
    if (changes.activeLiveStream && this.activeLiveStream) {
      this.checkFavorite();
    }
  }
  checkFavorite() {
    const activeLiveStream = this.activeLiveStream;
    this.favoritesLiveStream$.pipe(map((favorites) => favorites.some((fav) => fav.stream_id === activeLiveStream.stream_id))).subscribe((isFavorite) => {
      this.isFavoriteStream = isFavorite;
    });
  }
  openSettings() {
    this.dialog.open(SettingsComponent, {
      width: "1000px",
      height: "90%",
      data: { isDialog: true }
    });
  }
  static {
    this.\u0275fac = function NavigationBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavigationBarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavigationBarComponent, selectors: [["app-navigation-bar"]], inputs: { breadcrumbs: "breadcrumbs", contentType: "contentType", searchVisible: "searchVisible", sortVisible: "sortVisible", contentTypeNavigationItems: "contentTypeNavigationItems", clientSideSearch: "clientSideSearch", showCategories: "showCategories", activeLiveStream: "activeLiveStream", favoritesLiveStream$: "favoritesLiveStream$", favoriteVisible: "favoriteVisible" }, outputs: { contentTypeChanged: "contentTypeChanged", breadcrumbClicked: "breadcrumbClicked", favoritesClicked: "favoritesClicked", searchTextChanged: "searchTextChanged", addToFavoritesClicked: "addToFavoritesClicked", removeFromFavoritesClicked: "removeFromFavoritesClicked" }, features: [\u0275\u0275NgOnChangesFeature], decls: 101, vars: 25, consts: [["sortPlaylistMenu", "matMenu"], ["id", "navigation"], ["mat-button", "", "routerLink", "/"], [1, "button-label"], ["mat-button", "", 3, "click"], ["id", "sub-panel"], [1, "breadcrumbs"], [1, "search-container"], [1, "favorite"], [3, "click"], ["mat-menu-item", "", 3, "click"], ["name", "contentType", "aria-label", "Content Type", "hideSingleSelectionIndicator", "", 3, "change", "value"], [3, "value"], [1, "icon"], [1, "label"], ["mat-icon-button", "", 3, "click", "matTooltip"], [1, "sort"], ["mat-icon-button", "", "data-test-id", "sort-playlist", 3, "matTooltip", "matMenuTriggerFor"], [1, "search"], [1, "search-input"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search by name", "type", "search", 3, "ngModelChange", "ngModel"]], template: function NavigationBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275text(1, "\n  ");
        \u0275\u0275elementStart(2, "button", 2);
        \u0275\u0275text(3, "\n    ");
        \u0275\u0275elementStart(4, "mat-icon");
        \u0275\u0275text(5, "home");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "\n    ");
        \u0275\u0275elementStart(7, "span", 3);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n  ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n\n  ");
        \u0275\u0275conditionalCreate(12, NavigationBarComponent_Conditional_12_Template, 6, 1);
        \u0275\u0275elementStart(13, "div");
        \u0275\u0275text(14, "\n    ");
        \u0275\u0275elementStart(15, "button", 4);
        \u0275\u0275listener("click", function NavigationBarComponent_Template_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openPlaylistDetails());
        });
        \u0275\u0275text(16, "\n      ");
        \u0275\u0275elementStart(17, "mat-icon");
        \u0275\u0275text(18, "info");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, "\n      ");
        \u0275\u0275elementStart(20, "span", 3);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, "\n\n    ");
        \u0275\u0275elementStart(25, "button", 4);
        \u0275\u0275listener("click", function NavigationBarComponent_Template_button_click_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.favoritesClicked.emit());
        });
        \u0275\u0275text(26, "\n      ");
        \u0275\u0275elementStart(27, "mat-icon");
        \u0275\u0275text(28, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, "\n      ");
        \u0275\u0275elementStart(30, "span", 3);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, "\n\n    ");
        \u0275\u0275elementStart(35, "button", 4);
        \u0275\u0275listener("click", function NavigationBarComponent_Template_button_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openSettings());
        });
        \u0275\u0275text(36, "\n      ");
        \u0275\u0275elementStart(37, "mat-icon");
        \u0275\u0275text(38, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, "\n      ");
        \u0275\u0275elementStart(40, "span", 3);
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(44, "\n  ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, "\n");
        \u0275\u0275elementStart(47, "div", 5);
        \u0275\u0275text(48, "\n  ");
        \u0275\u0275elementStart(49, "div", 6);
        \u0275\u0275text(50, "\n    ");
        \u0275\u0275repeaterCreate(51, NavigationBarComponent_For_52_Template, 8, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275text(53, "\n    ");
        \u0275\u0275elementStart(54, "div", 7);
        \u0275\u0275text(55, "\n      ");
        \u0275\u0275elementStart(56, "div", 8);
        \u0275\u0275text(57, "\n        ");
        \u0275\u0275conditionalCreate(58, NavigationBarComponent_Conditional_58_Template, 8, 4);
        \u0275\u0275elementEnd();
        \u0275\u0275text(59, "\n      ");
        \u0275\u0275conditionalCreate(60, NavigationBarComponent_Conditional_60_Template, 11, 4);
        \u0275\u0275conditionalCreate(61, NavigationBarComponent_Conditional_61_Template, 12, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275text(62, "\n    ");
        \u0275\u0275elementStart(63, "mat-menu", null, 0);
        \u0275\u0275text(65, "\n      ");
        \u0275\u0275elementStart(66, "section", 9);
        \u0275\u0275listener("click", function NavigationBarComponent_Template_section_click_66_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        });
        \u0275\u0275text(67, "\n        ");
        \u0275\u0275elementStart(68, "button", 10);
        \u0275\u0275listener("click", function NavigationBarComponent_Template_button_click_68_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSortType("date"));
        });
        \u0275\u0275text(69, "\n          ");
        \u0275\u0275elementStart(70, "mat-icon");
        \u0275\u0275text(71, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275text(72, "\n          ");
        \u0275\u0275elementStart(73, "span");
        \u0275\u0275text(74);
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(76, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, "\n        ");
        \u0275\u0275elementStart(78, "button", 10);
        \u0275\u0275listener("click", function NavigationBarComponent_Template_button_click_78_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSortType("rating"));
        });
        \u0275\u0275text(79, "\n          ");
        \u0275\u0275elementStart(80, "mat-icon");
        \u0275\u0275text(81, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275text(82, "\n          ");
        \u0275\u0275elementStart(83, "span");
        \u0275\u0275text(84);
        \u0275\u0275pipe(85, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(86, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(87, "\n        ");
        \u0275\u0275elementStart(88, "button", 10);
        \u0275\u0275listener("click", function NavigationBarComponent_Template_button_click_88_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSortType("alpha"));
        });
        \u0275\u0275text(89, "\n          ");
        \u0275\u0275elementStart(90, "mat-icon");
        \u0275\u0275text(91, "sort_by_alpha");
        \u0275\u0275elementEnd();
        \u0275\u0275text(92, "\n          ");
        \u0275\u0275elementStart(93, "span");
        \u0275\u0275text(94);
        \u0275\u0275pipe(95, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(96, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(97, "\n      ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(99, "\n  ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(100, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "PLAYLISTS"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.showCategories ? 12 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 13, "Info"));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 15, "CHANNELS.FAVORITES"));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 17, "MENU.SETTINGS"));
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.breadcrumbs);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.favoriteVisible && ctx.activeLiveStream ? 58 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.sortVisible ? 60 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.searchVisible ? 61 : -1);
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 19, "CHANNELS.SORT_BY_DATE"));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 21, "CHANNELS.SORT_BY_RATING"));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(95, 23, "CHANNELS.SORT_BY_NAME"));
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatFormField,
      MatPrefix,
      MatFormFieldModule,
      RouterLink,
      TranslateModule,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatCheckboxModule,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n#navigation[_ngcontent-%COMP%] {\n  height: 70px;\n  background: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n}\n#sub-panel[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid #ccc;\n  padding: 0 1em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40px;\n}\n#sub-panel[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  display: flex;\n}\n#sub-panel[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n#sub-panel[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(:last-child)::after {\n  display: none;\n}\n#sub-panel[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n#sub-panel[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n#sub-panel[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.search-input[_ngcontent-%COMP%] {\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n  .search-input div {\n  border-radius: 20px;\n}\n  .dark-theme #navigation, \n  .dark-theme #sub-panel {\n  background: #1b1c1c;\n}\n  .dark-theme #sub-panel {\n  border-bottom: 1px solid #333;\n}\n  div[matformfieldlineripple] {\n  display: none;\n}\n@media (max-width: 800px) {\n  .button-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #sub-panel[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 10px 1em;\n  }\n  #sub-panel[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]    > .search-input[_ngcontent-%COMP%] {\n    width: 160px;\n  }\n  .breadcrumbs[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .label[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationBarComponent, [{
    type: Component,
    args: [{ selector: "app-navigation-bar", imports: [
      FormsModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      RouterLink,
      TranslateModule,
      MatMenuModule,
      MatCheckboxModule,
      MatTooltipModule
    ], template: `<div id="navigation">
  <button mat-button routerLink="/">
    <mat-icon>home</mat-icon>
    <span class="button-label">{{ 'PLAYLISTS' | translate }}</span>
  </button>

  @if (showCategories) {
    <mat-button-toggle-group
      name="contentType"
      aria-label="Content Type"
      [value]="contentType"
      (change)="changeContentType($event.value)"
      hideSingleSelectionIndicator
      >
      @for (
        item of contentTypeNavigationItems; track trackByValue($index,
        item)) {
        <mat-button-toggle
          [value]="item.contentType"
          >
          <mat-icon class="icon">{{ item.icon }}</mat-icon>
          <span class="label">{{ item.label }}</span>
        </mat-button-toggle>
      }
    </mat-button-toggle-group>
  }

  <div>
    <button mat-button (click)="openPlaylistDetails()">
      <mat-icon>info</mat-icon>
      <span class="button-label">{{ 'Info' | translate }}</span>
    </button>

    <button mat-button (click)="favoritesClicked.emit()">
      <mat-icon>star</mat-icon>
      <span class="button-label">{{
        'CHANNELS.FAVORITES' | translate
      }}</span>
    </button>

    <button mat-button (click)="openSettings()">
      <mat-icon>settings</mat-icon>
      <span class="button-label">{{ 'MENU.SETTINGS' | translate }}</span>
    </button>
  </div>
</div>
<div id="sub-panel">
  <div class="breadcrumbs">
    @for (item of breadcrumbs; track item; let i = $index) {
      <div
        (click)="processBreadcrumbClick(item)"
        >
        <span>{{ item.title }}</span>
        @if (i !== breadcrumbs.length - 1) {
          <mat-icon
            >chevron_right</mat-icon
            >
          }
        </div>
      }
    </div>
    <div class="search-container">
      <div class="favorite">
        @if (favoriteVisible && activeLiveStream) {
          <button
            mat-icon-button
            (click)="clickFavorites()"
            [matTooltip]="'TOP_MENU.TOGGLE_FAVORITE_FLAG' | translate"
            >
            <mat-icon>
              {{ isFavoriteStream ? 'star' : 'star_outline' }}
            </mat-icon>
          </button>
        }
      </div>
      @if (sortVisible) {
        <div class="sort">
          <button
            mat-icon-button
            [matTooltip]="'CHANNELS.SORT_BY' | translate"
            [matMenuTriggerFor]="sortPlaylistMenu"
            data-test-id="sort-playlist"
            >
            <mat-icon>sort</mat-icon>
          </button>
        </div>
      }
      @if (searchVisible) {
        <div class="search">
          <mat-form-field class="search-input">
            <mat-icon matPrefix>search</mat-icon>
            <input
              matInput
              placeholder="Search by name"
              type="search"
              [ngModel]="searchPhrase()"
              (ngModelChange)="searchPhraseUpdate.next($event)"
              />
          </mat-form-field>
        </div>
      }
    </div>
    <mat-menu #sortPlaylistMenu="matMenu">
      <section (click)="$event.stopPropagation()">
        <button mat-menu-item (click)="setSortType('date')">
          <mat-icon>calendar_today</mat-icon>
          <span>{{ 'CHANNELS.SORT_BY_DATE' | translate }}</span>
        </button>
        <button mat-menu-item (click)="setSortType('rating')">
          <mat-icon>star</mat-icon>
          <span>{{ 'CHANNELS.SORT_BY_RATING' | translate }}</span>
        </button>
        <button mat-menu-item (click)="setSortType('alpha')">
          <mat-icon>sort_by_alpha</mat-icon>
          <span>{{ 'CHANNELS.SORT_BY_NAME' | translate }}</span>
        </button>
      </section>
    </mat-menu>
  </div>
`, styles: ["/* src/app/xtream/navigation-bar/navigation-bar.component.scss */\n:host {\n  position: relative;\n}\n#navigation {\n  height: 70px;\n  background: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n}\n#sub-panel {\n  background: white;\n  border-bottom: 1px solid #ccc;\n  padding: 0 1em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40px;\n}\n#sub-panel .breadcrumbs {\n  display: flex;\n}\n#sub-panel .breadcrumbs div {\n  display: flex;\n  align-items: center;\n}\n#sub-panel .breadcrumbs div:not(:last-child)::after {\n  display: none;\n}\n#sub-panel .breadcrumbs div span:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n#sub-panel .search-container {\n  display: flex;\n}\n#sub-panel .search {\n  text-align: center;\n}\n.search-input {\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n::ng-deep .search-input div {\n  border-radius: 20px;\n}\n::ng-deep .dark-theme #navigation,\n::ng-deep .dark-theme #sub-panel {\n  background: #1b1c1c;\n}\n::ng-deep .dark-theme #sub-panel {\n  border-bottom: 1px solid #333;\n}\n::ng-deep div[matformfieldlineripple] {\n  display: none;\n}\n@media (max-width: 800px) {\n  .button-label {\n    display: none;\n  }\n  #sub-panel {\n    height: auto;\n    padding: 10px 1em;\n  }\n  #sub-panel .search > .search-input {\n    width: 160px;\n  }\n  .breadcrumbs {\n    flex-direction: column;\n  }\n  .label {\n    display: none;\n  }\n}\n"] }]
  }], () => [], { breadcrumbs: [{
    type: Input,
    args: [{ required: true }]
  }], contentType: [{
    type: Input,
    args: [{ required: true }]
  }], searchVisible: [{
    type: Input
  }], sortVisible: [{
    type: Input
  }], contentTypeNavigationItems: [{
    type: Input
  }], clientSideSearch: [{
    type: Input
  }], showCategories: [{
    type: Input
  }], activeLiveStream: [{
    type: Input
  }], favoritesLiveStream$: [{
    type: Input
  }], favoriteVisible: [{
    type: Input
  }], contentTypeChanged: [{
    type: Output
  }], breadcrumbClicked: [{
    type: Output
  }], favoritesClicked: [{
    type: Output
  }], searchTextChanged: [{
    type: Output
  }], addToFavoritesClicked: [{
    type: Output
  }], removeFromFavoritesClicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavigationBarComponent, { className: "NavigationBarComponent", filePath: "src/app/xtream/navigation-bar/navigation-bar.component.ts", lineNumber: 60 });
})();

// src/app/portals/live-stream-layout/live-stream-layout.component.ts
function LiveStreamLayoutComponent_mat_list_option_22_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r2.stream_icon, \u0275\u0275sanitizeUrl);
  }
}
function LiveStreamLayoutComponent_mat_list_option_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list-option", 9);
    \u0275\u0275listener("click", function LiveStreamLayoutComponent_mat_list_option_22_Template_mat_list_option_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.itemClicked.emit(item_r2));
    });
    \u0275\u0275text(1, "\n                        ");
    \u0275\u0275template(2, LiveStreamLayoutComponent_mat_list_option_22_img_2_Template, 1, 1, "img", 10);
    \u0275\u0275text(3, "\n                        ");
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                    ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("selected", item_r2.stream_id === (ctx_r2.activeLiveStream == null ? null : ctx_r2.activeLiveStream.stream_id))("value", item_r2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r2.stream_icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                            ", item_r2.name, "\n                        ");
  }
}
function LiveStreamLayoutComponent_Conditional_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275element(3, "app-web-player-view", 14);
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("streamUrl", ctx_r2.streamUrl);
  }
}
function LiveStreamLayoutComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275conditionalCreate(1, LiveStreamLayoutComponent_Conditional_29_Conditional_1_Template, 6, 1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.streamUrl ? 1 : -1);
  }
}
function LiveStreamLayoutComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275element(5, "app-epg-view", 17);
    \u0275\u0275text(6, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n    ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("epgItems", ctx_r2.epgItems);
  }
}
function LiveStreamLayoutComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275text(2, "Please select a channel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n    ");
  }
}
var LiveStreamLayoutComponent = class _LiveStreamLayoutComponent {
  constructor() {
    this.player = VideoPlayer.VideoJs;
    this.itemClicked = new EventEmitter();
    this.searchString = signal("", ...ngDevMode ? [{ debugName: "searchString" }] : []);
  }
  trackBy(_index, item) {
    return item.stream_id;
  }
  static {
    this.\u0275fac = function LiveStreamLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LiveStreamLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LiveStreamLayoutComponent, selectors: [["app-live-stream-layout"]], inputs: { channels: "channels", player: "player", epgItems: "epgItems", streamUrl: "streamUrl", activeLiveStream: "activeLiveStream" }, outputs: { itemClicked: "itemClicked" }, decls: 33, vars: 17, consts: [[1, "sidebar"], [1, "sidebar-content"], [1, "search-panel"], [1, "search-bar"], ["matPrefix", ""], ["matInput", "", "type", "search", 3, "ngModelChange", "placeholder", "ngModel"], [3, "multiple"], [1, "scroll-viewport-portals", 3, "itemSize"], [3, "selected", "value", "click", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [3, "click", "selected", "value"], ["matListItemAvatar", "", "class", "stream-icon", 3, "src", 4, "ngIf"], ["matListItemTitle", "", 1, "title"], ["matListItemAvatar", "", 1, "stream-icon", 3, "src"], [1, "video-player"], [3, "streamUrl"], [1, "epg"], [1, "epg-content"], [3, "epgItems"], [1, "no-channel-selected"]], template: function LiveStreamLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div");
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "div", 0);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "div", 1);
        \u0275\u0275text(5, "\n            ");
        \u0275\u0275elementStart(6, "div", 2);
        \u0275\u0275text(7, "\n                ");
        \u0275\u0275elementStart(8, "mat-form-field", 3);
        \u0275\u0275text(9, "\n                    ");
        \u0275\u0275elementStart(10, "mat-icon", 4);
        \u0275\u0275text(11, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, "\n                    ");
        \u0275\u0275elementStart(13, "input", 5);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function LiveStreamLayoutComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchString, $event) || (ctx.searchString = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, "\n            ");
        \u0275\u0275elementStart(18, "mat-selection-list", 6);
        \u0275\u0275text(19, "\n                ");
        \u0275\u0275elementStart(20, "cdk-virtual-scroll-viewport", 7);
        \u0275\u0275text(21, "\n                    ");
        \u0275\u0275template(22, LiveStreamLayoutComponent_mat_list_option_22_Template, 7, 4, "mat-list-option", 8);
        \u0275\u0275pipe(23, "filterBy");
        \u0275\u0275text(24, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, "\n    ");
        \u0275\u0275conditionalCreate(29, LiveStreamLayoutComponent_Conditional_29_Template, 2, 1);
        \u0275\u0275conditionalCreate(30, LiveStreamLayoutComponent_Conditional_30_Template, 9, 1)(31, LiveStreamLayoutComponent_Conditional_31_Template, 4, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, "\n");
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.player === "videojs" || ctx.player === "html5" ? "itv-container" : "itv-container-epg");
        \u0275\u0275advance(13);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(14, 11, "CHANNELS.SEARCH_CHANNEL"));
        \u0275\u0275twoWayProperty("ngModel", ctx.searchString);
        \u0275\u0275advance(5);
        \u0275\u0275property("multiple", false);
        \u0275\u0275advance(2);
        \u0275\u0275property("itemSize", 56);
        \u0275\u0275advance(2);
        \u0275\u0275property("cdkVirtualForOf", \u0275\u0275pipeBind3(23, 13, ctx.channels, ctx.searchString(), "name"))("cdkVirtualForTrackBy", ctx.trackBy)("cdkVirtualForTemplateCacheSize", 0);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.player === "videojs" || ctx.player === "html5" ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.streamUrl ? 30 : 31);
      }
    }, dependencies: [
      EpgViewComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatListModule,
      MatSelectionList,
      MatListOption,
      MatListItemAvatar,
      MatListItemTitle,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatFormField,
      MatPrefix,
      MatFormFieldModule,
      NgIf,
      ScrollingModule,
      CdkFixedSizeVirtualScroll,
      CdkVirtualForOf,
      CdkVirtualScrollViewport,
      WebPlayerViewComponent,
      TranslateModule,
      FilterPipe,
      TranslatePipe
    ], styles: ['\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\n.itv-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 330px 1fr 1fr;\n  grid-template-rows: 50% 50%;\n  gap: 0 0;\n  grid-auto-flow: row;\n  grid-template-areas: "sidebar video-player video-player" "sidebar epg epg";\n  height: 100%;\n}\n.itv-container-epg[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 330px 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  gap: 0 0;\n  grid-auto-flow: row;\n  grid-template-areas: "sidebar epg epg" "sidebar epg epg" "sidebar epg epg";\n  height: 100%;\n}\n.sidebar[_ngcontent-%COMP%] {\n  grid-area: sidebar;\n}\n.video-player[_ngcontent-%COMP%] {\n  grid-area: video-player;\n}\n.epg[_ngcontent-%COMP%] {\n  grid-area: epg;\n}\n.search-panel[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n  margin-bottom: -15px;\n}\n.search-bar[_ngcontent-%COMP%] {\n  width: 90%;\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.epg-content[_ngcontent-%COMP%] {\n  height: calc(50vh - 20px);\n  overflow-y: auto;\n  border-right: #111 1px solid;\n  padding-bottom: 20px;\n}\n.sidebar-content[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n  border-right: #111 1px solid;\n  overflow-x: hidden;\n}\n.no-channel-selected[_ngcontent-%COMP%] {\n  margin: 10px;\n}\nmat-list-option[_ngcontent-%COMP%] {\n  width: 320px;\n}\n  .search-bar div {\n  border-radius: 20px;\n}'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveStreamLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-live-stream-layout", imports: [
      EpgViewComponent,
      FilterPipe,
      FormsModule,
      MatListModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      NgIf,
      ScrollingModule,
      WebPlayerViewComponent,
      TranslateModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div
    [class]="
        player === 'videojs' || player === 'html5'
            ? 'itv-container'
            : 'itv-container-epg'
    "
>
    <div class="sidebar">
        <div class="sidebar-content">
            <div class="search-panel">
                <mat-form-field class="search-bar">
                    <mat-icon matPrefix>search</mat-icon>
                    <input
                        matInput
                        type="search"
                        [placeholder]="'CHANNELS.SEARCH_CHANNEL' | translate"
                        [(ngModel)]="searchString"
                    />
                </mat-form-field>
            </div>
            <mat-selection-list [multiple]="false">
                <cdk-virtual-scroll-viewport
                    [itemSize]="56"
                    class="scroll-viewport-portals"
                >
                    <mat-list-option
                        *cdkVirtualFor="
                            let item of channels
                                | filterBy: searchString() : 'name';
                            trackBy: trackBy;
                            templateCacheSize: 0
                        "
                        [selected]="item.stream_id === activeLiveStream?.stream_id"
                        [value]="item"
                        (click)="itemClicked.emit(item)"
                    >
                        <img
                            matListItemAvatar
                            class="stream-icon"
                            *ngIf="item.stream_icon"
                            [src]="item.stream_icon"
                        />
                        <div class="title" matListItemTitle>
                            {{ item.name }}
                        </div>
                    </mat-list-option>
                </cdk-virtual-scroll-viewport>
            </mat-selection-list>
        </div>
    </div>
    @if (player === 'videojs' || player === 'html5') {
        @if (streamUrl) {
            <div class="video-player">
                <app-web-player-view [streamUrl]="streamUrl" />
            </div>
        }
    }
    @if (streamUrl) {
        <div class="epg">
            <div class="epg-content">
                <app-epg-view [epgItems]="epgItems" />
            </div>
        </div>
    } @else {
        <div class="no-channel-selected">Please select a channel</div>
    }
</div>
`, styles: ['/* src/app/portals/live-stream-layout/live-stream-layout.component.scss */\n:host {\n  width: 100%;\n}\n.itv-container {\n  display: grid;\n  grid-template-columns: 330px 1fr 1fr;\n  grid-template-rows: 50% 50%;\n  gap: 0 0;\n  grid-auto-flow: row;\n  grid-template-areas: "sidebar video-player video-player" "sidebar epg epg";\n  height: 100%;\n}\n.itv-container-epg {\n  display: grid;\n  grid-template-columns: 330px 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  gap: 0 0;\n  grid-auto-flow: row;\n  grid-template-areas: "sidebar epg epg" "sidebar epg epg" "sidebar epg epg";\n  height: 100%;\n}\n.sidebar {\n  grid-area: sidebar;\n}\n.video-player {\n  grid-area: video-player;\n}\n.epg {\n  grid-area: epg;\n}\n.search-panel {\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n  margin-bottom: -15px;\n}\n.search-bar {\n  width: 90%;\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.epg-content {\n  height: calc(50vh - 20px);\n  overflow-y: auto;\n  border-right: #111 1px solid;\n  padding-bottom: 20px;\n}\n.sidebar-content {\n  height: 100%;\n  overflow-y: auto;\n  border-right: #111 1px solid;\n  overflow-x: hidden;\n}\n.no-channel-selected {\n  margin: 10px;\n}\nmat-list-option {\n  width: 320px;\n}\n::ng-deep .search-bar div {\n  border-radius: 20px;\n}\n'] }]
  }], null, { channels: [{
    type: Input,
    args: [{ required: true }]
  }], player: [{
    type: Input,
    args: [{ required: true }]
  }], epgItems: [{
    type: Input
  }], streamUrl: [{
    type: Input
  }], activeLiveStream: [{
    type: Input
  }], itemClicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LiveStreamLayoutComponent, { className: "LiveStreamLayoutComponent", filePath: "src/app/portals/live-stream-layout/live-stream-layout.component.ts", lineNumber: 43 });
})();

// src/app/xtream/player-dialog/player-dialog.component.ts
var PlayerDialogComponent = class _PlayerDialogComponent {
  constructor(data, snackBar, translateService) {
    this.snackBar = snackBar;
    this.translateService = translateService;
    this.streamUrl = data.streamUrl;
    this.title = data.title;
  }
  showCopyNotification() {
    this.snackBar.open(this.translateService.instant("PORTALS.STREAM_URL_COPIED"), null, {
      duration: 2e3
    });
  }
  static {
    this.\u0275fac = function PlayerDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlayerDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(TranslateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlayerDialogComponent, selectors: [["ng-component"]], decls: 27, vars: 10, consts: [["mat-dialog-title", ""], [1, "content"], [3, "streamUrl"], [1, "link-input"], ["matInput", "", "formControlName", "streamUrl", "disabled", "", 3, "value"], [1, "align-actions"], ["mat-button", "", 3, "click", "cdkCopyToClipboard"], ["mat-button", "", "mat-dialog-close", "", "color", "accent"]], template: function PlayerDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275text(2, "\n");
        \u0275\u0275elementStart(3, "mat-dialog-content", 1);
        \u0275\u0275text(4, "\n    ");
        \u0275\u0275element(5, "app-web-player-view", 2);
        \u0275\u0275text(6, "\n    ");
        \u0275\u0275elementStart(7, "mat-form-field", 3);
        \u0275\u0275text(8, "\n        ");
        \u0275\u0275element(9, "input", 4);
        \u0275\u0275text(10, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, "\n");
        \u0275\u0275elementStart(13, "mat-dialog-actions", 5);
        \u0275\u0275text(14, "\n    ");
        \u0275\u0275elementStart(15, "button", 6);
        \u0275\u0275listener("click", function PlayerDialogComponent_Template_button_click_15_listener() {
          return ctx.showCopyNotification();
        });
        \u0275\u0275text(16, "\n        ");
        \u0275\u0275elementStart(17, "mat-icon");
        \u0275\u0275text(18, "content_copy");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, "\n    ");
        \u0275\u0275elementStart(22, "button", 7);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(4);
        \u0275\u0275property("streamUrl", ctx.streamUrl);
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.streamUrl);
        \u0275\u0275advance(6);
        \u0275\u0275property("cdkCopyToClipboard", ctx.streamUrl);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(20, 6, "PORTALS.COPY_STREAM_URL"), "\n    ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(24, 8, "CLOSE"), "\n    ");
      }
    }, dependencies: [
      ClipboardModule,
      CdkCopyToClipboard,
      MatButtonModule,
      MatButton,
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      MatDialogActions,
      MatDialogContent,
      MatFormFieldModule,
      MatFormField,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      TranslateModule,
      WebPlayerViewComponent,
      TranslatePipe
    ], styles: ["/* src/app/xtream/player-dialog/player-dialog.component.scss */\n.content {\n  overflow: hidden;\n  padding: 10px !important;\n}\n.link-input {\n  width: 98%;\n  padding-top: 5px;\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.align-actions {\n  justify-content: space-between;\n}\nmat-dialog-content .video-js {\n  height: 500px !important;\n}\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlayerDialogComponent, [{
    type: Component,
    args: [{ imports: [
      ClipboardModule,
      MatButtonModule,
      MatDialogModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      TranslateModule,
      WebPlayerViewComponent
    ], encapsulation: ViewEncapsulation.None, template: `<h2 mat-dialog-title>{{ title }}</h2>
<mat-dialog-content class="content">
    <app-web-player-view [streamUrl]="streamUrl" />
    <mat-form-field class="link-input">
        <input
            matInput
            formControlName="streamUrl"
            [value]="streamUrl"
            disabled
        />
    </mat-form-field>
</mat-dialog-content>
<mat-dialog-actions class="align-actions">
    <button
        mat-button
        [cdkCopyToClipboard]="streamUrl"
        (click)="showCopyNotification()"
    >
        <mat-icon>content_copy</mat-icon>
        {{ 'PORTALS.COPY_STREAM_URL' | translate }}
    </button>
    <button mat-button mat-dialog-close color="accent">
        {{ 'CLOSE' | translate }}
    </button>
</mat-dialog-actions>
`, styles: ["/* src/app/xtream/player-dialog/player-dialog.component.scss */\n.content {\n  overflow: hidden;\n  padding: 10px !important;\n}\n.link-input {\n  width: 98%;\n  padding-top: 5px;\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.align-actions {\n  justify-content: space-between;\n}\nmat-dialog-content .video-js {\n  height: 500px !important;\n}\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatSnackBar }, { type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlayerDialogComponent, { className: "PlayerDialogComponent", filePath: "src/app/xtream/player-dialog/player-dialog.component.ts", lineNumber: 32 });
})();

// src/app/xtream/season-container/season-container.component.ts
function SeasonContainerComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "mat-card", 1);
    \u0275\u0275listener("click", function SeasonContainerComponent_Conditional_5_For_2_Template_mat_card_click_1_listener() {
      const season_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectSeason(season_r2.key));
    });
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "mat-card-content");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n    ");
  }
  if (rf & 2) {
    const season_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Season ", season_r2.key);
  }
}
function SeasonContainerComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275repeaterCreate(1, SeasonContainerComponent_Conditional_5_For_2_Template, 7, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "keyvalue");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r2.seasons));
  }
}
function SeasonContainerComponent_Conditional_6_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n          ");
    \u0275\u0275elementStart(1, "mat-card-content");
    \u0275\u0275element(2, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n        ");
  }
  if (rf & 2) {
    const episode_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", episode_r6.info.movie_image, \u0275\u0275sanitizeUrl);
  }
}
function SeasonContainerComponent_Conditional_6_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "mat-card", 2);
    \u0275\u0275listener("click", function SeasonContainerComponent_Conditional_6_For_8_Template_mat_card_click_1_listener() {
      const episode_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectEpisode(episode_r6));
    });
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275conditionalCreate(3, SeasonContainerComponent_Conditional_6_For_8_Conditional_3_Template, 4, 1);
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
  }
  if (rf & 2) {
    const episode_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(episode_r6.info.movie_image ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\n          ", episode_r6.episode_num, ". ", episode_r6.title, "\n        ");
  }
}
function SeasonContainerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "mat-card", 2);
    \u0275\u0275listener("click", function SeasonContainerComponent_Conditional_6_Template_mat_card_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedSeason = void 0);
    });
    \u0275\u0275text(2, "\n      ");
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275text(4, "< Back to seasons");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n    ");
    \u0275\u0275repeaterCreate(7, SeasonContainerComponent_Conditional_6_For_8_Template, 8, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r2.seasons[ctx_r2.selectedSeason]);
  }
}
var SeasonContainerComponent = class _SeasonContainerComponent {
  constructor() {
    this.episodeClicked = new EventEmitter();
  }
  selectSeason(seasonKey) {
    this.selectedSeason = seasonKey;
  }
  selectEpisode(episode) {
    this.episodeClicked.emit(episode);
  }
  static {
    this.\u0275fac = function SeasonContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeasonContainerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SeasonContainerComponent, selectors: [["app-season-container"]], inputs: { seasons: "seasons" }, outputs: { episodeClicked: "episodeClicked" }, decls: 8, vars: 1, consts: [[1, "seasons-container"], [1, "season-item", 3, "click"], [1, "episode-item", 3, "click"], [1, "episode-title"], [1, "episode-cover", 3, "src"]], template: function SeasonContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3");
        \u0275\u0275text(1, "Seasons and episodes");
        \u0275\u0275elementEnd();
        \u0275\u0275text(2, "\n");
        \u0275\u0275elementStart(3, "div", 0);
        \u0275\u0275text(4, "\n  ");
        \u0275\u0275conditionalCreate(5, SeasonContainerComponent_Conditional_5_Template, 4, 2)(6, SeasonContainerComponent_Conditional_6_Template, 9, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(!ctx.selectedSeason ? 5 : 6);
      }
    }, dependencies: [MatCardModule, MatCard, MatCardContent, KeyValuePipe], styles: ["\n\n[_nghost-%COMP%] {\n  margin: 10px;\n  display: block;\n  padding: 20px 0;\n}\n.seasons-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: wrap;\n  gap: 10px;\n}\n.season-item[_ngcontent-%COMP%], \n.episode-item[_ngcontent-%COMP%] {\n  min-height: 100px;\n  justify-content: center;\n  width: 150px;\n  cursor: pointer;\n  display: block;\n}\n.episode-item[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.episode-item[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.episode-item[_ngcontent-%COMP%]   .episode-title[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.episode-item[_ngcontent-%COMP%]   .episode-cover[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeasonContainerComponent, [{
    type: Component,
    args: [{ selector: "app-season-container", imports: [KeyValuePipe, MatCardModule], template: '<h3>Seasons and episodes</h3>\n<div class="seasons-container">\n  @if (!selectedSeason) {\n    @for (season of seasons | keyvalue; track season) {\n      <mat-card\n        class="season-item"\n        (click)="selectSeason(season.key)"\n        >\n        <mat-card-content>Season {{ season.key }}</mat-card-content>\n      </mat-card>\n    }\n  } @else {\n    <mat-card class="episode-item" (click)="selectedSeason = undefined">\n      <div class="episode-title">< Back to seasons</div>\n    </mat-card>\n    @for (episode of seasons[selectedSeason]; track episode) {\n      <mat-card\n        class="episode-item"\n        (click)="selectEpisode(episode)"\n        >\n        @if (episode.info.movie_image) {\n          <mat-card-content\n            ><img [src]="episode.info.movie_image" class="episode-cover"\n          /></mat-card-content>\n        }\n        <div class="episode-title">\n          {{ episode.episode_num }}. {{ episode.title }}\n        </div>\n      </mat-card>\n    }\n  }\n\n</div>\n', styles: ["/* src/app/xtream/season-container/season-container.component.scss */\n:host {\n  margin: 10px;\n  display: block;\n  padding: 20px 0;\n}\n.seasons-container {\n  width: 100%;\n  display: flex;\n  flex-flow: wrap;\n  gap: 10px;\n}\n.season-item,\n.episode-item {\n  min-height: 100px;\n  justify-content: center;\n  width: 150px;\n  cursor: pointer;\n  display: block;\n}\n.episode-item mat-card-content {\n  padding: 0;\n}\n.episode-item mat-card-title {\n  padding: 10px;\n}\n.episode-item .episode-title {\n  padding: 5px;\n}\n.episode-item .episode-cover {\n  width: 100%;\n}\n"] }]
  }], null, { seasons: [{
    type: Input,
    args: [{ required: true }]
  }], episodeClicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SeasonContainerComponent, { className: "SeasonContainerComponent", filePath: "src/app/xtream/season-container/season-container.component.ts", lineNumber: 12 });
})();

// src/app/xtream/serial-details/serial-details.component.ts
function SerialDetailsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275element(1, "img", 5);
    \u0275\u0275text(2, "\n    ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.item.info.cover, \u0275\u0275sanitizeUrl);
  }
}
function SerialDetailsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n    ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n        ", ctx_r0.item.info.plot, "\n      ");
  }
}
function SerialDetailsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "XTREAM.RELEASE_DATE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n        ", ctx_r0.item.info.releaseDate, "\n      ");
  }
}
function SerialDetailsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "XTREAM.GENRE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n        ", ctx_r0.item.info.genre, "\n      ");
  }
}
function SerialDetailsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "XTREAM.RATING"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n        ", ctx_r0.item.info.rating, "\n      ");
  }
}
function SerialDetailsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "XTREAM.CAST"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n        ", ctx_r0.item.info.cast, "\n      ");
  }
}
function SerialDetailsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "XTREAM.DIRECTOR"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n        ", ctx_r0.item.info.director, "\n      ");
  }
}
function SerialDetailsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n          ", \u0275\u0275pipeBind1(5, 2, "XTREAM.EPISODE_RUN_TIME"), ":\n        ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n        ", ctx_r0.item.info.episode_run_time, "\n      ");
  }
}
function SerialDetailsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "button", 7);
    \u0275\u0275listener("click", function SerialDetailsComponent_Conditional_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleFavorite());
    });
    \u0275\u0275text(2, "\n          ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "star_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n      ");
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n          ", \u0275\u0275pipeBind1(6, 1, "PORTALS.ADD_TO_FAVORITES"), "\n        ");
  }
}
function SerialDetailsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "button", 8);
    \u0275\u0275listener("click", function SerialDetailsComponent_Conditional_21_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleFavorite());
    });
    \u0275\u0275text(2, "\n          ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n      ");
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n          ", \u0275\u0275pipeBind1(6, 1, "PORTALS.REMOVE_FROM_FAVORITES"), "\n        ");
  }
}
var SerialDetailsComponent = class _SerialDetailsComponent {
  constructor() {
    this.addToFavoritesClicked = new EventEmitter();
    this.playClicked = new EventEmitter();
    this.removeFromFavoritesClicked = new EventEmitter();
    this.store = inject(Store);
    this.currentPlaylist = this.store.selectSignal(selectCurrentPlaylist);
    this.playlistService = inject(PlaylistsService);
    this.route = inject(ActivatedRoute);
    this.portalId = this.route.snapshot.paramMap.get("id");
    this.isFavorite = false;
  }
  ngOnInit() {
    this.checkFavoriteStatus();
  }
  checkFavoriteStatus() {
    this.playlistService.getPortalFavorites(this.portalId).subscribe((favorites) => {
      this.isFavorite = favorites.some((i) => i.series_id === this.seriesId);
    });
  }
  toggleFavorite() {
    if (this.isFavorite) {
      this.removeFromFavoritesClicked.emit(this.seriesId);
    } else {
      this.addToFavoritesClicked.emit({
        name: this.item.info.name,
        series_id: this.seriesId,
        cover: this.item.info.cover
      });
    }
    this.isFavorite = !this.isFavorite;
  }
  static {
    this.\u0275fac = function SerialDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SerialDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SerialDetailsComponent, selectors: [["app-serial-details"]], inputs: { item: "item", seriesId: "seriesId" }, outputs: { addToFavoritesClicked: "addToFavoritesClicked", playClicked: "playClicked", removeFromFavoritesClicked: "removeFromFavoritesClicked" }, decls: 27, vars: 13, consts: [[1, "container"], [1, "image"], [1, "details"], [1, "action-buttons"], [3, "episodeClicked", "seasons"], [3, "src"], [1, "label"], ["mat-stroked-button", "", "color", "accent", 3, "click"], ["mat-flat-button", "", "color", "accent", 3, "click"]], template: function SerialDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n  ");
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275text(3, "\n    ");
        \u0275\u0275conditionalCreate(4, SerialDetailsComponent_Conditional_4_Template, 3, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, "\n  ");
        \u0275\u0275elementStart(6, "div", 2);
        \u0275\u0275text(7, "\n    ");
        \u0275\u0275elementStart(8, "h2");
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n    ");
        \u0275\u0275conditionalCreate(11, SerialDetailsComponent_Conditional_11_Template, 4, 1);
        \u0275\u0275conditionalCreate(12, SerialDetailsComponent_Conditional_12_Template, 8, 4);
        \u0275\u0275conditionalCreate(13, SerialDetailsComponent_Conditional_13_Template, 8, 4);
        \u0275\u0275conditionalCreate(14, SerialDetailsComponent_Conditional_14_Template, 8, 4);
        \u0275\u0275conditionalCreate(15, SerialDetailsComponent_Conditional_15_Template, 8, 4);
        \u0275\u0275conditionalCreate(16, SerialDetailsComponent_Conditional_16_Template, 8, 4);
        \u0275\u0275conditionalCreate(17, SerialDetailsComponent_Conditional_17_Template, 8, 4);
        \u0275\u0275elementStart(18, "div", 3);
        \u0275\u0275text(19, "\n      ");
        \u0275\u0275conditionalCreate(20, SerialDetailsComponent_Conditional_20_Template, 8, 3)(21, SerialDetailsComponent_Conditional_21_Template, 8, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, "\n  ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, "\n\n");
        \u0275\u0275elementStart(25, "app-season-container", 4);
        \u0275\u0275listener("episodeClicked", function SerialDetailsComponent_Template_app_season_container_episodeClicked_25_listener($event) {
          return ctx.playClicked.emit($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "\n");
      }
      if (rf & 2) {
        \u0275\u0275styleProp("background", (ctx.item.info == null ? null : ctx.item.info.backdrop_path) && ctx.item.info.backdrop_path.length > 0 ? "linear-gradient(to top, rgba(29,29,29,1) 0%, rgba(0,0,0,0.5) 100%), url(" + ctx.item.info.backdrop_path[0] + ") repeat-x" : "none");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.item.info.cover ? 4 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.item.info.name);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.item.info.plot ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.info.releaseDate ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.info.genre ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.info.rating ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.info.cast ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.info.director ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.info.episode_run_time ? 17 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.isFavorite ? 20 : 21);
        \u0275\u0275advance(5);
        \u0275\u0275property("seasons", ctx.item.episodes);
      }
    }, dependencies: [
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      SeasonContainerComponent,
      TranslateModule,
      TranslatePipe
    ], styles: ['\n\n[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 320px 1fr;\n  padding: 0 10px;\n}\n.container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  z-index: -1;\n  background-repeat: no-repeat;\n}\n.seasons[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.image[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 20px 10px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 500px;\n  background-color: #999;\n  border-radius: 5px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%]::after {\n  content: "No cover";\n  position: relative;\n  top: 230px;\n  left: 115px;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 5px;\n  width: 300px;\n}\n@media (max-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    max-width: 1200px;\n  }\n  .image[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n  }\n  .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .details[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n  .youtube-trailer[_ngcontent-%COMP%] {\n    width: 95% !important;\n  }\n}\n.label[_ngcontent-%COMP%] {\n  font-weight: 100;\n  font-size: 0.9em;\n  padding: 5px 0;\n  text-decoration: underline;\n  opacity: 0.6;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.youtube-trailer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-self: center;\n  width: 650px;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SerialDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-serial-details", imports: [
      MatButtonModule,
      MatIconModule,
      SeasonContainerComponent,
      TranslateModule
    ], template: `<div
  class="container"
    [style.background]="
        item.info?.backdrop_path && item.info.backdrop_path.length > 0
            ? 'linear-gradient(to top, rgba(29,29,29,1) 0%, rgba(0,0,0,0.5) 100%), url(' +
              item.info.backdrop_path[0] +
              ') repeat-x'
            : 'none'
    "
  >
  <div class="image">
    @if (item.info.cover) {
      <img [src]="item.info.cover" />
    }
  </div>
  <div class="details">
    <h2>{{ item.info.name }}</h2>
    @if (item.info.plot) {
      <label>
        {{ item.info.plot }}
      </label>
    }
    @if (item.info.releaseDate) {
      <label>
        <div class="label">{{ 'XTREAM.RELEASE_DATE' | translate }}:</div>
        {{ item.info.releaseDate }}
      </label>
    }
    @if (item.info.genre) {
      <label>
        <div class="label">{{ 'XTREAM.GENRE' | translate }}:</div>
        {{ item.info.genre }}
      </label>
    }
    @if (item.info.rating) {
      <label>
        <div class="label">{{ 'XTREAM.RATING' | translate }}:</div>
        {{ item.info.rating }}
      </label>
    }
    @if (item.info.cast) {
      <div>
        <div class="label">{{ 'XTREAM.CAST' | translate }}:</div>
        {{ item.info.cast }}
      </div>
    }
    @if (item.info.director) {
      <label>
        <div class="label">{{ 'XTREAM.DIRECTOR' | translate }}:</div>
        {{ item.info.director }}
      </label>
    }
    @if (item.info.episode_run_time) {
      <label>
        <div class="label">
          {{ 'XTREAM.EPISODE_RUN_TIME' | translate }}:
        </div>
        {{ item.info.episode_run_time }}
      </label>
    }
    <div class="action-buttons">
      @if (!isFavorite) {
        <button
          mat-stroked-button
          color="accent"
          (click)="toggleFavorite()"
          >
          <mat-icon>star_outline</mat-icon>
          {{ 'PORTALS.ADD_TO_FAVORITES' | translate }}
        </button>
      } @else {
        <button
          mat-flat-button
          color="accent"
          (click)="toggleFavorite()"
          >
          <mat-icon>star</mat-icon>
          {{ 'PORTALS.REMOVE_FROM_FAVORITES' | translate }}
        </button>
      }

    </div>
  </div>
</div>

<app-season-container
  [seasons]="item.episodes"
  (episodeClicked)="playClicked.emit($event)"
  />
`, styles: ['/* src/app/xtream/detail-view.scss */\n:host {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.details h2 {\n  word-wrap: break-word;\n}\n.container {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 320px 1fr;\n  padding: 0 10px;\n}\n.container::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  z-index: -1;\n  background-repeat: no-repeat;\n}\n.seasons {\n  padding: 20px;\n}\n.seasons .episodes {\n  margin-bottom: 10px;\n}\n.seasons .episodes button {\n  margin-top: 5px;\n}\n.image {\n  width: 300px;\n  padding: 20px 10px;\n}\n.image .placeholder-cover {\n  width: 300px;\n  height: 500px;\n  background-color: #999;\n  border-radius: 5px;\n}\n.image .placeholder-cover::after {\n  content: "No cover";\n  position: relative;\n  top: 230px;\n  left: 115px;\n}\n.image img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 5px;\n  width: 300px;\n}\n@media (max-width: 800px) {\n  .container {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    max-width: 1200px;\n  }\n  .image,\n  .details {\n    flex: 1 1 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n  }\n  .image img,\n  .details img {\n    border-radius: 0;\n  }\n  .details {\n    padding: 0 10px;\n  }\n  .youtube-trailer {\n    width: 95% !important;\n  }\n}\n.label {\n  font-weight: 100;\n  font-size: 0.9em;\n  padding: 5px 0;\n  text-decoration: underline;\n  opacity: 0.6;\n}\n.action-buttons {\n  margin-top: 10px;\n}\n.youtube-trailer {\n  display: flex;\n  flex-wrap: wrap;\n  align-self: center;\n  width: 650px;\n}\n'] }]
  }], null, { item: [{
    type: Input,
    args: [{ required: true }]
  }], seriesId: [{
    type: Input
  }], addToFavoritesClicked: [{
    type: Output
  }], playClicked: [{
    type: Output
  }], removeFromFavoritesClicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SerialDetailsComponent, { className: "SerialDetailsComponent", filePath: "src/app/xtream/serial-details/serial-details.component.ts", lineNumber: 27 });
})();

// src/app/xtream/xtream-main-container.component.ts
function XtreamMainContainerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275text(2, "\n");
  }
}
function XtreamMainContainerComponent_Conditional_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "app-playlist-error-view", 1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 2, ctx_r0.errorViewInfo.title))("description", \u0275\u0275pipeBind1(3, 4, ctx_r0.errorViewInfo.message));
  }
}
function XtreamMainContainerComponent_Conditional_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-category-view", 2);
    \u0275\u0275listener("categoryClicked", function XtreamMainContainerComponent_Conditional_3_Case_2_Template_app_category_view_categoryClicked_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.categoryClicked($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.items);
  }
}
function XtreamMainContainerComponent_Conditional_3_Case_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "app-live-stream-layout", 3);
    \u0275\u0275listener("itemClicked", function XtreamMainContainerComponent_Conditional_3_Case_3_Conditional_1_Template_app_live_stream_layout_itemClicked_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.itemClicked($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n            ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("channels", ctx_r0.items)("player", ctx_r0.player)("streamUrl", ctx_r0.streamUrl)("epgItems", ctx_r0.epgItems)("activeLiveStream", ctx_r0.activeLiveStream);
  }
}
function XtreamMainContainerComponent_Conditional_3_Case_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "app-category-content-view", 4);
    \u0275\u0275listener("itemClicked", function XtreamMainContainerComponent_Conditional_3_Case_3_Conditional_2_Template_app_category_content_view_itemClicked_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.itemClicked($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n            ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.items);
  }
}
function XtreamMainContainerComponent_Conditional_3_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275conditionalCreate(1, XtreamMainContainerComponent_Conditional_3_Case_3_Conditional_1_Template, 3, 5)(2, XtreamMainContainerComponent_Conditional_3_Case_3_Conditional_2_Template, 3, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.selectedContentType === "itv" ? 1 : 2);
  }
}
function XtreamMainContainerComponent_Conditional_3_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-vod-details", 5);
    \u0275\u0275listener("playClicked", function XtreamMainContainerComponent_Conditional_3_Case_4_Template_app_vod_details_playClicked_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.playVod($event));
    })("addToFavoritesClicked", function XtreamMainContainerComponent_Conditional_3_Case_4_Template_app_vod_details_addToFavoritesClicked_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addToFavorites($event));
    })("removeFromFavoritesClicked", function XtreamMainContainerComponent_Conditional_3_Case_4_Template_app_vod_details_removeFromFavoritesClicked_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeFromFavorites($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("item", ctx_r0.vodDetails);
  }
}
function XtreamMainContainerComponent_Conditional_3_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-serial-details", 6);
    \u0275\u0275listener("playClicked", function XtreamMainContainerComponent_Conditional_3_Case_5_Template_app_serial_details_playClicked_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.playEpisode($event));
    })("addToFavoritesClicked", function XtreamMainContainerComponent_Conditional_3_Case_5_Template_app_serial_details_addToFavoritesClicked_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addToFavorites($event));
    })("removeFromFavoritesClicked", function XtreamMainContainerComponent_Conditional_3_Case_5_Template_app_serial_details_removeFromFavoritesClicked_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeFromFavorites($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("item", ctx_r0.vodDetails)("seriesId", ctx_r0.contentId);
  }
}
function XtreamMainContainerComponent_Conditional_3_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-category-content-view", 4);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("itemClicked", function XtreamMainContainerComponent_Conditional_3_Case_6_Template_app_category_content_view_itemClicked_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.itemClicked($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("items", \u0275\u0275pipeBind1(2, 1, ctx_r0.favorites$));
  }
}
function XtreamMainContainerComponent_Conditional_3_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-live-stream-layout", 7);
    \u0275\u0275listener("itemClicked", function XtreamMainContainerComponent_Conditional_3_Case_7_Template_app_live_stream_layout_itemClicked_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.itemClicked($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("channels", ctx_r0.favoritesLiveStream$)("player", ctx_r0.player)("streamUrl", ctx_r0.streamUrl)("epgItems", ctx_r0.epgItems);
  }
}
function XtreamMainContainerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275conditionalCreate(1, XtreamMainContainerComponent_Conditional_3_Case_1_Template, 5, 6)(2, XtreamMainContainerComponent_Conditional_3_Case_2_Template, 3, 1)(3, XtreamMainContainerComponent_Conditional_3_Case_3_Template, 3, 1)(4, XtreamMainContainerComponent_Conditional_3_Case_4_Template, 3, 1)(5, XtreamMainContainerComponent_Conditional_3_Case_5_Template, 3, 2)(6, XtreamMainContainerComponent_Conditional_3_Case_6_Template, 4, 3)(7, XtreamMainContainerComponent_Conditional_3_Case_7_Template, 3, 4);
    \u0275\u0275text(8, "\n");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.currentLayout) === "error-view" ? 1 : tmp_1_0 === "category" ? 2 : tmp_1_0 === "category_content" ? 3 : tmp_1_0 === "vod-details" ? 4 : tmp_1_0 === "serie-details" ? 5 : tmp_1_0 === "favorites" ? 6 : tmp_1_0 === "live-stream-favorites" ? 7 : -1);
  }
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}
var ContentTypes = {
  [ContentType.ITV]: {
    getContentAction: XtreamCodeActions.GetLiveStreams,
    getCategoryAction: XtreamCodeActions.GetLiveCategories
  },
  [ContentType.VODS]: {
    getContentAction: XtreamCodeActions.GetVodStreams,
    getCategoryAction: XtreamCodeActions.GetVodCategories,
    getDetailsAction: XtreamCodeActions.GetVodInfo
  },
  [ContentType.SERIES]: {
    getContentAction: XtreamCodeActions.GetSeries,
    getCategoryAction: XtreamCodeActions.GetSeriesCategories,
    getDetailsAction: XtreamCodeActions.GetSeriesInfo
  }
};
var XtreamMainContainerComponent = class _XtreamMainContainerComponent {
  constructor() {
    this.dataService = inject(DataService);
    this.dialog = inject(MatDialog);
    this.ngZone = inject(NgZone);
    this.playlistService = inject(PlaylistsService);
    this.portalStore = inject(PortalStore);
    this.settingsStore = inject(SettingsStore);
    this.snackBar = inject(MatSnackBar);
    this.store = inject(Store);
    this.translate = inject(TranslateService);
    this.currentPlaylist = this.store.selectSignal(selectCurrentPlaylist);
    this.navigationContentTypes = [
      {
        contentType: ContentType.ITV,
        label: "Live Streams",
        icon: "live_tv"
      },
      {
        contentType: ContentType.VODS,
        label: "VOD Streams",
        icon: "movie"
      },
      {
        contentType: ContentType.SERIES,
        label: "Series",
        icon: "video_library"
      }
    ];
    this.breadcrumbs = [];
    this.items = [];
    this.listeners = [];
    this.selectedContentType = ContentType.VODS;
    this.currentLayout = "category";
    this.settings = this.settingsStore;
    this.isLoading = true;
    this.searchPhrase = this.portalStore.searchPhrase();
    this.errorViewInfo = { title: "", message: "" };
    this.epgItems = [];
    this.hideExternalInfoDialog = this.portalStore.hideExternalInfoDialog;
    this.commandsList = [
      new IpcCommand(XTREAM_RESPONSE, (response) => this.handleResponse(response)),
      new IpcCommand(ERROR, (response) => this.showErrorAsNotification(response)),
      new IpcCommand(REMOTE_CONTROL_CHANGE_CHANNEL, (response) => {
        this.remoteControlChangeChannel(response.type);
      })
    ];
    effect(() => {
      if (this.currentPlaylist()) {
        this.getCategories(this.selectedContentType);
        this.favorites$ = this.playlistService.getPortalFavorites(this.currentPlaylist()._id);
        this.favoritesLiveStream$ = this.playlistService.getPortalLiveStreamFavorites(this.currentPlaylist()._id);
      }
    });
  }
  ngOnInit() {
    this.setInitialBreadcrumb();
    this.commandsList.forEach((command) => {
      if (this.dataService.isElectron) {
        this.dataService.listenOn(command.id, (_event, response) => this.ngZone.run(() => command.callback(response)));
      } else {
        const cb = (response) => {
          if (response.data.type === command.id) {
            command.callback(response.data);
          }
        };
        this.dataService.listenOn(command.id, cb);
        this.listeners.push(cb);
      }
    });
  }
  handleResponse(response) {
    if (!response.payload) {
      this.errorViewInfo = {
        title: "PORTALS.ERROR_VIEW.UNKNOWN_ERROR.TITLE",
        message: "PORTALS.ERROR_VIEW.UNKNOWN_ERROR.DESCRIPTION"
      };
      this.currentLayout = "error-view";
    } else {
      if (response.payload?.user_info?.status === "Expired") {
        this.errorViewInfo = {
          title: "PORTALS.ERROR_VIEW.ACCOUNT_EXPIRED.TITLE",
          message: "PORTALS.ERROR_VIEW.ACCOUNT_EXPIRED.DESCRIPTION"
        };
        this.currentLayout = "error-view";
      } else if (response.payload?.user_info?.auth === 0) {
        this.errorViewInfo = {
          title: "PORTALS.ERROR_VIEW.UNAUTHORIZED.TITLE",
          message: "PORTALS.ERROR_VIEW.UNAUTHORIZED.DESCRIPTION"
        };
        this.currentLayout = "error-view";
      }
    }
    switch (response.action) {
      case XtreamCodeActions.GetSeriesCategories:
      case XtreamCodeActions.GetVodCategories:
      case XtreamCodeActions.GetLiveCategories:
      case XtreamCodeActions.GetVodStreams:
      case XtreamCodeActions.GetLiveStreams:
      case XtreamCodeActions.GetSeries:
        this.items = response.payload;
        break;
      case XtreamCodeActions.GetVodInfo:
        this.currentLayout = "vod-details";
        this.vodDetails = response.payload;
        break;
      case XtreamCodeActions.GetSeriesInfo:
        this.currentLayout = "serie-details";
        this.vodDetails = response.payload;
        break;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
      case "get_short_epg":
        this.epgItems = response.payload.epg_listings.map((i) => __spreadProps(__spreadValues({}, i), {
          title: b64DecodeUnicode(i.title).trim(),
          description: b64DecodeUnicode(i.description).trim()
        }));
        break;
      default:
        break;
    }
    this.isLoading = false;
  }
  getCategories(contentType = this.selectedContentType) {
    this.currentLayout = "category";
    const action = ContentTypes[contentType].getCategoryAction;
    this.setInitialBreadcrumb(action);
    this.sendRequest({ action });
  }
  ngOnDestroy() {
    this.portalStore.setSearchPhrase("");
    if (this.dataService.isElectron) {
      this.commandsList.forEach((command) => this.dataService.removeAllListeners(command.id));
    } else {
      this.listeners.forEach((listener) => {
        window.removeEventListener("message", listener);
      });
    }
  }
  setInitialBreadcrumb(action = XtreamCodeActions.GetVodCategories) {
    this.breadcrumbs = [{ title: "All categories", action }];
  }
  categoryClicked(item) {
    this.items = [];
    this.streamUrl = void 0;
    this.portalStore.setSearchPhrase("");
    const action = ContentTypes[this.selectedContentType].getContentAction;
    this.breadcrumbs.push({
      title: item.category_name,
      category_id: item.category_id,
      action
    });
    this.sendRequest({ action, category_id: item.category_id });
    this.currentLayout = "category_content";
  }
  itemClicked(item) {
    let action;
    if (item.stream_type && item.stream_type === "movie") {
      this.items = [];
      action = XtreamCodeActions.GetVodInfo;
      this.breadcrumbs.push({ title: item.name, action });
      this.contentId = item.stream_id;
      this.sendRequest({ action, vod_id: item.stream_id });
    } else if (item.stream_type && item.stream_type === "live") {
      this.sendRequest({
        action: "get_short_epg",
        stream_id: item.stream_id,
        limit: 10
      });
      this.activeLiveStream = item;
      this.playLiveStream(item);
    } else if (item.series_id) {
      this.items = [];
      action = XtreamCodeActions.GetSeriesInfo;
      this.breadcrumbs.push({ title: item.name, action });
      this.contentId = item.series_id;
      this.sendRequest({ action, series_id: item.series_id });
    }
  }
  playLiveStream(item) {
    const { serverUrl, username, password } = this.currentPlaylist();
    const streamUrl = `${serverUrl}/${item.stream_type}/${username}/${password}/${item.stream_id}.m3u8`;
    this.activeLiveStream = item;
    this.openPlayer(streamUrl, item.name);
  }
  openPlayer(streamUrl, title) {
    this.streamUrl = streamUrl;
    this.player = this.settingsStore.player() ?? VideoPlayer.VideoJs;
    if (this.player === VideoPlayer.MPV) {
      if (!this.hideExternalInfoDialog())
        this.dialog.open(ExternalPlayerInfoDialogComponent);
      this.dataService.sendIpcEvent(OPEN_MPV_PLAYER, {
        url: streamUrl,
        mpvPlayerPath: this.settingsStore.mpvPlayerPath()
      });
    } else if (this.player === VideoPlayer.VLC) {
      if (!this.hideExternalInfoDialog())
        this.dialog.open(ExternalPlayerInfoDialogComponent);
      this.dataService.sendIpcEvent(OPEN_VLC_PLAYER, {
        url: streamUrl,
        vlcPlayerPath: this.settingsStore.vlcPlayerPath()
      });
    } else {
      if (this.selectedContentType !== ContentType.ITV) {
        this.dialog.open(PlayerDialogComponent, {
          data: { streamUrl, title },
          width: "80%",
          maxWidth: "1200px",
          maxHeight: "90vh"
        });
      }
    }
  }
  playVod(vodItem) {
    const { serverUrl, username, password } = this.currentPlaylist();
    this.items = [];
    const streamUrl = `${serverUrl}/movie/${username}/${password}/${vodItem.movie_data.stream_id}.${vodItem.movie_data.container_extension}`;
    this.openPlayer(streamUrl, vodItem.info.name);
  }
  playEpisode(episode) {
    const { serverUrl, username, password } = this.currentPlaylist();
    const player = this.settingsStore.player();
    const streamUrl = `${serverUrl}/series/${username}/${password}/${episode.id}.${episode.container_extension}`;
    if (player === VideoPlayer.MPV) {
      this.dataService.sendIpcEvent(OPEN_MPV_PLAYER, { url: streamUrl });
    } else if (player === VideoPlayer.VLC) {
      this.dataService.sendIpcEvent(OPEN_VLC_PLAYER, { url: streamUrl });
    } else {
      this.dialog.open(PlayerDialogComponent, {
        data: { streamUrl, player, title: episode.title },
        width: "80%",
        maxWidth: "1200px",
        maxHeight: "90vh"
      });
    }
  }
  changeContentType(contentType) {
    this.selectedContentType = contentType;
    this.getCategories();
  }
  showErrorAsNotification(response) {
    if ("status" in response && response.status === 401) {
      this.errorViewInfo = {
        title: "PORTALS.ERROR_VIEW.UNAUTHORIZED.TITLE",
        message: "PORTALS.ERROR_VIEW.UNAUTHORIZED.DESCRIPTION"
      };
      this.currentLayout = "error-view";
    } else if ("status" in response && response.status === 404) {
      this.errorViewInfo = {
        title: "PORTALS.ERROR_VIEW.NOT_FOUND.TITLE",
        message: "PORTALS.ERROR_VIEW.NOT_FOUND.DESCRIPTION"
      };
      this.currentLayout = "error-view";
    }
    this.snackBar.open(`Error: ${response?.message ?? "Something went wrong"} (Status: ${response?.status ?? 0})`, null, { duration: 4e3 });
    this.isLoading = false;
  }
  /**
   * Should get the position of the clicked breadcrumb and remove all the items after
   * @param breadcrumb clicked breadcrumb item
   */
  breadcrumbClicked(breadcrumb) {
    const itemIndex = this.breadcrumbs.findIndex((i) => i === breadcrumb);
    if (itemIndex === this.breadcrumbs.length - 1)
      return;
    this.items = [];
    this.breadcrumbs.splice(itemIndex + 1, this.breadcrumbs.length - itemIndex - 1);
    this.currentLayout = this.getLayoutViewBasedOnAction(breadcrumb.action);
    this.sendRequest(__spreadValues({
      action: breadcrumb.action
    }, breadcrumb.category_id ? { category_id: breadcrumb.category_id } : {}));
  }
  getLayoutViewBasedOnAction(action) {
    let result = "category";
    switch (action) {
      case XtreamCodeActions.GetLiveCategories:
      case XtreamCodeActions.GetVodCategories:
      case XtreamCodeActions.GetSeriesCategories:
        result = "category";
        break;
      case XtreamCodeActions.GetLiveStreams:
      case XtreamCodeActions.GetVodStreams:
      case XtreamCodeActions.GetSeries:
        result = "category_content";
        break;
      case XtreamCodeActions.GetVodInfo:
      case XtreamCodeActions.GetSeriesInfo:
        result = "vod-details";
        break;
      default:
        console.error(`Error: Unknown action was provided: ${action}`);
        break;
    }
    return result;
  }
  sendRequest(params) {
    if (params.action !== "get_short_epg") {
      this.isLoading = true;
    }
    const { serverUrl, username, password } = this.currentPlaylist();
    this.dataService.sendIpcEvent(XTREAM_REQUEST, {
      url: serverUrl,
      params: __spreadValues({
        password,
        username
      }, params)
    });
  }
  setSearchPhrase(searchPhrase) {
    this.searchPhrase = searchPhrase;
  }
  addToFavorites(item) {
    this.playlistService.addPortalFavorite(this.currentPlaylist()._id, item).subscribe(() => {
      this.snackBar.open(this.translate.instant("PORTALS.ADDED_TO_FAVORITES"), null, {
        duration: 1e3
      });
    });
  }
  removeFromFavorites(favoriteId) {
    this.playlistService.removeFromPortalFavorites(this.currentPlaylist()._id, favoriteId).subscribe(() => {
      this.snackBar.open(this.translate.instant("PORTALS.REMOVED_FROM_FAVORITES"), null, {
        duration: 1e3
      });
    });
  }
  favoritesClicked() {
    if (this.selectedContentType === ContentType.ITV) {
      this.currentLayout = "live-stream-favorites";
    } else {
      this.currentLayout = "favorites";
    }
    this.setInitialBreadcrumb();
  }
  remoteControlChangeChannel(type) {
    if (this.currentLayout === "category_content" && this.activeLiveStream) {
      let nextItem;
      const index = this.activeLiveStream.num - 1;
      if (type === "up") {
        if (index - 1 >= 0) {
          nextItem = this.items[index - 1];
        }
      } else if (type === "down") {
        const index2 = this.activeLiveStream.num - 1;
        if (index2 + 1 < this.items.length) {
          nextItem = this.items[index2 + 1];
        }
      }
      this.itemClicked(nextItem);
    }
  }
  static {
    this.\u0275fac = function XtreamMainContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _XtreamMainContainerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _XtreamMainContainerComponent, selectors: [["app-xtream-main-container"]], decls: 4, vars: 10, consts: [[3, "breadcrumbClicked", "contentTypeChanged", "searchTextChanged", "favoritesClicked", "addToFavoritesClicked", "removeFromFavoritesClicked", "breadcrumbs", "contentType", "showCategories", "searchVisible", "sortVisible", "favoriteVisible", "contentTypeNavigationItems", "activeLiveStream", "favoritesLiveStream$"], [3, "title", "description"], [3, "categoryClicked", "items"], [3, "itemClicked", "channels", "player", "streamUrl", "epgItems", "activeLiveStream"], [3, "itemClicked", "items"], [3, "playClicked", "addToFavoritesClicked", "removeFromFavoritesClicked", "item"], [3, "playClicked", "addToFavoritesClicked", "removeFromFavoritesClicked", "item", "seriesId"], [3, "itemClicked", "channels", "player", "streamUrl", "epgItems"]], template: function XtreamMainContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-navigation-bar", 0);
        \u0275\u0275listener("breadcrumbClicked", function XtreamMainContainerComponent_Template_app_navigation_bar_breadcrumbClicked_0_listener($event) {
          return ctx.breadcrumbClicked($event);
        })("contentTypeChanged", function XtreamMainContainerComponent_Template_app_navigation_bar_contentTypeChanged_0_listener($event) {
          return ctx.changeContentType($event);
        })("searchTextChanged", function XtreamMainContainerComponent_Template_app_navigation_bar_searchTextChanged_0_listener($event) {
          return ctx.setSearchPhrase($event);
        })("favoritesClicked", function XtreamMainContainerComponent_Template_app_navigation_bar_favoritesClicked_0_listener() {
          return ctx.favoritesClicked();
        })("addToFavoritesClicked", function XtreamMainContainerComponent_Template_app_navigation_bar_addToFavoritesClicked_0_listener($event) {
          return ctx.addToFavorites($event);
        })("removeFromFavoritesClicked", function XtreamMainContainerComponent_Template_app_navigation_bar_removeFromFavoritesClicked_0_listener($event) {
          return ctx.removeFromFavorites($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(1, "\n\n");
        \u0275\u0275conditionalCreate(2, XtreamMainContainerComponent_Conditional_2_Template, 3, 0)(3, XtreamMainContainerComponent_Conditional_3_Template, 9, 1);
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumbs", ctx.breadcrumbs)("contentType", ctx.selectedContentType)("showCategories", ctx.currentLayout !== "error-view")("searchVisible", ctx.currentLayout === "category" || ctx.currentLayout === "category_content")("sortVisible", ctx.currentLayout === "category_content")("favoriteVisible", ctx.currentLayout === "category_content" || ctx.currentLayout === "live-stream-favorites")("contentTypeNavigationItems", ctx.navigationContentTypes)("activeLiveStream", ctx.activeLiveStream)("favoritesLiveStream$", ctx.favoritesLiveStream$);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isLoading ? 2 : 3);
      }
    }, dependencies: [
      MatButtonToggleModule,
      CategoryViewComponent,
      MatButtonModule,
      MatCardModule,
      MatIconModule,
      NavigationBarComponent,
      VodDetailsComponent,
      CategoryContentViewComponent,
      SerialDetailsComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      PlaylistErrorViewComponent,
      TranslateModule,
      LiveStreamLayoutComponent,
      AsyncPipe,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n  justify-content: flex-start;\n}\n.xtream-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 140px);\n  overflow-y: auto;\n  display: flex;\n  justify-content: center;\n}\nmat-spinner[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  align-self: center;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XtreamMainContainerComponent, [{
    type: Component,
    args: [{ selector: "app-xtream-main-container", imports: [
      MatButtonToggleModule,
      CategoryViewComponent,
      MatButtonModule,
      MatCardModule,
      MatIconModule,
      NavigationBarComponent,
      VodDetailsComponent,
      CategoryContentViewComponent,
      SerialDetailsComponent,
      MatProgressSpinnerModule,
      AsyncPipe,
      PlaylistErrorViewComponent,
      TranslateModule,
      LiveStreamLayoutComponent
    ], template: `<app-navigation-bar
    [breadcrumbs]="breadcrumbs"
    [contentType]="selectedContentType"
    [showCategories]="currentLayout !== 'error-view'"
    (breadcrumbClicked)="breadcrumbClicked($event)"
    (contentTypeChanged)="changeContentType($event)"
    (searchTextChanged)="setSearchPhrase($event)"
    (favoritesClicked)="favoritesClicked()"
    [searchVisible]="
        currentLayout === 'category' || currentLayout === 'category_content'
    "
    [sortVisible]="currentLayout === 'category_content'"
    [favoriteVisible]="
        currentLayout === 'category_content' ||
        currentLayout === 'live-stream-favorites'
    "
    [contentTypeNavigationItems]="navigationContentTypes"
    [activeLiveStream]="activeLiveStream"
    [favoritesLiveStream$]="favoritesLiveStream$"
    (addToFavoritesClicked)="addToFavorites($event)"
    (removeFromFavoritesClicked)="removeFromFavorites($event)"
/>

@if (isLoading) {
    <mat-spinner />
} @else {
    @switch (currentLayout) {
        @case ('error-view') {
            <app-playlist-error-view
                [title]="this.errorViewInfo.title | translate"
                [description]="this.errorViewInfo.message | translate"
            />
        }
        @case ('category') {
            <app-category-view
                (categoryClicked)="categoryClicked($event)"
                [items]="items"
            />
        }
        @case ('category_content') {
            @if (selectedContentType === 'itv') {
                <app-live-stream-layout
                    [channels]="items"
                    [player]="player"
                    [streamUrl]="streamUrl"
                    [epgItems]="epgItems"
                    [activeLiveStream]="activeLiveStream"
                    (itemClicked)="itemClicked($event)"
                />
            } @else {
                <app-category-content-view
                    [items]="items"
                    (itemClicked)="itemClicked($event)"
                />
            }
        }
        @case ('vod-details') {
            <app-vod-details
                [item]="vodDetails"
                (playClicked)="playVod($event)"
                (addToFavoritesClicked)="addToFavorites($event)"
                (removeFromFavoritesClicked)="removeFromFavorites($event)"
            />
        }
        @case ('serie-details') {
            <app-serial-details
                [item]="vodDetails"
                [seriesId]="contentId"
                (playClicked)="playEpisode($event)"
                (addToFavoritesClicked)="addToFavorites($event)"
                (removeFromFavoritesClicked)="removeFromFavorites($event)"
            />
        }
        @case ('favorites') {
            <app-category-content-view
                [items]="favorites$ | async"
                (itemClicked)="itemClicked($event)"
            />
        }
        @case ('live-stream-favorites') {
            <app-live-stream-layout
                [channels]="favoritesLiveStream$"
                [player]="player"
                [streamUrl]="streamUrl"
                [epgItems]="epgItems"
                (itemClicked)="itemClicked($event)"
            />
        }
    }
}
`, styles: ["/* src/app/xtream/xtream-main-container.component.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n  justify-content: flex-start;\n}\n.xtream-container {\n  height: calc(100vh - 140px);\n  overflow-y: auto;\n  display: flex;\n  justify-content: center;\n}\nmat-spinner {\n  margin-top: 10px;\n  align-self: center;\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(XtreamMainContainerComponent, { className: "XtreamMainContainerComponent", filePath: "src/app/xtream/xtream-main-container.component.ts", lineNumber: 113 });
})();
export {
  XtreamMainContainerComponent
};
