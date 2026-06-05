import {
  require_groupBy
} from "./sidimad-lodash.js";
import {
  SearchFormComponent,
  SearchResultItemComponent
} from "./sidimad-search-form.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./sidimad-card.js";
import {
  ActivatedRoute,
  DatabaseService,
  MAT_DIALOG_DATA,
  MatCheckboxModule,
  MatDialogModule,
  MatDialogRef,
  MatFormFieldModule,
  MatInputModule,
  Router,
  XtreamStore
} from "./sidimad-store.js";
import {
  FormsModule,
  MatIcon,
  MatIconButton,
  TranslatePipe
} from "./sidimad-browser.js";
import {
  Component,
  Inject,
  KeyValuePipe,
  Optional,
  ViewChild,
  __async,
  __toESM,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./sidimad-app.js";

// src/app/xtream-tauri/search-results/search-results.component.ts
var import_groupBy = __toESM(require_groupBy());
var _c0 = ["searchInput"];
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function SearchResultsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "button", 4);
    \u0275\u0275listener("click", function SearchResultsComponent_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dialogRef.close());
    });
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n        ");
  }
}
function SearchResultsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n    ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            Found ", ctx_r1.xtreamStore.searchResults().length, " results\n        ");
  }
}
function SearchResultsComponent_Conditional_15_Conditional_1_For_9_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                                    ");
    \u0275\u0275elementStart(1, "app-search-result-item", 12);
    \u0275\u0275listener("itemClick", function SearchResultsComponent_Conditional_15_Conditional_1_For_9_For_15_Template_app_search_result_item_itemClick_1_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectItem(item_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n                                ");
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("title", item_r4.title)("description", item_r4.description)("posterUrl", item_r4.poster_url)("type", item_r4.type)("playlistName", item_r4.playlist_name)("showPlaylistInfo", ctx_r1.isGlobalSearch);
  }
}
function SearchResultsComponent_Conditional_15_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                        ");
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275text(2, "\n                            ");
    \u0275\u0275elementStart(3, "h3", 9);
    \u0275\u0275text(4, "\n                                ");
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n                            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n                            ");
    \u0275\u0275elementStart(12, "div", 11);
    \u0275\u0275text(13, "\n                                ");
    \u0275\u0275repeaterCreate(14, SearchResultsComponent_Conditional_15_Conditional_1_For_9_For_15_Template, 3, 6, null, null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n                    ");
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\n                                ", group_r5.key, "\n                                ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", group_r5.value.length, "\n                                    items)");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(group_r5.value);
  }
}
function SearchResultsComponent_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275elementStart(2, "div", 6);
    \u0275\u0275text(3, "\n                    ");
    \u0275\u0275elementStart(4, "h2", 7);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                    ");
    \u0275\u0275repeaterCreate(8, SearchResultsComponent_Conditional_15_Conditional_1_For_9_Template, 18, 2, null, null, _forTrack0);
    \u0275\u0275pipe(10, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n            ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("\n                        Found ", ctx_r1.xtreamStore.searchResults().length, " items\n                        across\n                        ", \u0275\u0275pipeBind1(6, 2, ctx_r1.getGroupedResults()).length, " playlists\n                    ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(10, 4, ctx_r1.getGroupedResults()));
  }
}
function SearchResultsComponent_Conditional_15_Conditional_2_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                                    ");
    \u0275\u0275elementStart(1, "img", 15);
    \u0275\u0275listener("error", function SearchResultsComponent_Conditional_15_Conditional_2_For_5_Conditional_5_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n                                ");
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r7.poster_url, \u0275\u0275sanitizeUrl)("alt", item_r7.title);
  }
}
function SearchResultsComponent_Conditional_15_Conditional_2_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                                    ");
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275text(2, "\n                                        ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "movie");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                                ");
  }
}
function SearchResultsComponent_Conditional_15_Conditional_2_For_5_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                                    ");
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n                                ");
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                                        ", item_r7.playlist_name, "\n                                    ");
  }
}
function SearchResultsComponent_Conditional_15_Conditional_2_For_5_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                                    ");
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275text(2, "\n                                        ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                                        ");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n                                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                                ");
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r7.playlist_name);
  }
}
function SearchResultsComponent_Conditional_15_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                        ");
    \u0275\u0275elementStart(1, "mat-card", 13);
    \u0275\u0275listener("click", function SearchResultsComponent_Conditional_15_Conditional_2_For_5_Template_mat_card_click_1_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectItem(item_r7));
    });
    \u0275\u0275text(2, "\n                            ");
    \u0275\u0275elementStart(3, "mat-card-content");
    \u0275\u0275text(4, "\n                                ");
    \u0275\u0275conditionalCreate(5, SearchResultsComponent_Conditional_15_Conditional_2_For_5_Conditional_5_Template, 3, 2);
    \u0275\u0275conditionalCreate(6, SearchResultsComponent_Conditional_15_Conditional_2_For_5_Conditional_6_Template, 7, 0);
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                                ");
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n                                ");
    \u0275\u0275elementStart(13, "div", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n                                ");
    \u0275\u0275conditionalCreate(16, SearchResultsComponent_Conditional_15_Conditional_2_For_5_Conditional_16_Template, 4, 1);
    \u0275\u0275conditionalCreate(17, SearchResultsComponent_Conditional_15_Conditional_2_For_5_Conditional_17_Template, 10, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n                    ");
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(item_r7.poster_url ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!item_r7.poster_url ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.description);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(item_r7.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                                    ", item_r7.type, "\n                                ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r7.playlist_id && ctx_r1.isGlobalSearch ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isGlobalSearch && item_r7.playlist_name ? 17 : -1);
  }
}
function SearchResultsComponent_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275text(3, "\n                    ");
    \u0275\u0275repeaterCreate(4, SearchResultsComponent_Conditional_15_Conditional_2_For_5_Template, 20, 9, null, null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.xtreamStore.searchResults());
  }
}
function SearchResultsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275conditionalCreate(1, SearchResultsComponent_Conditional_15_Conditional_1_Template, 12, 6)(2, SearchResultsComponent_Conditional_15_Conditional_2_Template, 7, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isGlobalSearch ? 1 : 2);
  }
}
function SearchResultsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n        ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1('No results found for "', ctx_r1.searchTerm, '"');
  }
}
var SearchResultsComponent = class _SearchResultsComponent {
  constructor(data, dialogRef) {
    this.dialogRef = dialogRef;
    this.xtreamStore = inject(XtreamStore);
    this.router = inject(Router);
    this.activatedRoute = inject(ActivatedRoute);
    this.databaseService = inject(DatabaseService);
    this.searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
    this.filters = {
      live: true,
      movie: true,
      series: true
    };
    this.isGlobalSearch = false;
    this.filterConfig = [
      {
        key: "live",
        label: "Live TV",
        translationKey: "PORTALS.SIDEBAR.LIVE_TV"
      },
      {
        key: "movie",
        label: "Movies",
        translationKey: "PORTALS.SIDEBAR.MOVIES"
      },
      {
        key: "series",
        label: "Series",
        translationKey: "PORTALS.SIDEBAR.SERIES"
      }
    ];
    this.isGlobalSearch = data?.isGlobalSearch || false;
    effect(() => {
      this.searchTerm();
      if (this.searchTerm().length >= 3) {
        this.executeSearch();
      } else {
        this.xtreamStore.resetSearchResults();
      }
    });
  }
  ngAfterViewInit() {
    this.xtreamStore.setSelectedContentType(void 0);
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    });
  }
  executeSearch() {
    const types = Object.entries(this.filters).filter(([_, enabled]) => enabled).map(([type]) => type);
    if (this.isGlobalSearch) {
      this.searchGlobal(this.searchTerm(), types);
    } else {
      this.xtreamStore.searchContent({
        term: this.searchTerm(),
        types
      });
    }
  }
  searchGlobal(term, types) {
    return __async(this, null, function* () {
      try {
        const results = yield this.databaseService.globalSearchContent(term, types);
        if (results && Array.isArray(results)) {
          this.xtreamStore.setGlobalSearchResults(results);
        }
      } catch (error) {
        console.error("Error in global search:", error);
        this.xtreamStore.resetSearchResults();
      }
    });
  }
  selectItem(item) {
    if (this.isGlobalSearch && item.playlist_id) {
      this.dialogRef?.close();
      const type = item.type === "movie" ? "vod" : item.type;
      this.router.navigate([
        "/xtreams",
        item.playlist_id,
        type,
        item.category_id,
        item.xtream_id
      ]);
    } else {
      const type = item.type === "movie" ? "vod" : item.type;
      this.xtreamStore.resetSearchResults();
      this.xtreamStore.setSelectedContentType(type);
      this.router.navigate(item.type === "live" ? ["..", type, item.category_id] : ["..", type, item.category_id, item.xtream_id], { relativeTo: this.activatedRoute });
    }
  }
  getGroupedResults() {
    const results = this.xtreamStore.searchResults();
    if (!this.isGlobalSearch)
      return { default: results };
    return (0, import_groupBy.default)(results, "playlist_name");
  }
  static {
    this.\u0275fac = function SearchResultsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchResultsComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA, 8), \u0275\u0275directiveInject(MatDialogRef, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchResultsComponent, selectors: [["app-search-results"]], viewQuery: function SearchResultsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
      }
    }, decls: 19, vars: 9, consts: [[1, "search-page"], [1, "header"], [3, "searchTermChange", "searchTerm", "filters", "filterConfig"], [1, "results-container"], ["mat-icon-button", "", 3, "click"], [1, "results-count"], [1, "playlist-section"], [1, "section-title"], [1, "playlist-group"], [1, "playlist-title"], [1, "item-count"], [1, "results-grid"], [3, "itemClick", "title", "description", "posterUrl", "type", "playlistName", "showPlaylistInfo"], [3, "click"], [1, "type-badge"], [1, "poster", 3, "error", "src", "alt"], [1, "poster-placeholder"], [1, "playlist-badge"], [1, "no-items"]], template: function SearchResultsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n        ");
        \u0275\u0275conditionalCreate(8, SearchResultsComponent_Conditional_8_Template, 7, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, "\n\n    ");
        \u0275\u0275elementStart(10, "app-search-form", 2);
        \u0275\u0275twoWayListener("searchTermChange", function SearchResultsComponent_Template_app_search_form_searchTermChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n\n    ");
        \u0275\u0275conditionalCreate(12, SearchResultsComponent_Conditional_12_Template, 4, 1);
        \u0275\u0275elementStart(13, "div", 3);
        \u0275\u0275text(14, "\n        ");
        \u0275\u0275conditionalCreate(15, SearchResultsComponent_Conditional_15_Template, 3, 1)(16, SearchResultsComponent_Conditional_16_Template, 10, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "PORTALS.SIDEBAR.SEARCH"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.isGlobalSearch ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("searchTerm", ctx.searchTerm);
        \u0275\u0275property("filters", ctx.filters)("filterConfig", ctx.filterConfig);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.isGlobalSearch && ctx.xtreamStore.searchResults().length > 0 ? 12 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.xtreamStore.searchResults().length > 0 ? 15 : ctx.searchTerm && ctx.searchTerm.length >= 3 ? 16 : -1);
      }
    }, dependencies: [
      FormsModule,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatCheckboxModule,
      MatDialogModule,
      MatFormFieldModule,
      MatIcon,
      MatIconButton,
      MatInputModule,
      SearchFormComponent,
      SearchResultItemComponent,
      KeyValuePipe,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  height: 100%;\n  width: 100%;\n}\n.search-page[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.search-container[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.search-container[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.search-container[_ngcontent-%COMP%]   .type-filters[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.search-container[_ngcontent-%COMP%]   .results-count[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.results-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n  padding-bottom: 1rem;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%], \n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%] {\n  border-radius: 13px;\n  width: 100%;\n  aspect-ratio: 2/3;\n  object-fit: cover;\n  margin-bottom: 0.5rem;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  font-size: 1rem;\n  font-weight: normal;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: rgba(0, 0, 0, 0.6);\n  margin: 0.5rem 0;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .type-badge.live[_ngcontent-%COMP%] {\n  background: #e53935;\n  color: white;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .type-badge.movie[_ngcontent-%COMP%] {\n  background: #1e88e5;\n  color: white;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .type-badge.series[_ngcontent-%COMP%] {\n  background: #43a047;\n  color: white;\n}\n.no-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.no-items[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 1rem;\n}\n.no-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 0;\n}\n.global-search-overlay[_nghost-%COMP%]   .search-page[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .search-page[_ngcontent-%COMP%] {\n  background: var(--background);\n  height: 100vh;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  position: relative;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%], \n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 6px 8px;\n  font-size: 12px;\n  color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n  backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n.playlist-group[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.playlist-group[_ngcontent-%COMP%]   .playlist-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 1rem 0;\n  padding: 8px;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.playlist-group[_ngcontent-%COMP%]   .playlist-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.playlist-group[_ngcontent-%COMP%]   .playlist-title[_ngcontent-%COMP%]   .item-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.9rem;\n  opacity: 0.7;\n}\n.playlist-group[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.global-search-overlay[_nghost-%COMP%]   .search-page[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .search-page[_ngcontent-%COMP%] {\n  background: var(--background);\n  height: 100vh;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  position: relative;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%], \n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 6px 8px;\n  font-size: 12px;\n  color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n  backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n.global-search-overlay[_nghost-%COMP%]   .playlist-group[_ngcontent-%COMP%]   .playlist-title[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .playlist-group[_ngcontent-%COMP%]   .playlist-title[_ngcontent-%COMP%] {\n  background: var(--surface);\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%] {\n  display: none;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%], \n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.playlist-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  font-size: 1.2rem;\n  font-weight: normal;\n  color: var(--text-color-secondary);\n  padding: 0 8px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchResultsComponent, [{
    type: Component,
    args: [{ selector: "app-search-results", imports: [
      FormsModule,
      KeyValuePipe,
      MatCardModule,
      MatCheckboxModule,
      MatDialogModule,
      MatFormFieldModule,
      MatIcon,
      MatIconButton,
      MatInputModule,
      SearchFormComponent,
      SearchResultItemComponent,
      TranslatePipe
    ], template: `<div class="search-page">
    <div class="header">
        <h2>{{ 'PORTALS.SIDEBAR.SEARCH' | translate }}</h2>
        @if (isGlobalSearch) {
            <button mat-icon-button (click)="dialogRef.close()">
                <mat-icon>close</mat-icon>
            </button>
        }
    </div>

    <app-search-form
        [(searchTerm)]="searchTerm"
        [filters]="filters"
        [filterConfig]="filterConfig"
    />

    @if (!isGlobalSearch && xtreamStore.searchResults().length > 0) {
        <div class="results-count">
            Found {{ xtreamStore.searchResults().length }} results
        </div>
    }

    <div class="results-container">
        @if (xtreamStore.searchResults().length > 0) {
            @if (isGlobalSearch) {
                <!-- Global Search Results -->
                <div class="playlist-section">
                    <h2 class="section-title">
                        Found {{ xtreamStore.searchResults().length }} items
                        across
                        {{ (getGroupedResults() | keyvalue).length }} playlists
                    </h2>
                    @for (
                        group of getGroupedResults() | keyvalue;
                        track group.key
                    ) {
                        <div class="playlist-group">
                            <h3 class="playlist-title">
                                <mat-icon>playlist_play</mat-icon>
                                {{ group.key }}
                                <span class="item-count"
                                    >({{
                                        $any(group).value.length
                                    }}
                                    items)</span
                                >
                            </h3>
                            <div class="results-grid">
                                @for (
                                    item of $any(group).value;
                                    track item.id
                                ) {
                                    <app-search-result-item
                                        [title]="item.title"
                                        [description]="item.description"
                                        [posterUrl]="item.poster_url"
                                        [type]="item.type"
                                        [playlistName]="item.playlist_name"
                                        [showPlaylistInfo]="isGlobalSearch"
                                        (itemClick)="selectItem(item)"
                                    />
                                }
                            </div>
                        </div>
                    }
                </div>
            } @else {
                <!-- Playlist-level Search Results -->
                <div class="results-grid">
                    @for (item of xtreamStore.searchResults(); track item.id) {
                        <mat-card (click)="selectItem(item)">
                            <mat-card-content>
                                @if (item.poster_url) {
                                    <img
                                        [src]="item.poster_url"
                                        [alt]="item.title"
                                        (error)="
                                            $event.target.src =
                                                './assets/images/default-poster.png'
                                        "
                                        class="poster"
                                    />
                                }
                                @if (!item.poster_url) {
                                    <div class="poster-placeholder">
                                        <mat-icon>movie</mat-icon>
                                    </div>
                                }
                                <h3>{{ item.title }}</h3>
                                <p>{{ item.description }}</p>
                                <div class="type-badge" [class]="item.type">
                                    {{ item.type }}
                                </div>
                                @if (item.playlist_id && isGlobalSearch) {
                                    <div class="playlist-badge">
                                        {{ item.playlist_name }}
                                    </div>
                                }
                                @if (isGlobalSearch && item.playlist_name) {
                                    <div class="playlist-badge">
                                        <mat-icon>playlist_play</mat-icon>
                                        <span>{{ item.playlist_name }}</span>
                                    </div>
                                }
                            </mat-card-content>
                        </mat-card>
                    }
                </div>
            }
        } @else if (searchTerm && searchTerm.length >= 3) {
            <div class="no-items">
                <mat-icon>search_off</mat-icon>
                <p>No results found for "{{ searchTerm }}"</p>
            </div>
        }
    </div>
</div>
`, styles: ["/* src/app/xtream-tauri/search-results/search-results.component.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  height: 100%;\n  width: 100%;\n}\n.search-page {\n  padding: 20px;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.search-container {\n  flex-shrink: 0;\n}\n.search-container .search-field {\n  width: 100%;\n}\n.search-container .type-filters mat-checkbox {\n  margin-right: 1rem;\n}\n.search-container .results-count {\n  font-size: 0.9rem;\n}\n.results-container {\n  flex: 1;\n  overflow-y: auto;\n}\n.results-container .results-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n  padding-bottom: 1rem;\n}\n.results-container .results-grid mat-card {\n  cursor: pointer;\n}\n.results-container .results-grid mat-card .poster,\n.results-container .results-grid mat-card .poster-placeholder {\n  border-radius: 13px;\n  width: 100%;\n  aspect-ratio: 2/3;\n  object-fit: cover;\n  margin-bottom: 0.5rem;\n}\n.results-container .results-grid mat-card .poster-placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.results-container .results-grid mat-card .poster-placeholder mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n}\n.results-container .results-grid mat-card h3 {\n  margin: 0.5rem 0;\n  font-size: 1rem;\n  font-weight: normal;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.results-container .results-grid mat-card p {\n  font-size: 0.8rem;\n  color: rgba(0, 0, 0, 0.6);\n  margin: 0.5rem 0;\n}\n.results-container .results-grid mat-card .type-badge {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n}\n.results-container .results-grid mat-card .type-badge.live {\n  background: #e53935;\n  color: white;\n}\n.results-container .results-grid mat-card .type-badge.movie {\n  background: #1e88e5;\n  color: white;\n}\n.results-container .results-grid mat-card .type-badge.series {\n  background: #43a047;\n  color: white;\n}\n.no-items {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.no-items mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 1rem;\n}\n.no-items p {\n  font-size: 1.1rem;\n  margin: 0;\n}\n:host-context(.global-search-overlay) .search-page {\n  background: var(--background);\n  height: 100vh;\n}\n:host-context(.global-search-overlay) .results-grid mat-card {\n  position: relative;\n}\n:host-context(.global-search-overlay) .results-grid mat-card .poster,\n:host-context(.global-search-overlay) .results-grid mat-card .poster-placeholder {\n  margin-top: 24px;\n}\n:host-context(.global-search-overlay) .results-grid mat-card .playlist-badge {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 6px 8px;\n  font-size: 12px;\n  color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n  backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n:host-context(.global-search-overlay) .results-grid mat-card .playlist-badge mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n.playlist-group {\n  margin-bottom: 2rem;\n}\n.playlist-group .playlist-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 1rem 0;\n  padding: 8px;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.playlist-group .playlist-title mat-icon {\n  opacity: 0.7;\n}\n.playlist-group .playlist-title .item-count {\n  margin-left: auto;\n  font-size: 0.9rem;\n  opacity: 0.7;\n}\n.playlist-group .results-grid {\n  margin-bottom: 0;\n}\n:host-context(.global-search-overlay) .search-page {\n  background: var(--background);\n  height: 100vh;\n}\n:host-context(.global-search-overlay) .results-grid mat-card {\n  position: relative;\n}\n:host-context(.global-search-overlay) .results-grid mat-card .poster,\n:host-context(.global-search-overlay) .results-grid mat-card .poster-placeholder {\n  margin-top: 24px;\n}\n:host-context(.global-search-overlay) .results-grid mat-card .playlist-badge {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 6px 8px;\n  font-size: 12px;\n  color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n  backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n:host-context(.global-search-overlay) .results-grid mat-card .playlist-badge mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n:host-context(.global-search-overlay) .playlist-group .playlist-title {\n  background: var(--surface);\n}\n:host-context(.global-search-overlay) .results-grid mat-card .playlist-badge {\n  display: none;\n}\n:host-context(.global-search-overlay) .results-grid mat-card .poster,\n:host-context(.global-search-overlay) .results-grid mat-card .poster-placeholder {\n  margin-top: 0;\n}\n.playlist-section .section-title {\n  margin: 0 0 1.5rem;\n  font-size: 1.2rem;\n  font-weight: normal;\n  color: var(--text-color-secondary);\n  padding: 0 8px;\n}\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef, decorators: [{
    type: Optional
  }] }], { searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchResultsComponent, { className: "SearchResultsComponent", filePath: "src/app/xtream-tauri/search-results/search-results.component.ts", lineNumber: 57 });
})();

export {
  SearchResultsComponent
};
