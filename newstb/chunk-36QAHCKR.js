import {
  EpgItemDescriptionComponent
} from "./chunk-KT6EFL7E.js";
import {
  SettingsComponent
} from "./chunk-32WWAGYR.js";
import "./chunk-ORQLF66A.js";
import {
  EpgService
} from "./chunk-4DWGK4ZC.js";
import {
  MatToolbar,
  MatToolbarModule
} from "./chunk-643VSRQ6.js";
import "./chunk-XRJ27V54.js";
import "./chunk-SLSKJ3O4.js";
import "./chunk-56EHNJI7.js";
import "./chunk-IUKDAOGB.js";
import {
  MatListItemLine,
  MatListModule,
  MatListOption,
  MatSelectionList
} from "./chunk-JHEQ34EK.js";
import "./chunk-PVDG46DZ.js";
import "./chunk-VSRLJIIN.js";
import "./chunk-BSW44WEY.js";
import {
  PlaylistsService
} from "./chunk-L3VXQT5F.js";
import {
  ActivatedRoute,
  ArtPlayerComponent,
  HtmlVideoPlayerComponent,
  MatDialog,
  MatDialogModule,
  MatSnackBar,
  Router,
  RouterLink,
  STORE_KEY,
  SettingsStore,
  StorageMap,
  Store,
  VideoPlayer,
  VjsPlayerComponent,
  addPlaylist,
  invoke,
  require_moment,
  resetActiveEpgProgram,
  selectActive,
  selectActivePlaylistId,
  selectChannels,
  selectCurrentEpgProgram,
  selectFavorites,
  selectIsEpgAvailable,
  setActiveEpgProgram,
  setActivePlaylist,
  setAdjacentChannelAsActive,
  setChannels,
  setCurrentEpgProgram,
  updateFavorites
} from "./chunk-QHT262RL.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-BPPYQAMP.js";
import "./chunk-BQRDSFE6.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-KMRXFGXG.js";
import {
  CHANNEL_SET_USER_AGENT,
  CdkScrollable,
  CdkScrollableModule,
  ComponentPortal,
  DataService,
  DefaultValueAccessor,
  Directionality,
  EPG_GET_PROGRAM_DONE,
  ERROR,
  ESCAPE,
  FocusMonitor,
  FocusTrapFactory,
  FormsModule,
  InteractivityChecker,
  MAT_RIPPLE_GLOBAL_OPTIONS,
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
  Overlay,
  OverlayRef,
  PLAYLIST_PARSE_BY_URL,
  PLAYLIST_PARSE_RESPONSE,
  Platform,
  RippleState,
  ScrollDispatcher,
  TranslatePipe,
  ViewportRuler,
  _CdkPrivateStyleLoader,
  _StructuralStylesLoader,
  _animationsDisabled,
  coerceBooleanProperty,
  coerceNumberProperty,
  hasModifierKey
} from "./chunk-W4GTA6ZI.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgStyle,
  NgZone,
  Output,
  Pipe,
  QueryList,
  Renderer2,
  Subject,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  __async,
  __spreadProps,
  __spreadValues,
  __toESM,
  afterNextRender,
  booleanAttribute,
  combineLatest,
  combineLatestWith,
  debounceTime,
  effect,
  filter,
  forwardRef,
  fromEvent,
  inject,
  map,
  mapTo,
  merge,
  numberAttribute,
  setClassMetadata,
  setClassMetadataAsync,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵdeclareLet,
  ɵɵdefer,
  ɵɵdeferOnIdle,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-7EPDPDBX.js";

