import {
  RecentPlaylistsComponent,
  SortBy,
  SortOrder,
  SortService
} from "./sidimad-playlists.js";
import {
  NgxWhatsNewComponent,
  NgxWhatsNewModule,
  WhatsNewService
} from "./sidimad-whats-new.js";
import {
  PortalStatusService
} from "./sidimad-portal-status.js";
import {
  open,
  readTextFile
} from "./sidimad-database.js";
import {
  ActivatedRoute,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSnackBar,
  Router,
  Store,
  addPlaylist,
  getFilenameFromUrl,
  invoke,
  isTauri,
  parsePlaylist,
  selectActiveTypeFilters,
  setSelectedFilters,
  v4_default
} from "./sidimad-store.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./sidimad-tooltip.js";
import {
  MatDivider,
  MatDividerModule
} from "./sidimad-divider.js";
import {
  CdkScrollableModule,
  DOWN_ARROW,
  DataService,
  DefaultValueAccessor,
  Directionality,
  DomPortalOutlet,
  ENTER,
  ERROR,
  ESCAPE,
  FocusKeyManager,
  FocusMonitor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
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
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  OverlayConfig,
  OverlayModule,
  PLAYLIST_PARSE_BY_URL,
  PLAYLIST_PARSE_RESPONSE,
  Platform,
  RIGHT_ARROW,
  ReactiveFormsModule,
  SPACE,
  ScrollDispatcher,
  TemplatePortal,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  UP_ARROW,
  Validators,
  ViewportRuler,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled,
  _getAnimationsState,
  _getEventTarget,
  _getShadowRoot,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy,
  hasModifierKey,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader,
  ɵNgNoValidate
} from "./sidimad-browser.js";
import {
  ApplicationRef,
  AsyncPipe,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  QueryList,
  Renderer2,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __async,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  booleanAttribute,
  effect,
  filter,
  inject,
  merge,
  numberAttribute,
  of,
  setClassMetadata,
  skipWhile,
  startWith,
  switchMap,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./sidimad-app.js";

// node_modules/@angular/material/fesm2022/progress-bar.mjs
function MatProgressBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 2);
  }
}
var MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new InjectionToken("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");
var MAT_PROGRESS_BAR_LOCATION = new InjectionToken("mat-progress-bar-location", {
  providedIn: "root",
  factory: MAT_PROGRESS_BAR_LOCATION_FACTORY
});
function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
  const _document = inject(DOCUMENT);
  const _location = _document ? _document.location : null;
  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ""
  };
}
var MatProgressBar = class _MatProgressBar {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  constructor() {
    const animationsState = _getAnimationsState();
    const defaults = inject(MAT_PROGRESS_BAR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._isNoopAnimation = animationsState === "di-disabled";
    if (animationsState === "reduced-motion") {
      this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion");
    }
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      this.mode = defaults.mode || this.mode;
    }
  }
  /** Flag that indicates whether NoopAnimations mode is set to true. */
  _isNoopAnimation;
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /**
   * Theme color of the progress bar. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/progress-bar/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _value = 0;
  /** Buffer value of the progress bar. Defaults to zero. */
  get bufferValue() {
    return this._bufferValue || 0;
  }
  set bufferValue(v) {
    this._bufferValue = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _bufferValue = 0;
  /**
   * Event emitted when animation of the primary progress bar completes. This event will not
   * be emitted when animations are disabled, nor will it be emitted for modes with continuous
   * animations (indeterminate and query).
   */
  animationEnd = new EventEmitter();
  /**
   * Mode of the progress bar.
   *
   * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
   * 'determinate'.
   * Mirrored to mode attribute.
   */
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._changeDetectorRef.markForCheck();
  }
  _mode = "determinate";
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      this._cleanupTransitionEnd = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._transitionendHandler);
    });
  }
  ngOnDestroy() {
    this._cleanupTransitionEnd?.();
  }
  /** Gets the transform style that should be applied to the primary bar. */
  _getPrimaryBarTransform() {
    return `scaleX(${this._isIndeterminate() ? 1 : this.value / 100})`;
  }
  /** Gets the `flex-basis` value that should be applied to the buffer bar. */
  _getBufferBarFlexBasis() {
    return `${this.mode === "buffer" ? this.bufferValue : 100}%`;
  }
  /** Returns whether the progress bar is indeterminate. */
  _isIndeterminate() {
    return this.mode === "indeterminate" || this.mode === "query";
  }
  /** Event handler for `transitionend` events. */
  _transitionendHandler = (event) => {
    if (this.animationEnd.observers.length === 0 || !event.target || !event.target.classList.contains("mdc-linear-progress__primary-bar")) {
      return;
    }
    if (this.mode === "determinate" || this.mode === "buffer") {
      this._ngZone.run(() => this.animationEnd.next({
        value: this.value
      }));
    }
  };
  static \u0275fac = function MatProgressBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatProgressBar,
    selectors: [["mat-progress-bar"]],
    hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-mdc-progress-bar", "mdc-linear-progress"],
    hostVars: 10,
    hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuenow", ctx._isIndeterminate() ? null : ctx.value)("mode", ctx.mode);
        \u0275\u0275classMap("mat-" + ctx.color);
        \u0275\u0275classProp("_mat-animation-noopable", ctx._isNoopAnimation)("mdc-linear-progress--animation-ready", !ctx._isNoopAnimation)("mdc-linear-progress--indeterminate", ctx._isIndeterminate());
      }
    },
    inputs: {
      color: "color",
      value: [2, "value", "value", numberAttribute],
      bufferValue: [2, "bufferValue", "bufferValue", numberAttribute],
      mode: "mode"
    },
    outputs: {
      animationEnd: "animationEnd"
    },
    exportAs: ["matProgressBar"],
    decls: 7,
    vars: 5,
    consts: [["aria-hidden", "true", 1, "mdc-linear-progress__buffer"], [1, "mdc-linear-progress__buffer-bar"], [1, "mdc-linear-progress__buffer-dots"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__primary-bar"], [1, "mdc-linear-progress__bar-inner"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__secondary-bar"]],
    template: function MatProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275domElement(1, "div", 1);
        \u0275\u0275conditionalCreate(2, MatProgressBar_Conditional_2_Template, 1, 0, "div", 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "div", 3);
        \u0275\u0275domElement(4, "span", 4);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "div", 5);
        \u0275\u0275domElement(6, "span", 4);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275styleProp("flex-basis", ctx._getBufferBarFlexBasis());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mode === "buffer" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275styleProp("transform", ctx._getPrimaryBarTransform());
      }
    },
    styles: [".mat-mdc-progress-bar{--mat-progress-bar-animation-multiplier: 1;display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mat-progress-bar-reduced-motion{--mat-progress-bar-animation-multiplier: 2}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mat-progress-bar-track-height, 4px),var(--mat-progress-bar-active-indicator-height, 4px))}@media(forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mat-progress-bar-track-height, 4px);border-radius:var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none))}.mdc-linear-progress__buffer-dots{background-image:radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);background-repeat:repeat-x;background-size:calc(calc(var(--mat-progress-bar-track-height, 4px) / 2)*5);background-position:left;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering calc(250ms*var(--mat-progress-bar-animation-multiplier)) infinite linear}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse calc(250ms*var(--mat-progress-bar-animation-multiplier)) infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBar, [{
    type: Component,
    args: [{
      selector: "mat-progress-bar",
      exportAs: "matProgressBar",
      host: {
        "role": "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        "tabindex": "-1",
        "[attr.aria-valuenow]": "_isIndeterminate() ? null : value",
        "[attr.mode]": "mode",
        "class": "mat-mdc-progress-bar mdc-linear-progress",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": "_isNoopAnimation",
        "[class.mdc-linear-progress--animation-ready]": "!_isNoopAnimation",
        "[class.mdc-linear-progress--indeterminate]": "_isIndeterminate()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div class="mdc-linear-progress__buffer" aria-hidden="true">
  <div
    class="mdc-linear-progress__buffer-bar"
    [style.flex-basis]="_getBufferBarFlexBasis()"></div>
  <!-- Remove the dots outside of buffer mode since they can cause CSP issues (see #28938) -->
  @if (mode === 'buffer') {
    <div class="mdc-linear-progress__buffer-dots"></div>
  }
</div>
<div
  class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
  aria-hidden="true"
  [style.transform]="_getPrimaryBarTransform()">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar" aria-hidden="true">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
`,
      styles: [".mat-mdc-progress-bar{--mat-progress-bar-animation-multiplier: 1;display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mat-progress-bar-reduced-motion{--mat-progress-bar-animation-multiplier: 2}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mat-progress-bar-track-height, 4px),var(--mat-progress-bar-active-indicator-height, 4px))}@media(forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mat-progress-bar-track-height, 4px);border-radius:var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none))}.mdc-linear-progress__buffer-dots{background-image:radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);background-repeat:repeat-x;background-size:calc(calc(var(--mat-progress-bar-track-height, 4px) / 2)*5);background-position:left;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering calc(250ms*var(--mat-progress-bar-animation-multiplier)) infinite linear}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse calc(250ms*var(--mat-progress-bar-animation-multiplier)) infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    bufferValue: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    animationEnd: [{
      type: Output
    }],
    mode: [{
      type: Input
    }]
  });
})();
function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}
var MatProgressBarModule = class _MatProgressBarModule {
  static \u0275fac = function MatProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatProgressBarModule,
    imports: [MatProgressBar],
    exports: [MatProgressBar, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressBar],
      exports: [MatProgressBar, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/menu.mjs
var _c0 = ["mat-menu-item", ""];
var _c1 = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"];
var _c2 = ["mat-icon, [matMenuItemIcon]", "*"];
function MatMenuItem_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "polygon", 3);
    \u0275\u0275elementEnd();
  }
}
var _c3 = ["*"];
function MatMenu_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275domListener("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closed.emit("click"));
    })("animationstart", function MatMenu_ng_template_0_Template_div_animationstart_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationStart($event.animationName));
    })("animationend", function MatMenu_ng_template_0_Template_div_animationend_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationDone($event.animationName));
    })("animationcancel", function MatMenu_ng_template_0_Template_div_animationcancel_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationDone($event.animationName));
    });
    \u0275\u0275domElementStart(1, "div", 1);
    \u0275\u0275projection(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1._classList);
    \u0275\u0275classProp("mat-menu-panel-animations-disabled", ctx_r1._animationsDisabled)("mat-menu-panel-exit-animation", ctx_r1._panelAnimationState === "void")("mat-menu-panel-animating", ctx_r1._isAnimating);
    \u0275\u0275domProperty("id", ctx_r1.panelId);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1.ariaLabelledby || null)("aria-describedby", ctx_r1.ariaDescribedby || null);
  }
}
var MAT_MENU_PANEL = new InjectionToken("MAT_MENU_PANEL");
var MatMenuItem = class _MatMenuItem {
  _elementRef = inject(ElementRef);
  _document = inject(DOCUMENT);
  _focusMonitor = inject(FocusMonitor);
  _parentMenu = inject(MAT_MENU_PANEL, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  /** ARIA role for the menu item. */
  role = "menuitem";
  /** Whether the menu item is disabled. */
  disabled = false;
  /** Whether ripples are disabled on the menu item. */
  disableRipple = false;
  /** Stream that emits when the menu item is hovered. */
  _hovered = new Subject();
  /** Stream that emits when the menu item is focused. */
  _focused = new Subject();
  /** Whether the menu item is highlighted. */
  _highlighted = false;
  /** Whether the menu item acts as a trigger for a sub-menu. */
  _triggersSubmenu = false;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    this._parentMenu?.addItem?.(this);
  }
  /** Focuses the menu item. */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    } else {
      this._getHostElement().focus(options);
    }
    this._focused.next(this);
  }
  ngAfterViewInit() {
    if (this._focusMonitor) {
      this._focusMonitor.monitor(this._elementRef, false);
    }
  }
  ngOnDestroy() {
    if (this._focusMonitor) {
      this._focusMonitor.stopMonitoring(this._elementRef);
    }
    if (this._parentMenu && this._parentMenu.removeItem) {
      this._parentMenu.removeItem(this);
    }
    this._hovered.complete();
    this._focused.complete();
  }
  /** Used to set the `tabindex`. */
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  /** Returns the host DOM element. */
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  /** Prevents the default element actions if it is disabled. */
  _checkDisabled(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Emits to the hover stream. */
  _handleMouseEnter() {
    this._hovered.next(this);
  }
  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel() {
    const clone = this._elementRef.nativeElement.cloneNode(true);
    const icons = clone.querySelectorAll("mat-icon, .material-icons");
    for (let i = 0; i < icons.length; i++) {
      icons[i].remove();
    }
    return clone.textContent?.trim() || "";
  }
  _setHighlighted(isHighlighted) {
    this._highlighted = isHighlighted;
    this._changeDetectorRef.markForCheck();
  }
  _setTriggersSubmenu(triggersSubmenu) {
    this._triggersSubmenu = triggersSubmenu;
    this._changeDetectorRef.markForCheck();
  }
  _hasFocus() {
    return this._document && this._document.activeElement === this._getHostElement();
  }
  static \u0275fac = function MatMenuItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuItem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatMenuItem,
    selectors: [["", "mat-menu-item", ""]],
    hostAttrs: [1, "mat-mdc-menu-item", "mat-focus-indicator"],
    hostVars: 8,
    hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatMenuItem_click_HostBindingHandler($event) {
          return ctx._checkDisabled($event);
        })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
          return ctx._handleMouseEnter();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled)("disabled", ctx.disabled || null);
        \u0275\u0275classProp("mat-mdc-menu-item-highlighted", ctx._highlighted)("mat-mdc-menu-item-submenu-trigger", ctx._triggersSubmenu);
      }
    },
    inputs: {
      role: "role",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute]
    },
    exportAs: ["matMenuItem"],
    attrs: _c0,
    ngContentSelectors: _c2,
    decls: 5,
    vars: 3,
    consts: [[1, "mat-mdc-menu-item-text"], ["matRipple", "", 1, "mat-mdc-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
    template: function MatMenuItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c1);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "span", 0);
        \u0275\u0275projection(2, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "div", 1);
        \u0275\u0275conditionalCreate(4, MatMenuItem_Conditional_4_Template, 2, 0, ":svg:svg", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._triggersSubmenu ? 4 : -1);
      }
    },
    dependencies: [MatRipple],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuItem, [{
    type: Component,
    args: [{
      selector: "[mat-menu-item]",
      exportAs: "matMenuItem",
      host: {
        "[attr.role]": "role",
        "class": "mat-mdc-menu-item mat-focus-indicator",
        "[class.mat-mdc-menu-item-highlighted]": "_highlighted",
        "[class.mat-mdc-menu-item-submenu-trigger]": "_triggersSubmenu",
        "[attr.tabindex]": "_getTabIndex()",
        "[attr.aria-disabled]": "disabled",
        "[attr.disabled]": "disabled || null",
        "(click)": "_checkDisabled($event)",
        "(mouseenter)": "_handleMouseEnter()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [MatRipple],
      template: '<ng-content select="mat-icon, [matMenuItemIcon]"></ng-content>\n<span class="mat-mdc-menu-item-text"><ng-content></ng-content></span>\n<div class="mat-mdc-menu-ripple" matRipple\n     [matRippleDisabled]="disableRipple || disabled"\n     [matRippleTrigger]="_getHostElement()">\n</div>\n\n@if (_triggersSubmenu) {\n     <svg\n       class="mat-mdc-menu-submenu-icon"\n       viewBox="0 0 5 10"\n       focusable="false"\n       aria-hidden="true"><polygon points="0,0 5,5 0,10"/></svg>\n}\n'
    }]
  }], () => [], {
    role: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function throwMatMenuInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuRecursiveError() {
  throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is not a parent of the trigger or move the trigger outside of the menu.`);
}
var MAT_MENU_CONTENT = new InjectionToken("MatMenuContent");
var MatMenuContent = class _MatMenuContent {
  _template = inject(TemplateRef);
  _appRef = inject(ApplicationRef);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _document = inject(DOCUMENT);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _portal;
  _outlet;
  /** Emits when the menu content has been attached. */
  _attached = new Subject();
  constructor() {
  }
  /**
   * Attaches the content with a particular context.
   * @docs-private
   */
  attach(context = {}) {
    if (!this._portal) {
      this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    }
    this.detach();
    if (!this._outlet) {
      this._outlet = new DomPortalOutlet(this._document.createElement("div"), this._appRef, this._injector);
    }
    const element = this._template.elementRef.nativeElement;
    element.parentNode.insertBefore(this._outlet.outletElement, element);
    this._changeDetectorRef.markForCheck();
    this._portal.attach(this._outlet, context);
    this._attached.next();
  }
  /**
   * Detaches the content.
   * @docs-private
   */
  detach() {
    if (this._portal?.isAttached) {
      this._portal.detach();
    }
  }
  ngOnDestroy() {
    this.detach();
    this._outlet?.dispose();
  }
  static \u0275fac = function MatMenuContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatMenuContent,
    selectors: [["ng-template", "matMenuContent", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_MENU_CONTENT,
      useExisting: _MatMenuContent
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matMenuContent]",
      providers: [{
        provide: MAT_MENU_CONTENT,
        useExisting: MatMenuContent
      }]
    }]
  }], () => [], null);
})();
var MAT_MENU_DEFAULT_OPTIONS = new InjectionToken("mat-menu-default-options", {
  providedIn: "root",
  factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
  return {
    overlapTrigger: false,
    xPosition: "after",
    yPosition: "below",
    backdropClass: "cdk-overlay-transparent-backdrop"
  };
}
var ENTER_ANIMATION = "_mat-menu-enter";
var EXIT_ANIMATION = "_mat-menu-exit";
var MatMenu = class _MatMenu {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _injector = inject(Injector);
  _keyManager;
  _xPosition;
  _yPosition;
  _firstItemFocusRef;
  _exitFallbackTimeout;
  /** Whether animations are currently disabled. */
  _animationsDisabled = _animationsDisabled();
  /** All items inside the menu. Includes items nested inside another menu. */
  _allItems;
  /** Only the direct descendant menu items. */
  _directDescendantItems = new QueryList();
  /** Classes to be applied to the menu panel. */
  _classList = {};
  /** Current state of the panel animation. */
  _panelAnimationState = "void";
  /** Emits whenever an animation on the menu completes. */
  _animationDone = new Subject();
  /** Whether the menu is animating. */
  _isAnimating = false;
  /** Parent menu of the current menu panel. */
  parentMenu;
  /** Layout direction of the menu. */
  direction;
  /** Class or list of classes to be added to the overlay panel. */
  overlayPanelClass;
  /** Class to be added to the backdrop element. */
  backdropClass;
  /** aria-label for the menu panel. */
  ariaLabel;
  /** aria-labelledby for the menu panel. */
  ariaLabelledby;
  /** aria-describedby for the menu panel. */
  ariaDescribedby;
  /** Position of the menu in the X axis. */
  get xPosition() {
    return this._xPosition;
  }
  set xPosition(value) {
    if (value !== "before" && value !== "after" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionX();
    }
    this._xPosition = value;
    this.setPositionClasses();
  }
  /** Position of the menu in the Y axis. */
  get yPosition() {
    return this._yPosition;
  }
  set yPosition(value) {
    if (value !== "above" && value !== "below" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionY();
    }
    this._yPosition = value;
    this.setPositionClasses();
  }
  /** @docs-private */
  templateRef;
  /**
   * List of the items inside of a menu.
   * @deprecated
   * @breaking-change 8.0.0
   */
  items;
  /**
   * Menu content that will be rendered lazily.
   * @docs-private
   */
  lazyContent;
  /** Whether the menu should overlap its trigger. */
  overlapTrigger;
  /** Whether the menu has a backdrop. */
  hasBackdrop;
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @param classes list of class names
   */
  set panelClass(classes) {
    const previousPanelClass = this._previousPanelClass;
    const newClassList = __spreadValues({}, this._classList);
    if (previousPanelClass && previousPanelClass.length) {
      previousPanelClass.split(" ").forEach((className) => {
        newClassList[className] = false;
      });
    }
    this._previousPanelClass = classes;
    if (classes && classes.length) {
      classes.split(" ").forEach((className) => {
        newClassList[className] = true;
      });
      this._elementRef.nativeElement.className = "";
    }
    this._classList = newClassList;
  }
  _previousPanelClass;
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @deprecated Use `panelClass` instead.
   * @breaking-change 8.0.0
   */
  get classList() {
    return this.panelClass;
  }
  set classList(classes) {
    this.panelClass = classes;
  }
  /** Event emitted when the menu is closed. */
  closed = new EventEmitter();
  /**
   * Event emitted when the menu is closed.
   * @deprecated Switch to `closed` instead
   * @breaking-change 8.0.0
   */
  close = this.closed;
  panelId = inject(_IdGenerator).getId("mat-menu-panel-");
  constructor() {
    const defaultOptions = inject(MAT_MENU_DEFAULT_OPTIONS);
    this.overlayPanelClass = defaultOptions.overlayPanelClass || "";
    this._xPosition = defaultOptions.xPosition;
    this._yPosition = defaultOptions.yPosition;
    this.backdropClass = defaultOptions.backdropClass;
    this.overlapTrigger = defaultOptions.overlapTrigger;
    this.hasBackdrop = defaultOptions.hasBackdrop;
  }
  ngOnInit() {
    this.setPositionClasses();
  }
  ngAfterContentInit() {
    this._updateDirectDescendants();
    this._keyManager = new FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
    this._keyManager.tabOut.subscribe(() => this.closed.emit("tab"));
    this._directDescendantItems.changes.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._focused)))).subscribe((focusedItem) => this._keyManager.updateActiveItem(focusedItem));
    this._directDescendantItems.changes.subscribe((itemsList) => {
      const manager = this._keyManager;
      if (this._panelAnimationState === "enter" && manager.activeItem?._hasFocus()) {
        const items = itemsList.toArray();
        const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
        if (items[index] && !items[index].disabled) {
          manager.setActiveItem(index);
        } else {
          manager.setNextItemActive();
        }
      }
    });
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._directDescendantItems.destroy();
    this.closed.complete();
    this._firstItemFocusRef?.destroy();
    clearTimeout(this._exitFallbackTimeout);
  }
  /** Stream that emits whenever the hovered menu item changes. */
  _hovered() {
    const itemChanges = this._directDescendantItems.changes;
    return itemChanges.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._hovered))));
  }
  /*
   * Registers a menu item with the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  addItem(_item) {
  }
  /**
   * Removes an item from the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  removeItem(_item) {
  }
  /** Handle a keyboard event from the menu, delegating to the appropriate action. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    switch (keyCode) {
      case ESCAPE:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this.closed.emit("keydown");
        }
        break;
      case LEFT_ARROW:
        if (this.parentMenu && this.direction === "ltr") {
          this.closed.emit("keydown");
        }
        break;
      case RIGHT_ARROW:
        if (this.parentMenu && this.direction === "rtl") {
          this.closed.emit("keydown");
        }
        break;
      default:
        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
          manager.setFocusOrigin("keyboard");
        }
        manager.onKeydown(event);
        return;
    }
  }
  /**
   * Focus the first item in the menu.
   * @param origin Action from which the focus originated. Used to set the correct styling.
   */
  focusFirstItem(origin = "program") {
    this._firstItemFocusRef?.destroy();
    this._firstItemFocusRef = afterNextRender(() => {
      const menuPanel = this._resolvePanel();
      if (!menuPanel || !menuPanel.contains(document.activeElement)) {
        const manager = this._keyManager;
        manager.setFocusOrigin(origin).setFirstItemActive();
        if (!manager.activeItem && menuPanel) {
          menuPanel.focus();
        }
      }
    }, {
      injector: this._injector
    });
  }
  /**
   * Resets the active item in the menu. This is used when the menu is opened, allowing
   * the user to start from the first option when pressing the down arrow.
   */
  resetActiveItem() {
    this._keyManager.setActiveItem(-1);
  }
  /**
   * @deprecated No longer used and will be removed.
   * @breaking-change 21.0.0
   */
  setElevation(_depth) {
  }
  /**
   * Adds classes to the menu panel based on its position. Can be used by
   * consumers to add specific styling based on the position.
   * @param posX Position of the menu along the x axis.
   * @param posY Position of the menu along the y axis.
   * @docs-private
   */
  setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
    this._classList = __spreadProps(__spreadValues({}, this._classList), {
      ["mat-menu-before"]: posX === "before",
      ["mat-menu-after"]: posX === "after",
      ["mat-menu-above"]: posY === "above",
      ["mat-menu-below"]: posY === "below"
    });
    this._changeDetectorRef.markForCheck();
  }
  /** Callback that is invoked when the panel animation completes. */
  _onAnimationDone(state) {
    const isExit = state === EXIT_ANIMATION;
    if (isExit || state === ENTER_ANIMATION) {
      if (isExit) {
        clearTimeout(this._exitFallbackTimeout);
        this._exitFallbackTimeout = void 0;
      }
      this._animationDone.next(isExit ? "void" : "enter");
      this._isAnimating = false;
    }
  }
  _onAnimationStart(state) {
    if (state === ENTER_ANIMATION || state === EXIT_ANIMATION) {
      this._isAnimating = true;
    }
  }
  _setIsOpen(isOpen) {
    this._panelAnimationState = isOpen ? "enter" : "void";
    if (isOpen) {
      if (this._keyManager.activeItemIndex === 0) {
        const menuPanel = this._resolvePanel();
        if (menuPanel) {
          menuPanel.scrollTop = 0;
        }
      }
    } else if (!this._animationsDisabled) {
      this._exitFallbackTimeout = setTimeout(() => this._onAnimationDone(EXIT_ANIMATION), 200);
    }
    if (this._animationsDisabled) {
      setTimeout(() => {
        this._onAnimationDone(isOpen ? ENTER_ANIMATION : EXIT_ANIMATION);
      });
    }
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Sets up a stream that will keep track of any newly-added menu items and will update the list
   * of direct descendants. We collect the descendants this way, because `_allItems` can include
   * items that are part of child menus, and using a custom way of registering items is unreliable
   * when it comes to maintaining the item order.
   */
  _updateDirectDescendants() {
    this._allItems.changes.pipe(startWith(this._allItems)).subscribe((items) => {
      this._directDescendantItems.reset(items.filter((item) => item._parentMenu === this));
      this._directDescendantItems.notifyOnChanges();
    });
  }
  /** Gets the menu panel DOM node. */
  _resolvePanel() {
    let menuPanel = null;
    if (this._directDescendantItems.length) {
      menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
    }
    return menuPanel;
  }
  static \u0275fac = function MatMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenu)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatMenu,
    selectors: [["mat-menu"]],
    contentQueries: function MatMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_MENU_CONTENT, 5);
        \u0275\u0275contentQuery(dirIndex, MatMenuItem, 5);
        \u0275\u0275contentQuery(dirIndex, MatMenuItem, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lazyContent = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allItems = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.items = _t);
      }
    },
    viewQuery: function MatMenu_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateRef = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function MatMenu_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
      }
    },
    inputs: {
      backdropClass: "backdropClass",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      xPosition: "xPosition",
      yPosition: "yPosition",
      overlapTrigger: [2, "overlapTrigger", "overlapTrigger", booleanAttribute],
      hasBackdrop: [2, "hasBackdrop", "hasBackdrop", (value) => value == null ? null : booleanAttribute(value)],
      panelClass: [0, "class", "panelClass"],
      classList: "classList"
    },
    outputs: {
      closed: "closed",
      close: "close"
    },
    exportAs: ["matMenu"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_MENU_PANEL,
      useExisting: _MatMenu
    }])],
    ngContentSelectors: _c3,
    decls: 1,
    vars: 0,
    consts: [["tabindex", "-1", "role", "menu", 1, "mat-mdc-menu-panel", 3, "click", "animationstart", "animationend", "animationcancel", "id"], [1, "mat-mdc-menu-content"]],
    template: function MatMenu_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, MatMenu_ng_template_0_Template, 3, 12, "ng-template");
      }
    },
    styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenu, [{
    type: Component,
    args: [{
      selector: "mat-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matMenu",
      host: {
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null"
      },
      providers: [{
        provide: MAT_MENU_PANEL,
        useExisting: MatMenu
      }],
      template: `<ng-template>
  <div
    class="mat-mdc-menu-panel"
    [id]="panelId"
    [class]="_classList"
    [class.mat-menu-panel-animations-disabled]="_animationsDisabled"
    [class.mat-menu-panel-exit-animation]="_panelAnimationState === 'void'"
    [class.mat-menu-panel-animating]="_isAnimating"
    (click)="closed.emit('click')"
    tabindex="-1"
    role="menu"
    (animationstart)="_onAnimationStart($event.animationName)"
    (animationend)="_onAnimationDone($event.animationName)"
    (animationcancel)="_onAnimationDone($event.animationName)"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    [attr.aria-describedby]="ariaDescribedby || null">
    <div class="mat-mdc-menu-content">
      <ng-content></ng-content>
    </div>
  </div>
</ng-template>
`,
      styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n']
    }]
  }], () => [], {
    _allItems: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: true
      }]
    }],
    backdropClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    xPosition: [{
      type: Input
    }],
    yPosition: [{
      type: Input
    }],
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef]
    }],
    items: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: false
      }]
    }],
    lazyContent: [{
      type: ContentChild,
      args: [MAT_MENU_CONTENT]
    }],
    overlapTrigger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hasBackdrop: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? null : booleanAttribute(value)
      }]
    }],
    panelClass: [{
      type: Input,
      args: ["class"]
    }],
    classList: [{
      type: Input
    }],
    closed: [{
      type: Output
    }],
    close: [{
      type: Output
    }]
  });
})();
var MAT_MENU_SCROLL_STRATEGY = new InjectionToken("mat-menu-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
function MAT_MENU_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_MENU_SCROLL_STRATEGY,
  deps: [],
  useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
};
var PANELS_TO_TRIGGERS = /* @__PURE__ */ new WeakMap();
var MatMenuTriggerBase = class _MatMenuTriggerBase {
  _canHaveBackdrop;
  _element = inject(ElementRef);
  _viewContainerRef = inject(ViewContainerRef);
  _menuItemInstance = inject(MatMenuItem, {
    optional: true,
    self: true
  });
  _dir = inject(Directionality, {
    optional: true
  });
  _focusMonitor = inject(FocusMonitor);
  _ngZone = inject(NgZone);
  _injector = inject(Injector);
  _scrollStrategy = inject(MAT_MENU_SCROLL_STRATEGY);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _animationsDisabled = _animationsDisabled();
  _portal;
  _overlayRef = null;
  _menuOpen = false;
  _closingActionsSubscription = Subscription.EMPTY;
  _menuCloseSubscription = Subscription.EMPTY;
  _pendingRemoval;
  /**
   * We're specifically looking for a `MatMenu` here since the generic `MatMenuPanel`
   * interface lacks some functionality around nested menus and animations.
   */
  _parentMaterialMenu;
  /**
   * Cached value of the padding of the parent menu panel.
   * Used to offset sub-menus to compensate for the padding.
   */
  _parentInnerPadding;
  // Tracking input type is necessary so it's possible to only auto-focus
  // the first item of the list when the menu is opened via the keyboard
  _openedBy = void 0;
  /** Menu currently assigned to the trigger. */
  get _menu() {
    return this._menuInternal;
  }
  set _menu(menu) {
    if (menu === this._menuInternal) {
      return;
    }
    this._menuInternal = menu;
    this._menuCloseSubscription.unsubscribe();
    if (menu) {
      if (menu === this._parentMaterialMenu && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throwMatMenuRecursiveError();
      }
      this._menuCloseSubscription = menu.close.subscribe((reason) => {
        this._destroyMenu(reason);
        if ((reason === "click" || reason === "tab") && this._parentMaterialMenu) {
          this._parentMaterialMenu.closed.emit(reason);
        }
      });
    }
    this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu());
  }
  _menuInternal;
  constructor(_canHaveBackdrop) {
    this._canHaveBackdrop = _canHaveBackdrop;
    const parentMenu = inject(MAT_MENU_PANEL, {
      optional: true
    });
    this._parentMaterialMenu = parentMenu instanceof MatMenu ? parentMenu : void 0;
  }
  ngOnDestroy() {
    if (this._menu && this._ownsMenu(this._menu)) {
      PANELS_TO_TRIGGERS.delete(this._menu);
    }
    this._pendingRemoval?.unsubscribe();
    this._menuCloseSubscription.unsubscribe();
    this._closingActionsSubscription.unsubscribe();
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }
  /** Whether the menu is open. */
  get menuOpen() {
    return this._menuOpen;
  }
  /** The text direction of the containing app. */
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Whether the menu triggers a sub-menu or a top-level one. */
  _triggersSubmenu() {
    return !!(this._menuItemInstance && this._parentMaterialMenu && this._menu);
  }
  _closeMenu() {
    this._menu?.close.emit();
  }
  /** Internal method to open menu providing option to auto focus on first item. */
  _openMenu(autoFocus) {
    const menu = this._menu;
    if (this._menuOpen || !menu) {
      return;
    }
    this._pendingRemoval?.unsubscribe();
    const previousTrigger = PANELS_TO_TRIGGERS.get(menu);
    PANELS_TO_TRIGGERS.set(menu, this);
    if (previousTrigger && previousTrigger !== this) {
      previousTrigger._closeMenu();
    }
    const overlayRef = this._createOverlay(menu);
    const overlayConfig = overlayRef.getConfig();
    const positionStrategy = overlayConfig.positionStrategy;
    this._setPosition(menu, positionStrategy);
    if (this._canHaveBackdrop) {
      overlayConfig.hasBackdrop = menu.hasBackdrop == null ? !this._triggersSubmenu() : menu.hasBackdrop;
    } else {
      overlayConfig.hasBackdrop = false;
    }
    if (!overlayRef.hasAttached()) {
      overlayRef.attach(this._getPortal(menu));
      menu.lazyContent?.attach(this.menuData);
    }
    this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this._closeMenu());
    menu.parentMenu = this._triggersSubmenu() ? this._parentMaterialMenu : void 0;
    menu.direction = this.dir;
    if (autoFocus) {
      menu.focusFirstItem(this._openedBy || "program");
    }
    this._setIsMenuOpen(true);
    if (menu instanceof MatMenu) {
      menu._setIsOpen(true);
      menu._directDescendantItems.changes.pipe(takeUntil(menu.close)).subscribe(() => {
        positionStrategy.withLockedPosition(false).reapplyLastPosition();
        positionStrategy.withLockedPosition(true);
      });
    }
  }
  /**
   * Focuses the menu trigger.
   * @param origin Source of the menu trigger's focus.
   */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  /** Closes the menu and does the necessary cleanup. */
  _destroyMenu(reason) {
    const overlayRef = this._overlayRef;
    const menu = this._menu;
    if (!overlayRef || !this.menuOpen) {
      return;
    }
    this._closingActionsSubscription.unsubscribe();
    this._pendingRemoval?.unsubscribe();
    if (menu instanceof MatMenu && this._ownsMenu(menu)) {
      this._pendingRemoval = menu._animationDone.pipe(take(1)).subscribe(() => {
        overlayRef.detach();
        if (!PANELS_TO_TRIGGERS.has(menu)) {
          menu.lazyContent?.detach();
        }
      });
      menu._setIsOpen(false);
    } else {
      overlayRef.detach();
      menu?.lazyContent?.detach();
    }
    if (menu && this._ownsMenu(menu)) {
      PANELS_TO_TRIGGERS.delete(menu);
    }
    if (this.restoreFocus && (reason === "keydown" || !this._openedBy || !this._triggersSubmenu())) {
      this.focus(this._openedBy);
    }
    this._openedBy = void 0;
    this._setIsMenuOpen(false);
  }
  // set state rather than toggle to support triggers sharing a menu
  _setIsMenuOpen(isOpen) {
    if (isOpen !== this._menuOpen) {
      this._menuOpen = isOpen;
      this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
      if (this._triggersSubmenu()) {
        this._menuItemInstance._setHighlighted(isOpen);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method creates the overlay from the provided menu's template and saves its
   * OverlayRef so that it can be attached to the DOM when openMenu is called.
   */
  _createOverlay(menu) {
    if (!this._overlayRef) {
      const config = this._getOverlayConfig(menu);
      this._subscribeToPositions(menu, config.positionStrategy);
      this._overlayRef = createOverlayRef(this._injector, config);
      this._overlayRef.keydownEvents().subscribe((event) => {
        if (this._menu instanceof MatMenu) {
          this._menu._handleKeydown(event);
        }
      });
    }
    return this._overlayRef;
  }
  /**
   * This method builds the configuration object needed to create the overlay, the OverlayState.
   * @returns OverlayConfig
   */
  _getOverlayConfig(menu) {
    return new OverlayConfig({
      positionStrategy: createFlexibleConnectedPositionStrategy(this._injector, this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),
      backdropClass: menu.backdropClass || "cdk-overlay-transparent-backdrop",
      panelClass: menu.overlayPanelClass,
      scrollStrategy: this._scrollStrategy(),
      direction: this._dir || "ltr",
      disableAnimations: this._animationsDisabled
    });
  }
  /**
   * Listens to changes in the position of the overlay and sets the correct classes
   * on the menu based on the new position. This ensures the animation origin is always
   * correct, even if a fallback position is used for the overlay.
   */
  _subscribeToPositions(menu, position) {
    if (menu.setPositionClasses) {
      position.positionChanges.subscribe((change) => {
        this._ngZone.run(() => {
          const posX = change.connectionPair.overlayX === "start" ? "after" : "before";
          const posY = change.connectionPair.overlayY === "top" ? "below" : "above";
          menu.setPositionClasses(posX, posY);
        });
      });
    }
  }
  /**
   * Sets the appropriate positions on a position strategy
   * so the overlay connects with the trigger correctly.
   * @param positionStrategy Strategy whose position to update.
   */
  _setPosition(menu, positionStrategy) {
    let [originX, originFallbackX] = menu.xPosition === "before" ? ["end", "start"] : ["start", "end"];
    let [overlayY, overlayFallbackY] = menu.yPosition === "above" ? ["bottom", "top"] : ["top", "bottom"];
    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    let [overlayX, overlayFallbackX] = [originX, originFallbackX];
    let offsetY = 0;
    if (this._triggersSubmenu()) {
      overlayFallbackX = originX = menu.xPosition === "before" ? "start" : "end";
      originFallbackX = overlayX = originX === "end" ? "start" : "end";
      if (this._parentMaterialMenu) {
        if (this._parentInnerPadding == null) {
          const firstItem = this._parentMaterialMenu.items.first;
          this._parentInnerPadding = firstItem ? firstItem._getHostElement().offsetTop : 0;
        }
        offsetY = overlayY === "bottom" ? this._parentInnerPadding : -this._parentInnerPadding;
      }
    } else if (!menu.overlapTrigger) {
      originY = overlayY === "top" ? "bottom" : "top";
      originFallbackY = overlayFallbackY === "top" ? "bottom" : "top";
    }
    positionStrategy.withPositions([{
      originX,
      originY,
      overlayX,
      overlayY,
      offsetY
    }, {
      originX: originFallbackX,
      originY,
      overlayX: overlayFallbackX,
      overlayY,
      offsetY
    }, {
      originX,
      originY: originFallbackY,
      overlayX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }, {
      originX: originFallbackX,
      originY: originFallbackY,
      overlayX: overlayFallbackX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }]);
  }
  /** Returns a stream that emits whenever an action that should close the menu occurs. */
  _menuClosingActions() {
    const outsideClicks = this._getOutsideClickStream(this._overlayRef);
    const detachments = this._overlayRef.detachments();
    const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : of();
    const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(filter((active) => this._menuOpen && active !== this._menuItemInstance)) : of();
    return merge(outsideClicks, parentClose, hover, detachments);
  }
  /** Gets the portal that should be attached to the overlay. */
  _getPortal(menu) {
    if (!this._portal || this._portal.templateRef !== menu.templateRef) {
      this._portal = new TemplatePortal(menu.templateRef, this._viewContainerRef);
    }
    return this._portal;
  }
  /**
   * Determines whether the trigger owns a specific menu panel, at the current point in time.
   * This allows us to distinguish the case where the same panel is passed into multiple triggers
   * and multiple are open at a time.
   */
  _ownsMenu(menu) {
    return PANELS_TO_TRIGGERS.get(menu) === this;
  }
  static \u0275fac = function MatMenuTriggerBase_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatMenuTriggerBase
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuTriggerBase, [{
    type: Directive
  }], () => [{
    type: void 0
  }], null);
})();
var MatMenuTrigger = class _MatMenuTrigger extends MatMenuTriggerBase {
  _cleanupTouchstart;
  _hoverSubscription = Subscription.EMPTY;
  /**
   * @deprecated
   * @breaking-change 8.0.0
   */
  get _deprecatedMatMenuTriggerFor() {
    return this.menu;
  }
  set _deprecatedMatMenuTriggerFor(v) {
    this.menu = v;
  }
  /** References the menu instance that the trigger is associated with. */
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    this._menu = menu;
  }
  /** Data to be passed along to any lazily-rendered content. */
  menuData;
  /**
   * Whether focus should be restored when the menu is closed.
   * Note that disabling this option can have accessibility implications
   * and it's up to you to manage focus, if you decide to turn it off.
   */
  restoreFocus = true;
  /** Event emitted when the associated menu is opened. */
  menuOpened = new EventEmitter();
  /**
   * Event emitted when the associated menu is opened.
   * @deprecated Switch to `menuOpened` instead
   * @breaking-change 8.0.0
   */
  // tslint:disable-next-line:no-output-on-prefix
  onMenuOpen = this.menuOpened;
  /** Event emitted when the associated menu is closed. */
  menuClosed = new EventEmitter();
  /**
   * Event emitted when the associated menu is closed.
   * @deprecated Switch to `menuClosed` instead
   * @breaking-change 8.0.0
   */
  // tslint:disable-next-line:no-output-on-prefix
  onMenuClose = this.menuClosed;
  constructor() {
    super(true);
    const renderer = inject(Renderer2);
    this._cleanupTouchstart = renderer.listen(this._element.nativeElement, "touchstart", (event) => {
      if (!isFakeTouchstartFromScreenReader(event)) {
        this._openedBy = "touch";
      }
    }, {
      passive: true
    });
  }
  /** Whether the menu triggers a sub-menu or a top-level one. */
  triggersSubmenu() {
    return super._triggersSubmenu();
  }
  /** Toggles the menu between the open and closed states. */
  toggleMenu() {
    return this.menuOpen ? this.closeMenu() : this.openMenu();
  }
  /** Opens the menu. */
  openMenu() {
    this._openMenu(true);
  }
  /** Closes the menu. */
  closeMenu() {
    this._closeMenu();
  }
  /**
   * Updates the position of the menu to ensure that it fits all options within the viewport.
   */
  updatePosition() {
    this._overlayRef?.updatePosition();
  }
  ngAfterContentInit() {
    this._handleHover();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupTouchstart();
    this._hoverSubscription.unsubscribe();
  }
  _getOverlayOrigin() {
    return this._element;
  }
  _getOutsideClickStream(overlayRef) {
    return overlayRef.backdropClick();
  }
  /** Handles mouse presses on the trigger. */
  _handleMousedown(event) {
    if (!isFakeMousedownFromScreenReader(event)) {
      this._openedBy = event.button === 0 ? "mouse" : void 0;
      if (this.triggersSubmenu()) {
        event.preventDefault();
      }
    }
  }
  /** Handles key presses on the trigger. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    if (keyCode === ENTER || keyCode === SPACE) {
      this._openedBy = "keyboard";
    }
    if (this.triggersSubmenu() && (keyCode === RIGHT_ARROW && this.dir === "ltr" || keyCode === LEFT_ARROW && this.dir === "rtl")) {
      this._openedBy = "keyboard";
      this.openMenu();
    }
  }
  /** Handles click events on the trigger. */
  _handleClick(event) {
    if (this.triggersSubmenu()) {
      event.stopPropagation();
      this.openMenu();
    } else {
      this.toggleMenu();
    }
  }
  /** Handles the cases where the user hovers over the trigger. */
  _handleHover() {
    if (this.triggersSubmenu() && this._parentMaterialMenu) {
      this._hoverSubscription = this._parentMaterialMenu._hovered().subscribe((active) => {
        if (active === this._menuItemInstance && !active.disabled) {
          this._openedBy = "mouse";
          this._openMenu(false);
        }
      });
    }
  }
  static \u0275fac = function MatMenuTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatMenuTrigger,
    selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
    hostAttrs: [1, "mat-mdc-menu-trigger"],
    hostVars: 3,
    hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatMenuTrigger_click_HostBindingHandler($event) {
          return ctx._handleClick($event);
        })("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
          return ctx._handleMousedown($event);
        })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-haspopup", ctx.menu ? "menu" : null)("aria-expanded", ctx.menuOpen)("aria-controls", ctx.menuOpen ? ctx.menu == null ? null : ctx.menu.panelId : null);
      }
    },
    inputs: {
      _deprecatedMatMenuTriggerFor: [0, "mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
      menu: [0, "matMenuTriggerFor", "menu"],
      menuData: [0, "matMenuTriggerData", "menuData"],
      restoreFocus: [0, "matMenuTriggerRestoreFocus", "restoreFocus"]
    },
    outputs: {
      menuOpened: "menuOpened",
      onMenuOpen: "onMenuOpen",
      menuClosed: "menuClosed",
      onMenuClose: "onMenuClose"
    },
    exportAs: ["matMenuTrigger"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuTrigger, [{
    type: Directive,
    args: [{
      selector: "[mat-menu-trigger-for], [matMenuTriggerFor]",
      host: {
        "class": "mat-mdc-menu-trigger",
        "[attr.aria-haspopup]": 'menu ? "menu" : null',
        "[attr.aria-expanded]": "menuOpen",
        "[attr.aria-controls]": "menuOpen ? menu?.panelId : null",
        "(click)": "_handleClick($event)",
        "(mousedown)": "_handleMousedown($event)",
        "(keydown)": "_handleKeydown($event)"
      },
      exportAs: "matMenuTrigger"
    }]
  }], () => [], {
    _deprecatedMatMenuTriggerFor: [{
      type: Input,
      args: ["mat-menu-trigger-for"]
    }],
    menu: [{
      type: Input,
      args: ["matMenuTriggerFor"]
    }],
    menuData: [{
      type: Input,
      args: ["matMenuTriggerData"]
    }],
    restoreFocus: [{
      type: Input,
      args: ["matMenuTriggerRestoreFocus"]
    }],
    menuOpened: [{
      type: Output
    }],
    onMenuOpen: [{
      type: Output
    }],
    menuClosed: [{
      type: Output
    }],
    onMenuClose: [{
      type: Output
    }]
  });
})();
var MatContextMenuTrigger = class _MatContextMenuTrigger extends MatMenuTriggerBase {
  _point = {
    x: 0,
    y: 0,
    initialX: 0,
    initialY: 0,
    initialScrollX: 0,
    initialScrollY: 0
  };
  _triggerPressedControl = false;
  _rootNode;
  _document = inject(DOCUMENT);
  _viewportRuler = inject(ViewportRuler);
  _scrollDispatcher = inject(ScrollDispatcher);
  _scrollSubscription;
  /** References the menu instance that the trigger is associated with. */
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    this._menu = menu;
  }
  /** Data to be passed along to any lazily-rendered content. */
  menuData;
  /**
   * Whether focus should be restored when the menu is closed.
   * Note that disabling this option can have accessibility implications
   * and it's up to you to manage focus, if you decide to turn it off.
   */
  restoreFocus = true;
  /** Whether the context menu is disabled. */
  disabled = false;
  /** Event emitted when the associated menu is opened. */
  menuOpened = new EventEmitter();
  /** Event emitted when the associated menu is closed. */
  menuClosed = new EventEmitter();
  constructor() {
    super(false);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._scrollSubscription?.unsubscribe();
  }
  /** Handler for `contextmenu` events. */
  _handleContextMenuEvent(event) {
    if (!this.disabled) {
      event.preventDefault();
      if (this.menuOpen) {
        this._initializePoint(event.clientX, event.clientY);
        this._updatePosition();
      } else {
        this._openContextMenu(event);
      }
    }
  }
  _destroyMenu(reason) {
    super._destroyMenu(reason);
    this._scrollSubscription?.unsubscribe();
  }
  _getOverlayOrigin() {
    return this._point;
  }
  _getOutsideClickStream(overlayRef) {
    return overlayRef.outsidePointerEvents().pipe(skipWhile((event, index) => {
      if (event.type === "contextmenu") {
        return this._isWithinMenuOrTrigger(_getEventTarget(event));
      } else if (event.type === "auxclick") {
        if (index === 0) {
          return true;
        }
        this._rootNode ??= _getShadowRoot(this._element.nativeElement) || this._document;
        return this._isWithinMenuOrTrigger(this._rootNode.elementFromPoint(event.clientX, event.clientY));
      }
      return this._triggerPressedControl && index === 0 && event.ctrlKey;
    }));
  }
  /** Checks whether an element is within the trigger or the opened overlay. */
  _isWithinMenuOrTrigger(target) {
    if (!target) {
      return false;
    }
    const element = this._element.nativeElement;
    if (target === element || element.contains(target)) {
      return true;
    }
    const overlay = this._overlayRef?.hostElement;
    return overlay === target || !!overlay?.contains(target);
  }
  /** Opens the context menu. */
  _openContextMenu(event) {
    if (event.button === 2) {
      this._openedBy = "mouse";
    } else {
      this._openedBy = event.button === 0 ? "keyboard" : void 0;
    }
    this._initializePoint(event.clientX, event.clientY);
    this._triggerPressedControl = event.ctrlKey;
    super._openMenu(true);
    this._scrollSubscription?.unsubscribe();
    this._scrollSubscription = this._scrollDispatcher.scrolled(0).subscribe(() => {
      const position = this._viewportRuler.getViewportScrollPosition();
      const point = this._point;
      point.y = point.initialY + (point.initialScrollY - position.top);
      point.x = point.initialX + (point.initialScrollX - position.left);
      this._updatePosition();
    });
  }
  /** Initializes the point representing the origin relative to which the menu will be rendered. */
  _initializePoint(x, y) {
    const scrollPosition = this._viewportRuler.getViewportScrollPosition();
    const point = this._point;
    point.x = point.initialX = x;
    point.y = point.initialY = y;
    point.initialScrollX = scrollPosition.left;
    point.initialScrollY = scrollPosition.top;
  }
  /** Refreshes the position of the overlay. */
  _updatePosition() {
    const overlayRef = this._overlayRef;
    if (overlayRef) {
      const positionStrategy = overlayRef.getConfig().positionStrategy;
      positionStrategy.setOrigin(this._point);
      overlayRef.updatePosition();
    }
  }
  static \u0275fac = function MatContextMenuTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatContextMenuTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatContextMenuTrigger,
    selectors: [["", "matContextMenuTriggerFor", ""]],
    hostAttrs: [1, "mat-context-menu-trigger"],
    hostVars: 3,
    hostBindings: function MatContextMenuTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("contextmenu", function MatContextMenuTrigger_contextmenu_HostBindingHandler($event) {
          return ctx._handleContextMenuEvent($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-controls", ctx.menuOpen ? ctx.menu == null ? null : ctx.menu.panelId : null);
        \u0275\u0275classProp("mat-context-menu-trigger-disabled", ctx.disabled);
      }
    },
    inputs: {
      menu: [0, "matContextMenuTriggerFor", "menu"],
      menuData: [0, "matContextMenuTriggerData", "menuData"],
      restoreFocus: [0, "matContextMenuTriggerRestoreFocus", "restoreFocus"],
      disabled: [2, "matContextMenuTriggerDisabled", "disabled", booleanAttribute]
    },
    outputs: {
      menuOpened: "menuOpened",
      menuClosed: "menuClosed"
    },
    exportAs: ["matContextMenuTrigger"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatContextMenuTrigger, [{
    type: Directive,
    args: [{
      selector: "[matContextMenuTriggerFor]",
      host: {
        "class": "mat-context-menu-trigger",
        "[class.mat-context-menu-trigger-disabled]": "disabled",
        "[attr.aria-controls]": "menuOpen ? menu?.panelId : null",
        "(contextmenu)": "_handleContextMenuEvent($event)"
      },
      exportAs: "matContextMenuTrigger"
    }]
  }], () => [], {
    menu: [{
      type: Input,
      args: [{
        alias: "matContextMenuTriggerFor",
        required: true
      }]
    }],
    menuData: [{
      type: Input,
      args: ["matContextMenuTriggerData"]
    }],
    restoreFocus: [{
      type: Input,
      args: ["matContextMenuTriggerRestoreFocus"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "matContextMenuTriggerDisabled",
        transform: booleanAttribute
      }]
    }],
    menuOpened: [{
      type: Output
    }],
    menuClosed: [{
      type: Output
    }]
  });
})();
var MatMenuModule = class _MatMenuModule {
  static \u0275fac = function MatMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatMenuModule,
    imports: [MatRippleModule, MatCommonModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger],
    exports: [CdkScrollableModule, MatMenu, MatCommonModule, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [MatRippleModule, MatCommonModule, OverlayModule, CdkScrollableModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatCommonModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger],
      exports: [CdkScrollableModule, MatMenu, MatCommonModule, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger],
      providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();
var matMenuAnimations = {
  // Represents:
  // trigger('transformMenu', [
  //   state(
  //     'void',
  //     style({
  //       opacity: 0,
  //       transform: 'scale(0.8)',
  //     }),
  //   ),
  //   transition(
  //     'void => enter',
  //     animate(
  //       '120ms cubic-bezier(0, 0, 0.2, 1)',
  //       style({
  //         opacity: 1,
  //         transform: 'scale(1)',
  //       }),
  //     ),
  //   ),
  //   transition('* => void', animate('100ms 25ms linear', style({opacity: 0}))),
  // ])
  /**
   * This animation controls the menu panel's entry and exit from the page.
   *
   * When the menu panel is added to the DOM, it scales in and fades in its border.
   *
   * When the menu panel is removed from the DOM, it simply fades out after a brief
   * delay to display the ripple.
   */
  transformMenu: {
    type: 7,
    name: "transformMenu",
    definitions: [{
      type: 0,
      name: "void",
      styles: {
        type: 6,
        styles: {
          opacity: 0,
          transform: "scale(0.8)"
        },
        offset: null
      }
    }, {
      type: 1,
      expr: "void => enter",
      animation: {
        type: 4,
        styles: {
          type: 6,
          styles: {
            opacity: 1,
            transform: "scale(1)"
          },
          offset: null
        },
        timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
      },
      options: null
    }, {
      type: 1,
      expr: "* => void",
      animation: {
        type: 4,
        styles: {
          type: 6,
          styles: {
            opacity: 0
          },
          offset: null
        },
        timings: "100ms 25ms linear"
      },
      options: null
    }],
    options: {}
  },
  // Represents:
  // trigger('fadeInItems', [
  //   // TODO(crisbeto): this is inside the `transformMenu`
  //   // now. Remove next time we do breaking changes.
  //   state('showing', style({opacity: 1})),
  //   transition('void => *', [
  //     style({opacity: 0}),
  //     animate('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
  //   ]),
  // ])
  /**
   * This animation fades in the background color and content of the menu panel
   * after its containing element is scaled in.
   */
  fadeInItems: {
    type: 7,
    name: "fadeInItems",
    definitions: [{
      type: 0,
      name: "showing",
      styles: {
        type: 6,
        styles: {
          opacity: 1
        },
        offset: null
      }
    }, {
      type: 1,
      expr: "void => *",
      animation: [{
        type: 6,
        styles: {
          opacity: 0
        },
        offset: null
      }, {
        type: 4,
        styles: null,
        timings: "400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"
      }],
      options: null
    }],
    options: {}
  }
};
var fadeInItems = matMenuAnimations.fadeInItems;
var transformMenu = matMenuAnimations.transformMenu;

// node_modules/@angular/material/fesm2022/toolbar.mjs
var _c02 = ["*", [["mat-toolbar-row"]]];
var _c12 = ["*", "mat-toolbar-row"];
var MatToolbarRow = class _MatToolbarRow {
  static \u0275fac = function MatToolbarRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbarRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatToolbarRow,
    selectors: [["mat-toolbar-row"]],
    hostAttrs: [1, "mat-toolbar-row"],
    exportAs: ["matToolbarRow"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarRow, [{
    type: Directive,
    args: [{
      selector: "mat-toolbar-row",
      exportAs: "matToolbarRow",
      host: {
        "class": "mat-toolbar-row"
      }
    }]
  }], null, null);
})();
var MatToolbar = class _MatToolbar {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  _document = inject(DOCUMENT);
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /**
   * Theme color of the toolbar. This API is supported in M2 themes only, it has
   * no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/toolbar/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Reference to all toolbar row elements that have been projected. */
  _toolbarRows;
  constructor() {
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._checkToolbarMixedModes();
      this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
    }
  }
  /**
   * Throws an exception when developers are attempting to combine the different toolbar row modes.
   */
  _checkToolbarMixedModes() {
    if (this._toolbarRows.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter((node) => !(node.classList && node.classList.contains("mat-toolbar-row"))).filter((node) => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some((node) => !!(node.textContent && node.textContent.trim()));
      if (isCombinedUsage) {
        throwToolbarMixedModesError();
      }
    }
  }
  static \u0275fac = function MatToolbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatToolbar,
    selectors: [["mat-toolbar"]],
    contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatToolbarRow, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._toolbarRows = _t);
      }
    },
    hostAttrs: [1, "mat-toolbar"],
    hostVars: 6,
    hostBindings: function MatToolbar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
      }
    },
    inputs: {
      color: "color"
    },
    exportAs: ["matToolbar"],
    ngContentSelectors: _c12,
    decls: 2,
    vars: 0,
    template: function MatToolbar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275projection(0);
        \u0275\u0275projection(1, 1);
      }
    },
    styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbar, [{
    type: Component,
    args: [{
      selector: "mat-toolbar",
      exportAs: "matToolbar",
      host: {
        "class": "mat-toolbar",
        "[class]": 'color ? "mat-" + color : ""',
        "[class.mat-toolbar-multiple-rows]": "_toolbarRows.length > 0",
        "[class.mat-toolbar-single-row]": "_toolbarRows.length === 0"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: '<ng-content></ng-content>\n<ng-content select="mat-toolbar-row"></ng-content>\n',
      styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    _toolbarRows: [{
      type: ContentChildren,
      args: [MatToolbarRow, {
        descendants: true
      }]
    }]
  });
})();
function throwToolbarMixedModesError() {
  throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.");
}
var MatToolbarModule = class _MatToolbarModule {
  static \u0275fac = function MatToolbarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatToolbarModule,
    imports: [MatCommonModule, MatToolbar, MatToolbarRow],
    exports: [MatToolbar, MatToolbarRow, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatToolbar, MatToolbarRow],
      exports: [MatToolbar, MatToolbarRow, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@tauri-apps/plugin-shell/dist-js/index.js
function open2(path, openWith) {
  return __async(this, null, function* () {
    yield invoke("plugin:shell|open", {
      path,
      with: openWith
    });
  });
}

// src/app/shared/components/about-dialog/about-dialog.component.ts
var AboutDialogComponent = class _AboutDialogComponent {
  constructor(appVersion) {
    this.appVersion = appVersion;
  }
  static {
    this.\u0275fac = function AboutDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutDialogComponent, selectors: [["ng-component"]], decls: 41, vars: 31, consts: [["mat-dialog-content", ""], ["src", "./assets/icons/icon-tv-256.png", "width", "128"], ["mat-dialog-title", ""], ["href", "https://github.com/Sidimad-tv/sidiptv", "target", "_blank", 3, "title"], ["src", "./assets/icons/github-light.png", 3, "title"], ["href", "http://twitter.com/share?text=S!d!m@d-iptv \u2014 free IPTV player. Available as PWA.&url=https://github.com/Sidimad-tv/sidiptv&hashtags=iptv,m3u,player", 3, "title"], ["height", "32", "src", "./assets/icons/twitter-light.png", 3, "title"], ["href", "https://github.com/Sidimad-tv/sidiptv", "target", "_blank", 3, "title"]], template: function AboutDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0, "\n        ");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275text(2, "\n            ");
        \u0275\u0275element(3, "img", 1)(4, "br");
        \u0275\u0275text(5, "\n            ");
        \u0275\u0275elementStart(6, "h2", 2);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, "\n            ");
        \u0275\u0275elementStart(10, "p");
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, "\n            ");
        \u0275\u0275elementStart(14, "p");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, "\n            ");
        \u0275\u0275elementStart(18, "p");
        \u0275\u0275text(19, "\n                ");
        \u0275\u0275elementStart(20, "a", 3);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275element(23, "img", 4);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, "\xA0\n                ");
        \u0275\u0275elementStart(26, "a", 5);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275text(28, "\n                    ");
        \u0275\u0275element(29, "img", 6);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275text(31, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, "\n                ");
        \u0275\u0275elementStart(33, "a", 7);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementStart(36, "mat-icon");
        \u0275\u0275text(37, "local_cafe");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(38, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, "\n    ");
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 11, "ABOUT.TITLE"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 13, "ABOUT.DESCRIPTION"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(16, 15, "ABOUT.VERSION"), ": ", ctx.appVersion);
        \u0275\u0275advance(5);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(21, 17, "ABOUT.GITHUB_TOOLTIP"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(22, 19, "ABOUT.GITHUB_TOOLTIP"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(24, 21, "ABOUT.GITHUB_TOOLTIP"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(27, 23, "ABOUT.TWITTER_TOOLTIP"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(30, 25, "ABOUT.TWITTER_TOOLTIP"));
        \u0275\u0275advance(4);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(34, 27, "ABOUT.BUY_ME_A_COFFEE_TOOLTIP"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(35, 29, "ABOUT.BUY_ME_A_COFFEE_TOOLTIP"));
      }
    }, dependencies: [MatIconModule, MatIcon, TranslateModule, TranslatePipe], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\na[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutDialogComponent, [{
    type: Component,
    args: [{ imports: [MatIconModule, TranslateModule], template: `
        <div mat-dialog-content>
            <img src="./assets/icons/icon-tv-256.png" width="128" /><br />
            <h2 mat-dialog-title>{{ 'ABOUT.TITLE' | translate }}</h2>
            <p>{{ 'ABOUT.DESCRIPTION' | translate }}</p>
            <p>{{ 'ABOUT.VERSION' | translate }}: {{ appVersion }}</p>
            <p>
                <a
                    href="https://github.com/Sidimad-tv/sidiptv"
                    target="_blank"
                    [title]="'ABOUT.GITHUB_TOOLTIP' | translate"
                    [attr.aria-label]="'ABOUT.GITHUB_TOOLTIP' | translate"
                    ><img
                        src="./assets/icons/github-light.png"
                        [title]="'ABOUT.GITHUB_TOOLTIP' | translate" /></a
                >&nbsp;
                <a
                    href="http://twitter.com/share?text=S!d!m@d-iptv &mdash; free IPTV player. Available as PWA.&url=https://github.com/Sidimad-tv/sidiptv&hashtags=iptv,m3u,player"
                    [title]="'ABOUT.TWITTER_TOOLTIP' | translate"
                >
                    <img
                        height="32"
                        src="./assets/icons/twitter-light.png"
                        [title]="'ABOUT.TWITTER_TOOLTIP' | translate"
                    />
                </a>
                <a
                    href="https://github.com/sponsors/4gray"
                    target="_blank"
                    [title]="'ABOUT.BUY_ME_A_COFFEE_TOOLTIP' | translate"
                    [attr.aria-label]="
                        'ABOUT.BUY_ME_A_COFFEE_TOOLTIP' | translate
                    "
                    ><mat-icon>local_cafe</mat-icon></a
                >
            </p>
        </div>
    `, styles: ["/* angular:styles/component:css;95745ce76ed05535bf0193ef26662d56fae0c1316bda0d374a865c4e6765dab6;/vercel/path0/src/app/shared/components/about-dialog/about-dialog.component.ts */\nbutton {\n  text-transform: uppercase;\n}\na {\n  color: #fff;\n}\n.mat-icon {\n  font-size: 32px;\n}\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutDialogComponent, { className: "AboutDialogComponent", filePath: "src/app/shared/components/about-dialog/about-dialog.component.ts", lineNumber: 62 });
})();

// src/app/home/file-upload/drag-drop-file-upload.directive.ts
var DragDropFileUploadDirective = class _DragDropFileUploadDirective {
  constructor() {
    this.defaultColor = "rgb(255 255 255 / 15%)";
    this.fileDropped = new EventEmitter();
    this.background = this.defaultColor;
  }
  dragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.background = "rgb(255 255 255 / 25%)";
  }
  dragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.background = this.defaultColor;
  }
  drop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.background = this.defaultColor;
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
  static {
    this.\u0275fac = function DragDropFileUploadDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DragDropFileUploadDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _DragDropFileUploadDirective, selectors: [["", "appDragDropFileUpload", ""]], hostVars: 2, hostBindings: function DragDropFileUploadDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("dragover", function DragDropFileUploadDirective_dragover_HostBindingHandler($event) {
          return ctx.dragOver($event);
        })("dragleave", function DragDropFileUploadDirective_dragleave_HostBindingHandler($event) {
          return ctx.dragLeave($event);
        })("drop", function DragDropFileUploadDirective_drop_HostBindingHandler($event) {
          return ctx.drop($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275styleProp("background-color", ctx.background);
      }
    }, outputs: { fileDropped: "fileDropped" } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropFileUploadDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[appDragDropFileUpload]"
    }]
  }], null, { fileDropped: [{
    type: Output
  }], background: [{
    type: HostBinding,
    args: ["style.background-color"]
  }], dragOver: [{
    type: HostListener,
    args: ["dragover", ["$event"]]
  }], dragLeave: [{
    type: HostListener,
    args: ["dragleave", ["$event"]]
  }], drop: [{
    type: HostListener,
    args: ["drop", ["$event"]]
  }] });
})();

