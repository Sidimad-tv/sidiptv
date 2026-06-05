import {
  NavigationComponent
} from "./sidimad-account.js";
import "./sidimad-settings.js";
import "./sidimad-settings-service.js";
import "./sidimad-epg.js";
import "./sidimad-about.js";
import "./sidimad-playlists.js";
import "./sidimad-whats-new.js";
import "./sidimad-portal-status.js";
import "./sidimad-skeleton.js";
import "./sidimad-list.js";
import "./sidimad-empty.js";
import {
  StalkerStore
} from "./sidimad-stalker-store.js";
import "./sidimad-content-type.js";
import "./sidimad-select.js";
import "./sidimad-dialogs.js";
import "./sidimad-database.js";
import {
  ActivatedRoute,
  Router,
  RouterOutlet,
  Store,
  selectPlaylistById,
  setCurrentPlaylistId
} from "./sidimad-store.js";
import "./sidimad-tooltip.js";
import "./sidimad-checkbox.js";
import "./sidimad-divider.js";
import "./sidimad-browser.js";
import {
  Component,
  effect,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./sidimad-app.js";

// src/app/stalker/stalker-shell/stalker-shell.component.ts
var StalkerShellComponent = class _StalkerShellComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.stalkerStore = inject(StalkerStore);
    this.store = inject(Store);
    this.mainNavigationItems = [
      {
        id: "vod",
        icon: "movie",
        labelKey: "PORTALS.SIDEBAR.MOVIES"
      },
      {
        id: "itv",
        icon: "live_tv",
        labelKey: "PORTALS.SIDEBAR.LIVE_TV"
      },
      {
        id: "series",
        icon: "tv",
        labelKey: "PORTALS.SIDEBAR.SERIES"
      }
    ];
    this.currentPlaylist = this.store.selectSignal(selectPlaylistById(this.route.snapshot.params.id));
    this.store.dispatch(setCurrentPlaylistId({
      playlistId: this.route.snapshot.params["id"]
    }));
    this.stalkerStore.setSelectedContentType("vod");
    this.stalkerStore.setSelectedCategory(null);
    effect(() => {
      this.stalkerStore.setCurrentPlaylist(this.currentPlaylist());
    });
  }
  setContentType(type) {
    if (type === "live")
      type = "itv";
    this.stalkerStore.setSelectedContentType(type);
    this.stalkerStore.setSelectedCategory(null);
    this.router.navigate([type], {
      relativeTo: this.route
    });
  }
  handlePageClick() {
    this.stalkerStore.setSelectedContentType(null);
  }
  ngOnDestroy() {
    this.stalkerStore.resetCategories();
  }
  static {
    this.\u0275fac = function StalkerShellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StalkerShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StalkerShellComponent, selectors: [["app-stalker-shell"]], decls: 7, vars: 2, consts: [[1, "stalker-container"], [1, "navigation-sidebar", 3, "categoryClick", "pageClicked", "navigationItems", "selectedContentType"]], template: function StalkerShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "app-navigation", 1);
        \u0275\u0275listener("categoryClick", function StalkerShellComponent_Template_app_navigation_categoryClick_2_listener($event) {
          return ctx.setContentType($event);
        })("pageClicked", function StalkerShellComponent_Template_app_navigation_pageClicked_2_listener() {
          return ctx.handlePageClick();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(3, "\n    ");
        \u0275\u0275element(4, "router-outlet");
        \u0275\u0275text(5, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("navigationItems", ctx.mainNavigationItems)("selectedContentType", ctx.stalkerStore.selectedContentType());
      }
    }, dependencies: [NavigationComponent, RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n}\n.stalker-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  min-height: 0;\n}\n.navigation-sidebar[_ngcontent-%COMP%] {\n  width: 200px;\n  border-right: 1px solid #333;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StalkerShellComponent, [{
    type: Component,
    args: [{ selector: "app-stalker-shell", standalone: true, imports: [NavigationComponent, RouterOutlet, NavigationComponent], template: '<div class="stalker-container">\n    <app-navigation\n        class="navigation-sidebar"\n        [navigationItems]="mainNavigationItems"\n        (categoryClick)="setContentType($event)"\n        [selectedContentType]="stalkerStore.selectedContentType()"\n        (pageClicked)="handlePageClick()"\n    />\n    <router-outlet />\n</div>\n', styles: ["/* src/app/stalker/stalker-shell/stalker-shell.component.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n}\n.stalker-container {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  min-height: 0;\n}\n.navigation-sidebar {\n  width: 200px;\n  border-right: 1px solid #333;\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StalkerShellComponent, { className: "StalkerShellComponent", filePath: "src/app/stalker/stalker-shell/stalker-shell.component.ts", lineNumber: 17 });
})();
export {
  StalkerShellComponent
};