// node_modules/@angular/material/fesm2022/sidenav.mjs
var _c0 = ["*"];
var _c1 = ["content"];
var _c2 = [[["mat-drawer"]], [["mat-drawer-content"]], "*"];
var _c3 = ["mat-drawer", "mat-drawer-content", "*"];
function MatDrawerContainer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function MatDrawerContainer_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onBackdropClicked());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mat-drawer-shown", ctx_r1._isShowingBackdrop());
  }
}
function MatDrawerContainer_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-drawer-content");
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
}
var _c4 = [[["mat-sidenav"]], [["mat-sidenav-content"]], "*"];
var _c5 = ["mat-sidenav", "mat-sidenav-content", "*"];
function MatSidenavContainer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function MatSidenavContainer_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onBackdropClicked());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mat-drawer-shown", ctx_r1._isShowingBackdrop());
  }
}
function MatSidenavContainer_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-sidenav-content");
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
}
var _c6 = ".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n";
function throwMatDuplicatedDrawerError(position) {
  throw Error(`A drawer was already declared for 'position="${position}"'`);
}
var MAT_DRAWER_DEFAULT_AUTOSIZE = new InjectionToken("MAT_DRAWER_DEFAULT_AUTOSIZE", {
  providedIn: "root",
  factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY
});
var MAT_DRAWER_CONTAINER = new InjectionToken("MAT_DRAWER_CONTAINER");
function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
  return false;
}
var MatDrawerContent = class _MatDrawerContent extends CdkScrollable {
  _platform = inject(Platform);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _container = inject(MatDrawerContainer);
  constructor() {
    const elementRef = inject(ElementRef);
    const scrollDispatcher = inject(ScrollDispatcher);
    const ngZone = inject(NgZone);
    super(elementRef, scrollDispatcher, ngZone);
  }
  ngAfterContentInit() {
    this._container._contentMarginChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }
  /** Determines whether the content element should be hidden from the user. */
  _shouldBeHidden() {
    if (this._platform.isBrowser) {
      return false;
    }
    const {
      start,
      end
    } = this._container;
    return start != null && start.mode !== "over" && start.opened || end != null && end.mode !== "over" && end.opened;
  }
  static \u0275fac = function MatDrawerContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDrawerContent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawerContent,
    selectors: [["mat-drawer-content"]],
    hostAttrs: [1, "mat-drawer-content"],
    hostVars: 6,
    hostBindings: function MatDrawerContent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
        \u0275\u0275classProp("mat-drawer-content-hidden", ctx._shouldBeHidden());
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useExisting: _MatDrawerContent
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatDrawerContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawerContent, [{
    type: Component,
    args: [{
      selector: "mat-drawer-content",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-drawer-content",
        "[style.margin-left.px]": "_container._contentMargins.left",
        "[style.margin-right.px]": "_container._contentMargins.right",
        "[class.mat-drawer-content-hidden]": "_shouldBeHidden()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: CdkScrollable,
        useExisting: MatDrawerContent
      }]
    }]
  }], () => [], null);
})();
var MatDrawer = class _MatDrawer {
  _elementRef = inject(ElementRef);
  _focusTrapFactory = inject(FocusTrapFactory);
  _focusMonitor = inject(FocusMonitor);
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _interactivityChecker = inject(InteractivityChecker);
  _doc = inject(DOCUMENT);
  _container = inject(MAT_DRAWER_CONTAINER, {
    optional: true
  });
  _focusTrap = null;
  _elementFocusedBeforeDrawerWasOpened = null;
  _eventCleanups;
  /** Whether the view of the component has been attached. */
  _isAttached;
  /** Anchor node used to restore the drawer to its initial position. */
  _anchor;
  /** The side that the drawer is attached to. */
  get position() {
    return this._position;
  }
  set position(value) {
    value = value === "end" ? "end" : "start";
    if (value !== this._position) {
      if (this._isAttached) {
        this._updatePositionInParent(value);
      }
      this._position = value;
      this.onPositionChanged.emit();
    }
  }
  _position = "start";
  /** Mode of the drawer; one of 'over', 'push' or 'side'. */
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._updateFocusTrapState();
    this._modeChanged.next();
  }
  _mode = "over";
  /** Whether the drawer can be closed with the escape key or by clicking on the backdrop. */
  get disableClose() {
    return this._disableClose;
  }
  set disableClose(value) {
    this._disableClose = coerceBooleanProperty(value);
  }
  _disableClose = false;
  /**
   * Whether the drawer should focus the first focusable element automatically when opened.
   * Defaults to false in when `mode` is set to `side`, otherwise defaults to `true`. If explicitly
   * enabled, focus will be moved into the sidenav in `side` mode as well.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or AutoFocusTarget
   * instead.
   */
  get autoFocus() {
    const value = this._autoFocus;
    if (value == null) {
      if (this.mode === "side") {
        return "dialog";
      } else {
        return "first-tabbable";
      }
    }
    return value;
  }
  set autoFocus(value) {
    if (value === "true" || value === "false" || value == null) {
      value = coerceBooleanProperty(value);
    }
    this._autoFocus = value;
  }
  _autoFocus;
  /**
   * Whether the drawer is opened. We overload this because we trigger an event when it
   * starts or end.
   */
  get opened() {
    return this._opened();
  }
  set opened(value) {
    this.toggle(coerceBooleanProperty(value));
  }
  _opened = signal(false, ...ngDevMode ? [{
    debugName: "_opened"
  }] : []);
  /** How the sidenav was opened (keypress, mouse click etc.) */
  _openedVia;
  /** Emits whenever the drawer has started animating. */
  _animationStarted = new Subject();
  /** Emits whenever the drawer is done animating. */
  _animationEnd = new Subject();
  /** Event emitted when the drawer open state is changed. */
  openedChange = (
    // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
    new EventEmitter(
      /* isAsync */
      true
    )
  );
  /** Event emitted when the drawer has been opened. */
  _openedStream = this.openedChange.pipe(filter((o) => o), map(() => {
  }));
  /** Event emitted when the drawer has started opening. */
  openedStart = this._animationStarted.pipe(filter(() => this.opened), mapTo(void 0));
  /** Event emitted when the drawer has been closed. */
  _closedStream = this.openedChange.pipe(filter((o) => !o), map(() => {
  }));
  /** Event emitted when the drawer has started closing. */
  closedStart = this._animationStarted.pipe(filter(() => !this.opened), mapTo(void 0));
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Event emitted when the drawer's position changes. */
  // tslint:disable-next-line:no-output-on-prefix
  onPositionChanged = new EventEmitter();
  /** Reference to the inner element that contains all the content. */
  _content;
  /**
   * An observable that emits when the drawer mode changes. This is used by the drawer container to
   * to know when to when the mode changes so it can adapt the margins on the content.
   */
  _modeChanged = new Subject();
  _injector = inject(Injector);
  _changeDetectorRef = inject(ChangeDetectorRef);
  constructor() {
    this.openedChange.pipe(takeUntil(this._destroyed)).subscribe((opened) => {
      if (opened) {
        this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement;
        this._takeFocus();
      } else if (this._isFocusWithinDrawer()) {
        this._restoreFocus(this._openedVia || "program");
      }
    });
    this._ngZone.runOutsideAngular(() => {
      const element = this._elementRef.nativeElement;
      fromEvent(element, "keydown").pipe(filter((event) => {
        return event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event);
      }), takeUntil(this._destroyed)).subscribe((event) => this._ngZone.run(() => {
        this.close();
        event.stopPropagation();
        event.preventDefault();
      }));
      this._eventCleanups = [this._renderer.listen(element, "transitionrun", this._handleTransitionEvent), this._renderer.listen(element, "transitionend", this._handleTransitionEvent), this._renderer.listen(element, "transitioncancel", this._handleTransitionEvent)];
    });
    this._animationEnd.subscribe(() => {
      this.openedChange.emit(this.opened);
    });
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          cleanupBlur();
          cleanupMousedown();
          element.removeAttribute("tabindex");
        };
        const cleanupBlur = this._renderer.listen(element, "blur", callback);
        const cleanupMousedown = this._renderer.listen(element, "mousedown", callback);
      });
    }
    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves focus into the drawer. Note that this works even if
   * the focus trap is disabled in `side` mode.
   */
  _takeFocus() {
    if (!this._focusTrap) {
      return;
    }
    const element = this._elementRef.nativeElement;
    switch (this.autoFocus) {
      case false:
      case "dialog":
        return;
      case true:
      case "first-tabbable":
        afterNextRender(() => {
          const hasMovedFocus = this._focusTrap.focusInitialElement();
          if (!hasMovedFocus && typeof element.focus === "function") {
            element.focus();
          }
        }, {
          injector: this._injector
        });
        break;
      case "first-heading":
        this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
        break;
      default:
        this._focusByCssSelector(this.autoFocus);
        break;
    }
  }
  /**
   * Restores focus to the element that was originally focused when the drawer opened.
   * If no element was focused at that time, the focus will be restored to the drawer.
   */
  _restoreFocus(focusOrigin) {
    if (this.autoFocus === "dialog") {
      return;
    }
    if (this._elementFocusedBeforeDrawerWasOpened) {
      this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, focusOrigin);
    } else {
      this._elementRef.nativeElement.blur();
    }
    this._elementFocusedBeforeDrawerWasOpened = null;
  }
  /** Whether focus is currently within the drawer. */
  _isFocusWithinDrawer() {
    const activeEl = this._doc.activeElement;
    return !!activeEl && this._elementRef.nativeElement.contains(activeEl);
  }
  ngAfterViewInit() {
    this._isAttached = true;
    if (this._position === "end") {
      this._updatePositionInParent("end");
    }
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      this._updateFocusTrapState();
    }
  }
  ngOnDestroy() {
    this._eventCleanups.forEach((cleanup) => cleanup());
    this._focusTrap?.destroy();
    this._anchor?.remove();
    this._anchor = null;
    this._animationStarted.complete();
    this._animationEnd.complete();
    this._modeChanged.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Open the drawer.
   * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
   * Used for focus management after the sidenav is closed.
   */
  open(openedVia) {
    return this.toggle(true, openedVia);
  }
  /** Close the drawer. */
  close() {
    return this.toggle(false);
  }
  /** Closes the drawer with context that the backdrop was clicked. */
  _closeViaBackdropClick() {
    return this._setOpen(
      /* isOpen */
      false,
      /* restoreFocus */
      true,
      "mouse"
    );
  }
  /**
   * Toggle this drawer.
   * @param isOpen Whether the drawer should be open.
   * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
   * Used for focus management after the sidenav is closed.
   */
  toggle(isOpen = !this.opened, openedVia) {
    if (isOpen && openedVia) {
      this._openedVia = openedVia;
    }
    const result = this._setOpen(
      isOpen,
      /* restoreFocus */
      !isOpen && this._isFocusWithinDrawer(),
      this._openedVia || "program"
    );
    if (!isOpen) {
      this._openedVia = null;
    }
    return result;
  }
  /**
   * Toggles the opened state of the drawer.
   * @param isOpen Whether the drawer should open or close.
   * @param restoreFocus Whether focus should be restored on close.
   * @param focusOrigin Origin to use when restoring focus.
   */
  _setOpen(isOpen, restoreFocus, focusOrigin) {
    if (isOpen === this.opened) {
      return Promise.resolve(isOpen ? "open" : "close");
    }
    this._opened.set(isOpen);
    if (this._container?._transitionsEnabled) {
      this._setIsAnimating(true);
    } else {
      setTimeout(() => {
        this._animationStarted.next();
        this._animationEnd.next();
      });
    }
    this._elementRef.nativeElement.classList.toggle("mat-drawer-opened", isOpen);
    if (!isOpen && restoreFocus) {
      this._restoreFocus(focusOrigin);
    }
    this._changeDetectorRef.markForCheck();
    this._updateFocusTrapState();
    return new Promise((resolve) => {
      this.openedChange.pipe(take(1)).subscribe((open) => resolve(open ? "open" : "close"));
    });
  }
  /** Toggles whether the drawer is currently animating. */
  _setIsAnimating(isAnimating) {
    this._elementRef.nativeElement.classList.toggle("mat-drawer-animating", isAnimating);
  }
  _getWidth() {
    return this._elementRef.nativeElement.offsetWidth || 0;
  }
  /** Updates the enabled state of the focus trap. */
  _updateFocusTrapState() {
    if (this._focusTrap) {
      this._focusTrap.enabled = !!this._container?.hasBackdrop && this.opened;
    }
  }
  /**
   * Updates the position of the drawer in the DOM. We need to move the element around ourselves
   * when it's in the `end` position so that it comes after the content and the visual order
   * matches the tab order. We also need to be able to move it back to `start` if the sidenav
   * started off as `end` and was changed to `start`.
   */
  _updatePositionInParent(newPosition) {
    if (!this._platform.isBrowser) {
      return;
    }
    const element = this._elementRef.nativeElement;
    const parent = element.parentNode;
    if (newPosition === "end") {
      if (!this._anchor) {
        this._anchor = this._doc.createComment("mat-drawer-anchor");
        parent.insertBefore(this._anchor, element);
      }
      parent.appendChild(element);
    } else if (this._anchor) {
      this._anchor.parentNode.insertBefore(element, this._anchor);
    }
  }
  /** Event handler for animation events. */
  _handleTransitionEvent = (event) => {
    const element = this._elementRef.nativeElement;
    if (event.target === element) {
      this._ngZone.run(() => {
        if (event.type === "transitionrun") {
          this._animationStarted.next(event);
        } else {
          if (event.type === "transitionend") {
            this._setIsAnimating(false);
          }
          this._animationEnd.next(event);
        }
      });
    }
  };
  static \u0275fac = function MatDrawer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDrawer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawer,
    selectors: [["mat-drawer"]],
    viewQuery: function MatDrawer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
      }
    },
    hostAttrs: [1, "mat-drawer"],
    hostVars: 12,
    hostBindings: function MatDrawer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("align", null)("tabIndex", ctx.mode !== "side" ? "-1" : null);
        \u0275\u0275styleProp("visibility", !ctx._container && !ctx.opened ? "hidden" : null);
        \u0275\u0275classProp("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side");
      }
    },
    inputs: {
      position: "position",
      mode: "mode",
      disableClose: "disableClose",
      autoFocus: "autoFocus",
      opened: "opened"
    },
    outputs: {
      openedChange: "openedChange",
      _openedStream: "opened",
      openedStart: "openedStart",
      _closedStream: "closed",
      closedStart: "closedStart",
      onPositionChanged: "positionChanged"
    },
    exportAs: ["matDrawer"],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 0,
    consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]],
    template: function MatDrawer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CdkScrollable],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawer, [{
    type: Component,
    args: [{
      selector: "mat-drawer",
      exportAs: "matDrawer",
      host: {
        "class": "mat-drawer",
        // must prevent the browser from aligning text based on value
        "[attr.align]": "null",
        "[class.mat-drawer-end]": 'position === "end"',
        "[class.mat-drawer-over]": 'mode === "over"',
        "[class.mat-drawer-push]": 'mode === "push"',
        "[class.mat-drawer-side]": 'mode === "side"',
        // The styles that render the sidenav off-screen come from the drawer container. Prior to #30235
        // this was also done by the animations module which some internal tests seem to depend on.
        // Simulate it by toggling the `hidden` attribute instead.
        "[style.visibility]": '(!_container && !opened) ? "hidden" : null',
        // The sidenav container should not be focused on when used in side mode. See b/286459024 for
        // reference. Updates tabIndex of drawer/container to default to null if in side mode.
        "[attr.tabIndex]": '(mode !== "side") ? "-1" : null'
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkScrollable],
      template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n'
    }]
  }], () => [], {
    position: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    disableClose: [{
      type: Input
    }],
    autoFocus: [{
      type: Input
    }],
    opened: [{
      type: Input
    }],
    openedChange: [{
      type: Output
    }],
    _openedStream: [{
      type: Output,
      args: ["opened"]
    }],
    openedStart: [{
      type: Output
    }],
    _closedStream: [{
      type: Output,
      args: ["closed"]
    }],
    closedStart: [{
      type: Output
    }],
    onPositionChanged: [{
      type: Output,
      args: ["positionChanged"]
    }],
    _content: [{
      type: ViewChild,
      args: ["content"]
    }]
  });
})();
var MatDrawerContainer = class _MatDrawerContainer {
  _dir = inject(Directionality, {
    optional: true
  });
  _element = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _animationDisabled = _animationsDisabled();
  _transitionsEnabled = false;
  /** All drawers in the container. Includes drawers from inside nested containers. */
  _allDrawers;
  /** Drawers that belong to this container. */
  _drawers = new QueryList();
  _content;
  _userContent;
  /** The drawer child with the `start` position. */
  get start() {
    return this._start;
  }
  /** The drawer child with the `end` position. */
  get end() {
    return this._end;
  }
  /**
   * Whether to automatically resize the container whenever
   * the size of any of its drawers changes.
   *
   * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
   * the drawers on every change detection cycle. Can be configured globally via the
   * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
   */
  get autosize() {
    return this._autosize;
  }
  set autosize(value) {
    this._autosize = coerceBooleanProperty(value);
  }
  _autosize = inject(MAT_DRAWER_DEFAULT_AUTOSIZE);
  /**
   * Whether the drawer container should have a backdrop while one of the sidenavs is open.
   * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
   * mode as well.
   */
  get hasBackdrop() {
    return this._drawerHasBackdrop(this._start) || this._drawerHasBackdrop(this._end);
  }
  set hasBackdrop(value) {
    this._backdropOverride = value == null ? null : coerceBooleanProperty(value);
  }
  _backdropOverride;
  /** Event emitted when the drawer backdrop is clicked. */
  backdropClick = new EventEmitter();
  /** The drawer at the start/end position, independent of direction. */
  _start;
  _end;
  /**
   * The drawer at the left/right. When direction changes, these will change as well.
   * They're used as aliases for the above to set the left/right style properly.
   * In LTR, _left == _start and _right == _end.
   * In RTL, _left == _end and _right == _start.
   */
  _left;
  _right;
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Emits on every ngDoCheck. Used for debouncing reflows. */
  _doCheckSubject = new Subject();
  /**
   * Margins to be applied to the content. These are used to push / shrink the drawer content when a
   * drawer is open. We use margin rather than transform even for push mode because transform breaks
   * fixed position elements inside of the transformed element.
   */
  _contentMargins = {
    left: null,
    right: null
  };
  _contentMarginChanges = new Subject();
  /** Reference to the CdkScrollable instance that wraps the scrollable content. */
  get scrollable() {
    return this._userContent || this._content;
  }
  _injector = inject(Injector);
  constructor() {
    const platform = inject(Platform);
    const viewportRuler = inject(ViewportRuler);
    this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._validateDrawers();
      this.updateContentMargins();
    });
    viewportRuler.change().pipe(takeUntil(this._destroyed)).subscribe(() => this.updateContentMargins());
    if (!this._animationDisabled && platform.isBrowser) {
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this._element.nativeElement.classList.add("mat-drawer-transition");
          this._transitionsEnabled = true;
        }, 200);
      });
    }
  }
  ngAfterContentInit() {
    this._allDrawers.changes.pipe(startWith(this._allDrawers), takeUntil(this._destroyed)).subscribe((drawer) => {
      this._drawers.reset(drawer.filter((item) => !item._container || item._container === this));
      this._drawers.notifyOnChanges();
    });
    this._drawers.changes.pipe(startWith(null)).subscribe(() => {
      this._validateDrawers();
      this._drawers.forEach((drawer) => {
        this._watchDrawerToggle(drawer);
        this._watchDrawerPosition(drawer);
        this._watchDrawerMode(drawer);
      });
      if (!this._drawers.length || this._isDrawerOpen(this._start) || this._isDrawerOpen(this._end)) {
        this.updateContentMargins();
      }
      this._changeDetectorRef.markForCheck();
    });
    this._ngZone.runOutsideAngular(() => {
      this._doCheckSubject.pipe(
        debounceTime(10),
        // Arbitrary debounce time, less than a frame at 60fps
        takeUntil(this._destroyed)
      ).subscribe(() => this.updateContentMargins());
    });
  }
  ngOnDestroy() {
    this._contentMarginChanges.complete();
    this._doCheckSubject.complete();
    this._drawers.destroy();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Calls `open` of both start and end drawers */
  open() {
    this._drawers.forEach((drawer) => drawer.open());
  }
  /** Calls `close` of both start and end drawers */
  close() {
    this._drawers.forEach((drawer) => drawer.close());
  }
  /**
   * Recalculates and updates the inline styles for the content. Note that this should be used
   * sparingly, because it causes a reflow.
   */
  updateContentMargins() {
    let left = 0;
    let right = 0;
    if (this._left && this._left.opened) {
      if (this._left.mode == "side") {
        left += this._left._getWidth();
      } else if (this._left.mode == "push") {
        const width = this._left._getWidth();
        left += width;
        right -= width;
      }
    }
    if (this._right && this._right.opened) {
      if (this._right.mode == "side") {
        right += this._right._getWidth();
      } else if (this._right.mode == "push") {
        const width = this._right._getWidth();
        right += width;
        left -= width;
      }
    }
    left = left || null;
    right = right || null;
    if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
      this._contentMargins = {
        left,
        right
      };
      this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins));
    }
  }
  ngDoCheck() {
    if (this._autosize && this._isPushed()) {
      this._ngZone.runOutsideAngular(() => this._doCheckSubject.next());
    }
  }
  /**
   * Subscribes to drawer events in order to set a class on the main container element when the
   * drawer is open and the backdrop is visible. This ensures any overflow on the container element
   * is properly hidden.
   */
  _watchDrawerToggle(drawer) {
    drawer._animationStarted.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
      this.updateContentMargins();
      this._changeDetectorRef.markForCheck();
    });
    if (drawer.mode !== "side") {
      drawer.openedChange.pipe(takeUntil(this._drawers.changes)).subscribe(() => this._setContainerClass(drawer.opened));
    }
  }
  /**
   * Subscribes to drawer onPositionChanged event in order to
   * re-validate drawers when the position changes.
   */
  _watchDrawerPosition(drawer) {
    drawer.onPositionChanged.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
      afterNextRender({
        read: () => this._validateDrawers()
      }, {
        injector: this._injector
      });
    });
  }
  /** Subscribes to changes in drawer mode so we can run change detection. */
  _watchDrawerMode(drawer) {
    drawer._modeChanged.pipe(takeUntil(merge(this._drawers.changes, this._destroyed))).subscribe(() => {
      this.updateContentMargins();
      this._changeDetectorRef.markForCheck();
    });
  }
  /** Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element. */
  _setContainerClass(isAdd) {
    const classList = this._element.nativeElement.classList;
    const className = "mat-drawer-container-has-open";
    if (isAdd) {
      classList.add(className);
    } else {
      classList.remove(className);
    }
  }
  /** Validate the state of the drawer children components. */
  _validateDrawers() {
    this._start = this._end = null;
    this._drawers.forEach((drawer) => {
      if (drawer.position == "end") {
        if (this._end != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwMatDuplicatedDrawerError("end");
        }
        this._end = drawer;
      } else {
        if (this._start != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwMatDuplicatedDrawerError("start");
        }
        this._start = drawer;
      }
    });
    this._right = this._left = null;
    if (this._dir && this._dir.value === "rtl") {
      this._left = this._end;
      this._right = this._start;
    } else {
      this._left = this._start;
      this._right = this._end;
    }
  }
  /** Whether the container is being pushed to the side by one of the drawers. */
  _isPushed() {
    return this._isDrawerOpen(this._start) && this._start.mode != "over" || this._isDrawerOpen(this._end) && this._end.mode != "over";
  }
  _onBackdropClicked() {
    this.backdropClick.emit();
    this._closeModalDrawersViaBackdrop();
  }
  _closeModalDrawersViaBackdrop() {
    [this._start, this._end].filter((drawer) => drawer && !drawer.disableClose && this._drawerHasBackdrop(drawer)).forEach((drawer) => drawer._closeViaBackdropClick());
  }
  _isShowingBackdrop() {
    return this._isDrawerOpen(this._start) && this._drawerHasBackdrop(this._start) || this._isDrawerOpen(this._end) && this._drawerHasBackdrop(this._end);
  }
  _isDrawerOpen(drawer) {
    return drawer != null && drawer.opened;
  }
  // Whether argument drawer should have a backdrop when it opens
  _drawerHasBackdrop(drawer) {
    if (this._backdropOverride == null) {
      return !!drawer && drawer.mode !== "side";
    }
    return this._backdropOverride;
  }
  static \u0275fac = function MatDrawerContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDrawerContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawerContainer,
    selectors: [["mat-drawer-container"]],
    contentQueries: function MatDrawerContainer_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatDrawerContent, 5);
        \u0275\u0275contentQuery(dirIndex, MatDrawer, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allDrawers = _t);
      }
    },
    viewQuery: function MatDrawerContainer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatDrawerContent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._userContent = _t.first);
      }
    },
    hostAttrs: [1, "mat-drawer-container"],
    hostVars: 2,
    hostBindings: function MatDrawerContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
      }
    },
    inputs: {
      autosize: "autosize",
      hasBackdrop: "hasBackdrop"
    },
    outputs: {
      backdropClick: "backdropClick"
    },
    exportAs: ["matDrawerContainer"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_DRAWER_CONTAINER,
      useExisting: _MatDrawerContainer
    }])],
    ngContentSelectors: _c3,
    decls: 4,
    vars: 2,
    consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]],
    template: function MatDrawerContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275conditionalCreate(0, MatDrawerContainer_Conditional_0_Template, 1, 2, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275conditionalCreate(3, MatDrawerContainer_Conditional_3_Template, 2, 0, "mat-drawer-content");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.hasBackdrop ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx._content ? 3 : -1);
      }
    },
    dependencies: [MatDrawerContent],
    styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawerContainer, [{
    type: Component,
    args: [{
      selector: "mat-drawer-container",
      exportAs: "matDrawerContainer",
      host: {
        "class": "mat-drawer-container",
        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatDrawerContainer
      }],
      imports: [MatDrawerContent],
      template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-drawer"></ng-content>\n\n<ng-content select="mat-drawer-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-drawer-content>\n    <ng-content></ng-content>\n  </mat-drawer-content>\n}\n',
      styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"]
    }]
  }], () => [], {
    _allDrawers: [{
      type: ContentChildren,
      args: [MatDrawer, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }],
    _content: [{
      type: ContentChild,
      args: [MatDrawerContent]
    }],
    _userContent: [{
      type: ViewChild,
      args: [MatDrawerContent]
    }],
    autosize: [{
      type: Input
    }],
    hasBackdrop: [{
      type: Input
    }],
    backdropClick: [{
      type: Output
    }]
  });
})();
var MatSidenavContent = class _MatSidenavContent extends MatDrawerContent {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenavContent_BaseFactory;
    return function MatSidenavContent_Factory(__ngFactoryType__) {
      return (\u0275MatSidenavContent_BaseFactory || (\u0275MatSidenavContent_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenavContent)))(__ngFactoryType__ || _MatSidenavContent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenavContent,
    selectors: [["mat-sidenav-content"]],
    hostAttrs: [1, "mat-drawer-content", "mat-sidenav-content"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useExisting: _MatSidenavContent
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatSidenavContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavContent, [{
    type: Component,
    args: [{
      selector: "mat-sidenav-content",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-drawer-content mat-sidenav-content"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: CdkScrollable,
        useExisting: MatSidenavContent
      }]
    }]
  }], null, null);
})();
var MatSidenav = class _MatSidenav extends MatDrawer {
  /** Whether the sidenav is fixed in the viewport. */
  get fixedInViewport() {
    return this._fixedInViewport;
  }
  set fixedInViewport(value) {
    this._fixedInViewport = coerceBooleanProperty(value);
  }
  _fixedInViewport = false;
  /**
   * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
   * mode.
   */
  get fixedTopGap() {
    return this._fixedTopGap;
  }
  set fixedTopGap(value) {
    this._fixedTopGap = coerceNumberProperty(value);
  }
  _fixedTopGap = 0;
  /**
   * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
   * fixed mode.
   */
  get fixedBottomGap() {
    return this._fixedBottomGap;
  }
  set fixedBottomGap(value) {
    this._fixedBottomGap = coerceNumberProperty(value);
  }
  _fixedBottomGap = 0;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenav_BaseFactory;
    return function MatSidenav_Factory(__ngFactoryType__) {
      return (\u0275MatSidenav_BaseFactory || (\u0275MatSidenav_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenav)))(__ngFactoryType__ || _MatSidenav);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenav,
    selectors: [["mat-sidenav"]],
    hostAttrs: [1, "mat-drawer", "mat-sidenav"],
    hostVars: 16,
    hostBindings: function MatSidenav_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("tabIndex", ctx.mode !== "side" ? "-1" : null)("align", null);
        \u0275\u0275styleProp("top", ctx.fixedInViewport ? ctx.fixedTopGap : null, "px")("bottom", ctx.fixedInViewport ? ctx.fixedBottomGap : null, "px");
        \u0275\u0275classProp("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-sidenav-fixed", ctx.fixedInViewport);
      }
    },
    inputs: {
      fixedInViewport: "fixedInViewport",
      fixedTopGap: "fixedTopGap",
      fixedBottomGap: "fixedBottomGap"
    },
    exportAs: ["matSidenav"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatDrawer,
      useExisting: _MatSidenav
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 0,
    consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]],
    template: function MatSidenav_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CdkScrollable],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenav, [{
    type: Component,
    args: [{
      selector: "mat-sidenav",
      exportAs: "matSidenav",
      host: {
        "class": "mat-drawer mat-sidenav",
        // The sidenav container should not be focused on when used in side mode. See b/286459024 for
        // reference. Updates tabIndex of drawer/container to default to null if in side mode.
        "[attr.tabIndex]": '(mode !== "side") ? "-1" : null',
        // must prevent the browser from aligning text based on value
        "[attr.align]": "null",
        "[class.mat-drawer-end]": 'position === "end"',
        "[class.mat-drawer-over]": 'mode === "over"',
        "[class.mat-drawer-push]": 'mode === "push"',
        "[class.mat-drawer-side]": 'mode === "side"',
        "[class.mat-sidenav-fixed]": "fixedInViewport",
        "[style.top.px]": "fixedInViewport ? fixedTopGap : null",
        "[style.bottom.px]": "fixedInViewport ? fixedBottomGap : null"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkScrollable],
      providers: [{
        provide: MatDrawer,
        useExisting: MatSidenav
      }],
      template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n'
    }]
  }], null, {
    fixedInViewport: [{
      type: Input
    }],
    fixedTopGap: [{
      type: Input
    }],
    fixedBottomGap: [{
      type: Input
    }]
  });
})();
var MatSidenavContainer = class _MatSidenavContainer extends MatDrawerContainer {
  _allDrawers = void 0;
  // We need an initializer here to avoid a TS error.
  _content = void 0;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenavContainer_BaseFactory;
    return function MatSidenavContainer_Factory(__ngFactoryType__) {
      return (\u0275MatSidenavContainer_BaseFactory || (\u0275MatSidenavContainer_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenavContainer)))(__ngFactoryType__ || _MatSidenavContainer);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenavContainer,
    selectors: [["mat-sidenav-container"]],
    contentQueries: function MatSidenavContainer_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatSidenavContent, 5);
        \u0275\u0275contentQuery(dirIndex, MatSidenav, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allDrawers = _t);
      }
    },
    hostAttrs: [1, "mat-drawer-container", "mat-sidenav-container"],
    hostVars: 2,
    hostBindings: function MatSidenavContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
      }
    },
    exportAs: ["matSidenavContainer"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_DRAWER_CONTAINER,
      useExisting: _MatSidenavContainer
    }, {
      provide: MatDrawerContainer,
      useExisting: _MatSidenavContainer
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c5,
    decls: 4,
    vars: 2,
    consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]],
    template: function MatSidenavContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c4);
        \u0275\u0275conditionalCreate(0, MatSidenavContainer_Conditional_0_Template, 1, 2, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275conditionalCreate(3, MatSidenavContainer_Conditional_3_Template, 2, 0, "mat-sidenav-content");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.hasBackdrop ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx._content ? 3 : -1);
      }
    },
    dependencies: [MatSidenavContent],
    styles: [_c6],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavContainer, [{
    type: Component,
    args: [{
      selector: "mat-sidenav-container",
      exportAs: "matSidenavContainer",
      host: {
        "class": "mat-drawer-container mat-sidenav-container",
        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatSidenavContainer
      }, {
        provide: MatDrawerContainer,
        useExisting: MatSidenavContainer
      }],
      imports: [MatSidenavContent],
      template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-sidenav"></ng-content>\n\n<ng-content select="mat-sidenav-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-sidenav-content>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n}\n',
      styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"]
    }]
  }], null, {
    _allDrawers: [{
      type: ContentChildren,
      args: [MatSidenav, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }],
    _content: [{
      type: ContentChild,
      args: [MatSidenavContent]
    }]
  });
})();
var MatSidenavModule = class _MatSidenavModule {
  static \u0275fac = function MatSidenavModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSidenavModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSidenavModule,
    imports: [MatCommonModule, CdkScrollableModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
    exports: [CdkScrollableModule, MatCommonModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, CdkScrollableModule, CdkScrollableModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkScrollableModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
      exports: [CdkScrollableModule, MatCommonModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/slider.mjs
var _c02 = ["knob"];
var _c12 = ["valueIndicatorContainer"];
function MatSliderVisualThumb_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2, 1)(2, "div", 5)(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.valueIndicatorText);
  }
}
var _c22 = ["trackActive"];
var _c32 = ["*"];
function MatSlider_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const tickMark_r1 = ctx.$implicit;
    const \u0275$index_14_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(tickMark_r1 === 0 ? "mdc-slider__tick-mark--active" : "mdc-slider__tick-mark--inactive");
    \u0275\u0275styleProp("transform", ctx_r2._calcTickMarkTransform(\u0275$index_14_r2));
  }
}
function MatSlider_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MatSlider_Conditional_6_Conditional_2_For_1_Template, 1, 4, "div", 8, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2._tickMarks);
  }
}
function MatSlider_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6, 1);
    \u0275\u0275conditionalCreate(2, MatSlider_Conditional_6_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2._cachedWidth ? 2 : -1);
  }
}
function MatSlider_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-slider-visual-thumb", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("discrete", ctx_r2.discrete)("thumbPosition", 1)("valueIndicatorText", ctx_r2.startValueIndicatorText);
  }
}
var _MatThumb;
(function(_MatThumb2) {
  _MatThumb2[_MatThumb2["START"] = 1] = "START";
  _MatThumb2[_MatThumb2["END"] = 2] = "END";
})(_MatThumb || (_MatThumb = {}));
var _MatTickMark;
(function(_MatTickMark2) {
  _MatTickMark2[_MatTickMark2["ACTIVE"] = 0] = "ACTIVE";
  _MatTickMark2[_MatTickMark2["INACTIVE"] = 1] = "INACTIVE";
})(_MatTickMark || (_MatTickMark = {}));
var MAT_SLIDER = new InjectionToken("_MatSlider");
var MAT_SLIDER_THUMB = new InjectionToken("_MatSliderThumb");
var MAT_SLIDER_RANGE_THUMB = new InjectionToken("_MatSliderRangeThumb");
var MAT_SLIDER_VISUAL_THUMB = new InjectionToken("_MatSliderVisualThumb");
var MatSliderVisualThumb = class _MatSliderVisualThumb {
  _cdr = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _slider = inject(MAT_SLIDER);
  _renderer = inject(Renderer2);
  _listenerCleanups;
  /** Whether the slider displays a numeric value label upon pressing the thumb. */
  discrete;
  /** Indicates which slider thumb this input corresponds to. */
  thumbPosition;
  /** The display value of the slider thumb. */
  valueIndicatorText;
  /** The MatRipple for this slider thumb. */
  _ripple;
  /** The slider thumb knob. */
  _knob;
  /** The slider thumb value indicator container. */
  _valueIndicatorContainer;
  /** The slider input corresponding to this slider thumb. */
  _sliderInput;
  /** The native html element of the slider input corresponding to this thumb. */
  _sliderInputEl;
  /** The RippleRef for the slider thumbs hover state. */
  _hoverRippleRef;
  /** The RippleRef for the slider thumbs focus state. */
  _focusRippleRef;
  /** The RippleRef for the slider thumbs active state. */
  _activeRippleRef;
  /** Whether the slider thumb is currently being hovered. */
  _isHovered = false;
  /** Whether the slider thumb is currently being pressed. */
  _isActive = false;
  /** Whether the value indicator tooltip is visible. */
  _isValueIndicatorVisible = false;
  /** The host native HTML input element. */
  _hostElement = inject(ElementRef).nativeElement;
  _platform = inject(Platform);
  constructor() {
  }
  ngAfterViewInit() {
    const sliderInput = this._slider._getInput(this.thumbPosition);
    if (!sliderInput) {
      return;
    }
    this._ripple.radius = 24;
    this._sliderInput = sliderInput;
    this._sliderInputEl = this._sliderInput._hostElement;
    this._ngZone.runOutsideAngular(() => {
      const input = this._sliderInputEl;
      const renderer = this._renderer;
      this._listenerCleanups = [renderer.listen(input, "pointermove", this._onPointerMove), renderer.listen(input, "pointerdown", this._onDragStart), renderer.listen(input, "pointerup", this._onDragEnd), renderer.listen(input, "pointerleave", this._onMouseLeave), renderer.listen(input, "focus", this._onFocus), renderer.listen(input, "blur", this._onBlur)];
    });
  }
  ngOnDestroy() {
    this._listenerCleanups?.forEach((cleanup) => cleanup());
  }
  _onPointerMove = (event) => {
    if (this._sliderInput._isFocused) {
      return;
    }
    const rect = this._hostElement.getBoundingClientRect();
    const isHovered = this._slider._isCursorOnSliderThumb(event, rect);
    this._isHovered = isHovered;
    if (isHovered) {
      this._showHoverRipple();
    } else {
      this._hideRipple(this._hoverRippleRef);
    }
  };
  _onMouseLeave = () => {
    this._isHovered = false;
    this._hideRipple(this._hoverRippleRef);
  };
  _onFocus = () => {
    this._hideRipple(this._hoverRippleRef);
    this._showFocusRipple();
    this._hostElement.classList.add("mdc-slider__thumb--focused");
  };
  _onBlur = () => {
    if (!this._isActive) {
      this._hideRipple(this._focusRippleRef);
    }
    if (this._isHovered) {
      this._showHoverRipple();
    }
    this._hostElement.classList.remove("mdc-slider__thumb--focused");
  };
  _onDragStart = (event) => {
    if (event.button !== 0) {
      return;
    }
    this._isActive = true;
    this._showActiveRipple();
  };
  _onDragEnd = () => {
    this._isActive = false;
    this._hideRipple(this._activeRippleRef);
    if (!this._sliderInput._isFocused) {
      this._hideRipple(this._focusRippleRef);
    }
    if (this._platform.SAFARI) {
      this._showHoverRipple();
    }
  };
  /** Handles displaying the hover ripple. */
  _showHoverRipple() {
    if (!this._isShowingRipple(this._hoverRippleRef)) {
      this._hoverRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      });
      this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple");
    }
  }
  /** Handles displaying the focus ripple. */
  _showFocusRipple() {
    if (!this._isShowingRipple(this._focusRippleRef)) {
      this._focusRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      }, true);
      this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple");
    }
  }
  /** Handles displaying the active ripple. */
  _showActiveRipple() {
    if (!this._isShowingRipple(this._activeRippleRef)) {
      this._activeRippleRef = this._showRipple({
        enterDuration: 225,
        exitDuration: 400
      });
      this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple");
    }
  }
  /** Whether the given rippleRef is currently fading in or visible. */
  _isShowingRipple(rippleRef) {
    return rippleRef?.state === RippleState.FADING_IN || rippleRef?.state === RippleState.VISIBLE;
  }
  /** Manually launches the slider thumb ripple using the specified ripple animation config. */
  _showRipple(animation, ignoreGlobalRippleConfig) {
    if (this._slider.disabled) {
      return;
    }
    this._showValueIndicator();
    if (this._slider._isRange) {
      const sibling = this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
      sibling._showValueIndicator();
    }
    if (this._slider._globalRippleOptions?.disabled && !ignoreGlobalRippleConfig) {
      return;
    }
    return this._ripple.launch({
      animation: this._slider._noopAnimations ? {
        enterDuration: 0,
        exitDuration: 0
      } : animation,
      centered: true,
      persistent: true
    });
  }
  /**
   * Fades out the given ripple.
   * Also hides the value indicator if no ripple is showing.
   */
  _hideRipple(rippleRef) {
    rippleRef?.fadeOut();
    if (this._isShowingAnyRipple()) {
      return;
    }
    if (!this._slider._isRange) {
      this._hideValueIndicator();
    }
    const sibling = this._getSibling();
    if (!sibling._isShowingAnyRipple()) {
      this._hideValueIndicator();
      sibling._hideValueIndicator();
    }
  }
  /** Shows the value indicator ui. */
  _showValueIndicator() {
    this._hostElement.classList.add("mdc-slider__thumb--with-indicator");
  }
  /** Hides the value indicator ui. */
  _hideValueIndicator() {
    this._hostElement.classList.remove("mdc-slider__thumb--with-indicator");
  }
  _getSibling() {
    return this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
  }
  /** Gets the value indicator container's native HTML element. */
  _getValueIndicatorContainer() {
    return this._valueIndicatorContainer?.nativeElement;
  }
  /** Gets the native HTML element of the slider thumb knob. */
  _getKnob() {
    return this._knob.nativeElement;
  }
  _isShowingAnyRipple() {
    return this._isShowingRipple(this._hoverRippleRef) || this._isShowingRipple(this._focusRippleRef) || this._isShowingRipple(this._activeRippleRef);
  }
  static \u0275fac = function MatSliderVisualThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderVisualThumb)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSliderVisualThumb,
    selectors: [["mat-slider-visual-thumb"]],
    viewQuery: function MatSliderVisualThumb_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatRipple, 5);
        \u0275\u0275viewQuery(_c02, 5);
        \u0275\u0275viewQuery(_c12, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._ripple = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._knob = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._valueIndicatorContainer = _t.first);
      }
    },
    hostAttrs: [1, "mdc-slider__thumb", "mat-mdc-slider-visual-thumb"],
    inputs: {
      discrete: "discrete",
      thumbPosition: "thumbPosition",
      valueIndicatorText: "valueIndicatorText"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SLIDER_VISUAL_THUMB,
      useExisting: _MatSliderVisualThumb
    }])],
    decls: 4,
    vars: 2,
    consts: [["knob", ""], ["valueIndicatorContainer", ""], [1, "mdc-slider__value-indicator-container"], [1, "mdc-slider__thumb-knob"], ["matRipple", "", 1, "mat-focus-indicator", 3, "matRippleDisabled"], [1, "mdc-slider__value-indicator"], [1, "mdc-slider__value-indicator-text"]],
    template: function MatSliderVisualThumb_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MatSliderVisualThumb_Conditional_0_Template, 5, 1, "div", 2);
        \u0275\u0275element(1, "div", 3, 0)(3, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.discrete ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("matRippleDisabled", true);
      }
    },
    dependencies: [MatRipple],
    styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderVisualThumb, [{
    type: Component,
    args: [{
      selector: "mat-slider-visual-thumb",
      host: {
        "class": "mdc-slider__thumb mat-mdc-slider-visual-thumb"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_SLIDER_VISUAL_THUMB,
        useExisting: MatSliderVisualThumb
      }],
      imports: [MatRipple],
      template: '@if (discrete) {\n  <div class="mdc-slider__value-indicator-container" #valueIndicatorContainer>\n    <div class="mdc-slider__value-indicator">\n      <span class="mdc-slider__value-indicator-text">{{valueIndicatorText}}</span>\n    </div>\n  </div>\n}\n<div class="mdc-slider__thumb-knob" #knob></div>\n<div matRipple class="mat-focus-indicator" [matRippleDisabled]="true"></div>\n',
      styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}\n"]
    }]
  }], () => [], {
    discrete: [{
      type: Input
    }],
    thumbPosition: [{
      type: Input
    }],
    valueIndicatorText: [{
      type: Input
    }],
    _ripple: [{
      type: ViewChild,
      args: [MatRipple]
    }],
    _knob: [{
      type: ViewChild,
      args: ["knob"]
    }],
    _valueIndicatorContainer: [{
      type: ViewChild,
      args: ["valueIndicatorContainer"]
    }]
  });
})();
var MatSlider = class _MatSlider {
  _ngZone = inject(NgZone);
  _cdr = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
    optional: true
  });
  /** The active portion of the slider track. */
  _trackActive;
  /** The slider thumb(s). */
  _thumbs;
  /** The sliders hidden range input(s). */
  _input;
  /** The sliders hidden range input(s). */
  _inputs;
  /** Whether the slider is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(v) {
    this._disabled = v;
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    if (endInput) {
      endInput.disabled = this._disabled;
    }
    if (startInput) {
      startInput.disabled = this._disabled;
    }
  }
  _disabled = false;
  /** Whether the slider displays a numeric value label upon pressing the thumb. */
  get discrete() {
    return this._discrete;
  }
  set discrete(v) {
    this._discrete = v;
    this._updateValueIndicatorUIs();
  }
  _discrete = false;
  /** Whether the slider displays tick marks along the slider track. */
  get showTickMarks() {
    return this._showTickMarks;
  }
  set showTickMarks(value) {
    this._showTickMarks = value;
    if (this._hasViewInitialized) {
      this._updateTickMarkUI();
      this._updateTickMarkTrackUI();
    }
  }
  _showTickMarks = false;
  /** The minimum value that the slider can have. */
  get min() {
    return this._min;
  }
  set min(v) {
    const min = v === void 0 || v === null || isNaN(v) ? this._min : v;
    if (this._min !== min) {
      this._updateMin(min);
    }
  }
  _min = 0;
  /**
   * Theme color of the slider. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/slider/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Whether ripples are disabled in the slider. */
  disableRipple = false;
  _updateMin(min) {
    const prevMin = this._min;
    this._min = min;
    this._isRange ? this._updateMinRange({
      old: prevMin,
      new: min
    }) : this._updateMinNonRange(min);
    this._onMinMaxOrStepChange();
  }
  _updateMinRange(min) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    startInput.min = min.new;
    endInput.min = Math.max(min.new, startInput.value);
    startInput.max = Math.min(endInput.max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    min.new < min.old ? this._onTranslateXChangeBySideEffect(endInput, startInput) : this._onTranslateXChangeBySideEffect(startInput, endInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMinNonRange(min) {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.min = min;
      input._updateThumbUIByValue();
      this._updateTrackUI(input);
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  /** The maximum value that the slider can have. */
  get max() {
    return this._max;
  }
  set max(v) {
    const max = v === void 0 || v === null || isNaN(v) ? this._max : v;
    if (this._max !== max) {
      this._updateMax(max);
    }
  }
  _max = 100;
  _updateMax(max) {
    const prevMax = this._max;
    this._max = max;
    this._isRange ? this._updateMaxRange({
      old: prevMax,
      new: max
    }) : this._updateMaxNonRange(max);
    this._onMinMaxOrStepChange();
  }
  _updateMaxRange(max) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    endInput.max = max.new;
    startInput.max = Math.min(max.new, endInput.value);
    endInput.min = startInput.value;
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    max.new > max.old ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMaxNonRange(max) {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.max = max;
      input._updateThumbUIByValue();
      this._updateTrackUI(input);
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  /** The values at which the thumb will snap. */
  get step() {
    return this._step;
  }
  set step(v) {
    const step = isNaN(v) ? this._step : v;
    if (this._step !== step) {
      this._updateStep(step);
    }
  }
  _step = 1;
  _updateStep(step) {
    this._step = step;
    this._isRange ? this._updateStepRange() : this._updateStepNonRange();
    this._onMinMaxOrStepChange();
  }
  _updateStepRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    const prevStartValue = startInput.value;
    endInput.min = this._min;
    startInput.max = this._max;
    endInput.step = this._step;
    startInput.step = this._step;
    if (this._platform.SAFARI) {
      endInput.value = endInput.value;
      startInput.value = startInput.value;
    }
    endInput.min = Math.max(this._min, startInput.value);
    startInput.max = Math.min(this._max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    endInput.value < prevStartValue ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateStepNonRange() {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.step = this._step;
      if (this._platform.SAFARI) {
        input.value = input.value;
      }
      input._updateThumbUIByValue();
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  /**
   * Function that will be used to format the value before it is displayed
   * in the thumb label. Can be used to format very large number in order
   * for them to fit into the slider thumb.
   */
  displayWith = (value) => `${value}`;
  /** Used to keep track of & render the active & inactive tick marks on the slider track. */
  _tickMarks;
  /** Whether animations have been disabled. */
  _noopAnimations = _animationsDisabled();
  /** Subscription to changes to the directionality (LTR / RTL) context for the application. */
  _dirChangeSubscription;
  /** Observer used to monitor size changes in the slider. */
  _resizeObserver;
  // Stored dimensions to avoid calling getBoundingClientRect redundantly.
  _cachedWidth;
  _cachedLeft;
  _rippleRadius = 24;
  // The value indicator tooltip text for the visual slider thumb(s).
  /** @docs-private */
  startValueIndicatorText = "";
  /** @docs-private */
  endValueIndicatorText = "";
  // Used to control the translateX of the visual slider thumb(s).
  _endThumbTransform;
  _startThumbTransform;
  _isRange = false;
  /** Whether the slider is rtl. */
  _isRtl = false;
  _hasViewInitialized = false;
  /**
   * The width of the tick mark track.
   * The tick mark track width is different from full track width
   */
  _tickMarkTrackWidth = 0;
  _hasAnimation = false;
  _resizeTimer = null;
  _platform = inject(Platform);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    if (this._dir) {
      this._dirChangeSubscription = this._dir.change.subscribe(() => this._onDirChange());
      this._isRtl = this._dir.value === "rtl";
    }
  }
  /** The radius of the native slider's knob. AFAIK there is no way to avoid hardcoding this. */
  _knobRadius = 8;
  _inputPadding;
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._updateDimensions();
    }
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    this._isRange = !!eInput && !!sInput;
    this._cdr.detectChanges();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      _validateInputs(this._isRange, this._getInput(_MatThumb.END), this._getInput(_MatThumb.START));
    }
    const thumb = this._getThumb(_MatThumb.END);
    this._rippleRadius = thumb._ripple.radius;
    this._inputPadding = this._rippleRadius - this._knobRadius;
    this._isRange ? this._initUIRange(eInput, sInput) : this._initUINonRange(eInput);
    this._updateTrackUI(eInput);
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._observeHostResize();
    this._cdr.detectChanges();
  }
  _initUINonRange(eInput) {
    eInput.initProps();
    eInput.initUI();
    this._updateValueIndicatorUI(eInput);
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
  }
  _initUIRange(eInput, sInput) {
    eInput.initProps();
    eInput.initUI();
    sInput.initProps();
    sInput.initUI();
    eInput._updateMinMax();
    sInput._updateMinMax();
    eInput._updateStaticStyles();
    sInput._updateStaticStyles();
    this._updateValueIndicatorUIs();
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
    sInput._updateThumbUIByValue();
  }
  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
    this._resizeObserver?.disconnect();
    this._resizeObserver = null;
  }
  /** Handles updating the slider ui after a dir change. */
  _onDirChange() {
    this._isRtl = this._dir?.value === "rtl";
    this._isRange ? this._onDirChangeRange() : this._onDirChangeNonRange();
    this._updateTickMarkUI();
  }
  _onDirChangeRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    endInput._setIsLeftThumb();
    startInput._setIsLeftThumb();
    endInput.translateX = endInput._calcTranslateXByValue();
    startInput.translateX = startInput._calcTranslateXByValue();
    endInput._updateStaticStyles();
    startInput._updateStaticStyles();
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    endInput._updateThumbUIByValue();
    startInput._updateThumbUIByValue();
  }
  _onDirChangeNonRange() {
    const input = this._getInput(_MatThumb.END);
    input._updateThumbUIByValue();
  }
  /** Starts observing and updating the slider if the host changes its size. */
  _observeHostResize() {
    if (typeof ResizeObserver === "undefined" || !ResizeObserver) {
      return;
    }
    this._ngZone.runOutsideAngular(() => {
      this._resizeObserver = new ResizeObserver(() => {
        if (this._isActive()) {
          return;
        }
        if (this._resizeTimer) {
          clearTimeout(this._resizeTimer);
        }
        this._onResize();
      });
      this._resizeObserver.observe(this._elementRef.nativeElement);
    });
  }
  /** Whether any of the thumbs are currently active. */
  _isActive() {
    return this._getThumb(_MatThumb.START)._isActive || this._getThumb(_MatThumb.END)._isActive;
  }
  _getValue(thumbPosition = _MatThumb.END) {
    const input = this._getInput(thumbPosition);
    if (!input) {
      return this.min;
    }
    return input.value;
  }
  _skipUpdate() {
    return !!(this._getInput(_MatThumb.START)?._skipUIUpdate || this._getInput(_MatThumb.END)?._skipUIUpdate);
  }
  /** Stores the slider dimensions. */
  _updateDimensions() {
    this._cachedWidth = this._elementRef.nativeElement.offsetWidth;
    this._cachedLeft = this._elementRef.nativeElement.getBoundingClientRect().left;
  }
  /** Sets the styles for the active portion of the track. */
  _setTrackActiveStyles(styles) {
    const trackStyle = this._trackActive.nativeElement.style;
    trackStyle.left = styles.left;
    trackStyle.right = styles.right;
    trackStyle.transformOrigin = styles.transformOrigin;
    trackStyle.transform = styles.transform;
  }
  /** Returns the translateX positioning for a tick mark based on it's index. */
  _calcTickMarkTransform(index) {
    const offset = index * (this._tickMarkTrackWidth / (this._tickMarks.length - 1));
    const translateX = this._isRtl ? this._cachedWidth - 6 - offset : offset;
    return `translateX(${translateX}px`;
  }
  // Handlers for updating the slider ui.
  _onTranslateXChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateThumbUI(source);
    this._updateTrackUI(source);
    this._updateOverlappingThumbUI(source);
  }
  _onTranslateXChangeBySideEffect(input1, input2) {
    if (!this._hasViewInitialized) {
      return;
    }
    input1._updateThumbUIByValue();
    input2._updateThumbUIByValue();
  }
  _onValueChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateValueIndicatorUI(source);
    this._updateTickMarkUI();
    this._cdr.detectChanges();
  }
  _onMinMaxOrStepChange() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.markForCheck();
  }
  _onResize() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateDimensions();
    if (this._isRange) {
      const eInput = this._getInput(_MatThumb.END);
      const sInput = this._getInput(_MatThumb.START);
      eInput._updateThumbUIByValue();
      sInput._updateThumbUIByValue();
      eInput._updateStaticStyles();
      sInput._updateStaticStyles();
      eInput._updateMinMax();
      sInput._updateMinMax();
      eInput._updateWidthInactive();
      sInput._updateWidthInactive();
    } else {
      const eInput = this._getInput(_MatThumb.END);
      if (eInput) {
        eInput._updateThumbUIByValue();
      }
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.detectChanges();
  }
  /** Whether or not the slider thumbs overlap. */
  _thumbsOverlap = false;
  /** Returns true if the slider knobs are overlapping one another. */
  _areThumbsOverlapping() {
    const startInput = this._getInput(_MatThumb.START);
    const endInput = this._getInput(_MatThumb.END);
    if (!startInput || !endInput) {
      return false;
    }
    return endInput.translateX - startInput.translateX < 20;
  }
  /**
   * Updates the class names of overlapping slider thumbs so
   * that the current active thumb is styled to be on "top".
   */
  _updateOverlappingThumbClassNames(source) {
    const sibling = source.getSibling();
    const sourceThumb = this._getThumb(source.thumbPosition);
    const siblingThumb = this._getThumb(sibling.thumbPosition);
    siblingThumb._hostElement.classList.remove("mdc-slider__thumb--top");
    sourceThumb._hostElement.classList.toggle("mdc-slider__thumb--top", this._thumbsOverlap);
  }
  /** Updates the UI of slider thumbs when they begin or stop overlapping. */
  _updateOverlappingThumbUI(source) {
    if (!this._isRange || this._skipUpdate()) {
      return;
    }
    if (this._thumbsOverlap !== this._areThumbsOverlapping()) {
      this._thumbsOverlap = !this._thumbsOverlap;
      this._updateOverlappingThumbClassNames(source);
    }
  }
  // _MatThumb styles update conditions
  //
  // 1. TranslateX, resize, or dir change
  //    - Reason: The thumb styles need to be updated according to the new translateX.
  // 2. Min, max, or step
  //    - Reason: The value may have silently changed.
  /** Updates the translateX of the given thumb. */
  _updateThumbUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const thumb = this._getThumb(source.thumbPosition === _MatThumb.END ? _MatThumb.END : _MatThumb.START);
    thumb._hostElement.style.transform = `translateX(${source.translateX}px)`;
  }
  // Value indicator text update conditions
  //
  // 1. Value
  //    - Reason: The value displayed needs to be updated.
  // 2. Min, max, or step
  //    - Reason: The value may have silently changed.
  /** Updates the value indicator tooltip ui for the given thumb. */
  _updateValueIndicatorUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const valuetext = this.displayWith(source.value);
    this._hasViewInitialized ? source._valuetext.set(valuetext) : source._hostElement.setAttribute("aria-valuetext", valuetext);
    if (this.discrete) {
      source.thumbPosition === _MatThumb.START ? this.startValueIndicatorText = valuetext : this.endValueIndicatorText = valuetext;
      const visualThumb = this._getThumb(source.thumbPosition);
      valuetext.length < 3 ? visualThumb._hostElement.classList.add("mdc-slider__thumb--short-value") : visualThumb._hostElement.classList.remove("mdc-slider__thumb--short-value");
    }
  }
  /** Updates all value indicator UIs in the slider. */
  _updateValueIndicatorUIs() {
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    if (eInput) {
      this._updateValueIndicatorUI(eInput);
    }
    if (sInput) {
      this._updateValueIndicatorUI(sInput);
    }
  }
  // Update Tick Mark Track Width
  //
  // 1. Min, max, or step
  //    - Reason: The maximum reachable value may have changed.
  //    - Side note: The maximum reachable value is different from the maximum value set by the
  //      user. For example, a slider with [min: 5, max: 100, step: 10] would have a maximum
  //      reachable value of 95.
  // 2. Resize
  //    - Reason: The position for the maximum reachable value needs to be recalculated.
  /** Updates the width of the tick mark track. */
  _updateTickMarkTrackUI() {
    if (!this.showTickMarks || this._skipUpdate()) {
      return;
    }
    const step = this._step && this._step > 0 ? this._step : 1;
    const maxValue = Math.floor(this.max / step) * step;
    const percentage = (maxValue - this.min) / (this.max - this.min);
    this._tickMarkTrackWidth = (this._cachedWidth - 6) * percentage;
  }
  // Track active update conditions
  //
  // 1. TranslateX
  //    - Reason: The track active should line up with the new thumb position.
  // 2. Min or max
  //    - Reason #1: The 'active' percentage needs to be recalculated.
  //    - Reason #2: The value may have silently changed.
  // 3. Step
  //    - Reason: The value may have silently changed causing the thumb(s) to shift.
  // 4. Dir change
  //    - Reason: The track active will need to be updated according to the new thumb position(s).
  // 5. Resize
  //    - Reason: The total width the 'active' tracks translateX is based on has changed.
  /** Updates the scale on the active portion of the track. */
  _updateTrackUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    this._isRange ? this._updateTrackUIRange(source) : this._updateTrackUINonRange(source);
  }
  _updateTrackUIRange(source) {
    const sibling = source.getSibling();
    if (!sibling || !this._cachedWidth) {
      return;
    }
    const activePercentage = Math.abs(sibling.translateX - source.translateX) / this._cachedWidth;
    if (source._isLeftThumb && this._cachedWidth) {
      this._setTrackActiveStyles({
        left: "auto",
        right: `${this._cachedWidth - sibling.translateX}px`,
        transformOrigin: "right",
        transform: `scaleX(${activePercentage})`
      });
    } else {
      this._setTrackActiveStyles({
        left: `${sibling.translateX}px`,
        right: "auto",
        transformOrigin: "left",
        transform: `scaleX(${activePercentage})`
      });
    }
  }
  _updateTrackUINonRange(source) {
    this._isRtl ? this._setTrackActiveStyles({
      left: "auto",
      right: "0px",
      transformOrigin: "right",
      transform: `scaleX(${1 - source.fillPercentage})`
    }) : this._setTrackActiveStyles({
      left: "0px",
      right: "auto",
      transformOrigin: "left",
      transform: `scaleX(${source.fillPercentage})`
    });
  }
  // Tick mark update conditions
  //
  // 1. Value
  //    - Reason: a tick mark which was once active might now be inactive or vice versa.
  // 2. Min, max, or step
  //    - Reason #1: the number of tick marks may have changed.
  //    - Reason #2: The value may have silently changed.
  /** Updates the dots along the slider track. */
  _updateTickMarkUI() {
    if (!this.showTickMarks || this.step === void 0 || this.min === void 0 || this.max === void 0) {
      return;
    }
    const step = this.step > 0 ? this.step : 1;
    this._isRange ? this._updateTickMarkUIRange(step) : this._updateTickMarkUINonRange(step);
  }
  _updateTickMarkUINonRange(step) {
    const value = this._getValue();
    let numActive = Math.max(Math.round((value - this.min) / step), 0) + 1;
    let numInactive = Math.max(Math.round((this.max - value) / step), 0) - 1;
    this._isRtl ? numActive++ : numInactive++;
    this._tickMarks = Array(numActive).fill(_MatTickMark.ACTIVE).concat(Array(numInactive).fill(_MatTickMark.INACTIVE));
  }
  _updateTickMarkUIRange(step) {
    const endValue = this._getValue();
    const startValue = this._getValue(_MatThumb.START);
    const numInactiveBeforeStartThumb = Math.max(Math.round((startValue - this.min) / step), 0);
    const numActive = Math.max(Math.round((endValue - startValue) / step) + 1, 0);
    const numInactiveAfterEndThumb = Math.max(Math.round((this.max - endValue) / step), 0);
    this._tickMarks = Array(numInactiveBeforeStartThumb).fill(_MatTickMark.INACTIVE).concat(Array(numActive).fill(_MatTickMark.ACTIVE), Array(numInactiveAfterEndThumb).fill(_MatTickMark.INACTIVE));
  }
  /** Gets the slider thumb input of the given thumb position. */
  _getInput(thumbPosition) {
    if (thumbPosition === _MatThumb.END && this._input) {
      return this._input;
    }
    if (this._inputs?.length) {
      return thumbPosition === _MatThumb.START ? this._inputs.first : this._inputs.last;
    }
    return;
  }
  /** Gets the slider thumb HTML input element of the given thumb position. */
  _getThumb(thumbPosition) {
    return thumbPosition === _MatThumb.END ? this._thumbs?.last : this._thumbs?.first;
  }
  _setTransition(withAnimation) {
    this._hasAnimation = !this._platform.IOS && withAnimation && !this._noopAnimations;
    this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation", this._hasAnimation);
  }
  /** Whether the given pointer event occurred within the bounds of the slider pointer's DOM Rect. */
  _isCursorOnSliderThumb(event, rect) {
    const radius = rect.width / 2;
    const centerX = rect.x + radius;
    const centerY = rect.y + radius;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    return Math.pow(dx, 2) + Math.pow(dy, 2) < Math.pow(radius, 2);
  }
  static \u0275fac = function MatSlider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlider)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSlider,
    selectors: [["mat-slider"]],
    contentQueries: function MatSlider_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_SLIDER_THUMB, 5);
        \u0275\u0275contentQuery(dirIndex, MAT_SLIDER_RANGE_THUMB, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._input = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputs = _t);
      }
    },
    viewQuery: function MatSlider_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c22, 5);
        \u0275\u0275viewQuery(MAT_SLIDER_VISUAL_THUMB, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._trackActive = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._thumbs = _t);
      }
    },
    hostAttrs: [1, "mat-mdc-slider", "mdc-slider"],
    hostVars: 12,
    hostBindings: function MatSlider_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
        \u0275\u0275classProp("mdc-slider--range", ctx._isRange)("mdc-slider--disabled", ctx.disabled)("mdc-slider--discrete", ctx.discrete)("mdc-slider--tick-marks", ctx.showTickMarks)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      discrete: [2, "discrete", "discrete", booleanAttribute],
      showTickMarks: [2, "showTickMarks", "showTickMarks", booleanAttribute],
      min: [2, "min", "min", numberAttribute],
      color: "color",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      max: [2, "max", "max", numberAttribute],
      step: [2, "step", "step", numberAttribute],
      displayWith: "displayWith"
    },
    exportAs: ["matSlider"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SLIDER,
      useExisting: _MatSlider
    }])],
    ngContentSelectors: _c32,
    decls: 9,
    vars: 5,
    consts: [["trackActive", ""], ["tickMarkContainer", ""], [1, "mdc-slider__track"], [1, "mdc-slider__track--inactive"], [1, "mdc-slider__track--active"], [1, "mdc-slider__track--active_fill"], [1, "mdc-slider__tick-marks"], [3, "discrete", "thumbPosition", "valueIndicatorText"], [3, "class", "transform"]],
    template: function MatSlider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 2);
        \u0275\u0275element(2, "div", 3);
        \u0275\u0275elementStart(3, "div", 4);
        \u0275\u0275element(4, "div", 5, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, MatSlider_Conditional_6_Template, 3, 1, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, MatSlider_Conditional_7_Template, 1, 3, "mat-slider-visual-thumb", 7);
        \u0275\u0275element(8, "mat-slider-visual-thumb", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.showTickMarks ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._isRange ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("discrete", ctx.discrete)("thumbPosition", 2)("valueIndicatorText", ctx.endValueIndicatorText);
      }
    },
    dependencies: [MatSliderVisualThumb],
    styles: ['.mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%;pointer-events:none;height:var(--mat-slider-inactive-track-height, 4px)}.mdc-slider__track--active,.mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider__track--active{overflow:hidden;border-radius:var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));height:var(--mat-slider-active-track-height, 4px);top:calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px))/2)}.mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;transform-origin:left;transition:transform 80ms ease;border-color:var(--mat-slider-active-track-color, var(--mat-sys-primary));border-top-width:var(--mat-slider-active-track-height, 4px)}.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface))}[dir=rtl] .mdc-slider__track--active_fill{-webkit-transform-origin:right;transform-origin:right}.mdc-slider__track--inactive{left:0;top:0;opacity:.24;background-color:var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));height:var(--mat-slider-inactive-track-height, 4px);border-radius:var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full))}.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));opacity:.24}.mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__track--inactive::before{border-color:CanvasText}}.mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg))}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider__value-indicator{display:flex;align-items:center;transform:scale(0);transform-origin:var(--mat-slider-value-indicator-transform-origin, 0 28px);transition:transform 100ms cubic-bezier(0.4, 0, 1, 1);word-break:normal;background-color:var(--mat-slider-label-container-color, var(--mat-sys-primary));color:var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));width:var(--mat-slider-value-indicator-width, 28px);height:var(--mat-slider-value-indicator-height, 28px);padding:var(--mat-slider-value-indicator-padding, 0);opacity:var(--mat-slider-value-indicator-opacity, 1);border-radius:var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}.mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;display:var(--mat-slider-value-indicator-caret-display, none);border-top-color:var(--mat-slider-label-container-color, var(--mat-sys-primary))}.mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__value-indicator::after{border-color:CanvasText}}.mdc-slider__value-indicator-text{text-align:center;width:var(--mat-slider-value-indicator-width, 28px);transform:var(--mat-slider-value-indicator-text-transform, rotate(45deg));font-family:var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));font-size:var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));font-weight:var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));line-height:var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));letter-spacing:var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking))}.mdc-slider__thumb{-webkit-user-select:none;user-select:none;display:flex;left:-24px;outline:none;position:absolute;height:48px;width:48px;pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb{transition:transform 80ms ease}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__thumb--top{z-index:1}.mdc-slider__thumb-knob{position:absolute;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%, -50%);border-style:solid;width:var(--mat-slider-handle-width, 20px);height:var(--mat-slider-handle-height, 20px);border-width:calc(var(--mat-slider-handle-height, 20px)/2) calc(var(--mat-slider-handle-width, 20px)/2);box-shadow:var(--mat-slider-handle-elevation, var(--mat-sys-level1));background-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-radius:var(--mat-slider-handle-shape, var(--mat-sys-corner-full))}.mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary))}.mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary))}.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));border-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface))}.mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border:solid 1px #fff;box-sizing:content-box;border-color:var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));border-width:var(--mat-slider-with-overlap-handle-outline-width, 1px)}.mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider__tick-mark--active,.mdc-slider__tick-mark--inactive{width:var(--mat-slider-with-tick-marks-container-size, 2px);height:var(--mat-slider-with-tick-marks-container-size, 2px);border-radius:var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full))}.mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant))}.mdc-slider--disabled .mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface))}.mdc-slider__tick-mark--active{opacity:var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary))}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;position:absolute;top:2px;width:44px;box-sizing:content-box}.mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;cursor:pointer;height:48px;margin:0 8px;position:relative;touch-action:pan-y;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider.mdc-slider--disabled{cursor:auto;opacity:.38}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input{cursor:auto}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-slider-ripple-color, var(--mat-sys-primary))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent))}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-focus-indicator::before{border-radius:50%}.mdc-slider__thumb--focused .mat-focus-indicator::before{content:""}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlider, [{
    type: Component,
    args: [{
      selector: "mat-slider",
      host: {
        "class": "mat-mdc-slider mdc-slider",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mdc-slider--range]": "_isRange",
        "[class.mdc-slider--disabled]": "disabled",
        "[class.mdc-slider--discrete]": "discrete",
        "[class.mdc-slider--tick-marks]": "showTickMarks",
        "[class._mat-animation-noopable]": "_noopAnimations"
      },
      exportAs: "matSlider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_SLIDER,
        useExisting: MatSlider
      }],
      imports: [MatSliderVisualThumb],
      template: `<!-- Inputs -->
<ng-content></ng-content>

<!-- Track -->
<div class="mdc-slider__track">
  <div class="mdc-slider__track--inactive"></div>
  <div class="mdc-slider__track--active">
    <div #trackActive class="mdc-slider__track--active_fill"></div>
  </div>
  @if (showTickMarks) {
    <div class="mdc-slider__tick-marks" #tickMarkContainer>
      @if (_cachedWidth) {
        @for (tickMark of _tickMarks; track i; let i = $index) {
          <div
            [class]="tickMark === 0 ? 'mdc-slider__tick-mark--active' : 'mdc-slider__tick-mark--inactive'"
            [style.transform]="_calcTickMarkTransform(i)"></div>
        }
      }
    </div>
  }
</div>

<!-- Thumbs -->
@if (_isRange) {
  <mat-slider-visual-thumb
    [discrete]="discrete"
    [thumbPosition]="1"
    [valueIndicatorText]="startValueIndicatorText">
  </mat-slider-visual-thumb>
}

<mat-slider-visual-thumb
  [discrete]="discrete"
  [thumbPosition]="2"
  [valueIndicatorText]="endValueIndicatorText">
</mat-slider-visual-thumb>
`,
      styles: ['.mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%;pointer-events:none;height:var(--mat-slider-inactive-track-height, 4px)}.mdc-slider__track--active,.mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider__track--active{overflow:hidden;border-radius:var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));height:var(--mat-slider-active-track-height, 4px);top:calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px))/2)}.mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;transform-origin:left;transition:transform 80ms ease;border-color:var(--mat-slider-active-track-color, var(--mat-sys-primary));border-top-width:var(--mat-slider-active-track-height, 4px)}.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface))}[dir=rtl] .mdc-slider__track--active_fill{-webkit-transform-origin:right;transform-origin:right}.mdc-slider__track--inactive{left:0;top:0;opacity:.24;background-color:var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));height:var(--mat-slider-inactive-track-height, 4px);border-radius:var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full))}.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));opacity:.24}.mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__track--inactive::before{border-color:CanvasText}}.mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg))}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider__value-indicator{display:flex;align-items:center;transform:scale(0);transform-origin:var(--mat-slider-value-indicator-transform-origin, 0 28px);transition:transform 100ms cubic-bezier(0.4, 0, 1, 1);word-break:normal;background-color:var(--mat-slider-label-container-color, var(--mat-sys-primary));color:var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));width:var(--mat-slider-value-indicator-width, 28px);height:var(--mat-slider-value-indicator-height, 28px);padding:var(--mat-slider-value-indicator-padding, 0);opacity:var(--mat-slider-value-indicator-opacity, 1);border-radius:var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}.mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;display:var(--mat-slider-value-indicator-caret-display, none);border-top-color:var(--mat-slider-label-container-color, var(--mat-sys-primary))}.mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__value-indicator::after{border-color:CanvasText}}.mdc-slider__value-indicator-text{text-align:center;width:var(--mat-slider-value-indicator-width, 28px);transform:var(--mat-slider-value-indicator-text-transform, rotate(45deg));font-family:var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));font-size:var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));font-weight:var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));line-height:var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));letter-spacing:var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking))}.mdc-slider__thumb{-webkit-user-select:none;user-select:none;display:flex;left:-24px;outline:none;position:absolute;height:48px;width:48px;pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb{transition:transform 80ms ease}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__thumb--top{z-index:1}.mdc-slider__thumb-knob{position:absolute;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%, -50%);border-style:solid;width:var(--mat-slider-handle-width, 20px);height:var(--mat-slider-handle-height, 20px);border-width:calc(var(--mat-slider-handle-height, 20px)/2) calc(var(--mat-slider-handle-width, 20px)/2);box-shadow:var(--mat-slider-handle-elevation, var(--mat-sys-level1));background-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-radius:var(--mat-slider-handle-shape, var(--mat-sys-corner-full))}.mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary))}.mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary))}.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));border-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface))}.mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border:solid 1px #fff;box-sizing:content-box;border-color:var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));border-width:var(--mat-slider-with-overlap-handle-outline-width, 1px)}.mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider__tick-mark--active,.mdc-slider__tick-mark--inactive{width:var(--mat-slider-with-tick-marks-container-size, 2px);height:var(--mat-slider-with-tick-marks-container-size, 2px);border-radius:var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full))}.mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant))}.mdc-slider--disabled .mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface))}.mdc-slider__tick-mark--active{opacity:var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary))}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;position:absolute;top:2px;width:44px;box-sizing:content-box}.mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;cursor:pointer;height:48px;margin:0 8px;position:relative;touch-action:pan-y;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider.mdc-slider--disabled{cursor:auto;opacity:.38}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input{cursor:auto}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-slider-ripple-color, var(--mat-sys-primary))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent))}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-focus-indicator::before{border-radius:50%}.mdc-slider__thumb--focused .mat-focus-indicator::before{content:""}\n']
    }]
  }], () => [], {
    _trackActive: [{
      type: ViewChild,
      args: ["trackActive"]
    }],
    _thumbs: [{
      type: ViewChildren,
      args: [MAT_SLIDER_VISUAL_THUMB]
    }],
    _input: [{
      type: ContentChild,
      args: [MAT_SLIDER_THUMB]
    }],
    _inputs: [{
      type: ContentChildren,
      args: [MAT_SLIDER_RANGE_THUMB, {
        descendants: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    discrete: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTickMarks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    displayWith: [{
      type: Input
    }]
  });
})();
function _validateInputs(isRange, endInputElement, startInputElement) {
  const startValid = !isRange || startInputElement?._hostElement.hasAttribute("matSliderStartThumb");
  const endValid = endInputElement?._hostElement.hasAttribute(isRange ? "matSliderEndThumb" : "matSliderThumb");
  if (!startValid || !endValid) {
    _throwInvalidInputConfigurationError();
  }
}
function _throwInvalidInputConfigurationError() {
  throw Error(`Invalid slider thumb input configuration!

   Valid configurations are as follows:

     <mat-slider>
       <input matSliderThumb>
     </mat-slider>

     or

     <mat-slider>
       <input matSliderStartThumb>
       <input matSliderEndThumb>
     </mat-slider>
   `);
}
var MAT_SLIDER_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderThumb),
  multi: true
};
var MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderRangeThumb),
  multi: true
};
var MatSliderThumb = class _MatSliderThumb {
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _cdr = inject(ChangeDetectorRef);
  _slider = inject(MAT_SLIDER);
  _platform = inject(Platform);
  _listenerCleanups;
  get value() {
    return numberAttribute(this._hostElement.value, 0);
  }
  set value(value) {
    if (value === null) {
      value = this._getDefaultValue();
    }
    value = isNaN(value) ? 0 : value;
    const stringValue = value + "";
    if (!this._hasSetInitialValue) {
      this._initialValue = stringValue;
      return;
    }
    if (this._isActive) {
      return;
    }
    this._setValue(stringValue);
  }
  /**
   * Handles programmatic value setting. This has been split out to
   * allow the range thumb to override it and add additional necessary logic.
   */
  _setValue(value) {
    this._hostElement.value = value;
    this._updateThumbUIByValue();
    this._slider._onValueChange(this);
    this._cdr.detectChanges();
    this._slider._cdr.markForCheck();
  }
  /** Event emitted when the `value` is changed. */
  valueChange = new EventEmitter();
  /** Event emitted when the slider thumb starts being dragged. */
  dragStart = new EventEmitter();
  /** Event emitted when the slider thumb stops being dragged. */
  dragEnd = new EventEmitter();
  /**
   * The current translateX in px of the slider visual thumb.
   * @docs-private
   */
  get translateX() {
    if (this._slider.min >= this._slider.max) {
      this._translateX = this._tickMarkOffset;
      return this._translateX;
    }
    if (this._translateX === void 0) {
      this._translateX = this._calcTranslateXByValue();
    }
    return this._translateX;
  }
  set translateX(v) {
    this._translateX = v;
  }
  _translateX;
  /**
   * Indicates whether this thumb is the start or end thumb.
   * @docs-private
   */
  thumbPosition = _MatThumb.END;
  /** @docs-private */
  get min() {
    return numberAttribute(this._hostElement.min, 0);
  }
  set min(v) {
    this._hostElement.min = v + "";
    this._cdr.detectChanges();
  }
  /** @docs-private */
  get max() {
    return numberAttribute(this._hostElement.max, 0);
  }
  set max(v) {
    this._hostElement.max = v + "";
    this._cdr.detectChanges();
  }
  get step() {
    return numberAttribute(this._hostElement.step, 0);
  }
  set step(v) {
    this._hostElement.step = v + "";
    this._cdr.detectChanges();
  }
  /** @docs-private */
  get disabled() {
    return booleanAttribute(this._hostElement.disabled);
  }
  set disabled(v) {
    this._hostElement.disabled = v;
    this._cdr.detectChanges();
    if (this._slider.disabled !== this.disabled) {
      this._slider.disabled = this.disabled;
    }
  }
  /** The percentage of the slider that coincides with the value. */
  get percentage() {
    if (this._slider.min >= this._slider.max) {
      return this._slider._isRtl ? 1 : 0;
    }
    return (this.value - this._slider.min) / (this._slider.max - this._slider.min);
  }
  /** @docs-private */
  get fillPercentage() {
    if (!this._slider._cachedWidth) {
      return this._slider._isRtl ? 1 : 0;
    }
    if (this._translateX === 0) {
      return 0;
    }
    return this.translateX / this._slider._cachedWidth;
  }
  /** The host native HTML input element. */
  _hostElement = this._elementRef.nativeElement;
  /** The aria-valuetext string representation of the input's value. */
  _valuetext = signal("", ...ngDevMode ? [{
    debugName: "_valuetext"
  }] : []);
  /** The radius of a native html slider's knob. */
  _knobRadius = 8;
  /** The distance in px from the start of the slider track to the first tick mark. */
  _tickMarkOffset = 3;
  /** Whether user's cursor is currently in a mouse down state on the input. */
  _isActive = false;
  /** Whether the input is currently focused (either by tab or after clicking). */
  _isFocused = false;
  /** Used to relay updates to _isFocused to the slider visual thumbs. */
  _setIsFocused(v) {
    this._isFocused = v;
  }
  /**
   * Whether the initial value has been set.
   * This exists because the initial value cannot be immediately set because the min and max
   * must first be relayed from the parent MatSlider component, which can only happen later
   * in the component lifecycle.
   */
  _hasSetInitialValue = false;
  /** The stored initial value. */
  _initialValue;
  /** Defined when a user is using a form control to manage slider value & validation. */
  _formControl;
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /**
   * Indicates whether UI updates should be skipped.
   *
   * This flag is used to avoid flickering
   * when correcting values on pointer up/down.
   */
  _skipUIUpdate = false;
  /** Callback called when the slider input value changes. */
  _onChangeFn;
  /** Callback called when the slider input has been touched. */
  _onTouchedFn = () => {
  };
  /**
   * Whether the NgModel has been initialized.
   *
   * This flag is used to ignore ghost null calls to
   * writeValue which can break slider initialization.
   *
   * See https://github.com/angular/angular/issues/14988.
   */
  _isControlInitialized = false;
  constructor() {
    const renderer = inject(Renderer2);
    this._ngZone.runOutsideAngular(() => {
      this._listenerCleanups = [renderer.listen(this._hostElement, "pointerdown", this._onPointerDown.bind(this)), renderer.listen(this._hostElement, "pointermove", this._onPointerMove.bind(this)), renderer.listen(this._hostElement, "pointerup", this._onPointerUp.bind(this))];
    });
  }
  ngOnDestroy() {
    this._listenerCleanups.forEach((cleanup) => cleanup());
    this._destroyed.next();
    this._destroyed.complete();
    this.dragStart.complete();
    this.dragEnd.complete();
  }
  /** @docs-private */
  initProps() {
    this._updateWidthInactive();
    if (this.disabled !== this._slider.disabled) {
      this._slider.disabled = true;
    }
    this.step = this._slider.step;
    this.min = this._slider.min;
    this.max = this._slider.max;
    this._initValue();
  }
  /** @docs-private */
  initUI() {
    this._updateThumbUIByValue();
  }
  _initValue() {
    this._hasSetInitialValue = true;
    if (this._initialValue === void 0) {
      this.value = this._getDefaultValue();
    } else {
      this._hostElement.value = this._initialValue;
      this._updateThumbUIByValue();
      this._slider._onValueChange(this);
      this._cdr.detectChanges();
    }
  }
  _getDefaultValue() {
    return this.min;
  }
  _onBlur() {
    this._setIsFocused(false);
    this._onTouchedFn();
  }
  _onFocus() {
    this._slider._setTransition(false);
    this._slider._updateTrackUI(this);
    this._setIsFocused(true);
  }
  _onChange() {
    this.valueChange.emit(this.value);
    if (this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
  }
  _onInput() {
    this._onChangeFn?.(this.value);
    if (this._slider.step || !this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
    this._slider._onValueChange(this);
  }
  _onNgControlValueChange() {
    if (!this._isActive || !this._isFocused) {
      this._slider._onValueChange(this);
      this._updateThumbUIByValue();
    }
    this._slider.disabled = this._formControl.disabled;
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._platform.IOS) {
      const isCursorOnSliderThumb = this._slider._isCursorOnSliderThumb(event, this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());
      this._isActive = isCursorOnSliderThumb;
      this._updateWidthActive();
      this._slider._updateDimensions();
      return;
    }
    this._isActive = true;
    this._setIsFocused(true);
    this._updateWidthActive();
    this._slider._updateDimensions();
    if (!this._slider.step) {
      this._updateThumbUIByPointerEvent(event, {
        withAnimation: true
      });
    }
    if (!this.disabled) {
      this._handleValueCorrection(event);
      this.dragStart.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
    }
  }
  /**
   * Corrects the value of the slider on pointer up/down.
   *
   * Called on pointer down and up because the value is set based
   * on the inactive width instead of the active width.
   */
  _handleValueCorrection(event) {
    this._skipUIUpdate = true;
    setTimeout(() => {
      this._skipUIUpdate = false;
      this._fixValue(event);
    }, 0);
  }
  /** Corrects the value of the slider based on the pointer event's position. */
  _fixValue(event) {
    const xPos = event.clientX - this._slider._cachedLeft;
    const width = this._slider._cachedWidth;
    const step = this._slider.step === 0 ? 1 : this._slider.step;
    const numSteps = Math.floor((this._slider.max - this._slider.min) / step);
    const percentage = this._slider._isRtl ? 1 - xPos / width : xPos / width;
    const fixedPercentage = Math.round(percentage * numSteps) / numSteps;
    const impreciseValue = fixedPercentage * (this._slider.max - this._slider.min) + this._slider.min;
    const value = Math.round(impreciseValue / step) * step;
    const prevValue = this.value;
    if (value === prevValue) {
      this._slider._onValueChange(this);
      this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
        withAnimation: this._slider._hasAnimation
      });
      return;
    }
    this.value = value;
    this.valueChange.emit(this.value);
    this._onChangeFn?.(this.value);
    this._slider._onValueChange(this);
    this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
      withAnimation: this._slider._hasAnimation
    });
  }
  _onPointerMove(event) {
    if (!this._slider.step && this._isActive) {
      this._updateThumbUIByPointerEvent(event);
    }
  }
  _onPointerUp() {
    if (this._isActive) {
      this._isActive = false;
      if (this._platform.SAFARI) {
        this._setIsFocused(false);
      }
      this.dragEnd.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
      setTimeout(() => this._updateWidthInactive(), this._platform.IOS ? 10 : 0);
    }
  }
  _clamp(v) {
    const min = this._tickMarkOffset;
    const max = this._slider._cachedWidth - this._tickMarkOffset;
    return Math.max(Math.min(v, max), min);
  }
  _calcTranslateXByValue() {
    if (this._slider._isRtl) {
      return (1 - this.percentage) * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
    }
    return this.percentage * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
  }
  _calcTranslateXByPointerEvent(event) {
    return event.clientX - this._slider._cachedLeft;
  }
  /**
   * Used to set the slider width to the correct
   * dimensions while the user is dragging.
   */
  _updateWidthActive() {
  }
  /**
   * Sets the slider input to disproportionate dimensions to allow for touch
   * events to be captured on touch devices.
   */
  _updateWidthInactive() {
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
    this._hostElement.style.width = `calc(100% + ${this._slider._inputPadding - this._tickMarkOffset * 2}px)`;
    this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
  }
  _updateThumbUIByValue(options) {
    this.translateX = this._clamp(this._calcTranslateXByValue());
    this._updateThumbUI(options);
  }
  _updateThumbUIByPointerEvent(event, options) {
    this.translateX = this._clamp(this._calcTranslateXByPointerEvent(event));
    this._updateThumbUI(options);
  }
  _updateThumbUI(options) {
    this._slider._setTransition(!!options?.withAnimation);
    this._slider._onTranslateXChange(this);
  }
  /**
   * Sets the input's value.
   * @param value The new value of the input
   * @docs-private
   */
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
    }
  }
  /**
   * Registers a callback to be invoked when the input's value changes from user input.
   * @param fn The callback to register
   * @docs-private
   */
  registerOnChange(fn) {
    this._onChangeFn = fn;
    this._isControlInitialized = true;
  }
  /**
   * Registers a callback to be invoked when the input is blurred by the user.
   * @param fn The callback to register
   * @docs-private
   */
  registerOnTouched(fn) {
    this._onTouchedFn = fn;
  }
  /**
   * Sets the disabled state of the slider.
   * @param isDisabled The new disabled state
   * @docs-private
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  focus() {
    this._hostElement.focus();
  }
  blur() {
    this._hostElement.blur();
  }
  static \u0275fac = function MatSliderThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderThumb)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSliderThumb,
    selectors: [["input", "matSliderThumb", ""]],
    hostAttrs: ["type", "range", 1, "mdc-slider__input"],
    hostVars: 1,
    hostBindings: function MatSliderThumb_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function MatSliderThumb_change_HostBindingHandler() {
          return ctx._onChange();
        })("input", function MatSliderThumb_input_HostBindingHandler() {
          return ctx._onInput();
        })("blur", function MatSliderThumb_blur_HostBindingHandler() {
          return ctx._onBlur();
        })("focus", function MatSliderThumb_focus_HostBindingHandler() {
          return ctx._onFocus();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuetext", ctx._valuetext());
      }
    },
    inputs: {
      value: [2, "value", "value", numberAttribute]
    },
    outputs: {
      valueChange: "valueChange",
      dragStart: "dragStart",
      dragEnd: "dragEnd"
    },
    exportAs: ["matSliderThumb"],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_THUMB,
      useExisting: _MatSliderThumb
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderThumb]",
      exportAs: "matSliderThumb",
      host: {
        "class": "mdc-slider__input",
        "type": "range",
        "[attr.aria-valuetext]": "_valuetext()",
        "(change)": "_onChange()",
        "(input)": "_onInput()",
        // TODO(wagnermaciel): Consider using a global event listener instead.
        // Reason: I have found a semi-consistent way to mouse up without triggering this event.
        "(blur)": "_onBlur()",
        "(focus)": "_onFocus()"
      },
      providers: [MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_THUMB,
        useExisting: MatSliderThumb
      }]
    }]
  }], () => [], {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    valueChange: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }]
  });
})();
var MatSliderRangeThumb = class _MatSliderRangeThumb extends MatSliderThumb {
  _cdr = inject(ChangeDetectorRef);
  /** @docs-private */
  getSibling() {
    if (!this._sibling) {
      this._sibling = this._slider._getInput(this._isEndThumb ? _MatThumb.START : _MatThumb.END);
    }
    return this._sibling;
  }
  _sibling;
  /**
   * Returns the minimum translateX position allowed for this slider input's visual thumb.
   * @docs-private
   */
  getMinPos() {
    const sibling = this.getSibling();
    if (!this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._tickMarkOffset;
  }
  /**
   * Returns the maximum translateX position allowed for this slider input's visual thumb.
   * @docs-private
   */
  getMaxPos() {
    const sibling = this.getSibling();
    if (this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._slider._cachedWidth - this._tickMarkOffset;
  }
  _setIsLeftThumb() {
    this._isLeftThumb = this._isEndThumb && this._slider._isRtl || !this._isEndThumb && !this._slider._isRtl;
  }
  /** Whether this slider corresponds to the input on the left hand side. */
  _isLeftThumb;
  /** Whether this slider corresponds to the input with greater value. */
  _isEndThumb;
  constructor() {
    super();
    this._isEndThumb = this._hostElement.hasAttribute("matSliderEndThumb");
    this._setIsLeftThumb();
    this.thumbPosition = this._isEndThumb ? _MatThumb.END : _MatThumb.START;
  }
  _getDefaultValue() {
    return this._isEndThumb && this._slider._isRange ? this.max : this.min;
  }
  _onInput() {
    super._onInput();
    this._updateSibling();
    if (!this._isActive) {
      this._updateWidthInactive();
    }
  }
  _onNgControlValueChange() {
    super._onNgControlValueChange();
    this.getSibling()?._updateMinMax();
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._sibling) {
      this._sibling._updateWidthActive();
      this._sibling._hostElement.classList.add("mat-mdc-slider-input-no-pointer-events");
    }
    super._onPointerDown(event);
  }
  _onPointerUp() {
    super._onPointerUp();
    if (this._sibling) {
      setTimeout(() => {
        this._sibling._updateWidthInactive();
        this._sibling._hostElement.classList.remove("mat-mdc-slider-input-no-pointer-events");
      });
    }
  }
  _onPointerMove(event) {
    super._onPointerMove(event);
    if (!this._slider.step && this._isActive) {
      this._updateSibling();
    }
  }
  _fixValue(event) {
    super._fixValue(event);
    this._sibling?._updateMinMax();
  }
  _clamp(v) {
    return Math.max(Math.min(v, this.getMaxPos()), this.getMinPos());
  }
  _updateMinMax() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    if (this._isEndThumb) {
      this.min = Math.max(this._slider.min, sibling.value);
      this.max = this._slider.max;
    } else {
      this.min = this._slider.min;
      this.max = Math.min(this._slider.max, sibling.value);
    }
  }
  _updateWidthActive() {
    const minWidth = this._slider._rippleRadius * 2 - this._slider._inputPadding * 2;
    const maxWidth = this._slider._cachedWidth + this._slider._inputPadding - minWidth - this._tickMarkOffset * 2;
    const percentage = this._slider.min < this._slider.max ? (this.max - this.min) / (this._slider.max - this._slider.min) : 1;
    const width = maxWidth * percentage + minWidth;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
  }
  _updateWidthInactive() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    const maxWidth = this._slider._cachedWidth - this._tickMarkOffset * 2;
    const midValue = this._isEndThumb ? this.value - (this.value - sibling.value) / 2 : this.value + (sibling.value - this.value) / 2;
    const _percentage = this._isEndThumb ? (this.max - midValue) / (this._slider.max - this._slider.min) : (midValue - this.min) / (this._slider.max - this._slider.min);
    const percentage = this._slider.min < this._slider.max ? _percentage : 1;
    let ripplePadding = this._slider._rippleRadius;
    if (percentage === 1) {
      ripplePadding = 48;
    } else if (percentage === 0) {
      ripplePadding = 0;
    }
    const width = maxWidth * percentage + ripplePadding;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = "0px";
    if (this._isLeftThumb) {
      this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
      this._hostElement.style.right = "auto";
    } else {
      this._hostElement.style.left = "auto";
      this._hostElement.style.right = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
    }
  }
  _updateStaticStyles() {
    this._hostElement.classList.toggle("mat-slider__right-input", !this._isLeftThumb);
  }
  _updateSibling() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    sibling._updateMinMax();
    if (this._isActive) {
      sibling._updateWidthActive();
    } else {
      sibling._updateWidthInactive();
    }
  }
  /**
   * Sets the input's value.
   * @param value The new value of the input
   * @docs-private
   */
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
      this._updateWidthInactive();
      this._updateSibling();
    }
  }
  _setValue(value) {
    super._setValue(value);
    this._updateWidthInactive();
    this._updateSibling();
  }
  static \u0275fac = function MatSliderRangeThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderRangeThumb)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSliderRangeThumb,
    selectors: [["input", "matSliderStartThumb", ""], ["input", "matSliderEndThumb", ""]],
    exportAs: ["matSliderRangeThumb"],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_RANGE_THUMB,
      useExisting: _MatSliderRangeThumb
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderRangeThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderStartThumb], input[matSliderEndThumb]",
      exportAs: "matSliderRangeThumb",
      providers: [MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_RANGE_THUMB,
        useExisting: MatSliderRangeThumb
      }]
    }]
  }], () => [], null);
})();
var MatSliderModule = class _MatSliderModule {
  static \u0275fac = function MatSliderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSliderModule,
    imports: [MatCommonModule, MatRippleModule, MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb],
    exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatRippleModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb],
      exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb]
    }]
  }], null, null);
})();