// src/app/home/file-upload/file-upload.component.ts
var FileUploadComponent = class _FileUploadComponent {
  constructor() {
    this.fileSelected = new EventEmitter();
    this.fileRejected = new EventEmitter();
    this.addClicked = new EventEmitter();
    this.closeDialog = new EventEmitter();
    this.store = inject(Store);
    this.allowedContentTypes = [
      "application/mpegurl",
      "application/x-mpegurl",
      "application/octet-stream",
      "application/vnd.apple.mpegurl",
      "application/vnd.apple.mpegurl.audio",
      "audio/x-mpegurl",
      "audio/mpegurl"
    ];
  }
  openDialog(fileField) {
    return __async(this, null, function* () {
      if (isTauri()) {
        const path = yield open({
          multiple: false,
          directory: false,
          filters: [
            {
              name: "Playlist files",
              extensions: ["m3u", "m3u8"]
            }
          ]
        });
        const title = path.split("/").pop();
        const fileContent = yield readTextFile(path);
        this.store.dispatch(parsePlaylist({
          uploadType: "FILE",
          playlist: fileContent,
          title,
          path
        }));
        this.closeDialog.emit();
      } else {
        fileField.click();
      }
    });
  }
  upload(fileList) {
    if (!this.allowedContentTypes.includes(fileList[0].type)) {
      this.fileRejected.emit(fileList[0].name);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = (uploadEvent) => this.fileSelected.emit({
      uploadEvent,
      file: fileList[0]
    });
    fileReader.readAsText(fileList[0]);
    this.addClicked.emit();
  }
  static {
    this.\u0275fac = function FileUploadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FileUploadComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileUploadComponent, selectors: [["app-file-upload"]], outputs: { fileSelected: "fileSelected", fileRejected: "fileRejected", addClicked: "addClicked", closeDialog: "closeDialog" }, decls: 17, vars: 8, consts: [["fileField", ""], ["appDragDropFileUpload", "", 1, "file-upload", 3, "click", "fileDropped"], [1, "upload-icon"], [1, "label"], ["type", "file", "name", "playlist", "accept", ".m3u,.m3u8", "hidden", "", "multiple", "", 3, "change"]], template: function FileUploadComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275listener("click", function FileUploadComponent_Template_div_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          const fileField_r2 = \u0275\u0275reference(14);
          return \u0275\u0275resetView(ctx.openDialog(fileField_r2));
        })("fileDropped", function FileUploadComponent_Template_div_fileDropped_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.upload($event));
        });
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-icon", 2);
        \u0275\u0275text(3, "upload_file");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, "\n    ");
        \u0275\u0275elementStart(5, "span", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275element(9, "br");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, "\n    ");
        \u0275\u0275elementStart(13, "input", 4, 0);
        \u0275\u0275listener("change", function FileUploadComponent_Template_input_change_13_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.upload($event.target.files));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 2, "HOME.FILE_UPLOAD.DRAG_DROP") + " " + \u0275\u0275pipeBind1(8, 4, "HOME.FILE_UPLOAD.OR"), "\n        ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(11, 6, "HOME.FILE_UPLOAD.CHOOSE_PLAYLIST"));
      }
    }, dependencies: [DragDropFileUploadDirective, MatIconModule, MatIcon, TranslatePipe], styles: ["\n\n.file-upload[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: 1px dashed #999;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 20px;\n  padding: 10px;\n  gap: 20px;\n}\n.file-upload[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 60px;\n  width: 60px;\n  height: 60px;\n}\n.file-upload[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: #999;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadComponent, [{
    type: Component,
    args: [{ imports: [DragDropFileUploadDirective, MatIconModule, TranslatePipe], selector: "app-file-upload", template: `<div
    class="file-upload"
    appDragDropFileUpload
    (click)="openDialog(fileField)"
    (fileDropped)="upload($event)"
>
    <mat-icon class="upload-icon">upload_file</mat-icon>
    <span class="label"
        >{{
            ('HOME.FILE_UPLOAD.DRAG_DROP' | translate) +
                ' ' +
                ('HOME.FILE_UPLOAD.OR' | translate)
        }}
        <br />
        {{ 'HOME.FILE_UPLOAD.CHOOSE_PLAYLIST' | translate }}</span
    >
    <input
        type="file"
        name="playlist"
        #fileField
        (change)="upload($any($event).target.files)"
        accept=".m3u,.m3u8"
        hidden
        multiple
    />
</div>
`, styles: ["/* src/app/home/file-upload/file-upload.component.scss */\n.file-upload {\n  cursor: pointer;\n  border: 1px dashed #999;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 20px;\n  padding: 10px;\n  gap: 20px;\n}\n.file-upload .upload-icon {\n  color: #999;\n  font-size: 60px;\n  width: 60px;\n  height: 60px;\n}\n.file-upload .label {\n  display: block;\n  text-align: center;\n  color: #999;\n}\n"] }]
  }], null, { fileSelected: [{
    type: Output
  }], fileRejected: [{
    type: Output
  }], addClicked: [{
    type: Output
  }], closeDialog: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileUploadComponent, { className: "FileUploadComponent", filePath: "src/app/home/file-upload/file-upload.component.ts", lineNumber: 17 });
})();

