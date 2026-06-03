import {
  FavoritesLayoutComponent
} from "./chunk-VKS5UTEW.js";
import "./chunk-3Z54PZEX.js";
import "./chunk-2NO6Q4PC.js";
import "./chunk-JHEQ34EK.js";
import {
  StalkerSeriesViewComponent
} from "./chunk-MQJC6O3G.js";
import {
  VodDetailsComponent
} from "./chunk-IBF2XMWH.js";
import "./chunk-4AWO2KFL.js";
import "./chunk-GCLSZAZE.js";
import "./chunk-PVDG46DZ.js";
import "./chunk-MBWMGKRM.js";
import {
  StalkerStore
} from "./chunk-RJUVZOZV.js";
import "./chunk-VQ4Q64L7.js";
import "./chunk-BSW44WEY.js";
import {
  PlaylistsService
} from "./chunk-L3VXQT5F.js";
import {
  rxResource
} from "./chunk-QHT262RL.js";
import "./chunk-BPPYQAMP.js";
import "./chunk-BQRDSFE6.js";
import "./chunk-KMRXFGXG.js";
import {
  MatButton,
  MatIcon,
  TranslatePipe,
  TranslateService
} from "./chunk-W4GTA6ZI.js";
import {
  Component,
  __async,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-7EPDPDBX.js";

// src/app/stalker/stalker-favorites/stalker-favorites.component.ts
var _c0 = () => [];
function StalkerFavoritesComponent_Conditional_0_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-vod-details", 1);
    \u0275\u0275listener("playClicked", function StalkerFavoritesComponent_Conditional_0_Case_9_Template_app_vod_details_playClicked_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createLinkToPlayVodItv(ctx_r1.itemDetails.details.cmd, ctx_r1.itemDetails.details.info.name, ctx_r1.itemDetails.details.info.movie_image));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("item", ctx_r1.itemDetails.details);
  }
}
function StalkerFavoritesComponent_Conditional_0_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "app-stalker-series-view");
    \u0275\u0275text(2, "\n        ");
  }
}
function StalkerFavoritesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "button", 0);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function StalkerFavoritesComponent_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.itemDetails = null);
    });
    \u0275\u0275text(3, "\n        ");
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n    ");
    \u0275\u0275conditionalCreate(9, StalkerFavoritesComponent_Conditional_0_Case_9_Template, 3, 1)(10, StalkerFavoritesComponent_Conditional_0_Case_10_Template, 3, 0);
    \u0275\u0275text(11, "\n");
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "SETTINGS.BACK_TO_HOME"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(7, 5, "SETTINGS.BACK_TO_HOME"), "\n    ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.itemDetails.category_id) === "vod" ? 9 : tmp_3_0 === "series" ? 10 : -1);
  }
}
function StalkerFavoritesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "app-favorites-layout", 2);
    \u0275\u0275listener("categoryClicked", function StalkerFavoritesComponent_Conditional_1_Template_app_favorites_layout_categoryClicked_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCategoryId($event.category_id));
    })("removeFromFavorites", function StalkerFavoritesComponent_Conditional_1_Template_app_favorites_layout_removeFromFavorites_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeFromFavorites($event));
    })("openItem", function StalkerFavoritesComponent_Conditional_1_Template_app_favorites_layout_openItem_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openItem($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("categories", ctx_r1.categories() ?? \u0275\u0275pureFunction0(3, _c0))("favorites", ctx_r1.favoritesToShow() ?? \u0275\u0275pureFunction0(4, _c0))("selectedCategoryId", ctx_r1.selectedCategoryId());
  }
}
var StalkerFavoritesComponent = class _StalkerFavoritesComponent {
  constructor() {
    this.playlistService = inject(PlaylistsService);
    this.refreshTimestamp = signal(Date.now(), ...ngDevMode ? [{ debugName: "refreshTimestamp" }] : []);
    this.stalkerStore = inject(StalkerStore);
    this.translate = inject(TranslateService);
    this.itemDetails = null;
    this.allFavorites = rxResource({
      params: () => ({
        refreshTimestamp: this.refreshTimestamp()
      }),
      stream: () => this.playlistService.getPortalFavorites()
    });
    this.categories = computed(() => [
      {
        id: 1,
        category_id: "movie",
        category_name: this.translate.instant("PORTALS.SIDEBAR.MOVIES") + " (" + (this.movies()?.length ?? 0) + ")",
        parent_id: 0
      },
      {
        id: 2,
        category_id: "itv",
        category_name: this.translate.instant("PORTALS.SIDEBAR.LIVE_TV") + " (" + (this.live()?.length ?? 0) + ")",
        parent_id: 0
      },
      {
        id: 3,
        category_id: "series",
        category_name: this.translate.instant("PORTALS.SIDEBAR.SERIES") + " (" + (this.series()?.length ?? 0) + ")",
        parent_id: 0
      }
    ], ...ngDevMode ? [{ debugName: "categories" }] : []);
    this.favoritesToShow = computed(() => {
      switch (this.selectedCategoryId()) {
        case "movie":
          return this.movies();
        case "itv":
          return this.live();
        case "series":
          return this.series();
        default:
          return [];
      }
    }, ...ngDevMode ? [{ debugName: "favoritesToShow" }] : []);
    this.selectedCategoryId = signal("movie", ...ngDevMode ? [{ debugName: "selectedCategoryId" }] : []);
    this.series = computed(() => this.allFavorites.value()?.filter((item) => item.category_id === "series"), ...ngDevMode ? [{ debugName: "series" }] : []);
    this.movies = computed(() => this.allFavorites.value()?.filter((item) => item.category_id === "vod"), ...ngDevMode ? [{ debugName: "movies" }] : []);
    this.live = computed(() => this.allFavorites.value()?.filter((item) => item.category_id === "itv"), ...ngDevMode ? [{ debugName: "live" }] : []);
  }
  removeFromFavorites(item) {
    this.stalkerStore.removeFromFavorites(item.id);
    setTimeout(() => {
      this.refreshTimestamp.set(Date.now());
    }, 100);
  }
  setCategoryId(categoryId) {
    this.selectedCategoryId.set(categoryId);
  }
  openItem(item) {
    console.debug("Open item", item);
    switch (item.category_id) {
      case "itv":
        this.stalkerStore.setSelectedContentType("itv");
        this.createLinkToPlayVodItv(item.cmd, item.name, item.logo);
        break;
      case "vod":
        this.itemDetails = item;
        this.stalkerStore.setSelectedItem(item);
        this.stalkerStore.setSelectedContentType("vod");
        break;
      case "series":
        this.itemDetails = item;
        this.stalkerStore.setSelectedItem(item);
        this.stalkerStore.setSelectedContentType("series");
        break;
      default:
        break;
    }
  }
  createLinkToPlayVodItv(cmd, title, thumbnail) {
    return __async(this, null, function* () {
      console.debug("Create link to play VOD/ITV", cmd, title, thumbnail);
      yield this.stalkerStore.createLinkToPlayVod(cmd, title, thumbnail);
    });
  }
  static {
    this.\u0275fac = function StalkerFavoritesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StalkerFavoritesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StalkerFavoritesComponent, selectors: [["app-stalker-favorites"]], decls: 2, vars: 1, consts: [["mat-button", "", 1, "back-button", 3, "click"], [3, "playClicked", "item"], [3, "categoryClicked", "removeFromFavorites", "openItem", "categories", "favorites", "selectedCategoryId"]], template: function StalkerFavoritesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, StalkerFavoritesComponent_Conditional_0_Template, 12, 7)(1, StalkerFavoritesComponent_Conditional_1_Template, 3, 5);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.itemDetails ? 0 : 1);
      }
    }, dependencies: [
      FavoritesLayoutComponent,
      MatButton,
      MatIcon,
      StalkerSeriesViewComponent,
      VodDetailsComponent,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n.back-button[_ngcontent-%COMP%] {\n  margin: 10px 0 0 16px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StalkerFavoritesComponent, [{
    type: Component,
    args: [{ selector: "app-stalker-favorites", imports: [
      FavoritesLayoutComponent,
      MatButton,
      MatIcon,
      StalkerSeriesViewComponent,
      TranslatePipe,
      VodDetailsComponent
    ], template: `@if (itemDetails) {
    <button
        mat-button
        (click)="itemDetails = null"
        [attr.aria-label]="'SETTINGS.BACK_TO_HOME' | translate"
        class="back-button"
    >
        <mat-icon>arrow_back</mat-icon>
        {{ 'SETTINGS.BACK_TO_HOME' | translate }}
    </button>
    @switch (itemDetails.category_id) {
        @case ('vod') {
            <app-vod-details
                [item]="itemDetails.details"
                (playClicked)="
                    createLinkToPlayVodItv(
                        itemDetails.details.cmd,
                        itemDetails.details.info.name,
                        itemDetails.details.info.movie_image
                    )
                "
            />
        }
        @case ('series') {
            <app-stalker-series-view />
        }
    }
} @else {
    <app-favorites-layout
        [categories]="categories() ?? []"
        [favorites]="favoritesToShow() ?? []"
        [selectedCategoryId]="selectedCategoryId()"
        (categoryClicked)="setCategoryId($event.category_id)"
        (removeFromFavorites)="removeFromFavorites($event)"
        (openItem)="openItem($event)"
    />
}
`, styles: ["/* angular:styles/component:css;07a5a0e7c884e56d5e8a4aa9954c0ec1a1900df89f1a4c3cc47636af4b6a7615;/vercel/path0/src/app/stalker/stalker-favorites/stalker-favorites.component.ts */\n:host {\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n.back-button {\n  margin: 10px 0 0 16px;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StalkerFavoritesComponent, { className: "StalkerFavoritesComponent", filePath: "src/app/stalker/stalker-favorites/stalker-favorites.component.ts", lineNumber: 38 });
})();
export {
  StalkerFavoritesComponent
};