// src/app/player/components/audio-player/audio-player.component.ts
var _c03 = ["audio"];
function AudioPlayerComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "button", 11);
    \u0275\u0275listener("click", function AudioPlayerComponent_Conditional_22_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.play());
    });
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                ");
  }
}
function AudioPlayerComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "button", 11);
    \u0275\u0275listener("click", function AudioPlayerComponent_Conditional_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stop());
    });
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "pause");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                ");
  }
}
function AudioPlayerComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275element(3, "span", 13);
    \u0275\u0275text(4, "\n                        ");
    \u0275\u0275element(5, "span", 14);
    \u0275\u0275text(6, "\n                        ");
    \u0275\u0275element(7, "span", 15);
    \u0275\u0275text(8, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                ");
  }
}
function AudioPlayerComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275element(3, "span", 16);
    \u0275\u0275text(4, "\n                        ");
    \u0275\u0275element(5, "span", 17);
    \u0275\u0275text(6, "\n                        ");
    \u0275\u0275element(7, "span", 18);
    \u0275\u0275text(8, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                ");
  }
}
function AudioPlayerComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                        ");
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "volume_up");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n                    ");
  }
}
function AudioPlayerComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                        ");
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "volume_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n                    ");
  }
}
var AudioPlayerComponent = class _AudioPlayerComponent {
  constructor(store) {
    this.store = store;
    this.playState = "paused";
  }
  ngOnChanges(changes) {
    this.audio.nativeElement.src = changes.url.currentValue;
    this.audio.nativeElement.load();
    this.play();
  }
  play() {
    const playPromise = this.audio.nativeElement.play();
    if (playPromise !== void 0) {
      playPromise.catch((error) => {
        console.log(error);
      });
    }
    this.playState = "play";
  }
  stop() {
    this.audio.nativeElement.pause();
    this.playState = "paused";
  }
  mute() {
    this.audio.nativeElement.muted = !this.audio.nativeElement.muted;
    if (this.audio.nativeElement.muted) {
      this.fallbackVolume = this.audio.nativeElement.volume;
      this.audio.nativeElement.volume = 0;
    } else
      this.audio.nativeElement.volume = this.fallbackVolume;
  }
  switchChannel(direction) {
    this.store.dispatch(setAdjacentChannelAsActive({ direction }));
  }
  static {
    this.\u0275fac = function AudioPlayerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AudioPlayerComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AudioPlayerComponent, selectors: [["app-audio-player"]], viewQuery: function AudioPlayerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.audio = _t.first);
      }
    }, inputs: { icon: "icon", url: "url" }, features: [\u0275\u0275NgOnChangesFeature], decls: 47, vars: 9, consts: [["audio", ""], ["id", "audio-player"], [1, "radio-logo"], ["alt", "radio icon", 3, "src"], ["preload", "metadata", "autoplay", ""], [3, "src"], [1, "controls"], ["mat-icon-button", "", 3, "click"], [1, "volume-panel"], ["min", "0", "max", "1", "step", "0.1", "color", "accent"], ["matSliderThumb", "", 3, "ngModelChange", "ngModel"], ["mat-icon-button", "", 1, "icon-button-large", 3, "click"], [1, "playing"], [1, "playing-bar", "playing-bar1"], [1, "playing-bar", "playing-bar2"], [1, "playing-bar", "playing-bar3"], [1, "playing-bar-stopped", "playing-bar1"], [1, "playing-bar-stopped", "playing-bar2"], [1, "playing-bar-stopped", "playing-bar3"]], template: function AudioPlayerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275text(0, "\n        ");
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275text(2, "\n            ");
        \u0275\u0275elementStart(3, "div", 2);
        \u0275\u0275text(4, "\n                ");
        \u0275\u0275element(5, "img", 3);
        \u0275\u0275text(6, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n            ");
        \u0275\u0275elementStart(8, "audio", 4, 0);
        \u0275\u0275text(10, "\n                ");
        \u0275\u0275element(11, "source", 5);
        \u0275\u0275text(12, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, "\n            ");
        \u0275\u0275elementStart(14, "div", 6);
        \u0275\u0275text(15, "\n                ");
        \u0275\u0275elementStart(16, "button", 7);
        \u0275\u0275listener("click", function AudioPlayerComponent_Template_button_click_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.switchChannel("previous"));
        });
        \u0275\u0275text(17, "\n                    ");
        \u0275\u0275elementStart(18, "mat-icon");
        \u0275\u0275text(19, "skip_previous");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, "\n\n                ");
        \u0275\u0275conditionalCreate(22, AudioPlayerComponent_Conditional_22_Template, 7, 0);
        \u0275\u0275conditionalCreate(23, AudioPlayerComponent_Conditional_23_Template, 7, 0);
        \u0275\u0275elementStart(24, "button", 7);
        \u0275\u0275listener("click", function AudioPlayerComponent_Template_button_click_24_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.switchChannel("next"));
        });
        \u0275\u0275text(25, "\n                    ");
        \u0275\u0275elementStart(26, "mat-icon");
        \u0275\u0275text(27, "skip_next");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, "\n            ");
        \u0275\u0275elementStart(31, "div", 8);
        \u0275\u0275text(32, "\n                ");
        \u0275\u0275conditionalCreate(33, AudioPlayerComponent_Conditional_33_Template, 10, 0);
        \u0275\u0275conditionalCreate(34, AudioPlayerComponent_Conditional_34_Template, 10, 0);
        \u0275\u0275elementStart(35, "mat-slider", 9);
        \u0275\u0275text(36, "\n                    ");
        \u0275\u0275elementStart(37, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function AudioPlayerComponent_Template_input_ngModelChange_37_listener($event) {
          \u0275\u0275restoreView(_r1);
          const audio_r5 = \u0275\u0275reference(9);
          \u0275\u0275twoWayBindingSet(audio_r5.volume, $event) || (audio_r5.volume = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, "\n                ");
        \u0275\u0275elementStart(40, "button", 7);
        \u0275\u0275listener("click", function AudioPlayerComponent_Template_button_click_40_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.mute());
        });
        \u0275\u0275text(41, "\n                    ");
        \u0275\u0275conditionalCreate(42, AudioPlayerComponent_Conditional_42_Template, 4, 0);
        \u0275\u0275conditionalCreate(43, AudioPlayerComponent_Conditional_43_Template, 4, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(44, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, "\n    ");
      }
      if (rf & 2) {
        const audio_r5 = \u0275\u0275reference(9);
        \u0275\u0275advance(5);
        \u0275\u0275property("src", ctx.icon, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(6);
        \u0275\u0275property("src", ctx.url, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.playState === "paused" ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.playState === "play" ? 23 : -1);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.playState === "play" ? 33 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.playState === "paused" ? 34 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", audio_r5.volume);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(audio_r5.volume > 0 && !audio_r5.muted ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(audio_r5.volume === 0 || audio_r5.muted ? 43 : -1);
      }
    }, dependencies: [MatSliderModule, MatSlider, MatSliderThumb, MatIconModule, MatIcon, MatButtonModule, MatIconButton, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n}\n#audio-player[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n.radio-logo[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  height: 300px;\n  width: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.radio-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 300px;\n  max-height: 300px;\n}\n.volume-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: center;\n  align-items: center;\n}\n.volume-panel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.controls[_ngcontent-%COMP%] {\n  height: 100px;\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.playing[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 0.3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 0.5rem;\n  box-sizing: border-box;\n}\n.playing-bar[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: white;\n  width: 30%;\n  height: 100%;\n  animation: _ngcontent-%COMP%_up-and-down 1.3s ease infinite alternate;\n}\n.playing-bar-stopped[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: white;\n  width: 30%;\n  height: 100%;\n}\n.playing-bar1[_ngcontent-%COMP%] {\n  height: 60%;\n}\n.playing-bar2[_ngcontent-%COMP%] {\n  height: 30%;\n  animation-delay: -2.2s;\n}\n.playing-bar3[_ngcontent-%COMP%] {\n  height: 75%;\n  animation-delay: -3.7s;\n}\n@keyframes _ngcontent-%COMP%_up-and-down {\n  10% {\n    height: 30%;\n  }\n  30% {\n    height: 100%;\n  }\n  60% {\n    height: 50%;\n  }\n  80% {\n    height: 75%;\n  }\n  100% {\n    height: 60%;\n  }\n}\n.icon-button-large[_ngcontent-%COMP%] {\n  transform: scale(2);\n  margin: 0 20px;\n}\n@media only screen and (max-width: 599px) {\n  .radio-logo[_ngcontent-%COMP%] {\n    height: 200px;\n    width: 200px;\n  }\n  .radio-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 200px;\n    max-height: 200px;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AudioPlayerComponent, [{
    type: Component,
    args: [{ selector: "app-audio-player", template: `
        <div id="audio-player">
            <div class="radio-logo">
                <img [src]="icon" alt="radio icon" />
            </div>
            <audio preload="metadata" autoplay #audio>
                <source [src]="url" />
            </audio>
            <div class="controls">
                <button mat-icon-button (click)="switchChannel('previous')">
                    <mat-icon>skip_previous</mat-icon>
                </button>

                @if (playState === 'paused') {
                    <button
                        class="icon-button-large"
                        mat-icon-button
                        (click)="play()"
                    >
                        <mat-icon>play_arrow</mat-icon>
                    </button>
                }
                @if (playState === 'play') {
                    <button
                        class="icon-button-large"
                        mat-icon-button
                        (click)="stop()"
                    >
                        <mat-icon>pause</mat-icon>
                    </button>
                }
                <button mat-icon-button (click)="switchChannel('next')">
                    <mat-icon>skip_next</mat-icon>
                </button>
            </div>
            <div class="volume-panel">
                @if (playState === 'play') {
                    <div class="playing">
                        <span class="playing-bar playing-bar1"></span>
                        <span class="playing-bar playing-bar2"></span>
                        <span class="playing-bar playing-bar3"></span>
                    </div>
                }
                @if (playState === 'paused') {
                    <div class="playing">
                        <span class="playing-bar-stopped playing-bar1"></span>
                        <span class="playing-bar-stopped playing-bar2"></span>
                        <span class="playing-bar-stopped playing-bar3"></span>
                    </div>
                }
                <mat-slider min="0" max="1" step="0.1" color="accent">
                    <input matSliderThumb [(ngModel)]="audio.volume" />
                </mat-slider>
                <button mat-icon-button (click)="mute()">
                    @if (audio.volume > 0 && !audio.muted) {
                        <mat-icon>volume_up</mat-icon>
                    }
                    @if (audio.volume === 0 || audio.muted) {
                        <mat-icon>volume_off</mat-icon>
                    }
                </button>
            </div>
        </div>
    `, imports: [MatSliderModule, MatIconModule, MatButtonModule, FormsModule], styles: ["/* src/app/player/components/audio-player/audio-player.component.scss */\n:host {\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n}\n#audio-player {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n.radio-logo {\n  border-radius: 14px;\n  height: 300px;\n  width: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.radio-logo img {\n  max-width: 300px;\n  max-height: 300px;\n}\n.volume-panel {\n  display: flex;\n  align-self: center;\n  align-items: center;\n}\n.volume-panel input {\n  flex: 1;\n}\n.controls {\n  height: 100px;\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.playing {\n  width: 36px;\n  height: 36px;\n  border-radius: 0.3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 0.5rem;\n  box-sizing: border-box;\n}\n.playing-bar {\n  display: inline-block;\n  background: white;\n  width: 30%;\n  height: 100%;\n  animation: up-and-down 1.3s ease infinite alternate;\n}\n.playing-bar-stopped {\n  display: inline-block;\n  background: white;\n  width: 30%;\n  height: 100%;\n}\n.playing-bar1 {\n  height: 60%;\n}\n.playing-bar2 {\n  height: 30%;\n  animation-delay: -2.2s;\n}\n.playing-bar3 {\n  height: 75%;\n  animation-delay: -3.7s;\n}\n@keyframes up-and-down {\n  10% {\n    height: 30%;\n  }\n  30% {\n    height: 100%;\n  }\n  60% {\n    height: 50%;\n  }\n  80% {\n    height: 75%;\n  }\n  100% {\n    height: 60%;\n  }\n}\n.icon-button-large {\n  transform: scale(2);\n  margin: 0 20px;\n}\n@media only screen and (max-width: 599px) {\n  .radio-logo {\n    height: 200px;\n    width: 200px;\n  }\n  .radio-logo img {\n    max-width: 200px;\n    max-height: 200px;\n  }\n}\n"] }]
  }], () => [{ type: Store }], { icon: [{
    type: Input
  }], url: [{
    type: Input,
    args: [{ required: true }]
  }], audio: [{
    type: ViewChild,
    args: ["audio", { static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AudioPlayerComponent, { className: "AudioPlayerComponent", filePath: "src/app/player/components/audio-player/audio-player.component.ts", lineNumber: 85 });
})();

// src/app/player/components/epg-list/epg-list.component.ts
var import_moment2 = __toESM(require_moment());

// src/app/shared/pipes/moment-date.pipe.ts
var import_moment = __toESM(require_moment());
var MomentDatePipe = class _MomentDatePipe {
  transform(value, formatToParse, formatToReturn = "MMMM Do, dddd") {
    return (0, import_moment.default)(value, formatToParse).format(formatToReturn);
  }
  static {
    this.\u0275fac = function MomentDatePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MomentDatePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "momentDate", type: _MomentDatePipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MomentDatePipe, [{
    type: Pipe,
    args: [{
      name: "momentDate",
      standalone: true
    }]
  }], null, null);
})();

// src/app/player/components/epg-list/epg-list-item/epg-list-item.component.ts
function EpgListItemComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "span", 1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "live");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 1, "EPG.LIVE_NOW"));
  }
}
function EpgListItemComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "r");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 1, "EPG.TIMESHIFT_AVAILABLE"));
  }
}
function EpgListItemComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function EpgListItemComponent_Conditional_7_Template_span_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.showDescription(ctx_r1.item));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "info");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, "\n");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 1, "EPG.PROGRAM_DIALOG.SHOW_PROGRAM_DETAILS"));
  }
}
var EpgListItemComponent = class _EpgListItemComponent {
  /**
   * Creates an instance of EpgListItemComponent
   * @param dialog angular material dialog
   */
  constructor(dialog) {
    this.dialog = dialog;
  }
  /**
   * Opens the dialog with details about the selected program
   * @param program selected epg program
   */
  showDescription(program) {
    this.dialog.open(EpgItemDescriptionComponent, {
      data: program
    });
  }
  static {
    this.\u0275fac = function EpgListItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EpgListItemComponent)(\u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EpgListItemComponent, selectors: [["app-epg-list-item"]], inputs: { item: "item", timeNow: "timeNow", timeshiftUntil: "timeshiftUntil" }, decls: 8, vars: 13, consts: [[1, "time"], [1, "live", "badge", 3, "matTooltip"], [1, "rec", "badge", 3, "matTooltip"], ["matListItemMeta", "", 1, "description-icon", 3, "click", "matTooltip"]], template: function EpgListItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "momentDate");
        \u0275\u0275pipe(3, "momentDate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, "\n");
        \u0275\u0275conditionalCreate(5, EpgListItemComponent_Conditional_5_Template, 5, 3);
        \u0275\u0275conditionalCreate(6, EpgListItemComponent_Conditional_6_Template, 5, 3);
        \u0275\u0275conditionalCreate(7, EpgListItemComponent_Conditional_7_Template, 6, 3);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(2, 5, ctx.item.start, "YYYYMMDDHHmm ZZ", "HH:mm"), "\n    -\n    ", \u0275\u0275pipeBind3(3, 9, ctx.item.stop, "YYYYMMDDHHmm ZZ", "HH:mm"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.timeNow >= ctx.item.start && ctx.timeNow <= ctx.item.stop ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.start < ctx.timeNow && ctx.item.stop < ctx.timeNow && ctx.item.start > ctx.timeshiftUntil ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.item.desc == null ? null : ctx.item.desc.length) > 0 ? 7 : -1);
      }
    }, dependencies: [MatIcon, MatTooltip, MomentDatePipe, TranslatePipe], styles: ["\n\n.time[_ngcontent-%COMP%] {\n  color: #666;\n  border-bottom: 1px solid #ccc;\n  font-size: 0.8em;\n  display: inline-block;\n  margin-bottom: 5px;\n}\n.badge[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  padding: 2px 6px;\n  color: #fff;\n  text-transform: uppercase;\n  margin-left: 6px;\n  font-size: 0.8em;\n}\n.live[_ngcontent-%COMP%] {\n  background-color: red;\n}\n.rec[_ngcontent-%COMP%] {\n  background-color: grey;\n}\n.description-icon[_ngcontent-%COMP%] {\n  float: right;\n  cursor: pointer;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EpgListItemComponent, [{
    type: Component,
    args: [{ imports: [MomentDatePipe, MatIcon, MatTooltip, TranslatePipe], selector: "app-epg-list-item", template: `<span class="time"
    >{{ item.start | momentDate: 'YYYYMMDDHHmm ZZ' : 'HH:mm' }}
    -
    {{ item.stop | momentDate: 'YYYYMMDDHHmm ZZ' : 'HH:mm' }}</span
>
@if (timeNow >= item.start && timeNow <= item.stop) {
    <span class="live badge" [matTooltip]="'EPG.LIVE_NOW' | translate"
        >live</span
    >
}

@if (
    item.start < timeNow && item.stop < timeNow && item.start > timeshiftUntil
) {
    <span class="rec badge" [matTooltip]="'EPG.TIMESHIFT_AVAILABLE' | translate"
        >r</span
    >
}

@if (item.desc?.length > 0) {
    <span
        (click)="$event.stopPropagation(); showDescription(item)"
        matListItemMeta
        class="description-icon"
        [matTooltip]="'EPG.PROGRAM_DIALOG.SHOW_PROGRAM_DETAILS' | translate"
        ><mat-icon>info</mat-icon></span
    >
}
`, styles: ["/* src/app/player/components/epg-list/epg-list-item/epg-list-item.component.scss */\n.time {\n  color: #666;\n  border-bottom: 1px solid #ccc;\n  font-size: 0.8em;\n  display: inline-block;\n  margin-bottom: 5px;\n}\n.badge {\n  border-radius: 2px;\n  padding: 2px 6px;\n  color: #fff;\n  text-transform: uppercase;\n  margin-left: 6px;\n  font-size: 0.8em;\n}\n.live {\n  background-color: red;\n}\n.rec {\n  background-color: grey;\n}\n.description-icon {\n  float: right;\n  cursor: pointer;\n}\n"] }]
  }], () => [{ type: MatDialog }], { item: [{
    type: Input
  }], timeNow: [{
    type: Input
  }], timeshiftUntil: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EpgListItemComponent, { className: "EpgListItemComponent", filePath: "src/app/player/components/epg-list/epg-list-item/epg-list-item.component.ts", lineNumber: 16 });
})();

