import {
  NavigationComponent
} from "./sidimad-account.js";
import "./sidimad-settings.js";
import "./sidimad-settings-service.js";
import "./sidimad-epg.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./sidimad-about.js";
import "./sidimad-playlists.js";
import "./sidimad-whats-new.js";
import "./sidimad-portal-status.js";
import "./sidimad-skeleton.js";
import "./sidimad-list.js";
import "./sidimad-PVDG46DZ.js";
import "./sidimad-select.js";
import "./sidimad-dialogs.js";
import "./sidimad-database.js";
import {
  ActivatedRoute,
  Router,
  RouterOutlet,
  Store,
  XtreamStore,
  setActivePlaylist
} from "./sidimad-store.js";
import "./sidimad-tooltip.js";
import "./sidimad-checkbox.js";
import "./sidimad-divider.js";
import {
  TranslateModule
} from "./sidimad-browser.js";
import {
  Component,
  effect,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate2
} from "./sidimad-app.js";

// src/app/xtream-tauri/loading-overlay/loading-overlay.component.ts
function LoadingOverlayComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275element(1, "mat-progress-bar", 2);
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.current() / ctx_r0.total() * 100);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.current(), " / ", ctx_r0.total());
  }
}
function LoadingOverlayComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275element(1, "mat-progress-bar", 3);
    \u0275\u0275text(2, "\n                ");
  }
}
var LoadingOverlayComponent = class _LoadingOverlayComponent {
  constructor() {
    this.current = input(0, ...ngDevMode ? [{ debugName: "current" }] : []);
    this.total = input(0, ...ngDevMode ? [{ debugName: "total" }] : []);
  }
  static {
    this.\u0275fac = function LoadingOverlayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoadingOverlayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadingOverlayComponent, selectors: [["app-loading-overlay"]], inputs: { current: [1, "current"], total: [1, "total"] }, decls: 12, vars: 1, consts: [[1, "overlay"], [1, "progress-container"], ["mode", "determinate", 3, "value"], ["mode", "indeterminate"]], template: function LoadingOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0, "\n        ");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275text(2, "\n            ");
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275text(4, "\n                ");
        \u0275\u0275elementStart(5, "h3");
        \u0275\u0275text(6, "Loading playlist...");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n                ");
        \u0275\u0275conditionalCreate(8, LoadingOverlayComponent_Conditional_8_Template, 6, 3)(9, LoadingOverlayComponent_Conditional_9_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n    ");
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.current() !== 0 && ctx.total() !== 0 ? 8 : 9);
      }
    }, dependencies: [MatProgressBarModule, MatProgressBar], styles: ["\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.progress-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-radius: 8px;\n  min-width: 300px;\n  text-align: center;\n}\n.progress-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingOverlayComponent, [{
    type: Component,
    args: [{ selector: "app-loading-overlay", imports: [MatProgressBarModule], template: `
        <div class="overlay">
            <div class="progress-container">
                <h3>Loading playlist...</h3>
                @if (current() !== 0 && total() !== 0) {
                    <mat-progress-bar
                        mode="determinate"
                        [value]="(current() / total()) * 100"
                    />
                    <p>{{ current() }} / {{ total() }}</p>
                } @else {
                    <mat-progress-bar mode="indeterminate" />
                }
            </div>
        </div>
    `, styles: ["/* angular:styles/component:css;76ae0b63862d827d30f5ccd662af23441ca29e4e0235ea288a7db3599d4e294d;/vercel/path0/src/app/xtream-tauri/loading-overlay/loading-overlay.component.ts */\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.progress-container {\n  padding: 2rem;\n  border-radius: 8px;\n  min-width: 300px;\n  text-align: center;\n}\n.progress-container h3 {\n  margin-top: 0;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadingOverlayComponent, { className: "LoadingOverlayComponent", filePath: "src/app/xtream-tauri/loading-overlay/loading-overlay.component.ts", lineNumber: 51 });
})();

// src/app/xtream-tauri/xtream-shell/xtream-shell.component.ts
function XtreamShellComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275element(1, "app-loading-overlay", 2);
    \u0275\u0275text(2, "\n");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("current", ctx_r0.getImportCount())("total", ctx_r0.itemsToImport());
  }
}
var XtreamShellComponent = class _XtreamShellComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.store = inject(Store);
    this.xtreamStore = inject(XtreamStore);
    this.getImportCount = this.xtreamStore.getImportCount;
    this.isImporting = this.xtreamStore.isImporting;
    this.itemsToImport = this.xtreamStore.itemsToImport;
    this.portalStatus = this.xtreamStore.portalStatus;
    this.mainNavigationItems = [
      {
        id: "vod",
        icon: "movie",
        labelKey: "PORTALS.SIDEBAR.MOVIES"
      },
      {
        id: "live",
        icon: "live_tv",
        labelKey: "PORTALS.SIDEBAR.LIVE_TV"
      },
      {
        id: "series",
        icon: "tv",
        labelKey: "PORTALS.SIDEBAR.SERIES"
      }
    ];
    effect(() => {
      if (this.xtreamStore.currentPlaylist() !== null) {
        this.xtreamStore.initializeContent();
      }
    }, { allowSignalWrites: true });
  }
  ngOnInit() {
    this.xtreamStore.checkPortalStatus();
    this.store.dispatch(setActivePlaylist({
      playlistId: this.route.snapshot.params.id
    }));
  }
  handleCategoryClick(category) {
    this.xtreamStore.setSelectedContentType(category);
    this.router.navigate([category], {
      relativeTo: this.route
    });
  }
  handlePageClick(page) {
    this.xtreamStore.setSelectedContentType(void 0);
    this.router.navigate([page], {
      relativeTo: this.route
    });
  }
  static {
    this.\u0275fac = function XtreamShellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _XtreamShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _XtreamShellComponent, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([XtreamStore])], decls: 8, vars: 4, consts: [[1, "xtream-container"], [1, "navigation-sidebar", 3, "categoryClick", "pageClicked", "portalStatus", "navigationItems", "selectedContentType"], [3, "current", "total"]], template: function XtreamShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, XtreamShellComponent_Conditional_0_Template, 3, 2);
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275text(2, "\n    ");
        \u0275\u0275elementStart(3, "app-navigation", 1);
        \u0275\u0275listener("categoryClick", function XtreamShellComponent_Template_app_navigation_categoryClick_3_listener($event) {
          return ctx.handleCategoryClick($event);
        })("pageClicked", function XtreamShellComponent_Template_app_navigation_pageClicked_3_listener($event) {
          return ctx.handlePageClick($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, "\n    ");
        \u0275\u0275element(5, "router-outlet");
        \u0275\u0275text(6, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.isImporting() ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("portalStatus", ctx.portalStatus())("navigationItems", ctx.mainNavigationItems)("selectedContentType", ctx.xtreamStore.selectedContentType());
      }
    }, dependencies: [
      LoadingOverlayComponent,
      NavigationComponent,
      RouterOutlet,
      TranslateModule
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n}\n.xtream-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  min-height: 0;\n}\n.navigation-sidebar[_ngcontent-%COMP%] {\n  width: 200px;\n  border-right: 1px solid #333;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XtreamShellComponent, [{
    type: Component,
    args: [{ imports: [
      LoadingOverlayComponent,
      NavigationComponent,
      RouterOutlet,
      TranslateModule
    ], providers: [XtreamStore], template: '@if (isImporting()) {\n    <app-loading-overlay\n        [current]="getImportCount()"\n        [total]="itemsToImport()"\n    />\n}\n\n<div class="xtream-container">\n    <app-navigation\n        class="navigation-sidebar"\n        [portalStatus]="portalStatus()"\n        [navigationItems]="mainNavigationItems"\n        (categoryClick)="handleCategoryClick($event)"\n        (pageClicked)="handlePageClick($event)"\n        [selectedContentType]="xtreamStore.selectedContentType()"\n    />\n    <router-outlet />\n</div>\n', styles: ["/* src/app/xtream-tauri/xtream-shell/xtream-shell.component.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n}\n.xtream-container {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  min-height: 0;\n}\n.navigation-sidebar {\n  width: 200px;\n  border-right: 1px solid #333;\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(XtreamShellComponent, { className: "XtreamShellComponent", filePath: "src/app/xtream-tauri/xtream-shell/xtream-shell.component.ts", lineNumber: 22 });
})();
export {
  XtreamShellComponent
};