// src/app/home/stalker-portal-import/stalker-portal-import.component.ts
var StalkerPortalImportComponent = class _StalkerPortalImportComponent {
  constructor() {
    this.addClicked = new EventEmitter();
    this.URL_REGEX = /^(http|https|file):\/\/[^ "]+$/;
    this.form = new FormGroup({
      _id: new FormControl(v4_default()),
      title: new FormControl("", [Validators.required]),
      macAddress: new FormControl("", [Validators.required]),
      password: new FormControl(""),
      username: new FormControl(""),
      portalUrl: new FormControl("", [
        Validators.required,
        Validators.pattern(this.URL_REGEX)
      ]),
      importDate: new FormControl((/* @__PURE__ */ new Date()).toISOString()),
      userAgent: new FormControl("")
    });
    this.dataService = inject(DataService);
    this.store = inject(Store);
  }
  addPlaylist() {
    this.form.value.portalUrl = this.transformPortalUrl(this.form.value.portalUrl);
    this.store.dispatch(addPlaylist({ playlist: this.form.value }));
    this.addClicked.emit();
  }
  transformPortalUrl(url) {
    if (url.endsWith("/c")) {
      return url.replace("/c", "/portal.php");
    }
    if (url.endsWith("/c/")) {
      return url.replace("/c/", "/portal.php");
    }
    if (url.endsWith("/stalker_portal")) {
      return url.replace("/stalker_portal/c", "/stalker_portal/server/load.php");
    }
    return url;
  }
  static {
    this.\u0275fac = function StalkerPortalImportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StalkerPortalImportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StalkerPortalImportComponent, selectors: [["app-stalker-portal-import"]], outputs: { addClicked: "addClicked" }, decls: 43, vars: 20, consts: [[3, "formGroup"], [1, "full-width"], ["for", "title"], ["matInput", "", "type", "text", "id", "title", "formControlName", "title"], ["subscriptSizing", "dynamic", 1, "full-width"], ["for", "portalUrl"], ["matInput", "", "type", "text", "id", "portalUrl", "formControlName", "portalUrl"], ["for", "macAddress"], ["matInput", "", "type", "text", "id", "macAddress", "formControlName", "macAddress"], ["mat-button", "", "type", "submit", 3, "click", "disabled"]], template: function StalkerPortalImportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-form-field", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "mat-label", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n        ");
        \u0275\u0275element(8, "input", 3);
        \u0275\u0275text(9, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n    ");
        \u0275\u0275elementStart(11, "mat-form-field", 4);
        \u0275\u0275text(12, "\n        ");
        \u0275\u0275elementStart(13, "mat-label", 5);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n        ");
        \u0275\u0275element(17, "input", 6);
        \u0275\u0275text(18, "\n        ");
        \u0275\u0275elementStart(19, "mat-hint");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, "\n        ");
        \u0275\u0275elementStart(23, "mat-error");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, "\n    ");
        \u0275\u0275elementStart(28, "mat-form-field", 1);
        \u0275\u0275text(29, "\n        ");
        \u0275\u0275elementStart(30, "mat-label", 7);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "\n        ");
        \u0275\u0275element(34, "input", 8);
        \u0275\u0275text(35, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, "\n    ");
        \u0275\u0275text(37, "\n    ");
        \u0275\u0275elementStart(38, "button", 9);
        \u0275\u0275listener("click", function StalkerPortalImportComponent_Template_button_click_38_listener() {
          return ctx.addPlaylist();
        });
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, "\n");
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "HOME.STALKER_PORTAL.TITLE"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, "HOME.STALKER_PORTAL.SERVER_URL"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 12, "HOME.STALKER_PORTAL.URL_VALIDATION_ERROR"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 14, "SETTINGS.EPG_URL_ERROR"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 16, "HOME.STALKER_PORTAL.MAC_ADDRESS"));
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", !ctx.form.valid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(40, 18, "HOME.STALKER_PORTAL.ADD"), "\n    ");
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatButtonModule, MatButton, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatError, MatInputModule, MatInput, ReactiveFormsModule, FormGroupDirective, FormControlName, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  margin: 10px;\n  justify-content: center;\n}\nform[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StalkerPortalImportComponent, [{
    type: Component,
    args: [{ imports: [
      FormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      TranslatePipe
    ], selector: "app-stalker-portal-import", template: `<form [formGroup]="form">
    <mat-form-field class="full-width">
        <mat-label for="title">{{
            'HOME.STALKER_PORTAL.TITLE' | translate
        }}</mat-label>
        <input matInput type="text" id="title" formControlName="title" />
    </mat-form-field>
    <mat-form-field class="full-width" subscriptSizing="dynamic">
        <mat-label for="portalUrl">{{
            'HOME.STALKER_PORTAL.SERVER_URL' | translate
        }}</mat-label>
        <input
            matInput
            type="text"
            id="portalUrl"
            formControlName="portalUrl"
        />
        <mat-hint>{{
            'HOME.STALKER_PORTAL.URL_VALIDATION_ERROR' | translate
        }}</mat-hint>
        <mat-error>{{ 'SETTINGS.EPG_URL_ERROR' | translate }}</mat-error>
    </mat-form-field>
    <mat-form-field class="full-width">
        <mat-label for="macAddress">{{
            'HOME.STALKER_PORTAL.MAC_ADDRESS' | translate
        }}</mat-label>
        <input
            matInput
            type="text"
            id="macAddress"
            formControlName="macAddress"
        />
    </mat-form-field>
    <!-- <mat-form-field class="full-width">
        <mat-label for="username">{{
            'HOME.XTREAM_PLAYLIST.USERNAME' | translate
        }}</mat-label>
        <input matInput type="text" id="username" formControlName="username" />
    </mat-form-field>
    <mat-form-field class="full-width">
        <mat-label for="password">{{
            'HOME.XTREAM_PLAYLIST.PASSWORD' | translate
        }}</mat-label>
        <input matInput type="text" id="password" formControlName="password" />
    </mat-form-field> -->
    <button
        mat-button
        type="submit"
        [disabled]="!form.valid"
        (click)="addPlaylist()"
    >
        {{ 'HOME.STALKER_PORTAL.ADD' | translate }}
    </button>
</form>
`, styles: ["/* angular:styles/component:css;d07ea08d842f5effc06d61a69b3277c42bd601f47ff99188c6b64738e69896bb;/vercel/path0/src/app/home/stalker-portal-import/stalker-portal-import.component.ts */\n:host {\n  display: flex;\n  margin: 10px;\n  justify-content: center;\n}\nform {\n  width: 100%;\n}\n"] }]
  }], null, { addClicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StalkerPortalImportComponent, { className: "StalkerPortalImportComponent", filePath: "src/app/home/stalker-portal-import/stalker-portal-import.component.ts", lineNumber: 44 });
})();

