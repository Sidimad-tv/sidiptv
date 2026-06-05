import {
  SearchFormComponent,
  SearchResultItemComponent
} from "./sidimad-search-form.js";
import {
  StalkerSeriesViewComponent
} from "./sidimad-favorites.js";
import {
  VodDetailsComponent
} from "./sidimad-vod-details.js";
import {
  MatProgressSpinner
} from "./sidimad-spinner.js";
import {
  MatCardModule
} from "./sidimad-card.js";
import {
  PlaylistErrorViewComponent
} from "./sidimad-playlist-error-db.js";
import {
  StalkerContentTypes,
  StalkerPortalActions,
  StalkerStore
} from "./sidimad-stalker-store.js";
import "./sidimad-content-type.js";
import "./sidimad-dialogs.js";
import "./sidimad-database.js";
import {
  ActivatedRoute,
  Store,
  selectPlaylistById
} from "./sidimad-store.js";
import "./sidimad-divider.js";
import {
  DataService,
  MatButton,
  MatIcon,
  STALKER_REQUEST,
  TranslatePipe
} from "./sidimad-browser.js";
import {
  Component,
  __async,
  __spreadProps,
  __spreadValues,
  inject,
  resource,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./sidimad-app.js";

// src/app/stalker/stalker-search/stalker-search.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function StalkerSearchComponent_Conditional_9_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "app-vod-details", 3);
    \u0275\u0275listener("playClicked", function StalkerSearchComponent_Conditional_9_Case_9_Template_app_vod_details_playClicked_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createLinkToPlayVodItv(ctx_r1.itemDetails.cmd, ctx_r1.itemDetails.info.name, ctx_r1.itemDetails.info.movie_image));
    })("addToFavoritesClicked", function StalkerSearchComponent_Conditional_9_Case_9_Template_app_vod_details_addToFavoritesClicked_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToFavorites($event));
    })("removeFromFavoritesClicked", function StalkerSearchComponent_Conditional_9_Case_9_Template_app_vod_details_removeFromFavoritesClicked_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeFromFavorites($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n            ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("item", ctx_r1.itemDetails);
  }
}
function StalkerSearchComponent_Conditional_9_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275element(1, "app-stalker-series-view");
    \u0275\u0275text(2, "\n            ");
  }
}
function StalkerSearchComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "button", 2);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function StalkerSearchComponent_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.itemDetails = null);
    });
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n        ");
    \u0275\u0275conditionalCreate(9, StalkerSearchComponent_Conditional_9_Case_9_Template, 3, 1)(10, StalkerSearchComponent_Conditional_9_Case_10_Template, 3, 0);
    \u0275\u0275text(11, "\n    ");
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "SETTINGS.BACK_TO_HOME"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(7, 5, "SETTINGS.BACK_TO_HOME"), "\n        ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.selectedFilterType()) === "vod" ? 9 : tmp_3_0 === "series" ? 10 : -1);
  }
}
function StalkerSearchComponent_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275text(2, "\n            ");
  }
}
function StalkerSearchComponent_Conditional_10_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                        ");
    \u0275\u0275elementStart(1, "app-search-result-item", 7);
    \u0275\u0275listener("itemClick", function StalkerSearchComponent_Conditional_10_Conditional_6_For_4_Template_app_search_result_item_itemClick_1_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectItem(item_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n                    ");
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", item_r6.name)("posterUrl", item_r6.screenshot_uri)("type", item_r6.type);
  }
}
function StalkerSearchComponent_Conditional_10_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275element(3, "app-playlist-error-view", 9);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275text(6, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                ");
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(4, 4, "PORTALS.EMPTY_LIST_VIEW.TITLE"))("description", \u0275\u0275pipeBind1(5, 6, "PORTALS.EMPTY_LIST_VIEW.NO_SEARCH_RESULTS"))("showActionButtons", false)("viewType", "NO_SEARCH_RESULTS");
  }
}
function StalkerSearchComponent_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275repeaterCreate(3, StalkerSearchComponent_Conditional_10_Conditional_6_For_4_Template, 3, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275conditionalCreate(6, StalkerSearchComponent_Conditional_10_Conditional_6_Conditional_6_Template, 8, 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.searchResultsResource.value());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.searchResultsResource.value().length === 0 ? 6 : -1);
  }
}
function StalkerSearchComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-search-form", 4);
    \u0275\u0275twoWayListener("searchTermChange", function StalkerSearchComponent_Conditional_10_Template_app_search_form_searchTermChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("filtersChange", function StalkerSearchComponent_Conditional_10_Template_app_search_form_filtersChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFiltersChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275conditionalCreate(5, StalkerSearchComponent_Conditional_10_Conditional_5_Template, 3, 0)(6, StalkerSearchComponent_Conditional_10_Conditional_6_Template, 7, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("singleSelection", true);
    \u0275\u0275twoWayProperty("searchTerm", ctx_r1.searchTerm);
    \u0275\u0275property("filters", ctx_r1.filters)("filterConfig", ctx_r1.filterConfig);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.searchResultsResource.isLoading() ? 5 : 6);
  }
}
var StalkerSearchComponent = class _StalkerSearchComponent {
  constructor() {
    this.activatedRoute = inject(ActivatedRoute);
    this.dataService = inject(DataService);
    this.stalkerStore = inject(StalkerStore);
    this.store = inject(Store);
    this.filters = {
      series: false,
      vod: true
    };
    this.filterConfig = [
      {
        key: "vod",
        label: "Movies",
        translationKey: "PORTALS.SIDEBAR.MOVIES"
      },
      {
        key: "series",
        label: "Series",
        translationKey: "PORTALS.SIDEBAR.SERIES"
      }
    ];
    this.searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
    this.currentPlaylist = this.store.selectSignal(selectPlaylistById(this.activatedRoute?.parent?.snapshot.params.id));
    this.selectedFilterType = signal("vod", ...ngDevMode ? [{ debugName: "selectedFilterType" }] : []);
    this.itemDetails = null;
    this.searchResultsResource = resource({
      params: () => ({
        contentType: this.selectedFilterType(),
        search: this.searchTerm(),
        action: StalkerPortalActions.GetOrderedList
      }),
      loader: (_0) => __async(this, [_0], function* ({ params }) {
        if (params.search.length < 3) {
          return [];
        }
        const playlist = this.currentPlaylist();
        if (!playlist)
          return [];
        const { portalUrl, macAddress } = playlist;
        const response = yield this.dataService.sendIpcEvent(STALKER_REQUEST, {
          url: portalUrl,
          macAddress,
          params: {
            action: StalkerContentTypes[params.contentType].getContentAction,
            type: params.contentType,
            search: params.search,
            max_page_items: 100
          }
        });
        if (response) {
          return response.js?.data;
        } else {
          throw new Error(`Error: ${response.message} (Status: ${response.status})`);
        }
      })
    });
  }
  createLinkToPlayVodItv(cmd, title, thumbnail) {
    this.stalkerStore.createLinkToPlayVod(cmd, title, thumbnail);
  }
  selectItem(item) {
    this.itemDetails = __spreadProps(__spreadValues({}, item), {
      info: __spreadProps(__spreadValues({}, item), { movie_image: item.screenshot_uri })
    });
    this.stalkerStore.setSelectedItem(this.itemDetails);
    switch (this.selectedFilterType()) {
      case "vod":
        this.stalkerStore.setSelectedContentType("vod");
        break;
      case "series":
        this.stalkerStore.setSelectedContentType("series");
        break;
      default:
        break;
    }
  }
  onFiltersChange(event) {
    const selectedFilter = Object.keys(event).find((key) => event[key]);
    if (selectedFilter) {
      this.selectedFilterType.set(selectedFilter);
    }
  }
  addToFavorites(item) {
    console.debug("Add to favorites", item);
    this.stalkerStore.addToFavorites(item);
  }
  removeFromFavorites(favoriteId) {
    console.debug("Remove from favorites", favoriteId);
    this.stalkerStore.removeFromFavorites(favoriteId);
  }
  static {
    this.\u0275fac = function StalkerSearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StalkerSearchComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StalkerSearchComponent, selectors: [["app-stalker-search"]], decls: 12, vars: 4, consts: [[1, "search-page"], [1, "header"], ["mat-button", "", 1, "back-button", 3, "click"], [3, "playClicked", "addToFavoritesClicked", "removeFromFavoritesClicked", "item"], [3, "searchTermChange", "filtersChange", "singleSelection", "searchTerm", "filters", "filterConfig"], [1, "results-container"], [1, "results-grid"], [3, "itemClick", "title", "posterUrl", "type"], [1, "no-results"], [3, "title", "description", "showActionButtons", "viewType"]], template: function StalkerSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, "\n\n    ");
        \u0275\u0275conditionalCreate(9, StalkerSearchComponent_Conditional_9_Template, 12, 7)(10, StalkerSearchComponent_Conditional_10_Template, 8, 5);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "PORTALS.SIDEBAR.SEARCH"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.itemDetails ? 9 : 10);
      }
    }, dependencies: [
      MatCardModule,
      MatButton,
      MatIcon,
      MatProgressSpinner,
      PlaylistErrorViewComponent,
      SearchFormComponent,
      SearchResultItemComponent,
      StalkerSeriesViewComponent,
      VodDetailsComponent,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  height: 100%;\n  width: 100%;\n}\n.search-page[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.results-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 1rem;\n  padding-bottom: 1rem;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StalkerSearchComponent, [{
    type: Component,
    args: [{ selector: "app-stalker-search", imports: [
      MatCardModule,
      MatButton,
      MatIcon,
      MatProgressSpinner,
      PlaylistErrorViewComponent,
      SearchFormComponent,
      TranslatePipe,
      SearchResultItemComponent,
      StalkerSeriesViewComponent,
      VodDetailsComponent
    ], template: `<div class="search-page">
    <div class="header">
        <h2>{{ 'PORTALS.SIDEBAR.SEARCH' | translate }}</h2>
    </div>

    @if (itemDetails) {
        <button
            mat-button
            (click)="itemDetails = null"
            [attr.aria-label]="'SETTINGS.BACK_TO_HOME' | translate"
            class="back-button"
        >
            <mat-icon>arrow_back</mat-icon>
            {{ 'SETTINGS.BACK_TO_HOME' | translate }}
        </button>
        @switch (selectedFilterType()) {
            @case ('vod') {
                <app-vod-details
                    [item]="itemDetails"
                    (playClicked)="
                        createLinkToPlayVodItv(
                            itemDetails.cmd,
                            itemDetails.info.name,
                            itemDetails.info.movie_image
                        )
                    "
                    (addToFavoritesClicked)="addToFavorites($event)"
                    (removeFromFavoritesClicked)="removeFromFavorites($event)"
                />
            }
            @case ('series') {
                <app-stalker-series-view />
            }
        }
    } @else {
        <app-search-form
            [singleSelection]="true"
            [(searchTerm)]="searchTerm"
            [filters]="filters"
            [filterConfig]="filterConfig"
            (filtersChange)="onFiltersChange($event)"
        />
        <div class="results-container">
            @if (searchResultsResource.isLoading()) {
                <mat-spinner />
            } @else {
                <div class="results-grid">
                    @for (
                        item of searchResultsResource.value();
                        track item.id
                    ) {
                        <app-search-result-item
                            [title]="item.name"
                            [posterUrl]="item.screenshot_uri"
                            [type]="item.type"
                            (itemClick)="selectItem(item)"
                        />
                    }
                </div>
                @if (searchResultsResource.value().length === 0) {
                    <div class="no-results">
                        <app-playlist-error-view
                            [title]="
                                'PORTALS.EMPTY_LIST_VIEW.TITLE' | translate
                            "
                            [description]="
                                'PORTALS.EMPTY_LIST_VIEW.NO_SEARCH_RESULTS'
                                    | translate
                            "
                            [showActionButtons]="false"
                            [viewType]="'NO_SEARCH_RESULTS'"
                        />
                    </div>
                }
            }
        </div>
    }
</div>
`, styles: ["/* angular:styles/component:css;41002c5b090530af67a07a1a1a9dfb475c89e99b2581c5d047e5e84c5a389af6;/vercel/path0/src/app/stalker/stalker-search/stalker-search.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  height: 100%;\n  width: 100%;\n}\n.search-page {\n  padding: 20px;\n}\n.results-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 1rem;\n  padding-bottom: 1rem;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StalkerSearchComponent, { className: "StalkerSearchComponent", filePath: "src/app/stalker/stalker-search/stalker-search.component.ts", lineNumber: 57 });
})();
export {
  StalkerSearchComponent
};