// src/app/player/components/epg-list/epg-list.component.ts
function EpgListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275element(1, "img", 10);
    \u0275\u0275text(2, "\n            ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.channel.icon, \u0275\u0275sanitizeUrl);
  }
}
function EpgListComponent_Conditional_52_Conditional_4_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "mat-list-option");
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4, "\n                            ");
    \u0275\u0275element(5, "app-epg-list-item", 13);
    \u0275\u0275text(6, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                        ");
    \u0275\u0275elementStart(8, "p", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n                ");
  }
  if (rf & 2) {
    const program_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    const timeshiftUntil_r4 = \u0275\u0275readContextLet(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("timeshiftUntil", timeshiftUntil_r4)("timeNow", ctx_r1.timeNow)("item", program_r3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(program_r3 == null ? null : program_r3.title);
  }
}
function EpgListComponent_Conditional_52_Conditional_4_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "mat-list-option", 14);
    \u0275\u0275listener("click", function EpgListComponent_Conditional_52_Conditional_4_For_2_Conditional_2_Template_mat_list_option_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const program_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      const timeshiftUntil_r4 = \u0275\u0275readContextLet(3);
      return \u0275\u0275resetView(ctx_r1.setEpgProgram(program_r3, ctx_r1.timeNow >= program_r3.start && ctx_r1.timeNow <= program_r3.stop, program_r3.start > timeshiftUntil_r4));
    });
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4, "\n                            ");
    \u0275\u0275element(5, "app-epg-list-item", 13);
    \u0275\u0275text(6, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                        ");
    \u0275\u0275element(8, "p", 15);
    \u0275\u0275text(9, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n                ");
  }
  if (rf & 2) {
    const program_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    const timeshiftUntil_r4 = \u0275\u0275readContextLet(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.timeNow >= program_r3.start && ctx_r1.timeNow <= program_r3.stop);
    \u0275\u0275property("value", program_r3);
    \u0275\u0275advance(4);
    \u0275\u0275property("timeshiftUntil", timeshiftUntil_r4)("timeNow", ctx_r1.timeNow)("item", program_r3);
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", program_r3.title, \u0275\u0275sanitizeHtml);
  }
}
function EpgListComponent_Conditional_52_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275conditionalCreate(1, EpgListComponent_Conditional_52_Conditional_4_For_2_Conditional_1_Template, 12, 4)(2, EpgListComponent_Conditional_52_Conditional_4_For_2_Conditional_2_Template, 11, 7);
    \u0275\u0275element(3, "mat-divider");
    \u0275\u0275text(4, "\n            ");
  }
  if (rf & 2) {
    const program_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    const timeshiftUntil_r4 = \u0275\u0275readContextLet(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(program_r3.start < timeshiftUntil_r4 || program_r3.start >= ctx_r1.timeNow ? 1 : 2);
  }
}
function EpgListComponent_Conditional_52_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275repeaterCreate(1, EpgListComponent_Conditional_52_Conditional_4_For_2_Template, 5, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const items_r6 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275repeater(items_r6);
  }
}
function EpgListComponent_Conditional_52_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "p", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(3, 1, "EPG.EPG_NOT_AVAILABLE_DATE"), "\n            ");
  }
}
function EpgListComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275text(1, "\n    ");
    \u0275\u0275elementStart(2, "mat-selection-list", 11);
    \u0275\u0275text(3, "\n        ");
    \u0275\u0275conditionalCreate(4, EpgListComponent_Conditional_52_Conditional_4_Template, 3, 0)(5, EpgListComponent_Conditional_52_Conditional_5_Template, 5, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const items_r6 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(2);
    \u0275\u0275property("multiple", false);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((items_r6 == null ? null : items_r6.length) > 0 ? 4 : 5);
  }
}
var DATE_FORMAT = "YYYY-MM-DD";
var EpgListComponent = class _EpgListComponent {
  constructor(store, dataService, epgService) {
    this.store = store;
    this.dataService = dataService;
    this.epgService = epgService;
    this.items$ = this.epgService.currentEpgPrograms$;
    this.selectedDate$ = new BehaviorSubject((0, import_moment2.default)().format(DATE_FORMAT));
    this.filteredItems$ = combineLatest([this.items$, this.selectedDate$]).pipe(map(([items, selectedDate]) => items.filter((item) => (0, import_moment2.default)(item.start).format("YYYY-MM-DD") === selectedDate).sort((a3, b2) => (0, import_moment2.default)(a3.start).diff((0, import_moment2.default)(b2.start)))));
  }
  /**
   * Subscribe for values from the store on component init
   */
  ngOnInit() {
    this.timeshiftUntil$ = this.store.select(selectActive).pipe(map((active) => {
      this.channel = {
        id: active?.tvg?.id,
        name: active?.name,
        url: [active?.url],
        icon: [active?.tvg?.logo]
      };
      return active?.tvg?.rec || active?.timeshift || active?.catchup?.days;
    }), map((value) => (0, import_moment2.default)().subtract(value, "days").toISOString()));
    this.items$.subscribe((programs) => this.handleEpgData(programs));
    this.dateToday = (0, import_moment2.default)().format(DATE_FORMAT);
    this.selectedDate$.next(this.dateToday);
  }
  /**
   * Handles incoming epg programs for the active channel from the main process
   * @param programs
   */
  handleEpgData(programs) {
    this.timeNow = (/* @__PURE__ */ new Date()).toISOString();
    this.dateToday = (0, import_moment2.default)().format(DATE_FORMAT);
    if (programs.length > 0) {
      this.setPlayingNow();
    } else {
      this.channel = null;
      this.store.dispatch(setCurrentEpgProgram(void 0));
    }
  }
  /**
   * Selects the program based on the active date
   */
  selectPrograms(programs) {
    const selectedDate = (0, import_moment2.default)(this.dateToday).format("YYYY-MM-DD");
    return programs.payload?.items.filter((item) => (0, import_moment2.default)(item.start).format("YYYY-MM-DD") === selectedDate).map((program) => __spreadProps(__spreadValues({}, program), {
      start: program.start,
      // Keep ISO format
      stop: program.stop
      // Keep ISO format
    })).sort((a3, b2) => (0, import_moment2.default)(a3.start).diff((0, import_moment2.default)(b2.start)));
  }
  /**
   * Changes the date to update the epg list with programs
   * @param direction direction to switch
   */
  changeDate(direction) {
    const newDate = (0, import_moment2.default)(this.selectedDate$.value)[direction === "next" ? "add" : "subtract"](1, "days").format(DATE_FORMAT);
    this.dateToday = newDate;
    this.selectedDate$.next(newDate);
  }
  /**
   * Sets the playing now variable based on the current time
   */
  setPlayingNow() {
    this.items$.pipe(map((items) => items.find((item) => {
      const now = (/* @__PURE__ */ new Date()).toISOString();
      const start = new Date(item.start).toISOString();
      const stop = new Date(item.stop).toISOString();
      return now >= start && now <= stop;
    }))).subscribe((playingNow) => {
      this.playingNow = playingNow;
      if (playingNow) {
        this.store.dispatch(setCurrentEpgProgram({ program: playingNow }));
      }
    });
  }
  /**
   * Sets the provided epg program as active and starts to play
   * @param program epg program to set
   * @param isLive live stream flag
   * @param timeshift timeshift flag
   */
  setEpgProgram(program, isLive, timeshift) {
    if (isLive) {
      this.store.dispatch(resetActiveEpgProgram());
    } else {
      if (!timeshift)
        return;
      this.store.dispatch(setActiveEpgProgram({ program }));
    }
    this.playingNow = program;
  }
  /**
   * Removes all ipc renderer listeners after destroy
   */
  ngOnDestroy() {
    this.dataService.removeAllListeners(EPG_GET_PROGRAM_DONE);
  }
  static {
    this.\u0275fac = function EpgListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EpgListComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(EpgService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EpgListComponent, selectors: [["app-epg-list"]], decls: 53, vars: 23, consts: [["id", "channel-header", "color", "primary"], [1, "channel-info"], [1, "channel-icon"], [1, "channel-details"], [1, "channel-name"], [1, "program-name"], ["id", "date-navigator"], ["mat-icon-button", "", 1, "previous-day", 3, "click", "matTooltip"], [1, "selected-date"], ["mat-icon-button", "", 1, "next-day", 3, "click", "matTooltip"], ["width", "48", 3, "src"], ["id", "program-list", "hideSingleSelectionIndicator", "true", 3, "multiple"], ["matListItemLine", ""], [3, "timeshiftUntil", "timeNow", "item"], [3, "click", "value"], ["matListItemLine", "", 3, "innerHTML"], [1, "epg-not-available"]], template: function EpgListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275declareLet(0);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275text(2, "\n");
        \u0275\u0275declareLet(3);
        \u0275\u0275pipe(4, "async");
        \u0275\u0275text(5, "\n\n");
        \u0275\u0275text(6, "\n");
        \u0275\u0275elementStart(7, "div", 0);
        \u0275\u0275text(8, "\n    ");
        \u0275\u0275elementStart(9, "div", 1);
        \u0275\u0275text(10, "\n        ");
        \u0275\u0275elementStart(11, "div", 2);
        \u0275\u0275text(12, "\n            ");
        \u0275\u0275conditionalCreate(13, EpgListComponent_Conditional_13_Template, 3, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, "\n        ");
        \u0275\u0275elementStart(15, "div", 3);
        \u0275\u0275text(16, "\n            ");
        \u0275\u0275elementStart(17, "div", 4);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, "\n            ");
        \u0275\u0275elementStart(20, "div", 5);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, "\n    ");
        \u0275\u0275element(26, "mat-divider");
        \u0275\u0275text(27, "\n    ");
        \u0275\u0275elementStart(28, "div", 6);
        \u0275\u0275text(29, "\n        ");
        \u0275\u0275elementStart(30, "button", 7);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275listener("click", function EpgListComponent_Template_button_click_30_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.changeDate("prev"));
        });
        \u0275\u0275text(32, "\n            ");
        \u0275\u0275elementStart(33, "mat-icon");
        \u0275\u0275text(34, "chevron_left");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, "\n        ");
        \u0275\u0275elementStart(37, "span", 8);
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "momentDate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, "\n        ");
        \u0275\u0275elementStart(41, "button", 9);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275listener("click", function EpgListComponent_Template_button_click_41_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.changeDate("next"));
        });
        \u0275\u0275text(43, "\n            ");
        \u0275\u0275elementStart(44, "mat-icon");
        \u0275\u0275text(45, "chevron_right");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(47, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(49, "\n");
        \u0275\u0275element(50, "mat-divider");
        \u0275\u0275text(51, "\n\n");
        \u0275\u0275conditionalCreate(52, EpgListComponent_Conditional_52_Template, 7, 2);
      }
      if (rf & 2) {
        \u0275\u0275storeLet(\u0275\u0275pipeBind1(1, 7, ctx.filteredItems$));
        \u0275\u0275advance(3);
        const timeshiftUntil_r7 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(4, 10, ctx.timeshiftUntil$));
        \u0275\u0275advance(10);
        \u0275\u0275conditional((ctx.channel == null ? null : ctx.channel.icon) ? 13 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\n                ", ctx.channel == null ? null : ctx.channel.name, "\n            ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                ", ctx.playingNow ? ctx.playingNow.title : \u0275\u0275pipeBind1(22, 13, "EPG.LIVE_STREAM"), "\n            ");
        \u0275\u0275advance(9);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(31, 15, "EPG.PREVIOUS_DAY"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind3(39, 17, ctx.dateToday, "YYYY-MM-DD", "MMMM Do, dddd"));
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(42, 21, "EPG.NEXT_DAY"));
        \u0275\u0275advance(11);
        \u0275\u0275conditional(timeshiftUntil_r7 ? 52 : -1);
      }
    }, dependencies: [
      EpgListItemComponent,
      FormsModule,
      MatButtonModule,
      MatIconButton,
      MatDividerModule,
      MatDivider,
      MatIconModule,
      MatIcon,
      MatListModule,
      MatSelectionList,
      MatListOption,
      MatListItemLine,
      MatTooltipModule,
      MatTooltip,
      AsyncPipe,
      MomentDatePipe,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  overflow-x: hidden;\n}\n.active[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #666;\n}\n#channel-header[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n#channel-header[_ngcontent-%COMP%]   .channel-info[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n  padding: 10px;\n}\n#channel-header[_ngcontent-%COMP%]   .channel-icon[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin-right: 10px;\n  place-content: center;\n  align-items: center;\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n  flex: 1 1 60px;\n  max-width: 60px;\n  min-width: 60px;\n}\n#channel-header[_ngcontent-%COMP%]   .channel-details[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n  box-sizing: border-box;\n  max-width: 100%;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n}\n#channel-header[_ngcontent-%COMP%]   .channel-name[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n#channel-header[_ngcontent-%COMP%]   .program-name[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  font-size: 0.9em;\n}\n#program-list[_ngcontent-%COMP%] {\n  flex: 1 1 0.000000001px;\n  box-sizing: border-box;\n}\n.epg-not-available[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\nmat-selection-list[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n#date-navigator[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#date-navigator[_ngcontent-%COMP%]   .selected-date[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EpgListComponent, [{
    type: Component,
    args: [{ imports: [
      AsyncPipe,
      EpgListItemComponent,
      FormsModule,
      MatButtonModule,
      MatDividerModule,
      MatIconModule,
      MatListModule,
      MatTooltipModule,
      MomentDatePipe,
      TranslatePipe
    ], selector: "app-epg-list", template: `@let items = filteredItems$ | async;
@let timeshiftUntil = timeshiftUntil$ | async;

<!-- channel info panel -->
<div id="channel-header" color="primary">
    <div class="channel-info">
        <div class="channel-icon">
            @if (channel?.icon) {
                <img [src]="channel.icon" width="48" />
            }
        </div>
        <div class="channel-details">
            <div class="channel-name">
                {{ channel?.name }}
            </div>
            <div class="program-name">
                {{
                    playingNow
                        ? playingNow.title
                        : ('EPG.LIVE_STREAM' | translate)
                }}
            </div>
        </div>
    </div>
    <mat-divider />
    <div id="date-navigator">
        <button
            class="previous-day"
            mat-icon-button
            (click)="changeDate('prev')"
            [matTooltip]="'EPG.PREVIOUS_DAY' | translate"
        >
            <mat-icon>chevron_left</mat-icon>
        </button>
        <span class="selected-date">
            {{ dateToday | momentDate: 'YYYY-MM-DD' : 'MMMM Do, dddd' }}</span
        >
        <button
            class="next-day"
            mat-icon-button
            (click)="changeDate('next')"
            [matTooltip]="'EPG.NEXT_DAY' | translate"
        >
            <mat-icon>chevron_right</mat-icon>
        </button>
    </div>
</div>
<mat-divider />

@if (timeshiftUntil) {
    <!-- program list -->
    <mat-selection-list
        id="program-list"
        [multiple]="false"
        hideSingleSelectionIndicator="true"
    >
        @if (items?.length > 0) {
            @for (program of items; track program) {
                @if (
                    program.start < timeshiftUntil || program.start >= timeNow
                ) {
                    <mat-list-option>
                        <div matListItemLine>
                            <app-epg-list-item
                                [timeshiftUntil]="timeshiftUntil"
                                [timeNow]="timeNow"
                                [item]="program"
                            />
                        </div>
                        <p matListItemLine>{{ program?.title }}</p>
                    </mat-list-option>
                } @else {
                    <mat-list-option
                        [value]="program"
                        [class.active]="
                            timeNow >= program.start && timeNow <= program.stop
                        "
                        (click)="
                            setEpgProgram(
                                program,
                                timeNow >= program.start &&
                                    timeNow <= program.stop,
                                program.start > timeshiftUntil
                            )
                        "
                    >
                        <div matListItemLine>
                            <app-epg-list-item
                                [timeshiftUntil]="timeshiftUntil"
                                [timeNow]="timeNow"
                                [item]="program"
                            />
                        </div>
                        <p matListItemLine [innerHTML]="program.title"></p>
                    </mat-list-option>
                }
                <mat-divider />
            }
        } @else {
            <p class="epg-not-available">
                {{ 'EPG.EPG_NOT_AVAILABLE_DATE' | translate }}
            </p>
        }
    </mat-selection-list>
}
`, styles: ["/* src/app/player/components/epg-list/epg-list.component.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  overflow-x: hidden;\n}\n.active {\n  border-bottom: 1px dashed #666;\n}\n#channel-header {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n#channel-header .channel-info {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n  padding: 10px;\n}\n#channel-header .channel-icon {\n  overflow: hidden;\n  margin-right: 10px;\n  place-content: center;\n  align-items: center;\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n  flex: 1 1 60px;\n  max-width: 60px;\n  min-width: 60px;\n}\n#channel-header .channel-details {\n  flex: 1 1 100%;\n  box-sizing: border-box;\n  max-width: 100%;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n}\n#channel-header .channel-name {\n  font-weight: 800;\n}\n#channel-header .program-name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  font-size: 0.9em;\n}\n#program-list {\n  flex: 1 1 0.000000001px;\n  box-sizing: border-box;\n}\n.epg-not-available {\n  padding: 0 10px;\n}\nmat-selection-list {\n  overflow: auto;\n}\n#date-navigator {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#date-navigator .selected-date {\n  font-size: 0.9em;\n}\n"] }]
  }], () => [{ type: Store }, { type: DataService }, { type: EpgService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EpgListComponent, { className: "EpgListComponent", filePath: "src/app/player/components/epg-list/epg-list.component.ts", lineNumber: 52 });
})();