// src/app/home/text-import/text-import.component.ts
var TextImportComponent = class _TextImportComponent {
  constructor() {
    this.textAdded = new EventEmitter();
    this.textForm = new FormGroup({
      text: new FormControl("", Validators.required)
    });
  }
  static {
    this.\u0275fac = function TextImportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TextImportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TextImportComponent, selectors: [["app-text-import"]], outputs: { textAdded: "textAdded" }, decls: 16, vars: 8, consts: [[3, "ngSubmit", "formGroup"], ["appearance", "fill", 1, "full-width"], ["formControlName", "text", "matInput", "", "placeholder", "#EXTM3U url-tvg=..."], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function TextImportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275listener("ngSubmit", function TextImportComponent_Template_form_ngSubmit_0_listener() {
          return ctx.textAdded.emit(ctx.textForm.value.text);
        });
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-form-field", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "mat-label");
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n        ");
        \u0275\u0275element(8, "textarea", 2);
        \u0275\u0275text(9, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n    ");
        \u0275\u0275elementStart(11, "button", 3);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n");
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.textForm);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "HOME.TEXT_IMPORT.LABEL"));
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", !ctx.textForm.valid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(13, 6, "HOME.TEXT_IMPORT.BUTTON_LABEL"), "\n    ");
      }
    }, dependencies: [MatButton, MatInputModule, MatInput, MatFormField, MatLabel, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslatePipe], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\ntextarea[_ngcontent-%COMP%] {\n  height: 300px !important;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextImportComponent, [{
    type: Component,
    args: [{ selector: "app-text-import", imports: [MatButton, MatInputModule, ReactiveFormsModule, TranslatePipe], template: `<form (ngSubmit)="textAdded.emit(textForm.value.text)" [formGroup]="textForm">
    <mat-form-field class="full-width" appearance="fill">
        <mat-label>{{ 'HOME.TEXT_IMPORT.LABEL' | translate }}</mat-label>
        <textarea
            formControlName="text"
            matInput
            placeholder="#EXTM3U url-tvg=..."
        ></textarea>
    </mat-form-field>
    <button
        mat-flat-button
        color="primary"
        type="submit"
        [disabled]="!textForm.valid"
    >
        {{ 'HOME.TEXT_IMPORT.BUTTON_LABEL' | translate }}
    </button>
</form>
`, styles: ["/* src/app/home/text-import/text-import.component.scss */\nbutton {\n  margin: 0 15px;\n}\ntextarea {\n  height: 300px !important;\n}\n"] }]
  }], null, { textAdded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TextImportComponent, { className: "TextImportComponent", filePath: "src/app/home/text-import/text-import.component.ts", lineNumber: 18 });
})();

// src/app/home/url-upload/url-upload.component.ts
function UrlUploadComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n    ");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(3, 1, "HOME.URL_UPLOAD.CORS_NOTE"), "\n        ");
  }
}
var UrlUploadComponent = class _UrlUploadComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.urlAdded = new EventEmitter();
    this.isTauri = isTauri();
  }
  ngOnInit() {
    const urlRegex = "(https?://.*?)";
    this.form = this.fb.group({
      playlistUrl: [
        "",
        [Validators.required, Validators.pattern(urlRegex)]
      ]
    });
  }
  static {
    this.\u0275fac = function UrlUploadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UrlUploadComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UrlUploadComponent, selectors: [["app-url-upload"]], outputs: { urlAdded: "urlAdded" }, decls: 14, vars: 9, consts: [[3, "ngSubmit", "formGroup"], [1, "full-width"], ["type", "url", "matInput", "", "formControlName", "playlistUrl", 3, "placeholder"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "add-button", 3, "disabled"]], template: function UrlUploadComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275listener("ngSubmit", function UrlUploadComponent_Template_form_ngSubmit_0_listener() {
          return ctx.urlAdded.emit(ctx.form.value.playlistUrl);
        });
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-form-field", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275element(4, "input", 2);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275text(6, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n    ");
        \u0275\u0275conditionalCreate(8, UrlUploadComponent_Conditional_8_Template, 5, 3);
        \u0275\u0275elementStart(9, "button", 3);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, "\n");
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 5, "HOME.URL_UPLOAD.PLAYLIST_URL"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.isTauri ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.form.valid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(11, 7, "HOME.URL_UPLOAD.ADD_PLAYLIST"), "\n    ");
      }
    }, dependencies: [MatButton, MatInputModule, MatInput, MatFormField, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlUploadComponent, [{
    type: Component,
    args: [{ selector: "app-url-upload", imports: [MatButton, MatInputModule, ReactiveFormsModule, TranslatePipe], template: `<form (ngSubmit)="urlAdded.emit(form.value.playlistUrl)" [formGroup]="form">
    <mat-form-field class="full-width">
        <input
            type="url"
            matInput
            [placeholder]="'HOME.URL_UPLOAD.PLAYLIST_URL' | translate"
            formControlName="playlistUrl"
        />
    </mat-form-field>
    @if (!isTauri) {
        <p>
            {{ 'HOME.URL_UPLOAD.CORS_NOTE' | translate }}
        </p>
    }
    <button
        class="add-button"
        mat-flat-button
        [disabled]="!form.valid"
        color="primary"
        type="submit"
    >
        {{ 'HOME.URL_UPLOAD.ADD_PLAYLIST' | translate }}
    </button>
</form>
` }]
  }], null, { urlAdded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UrlUploadComponent, { className: "UrlUploadComponent", filePath: "src/app/home/url-upload/url-upload.component.ts", lineNumber: 18 });
})();