// src/app/player/components/info-overlay/info-overlay.component.ts
var import_moment3 = __toESM(require_moment());
var _c04 = (a0) => ({ width: a0 });
function InfoOverlayComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275element(5, "img", 2);
    \u0275\u0275text(6, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementStart(8, "div", 3);
    \u0275\u0275text(9, "\n            ");
    \u0275\u0275elementStart(10, "div", 4);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n            ");
    \u0275\u0275elementStart(13, "div", 5);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n            ");
    \u0275\u0275elementStart(16, "div", 6);
    \u0275\u0275text(17, "\n                ");
    \u0275\u0275element(18, "div", 7);
    \u0275\u0275text(19, "\n                ");
    \u0275\u0275elementStart(20, "div", 8);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "momentDate");
    \u0275\u0275pipe(23, "momentDate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "\n");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("visible", ctx_r0.isVisible)("hidden", !ctx_r0.isVisible);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", (ctx_r0.epgProgram == null ? null : ctx_r0.epgProgram.icon) || (ctx_r0.channel == null ? null : ctx_r0.channel.tvg == null ? null : ctx_r0.channel.tvg.logo), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("\n                ", ctx_r0.epgProgram == null ? null : ctx_r0.epgProgram.title, " | ", ctx_r0.channel.name, "\n            ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                ", ctx_r0.epgProgram == null ? null : ctx_r0.epgProgram.desc, "\n            ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(19, _c04, ctx_r0.finishedDuration * 100 / ctx_r0.generalDuration + "%"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\n                    ", \u0275\u0275pipeBind3(22, 11, ctx_r0.start, "YYYYMMDDHHmm ZZ", "HH:mm"), "\n                    -\n                    ", \u0275\u0275pipeBind3(23, 15, ctx_r0.stop, "YYYYMMDDHHmm ZZ", "HH:mm"), "\n                ");
  }
}
var InfoOverlayComponent = class _InfoOverlayComponent {
  constructor() {
    this.isVisible = false;
  }
  /**
   * Calculates the necessary information for the visualization in the overview popup
   * @param changes component input changes
   */
  ngOnChanges(changes) {
    if (changes.channel) {
      clearTimeout(this.currentTimeout);
      this.isVisible = true;
      this.currentTimeout = setTimeout(() => {
        this.isVisible = false;
      }, 4e3);
    }
    if (changes.epgProgram && changes.epgProgram.currentValue) {
      const { stop, start } = changes.epgProgram.currentValue;
      this.setProgramDuration(start, stop);
    }
  }
  /**
   * Calculates and sets the duration of the program for the progress bar visualization
   * @param start program start time
   * @param stop program stop time
   */
  setProgramDuration(start, stop) {
    this.stop = (0, import_moment3.default)(stop, "YYYYMMDDHHmm ZZ");
    this.start = (0, import_moment3.default)(start, "YYYYMMDDHHmm ZZ");
    const timeNow = (0, import_moment3.default)(Date.now());
    this.generalDuration = import_moment3.default.duration(this.stop.diff(this.start)).asMilliseconds();
    this.finishedDuration = import_moment3.default.duration(this.stop.diff(timeNow)).asMilliseconds();
  }
  static {
    this.\u0275fac = function InfoOverlayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InfoOverlayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoOverlayComponent, selectors: [["app-info-overlay"]], inputs: { channel: "channel", epgProgram: "epgProgram" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "channel-overlay"], [1, "channel-logo"], ["width", "68", "onerror", "this.style.display='none'", 3, "src"], [1, "content"], [1, "program-name"], [1, "program-description"], [1, "program-progress"], [1, "program-finished", 3, "ngStyle"], [1, "duration"]], template: function InfoOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, InfoOverlayComponent_Conditional_0_Template, 28, 21);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.channel && ctx.epgProgram ? 0 : -1);
      }
    }, dependencies: [NgStyle, MomentDatePipe], styles: ["\n\n.channel-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 35px;\n  width: 100%;\n  min-height: 130px;\n  max-height: 165px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  backdrop-filter: blur(10px);\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n.program-name[_ngcontent-%COMP%], \n.program-description[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.channel-logo[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  place-content: flex-start center;\n  align-items: flex-start;\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n  flex: 1 1 100px;\n  max-width: 100px;\n  min-width: 100px;\n}\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.program-progress[_ngcontent-%COMP%] {\n  width: 96%;\n  background: #ccc;\n  height: 20px;\n  margin-bottom: 8px;\n}\n.program-name[_ngcontent-%COMP%] {\n  width: 96%;\n  max-height: 20px;\n  -webkit-line-clamp: 1;\n}\n.program-description[_ngcontent-%COMP%] {\n  width: 96%;\n  max-height: 55px;\n  -webkit-line-clamp: 3;\n}\n.program-finished[_ngcontent-%COMP%] {\n  background: #717171;\n  height: 20px;\n  font-size: 0.8em;\n  padding-left: 10px;\n  color: #000;\n  line-height: 20px;\n}\n.duration[_ngcontent-%COMP%] {\n  position: relative;\n  top: -18px;\n  font-size: 0.8em;\n  color: #000;\n  left: 10px;\n}\n.visible[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s 2s, opacity 2s linear;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoOverlayComponent, [{
    type: Component,
    args: [{ imports: [MomentDatePipe, NgStyle], selector: "app-info-overlay", template: `@if (channel && epgProgram) {
    <div
        class="channel-overlay"
        [class.visible]="isVisible"
        [class.hidden]="!isVisible"
    >
        <div class="channel-logo">
            <img
                [src]="epgProgram?.icon || channel?.tvg?.logo"
                width="68"
                onerror="this.style.display='none'"
            />
        </div>
        <div class="content">
            <div class="program-name">
                {{ epgProgram?.title }} | {{ channel.name }}
            </div>
            <div class="program-description">
                {{ epgProgram?.desc }}
            </div>
            <div class="program-progress">
                <div
                    class="program-finished"
                    [ngStyle]="{
                        width: (finishedDuration * 100) / generalDuration + '%',
                    }"
                ></div>
                <div class="duration">
                    {{ start | momentDate: 'YYYYMMDDHHmm ZZ' : 'HH:mm' }}
                    -
                    {{ stop | momentDate: 'YYYYMMDDHHmm ZZ' : 'HH:mm' }}
                </div>
            </div>
        </div>
    </div>
}
`, styles: ["/* src/app/player/components/info-overlay/info-overlay.component.scss */\n.channel-overlay {\n  position: absolute;\n  bottom: 35px;\n  width: 100%;\n  min-height: 130px;\n  max-height: 165px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  backdrop-filter: blur(10px);\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n.program-name,\n.program-description {\n  margin: 20px 0;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.channel-logo {\n  margin-top: 20px;\n  place-content: flex-start center;\n  align-items: flex-start;\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n  flex: 1 1 100px;\n  max-width: 100px;\n  min-width: 100px;\n}\n.content {\n  width: 100%;\n}\n.program-progress {\n  width: 96%;\n  background: #ccc;\n  height: 20px;\n  margin-bottom: 8px;\n}\n.program-name {\n  width: 96%;\n  max-height: 20px;\n  -webkit-line-clamp: 1;\n}\n.program-description {\n  width: 96%;\n  max-height: 55px;\n  -webkit-line-clamp: 3;\n}\n.program-finished {\n  background: #717171;\n  height: 20px;\n  font-size: 0.8em;\n  padding-left: 10px;\n  color: #000;\n  line-height: 20px;\n}\n.duration {\n  position: relative;\n  top: -18px;\n  font-size: 0.8em;\n  color: #000;\n  left: 10px;\n}\n.visible {\n  visibility: visible;\n  opacity: 1;\n}\n.hidden {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s 2s, opacity 2s linear;\n}\n"] }]
  }], null, { channel: [{
    type: Input
  }], epgProgram: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoOverlayComponent, { className: "InfoOverlayComponent", filePath: "src/app/player/components/info-overlay/info-overlay.component.ts", lineNumber: 14 });
})();

// node_modules/date-fns/esm/_lib/toInteger/index.js
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

// node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}

// node_modules/date-fns/esm/toDate/index.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      console.warn(new Error().stack);
    }
    return /* @__PURE__ */ new Date(NaN);
  }
}

// node_modules/date-fns/esm/addDays/index.js
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

// node_modules/date-fns/esm/addMilliseconds/index.js
function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}

// node_modules/date-fns/esm/_lib/defaultOptions/index.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

// node_modules/date-fns/esm/constants/index.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var millisecondsInMinute = 6e4;
var millisecondsInHour = 36e5;
var millisecondsInSecond = 1e3;
var minTime = -maxTime;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;

// node_modules/date-fns/esm/isDate/index.js
function _typeof2(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof2 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof2 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof2(obj);
}
function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof2(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/date-fns/esm/isValid/index.js
function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  if (!isDate(dirtyDate) && typeof dirtyDate !== "number") {
    return false;
  }
  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}

// node_modules/date-fns/esm/differenceInMilliseconds/index.js
function differenceInMilliseconds(dateLeft, dateRight) {
  requiredArgs(2, arguments);
  return toDate(dateLeft).getTime() - toDate(dateRight).getTime();
}

// node_modules/date-fns/esm/_lib/roundingMethods/index.js
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  }
  // Math.trunc is not supported by IE
};
var defaultRoundingMethod = "trunc";
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

// node_modules/date-fns/esm/differenceInMinutes/index.js
function differenceInMinutes(dateLeft, dateRight, options) {
  requiredArgs(2, arguments);
  var diff = differenceInMilliseconds(dateLeft, dateRight) / millisecondsInMinute;
  return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

// node_modules/date-fns/esm/subMilliseconds/index.js
function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

// node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js
var MILLISECONDS_IN_DAY = 864e5;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

// node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js
function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js
function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js
function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = /* @__PURE__ */ new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js
var MILLISECONDS_IN_WEEK = 6048e5;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

// node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js
function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js
function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js
function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = /* @__PURE__ */ new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCWeek/index.js
var MILLISECONDS_IN_WEEK2 = 6048e5;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK2) + 1;
}

// node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}