// src/app/home/xtream-code-import/xtream-code-import.component.ts
function XtreamCodeImportComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n    ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.getStatusClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx_r0.getStatusIcon(), "\n            ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getStatusClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getStatusMessage());
  }
}
var XtreamCodeImportComponent = class _XtreamCodeImportComponent {
  constructor() {
    this.addClicked = new EventEmitter();
    this.URL_REGEX = /^(http|https|file):\/\/[^ "]+$/;
    this.form = new FormGroup({
      _id: new FormControl(v4_default()),
      title: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
      serverUrl: new FormControl("", [
        Validators.required,
        Validators.pattern(this.URL_REGEX)
      ]),
      importDate: new FormControl((/* @__PURE__ */ new Date()).toISOString())
    });
    this.store = inject(Store);
    this.portalStatusService = inject(PortalStatusService);
    this.connectionStatus = null;
    this.isTestingConnection = false;
  }
  testConnection() {
    return __async(this, null, function* () {
      if (!this.form.valid)
        return;
      this.isTestingConnection = true;
      const serverUrlAsString = this.form.value.serverUrl;
      const url = new URL(serverUrlAsString);
      const serverUrl = `${url.protocol}//${url.hostname}${url.port ? ":" + url.port : ""}`;
      try {
        this.connectionStatus = yield this.portalStatusService.checkPortalStatus(serverUrl, this.form.value.username, this.form.value.password);
      } catch (error) {
        console.error("Error testing connection:", error);
        this.connectionStatus = "unavailable";
      } finally {
        this.isTestingConnection = false;
      }
    });
  }
  getStatusMessage() {
    return this.portalStatusService.getStatusMessage(this.connectionStatus);
  }
  getStatusClass() {
    return this.portalStatusService.getStatusClass(this.connectionStatus);
  }
  getStatusIcon() {
    return this.portalStatusService.getStatusIcon(this.connectionStatus);
  }
  addPlaylist() {
    const serverUrlAsString = this.form.value.serverUrl;
    const url = new URL(serverUrlAsString);
    const serverUrl = `${url.protocol}//${url.hostname}${url.port ? ":" + url.port : ""}`;
    this.store.dispatch(addPlaylist({
      playlist: __spreadProps(__spreadValues({}, this.form.value), {
        serverUrl
      })
    }));
    this.addClicked.emit();
  }
  extractParams(urlAsString) {
    if (this.form.get("username").value !== "" || this.form.get("password").value !== "")
      return;
    try {
      const url = new URL(urlAsString);
      const username = url.searchParams.get("username") || "";
      const password = url.searchParams.get("password") || "";
      this.form.get("username")?.setValue(username);
      this.form.get("password")?.setValue(password);
    } catch (error) {
      console.error("Invalid URL", error);
    }
  }
  static {
    this.\u0275fac = function XtreamCodeImportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _XtreamCodeImportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _XtreamCodeImportComponent, selectors: [["app-xtream-code-import"]], outputs: { addClicked: "addClicked" }, decls: 58, vars: 26, consts: [[3, "formGroup"], [1, "full-width"], ["for", "title"], ["matInput", "", "type", "text", "id", "title", "formControlName", "title"], ["subscriptSizing", "dynamic", 1, "full-width"], ["for", "serverUrl"], ["matInput", "", "type", "text", "id", "serverUrl", "formControlName", "serverUrl", 3, "input"], ["for", "username"], ["matInput", "", "type", "text", "id", "username", "formControlName", "username"], ["for", "password"], ["matInput", "", "type", "text", "id", "password", "formControlName", "password"], [1, "button-row"], ["mat-button", "", "type", "button", 3, "click", "disabled"], ["mat-button", "", "type", "submit", 3, "click", "disabled"], [1, "connection-status"]], template: function XtreamCodeImportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-form-field", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "mat-label", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n        ");
        \u0275\u0275element(8, "input", 3);
        \u0275\u0275text(9, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n    ");
        \u0275\u0275elementStart(11, "mat-form-field", 4);
        \u0275\u0275text(12, "\n        ");
        \u0275\u0275elementStart(13, "mat-label", 5);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n        ");
        \u0275\u0275elementStart(17, "input", 6);
        \u0275\u0275listener("input", function XtreamCodeImportComponent_Template_input_input_17_listener() {
          return ctx.extractParams(ctx.form.value.serverUrl);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, "\n        ");
        \u0275\u0275elementStart(19, "mat-hint");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, "\n        ");
        \u0275\u0275elementStart(23, "mat-error");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, "\n    ");
        \u0275\u0275elementStart(28, "mat-form-field", 1);
        \u0275\u0275text(29, "\n        ");
        \u0275\u0275elementStart(30, "mat-label", 7);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "\n        ");
        \u0275\u0275element(34, "input", 8);
        \u0275\u0275text(35, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, "\n    ");
        \u0275\u0275elementStart(37, "mat-form-field", 1);
        \u0275\u0275text(38, "\n        ");
        \u0275\u0275elementStart(39, "mat-label", 9);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, "\n        ");
        \u0275\u0275element(43, "input", 10);
        \u0275\u0275text(44, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, "\n\n    ");
        \u0275\u0275elementStart(46, "div", 11);
        \u0275\u0275text(47, "\n        ");
        \u0275\u0275elementStart(48, "button", 12);
        \u0275\u0275listener("click", function XtreamCodeImportComponent_Template_button_click_48_listener() {
          return ctx.testConnection();
        });
        \u0275\u0275text(49);
        \u0275\u0275elementEnd();
        \u0275\u0275text(50, "\n        ");
        \u0275\u0275elementStart(51, "button", 13);
        \u0275\u0275listener("click", function XtreamCodeImportComponent_Template_button_click_51_listener() {
          return ctx.addPlaylist();
        });
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(54, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(55, "\n\n    ");
        \u0275\u0275conditionalCreate(56, XtreamCodeImportComponent_Conditional_56_Template, 10, 6);
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, "\n");
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 12, "HOME.XTREAM_PLAYLIST.TITLE"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 14, "HOME.XTREAM_PLAYLIST.SERVER_URL"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 16, "HOME.XTREAM_PLAYLIST.URL_VALIDATION_ERROR"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 18, "SETTINGS.EPG_URL_ERROR"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 20, "HOME.XTREAM_PLAYLIST.USERNAME"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 22, "HOME.XTREAM_PLAYLIST.PASSWORD"));
        \u0275\u0275advance(8);
        \u0275\u0275property("disabled", !ctx.form.valid || ctx.isTestingConnection);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n            ", ctx.isTestingConnection ? "Testing..." : "Test Connection", "\n        ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.form.valid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(53, 24, "HOME.XTREAM_PLAYLIST.ADD"), "\n        ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.connectionStatus ? 56 : -1);
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MatButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatHint,
      MatError,
      MatIcon,
      MatInputModule,
      MatInput,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  margin: 10px;\n  justify-content: center;\n}\nform[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.status-active[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.status-inactive[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.status-expired[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.status-unavailable[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n.connection-status[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.button-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XtreamCodeImportComponent, [{
    type: Component,
    args: [{ imports: [
      FormsModule,
      MatButton,
      MatFormFieldModule,
      MatIcon,
      MatInputModule,
      ReactiveFormsModule,
      TranslatePipe
    ], selector: "app-xtream-code-import", template: `<form [formGroup]="form">
    <mat-form-field class="full-width">
        <mat-label for="title">{{
            'HOME.XTREAM_PLAYLIST.TITLE' | translate
        }}</mat-label>
        <input matInput type="text" id="title" formControlName="title" />
    </mat-form-field>
    <mat-form-field class="full-width" subscriptSizing="dynamic">
        <mat-label for="serverUrl">{{
            'HOME.XTREAM_PLAYLIST.SERVER_URL' | translate
        }}</mat-label>
        <input
            matInput
            type="text"
            id="serverUrl"
            formControlName="serverUrl"
            (input)="extractParams(form.value.serverUrl)"
        />
        <mat-hint>{{
            'HOME.XTREAM_PLAYLIST.URL_VALIDATION_ERROR' | translate
        }}</mat-hint>
        <mat-error>{{ 'SETTINGS.EPG_URL_ERROR' | translate }}</mat-error>
    </mat-form-field>
    <mat-form-field class="full-width">
        <mat-label for="username">{{
            'HOME.XTREAM_PLAYLIST.USERNAME' | translate
        }}</mat-label>
        <input matInput type="text" id="username" formControlName="username" />
    </mat-form-field>
    <mat-form-field class="full-width">
        <mat-label for="password">{{
            'HOME.XTREAM_PLAYLIST.PASSWORD' | translate
        }}</mat-label>
        <input matInput type="text" id="password" formControlName="password" />
    </mat-form-field>

    <div class="button-row">
        <button
            mat-button
            type="button"
            [disabled]="!form.valid || isTestingConnection"
            (click)="testConnection()"
        >
            {{ isTestingConnection ? 'Testing...' : 'Test Connection' }}
        </button>
        <button
            mat-button
            type="submit"
            [disabled]="!form.valid"
            (click)="addPlaylist()"
        >
            {{ 'HOME.XTREAM_PLAYLIST.ADD' | translate }}
        </button>
    </div>

    @if (connectionStatus){
        <div class="connection-status">
            <mat-icon [class]="getStatusClass()">
                {{ getStatusIcon() }}
            </mat-icon>
            <span [class]="getStatusClass()">{{ getStatusMessage() }}</span>
        </div>
    }
</form>
`, styles: ["/* angular:styles/component:css;4a823c78cce81f5768030af5ce04da8d8ed380ff567c2ebd37078e345645905c;/vercel/path0/src/app/home/xtream-code-import/xtream-code-import.component.ts */\n:host {\n  display: flex;\n  margin: 10px;\n  justify-content: center;\n}\nform {\n  width: 100%;\n}\n.status-active {\n  color: #4caf50;\n}\n.status-inactive {\n  color: #f44336;\n}\n.status-expired {\n  color: #ff9800;\n}\n.status-unavailable {\n  color: #9e9e9e;\n}\n.connection-status {\n  margin: 10px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.button-row {\n  display: flex;\n  justify-content: space-between;\n}\n"] }]
  }], null, { addClicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(XtreamCodeImportComponent, { className: "XtreamCodeImportComponent", filePath: "src/app/home/xtream-code-import/xtream-code-import.component.ts", lineNumber: 77 });
})();

// src/app/shared/components/add-playlist/add-playlist-dialog.component.ts
function AddPlaylistDialogComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-file-upload", 2);
    \u0275\u0275listener("fileRejected", function AddPlaylistDialogComponent_Conditional_6_Template_app_file_upload_fileRejected_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rejectFile($event));
    })("fileSelected", function AddPlaylistDialogComponent_Conditional_6_Template_app_file_upload_fileSelected_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handlePlaylist($event));
    })("closeDialog", function AddPlaylistDialogComponent_Conditional_6_Template_app_file_upload_closeDialog_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
function AddPlaylistDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-url-upload", 3);
    \u0275\u0275listener("urlAdded", function AddPlaylistDialogComponent_Conditional_7_Template_app_url_upload_urlAdded_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendPlaylistsUrl($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
function AddPlaylistDialogComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-text-import", 4);
    \u0275\u0275listener("textAdded", function AddPlaylistDialogComponent_Conditional_8_Template_app_text_import_textAdded_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.uploadAsText($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
function AddPlaylistDialogComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-stalker-portal-import", 5);
    \u0275\u0275listener("addClicked", function AddPlaylistDialogComponent_Conditional_9_Template_app_stalker_portal_import_addClicked_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
function AddPlaylistDialogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-xtream-code-import", 5);
    \u0275\u0275listener("addClicked", function AddPlaylistDialogComponent_Conditional_10_Template_app_xtream_code_import_addClicked_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
var AddPlaylistDialogComponent = class _AddPlaylistDialogComponent {
  constructor(data, dataService, dialogRef, store, snackBar, translateService) {
    this.dataService = dataService;
    this.dialogRef = dialogRef;
    this.store = store;
    this.snackBar = snackBar;
    this.translateService = translateService;
    this.playlistType = data.type;
  }
  /**
   * Parse and store uploaded playlist
   * @param payload
   */
  handlePlaylist(payload) {
    const playlist = payload.uploadEvent.target.result;
    this.store.dispatch(parsePlaylist({
      uploadType: "FILE",
      playlist,
      title: payload.file.name,
      path: payload.file.path
    }));
    this.closeDialog();
  }
  rejectFile(filename) {
    this.snackBar.open(this.translateService.instant("HOME.FILE_UPLOAD.REJECTED", {
      filename
    }));
  }
  /**
   * Sends url of the playlist to the renderer process
   * @param playlistUrl url of the added playlist
   */
  sendPlaylistsUrl(playlistUrl) {
    this.dataService.sendIpcEvent(PLAYLIST_PARSE_BY_URL, {
      title: getFilenameFromUrl(playlistUrl),
      url: playlistUrl
    });
    this.closeDialog();
  }
  /**
   * Sends IPC event to the renderer process to parse playlist
   * @param text playlist as string
   */
  uploadAsText(playlist) {
    this.store.dispatch(parsePlaylist({
      uploadType: "TEXT",
      playlist,
      title: this.translateService.instant("HOME.IMPORTED_AS_TEXT")
    }));
    this.closeDialog();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  static {
    this.\u0275fac = function AddPlaylistDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddPlaylistDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(TranslateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddPlaylistDialogComponent, selectors: [["app-add-playlist"]], decls: 12, vars: 5, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [3, "fileRejected", "fileSelected", "closeDialog"], [3, "urlAdded"], [3, "textAdded"], [3, "addClicked"]], template: function AddPlaylistDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(3, "\n");
        \u0275\u0275elementStart(4, "mat-dialog-content", 1);
        \u0275\u0275text(5, "\n    ");
        \u0275\u0275conditionalCreate(6, AddPlaylistDialogComponent_Conditional_6_Template, 3, 0)(7, AddPlaylistDialogComponent_Conditional_7_Template, 3, 0)(8, AddPlaylistDialogComponent_Conditional_8_Template, 3, 0)(9, AddPlaylistDialogComponent_Conditional_9_Template, 3, 0)(10, AddPlaylistDialogComponent_Conditional_10_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2("\n    ", \u0275\u0275pipeBind1(2, 3, "HOME.URL_UPLOAD.ADD_PLAYLIST"), ": ", ctx.playlistType, "\n");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.playlistType === "file" ? 6 : ctx.playlistType === "url" ? 7 : ctx.playlistType === "text" ? 8 : ctx.playlistType === "stalker" ? 9 : ctx.playlistType === "xtream" ? 10 : -1);
      }
    }, dependencies: [
      MatButtonModule,
      MatDialogModule,
      MatDialogTitle,
      MatDialogContent,
      TranslateModule,
      FileUploadComponent,
      XtreamCodeImportComponent,
      StalkerPortalImportComponent,
      TextImportComponent,
      UrlUploadComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddPlaylistDialogComponent, [{
    type: Component,
    args: [{ imports: [
      MatButtonModule,
      MatDialogModule,
      TranslateModule,
      FileUploadComponent,
      XtreamCodeImportComponent,
      StalkerPortalImportComponent,
      TextImportComponent,
      UrlUploadComponent
    ], selector: "app-add-playlist", template: `<h2 mat-dialog-title>
    {{ 'HOME.URL_UPLOAD.ADD_PLAYLIST' | translate }}: {{ playlistType }}
</h2>
<mat-dialog-content class="mat-typography">
    @if (playlistType === 'file') {
        <app-file-upload
            (fileRejected)="rejectFile($event)"
            (fileSelected)="handlePlaylist($event)"
            (closeDialog)="closeDialog()"
        />
    } @else if (playlistType === 'url') {
        <app-url-upload (urlAdded)="sendPlaylistsUrl($event)" />
    } @else if (playlistType === 'text') {
        <app-text-import (textAdded)="uploadAsText($event)" />
    } @else if (playlistType === 'stalker') {
        <app-stalker-portal-import (addClicked)="closeDialog()" />
    } @else if (playlistType === 'xtream') {
        <app-xtream-code-import (addClicked)="closeDialog()" />
    }
</mat-dialog-content>
` }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: DataService }, { type: MatDialogRef }, { type: Store }, { type: MatSnackBar }, { type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddPlaylistDialogComponent, { className: "AddPlaylistDialogComponent", filePath: "src/app/shared/components/add-playlist/add-playlist-dialog.component.ts", lineNumber: 37 });
})();

// src/app/shared/components/header/header.component.ts
function HeaderComponent_Conditional_16_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 16);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Conditional_25_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openSettings());
    });
    \u0275\u0275text(3, "\n                    ");
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n            ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 1, "MENU.SETTINGS"));
  }
}
function HeaderComponent_Conditional_16_Conditional_26_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                        ");
    \u0275\u0275elementStart(1, "button", 18);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Conditional_26_Conditional_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openSettings());
    });
    \u0275\u0275text(3, "\n                            ");
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                            ");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n                        ");
    \u0275\u0275element(12, "mat-divider");
    \u0275\u0275text(13, "\n                    ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 2, "MENU.SETTINGS_ARIA"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 4, "MENU.SETTINGS"));
  }
}
function HeaderComponent_Conditional_16_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 17);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "\n                    ");
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "menu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                ");
    \u0275\u0275elementStart(8, "mat-menu", null, 3);
    \u0275\u0275text(10, "\n                    ");
    \u0275\u0275conditionalCreate(11, HeaderComponent_Conditional_16_Conditional_26_Conditional_11_Template, 14, 6);
    \u0275\u0275elementStart(12, "button", 14);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Conditional_26_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openUrl("https://github.com/Sidimad-tv/sidiptv"));
    });
    \u0275\u0275text(14, "\n                        ");
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "recommend");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n                        ");
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "GitHub");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n                    ");
    \u0275\u0275elementStart(22, "button", 14);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Conditional_26_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openUrl("https://github.com/Sidimad-tv/sidiptv/issues"));
    });
    \u0275\u0275text(24, "\n                        ");
    \u0275\u0275elementStart(25, "mat-icon");
    \u0275\u0275text(26, "bug_report");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "\n                        ");
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, "\n                    ");
    \u0275\u0275element(33, "mat-divider");
    \u0275\u0275text(34, "\n                    ");
    \u0275\u0275elementStart(35, "button", 14);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Conditional_26_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setDialogVisibility(true));
    });
    \u0275\u0275text(37, "\n                        ");
    \u0275\u0275elementStart(38, "mat-icon");
    \u0275\u0275text(39, "new_releases");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, "\n                        ");
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, "\n                    ");
    \u0275\u0275elementStart(46, "button", 14);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Conditional_26_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openUrl("https://github.com/Sidimad-tv/sidiptv"));
    });
    \u0275\u0275text(48, "\n                        ");
    \u0275\u0275elementStart(49, "mat-icon");
    \u0275\u0275text(50, "savings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, "\n                        ");
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, "\n                    ");
    \u0275\u0275element(57, "mat-divider");
    \u0275\u0275text(58, "\n                    ");
    \u0275\u0275elementStart(59, "button", 14);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Conditional_26_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openAboutDialog());
    });
    \u0275\u0275text(61, "\n                        ");
    \u0275\u0275elementStart(62, "mat-icon");
    \u0275\u0275text(63, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, "\n                        ");
    \u0275\u0275elementStart(65, "span");
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(69, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70, "\n            ");
  }
  if (rf & 2) {
    const menu_r6 = \u0275\u0275reference(9);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r6);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 12, "MENU.OPEN"));
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r2.isHome ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 14, "MENU.SUPPORT_ARIA"));
    \u0275\u0275advance(10);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(23, 16, "MENU.BUG_REPORT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 18, "MENU.BUG_REPORT"));
    \u0275\u0275advance(6);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(36, 20, "MENU.WHAT_IS_NEW"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 22, "MENU.WHAT_IS_NEW"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(47, 24, "MENU.SUPPORT_PROJECT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 26, "MENU.SUPPORT_PROJECT"));
    \u0275\u0275advance(6);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(60, 28, "MENU.ABOUT_ARIA"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 30, "MENU.ABOUT"));
  }
}
function HeaderComponent_Conditional_16_For_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                        ");
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2, "\n                            ");
    \u0275\u0275elementStart(3, "mat-checkbox", 19);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_For_87_Template_mat_checkbox_click_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function HeaderComponent_Conditional_16_For_87_Template_mat_checkbox_change_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPlaylistFilterChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function HeaderComponent_Conditional_16_For_87_Template_mat_checkbox_ngModelChange_3_listener($event) {
      const type_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(type_r8.checked, $event) || (type_r8.checked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                    ");
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", true);
    \u0275\u0275twoWayProperty("ngModel", type_r8.checked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r8.title);
  }
}
function HeaderComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "button", 10);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n            ");
    \u0275\u0275text(10, "\n            ");
    \u0275\u0275elementStart(11, "button", 11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275text(13, "\n                ");
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "sort");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n            ");
    \u0275\u0275elementStart(18, "button", 12);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275text(20, "\n                ");
    \u0275\u0275elementStart(21, "mat-icon");
    \u0275\u0275text(22, "filter_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n            ");
    \u0275\u0275conditionalCreate(25, HeaderComponent_Conditional_16_Conditional_25_Template, 8, 3)(26, HeaderComponent_Conditional_16_Conditional_26_Template, 71, 32);
    \u0275\u0275elementStart(27, "mat-menu", null, 0);
    \u0275\u0275text(29, "\n                ");
    \u0275\u0275elementStart(30, "div", 13);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Template_div_click_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, "\n                ");
    \u0275\u0275elementStart(34, "button", 14);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSortOptions(ctx_r2.SortBy.NAME, ctx_r2.SortOrder.ASC));
    });
    \u0275\u0275text(35, "\n                    ");
    \u0275\u0275elementStart(36, "mat-icon");
    \u0275\u0275text(37, "sort_by_alpha");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, "\n                    ");
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, "\n                ");
    \u0275\u0275elementStart(44, "button", 14);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSortOptions(ctx_r2.SortBy.NAME, ctx_r2.SortOrder.DESC));
    });
    \u0275\u0275text(45, "\n                    ");
    \u0275\u0275elementStart(46, "mat-icon");
    \u0275\u0275text(47, "sort_by_alpha");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, "\n                    ");
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, "\n                ");
    \u0275\u0275element(54, "mat-divider");
    \u0275\u0275text(55, "\n                ");
    \u0275\u0275elementStart(56, "button", 14);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSortOptions(ctx_r2.SortBy.DATE_ADDED, ctx_r2.SortOrder.DESC));
    });
    \u0275\u0275text(57, "\n                    ");
    \u0275\u0275elementStart(58, "mat-icon");
    \u0275\u0275text(59, "date_range");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, "\n                    ");
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, "\n                ");
    \u0275\u0275elementStart(66, "button", 14);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSortOptions(ctx_r2.SortBy.DATE_ADDED, ctx_r2.SortOrder.ASC));
    });
    \u0275\u0275text(67, "\n                    ");
    \u0275\u0275elementStart(68, "mat-icon");
    \u0275\u0275text(69, "date_range");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70, "\n                    ");
    \u0275\u0275elementStart(71, "span");
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(74, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, "\n            ");
    \u0275\u0275elementStart(77, "mat-menu", null, 1);
    \u0275\u0275text(79, "\n                ");
    \u0275\u0275elementStart(80, "section", 15);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Template_section_click_80_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(81, "\n                    ");
    \u0275\u0275elementStart(82, "div", 13);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Template_div_click_82_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, "\n                    ");
    \u0275\u0275repeaterCreate(86, HeaderComponent_Conditional_16_For_87_Template, 7, 3, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, "\n            ");
    \u0275\u0275elementStart(90, "mat-menu", null, 2);
    \u0275\u0275text(92, "\n                ");
    \u0275\u0275elementStart(93, "button", 14);
    \u0275\u0275pipe(94, "translate");
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Template_button_click_93_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.opedAddPlaylistDialog("file"));
    });
    \u0275\u0275text(95, "\n                    ");
    \u0275\u0275elementStart(96, "mat-icon");
    \u0275\u0275text(97, "attach_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(98, "\n                    ");
    \u0275\u0275elementStart(99, "span");
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(103, "\n                ");
    \u0275\u0275elementStart(104, "button", 14);
    \u0275\u0275pipe(105, "translate");
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Template_button_click_104_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.opedAddPlaylistDialog("url"));
    });
    \u0275\u0275text(106, "\n                    ");
    \u0275\u0275elementStart(107, "mat-icon");
    \u0275\u0275text(108, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(109, "\n                    ");
    \u0275\u0275elementStart(110, "span");
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(113, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(114, "\n                ");
    \u0275\u0275elementStart(115, "button", 14);
    \u0275\u0275pipe(116, "translate");
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Template_button_click_115_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.opedAddPlaylistDialog("text"));
    });
    \u0275\u0275text(117, "\n                    ");
    \u0275\u0275elementStart(118, "mat-icon");
    \u0275\u0275text(119, "text_format");
    \u0275\u0275elementEnd();
    \u0275\u0275text(120, "\n                    ");
    \u0275\u0275elementStart(121, "span");
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(124, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(125, "\n                ");
    \u0275\u0275element(126, "mat-divider");
    \u0275\u0275text(127, "\n                ");
    \u0275\u0275elementStart(128, "button", 14);
    \u0275\u0275pipe(129, "translate");
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Template_button_click_128_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.opedAddPlaylistDialog("xtream"));
    });
    \u0275\u0275text(130, "\n                    ");
    \u0275\u0275elementStart(131, "mat-icon");
    \u0275\u0275text(132, "video_library");
    \u0275\u0275elementEnd();
    \u0275\u0275text(133, "\n                    ");
    \u0275\u0275elementStart(134, "span");
    \u0275\u0275text(135);
    \u0275\u0275pipe(136, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(137, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(138, "\n                ");
    \u0275\u0275elementStart(139, "button", 14);
    \u0275\u0275pipe(140, "translate");
    \u0275\u0275listener("click", function HeaderComponent_Conditional_16_Template_button_click_139_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.opedAddPlaylistDialog("stalker"));
    });
    \u0275\u0275text(141, "\n                    ");
    \u0275\u0275elementStart(142, "mat-icon");
    \u0275\u0275text(143, "dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275text(144, "\n                    ");
    \u0275\u0275elementStart(145, "span");
    \u0275\u0275text(146);
    \u0275\u0275pipe(147, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(148, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(149, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(150, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(151, "\n    ");
  }
  if (rf & 2) {
    const sortMenu_r9 = \u0275\u0275reference(28);
    const filterPlaylistMenu_r10 = \u0275\u0275reference(78);
    const addPlaylistMenu_r11 = \u0275\u0275reference(91);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("matMenuTriggerFor", addPlaylistMenu_r11)("matTooltip", \u0275\u0275pipeBind1(4, 31, "HOME.URL_UPLOAD.ADD_PLAYLIST"));
    \u0275\u0275advance(8);
    \u0275\u0275property("matMenuTriggerFor", sortMenu_r9)("matTooltip", \u0275\u0275pipeBind1(12, 33, "HOME.SORT_PLAYLISTS"));
    \u0275\u0275advance(7);
    \u0275\u0275property("matMenuTriggerFor", filterPlaylistMenu_r10)("matTooltip", \u0275\u0275pipeBind1(19, 35, "HOME.FILTER_BY_TYPE"));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r2.isElectron || ctx_r2.isTauri ? 25 : 26);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(32, 37, "HOME.SORT_BY"), "\n                ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active-sort", ctx_r2.isSortActive(ctx_r2.SortBy.NAME, ctx_r2.SortOrder.ASC));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 39, "HOME.SORT_OPTIONS.NAME_ASC"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active-sort", ctx_r2.isSortActive(ctx_r2.SortBy.NAME, ctx_r2.SortOrder.DESC));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 41, "HOME.SORT_OPTIONS.NAME_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active-sort", ctx_r2.isSortActive(ctx_r2.SortBy.DATE_ADDED, ctx_r2.SortOrder.DESC));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 43, "HOME.SORT_OPTIONS.NEWEST"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active-sort", ctx_r2.isSortActive(ctx_r2.SortBy.DATE_ADDED, ctx_r2.SortOrder.ASC));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 45, "HOME.SORT_OPTIONS.OLDEST"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(84, 47, "HOME.FILTER_BY_TYPE"), "\n                    ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.playlistTypes);
    \u0275\u0275advance(7);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(94, 49, "HOME.TABS.FILE_UPLOAD"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(101, 51, "HOME.TABS.FILE_UPLOAD"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(105, 53, "HOME.TABS.URL_UPLOAD"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(112, 55, "HOME.TABS.URL_UPLOAD"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(116, 57, "HOME.TABS.TEXT_IMPORT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(123, 59, "HOME.TABS.TEXT_IMPORT"));
    \u0275\u0275advance(6);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(129, 61, "HOME.TABS.XTREME_IMPORT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(136, 63, "HOME.TABS.XTREME_IMPORT"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(140, 65, "HOME.TABS.STALKER_PORTAL_IMPORT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(147, 67, "HOME.TABS.STALKER_PORTAL_IMPORT"));
  }
}
function HeaderComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "ngx-whats-new", 20);
    \u0275\u0275listener("closeModal", function HeaderComponent_Conditional_18_Template_ngx_whats_new_closeModal_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setDialogVisibility(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r2.modals)("options", ctx_r2.options);
  }
}
var HeaderComponent = class _HeaderComponent {
  constructor(activatedRoute, dialog, dataService, router, store, whatsNewService, sortService) {
    this.activatedRoute = activatedRoute;
    this.dialog = dialog;
    this.dataService = dataService;
    this.router = router;
    this.store = store;
    this.whatsNewService = whatsNewService;
    this.sortService = sortService;
    this.isElectron = this.dataService.isElectron;
    this.isTauri = this.dataService.getAppEnvironment() === "tauri";
    this.isDialogVisible$ = this.whatsNewService.dialogState$;
    this.options = this.whatsNewService.options;
    this.modals = this.whatsNewService.getLatestChanges();
    this.isHome = true;
    this.playlistTypes = [
      {
        title: "M3U (local, url, text)",
        id: "m3u",
        checked: true
      },
      {
        title: "Xtream",
        id: "xtream",
        checked: true
      },
      {
        title: "Stalker",
        id: "stalker",
        checked: true
      }
    ];
    this.selectedTypeFilters = this.store.selectSignal(selectActiveTypeFilters);
    this.SortBy = SortBy;
    this.SortOrder = SortOrder;
    effect(() => {
      if (this.selectedTypeFilters) {
        this.playlistTypes = this.playlistTypes.map((type) => {
          type.checked = this.selectedTypeFilters().includes(type.id);
          return type;
        });
      }
    });
    this.sortService.getSortOptions().subscribe((options) => {
      this.currentSortOptions = options;
    });
  }
  ngOnInit() {
    this.isHome = this.activatedRoute.snapshot.component.name === HomeComponent.name;
  }
  /**
   * Navigates to the settings page
   */
  openSettings() {
    this.router.navigate(["/settings"]);
  }
  /**
   * Opens the provided URL string in new browser window
   * @param url url to open
   */
  openUrl(url) {
    return __async(this, null, function* () {
      if (this.isTauri) {
        yield open2(url);
      } else {
        window.open(url, "_blank");
      }
    });
  }
  /**
   * Sets the visibility flag of the modal window
   * @param visible show/hide window flag
   */
  setDialogVisibility(visible) {
    if (this.modals.length > 0) {
      this.whatsNewService.changeDialogVisibleState(visible);
    }
  }
  /**
   * Opens the about dialog with description and version of
   * the app
   */
  openAboutDialog() {
    this.dialog.open(AboutDialogComponent, {
      panelClass: "about-dialog-overlay",
      width: "600px",
      data: this.dataService.getAppVersion()
    });
  }
  opedAddPlaylistDialog(type) {
    this.dialog.open(AddPlaylistDialogComponent, {
      width: "600px",
      data: { type }
    });
  }
  onPlaylistFilterChange() {
    this.store.dispatch(setSelectedFilters({
      selectedFilters: this.playlistTypes.filter((f) => f.checked).map((f) => f.id)
    }));
  }
  setSortOptions(by, order) {
    this.sortService.setSortOptions({ by, order });
  }
  isSortActive(by, order) {
    return this.currentSortOptions?.by === by && this.currentSortOptions?.order === order;
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(WhatsNewService), \u0275\u0275directiveInject(SortService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], inputs: { title: "title", subtitle: "subtitle" }, decls: 20, vars: 6, consts: [["sortMenu", "matMenu"], ["filterPlaylistMenu", "matMenu"], ["addPlaylistMenu", "matMenu"], ["menu", "matMenu"], [1, "logo"], ["src", "./assets/icons/icon-tv-256.png", "height", "100"], [1, "main"], [1, "title"], [1, "subtitle"], [1, "menu"], ["mat-icon-button", "", "data-test-id", "add-playlist", 1, "add-playlist-btn", 3, "matMenuTriggerFor", "matTooltip"], ["mat-icon-button", "", "data-test-id", "sort-playlists", 3, "matMenuTriggerFor", "matTooltip"], ["mat-icon-button", "", "data-test-id", "filter-playlist-by-type", 3, "matMenuTriggerFor", "matTooltip"], [1, "dropdown-menu-header", 3, "click"], ["mat-menu-item", "", 3, "click"], [1, "filter-container", 3, "click"], ["mat-icon-button", "", "data-test-id", "open-settings", 3, "click", "matTooltip"], ["mat-icon-button", "", "data-test-id", "pwa-menu", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "data-test-id", "pwa-open-settings", 3, "click"], [3, "click", "change", "ngModelChange", "checked", "ngModel"], [3, "closeModal", "items", "options"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-toolbar");
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "div", 4);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275element(4, "img", 5);
        \u0275\u0275text(5, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "\n    ");
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275text(8, "\n        ");
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n        ");
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n    ");
        \u0275\u0275conditionalCreate(16, HeaderComponent_Conditional_16_Template, 152, 69);
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, "\n\n");
        \u0275\u0275conditionalCreate(18, HeaderComponent_Conditional_18_Template, 3, 2);
        \u0275\u0275pipe(19, "async");
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.subtitle);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.isHome ? 16 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(19, 4, !ctx.isElectron && ctx.isDialogVisible$) ? 18 : -1);
      }
    }, dependencies: [
      MatButtonModule,
      MatIconButton,
      MatCheckboxModule,
      MatCheckbox,
      MatDividerModule,
      MatDivider,
      MatIconModule,
      MatIcon,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatToolbarModule,
      MatToolbar,
      MatTooltipModule,
      MatTooltip,
      FormsModule,
      NgControlStatus,
      NgModel,
      NgxWhatsNewModule,
      NgxWhatsNewComponent,
      ReactiveFormsModule,
      TranslateModule,
      AsyncPipe,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  background: #1b1c1c;\n  color: #fff;\n  display: flex;\n  width: 100%;\n  --mat-toolbar-standard-height: 100px;\n}\n.logo[_ngcontent-%COMP%] {\n  flex: 1 1 100px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.main[_ngcontent-%COMP%] {\n  place-content: center flex-start;\n  align-self: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n  flex: 1 1 100%;\n  max-width: 100%;\n}\n.main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.main[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 0.7em;\n  margin-top: 5px;\n  text-wrap: pretty;\n}\n.menu[_ngcontent-%COMP%] {\n  place-content: center;\n  align-self: center;\n  display: flex;\n}\n.filter-container[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n.add-playlist-btn[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: #fff;\n}\n.dropdown-menu-header[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  margin: 8px 0;\n  font-size: 12px;\n  font-weight: 500;\n}\n.active-sort[_ngcontent-%COMP%] {\n  background-color: rgb(48, 48, 48);\n}\n.check-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n@media (max-width: 599px) {\n  .subtitle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .logo[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    height: 48px;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", imports: [
      AsyncPipe,
      MatButtonModule,
      MatCheckboxModule,
      MatDividerModule,
      MatIconModule,
      MatMenuModule,
      MatToolbarModule,
      MatTooltipModule,
      FormsModule,
      NgxWhatsNewModule,
      ReactiveFormsModule,
      TranslateModule
    ], template: `<mat-toolbar>
    <div class="logo">
        <img src="./assets/icons/icon-tv-256.png" height="100" />
    </div>
    <div class="main">
        <div class="title">{{ title }}</div>
        <div class="subtitle">{{ subtitle }}</div>
    </div>
    @if (isHome) {
        <div class="menu">
            <button
                mat-icon-button
                class="add-playlist-btn"
                [matMenuTriggerFor]="addPlaylistMenu"
                [matTooltip]="'HOME.URL_UPLOAD.ADD_PLAYLIST' | translate"
                data-test-id="add-playlist"
            >
                <mat-icon>add</mat-icon>
            </button>
            <!-- Sort button -->
            <button
                mat-icon-button
                [matMenuTriggerFor]="sortMenu"
                [matTooltip]="'HOME.SORT_PLAYLISTS' | translate"
                data-test-id="sort-playlists"
            >
                <mat-icon>sort</mat-icon>
            </button>
            <button
                mat-icon-button
                [matMenuTriggerFor]="filterPlaylistMenu"
                [matTooltip]="'HOME.FILTER_BY_TYPE' | translate"
                data-test-id="filter-playlist-by-type"
            >
                <mat-icon>filter_alt</mat-icon>
            </button>
            <button
                mat-icon-button
                (click)="openSettings()"
                [matTooltip]="'MENU.SETTINGS' | translate"
                data-test-id="open-settings"
            >
                <mat-icon>settings</mat-icon>
            </button>
            <!-- Sort menu -->
            <mat-menu #sortMenu="matMenu">
                <div
                    class="dropdown-menu-header"
                    (click)="$event.stopPropagation()"
                >
                    {{ 'HOME.SORT_BY' | translate }}
                </div>
                <button
                    mat-menu-item
                    (click)="setSortOptions(SortBy.NAME, SortOrder.ASC)"
                    [class.active-sort]="
                        isSortActive(SortBy.NAME, SortOrder.ASC)
                    "
                >
                    <mat-icon>sort_by_alpha</mat-icon>
                    <span>{{ 'HOME.SORT_OPTIONS.NAME_ASC' | translate }}</span>
                </button>
                <button
                    mat-menu-item
                    (click)="setSortOptions(SortBy.NAME, SortOrder.DESC)"
                    [class.active-sort]="
                        isSortActive(SortBy.NAME, SortOrder.DESC)
                    "
                >
                    <mat-icon>sort_by_alpha</mat-icon>
                    <span>{{ 'HOME.SORT_OPTIONS.NAME_DESC' | translate }}</span>
                </button>
                <mat-divider></mat-divider>
                <button
                    mat-menu-item
                    (click)="setSortOptions(SortBy.DATE_ADDED, SortOrder.DESC)"
                    [class.active-sort]="
                        isSortActive(SortBy.DATE_ADDED, SortOrder.DESC)
                    "
                >
                    <mat-icon>date_range</mat-icon>
                    <span>{{ 'HOME.SORT_OPTIONS.NEWEST' | translate }}</span>
                </button>
                <button
                    mat-menu-item
                    (click)="setSortOptions(SortBy.DATE_ADDED, SortOrder.ASC)"
                    [class.active-sort]="
                        isSortActive(SortBy.DATE_ADDED, SortOrder.ASC)
                    "
                >
                    <mat-icon>date_range</mat-icon>
                    <span>{{ 'HOME.SORT_OPTIONS.OLDEST' | translate }}</span>
                </button>
            </mat-menu>
            <mat-menu #filterPlaylistMenu="matMenu">
                <section
                    (click)="$event.stopPropagation()"
                    class="filter-container"
                >
                    <div
                        class="dropdown-menu-header"
                        (click)="$event.stopPropagation()"
                    >
                        {{ 'HOME.FILTER_BY_TYPE' | translate }}
                    </div>
                    @for (type of playlistTypes; track $index) {
                        <p>
                            <mat-checkbox
                                (click)="$event.stopPropagation()"
                                [checked]="true"
                                (change)="onPlaylistFilterChange()"
                                [(ngModel)]="type.checked"
                                >{{ type.title }}</mat-checkbox
                            >
                        </p>
                    }
                </section>
            </mat-menu>
            <mat-menu #addPlaylistMenu="matMenu">
                <button
                    mat-menu-item
                    [attr.aria-label]="'HOME.TABS.FILE_UPLOAD' | translate"
                    (click)="opedAddPlaylistDialog('file')"
                >
                    <mat-icon>attach_file</mat-icon>
                    <span>{{ 'HOME.TABS.FILE_UPLOAD' | translate }}</span>
                </button>
                <button
                    mat-menu-item
                    [attr.aria-label]="'HOME.TABS.URL_UPLOAD' | translate"
                    (click)="opedAddPlaylistDialog('url')"
                >
                    <mat-icon>link</mat-icon>
                    <span>{{ 'HOME.TABS.URL_UPLOAD' | translate }}</span>
                </button>
                <button
                    mat-menu-item
                    [attr.aria-label]="'HOME.TABS.TEXT_IMPORT' | translate"
                    (click)="opedAddPlaylistDialog('text')"
                >
                    <mat-icon>text_format</mat-icon>
                    <span>{{ 'HOME.TABS.TEXT_IMPORT' | translate }}</span>
                </button>
                <mat-divider></mat-divider>
                <button
                    mat-menu-item
                    [attr.aria-label]="'HOME.TABS.XTREME_IMPORT' | translate"
                    (click)="opedAddPlaylistDialog('xtream')"
                >
                    <mat-icon>video_library</mat-icon>
                    <span>{{ 'HOME.TABS.XTREME_IMPORT' | translate }}</span>
                </button>
                <button
                    mat-menu-item
                    [attr.aria-label]="
                        'HOME.TABS.STALKER_PORTAL_IMPORT' | translate
                    "
                    (click)="opedAddPlaylistDialog('stalker')"
                >
                    <mat-icon>dashboard</mat-icon>
                    <span>{{
                        'HOME.TABS.STALKER_PORTAL_IMPORT' | translate
                    }}</span>
                </button>
            </mat-menu>
        </div>
    }
</mat-toolbar>

@if (!isElectron && isDialogVisible$ | async) {
    <ngx-whats-new
        (closeModal)="setDialogVisibility(false)"
        [items]="modals"
        [options]="options"
    />
}
`, styles: ["/* src/app/shared/components/header/header.component.scss */\n:host {\n  background: #1b1c1c;\n  color: #fff;\n  display: flex;\n  width: 100%;\n  --mat-toolbar-standard-height: 100px;\n}\n.logo {\n  flex: 1 1 100px;\n}\n.logo img {\n  height: 100px;\n}\n.main {\n  place-content: center flex-start;\n  align-self: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n  flex: 1 1 100%;\n  max-width: 100%;\n}\n.main .title {\n  font-size: 1em;\n}\n.main .subtitle {\n  color: #999;\n  font-size: 0.7em;\n  margin-top: 5px;\n  text-wrap: pretty;\n}\n.menu {\n  place-content: center;\n  align-self: center;\n  display: flex;\n}\n.filter-container {\n  padding: 0 10px;\n}\n.add-playlist-btn {\n  background-color: #3f51b5;\n  color: #fff;\n}\n.dropdown-menu-header {\n  padding: 0 16px;\n  margin: 8px 0;\n  font-size: 12px;\n  font-weight: 500;\n}\n.active-sort {\n  background-color: rgb(48, 48, 48);\n}\n.check-icon {\n  margin-left: 8px;\n}\n@media (max-width: 599px) {\n  .subtitle {\n    display: none;\n  }\n  .logo > img {\n    height: 48px;\n  }\n}\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: MatDialog }, { type: DataService }, { type: Router }, { type: Store }, { type: WhatsNewService }, { type: SortService }], { title: [{
    type: Input
  }], subtitle: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/shared/components/header/header.component.ts", lineNumber: 48 });
})();