// node_modules/date-fns/esm/_lib/format/lightFormatters/index.js
var formatters = {
  // Year
  y: function y(date, token) {
    var signedYear = date.getUTCFullYear();
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
var lightFormatters_default = formatters;

// node_modules/date-fns/esm/_lib/format/formatters/index.js
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters2 = {
  // Era
  G: function G(date, token, localize2) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, {
          width: "abbreviated"
        });
      // A, B
      case "GGGGG":
        return localize2.era(era, {
          width: "narrow"
        });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize2.era(era, {
          width: "wide"
        });
    }
  },
  // Year
  y: function y2(date, token, localize2) {
    if (token === "yo") {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, {
        unit: "year"
      });
    }
    return lightFormatters_default.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize2, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, {
        unit: "year"
      });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function M2(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters_default.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize2, options) {
    var week = getUTCWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, {
        unit: "week"
      });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize2) {
    var isoWeek = getUTCISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function d2(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getUTCDate(), {
        unit: "date"
      });
    }
    return lightFormatters_default.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize2) {
    var dayOfYear = getUTCDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      // Tue
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function a2(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function h2(date, token, localize2) {
    if (token === "ho") {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return lightFormatters_default.h(date, token);
  },
  // Hour [0-23]
  H: function H2(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getUTCHours(), {
        unit: "hour"
      });
    }
    return lightFormatters_default.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize2) {
    var hours = date.getUTCHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize2) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function m2(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getUTCMinutes(), {
        unit: "minute"
      });
    }
    return lightFormatters_default.m(date, token);
  },
  // Second
  s: function s2(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getUTCSeconds(), {
        unit: "second"
      });
    }
    return lightFormatters_default.s(date, token);
  },
  // Fraction of second
  S: function S2(date, token) {
    return lightFormatters_default.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || "";
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || "";
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
var formatters_default = formatters2;

// node_modules/date-fns/esm/_lib/format/longFormatters/index.js
var dateLongFormatter = function dateLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "P":
      return formatLong2.date({
        width: "short"
      });
    case "PP":
      return formatLong2.date({
        width: "medium"
      });
    case "PPP":
      return formatLong2.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong2.date({
        width: "full"
      });
  }
};
var timeLongFormatter = function timeLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "p":
      return formatLong2.time({
        width: "short"
      });
    case "pp":
      return formatLong2.time({
        width: "medium"
      });
    case "ppp":
      return formatLong2.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong2.time({
        width: "full"
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern, formatLong2) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var longFormatters_default = longFormatters;

// node_modules/date-fns/esm/_lib/protectedTokens/index.js
var protectedDayOfYearTokens = ["D", "DD"];
var protectedWeekYearTokens = ["YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format2, input) {
  if (token === "YYYY") {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "YY") {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "D") {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "DD") {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

// node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = function formatDistance2(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
var formatDistance_default = formatDistance;

// node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
var formatLong_default = formatLong;

// node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;

// node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
function buildLocalizeFn(args) {
  return function(dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
var localize_default = localize;

// node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
function buildMatchFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
function buildMatchPatternFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function valueCallback2(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var match_default = match;

// node_modules/date-fns/esm/locale/en-US/index.js
var locale = {
  code: "en-US",
  formatDistance: formatDistance_default,
  formatLong: formatLong_default,
  formatRelative: formatRelative_default,
  localize: localize_default,
  match: match_default,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var en_US_default = locale;

// node_modules/date-fns/esm/_lib/defaultLocale/index.js
var defaultLocale_default = en_US_default;

// node_modules/date-fns/esm/format/index.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions2 = getDefaultOptions();
  var locale2 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : defaultLocale_default;
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!locale2.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale2.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var originalDate = toDate(dirtyDate);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      var longFormatter = longFormatters_default[firstCharacter];
      return longFormatter(substring, locale2.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map(function(substring) {
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = formatters_default[firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale2.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return substring;
  }).join("");
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

// node_modules/date-fns/esm/_lib/assign/index.js
function assign(target, object) {
  if (target == null) {
    throw new TypeError("assign requires that input parameter not be null or undefined");
  }
  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;
      target[property] = object[property];
    }
  }
  return target;
}

// node_modules/date-fns/esm/parse/_lib/Setter.js
function _typeof3(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof3 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof3 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof3(obj);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof3(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = /* @__PURE__ */ (function() {
  function Setter2() {
    _classCallCheck(this, Setter2);
    _defineProperty(this, "subPriority", 0);
  }
  _createClass(Setter2, [{
    key: "validate",
    value: function validate(_utcDate, _options) {
      return true;
    }
  }]);
  return Setter2;
})();
var ValueSetter = /* @__PURE__ */ (function(_Setter) {
  _inherits(ValueSetter2, _Setter);
  var _super = _createSuper(ValueSetter2);
  function ValueSetter2(value, validateValue, setValue, priority, subPriority) {
    var _this;
    _classCallCheck(this, ValueSetter2);
    _this = _super.call(this);
    _this.value = value;
    _this.validateValue = validateValue;
    _this.setValue = setValue;
    _this.priority = priority;
    if (subPriority) {
      _this.subPriority = subPriority;
    }
    return _this;
  }
  _createClass(ValueSetter2, [{
    key: "validate",
    value: function validate(utcDate, options) {
      return this.validateValue(utcDate, this.value, options);
    }
  }, {
    key: "set",
    value: function set(utcDate, flags, options) {
      return this.setValue(utcDate, flags, this.value, options);
    }
  }]);
  return ValueSetter2;
})(Setter);
var DateToSystemTimezoneSetter = /* @__PURE__ */ (function(_Setter2) {
  _inherits(DateToSystemTimezoneSetter2, _Setter2);
  var _super2 = _createSuper(DateToSystemTimezoneSetter2);
  function DateToSystemTimezoneSetter2() {
    var _this2;
    _classCallCheck(this, DateToSystemTimezoneSetter2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this2), "priority", TIMEZONE_UNIT_PRIORITY);
    _defineProperty(_assertThisInitialized(_this2), "subPriority", -1);
    return _this2;
  }
  _createClass(DateToSystemTimezoneSetter2, [{
    key: "set",
    value: function set(date, flags) {
      if (flags.timestampIsSet) {
        return date;
      }
      var convertedDate = /* @__PURE__ */ new Date(0);
      convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
      convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
      return convertedDate;
    }
  }]);
  return DateToSystemTimezoneSetter2;
})(Setter);

// node_modules/date-fns/esm/parse/_lib/Parser.js
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties2(Constructor, staticProps);
  return Constructor;
}
var Parser = /* @__PURE__ */ (function() {
  function Parser2() {
    _classCallCheck2(this, Parser2);
  }
  _createClass2(Parser2, [{
    key: "run",
    value: function run(dateString, token, match2, options) {
      var result = this.parse(dateString, token, match2, options);
      if (!result) {
        return null;
      }
      return {
        setter: new ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
        rest: result.rest
      };
    }
  }, {
    key: "validate",
    value: function validate(_utcDate, _value, _options) {
      return true;
    }
  }]);
  return Parser2;
})();

// node_modules/date-fns/esm/parse/_lib/parsers/EraParser.js
function _typeof4(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof4 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof4 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof4(obj);
}
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties3(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass3(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties3(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties3(Constructor, staticProps);
  return Constructor;
}
function _inherits2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf2(subClass, superClass);
}
function _setPrototypeOf2(o, p) {
  _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf2(o, p);
}
function _createSuper2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf2(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn2(this, result);
  };
}
function _possibleConstructorReturn2(self, call) {
  if (call && (_typeof4(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized2(self);
}
function _assertThisInitialized2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct2() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf2(o) {
  _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf2(o);
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var EraParser = /* @__PURE__ */ (function(_Parser) {
  _inherits2(EraParser2, _Parser);
  var _super = _createSuper2(EraParser2);
  function EraParser2() {
    var _this;
    _classCallCheck3(this, EraParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty2(_assertThisInitialized2(_this), "priority", 140);
    _defineProperty2(_assertThisInitialized2(_this), "incompatibleTokens", ["R", "u", "t", "T"]);
    return _this;
  }
  _createClass3(EraParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        // AD, BC
        case "G":
        case "GG":
        case "GGG":
          return match2.era(dateString, {
            width: "abbreviated"
          }) || match2.era(dateString, {
            width: "narrow"
          });
        // A, B
        case "GGGGG":
          return match2.era(dateString, {
            width: "narrow"
          });
        // Anno Domini, Before Christ
        case "GGGG":
        default:
          return match2.era(dateString, {
            width: "wide"
          }) || match2.era(dateString, {
            width: "abbreviated"
          }) || match2.era(dateString, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return EraParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/constants.js
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

// node_modules/date-fns/esm/parse/_lib/utils.js
function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }
  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }
  var sign = matchResult[1] === "+" ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0;
  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }
  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

// node_modules/date-fns/esm/parse/_lib/parsers/YearParser.js
function _typeof5(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof5 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof5 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof5(obj);
}
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties4(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass4(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties4(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties4(Constructor, staticProps);
  return Constructor;
}
function _inherits3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf3(subClass, superClass);
}
function _setPrototypeOf3(o, p) {
  _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf3(o, p);
}
function _createSuper3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct3();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf3(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf3(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn3(this, result);
  };
}
function _possibleConstructorReturn3(self, call) {
  if (call && (_typeof5(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized3(self);
}
function _assertThisInitialized3(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct3() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf3(o) {
  _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf3(o);
}
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var YearParser = /* @__PURE__ */ (function(_Parser) {
  _inherits3(YearParser2, _Parser);
  var _super = _createSuper3(YearParser2);
  function YearParser2() {
    var _this;
    _classCallCheck4(this, YearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty3(_assertThisInitialized3(_this), "priority", 130);
    _defineProperty3(_assertThisInitialized3(_this), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass4(YearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(year) {
        return {
          year,
          isTwoDigitYear: token === "yy"
        };
      };
      switch (token) {
        case "y":
          return mapValue(parseNDigits(4, dateString), valueCallback3);
        case "yo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "year"
          }), valueCallback3);
        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      var currentYear = date.getUTCFullYear();
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }
      var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return YearParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekYearParser.js
function _typeof6(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof6 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof6 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof6(obj);
}
function _classCallCheck5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties5(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass5(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties5(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties5(Constructor, staticProps);
  return Constructor;
}
function _inherits4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf4(subClass, superClass);
}
function _setPrototypeOf4(o, p) {
  _setPrototypeOf4 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf4(o, p);
}
function _createSuper4(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct4();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf4(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf4(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn4(this, result);
  };
}
function _possibleConstructorReturn4(self, call) {
  if (call && (_typeof6(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized4(self);
}
function _assertThisInitialized4(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct4() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf4(o) {
  _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf4(o);
}
function _defineProperty4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var LocalWeekYearParser = /* @__PURE__ */ (function(_Parser) {
  _inherits4(LocalWeekYearParser2, _Parser);
  var _super = _createSuper4(LocalWeekYearParser2);
  function LocalWeekYearParser2() {
    var _this;
    _classCallCheck5(this, LocalWeekYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty4(_assertThisInitialized4(_this), "priority", 130);
    _defineProperty4(_assertThisInitialized4(_this), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]);
    return _this;
  }
  _createClass5(LocalWeekYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(year) {
        return {
          year,
          isTwoDigitYear: token === "YY"
        };
      };
      switch (token) {
        case "Y":
          return mapValue(parseNDigits(4, dateString), valueCallback3);
        case "Yo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "year"
          }), valueCallback3);
        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set(date, flags, value, options) {
      var currentYear = getUTCWeekYear(date, options);
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options);
      }
      var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options);
    }
  }]);
  return LocalWeekYearParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekYearParser.js
function _typeof7(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof7 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof7 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof7(obj);
}
function _classCallCheck6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties6(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass6(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties6(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties6(Constructor, staticProps);
  return Constructor;
}
function _inherits5(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf5(subClass, superClass);
}
function _setPrototypeOf5(o, p) {
  _setPrototypeOf5 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf5(o, p);
}
function _createSuper5(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct5();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf5(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf5(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn5(this, result);
  };
}
function _possibleConstructorReturn5(self, call) {
  if (call && (_typeof7(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized5(self);
}
function _assertThisInitialized5(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct5() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf5(o) {
  _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf5(o);
}
function _defineProperty5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ISOWeekYearParser = /* @__PURE__ */ (function(_Parser) {
  _inherits5(ISOWeekYearParser2, _Parser);
  var _super = _createSuper5(ISOWeekYearParser2);
  function ISOWeekYearParser2() {
    var _this;
    _classCallCheck6(this, ISOWeekYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty5(_assertThisInitialized5(_this), "priority", 130);
    _defineProperty5(_assertThisInitialized5(_this), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass6(ISOWeekYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      if (token === "R") {
        return parseNDigitsSigned(4, dateString);
      }
      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set(_date, _flags, value) {
      var firstWeekOfYear = /* @__PURE__ */ new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear);
    }
  }]);
  return ISOWeekYearParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/ExtendedYearParser.js
function _typeof8(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof8 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof8 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof8(obj);
}
function _classCallCheck7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties7(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass7(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties7(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties7(Constructor, staticProps);
  return Constructor;
}
function _inherits6(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf6(subClass, superClass);
}
function _setPrototypeOf6(o, p) {
  _setPrototypeOf6 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf6(o, p);
}
function _createSuper6(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct6();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf6(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf6(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn6(this, result);
  };
}
function _possibleConstructorReturn6(self, call) {
  if (call && (_typeof8(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized6(self);
}
function _assertThisInitialized6(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct6() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf6(o) {
  _getPrototypeOf6 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf6(o);
}
function _defineProperty6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ExtendedYearParser = /* @__PURE__ */ (function(_Parser) {
  _inherits6(ExtendedYearParser2, _Parser);
  var _super = _createSuper6(ExtendedYearParser2);
  function ExtendedYearParser2() {
    var _this;
    _classCallCheck7(this, ExtendedYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty6(_assertThisInitialized6(_this), "priority", 130);
    _defineProperty6(_assertThisInitialized6(_this), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass7(ExtendedYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      if (token === "u") {
        return parseNDigitsSigned(4, dateString);
      }
      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return ExtendedYearParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/QuarterParser.js
function _typeof9(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof9 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof9 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof9(obj);
}
function _classCallCheck8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties8(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass8(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties8(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties8(Constructor, staticProps);
  return Constructor;
}
function _inherits7(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf7(subClass, superClass);
}
function _setPrototypeOf7(o, p) {
  _setPrototypeOf7 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf7(o, p);
}
function _createSuper7(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct7();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf7(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf7(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn7(this, result);
  };
}
function _possibleConstructorReturn7(self, call) {
  if (call && (_typeof9(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized7(self);
}
function _assertThisInitialized7(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct7() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf7(o) {
  _getPrototypeOf7 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf7(o);
}
function _defineProperty7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var QuarterParser = /* @__PURE__ */ (function(_Parser) {
  _inherits7(QuarterParser2, _Parser);
  var _super = _createSuper7(QuarterParser2);
  function QuarterParser2() {
    var _this;
    _classCallCheck8(this, QuarterParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty7(_assertThisInitialized7(_this), "priority", 120);
    _defineProperty7(_assertThisInitialized7(_this), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass8(QuarterParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        // 1, 2, 3, 4
        case "Q":
        case "QQ":
          return parseNDigits(token.length, dateString);
        // 1st, 2nd, 3rd, 4th
        case "Qo":
          return match2.ordinalNumber(dateString, {
            unit: "quarter"
          });
        // Q1, Q2, Q3, Q4
        case "QQQ":
          return match2.quarter(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case "QQQQQ":
          return match2.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
        // 1st quarter, 2nd quarter, ...
        case "QQQQ":
        default:
          return match2.quarter(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.quarter(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return QuarterParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/StandAloneQuarterParser.js
function _typeof10(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof10 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof10 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof10(obj);
}
function _classCallCheck9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties9(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass9(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties9(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties9(Constructor, staticProps);
  return Constructor;
}
function _inherits8(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf8(subClass, superClass);
}
function _setPrototypeOf8(o, p) {
  _setPrototypeOf8 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf8(o, p);
}
function _createSuper8(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct8();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf8(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf8(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn8(this, result);
  };
}
function _possibleConstructorReturn8(self, call) {
  if (call && (_typeof10(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized8(self);
}
function _assertThisInitialized8(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct8() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf8(o) {
  _getPrototypeOf8 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf8(o);
}
function _defineProperty8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var StandAloneQuarterParser = /* @__PURE__ */ (function(_Parser) {
  _inherits8(StandAloneQuarterParser2, _Parser);
  var _super = _createSuper8(StandAloneQuarterParser2);
  function StandAloneQuarterParser2() {
    var _this;
    _classCallCheck9(this, StandAloneQuarterParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty8(_assertThisInitialized8(_this), "priority", 120);
    _defineProperty8(_assertThisInitialized8(_this), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass9(StandAloneQuarterParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        // 1, 2, 3, 4
        case "q":
        case "qq":
          return parseNDigits(token.length, dateString);
        // 1st, 2nd, 3rd, 4th
        case "qo":
          return match2.ordinalNumber(dateString, {
            unit: "quarter"
          });
        // Q1, Q2, Q3, Q4
        case "qqq":
          return match2.quarter(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case "qqqqq":
          return match2.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
        // 1st quarter, 2nd quarter, ...
        case "qqqq":
        default:
          return match2.quarter(dateString, {
            width: "wide",
            context: "standalone"
          }) || match2.quarter(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneQuarterParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/MonthParser.js
function _typeof11(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof11 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof11 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof11(obj);
}
function _classCallCheck10(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties10(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass10(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties10(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties10(Constructor, staticProps);
  return Constructor;
}
function _inherits9(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf9(subClass, superClass);
}
function _setPrototypeOf9(o, p) {
  _setPrototypeOf9 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf9(o, p);
}
function _createSuper9(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct9();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf9(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf9(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn9(this, result);
  };
}
function _possibleConstructorReturn9(self, call) {
  if (call && (_typeof11(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized9(self);
}
function _assertThisInitialized9(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct9() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf9(o) {
  _getPrototypeOf9 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf9(o);
}
function _defineProperty9(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var MonthParser = /* @__PURE__ */ (function(_Parser) {
  _inherits9(MonthParser2, _Parser);
  var _super = _createSuper9(MonthParser2);
  function MonthParser2() {
    var _this;
    _classCallCheck10(this, MonthParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty9(_assertThisInitialized9(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]);
    _defineProperty9(_assertThisInitialized9(_this), "priority", 110);
    return _this;
  }
  _createClass10(MonthParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(value) {
        return value - 1;
      };
      switch (token) {
        // 1, 2, ..., 12
        case "M":
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback3);
        // 01, 02, ..., 12
        case "MM":
          return mapValue(parseNDigits(2, dateString), valueCallback3);
        // 1st, 2nd, ..., 12th
        case "Mo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "month"
          }), valueCallback3);
        // Jan, Feb, ..., Dec
        case "MMM":
          return match2.month(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
        // J, F, ..., D
        case "MMMMM":
          return match2.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
        // January, February, ..., December
        case "MMMM":
        default:
          return match2.month(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.month(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return MonthParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/StandAloneMonthParser.js
function _typeof12(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof12 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof12 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof12(obj);
}
function _classCallCheck11(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties11(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass11(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties11(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties11(Constructor, staticProps);
  return Constructor;
}
function _inherits10(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf10(subClass, superClass);
}
function _setPrototypeOf10(o, p) {
  _setPrototypeOf10 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf10(o, p);
}
function _createSuper10(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct10();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf10(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf10(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn10(this, result);
  };
}
function _possibleConstructorReturn10(self, call) {
  if (call && (_typeof12(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized10(self);
}
function _assertThisInitialized10(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct10() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf10(o) {
  _getPrototypeOf10 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf10(o);
}
function _defineProperty10(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var StandAloneMonthParser = /* @__PURE__ */ (function(_Parser) {
  _inherits10(StandAloneMonthParser2, _Parser);
  var _super = _createSuper10(StandAloneMonthParser2);
  function StandAloneMonthParser2() {
    var _this;
    _classCallCheck11(this, StandAloneMonthParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty10(_assertThisInitialized10(_this), "priority", 110);
    _defineProperty10(_assertThisInitialized10(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass11(StandAloneMonthParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(value) {
        return value - 1;
      };
      switch (token) {
        // 1, 2, ..., 12
        case "L":
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback3);
        // 01, 02, ..., 12
        case "LL":
          return mapValue(parseNDigits(2, dateString), valueCallback3);
        // 1st, 2nd, ..., 12th
        case "Lo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "month"
          }), valueCallback3);
        // Jan, Feb, ..., Dec
        case "LLL":
          return match2.month(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
        // J, F, ..., D
        case "LLLLL":
          return match2.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
        // January, February, ..., December
        case "LLLL":
        default:
          return match2.month(dateString, {
            width: "wide",
            context: "standalone"
          }) || match2.month(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneMonthParser2;
})(Parser);

// node_modules/date-fns/esm/_lib/setUTCWeek/index.js
function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

// node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekParser.js
function _typeof13(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof13 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof13 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof13(obj);
}
function _classCallCheck12(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties12(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass12(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties12(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties12(Constructor, staticProps);
  return Constructor;
}
function _inherits11(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf11(subClass, superClass);
}
function _setPrototypeOf11(o, p) {
  _setPrototypeOf11 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf11(o, p);
}
function _createSuper11(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct11();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf11(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf11(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn11(this, result);
  };
}
function _possibleConstructorReturn11(self, call) {
  if (call && (_typeof13(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized11(self);
}
function _assertThisInitialized11(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct11() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf11(o) {
  _getPrototypeOf11 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf11(o);
}
function _defineProperty11(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var LocalWeekParser = /* @__PURE__ */ (function(_Parser) {
  _inherits11(LocalWeekParser2, _Parser);
  var _super = _createSuper11(LocalWeekParser2);
  function LocalWeekParser2() {
    var _this;
    _classCallCheck12(this, LocalWeekParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty11(_assertThisInitialized11(_this), "priority", 100);
    _defineProperty11(_assertThisInitialized11(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]);
    return _this;
  }
  _createClass12(LocalWeekParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "w":
          return parseNumericPattern(numericPatterns.week, dateString);
        case "wo":
          return match2.ordinalNumber(dateString, {
            unit: "week"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options);
    }
  }]);
  return LocalWeekParser2;
})(Parser);

// node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js
function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

// node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekParser.js
function _typeof14(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof14 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof14 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof14(obj);
}
function _classCallCheck13(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties13(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass13(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties13(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties13(Constructor, staticProps);
  return Constructor;
}
function _inherits12(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf12(subClass, superClass);
}
function _setPrototypeOf12(o, p) {
  _setPrototypeOf12 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf12(o, p);
}
function _createSuper12(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct12();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf12(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf12(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn12(this, result);
  };
}
function _possibleConstructorReturn12(self, call) {
  if (call && (_typeof14(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized12(self);
}
function _assertThisInitialized12(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct12() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf12(o) {
  _getPrototypeOf12 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf12(o);
}
function _defineProperty12(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ISOWeekParser = /* @__PURE__ */ (function(_Parser) {
  _inherits12(ISOWeekParser2, _Parser);
  var _super = _createSuper12(ISOWeekParser2);
  function ISOWeekParser2() {
    var _this;
    _classCallCheck13(this, ISOWeekParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty12(_assertThisInitialized12(_this), "priority", 100);
    _defineProperty12(_assertThisInitialized12(_this), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass13(ISOWeekParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "I":
          return parseNumericPattern(numericPatterns.week, dateString);
        case "Io":
          return match2.ordinalNumber(dateString, {
            unit: "week"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value));
    }
  }]);
  return ISOWeekParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/DateParser.js
function _typeof15(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof15 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof15 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof15(obj);
}
function _classCallCheck14(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties14(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass14(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties14(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties14(Constructor, staticProps);
  return Constructor;
}
function _inherits13(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf13(subClass, superClass);
}
function _setPrototypeOf13(o, p) {
  _setPrototypeOf13 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf13(o, p);
}
function _createSuper13(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct13();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf13(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf13(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn13(this, result);
  };
}
function _possibleConstructorReturn13(self, call) {
  if (call && (_typeof15(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized13(self);
}
function _assertThisInitialized13(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct13() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf13(o) {
  _getPrototypeOf13 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf13(o);
}
function _defineProperty13(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DateParser = /* @__PURE__ */ (function(_Parser) {
  _inherits13(DateParser2, _Parser);
  var _super = _createSuper13(DateParser2);
  function DateParser2() {
    var _this;
    _classCallCheck14(this, DateParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty13(_assertThisInitialized13(_this), "priority", 90);
    _defineProperty13(_assertThisInitialized13(_this), "subPriority", 1);
    _defineProperty13(_assertThisInitialized13(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass14(DateParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "d":
          return parseNumericPattern(numericPatterns.date, dateString);
        case "do":
          return match2.ordinalNumber(dateString, {
            unit: "date"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      var month = date.getUTCMonth();
      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DateParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/DayOfYearParser.js
function _typeof16(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof16 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof16 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof16(obj);
}
function _classCallCheck15(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties15(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass15(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties15(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties15(Constructor, staticProps);
  return Constructor;
}
function _inherits14(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf14(subClass, superClass);
}
function _setPrototypeOf14(o, p) {
  _setPrototypeOf14 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf14(o, p);
}
function _createSuper14(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct14();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf14(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf14(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn14(this, result);
  };
}
function _possibleConstructorReturn14(self, call) {
  if (call && (_typeof16(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized14(self);
}
function _assertThisInitialized14(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct14() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf14(o) {
  _getPrototypeOf14 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf14(o);
}
function _defineProperty14(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DayOfYearParser = /* @__PURE__ */ (function(_Parser) {
  _inherits14(DayOfYearParser2, _Parser);
  var _super = _createSuper14(DayOfYearParser2);
  function DayOfYearParser2() {
    var _this;
    _classCallCheck15(this, DayOfYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty14(_assertThisInitialized14(_this), "priority", 90);
    _defineProperty14(_assertThisInitialized14(_this), "subpriority", 1);
    _defineProperty14(_assertThisInitialized14(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass15(DayOfYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "D":
        case "DD":
          return parseNumericPattern(numericPatterns.dayOfYear, dateString);
        case "Do":
          return match2.ordinalNumber(dateString, {
            unit: "date"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DayOfYearParser2;
})(Parser);

// node_modules/date-fns/esm/_lib/setUTCDay/index.js
function setUTCDay(dirtyDate, dirtyDay, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(2, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = toInteger(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// node_modules/date-fns/esm/parse/_lib/parsers/DayParser.js
function _typeof17(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof17 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof17 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof17(obj);
}
function _classCallCheck16(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties16(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass16(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties16(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties16(Constructor, staticProps);
  return Constructor;
}
function _inherits15(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf15(subClass, superClass);
}
function _setPrototypeOf15(o, p) {
  _setPrototypeOf15 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf15(o, p);
}
function _createSuper15(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct15();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf15(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf15(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn15(this, result);
  };
}
function _possibleConstructorReturn15(self, call) {
  if (call && (_typeof17(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized15(self);
}
function _assertThisInitialized15(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct15() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf15(o) {
  _getPrototypeOf15 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf15(o);
}
function _defineProperty15(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DayParser = /* @__PURE__ */ (function(_Parser) {
  _inherits15(DayParser2, _Parser);
  var _super = _createSuper15(DayParser2);
  function DayParser2() {
    var _this;
    _classCallCheck16(this, DayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty15(_assertThisInitialized15(_this), "priority", 90);
    _defineProperty15(_assertThisInitialized15(_this), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass16(DayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        // Tue
        case "E":
        case "EE":
        case "EEE":
          return match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        // T
        case "EEEEE":
          return match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        // Tu
        case "EEEEEE":
          return match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        // Tuesday
        case "EEEE":
        default:
          return match2.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DayParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/LocalDayParser.js
function _typeof18(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof18 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof18 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof18(obj);
}
function _classCallCheck17(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties17(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass17(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties17(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties17(Constructor, staticProps);
  return Constructor;
}
function _inherits16(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf16(subClass, superClass);
}
function _setPrototypeOf16(o, p) {
  _setPrototypeOf16 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf16(o, p);
}
function _createSuper16(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct16();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf16(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf16(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn16(this, result);
  };
}
function _possibleConstructorReturn16(self, call) {
  if (call && (_typeof18(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized16(self);
}
function _assertThisInitialized16(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct16() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf16(o) {
  _getPrototypeOf16 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf16(o);
}
function _defineProperty16(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var LocalDayParser = /* @__PURE__ */ (function(_Parser) {
  _inherits16(LocalDayParser2, _Parser);
  var _super = _createSuper16(LocalDayParser2);
  function LocalDayParser2() {
    var _this;
    _classCallCheck17(this, LocalDayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty16(_assertThisInitialized16(_this), "priority", 90);
    _defineProperty16(_assertThisInitialized16(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]);
    return _this;
  }
  _createClass17(LocalDayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2, options) {
      var valueCallback3 = function valueCallback4(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        // 3
        case "e":
        case "ee":
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
        // 3rd
        case "eo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "day"
          }), valueCallback3);
        // Tue
        case "eee":
          return match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        // T
        case "eeeee":
          return match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        // Tu
        case "eeeeee":
          return match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        // Tuesday
        case "eeee":
        default:
          return match2.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return LocalDayParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/StandAloneLocalDayParser.js
function _typeof19(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof19 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof19 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof19(obj);
}
function _classCallCheck18(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties18(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass18(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties18(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties18(Constructor, staticProps);
  return Constructor;
}
function _inherits17(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf17(subClass, superClass);
}
function _setPrototypeOf17(o, p) {
  _setPrototypeOf17 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf17(o, p);
}
function _createSuper17(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct17();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf17(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf17(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn17(this, result);
  };
}
function _possibleConstructorReturn17(self, call) {
  if (call && (_typeof19(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized17(self);
}
function _assertThisInitialized17(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct17() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf17(o) {
  _getPrototypeOf17 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf17(o);
}
function _defineProperty17(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var StandAloneLocalDayParser = /* @__PURE__ */ (function(_Parser) {
  _inherits17(StandAloneLocalDayParser2, _Parser);
  var _super = _createSuper17(StandAloneLocalDayParser2);
  function StandAloneLocalDayParser2() {
    var _this;
    _classCallCheck18(this, StandAloneLocalDayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty17(_assertThisInitialized17(_this), "priority", 90);
    _defineProperty17(_assertThisInitialized17(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]);
    return _this;
  }
  _createClass18(StandAloneLocalDayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2, options) {
      var valueCallback3 = function valueCallback4(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        // 3
        case "c":
        case "cc":
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
        // 3rd
        case "co":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "day"
          }), valueCallback3);
        // Tue
        case "ccc":
          return match2.day(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        // T
        case "ccccc":
          return match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        // Tu
        case "cccccc":
          return match2.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        // Tuesday
        case "cccc":
        default:
          return match2.day(dateString, {
            width: "wide",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneLocalDayParser2;
})(Parser);

// node_modules/date-fns/esm/_lib/setUTCISODay/index.js
function setUTCISODay(dirtyDate, dirtyDay) {
  requiredArgs(2, arguments);
  var day = toInteger(dirtyDay);
  if (day % 7 === 0) {
    day = day - 7;
  }
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// node_modules/date-fns/esm/parse/_lib/parsers/ISODayParser.js
function _typeof20(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof20 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof20 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof20(obj);
}
function _classCallCheck19(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties19(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass19(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties19(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties19(Constructor, staticProps);
  return Constructor;
}
function _inherits18(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf18(subClass, superClass);
}
function _setPrototypeOf18(o, p) {
  _setPrototypeOf18 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf18(o, p);
}
function _createSuper18(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct18();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf18(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf18(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn18(this, result);
  };
}
function _possibleConstructorReturn18(self, call) {
  if (call && (_typeof20(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized18(self);
}
function _assertThisInitialized18(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct18() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf18(o) {
  _getPrototypeOf18 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf18(o);
}
function _defineProperty18(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ISODayParser = /* @__PURE__ */ (function(_Parser) {
  _inherits18(ISODayParser2, _Parser);
  var _super = _createSuper18(ISODayParser2);
  function ISODayParser2() {
    var _this;
    _classCallCheck19(this, ISODayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty18(_assertThisInitialized18(_this), "priority", 90);
    _defineProperty18(_assertThisInitialized18(_this), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass19(ISODayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(value) {
        if (value === 0) {
          return 7;
        }
        return value;
      };
      switch (token) {
        // 2
        case "i":
        case "ii":
          return parseNDigits(token.length, dateString);
        // 2nd
        case "io":
          return match2.ordinalNumber(dateString, {
            unit: "day"
          });
        // Tue
        case "iii":
          return mapValue(match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
        // T
        case "iiiii":
          return mapValue(match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
        // Tu
        case "iiiiii":
          return mapValue(match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
        // Tuesday
        case "iiii":
        default:
          return mapValue(match2.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 7;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date = setUTCISODay(date, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return ISODayParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/AMPMParser.js
function _typeof21(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof21 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof21 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof21(obj);
}
function _classCallCheck20(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties20(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass20(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties20(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties20(Constructor, staticProps);
  return Constructor;
}
function _inherits19(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf19(subClass, superClass);
}
function _setPrototypeOf19(o, p) {
  _setPrototypeOf19 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf19(o, p);
}
function _createSuper19(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct19();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf19(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf19(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn19(this, result);
  };
}
function _possibleConstructorReturn19(self, call) {
  if (call && (_typeof21(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized19(self);
}
function _assertThisInitialized19(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct19() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf19(o) {
  _getPrototypeOf19 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf19(o);
}
function _defineProperty19(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var AMPMParser = /* @__PURE__ */ (function(_Parser) {
  _inherits19(AMPMParser2, _Parser);
  var _super = _createSuper19(AMPMParser2);
  function AMPMParser2() {
    var _this;
    _classCallCheck20(this, AMPMParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty19(_assertThisInitialized19(_this), "priority", 80);
    _defineProperty19(_assertThisInitialized19(_this), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass20(AMPMParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "a":
        case "aa":
        case "aaa":
          return match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return match2.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return AMPMParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/AMPMMidnightParser.js
function _typeof22(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof22 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof22 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof22(obj);
}
function _classCallCheck21(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties21(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass21(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties21(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties21(Constructor, staticProps);
  return Constructor;
}
function _inherits20(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf20(subClass, superClass);
}
function _setPrototypeOf20(o, p) {
  _setPrototypeOf20 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf20(o, p);
}
function _createSuper20(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct20();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf20(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf20(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn20(this, result);
  };
}
function _possibleConstructorReturn20(self, call) {
  if (call && (_typeof22(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized20(self);
}
function _assertThisInitialized20(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct20() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf20(o) {
  _getPrototypeOf20 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf20(o);
}
function _defineProperty20(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var AMPMMidnightParser = /* @__PURE__ */ (function(_Parser) {
  _inherits20(AMPMMidnightParser2, _Parser);
  var _super = _createSuper20(AMPMMidnightParser2);
  function AMPMMidnightParser2() {
    var _this;
    _classCallCheck21(this, AMPMMidnightParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty20(_assertThisInitialized20(_this), "priority", 80);
    _defineProperty20(_assertThisInitialized20(_this), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass21(AMPMMidnightParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "b":
        case "bb":
        case "bbb":
          return match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return match2.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return AMPMMidnightParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/DayPeriodParser.js
function _typeof23(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof23 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof23 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof23(obj);
}
function _classCallCheck22(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties22(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass22(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties22(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties22(Constructor, staticProps);
  return Constructor;
}
function _inherits21(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf21(subClass, superClass);
}
function _setPrototypeOf21(o, p) {
  _setPrototypeOf21 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf21(o, p);
}
function _createSuper21(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct21();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf21(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf21(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn21(this, result);
  };
}
function _possibleConstructorReturn21(self, call) {
  if (call && (_typeof23(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized21(self);
}
function _assertThisInitialized21(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct21() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf21(o) {
  _getPrototypeOf21 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf21(o);
}
function _defineProperty21(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DayPeriodParser = /* @__PURE__ */ (function(_Parser) {
  _inherits21(DayPeriodParser2, _Parser);
  var _super = _createSuper21(DayPeriodParser2);
  function DayPeriodParser2() {
    var _this;
    _classCallCheck22(this, DayPeriodParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty21(_assertThisInitialized21(_this), "priority", 80);
    _defineProperty21(_assertThisInitialized21(_this), "incompatibleTokens", ["a", "b", "t", "T"]);
    return _this;
  }
  _createClass22(DayPeriodParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "B":
        case "BB":
        case "BBB":
          return match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return match2.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return DayPeriodParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/Hour1to12Parser.js
function _typeof24(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof24 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof24 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof24(obj);
}
function _classCallCheck23(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties23(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass23(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties23(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties23(Constructor, staticProps);
  return Constructor;
}
function _inherits22(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf22(subClass, superClass);
}
function _setPrototypeOf22(o, p) {
  _setPrototypeOf22 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf22(o, p);
}
function _createSuper22(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct22();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf22(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf22(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn22(this, result);
  };
}
function _possibleConstructorReturn22(self, call) {
  if (call && (_typeof24(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized22(self);
}
function _assertThisInitialized22(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct22() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf22(o) {
  _getPrototypeOf22 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf22(o);
}
function _defineProperty22(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Hour1to12Parser = /* @__PURE__ */ (function(_Parser) {
  _inherits22(Hour1to12Parser2, _Parser);
  var _super = _createSuper22(Hour1to12Parser2);
  function Hour1to12Parser2() {
    var _this;
    _classCallCheck23(this, Hour1to12Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty22(_assertThisInitialized22(_this), "priority", 70);
    _defineProperty22(_assertThisInitialized22(_this), "incompatibleTokens", ["H", "K", "k", "t", "T"]);
    return _this;
  }
  _createClass23(Hour1to12Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "h":
          return parseNumericPattern(numericPatterns.hour12h, dateString);
        case "ho":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 12;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  }]);
  return Hour1to12Parser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/Hour0to23Parser.js
function _typeof25(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof25 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof25 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof25(obj);
}
function _classCallCheck24(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties24(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass24(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties24(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties24(Constructor, staticProps);
  return Constructor;
}
function _inherits23(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf23(subClass, superClass);
}
function _setPrototypeOf23(o, p) {
  _setPrototypeOf23 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf23(o, p);
}
function _createSuper23(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct23();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf23(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf23(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn23(this, result);
  };
}
function _possibleConstructorReturn23(self, call) {
  if (call && (_typeof25(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized23(self);
}
function _assertThisInitialized23(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct23() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf23(o) {
  _getPrototypeOf23 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf23(o);
}
function _defineProperty23(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Hour0to23Parser = /* @__PURE__ */ (function(_Parser) {
  _inherits23(Hour0to23Parser2, _Parser);
  var _super = _createSuper23(Hour0to23Parser2);
  function Hour0to23Parser2() {
    var _this;
    _classCallCheck24(this, Hour0to23Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty23(_assertThisInitialized23(_this), "priority", 70);
    _defineProperty23(_assertThisInitialized23(_this), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
    return _this;
  }
  _createClass24(Hour0to23Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "H":
          return parseNumericPattern(numericPatterns.hour23h, dateString);
        case "Ho":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 23;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    }
  }]);
  return Hour0to23Parser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/Hour0To11Parser.js
function _typeof26(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof26 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof26 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof26(obj);
}
function _classCallCheck25(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties25(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass25(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties25(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties25(Constructor, staticProps);
  return Constructor;
}
function _inherits24(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf24(subClass, superClass);
}
function _setPrototypeOf24(o, p) {
  _setPrototypeOf24 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf24(o, p);
}
function _createSuper24(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct24();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf24(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf24(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn24(this, result);
  };
}
function _possibleConstructorReturn24(self, call) {
  if (call && (_typeof26(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized24(self);
}
function _assertThisInitialized24(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct24() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf24(o) {
  _getPrototypeOf24 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf24(o);
}
function _defineProperty24(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Hour0To11Parser = /* @__PURE__ */ (function(_Parser) {
  _inherits24(Hour0To11Parser2, _Parser);
  var _super = _createSuper24(Hour0To11Parser2);
  function Hour0To11Parser2() {
    var _this;
    _classCallCheck25(this, Hour0To11Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty24(_assertThisInitialized24(_this), "priority", 70);
    _defineProperty24(_assertThisInitialized24(_this), "incompatibleTokens", ["h", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass25(Hour0To11Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "K":
          return parseNumericPattern(numericPatterns.hour11h, dateString);
        case "Ko":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  }]);
  return Hour0To11Parser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/Hour1To24Parser.js
function _typeof27(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof27 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof27 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof27(obj);
}
function _classCallCheck26(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties26(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass26(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties26(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties26(Constructor, staticProps);
  return Constructor;
}
function _inherits25(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf25(subClass, superClass);
}
function _setPrototypeOf25(o, p) {
  _setPrototypeOf25 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf25(o, p);
}
function _createSuper25(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct25();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf25(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf25(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn25(this, result);
  };
}
function _possibleConstructorReturn25(self, call) {
  if (call && (_typeof27(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized25(self);
}
function _assertThisInitialized25(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct25() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf25(o) {
  _getPrototypeOf25 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf25(o);
}
function _defineProperty25(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Hour1To24Parser = /* @__PURE__ */ (function(_Parser) {
  _inherits25(Hour1To24Parser2, _Parser);
  var _super = _createSuper25(Hour1To24Parser2);
  function Hour1To24Parser2() {
    var _this;
    _classCallCheck26(this, Hour1To24Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty25(_assertThisInitialized25(_this), "priority", 70);
    _defineProperty25(_assertThisInitialized25(_this), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
    return _this;
  }
  _createClass26(Hour1To24Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "k":
          return parseNumericPattern(numericPatterns.hour24h, dateString);
        case "ko":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 24;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    }
  }]);
  return Hour1To24Parser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/MinuteParser.js
function _typeof28(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof28 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof28 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof28(obj);
}
function _classCallCheck27(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties27(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass27(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties27(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties27(Constructor, staticProps);
  return Constructor;
}
function _inherits26(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf26(subClass, superClass);
}
function _setPrototypeOf26(o, p) {
  _setPrototypeOf26 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf26(o, p);
}
function _createSuper26(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct26();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf26(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf26(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn26(this, result);
  };
}
function _possibleConstructorReturn26(self, call) {
  if (call && (_typeof28(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized26(self);
}
function _assertThisInitialized26(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct26() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf26(o) {
  _getPrototypeOf26 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf26(o);
}
function _defineProperty26(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var MinuteParser = /* @__PURE__ */ (function(_Parser) {
  _inherits26(MinuteParser2, _Parser);
  var _super = _createSuper26(MinuteParser2);
  function MinuteParser2() {
    var _this;
    _classCallCheck27(this, MinuteParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty26(_assertThisInitialized26(_this), "priority", 60);
    _defineProperty26(_assertThisInitialized26(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass27(MinuteParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "m":
          return parseNumericPattern(numericPatterns.minute, dateString);
        case "mo":
          return match2.ordinalNumber(dateString, {
            unit: "minute"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    }
  }]);
  return MinuteParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/SecondParser.js
function _typeof29(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof29 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof29 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof29(obj);
}
function _classCallCheck28(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties28(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass28(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties28(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties28(Constructor, staticProps);
  return Constructor;
}
function _inherits27(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf27(subClass, superClass);
}
function _setPrototypeOf27(o, p) {
  _setPrototypeOf27 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf27(o, p);
}
function _createSuper27(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct27();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf27(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf27(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn27(this, result);
  };
}
function _possibleConstructorReturn27(self, call) {
  if (call && (_typeof29(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized27(self);
}
function _assertThisInitialized27(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct27() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf27(o) {
  _getPrototypeOf27 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf27(o);
}
function _defineProperty27(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var SecondParser = /* @__PURE__ */ (function(_Parser) {
  _inherits27(SecondParser2, _Parser);
  var _super = _createSuper27(SecondParser2);
  function SecondParser2() {
    var _this;
    _classCallCheck28(this, SecondParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty27(_assertThisInitialized27(_this), "priority", 50);
    _defineProperty27(_assertThisInitialized27(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass28(SecondParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "s":
          return parseNumericPattern(numericPatterns.second, dateString);
        case "so":
          return match2.ordinalNumber(dateString, {
            unit: "second"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCSeconds(value, 0);
      return date;
    }
  }]);
  return SecondParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/FractionOfSecondParser.js
function _typeof30(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof30 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof30 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof30(obj);
}
function _classCallCheck29(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties29(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass29(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties29(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties29(Constructor, staticProps);
  return Constructor;
}
function _inherits28(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf28(subClass, superClass);
}
function _setPrototypeOf28(o, p) {
  _setPrototypeOf28 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf28(o, p);
}
function _createSuper28(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct28();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf28(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf28(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn28(this, result);
  };
}
function _possibleConstructorReturn28(self, call) {
  if (call && (_typeof30(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized28(self);
}
function _assertThisInitialized28(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct28() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf28(o) {
  _getPrototypeOf28 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf28(o);
}
function _defineProperty28(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var FractionOfSecondParser = /* @__PURE__ */ (function(_Parser) {
  _inherits28(FractionOfSecondParser2, _Parser);
  var _super = _createSuper28(FractionOfSecondParser2);
  function FractionOfSecondParser2() {
    var _this;
    _classCallCheck29(this, FractionOfSecondParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty28(_assertThisInitialized28(_this), "priority", 30);
    _defineProperty28(_assertThisInitialized28(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass29(FractionOfSecondParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      var valueCallback3 = function valueCallback4(value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };
      return mapValue(parseNDigits(token.length, dateString), valueCallback3);
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMilliseconds(value);
      return date;
    }
  }]);
  return FractionOfSecondParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneWithZParser.js
function _typeof31(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof31 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof31 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof31(obj);
}
function _classCallCheck30(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties30(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass30(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties30(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties30(Constructor, staticProps);
  return Constructor;
}
function _inherits29(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf29(subClass, superClass);
}
function _setPrototypeOf29(o, p) {
  _setPrototypeOf29 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf29(o, p);
}
function _createSuper29(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct29();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf29(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf29(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn29(this, result);
  };
}
function _possibleConstructorReturn29(self, call) {
  if (call && (_typeof31(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized29(self);
}
function _assertThisInitialized29(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct29() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf29(o) {
  _getPrototypeOf29 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf29(o);
}
function _defineProperty29(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ISOTimezoneWithZParser = /* @__PURE__ */ (function(_Parser) {
  _inherits29(ISOTimezoneWithZParser2, _Parser);
  var _super = _createSuper29(ISOTimezoneWithZParser2);
  function ISOTimezoneWithZParser2() {
    var _this;
    _classCallCheck30(this, ISOTimezoneWithZParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty29(_assertThisInitialized29(_this), "priority", 10);
    _defineProperty29(_assertThisInitialized29(_this), "incompatibleTokens", ["t", "T", "x"]);
    return _this;
  }
  _createClass30(ISOTimezoneWithZParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      switch (token) {
        case "X":
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
        case "XX":
          return parseTimezonePattern(timezonePatterns.basic, dateString);
        case "XXXX":
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
        case "XXXXX":
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
        case "XXX":
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }
      return new Date(date.getTime() - value);
    }
  }]);
  return ISOTimezoneWithZParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneParser.js
function _typeof32(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof32 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof32 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof32(obj);
}
function _classCallCheck31(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties31(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass31(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties31(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties31(Constructor, staticProps);
  return Constructor;
}
function _inherits30(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf30(subClass, superClass);
}
function _setPrototypeOf30(o, p) {
  _setPrototypeOf30 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf30(o, p);
}
function _createSuper30(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct30();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf30(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf30(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn30(this, result);
  };
}
function _possibleConstructorReturn30(self, call) {
  if (call && (_typeof32(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized30(self);
}
function _assertThisInitialized30(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct30() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf30(o) {
  _getPrototypeOf30 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf30(o);
}
function _defineProperty30(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ISOTimezoneParser = /* @__PURE__ */ (function(_Parser) {
  _inherits30(ISOTimezoneParser2, _Parser);
  var _super = _createSuper30(ISOTimezoneParser2);
  function ISOTimezoneParser2() {
    var _this;
    _classCallCheck31(this, ISOTimezoneParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty30(_assertThisInitialized30(_this), "priority", 10);
    _defineProperty30(_assertThisInitialized30(_this), "incompatibleTokens", ["t", "T", "X"]);
    return _this;
  }
  _createClass31(ISOTimezoneParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      switch (token) {
        case "x":
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
        case "xx":
          return parseTimezonePattern(timezonePatterns.basic, dateString);
        case "xxxx":
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
        case "xxxxx":
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
        case "xxx":
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }
      return new Date(date.getTime() - value);
    }
  }]);
  return ISOTimezoneParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/TimestampSecondsParser.js
function _typeof33(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof33 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof33 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof33(obj);
}
function _classCallCheck32(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties32(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass32(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties32(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties32(Constructor, staticProps);
  return Constructor;
}
function _inherits31(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf31(subClass, superClass);
}
function _setPrototypeOf31(o, p) {
  _setPrototypeOf31 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf31(o, p);
}
function _createSuper31(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct31();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf31(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf31(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn31(this, result);
  };
}
function _possibleConstructorReturn31(self, call) {
  if (call && (_typeof33(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized31(self);
}
function _assertThisInitialized31(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct31() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf31(o) {
  _getPrototypeOf31 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf31(o);
}
function _defineProperty31(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var TimestampSecondsParser = /* @__PURE__ */ (function(_Parser) {
  _inherits31(TimestampSecondsParser2, _Parser);
  var _super = _createSuper31(TimestampSecondsParser2);
  function TimestampSecondsParser2() {
    var _this;
    _classCallCheck32(this, TimestampSecondsParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty31(_assertThisInitialized31(_this), "priority", 40);
    _defineProperty31(_assertThisInitialized31(_this), "incompatibleTokens", "*");
    return _this;
  }
  _createClass32(TimestampSecondsParser2, [{
    key: "parse",
    value: function parse2(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set(_date, _flags, value) {
      return [new Date(value * 1e3), {
        timestampIsSet: true
      }];
    }
  }]);
  return TimestampSecondsParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/TimestampMillisecondsParser.js
function _typeof34(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof34 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof34 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof34(obj);
}
function _classCallCheck33(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties33(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass33(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties33(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties33(Constructor, staticProps);
  return Constructor;
}
function _inherits32(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf32(subClass, superClass);
}
function _setPrototypeOf32(o, p) {
  _setPrototypeOf32 = Object.setPrototypeOf || function _setPrototypeOf33(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf32(o, p);
}
function _createSuper32(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct32();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf32(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf32(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn32(this, result);
  };
}
function _possibleConstructorReturn32(self, call) {
  if (call && (_typeof34(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized32(self);
}
function _assertThisInitialized32(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct32() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf32(o) {
  _getPrototypeOf32 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf33(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf32(o);
}
function _defineProperty32(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var TimestampMillisecondsParser = /* @__PURE__ */ (function(_Parser) {
  _inherits32(TimestampMillisecondsParser2, _Parser);
  var _super = _createSuper32(TimestampMillisecondsParser2);
  function TimestampMillisecondsParser2() {
    var _this;
    _classCallCheck33(this, TimestampMillisecondsParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty32(_assertThisInitialized32(_this), "priority", 20);
    _defineProperty32(_assertThisInitialized32(_this), "incompatibleTokens", "*");
    return _this;
  }
  _createClass33(TimestampMillisecondsParser2, [{
    key: "parse",
    value: function parse2(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set(_date, _flags, value) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    }
  }]);
  return TimestampMillisecondsParser2;
})(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/index.js
var parsers = {
  G: new EraParser(),
  y: new YearParser(),
  Y: new LocalWeekYearParser(),
  R: new ISOWeekYearParser(),
  u: new ExtendedYearParser(),
  Q: new QuarterParser(),
  q: new StandAloneQuarterParser(),
  M: new MonthParser(),
  L: new StandAloneMonthParser(),
  w: new LocalWeekParser(),
  I: new ISOWeekParser(),
  d: new DateParser(),
  D: new DayOfYearParser(),
  E: new DayParser(),
  e: new LocalDayParser(),
  c: new StandAloneLocalDayParser(),
  i: new ISODayParser(),
  a: new AMPMParser(),
  b: new AMPMMidnightParser(),
  B: new DayPeriodParser(),
  h: new Hour1to12Parser(),
  H: new Hour0to23Parser(),
  K: new Hour0To11Parser(),
  k: new Hour1To24Parser(),
  m: new MinuteParser(),
  s: new SecondParser(),
  S: new FractionOfSecondParser(),
  X: new ISOTimezoneWithZParser(),
  x: new ISOTimezoneParser(),
  t: new TimestampSecondsParser(),
  T: new TimestampMillisecondsParser()
};

// node_modules/date-fns/esm/parse/index.js
function _typeof35(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof35 = function _typeof36(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof35 = function _typeof36(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof35(obj);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i2 = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i2 >= o.length) return { done: true };
        return { done: false, value: o[i2++] };
      }, e: function e2(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s3() {
    it = o[Symbol.iterator]();
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e2(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null) it.return();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
var formattingTokensRegExp2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp2 = /^'([^]*?)'?$/;
var doubleQuoteRegExp2 = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp2 = /[a-zA-Z]/;
function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var defaultOptions2 = getDefaultOptions();
  var locale2 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : defaultLocale_default;
  if (!locale2.match) {
    throw new RangeError("locale must contain match property");
  }
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (formatString === "") {
    if (dateString === "") {
      return toDate(dirtyReferenceDate);
    } else {
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  var subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2
  };
  var setters = [new DateToSystemTimezoneSetter()];
  var tokens = formatString.match(longFormattingTokensRegExp2).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter in longFormatters_default) {
      var longFormatter = longFormatters_default[firstCharacter];
      return longFormatter(substring, locale2.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp2);
  var usedTokens = [];
  var _iterator = _createForOfIteratorHelper(tokens), _step;
  try {
    var _loop = function _loop2() {
      var token = _step.value;
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }
      var firstCharacter = token[0];
      var parser = parsers[firstCharacter];
      if (parser) {
        var incompatibleTokens = parser.incompatibleTokens;
        if (Array.isArray(incompatibleTokens)) {
          var incompatibleToken = usedTokens.find(function(usedToken) {
            return incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter;
          });
          if (incompatibleToken) {
            throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
          }
        } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
          throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
        }
        usedTokens.push({
          token: firstCharacter,
          fullToken: token
        });
        var parseResult = parser.run(dateString, token, locale2.match, subFnOptions);
        if (!parseResult) {
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        }
        setters.push(parseResult.setter);
        dateString = parseResult.rest;
      } else {
        if (firstCharacter.match(unescapedLatinCharacterRegExp2)) {
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        if (token === "''") {
          token = "'";
        } else if (firstCharacter === "'") {
          token = cleanEscapedString2(token);
        }
        if (dateString.indexOf(token) === 0) {
          dateString = dateString.slice(token.length);
        } else {
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        }
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _ret = _loop();
      if (_typeof35(_ret) === "object") return _ret.v;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var uniquePrioritySetters = setters.map(function(setter2) {
    return setter2.priority;
  }).sort(function(a3, b2) {
    return b2 - a3;
  }).filter(function(priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function(priority) {
    return setters.filter(function(setter2) {
      return setter2.priority === priority;
    }).sort(function(a3, b2) {
      return b2.subPriority - a3.subPriority;
    });
  }).map(function(setterArray) {
    return setterArray[0];
  });
  var date = toDate(dirtyReferenceDate);
  if (isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
  var flags = {};
  var _iterator2 = _createForOfIteratorHelper(uniquePrioritySetters), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var setter = _step2.value;
      if (!setter.validate(utcDate, subFnOptions)) {
        return /* @__PURE__ */ new Date(NaN);
      }
      var result = setter.set(utcDate, flags, subFnOptions);
      if (Array.isArray(result)) {
        utcDate = result[0];
        assign(flags, result[1]);
      } else {
        utcDate = result;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return utcDate;
}
function cleanEscapedString2(input) {
  return input.match(escapedStringRegExp2)[1].replace(doubleQuoteRegExp2, "'");
}

// node_modules/date-fns/esm/subDays/index.js
function subDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addDays(dirtyDate, -amount);
}

// src/app/player/components/multi-epg/multi-epg-container.component.ts
var _c05 = ["epgContainer"];
var _forTrack0 = ($index, $item) => $item.channel;
function MultiEpgContainerComponent_For_64_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275element(1, "img", 18);
    \u0275\u0275text(2, "\n              ");
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r2.icon, \u0275\u0275sanitizeUrl)("alt", item_r2.name);
  }
}
function MultiEpgContainerComponent_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "g");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275text(3, "\n        ");
    \u0275\u0275elementStart(4, "g", 14);
    \u0275\u0275text(5, "\n          ");
    \u0275\u0275element(6, "rect", 15);
    \u0275\u0275text(7, "\n          ");
    \u0275\u0275elementStart(8, "foreignObject", 16);
    \u0275\u0275text(9, "\n            ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 17);
    \u0275\u0275text(11, "\n              ");
    \u0275\u0275conditionalCreate(12, MultiEpgContainerComponent_For_64_Conditional_12_Template, 3, 2);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n    ");
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const \u0275$index_82_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275attribute("height", ctx_r3.barHeight)("y", ctx_r3.barHeight * \u0275$index_82_r3 + ctx_r3.barHeight);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("height", ctx_r3.barHeight)("y", ctx_r3.barHeight * \u0275$index_82_r3 + ctx_r3.barHeight);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(item_r2.icon ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.name);
  }
}
function MultiEpgContainerComponent_For_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "g");
    \u0275\u0275text(2, "\n          ");
    \u0275\u0275element(3, "rect", 19);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275text(6, "\n          ");
    \u0275\u0275elementStart(7, "text", 20);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n      ");
  }
  if (rf & 2) {
    const hour_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", hour_r5 + ":00");
    \u0275\u0275attribute("width", \u0275\u0275pipeBind1(4, 6, ctx_r3.hourWidth$))("height", ctx_r3.barHeight)("x", hour_r5 * \u0275\u0275pipeBind1(5, 8, ctx_r3.hourWidth$));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("x", hour_r5 * \u0275\u0275pipeBind1(8, 10, ctx_r3.hourWidth$));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", hour_r5, ":00\n          ");
  }
}
function MultiEpgContainerComponent_For_76_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "g", 21);
    \u0275\u0275listener("click", function MultiEpgContainerComponent_For_76_For_4_Template_g_click_1_listener() {
      const program_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.showDescription(program_r7));
    });
    \u0275\u0275text(2, "\n              ");
    \u0275\u0275element(3, "rect", 22);
    \u0275\u0275text(4, "\n              ");
    \u0275\u0275elementStart(5, "foreignObject");
    \u0275\u0275text(6, "\n                ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n          ");
  }
  if (rf & 2) {
    const program_r7 = ctx.$implicit;
    const \u0275$index_139_r8 = \u0275\u0275nextContext().$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("transform", "translate(" + program_r7.startPosition + "," + (ctx_r3.barHeight * \u0275$index_139_r8 + ctx_r3.barHeight) + ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", program_r7.title);
    \u0275\u0275attribute("width", program_r7.width)("height", ctx_r3.barHeight);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("width", program_r7.width)("height", ctx_r3.barHeight);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(program_r7.title);
  }
}
function MultiEpgContainerComponent_For_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "g");
    \u0275\u0275text(2, "\n          ");
    \u0275\u0275repeaterCreate(3, MultiEpgContainerComponent_For_76_For_4_Template, 12, 7, null, null, \u0275\u0275componentInstance().trackByProgram, true);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n      ");
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275repeater(item_r9.programs);
  }
}
var MultiEpgContainerComponent = class _MultiEpgContainerComponent {
  set playlistChannels(value) {
    if (value) {
      value.subscribe((channels) => {
        this._playlistChannels = channels;
        this.initializeVisibleChannels();
        this.requestPrograms();
      });
    }
  }
  constructor(dialog, cdr, overlayRef) {
    this.dialog = dialog;
    this.cdr = cdr;
    this.overlayRef = overlayRef;
    this._playlistChannels = [];
    this.timeHeader = Array.from({ length: 24 }, (_, i2) => i2);
    this.hourWidth$ = new BehaviorSubject(150);
    this.barHeight = 50;
    this.channels$ = new BehaviorSubject([]);
    this.today = format(/* @__PURE__ */ new Date(), "yyyyMMdd");
    this.currentTimeLine = 0;
    this.visibleChannels = 20;
    this.channelsLowerRange = 0;
    this.channelsUpperRange = this.visibleChannels;
    this.originalEpgData = [];
    this.dateCache = /* @__PURE__ */ new Map();
    this.isLastPage = false;
    this.totalChannels = 0;
  }
  ngOnInit() {
    this.calculateCurrentTimeBar();
    this.interval = setInterval(() => {
      this.calculateCurrentTimeBar();
    }, 6e4);
  }
  ngAfterViewInit() {
    this.initializeVisibleChannels();
    this.scrollToCurrentTime();
  }
  scrollToCurrentTime() {
    const timeNow = /* @__PURE__ */ new Date();
    const scrollPosition = (timeNow.getHours() + timeNow.getMinutes() / 60) * this.hourWidth$.value;
    requestAnimationFrame(() => {
      const container = document.getElementById("epg-container");
      if (container) {
        container.scrollTo(scrollPosition < 1e3 ? 0 : scrollPosition - 150, 0);
      }
    });
  }
  initializeVisibleChannels() {
    if (this.epgContainer) {
      const containerHeight = this.epgContainer.nativeElement.offsetHeight;
      const calculatedVisibleChannels = Math.floor((containerHeight - this.barHeight) / this.barHeight);
      this.visibleChannels = Math.max(10, Math.min(calculatedVisibleChannels, 20));
      this.channelsUpperRange = this.visibleChannels;
    }
  }
  ngOnDestroy() {
    this.hourWidth$.complete();
    this.channels$.complete();
    clearInterval(this.interval);
  }
  trackByIndex(index) {
    return index;
  }
  trackByProgram(_, program) {
    return `${program.start}|${program?.title?.toString() ?? ""}`;
  }
  requestPrograms() {
    return __async(this, null, function* () {
      const today = /* @__PURE__ */ new Date();
      const startTime = format(subDays(today, 1), "yyyyMMddHHmmss +0000");
      const endTime = format(addDays(today, 2), "yyyyMMddHHmmss +0000");
      try {
        const channelNames = this._playlistChannels.map((channel) => channel.name?.trim() ?? "").filter((name) => name !== "");
        console.log("Requesting EPG data:");
        console.log("- Skip:", this.channelsLowerRange);
        console.log("- Limit:", this.visibleChannels);
        console.log("- Channel names count:", channelNames.length);
        const response = yield invoke("get_epg_by_range", {
          startTime,
          endTime,
          skip: this.channelsLowerRange,
          limit: this.visibleChannels,
          playlistChannelNames: channelNames
        });
        if (response) {
          console.log("Received channels:", response.length);
          this.originalEpgData = response;
          this.channels$.next(this.enrichProgramData());
          this.isLastPage = response.length < this.visibleChannels;
          this.cdr.detectChanges();
        }
      } catch (error) {
        console.error("Error fetching EPG data:", error);
      }
    });
  }
  nextChannels() {
    this.channelsLowerRange += this.visibleChannels;
    this.channelsUpperRange = this.channelsLowerRange + this.visibleChannels;
    this.requestPrograms();
  }
  previousChannels() {
    this.channelsLowerRange = Math.max(0, this.channelsLowerRange - this.visibleChannels);
    this.channelsUpperRange = this.channelsLowerRange + this.visibleChannels;
    this.requestPrograms();
  }
  getCachedDate(dateStr) {
    let date = this.dateCache.get(dateStr);
    if (!date) {
      date = new Date(dateStr);
      this.dateCache.set(dateStr, date);
    }
    return date;
  }
  enrichProgramData() {
    const hourWidth = this.hourWidth$.value;
    return this.originalEpgData.map((channel) => {
      const filteredPrograms = channel.programs.filter((item) => {
        const itemDate = format(this.getCachedDate(item.start), "yyyyMMdd");
        return itemDate === this.today;
      }).map((program) => {
        const startDate = this.getCachedDate(program.start);
        const stopDate = this.getCachedDate(program.stop);
        const startPosition = (startDate.getHours() + startDate.getMinutes() / 60) * hourWidth;
        const duration = differenceInMinutes(stopDate, startDate);
        const width = duration * hourWidth / 60;
        return __spreadProps(__spreadValues({}, program), {
          startDate,
          stopDate,
          startPosition,
          width
        });
      });
      return __spreadProps(__spreadValues({}, channel), {
        programs: filteredPrograms
      });
    });
  }
  zoomIn() {
    if (this.hourWidth$.value >= 800)
      return;
    this.hourWidth$.next(this.hourWidth$.value + 50);
    this.channels$.next(this.enrichProgramData());
    this.calculateCurrentTimeBar();
    this.cdr.detectChanges();
  }
  zoomOut() {
    if (this.hourWidth$.value <= 50)
      return;
    this.hourWidth$.next(this.hourWidth$.value - 50);
    this.channels$.next(this.enrichProgramData());
    this.calculateCurrentTimeBar();
    this.cdr.detectChanges();
  }
  calculateCurrentTimeBar() {
    this.currentTimeLine = ((/* @__PURE__ */ new Date()).getHours() + (/* @__PURE__ */ new Date()).getMinutes() / 60) * this.hourWidth$.value;
    this.cdr.detectChanges();
  }
  switchDay(direction) {
    const currentDate = parse(this.today, "yyyyMMdd", /* @__PURE__ */ new Date());
    this.today = direction === "prev" ? format(subDays(currentDate, 1), "yyyyMMdd") : format(addDays(currentDate, 1), "yyyyMMdd");
    this.calculateCurrentTimeBar();
    this.channels$.next(this.enrichProgramData());
    this.cdr.detectChanges();
  }
  showDescription(program) {
    this.dialog.open(EpgItemDescriptionComponent, {
      data: program
    });
  }
  close() {
    this.overlayRef.detach();
  }
  static {
    this.\u0275fac = function MultiEpgContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MultiEpgContainerComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(COMPONENT_OVERLAY_REF));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MultiEpgContainerComponent, selectors: [["app-multi-epg-container"]], viewQuery: function MultiEpgContainerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c05, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.epgContainer = _t.first);
      }
    }, inputs: { playlistChannels: "playlistChannels" }, decls: 84, vars: 37, consts: [["epgContainer", ""], ["id", "epg-navigation"], ["mat-button", "", "color", "accent", 3, "click", "matTooltip"], ["mat-icon-button", "", 3, "click", "matTooltip"], [1, "today-date"], ["mat-icon-button", "", 3, "click", "disabled"], [1, "navigation-buttons"], ["mat-button", "", "matTooltip", "Previous channels", 3, "click", "disabled"], ["mat-button", "", "matTooltip", "Next channels", 3, "click", "disabled"], [1, "parent"], ["id", "channels-column"], ["id", "epg-container"], ["height", "100%", "id", "epg-svg"], ["y1", "0", "stroke", "red", "stroke-width", "2"], [1, "channel"], ["width", "100", "stroke", "black"], ["width", "100"], [1, "channel-name"], [2, "height", "20px", "width", "20px", "margin-right", "8px", 3, "src", "alt"], ["fill", "#000", 3, "matTooltip"], ["y", "10", "font-size", "14", "fill", "white", "transform", "translate(20,20)"], [1, "program", 3, "click"], [3, "matTooltip"], [1, "program-title"]], template: function MultiEpgContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275text(1, "\n  ");
        \u0275\u0275elementStart(2, "button", 2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275listener("click", function MultiEpgContainerComponent_Template_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.close());
        });
        \u0275\u0275text(4, "\n    ");
        \u0275\u0275elementStart(5, "mat-icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, "\n  ");
        \u0275\u0275elementStart(10, "button", 3);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275listener("click", function MultiEpgContainerComponent_Template_button_click_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.switchDay("prev"));
        });
        \u0275\u0275text(12, "\n    ");
        \u0275\u0275elementStart(13, "mat-icon");
        \u0275\u0275text(14, "navigate_before");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n  ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n  ");
        \u0275\u0275elementStart(17, "button", 3);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275listener("click", function MultiEpgContainerComponent_Template_button_click_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.switchDay("next"));
        });
        \u0275\u0275text(19, "\n    ");
        \u0275\u0275elementStart(20, "mat-icon");
        \u0275\u0275text(21, "navigate_next");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, "\n  ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, "\n  ");
        \u0275\u0275elementStart(24, "div", 4);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "momentDate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, "\n  ");
        \u0275\u0275elementStart(28, "button", 5);
        \u0275\u0275pipe(29, "async");
        \u0275\u0275listener("click", function MultiEpgContainerComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.zoomIn());
        });
        \u0275\u0275text(30, "\n    ");
        \u0275\u0275elementStart(31, "mat-icon");
        \u0275\u0275text(32, "zoom_in");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "\n  ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, "\n  ");
        \u0275\u0275elementStart(35, "button", 5);
        \u0275\u0275pipe(36, "async");
        \u0275\u0275listener("click", function MultiEpgContainerComponent_Template_button_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.zoomOut());
        });
        \u0275\u0275text(37, "\n    ");
        \u0275\u0275elementStart(38, "mat-icon");
        \u0275\u0275text(39, "zoom_out");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, "\n  ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, "\n  ");
        \u0275\u0275elementStart(42, "div", 6);
        \u0275\u0275text(43, "\n    ");
        \u0275\u0275elementStart(44, "button", 7);
        \u0275\u0275listener("click", function MultiEpgContainerComponent_Template_button_click_44_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.previousChannels());
        });
        \u0275\u0275text(45, "\n      ");
        \u0275\u0275elementStart(46, "mat-icon");
        \u0275\u0275text(47, "keyboard_arrow_up");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " Previous channels\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(49, "\n    ");
        \u0275\u0275elementStart(50, "button", 8);
        \u0275\u0275listener("click", function MultiEpgContainerComponent_Template_button_click_50_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.nextChannels());
        });
        \u0275\u0275text(51, "\n      ");
        \u0275\u0275elementStart(52, "mat-icon");
        \u0275\u0275text(53, "keyboard_arrow_down");
        \u0275\u0275elementEnd();
        \u0275\u0275text(54, " Next channels\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(55, "\n  ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, "\n");
        \u0275\u0275elementStart(58, "div", 9, 0);
        \u0275\u0275text(60, "\n  ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(61, "svg", 10);
        \u0275\u0275text(62, "\n    ");
        \u0275\u0275repeaterCreate(63, MultiEpgContainerComponent_For_64_Template, 20, 6, null, null, _forTrack0);
        \u0275\u0275pipe(65, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275text(66, "\n  ");
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(67, "div", 11);
        \u0275\u0275text(68, "\n    ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(69, "svg", 12);
        \u0275\u0275pipe(70, "async");
        \u0275\u0275text(71, "\n      ");
        \u0275\u0275text(72, "\n      ");
        \u0275\u0275repeaterCreate(73, MultiEpgContainerComponent_For_74_Template, 12, 12, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(75, MultiEpgContainerComponent_For_76_Template, 6, 0, null, null, _forTrack0);
        \u0275\u0275pipe(77, "async");
        \u0275\u0275element(78, "line", 13);
        \u0275\u0275pipe(79, "async");
        \u0275\u0275text(80, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(81, "\n  ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(82, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(83, "\n");
      }
      if (rf & 2) {
        let tmp_16_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 13, "CLOSE"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 15, "CLOSE"), "\n  ");
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 17, "EPG.PREVIOUS_DAY"));
        \u0275\u0275advance(7);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(18, 19, "EPG.NEXT_DAY"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("\n    ", \u0275\u0275pipeBind3(26, 21, ctx.today, "YYYYMMDD", "MMMM Do, dddd"), "\n  ");
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", \u0275\u0275pipeBind1(29, 25, ctx.hourWidth$) >= 800);
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", \u0275\u0275pipeBind1(36, 27, ctx.hourWidth$) <= 50);
        \u0275\u0275advance(9);
        \u0275\u0275property("disabled", ctx.channelsLowerRange === 0);
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.isLastPage);
        \u0275\u0275advance(13);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(65, 29, ctx.channels$));
        \u0275\u0275advance(6);
        \u0275\u0275attribute("width", \u0275\u0275pipeBind1(70, 31, ctx.hourWidth$) * 24);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.timeHeader);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(77, 33, ctx.channels$));
        \u0275\u0275advance(3);
        \u0275\u0275attribute("x1", ctx.currentTimeLine)("x2", ctx.currentTimeLine)("y2", ((tmp_16_0 = \u0275\u0275pipeBind1(79, 35, ctx.channels$)) == null ? null : tmp_16_0.length) * ctx.barHeight + ctx.barHeight);
      }
    }, dependencies: [
      CommonModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIcon,
      MatTooltip,
      AsyncPipe,
      MomentDatePipe,
      TranslatePipe
    ], styles: ["\n\n.program-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nrect[_ngcontent-%COMP%] {\n  stroke: #676767;\n  cursor: pointer;\n}\n.channel[_ngcontent-%COMP%]    > rect[_ngcontent-%COMP%] {\n  stroke: #676767;\n}\n.program-item[_ngcontent-%COMP%]:hover    > rect[_ngcontent-%COMP%] {\n  fill: #333;\n}\n.program-name[_ngcontent-%COMP%], \n.channel-name[_ngcontent-%COMP%] {\n  -webkit-line-clamp: 2;\n  height: 32px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  padding: 6px 2px;\n}\n#epg-container[_ngcontent-%COMP%] {\n  width: calc(100vw - 100px);\n  height: calc(100vh - 42px);\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.parent[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: black;\n  color: #fff;\n}\n#channels-column[_ngcontent-%COMP%] {\n  width: 100px;\n  flex: none;\n  border-right: 2px solid #ccc;\n}\n#channels-column[_ngcontent-%COMP%]   .channel[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n#channels-column[_ngcontent-%COMP%]   .channel[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%] {\n  fill: #2d2d2d;\n  stroke: #3d3d3d;\n}\n#channels-column[_ngcontent-%COMP%]   .channel[_ngcontent-%COMP%]:hover   rect[_ngcontent-%COMP%] {\n  fill: #3d3d3d;\n}\n#channels-column[_ngcontent-%COMP%]   .channel-name[_ngcontent-%COMP%] {\n  color: white;\n  padding: 4px 8px;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n#channels-column[_ngcontent-%COMP%]   image[_ngcontent-%COMP%] {\n  object-fit: contain;\n  background: #2d2d2d;\n}\n#epg-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: white;\n  border-bottom: 2px solid #fff;\n  align-items: center;\n}\n#epg-svg[_ngcontent-%COMP%]   .program[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n#epg-svg[_ngcontent-%COMP%]   .program[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%] {\n  fill: #2d2d2d;\n  stroke: #3d3d3d;\n}\n#epg-svg[_ngcontent-%COMP%]   .program[_ngcontent-%COMP%]:hover   rect[_ngcontent-%COMP%] {\n  fill: #3d3d3d;\n}\n#epg-svg[_ngcontent-%COMP%]   .program-title[_ngcontent-%COMP%] {\n  color: white;\n  padding: 4px 8px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  pointer-events: none;\n}\n.today-date[_ngcontent-%COMP%] {\n  flex: 1;\n  align-items: center;\n  line-height: 40px;\n  height: 40px;\n  padding: 0 20px;\n}\n#current-time-line[_ngcontent-%COMP%] {\n  stroke-width: 2px;\n  stroke: white;\n}\n  .dark-theme #epg-navigation {\n  background-color: black;\n}"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiEpgContainerComponent, [{
    type: Component,
    args: [{ imports: [
      CommonModule,
      MatButtonModule,
      MatIcon,
      MatTooltip,
      MomentDatePipe,
      TranslatePipe
    ], selector: "app-multi-epg-container", changeDetection: ChangeDetectionStrategy.OnPush, template: `<div id="epg-navigation">
  <button
    [matTooltip]="'CLOSE' | translate"
    mat-button
    (click)="close()"
    color="accent"
    >
    <mat-icon>close</mat-icon> {{ 'CLOSE' | translate }}
  </button>
  <button
    [matTooltip]="'EPG.PREVIOUS_DAY' | translate"
    mat-icon-button
    (click)="switchDay('prev')"
    >
    <mat-icon>navigate_before</mat-icon>
  </button>
  <button
    [matTooltip]="'EPG.NEXT_DAY' | translate"
    mat-icon-button
    (click)="switchDay('next')"
    >
    <mat-icon>navigate_next</mat-icon>
  </button>
  <div class="today-date">
    {{ today | momentDate: 'YYYYMMDD' : 'MMMM Do, dddd' }}
  </div>
  <button mat-icon-button (click)="zoomIn()" [disabled]="(hourWidth$ | async) >= 800">
    <mat-icon>zoom_in</mat-icon>
  </button>
  <button mat-icon-button [disabled]="(hourWidth$ | async) <= 50" (click)="zoomOut()">
    <mat-icon>zoom_out</mat-icon>
  </button>
  <div class="navigation-buttons">
    <button
      mat-button
      (click)="previousChannels()"
      [disabled]="channelsLowerRange === 0"
      matTooltip="Previous channels"
      >
      <mat-icon>keyboard_arrow_up</mat-icon> Previous channels
    </button>
    <button
      mat-button
      (click)="nextChannels()"
      [disabled]="isLastPage"
      matTooltip="Next channels"
      >
      <mat-icon>keyboard_arrow_down</mat-icon> Next channels
    </button>
  </div>
</div>
<div class="parent" #epgContainer>
  <svg id="channels-column">
    @for (item of channels$ | async; track $any(item).channel; let i = $index) {
      <g>
        <!-- channel name -->
        <g class="channel">
          <rect
            width="100"
            [attr.height]="barHeight"
            [attr.y]="barHeight * i + barHeight"
            stroke="black"
            />
          <foreignObject
            width="100"
            [attr.height]="barHeight"
            [attr.y]="barHeight * i + barHeight"
            >
            <div class="channel-name">
              @if (item.icon) {
                <img
                  [src]="item.icon"
                  [alt]="item.name"
                  style="height: 20px; width: 20px; margin-right: 8px;"
                  >
              }
              <span>{{ item.name }}</span>
            </div>
          </foreignObject>
        </g>
      </g>
    }
  </svg>
  <div id="epg-container">
    <svg [attr.width]="(hourWidth$ | async) * 24" height="100%" id="epg-svg">
      <!-- time headline -->
      @for (hour of timeHeader; track hour) {
        <g>
          <rect
            [matTooltip]="hour + ':00'"
            [attr.width]="hourWidth$ | async"
            [attr.height]="barHeight"
            [attr.x]="hour * (hourWidth$ | async)"
            fill="#000"
          ></rect>
          <text
            [attr.x]="hour * (hourWidth$ | async)"
            y="10"
            font-size="14"
            fill="white"
            transform="translate(20,20)"
            >
            {{ hour }}:00
          </text>
        </g>
      }

      <!-- epg channels with programs -->
      @for (item of channels$ | async; track $any(item).channel; let i = $index) {
        <g>
          @for (program of item.programs; track trackByProgram($index, program)) {
            <g
              [attr.transform]="'translate(' + program.startPosition + ',' + (barHeight * i + barHeight) + ')'"
              class="program"
              (click)="showDescription(program)"
              >
              <rect
                [attr.width]="program.width"
                [attr.height]="barHeight"
                [matTooltip]="program.title"
              ></rect>
              <foreignObject
                [attr.width]="program.width"
                [attr.height]="barHeight"
                >
                <div class="program-title">{{ program.title }}</div>
              </foreignObject>
            </g>
          }
        </g>
      }

      <!-- current time line -->
      <line
        [attr.x1]="currentTimeLine"
        y1="0"
        [attr.x2]="currentTimeLine"
        [attr.y2]="(channels$ | async)?.length * barHeight + barHeight"
        stroke="red"
        stroke-width="2"
      ></line>
    </svg>
  </div>
</div>
`, styles: ["/* src/app/player/components/multi-epg/multi-epg-container.component.scss */\n.program-item {\n  cursor: pointer;\n}\nrect {\n  stroke: #676767;\n  cursor: pointer;\n}\n.channel > rect {\n  stroke: #676767;\n}\n.program-item:hover > rect {\n  fill: #333;\n}\n.program-name,\n.channel-name {\n  -webkit-line-clamp: 2;\n  height: 32px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  padding: 6px 2px;\n}\n#epg-container {\n  width: calc(100vw - 100px);\n  height: calc(100vh - 42px);\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.parent {\n  display: flex;\n  background-color: black;\n  color: #fff;\n}\n#channels-column {\n  width: 100px;\n  flex: none;\n  border-right: 2px solid #ccc;\n}\n#channels-column .channel {\n  cursor: pointer;\n}\n#channels-column .channel rect {\n  fill: #2d2d2d;\n  stroke: #3d3d3d;\n}\n#channels-column .channel:hover rect {\n  fill: #3d3d3d;\n}\n#channels-column .channel-name {\n  color: white;\n  padding: 4px 8px;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n#channels-column image {\n  object-fit: contain;\n  background: #2d2d2d;\n}\n#epg-navigation {\n  display: flex;\n  background-color: white;\n  border-bottom: 2px solid #fff;\n  align-items: center;\n}\n#epg-svg .program {\n  cursor: pointer;\n}\n#epg-svg .program rect {\n  fill: #2d2d2d;\n  stroke: #3d3d3d;\n}\n#epg-svg .program:hover rect {\n  fill: #3d3d3d;\n}\n#epg-svg .program-title {\n  color: white;\n  padding: 4px 8px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  pointer-events: none;\n}\n.today-date {\n  flex: 1;\n  align-items: center;\n  line-height: 40px;\n  height: 40px;\n  padding: 0 20px;\n}\n#current-time-line {\n  stroke-width: 2px;\n  stroke: white;\n}\n::ng-deep .dark-theme #epg-navigation {\n  background-color: black;\n}\n"] }]
  }], () => [{ type: MatDialog }, { type: ChangeDetectorRef }, { type: OverlayRef, decorators: [{
    type: Inject,
    args: [COMPONENT_OVERLAY_REF]
  }] }], { epgContainer: [{
    type: ViewChild,
    args: ["epgContainer"]
  }], playlistChannels: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MultiEpgContainerComponent, { className: "MultiEpgContainerComponent", filePath: "src/app/player/components/multi-epg/multi-epg-container.component.ts", lineNumber: 55 });
})();

// src/app/player/components/video-player/toolbar/toolbar.component.ts
function ToolbarComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "button", 3);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ToolbarComponent_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateFavoriteStatus(ctx_r2.activeChannel));
    });
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n    ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "TOP_MENU.TOGGLE_FAVORITE_FLAG"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(6, 4, ctx_r2.favorites$).includes(ctx_r2.activeChannel == null ? null : ctx_r2.activeChannel.url) ? "star" : "star_outline");
  }
}
function ToolbarComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "button", 4);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ToolbarComponent_Conditional_31_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleRightDrawerClicked.emit());
    });
    \u0275\u0275text(3, "\n            EPG\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n    ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 1, "TOP_MENU.OPEN_EPG_LIST"));
  }
}
var ToolbarComponent = class _ToolbarComponent {
  constructor(dialog, store) {
    this.dialog = dialog;
    this.store = store;
    this.multiEpgClicked = new EventEmitter();
    this.toggleLeftDrawerClicked = new EventEmitter();
    this.toggleRightDrawerClicked = new EventEmitter();
    this.favorites$ = this.store.select(selectFavorites);
    this.isEpgAvailable$ = this.store.select(selectIsEpgAvailable);
    this.playlistId$ = this.store.select(selectActivePlaylistId);
  }
  updateFavoriteStatus(channel) {
    this.store.dispatch(updateFavorites({ channel }));
  }
  openSettings() {
    this.dialog.open(SettingsComponent, {
      width: "1000px",
      height: "90%",
      data: { isDialog: true }
    });
  }
  static {
    this.\u0275fac = function ToolbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToolbarComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToolbarComponent, selectors: [["app-toolbar"]], inputs: { activeChannel: "activeChannel" }, outputs: { multiEpgClicked: "multiEpgClicked", toggleLeftDrawerClicked: "toggleLeftDrawerClicked", toggleRightDrawerClicked: "toggleRightDrawerClicked" }, decls: 33, vars: 16, consts: [["color", "primary"], ["mat-icon-button", "", 1, "sidenav-toggle-button", 3, "click", "matTooltip"], [1, "spacer"], ["mat-icon-button", "", 3, "click", "matTooltip"], ["mat-button", "", 3, "click", "matTooltip"]], template: function ToolbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "mat-toolbar", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "button", 1);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275listener("click", function ToolbarComponent_Template_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleLeftDrawerClicked.emit());
        });
        \u0275\u0275text(4, "\n        ");
        \u0275\u0275elementStart(5, "mat-icon");
        \u0275\u0275text(6, "menu");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, "\n    ");
        \u0275\u0275conditionalCreate(9, ToolbarComponent_Conditional_9_Template, 9, 6);
        \u0275\u0275pipe(10, "async");
        \u0275\u0275text(11);
        \u0275\u0275element(12, "div", 2);
        \u0275\u0275text(13, "\n    ");
        \u0275\u0275elementStart(14, "button", 3);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275listener("click", function ToolbarComponent_Template_button_click_14_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openSettings());
        });
        \u0275\u0275text(16, "\n        ");
        \u0275\u0275elementStart(17, "mat-icon");
        \u0275\u0275text(18, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, "\n    ");
        \u0275\u0275elementStart(21, "button", 3);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275listener("click", function ToolbarComponent_Template_button_click_21_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.multiEpgClicked.emit());
        });
        \u0275\u0275text(23, "\n        ");
        \u0275\u0275elementStart(24, "mat-icon");
        \u0275\u0275text(25, "view_list");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, "\n    ");
        \u0275\u0275declareLet(28);
        \u0275\u0275pipe(29, "async");
        \u0275\u0275text(30, "\n    ");
        \u0275\u0275conditionalCreate(31, ToolbarComponent_Conditional_31_Template, 5, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 6, "TOP_MENU.OPEN_CHANNELS_LIST"));
        \u0275\u0275advance(7);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(10, 8, ctx.playlistId$) !== "GLOBAL_FAVORITES" ? 9 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\n    ", ctx.activeChannel == null ? null : ctx.activeChannel.name, "\n    ");
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(15, 10, "MENU.SETTINGS"));
        \u0275\u0275advance(7);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(22, 12, "TOP_MENU.OPEN_MULTI_EPG"));
        const isEpgAvailable_r5 = \u0275\u0275pipeBind1(29, 14, ctx.isEpgAvailable$);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(isEpgAvailable_r5 ? 31 : -1);
      }
    }, dependencies: [
      MatButton,
      MatDialogModule,
      MatIcon,
      MatIconButton,
      MatToolbarModule,
      MatToolbar,
      MatTooltip,
      AsyncPipe,
      TranslatePipe
    ], styles: ["\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n@media only screen and (max-width: 599px) {\n  .sidenav-toggle-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarComponent, [{
    type: Component,
    args: [{ imports: [
      AsyncPipe,
      MatButton,
      MatDialogModule,
      MatIcon,
      MatIconButton,
      MatToolbarModule,
      MatTooltip,
      TranslatePipe
    ], selector: "app-toolbar", template: `<mat-toolbar color="primary">
    <button
        mat-icon-button
        (click)="toggleLeftDrawerClicked.emit()"
        [matTooltip]="'TOP_MENU.OPEN_CHANNELS_LIST' | translate"
        class="sidenav-toggle-button"
    >
        <mat-icon>menu</mat-icon>
    </button>
    @if ((playlistId$ | async) !== 'GLOBAL_FAVORITES') {
        <button
            mat-icon-button
            (click)="updateFavoriteStatus(activeChannel)"
            [matTooltip]="'TOP_MENU.TOGGLE_FAVORITE_FLAG' | translate"
        >
            <mat-icon>
                {{
                    (favorites$ | async).includes(activeChannel?.url)
                        ? 'star'
                        : 'star_outline'
                }}</mat-icon
            >
        </button>
    }
    {{ activeChannel?.name }}
    <div class="spacer"></div>
    <button
        mat-icon-button
        (click)="openSettings()"
        [matTooltip]="'MENU.SETTINGS' | translate"
    >
        <mat-icon>settings</mat-icon>
    </button>
    <button
        mat-icon-button
        (click)="multiEpgClicked.emit()"
        [matTooltip]="'TOP_MENU.OPEN_MULTI_EPG' | translate"
    >
        <mat-icon>view_list</mat-icon>
    </button>
    @let isEpgAvailable = isEpgAvailable$ | async;
    @if (isEpgAvailable) {
        <button
            mat-button
            (click)="toggleRightDrawerClicked.emit()"
            [matTooltip]="'TOP_MENU.OPEN_EPG_LIST' | translate"
        >
            EPG
        </button>
    }
</mat-toolbar>
`, styles: ["/* src/app/player/components/video-player/toolbar/toolbar.component.scss */\n.spacer {\n  flex: 1 1 auto;\n}\n@media only screen and (max-width: 599px) {\n  .sidenav-toggle-button {\n    display: none;\n  }\n}\n"] }]
  }], () => [{ type: MatDialog }, { type: Store }], { activeChannel: [{
    type: Input
  }], multiEpgClicked: [{
    type: Output
  }], toggleLeftDrawerClicked: [{
    type: Output
  }], toggleRightDrawerClicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToolbarComponent, { className: "ToolbarComponent", filePath: "src/app/player/components/video-player/toolbar/toolbar.component.ts", lineNumber: 34 });
})();

// src/app/player/components/video-player/video-player.component.ts
var VideoPlayerComponent_Defer_9_DepsFn = () => [import("./chunk-WFZWOYAI.js").then((m3) => m3.SidebarComponent), AsyncPipe];
var _c06 = (a0) => ({ src: a0, type: "application/x-mpegURL" });
var _c13 = (a0) => [a0];
var _c23 = (a0) => ({ sources: a0 });
function VideoPlayerComponent_Defer_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "app-sidebar", 6);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275text(3, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("channels", \u0275\u0275pipeBind1(2, 1, ctx_r0.channels$));
  }
}
function VideoPlayerComponent_DeferLoading_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2, "Loading...");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n        ");
  }
}
function VideoPlayerComponent_DeferPlaceholder_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2, "Loading...");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n        ");
  }
}
function VideoPlayerComponent_Conditional_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275element(1, "app-audio-player", 8);
    \u0275\u0275text(2, "\n            ");
  }
  if (rf & 2) {
    const activeChannel_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("url", activeChannel_r5.url)("icon", activeChannel_r5 == null ? null : activeChannel_r5.tvg == null ? null : activeChannel_r5.tvg.logo);
  }
}
function VideoPlayerComponent_Conditional_14_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275element(1, "app-vjs-player", 10);
    \u0275\u0275text(2, "\n                ");
  }
  if (rf & 2) {
    const activeChannel_r5 = \u0275\u0275nextContext(2);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("hide-captions", !ctx_r0.playerSettings.showCaptions);
    \u0275\u0275property("options", \u0275\u0275pureFunction1(8, _c23, \u0275\u0275pureFunction1(6, _c13, \u0275\u0275pureFunction1(4, _c06, (activeChannel_r5 == null ? null : activeChannel_r5.url) + (activeChannel_r5 == null ? null : activeChannel_r5.epgParams)))))("volume", ctx_r0.volume);
  }
}
function VideoPlayerComponent_Conditional_14_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275element(1, "app-html-video-player", 11);
    \u0275\u0275text(2, "\n                ");
  }
  if (rf & 2) {
    const activeChannel_r5 = \u0275\u0275nextContext(2);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("channel", activeChannel_r5)("volume", ctx_r0.volume)("showCaptions", ctx_r0.playerSettings.showCaptions);
  }
}
function VideoPlayerComponent_Conditional_14_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275element(1, "app-art-player", 11);
    \u0275\u0275text(2, "\n                ");
  }
  if (rf & 2) {
    const activeChannel_r5 = \u0275\u0275nextContext(2);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("channel", activeChannel_r5)("volume", ctx_r0.volume)("showCaptions", ctx_r0.playerSettings.showCaptions);
  }
}
function VideoPlayerComponent_Conditional_14_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275element(3, "img", 13);
    \u0275\u0275text(4, "\n                        ");
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "\n                            The channel is played in a separate window in the\n                            MPV player. (");
    \u0275\u0275elementStart(7, "a", 14);
    \u0275\u0275listener("click", function VideoPlayerComponent_Conditional_14_Conditional_5_Conditional_5_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openUrl("https://github.com/4gray/iptvnator/wiki/What-is-mpv-video-player-and-how-to-install-it-on-different-operating-systems%3F"));
    });
    \u0275\u0275text(8, "Installation instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ")\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n                ");
  }
}
function VideoPlayerComponent_Conditional_14_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275element(3, "img", 13);
    \u0275\u0275text(4, "\n                        ");
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "\n                            The channel is played in a separate window in VLC\n                            player. Please make sure that this player is\n                            installed in your system and the correct path is\n                            defined in the app settings.\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n                ");
  }
}
function VideoPlayerComponent_Conditional_14_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275conditionalCreate(2, VideoPlayerComponent_Conditional_14_Conditional_5_Conditional_2_Template, 3, 10);
    \u0275\u0275conditionalCreate(3, VideoPlayerComponent_Conditional_14_Conditional_5_Conditional_3_Template, 3, 3);
    \u0275\u0275conditionalCreate(4, VideoPlayerComponent_Conditional_14_Conditional_5_Conditional_4_Template, 3, 3);
    \u0275\u0275conditionalCreate(5, VideoPlayerComponent_Conditional_14_Conditional_5_Conditional_5_Template, 12, 0);
    \u0275\u0275conditionalCreate(6, VideoPlayerComponent_Conditional_14_Conditional_5_Conditional_6_Template, 9, 0);
    \u0275\u0275element(7, "app-info-overlay", 9);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275text(9, "\n            ");
  }
  if (rf & 2) {
    const activeChannel_r5 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.playerSettings.player === "videojs" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.playerSettings.player === "html5" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.playerSettings.player === "artplayer" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.playerSettings.player === "mpv" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.playerSettings.player === "vlc" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("channel", activeChannel_r5)("epgProgram", \u0275\u0275pipeBind1(8, 7, ctx_r0.epgProgram$));
  }
}
function VideoPlayerComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "app-toolbar", 7);
    \u0275\u0275listener("toggleLeftDrawerClicked", function VideoPlayerComponent_Conditional_14_Template_app_toolbar_toggleLeftDrawerClicked_2_listener() {
      \u0275\u0275restoreView(_r2);
      \u0275\u0275nextContext();
      const drawer_r3 = \u0275\u0275reference(4);
      return \u0275\u0275resetView(drawer_r3.toggle());
    })("toggleRightDrawerClicked", function VideoPlayerComponent_Conditional_14_Template_app_toolbar_toggleRightDrawerClicked_2_listener() {
      \u0275\u0275restoreView(_r2);
      \u0275\u0275nextContext();
      const drawerRight_r4 = \u0275\u0275reference(19);
      return \u0275\u0275resetView(drawerRight_r4.toggle());
    })("multiEpgClicked", function VideoPlayerComponent_Conditional_14_Template_app_toolbar_multiEpgClicked_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openMultiEpgView());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275conditionalCreate(4, VideoPlayerComponent_Conditional_14_Conditional_4_Template, 3, 2)(5, VideoPlayerComponent_Conditional_14_Conditional_5_Template, 10, 9);
  }
  if (rf & 2) {
    const activeChannel_r5 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275property("activeChannel", activeChannel_r5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(activeChannel_r5.radio === "true" ? 4 : 5);
  }
}
function VideoPlayerComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "app-epg-list");
    \u0275\u0275text(2, "\n        ");
  }
}
var COMPONENT_OVERLAY_REF = new InjectionToken("COMPONENT_OVERLAY_REF");
var VideoPlayerComponent = class _VideoPlayerComponent {
  constructor(activatedRoute, dataService, ngZone, overlay, playlistsService, router, snackBar, storage, store) {
    this.activatedRoute = activatedRoute;
    this.dataService = dataService;
    this.ngZone = ngZone;
    this.overlay = overlay;
    this.playlistsService = playlistsService;
    this.router = router;
    this.snackBar = snackBar;
    this.storage = storage;
    this.store = store;
    this.activeChannel$ = this.store.select(selectActive).pipe(filter((channel) => Boolean(channel?.url)));
    this.epgProgram$ = this.store.select(selectCurrentEpgProgram);
    this.playerSettings = {
      player: VideoPlayer.VideoJs,
      showCaptions: false
    };
    this.commandsList = [
      {
        id: ERROR,
        execute: (response) => {
          this.snackBar.open(response.message, "", {
            duration: 3100
          });
        }
      },
      {
        id: PLAYLIST_PARSE_RESPONSE,
        execute: (response) => {
          if (response.payload.isTemporary) {
            this.store.dispatch(setChannels({
              channels: response.payload.playlist.items
            }));
          } else {
            this.store.dispatch(addPlaylist({
              playlist: response.payload
            }));
          }
          this.sidebarView = "CHANNELS";
        }
      }
    ];
    this.listeners = [];
    this.isTauri = this.dataService.getAppEnvironment() === "tauri";
    this.sidebarView = "CHANNELS";
    this.volume = 1;
    this.settingsStore = inject(SettingsStore);
    const savedVolume = localStorage.getItem("volume");
    if (savedVolume !== null) {
      this.volume = Number(savedVolume);
    }
    effect(() => {
      this.playerSettings = {
        player: this.settingsStore.player(),
        showCaptions: this.settingsStore.showCaptions()
      };
    });
  }
  /**
   * Sets video player and subscribes to channel list from the store
   */
  ngOnInit() {
    this.applySettings();
    this.setRendererListeners();
    this.getPlaylistUrlAsParam();
    this.channels$ = this.activatedRoute.params.pipe(combineLatestWith(this.activatedRoute.queryParams), switchMap(([params, queryParams]) => {
      if (params.id) {
        this.store.dispatch(setActivePlaylist({
          playlistId: params.id
        }));
        return this.playlistsService.getPlaylist(params.id).pipe(map((playlist) => {
          this.dataService.sendIpcEvent(CHANNEL_SET_USER_AGENT, playlist.userAgent ? {
            referer: "localhost",
            userAgent: playlist.userAgent
          } : {});
          this.store.dispatch(setChannels({
            channels: playlist.playlist.items
          }));
          return playlist.playlist.items;
        }));
      } else if (queryParams.url) {
        return this.store.select(selectChannels);
      }
    }));
  }
  /**
   * Opens a playlist provided as a url param
   * e.g. iptvnat.or?url=http://...
   * @pwaOnly
   */
  getPlaylistUrlAsParam() {
    const URL_REGEX = /^(http|https|file):\/\/[^ "]+$/;
    const playlistUrl = this.activatedRoute.snapshot.queryParams.url;
    if (playlistUrl && playlistUrl.match(URL_REGEX)) {
      this.dataService.sendIpcEvent(PLAYLIST_PARSE_BY_URL, {
        url: playlistUrl,
        isTemporary: true
      });
    }
  }
  setRendererListeners() {
    this.commandsList.forEach((command) => {
      if (this.isTauri) {
        this.dataService.listenOn(command.id, (event, response) => this.ngZone.run(() => command.execute(response)));
      } else {
        const cb = (response) => {
          if (response.data.type === command.id) {
            command.execute(response.data);
          }
        };
        this.dataService.listenOn(command.id, cb);
        this.listeners.push(cb);
      }
    });
  }
  /**
   * Reads the app configuration from the browsers storage and applies the settings in the current component
   */
  applySettings() {
    this.storage.get(STORE_KEY.Settings).subscribe((settings) => {
      if (settings && Object.keys(settings).length > 0) {
        this.playerSettings = {
          player: settings.player || VideoPlayer.VideoJs,
          showCaptions: settings.showCaptions || false
        };
      }
    });
  }
  ngOnDestroy() {
    this.listeners.forEach((listener) => window.removeEventListener("message", listener));
  }
  /**
   * Opens the overlay with multi EPG view
   */
  openMultiEpgView() {
    const positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy,
      width: "100%",
      height: "100%"
    });
    const injector = Injector.create({
      providers: [
        {
          provide: COMPONENT_OVERLAY_REF,
          useValue: this.overlayRef
        }
      ]
    });
    const portal = new ComponentPortal(MultiEpgContainerComponent, null, injector);
    const componentRef = this.overlayRef.attach(portal);
    componentRef.instance.playlistChannels = this.store.select(selectChannels);
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.dispose();
    });
  }
  openUrl(url) {
    window.open(url, "_blank");
  }
  navigateHome() {
    this.router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function VideoPlayerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VideoPlayerComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Overlay), \u0275\u0275directiveInject(PlaylistsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(StorageMap), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoPlayerComponent, selectors: [["ng-component"]], decls: 24, vars: 4, consts: [["drawer", ""], ["drawerRight", ""], [1, "main-container"], ["mode", "side", "opened", "", "disableClose", "", 1, "mat-drawer"], [1, "drawer-content"], ["position", "end", "mode", "side", "disableClose", ""], [3, "channels"], [3, "toggleLeftDrawerClicked", "toggleRightDrawerClicked", "multiEpgClicked", "activeChannel"], [3, "url", "icon"], [3, "channel", "epgProgram"], [3, "options", "volume"], [3, "channel", "volume", "showCaptions"], [1, "custom-player"], ["src", "./assets/images/custom-player.png"], [2, "cursor", "pointer", 3, "click", "routerLink"]], template: function VideoPlayerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-drawer-container", 2);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275text(2, "\n    ");
        \u0275\u0275elementStart(3, "mat-drawer", 3, 0);
        \u0275\u0275text(5, "\n        ");
        \u0275\u0275domTemplate(6, VideoPlayerComponent_Defer_6_Template, 4, 3)(7, VideoPlayerComponent_DeferLoading_7_Template, 4, 0)(8, VideoPlayerComponent_DeferPlaceholder_8_Template, 4, 0);
        \u0275\u0275defer(9, 6, VideoPlayerComponent_Defer_9_DepsFn, 7, 8);
        \u0275\u0275deferOnIdle();
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n    ");
        \u0275\u0275elementStart(12, "mat-drawer-content", 4);
        \u0275\u0275text(13, "\n        ");
        \u0275\u0275conditionalCreate(14, VideoPlayerComponent_Conditional_14_Template, 6, 2);
        \u0275\u0275pipe(15, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n    ");
        \u0275\u0275text(17, "\n    ");
        \u0275\u0275elementStart(18, "mat-drawer", 5, 1);
        \u0275\u0275text(20, "\n        ");
        \u0275\u0275conditionalCreate(21, VideoPlayerComponent_Conditional_21_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, "\n");
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(14);
        \u0275\u0275conditional((tmp_2_0 = \u0275\u0275pipeBind1(15, 2, ctx.activeChannel$)) ? 14 : -1, tmp_2_0);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.isTauri ? 21 : -1);
      }
    }, dependencies: [
      AudioPlayerComponent,
      InfoOverlayComponent,
      CommonModule,
      EpgListComponent,
      HtmlVideoPlayerComponent,
      MatSidenavModule,
      MatDrawer,
      MatDrawerContainer,
      MatDrawerContent,
      RouterLink,
      ToolbarComponent,
      VjsPlayerComponent,
      ArtPlayerComponent,
      AsyncPipe
    ], styles: ["\n\n.main-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.mat-drawer-content[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n  overflow: hidden;\n}\n.mat-drawer[_ngcontent-%COMP%] {\n  width: 400px;\n  min-width: 400px;\n}\n.custom-player[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n@media only screen and (max-width: 599px) {\n  .main-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column-reverse;\n    top: unset;\n  }\n  .mat-drawer[_ngcontent-%COMP%] {\n    height: 50vh;\n    width: 100%;\n    position: unset;\n  }\n  .drawer-content[_ngcontent-%COMP%] {\n    height: 50vh;\n    margin-left: 0 !important;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .custom-player[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 50px;\n    flex-direction: column;\n    align-items: center;\n    padding: 10px;\n  }\n  .custom-player[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    filter: invert(100%);\n    width: 400px;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(VideoPlayerComponent, () => [import("./chunk-WFZWOYAI.js").then((m3) => m3.SidebarComponent)], (SidebarComponent) => {
    setClassMetadata(VideoPlayerComponent, [{
      type: Component,
      args: [{ imports: [
        AsyncPipe,
        AudioPlayerComponent,
        InfoOverlayComponent,
        CommonModule,
        EpgListComponent,
        HtmlVideoPlayerComponent,
        MatSidenavModule,
        RouterLink,
        SidebarComponent,
        ToolbarComponent,
        VjsPlayerComponent,
        ArtPlayerComponent
      ], template: `<mat-drawer-container class="main-container">
    <!-- sidebar content -->
    <mat-drawer #drawer mode="side" opened disableClose class="mat-drawer">
        @defer {
            <app-sidebar [channels]="channels$ | async" />
        } @loading {
            <p>Loading...</p>
        } @placeholder {
            <p>Loading...</p>
        }
    </mat-drawer>
    <mat-drawer-content class="drawer-content">
        @if (activeChannel$ | async; as activeChannel) {
            <!-- toolbar with drawer icon -->
            <app-toolbar
                (toggleLeftDrawerClicked)="drawer.toggle()"
                (toggleRightDrawerClicked)="drawerRight.toggle()"
                (multiEpgClicked)="openMultiEpgView()"
                [activeChannel]="activeChannel"
            />
            @if (activeChannel.radio === 'true') {
                <app-audio-player
                    [url]="activeChannel.url"
                    [icon]="activeChannel?.tvg?.logo"
                />
            } @else {
                <!-- video.js player -->
                @if (playerSettings.player === 'videojs') {
                    <app-vjs-player
                        [options]="{
                            sources: [
                                {
                                    src:
                                        activeChannel?.url +
                                        activeChannel?.epgParams,
                                    type: 'application/x-mpegURL',
                                },
                            ],
                        }"
                        [volume]="volume"
                        [class.hide-captions]="!playerSettings.showCaptions"
                    />
                }
                <!-- default html player component -->
                @if (playerSettings.player === 'html5') {
                    <app-html-video-player
                        [channel]="activeChannel"
                        [volume]="volume"
                        [showCaptions]="playerSettings.showCaptions"
                    />
                }
                <!-- Add ArtPlayer component -->
                @if (playerSettings.player === 'artplayer') {
                    <app-art-player
                        [channel]="activeChannel"
                        [volume]="volume"
                        [showCaptions]="playerSettings.showCaptions"
                    />
                }
                @if (playerSettings.player === 'mpv') {
                    <div class="custom-player">
                        <img src="./assets/images/custom-player.png" />
                        <p>
                            The channel is played in a separate window in the
                            MPV player. (<a
                                [routerLink]
                                style="cursor: pointer"
                                (click)="
                                    openUrl(
                                        'https://github.com/4gray/iptvnator/wiki/What-is-mpv-video-player-and-how-to-install-it-on-different-operating-systems%3F'
                                    )
                                "
                                >Installation instructions</a
                            >)
                        </p>
                    </div>
                }
                @if (playerSettings.player === 'vlc') {
                    <div class="custom-player">
                        <img src="./assets/images/custom-player.png" />
                        <p>
                            The channel is played in a separate window in VLC
                            player. Please make sure that this player is
                            installed in your system and the correct path is
                            defined in the app settings.
                        </p>
                    </div>
                }
                <!-- channel overlay -->
                <app-info-overlay
                    [channel]="activeChannel"
                    [epgProgram]="epgProgram$ | async"
                />
            }
        }
    </mat-drawer-content>
    <!-- right sidebar content -->
    <mat-drawer position="end" #drawerRight mode="side" disableClose>
        @if (isTauri) {
            <app-epg-list />
        }
    </mat-drawer>
</mat-drawer-container>
`, styles: ["/* src/app/player/components/video-player/video-player.component.scss */\n.main-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.mat-drawer-content {\n  background: #000;\n  color: #fff;\n  overflow: hidden;\n}\n.mat-drawer {\n  width: 400px;\n  min-width: 400px;\n}\n.custom-player {\n  padding: 20px;\n}\n@media only screen and (max-width: 599px) {\n  .main-container {\n    display: flex;\n    flex-direction: column-reverse;\n    top: unset;\n  }\n  .mat-drawer {\n    height: 50vh;\n    width: 100%;\n    position: unset;\n  }\n  .drawer-content {\n    height: 50vh;\n    margin-left: 0 !important;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .custom-player {\n    display: flex;\n    margin-top: 50px;\n    flex-direction: column;\n    align-items: center;\n    padding: 10px;\n  }\n  .custom-player img {\n    filter: invert(100%);\n    width: 400px;\n  }\n}\n"] }]
    }], () => [{ type: ActivatedRoute }, { type: DataService }, { type: NgZone }, { type: Overlay }, { type: PlaylistsService }, { type: Router }, { type: MatSnackBar }, { type: StorageMap }, { type: Store }], null);
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoPlayerComponent, { className: "VideoPlayerComponent", filePath: "src/app/player/components/video-player/video-player.component.ts", lineNumber: 74 });
})();
export {
  COMPONENT_OVERLAY_REF,
  VideoPlayerComponent
};