// src/app/home/home.component.ts
function HomeComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275element(1, "mat-progress-bar", 3);
    \u0275\u0275text(2, "\n  ");
  }
}
var HomeComponent = class _HomeComponent {
  constructor(dataService, ngZone, snackBar, store) {
    this.dataService = dataService;
    this.ngZone = ngZone;
    this.snackBar = snackBar;
    this.store = store;
    this.isLoading = false;
    this.commandsList = [
      {
        id: PLAYLIST_PARSE_RESPONSE,
        execute: (response) => {
          this.store.dispatch(addPlaylist({
            playlist: response.payload
          }));
        }
      },
      {
        id: ERROR,
        execute: (error) => {
          this.showNotification("Error: " + error.message);
        }
      }
    ];
    this.listeners = [];
    this.setRendererListeners();
  }
  /**
   * Set electrons main process listeners
   */
  setRendererListeners() {
    this.commandsList.forEach((command) => {
      const cb = (response) => {
        if (response.data.type === command.id) {
          command.execute(response.data);
        }
      };
      this.dataService.listenOn(command.id, cb);
      this.listeners.push(cb);
    });
  }
  /**
   * Shows snack bar notification with a given message
   * @param message message to show
   * @param duration visibility duration of the snackbar
   */
  showNotification(message, duration = 2e3) {
    this.snackBar.open(message, null, {
      duration
    });
  }
  /**
   * Remove ipcRenderer listeners after component destroy
   */
  ngOnDestroy() {
    if (this.dataService.isElectron) {
      this.commandsList.forEach((command) => this.dataService.removeAllListeners(command.id));
    } else {
      this.listeners.forEach((listener) => {
        window.removeEventListener("message", listener);
      });
    }
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 10, vars: 7, consts: [[1, "grid-container"], [3, "title", "subtitle"], [1, "recent-playlists"], ["mode", "indeterminate"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n  ");
        \u0275\u0275element(2, "app-header", 1);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275text(5, "\n  ");
        \u0275\u0275element(6, "app-recent-playlists", 2);
        \u0275\u0275text(7, "\n  ");
        \u0275\u0275conditionalCreate(8, HomeComponent_Conditional_8_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(3, 3, "HOME.TITLE"))("subtitle", \u0275\u0275pipeBind1(4, 5, "HOME.SUBTITLE"));
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.isLoading ? 8 : -1);
      }
    }, dependencies: [
      HeaderComponent,
      MatProgressBarModule,
      MatProgressBar,
      RecentPlaylistsComponent,
      TranslatePipe
    ], styles: ["\n\n  .mat-tab-label-content {\n  text-transform: uppercase;\n}\n  .mat-tab-group.mat-background-primary .mat-tab-header-pagination {\n  display: none;\n}\n.playlists-container[_ngcontent-%COMP%] {\n  grid-area: playlists;\n}\n.recent-playlists[_ngcontent-%COMP%] {\n  height: calc(100vh - 100px);\n  overflow: auto;\n}\n@media only screen and (max-width: 480px) {\n  .tab-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", imports: [
      HeaderComponent,
      MatProgressBarModule,
      RecentPlaylistsComponent,
      TranslatePipe
    ], template: `<div class="grid-container">
  <app-header
    [title]="'HOME.TITLE' | translate"
    [subtitle]="'HOME.SUBTITLE' | translate"
    />
  <app-recent-playlists class="recent-playlists" />
  @if (isLoading) {
    <mat-progress-bar mode="indeterminate" />
  }
</div>
`, styles: ["/* src/app/home/home.component.scss */\n::ng-deep .mat-tab-label-content {\n  text-transform: uppercase;\n}\n::ng-deep .mat-tab-group.mat-background-primary .mat-tab-header-pagination {\n  display: none;\n}\n.playlists-container {\n  grid-area: playlists;\n}\n.recent-playlists {\n  height: calc(100vh - 100px);\n  overflow: auto;\n}\n@media only screen and (max-width: 480px) {\n  .tab-title {\n    display: none;\n  }\n}\n"] }]
  }], () => [{ type: DataService }, { type: NgZone }, { type: MatSnackBar }, { type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/home/home.component.ts", lineNumber: 25 });
})();

export {
  MatMenuItem,
  MatMenu,
  MatMenuTrigger,
  MatMenuModule,
  MatToolbar,
  MatToolbarModule,
  MatProgressBar,
  MatProgressBarModule,
  HomeComponent,
  HeaderComponent
};
