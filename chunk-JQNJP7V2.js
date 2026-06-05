import {
  StalkerSeriesViewComponent
} from "./chunk-MQJC6O3G.js";
import {
  VodDetailsComponent
} from "./chunk-IBF2XMWH.js";
import {
  MatProgressSpinner
} from "./chunk-4AWO2KFL.js";
import {
  MatCard,
  MatCardActions,
  MatCardModule
} from "./chunk-GCLSZAZE.js";
import "./chunk-PVDG46DZ.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-NHDRQXW3.js";
import {
  PlaylistErrorViewComponent
} from "./chunk-MBWMGKRM.js";
import {
  StalkerStore
} from "./chunk-RJUVZOZV.js";
import "./chunk-VQ4Q64L7.js";
import "./chunk-VSRLJIIN.js";
import "./chunk-BSW44WEY.js";
import "./chunk-L3VXQT5F.js";
import {
  ActivatedRoute,
  Router,
  Store,
  XtreamStore
} from "./chunk-QHT262RL.js";
import {
  MatTooltip
} from "./chunk-BPPYQAMP.js";
import "./chunk-BQRDSFE6.js";
import "./chunk-KMRXFGXG.js";
import {
  MatIcon,
  TranslatePipe
} from "./chunk-W4GTA6ZI.js";
import {
  Component,
  NgOptimizedImage,
  __async,
  inject,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
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
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-7EPDPDBX.js";

// src/app/shared/components/grid-list/grid-list.component.ts
function GridListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275element(3, "mat-spinner", 2);
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
  }
}
function GridListComponent_Conditional_3_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                            ");
    \u0275\u0275elementStart(1, "img", 5);
    \u0275\u0275listener("error", function GridListComponent_Conditional_3_For_2_Conditional_6_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n                        ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const poster_r5 = \u0275\u0275readContextLet(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", poster_r5 ?? "./assets/images/default-poster.png");
  }
}
function GridListComponent_Conditional_3_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                            ");
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275text(2, "\n                        ");
  }
}
function GridListComponent_Conditional_3_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                            ");
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "\n                                ");
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                        ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const rating_r6 = \u0275\u0275readContextLet(8);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "XTREAM.IMDB_RATING"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", rating_r6, "\n                            ");
  }
}
function GridListComponent_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275text(1, "\n                    ");
    \u0275\u0275elementStart(2, "mat-card", 3);
    \u0275\u0275listener("click", function GridListComponent_Conditional_3_For_2_Template_mat_card_click_2_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.itemClicked.emit(item_r2));
    });
    \u0275\u0275text(3, "\n                        ");
    \u0275\u0275declareLet(4);
    \u0275\u0275text(5, "\n                        ");
    \u0275\u0275conditionalCreate(6, GridListComponent_Conditional_3_For_2_Conditional_6_Template, 3, 1)(7, GridListComponent_Conditional_3_For_2_Conditional_7_Template, 3, 0);
    \u0275\u0275declareLet(8);
    \u0275\u0275text(9, "\n                        ");
    \u0275\u0275conditionalCreate(10, GridListComponent_Conditional_3_For_2_Conditional_10_Template, 8, 4);
    \u0275\u0275text(11, "\n                        ");
    \u0275\u0275elementStart(12, "mat-card-actions");
    \u0275\u0275text(13, "\n                            ");
    \u0275\u0275elementStart(14, "div", 4);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n                ");
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r7 = item_r2;
    \u0275\u0275advance(4);
    const poster_r8 = \u0275\u0275storeLet(i_r7.poster_url ?? i_r7.cover);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(poster_r8 ? 6 : 7);
    \u0275\u0275advance(2);
    const rating_r9 = \u0275\u0275storeLet(i_r7.rating ?? i_r7.rating_imdb);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(rating_r9 ? 10 : -1);
    const title_r10 = i_r7.title ?? i_r7.name;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n                                ", title_r10 || "No name", "\n                            ");
  }
}
function GridListComponent_Conditional_3_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275element(1, "app-playlist-error-view", 8);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4, "\n                ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 4, "PORTALS.ERROR_VIEW.EMPTY_CATEGORY.TITLE"))("description", \u0275\u0275pipeBind1(3, 6, "PORTALS.ERROR_VIEW.EMPTY_CATEGORY.DESCRIPTION"))("showActionButtons", false)("viewType", "EMPTY_CATEGORY");
  }
}
function GridListComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275repeaterCreate(1, GridListComponent_Conditional_3_For_2_Template, 19, 5, null, null, \u0275\u0275repeaterTrackByIndex, false, GridListComponent_Conditional_3_ForEmpty_3_Template, 5, 8);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.items());
  }
}
function GridListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "mat-paginator", 9);
    \u0275\u0275listener("page", function GridListComponent_Conditional_5_Template_mat_paginator_page_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pageChange.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("pageIndex", ctx_r2.pageIndex())("length", ctx_r2.totalPages() * ctx_r2.limit())("pageSize", ctx_r2.limit())("pageSizeOptions", ctx_r2.pageSizeOptions());
  }
}
var GridListComponent = class _GridListComponent {
  constructor() {
    this.items = input(...ngDevMode ? [void 0, { debugName: "items" }] : []);
    this.isLoading = input(...ngDevMode ? [void 0, { debugName: "isLoading" }] : []);
    this.itemClicked = output();
    this.pageChange = output();
    this.pageIndex = input(...ngDevMode ? [void 0, { debugName: "pageIndex" }] : []);
    this.totalPages = input(...ngDevMode ? [void 0, { debugName: "totalPages" }] : []);
    this.limit = input(...ngDevMode ? [void 0, { debugName: "limit" }] : []);
    this.pageSizeOptions = input(...ngDevMode ? [void 0, { debugName: "pageSizeOptions" }] : []);
  }
  static {
    this.\u0275fac = function GridListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridListComponent, selectors: [["app-grid-list"]], inputs: { items: [1, "items"], isLoading: [1, "isLoading"], pageIndex: [1, "pageIndex"], totalPages: [1, "totalPages"], limit: [1, "limit"], pageSizeOptions: [1, "pageSizeOptions"] }, outputs: { itemClicked: "itemClicked", pageChange: "pageChange" }, decls: 6, vars: 2, consts: [[1, "grid"], [1, "loading-overlay"], ["diameter", "50"], [3, "click"], [1, "title"], ["fill", "", "priority", "", "placeholder", "", "placeholder", "data:image/png;base64,iVBORw0K...", 1, "stream-icon", 3, "error", "ngSrc"], ["src", "./assets/images/default-poster.png", 1, "stream-icon"], [1, "rating", 3, "matTooltip"], [3, "title", "description", "showActionButtons", "viewType"], ["aria-label", "Select page", 3, "page", "pageIndex", "length", "pageSize", "pageSizeOptions"]], template: function GridListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n            ");
        \u0275\u0275conditionalCreate(2, GridListComponent_Conditional_2_Template, 6, 0)(3, GridListComponent_Conditional_3_Template, 4, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, "\n        ");
        \u0275\u0275conditionalCreate(5, GridListComponent_Conditional_5_Template, 3, 4);
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isLoading() ? 2 : 3);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(((tmp_1_0 = ctx.items()) == null ? null : tmp_1_0.length) > 0 ? 5 : -1);
      }
    }, dependencies: [
      PlaylistErrorViewComponent,
      MatCardModule,
      MatCard,
      MatCardActions,
      MatIcon,
      MatProgressSpinner,
      MatTooltip,
      NgOptimizedImage,
      MatPaginatorModule,
      MatPaginator,
      TranslatePipe
    ], styles: ['\n\nmat-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: none;\n}\nmat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 170px;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .stream-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative !important;\n  border-radius: 12px;\n  display: block;\n  background-color: #f0f0f0;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .stream-icon-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #999;\n  max-height: 300px;\n  min-height: 255px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .stream-icon-placeholder[_ngcontent-%COMP%]::after {\n  content: "No cover";\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  word-break: break-all;\n  text-align: center;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.rating[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 6px;\n  background-color: #3bb33b;\n  color: #fff;\n  font-size: 0.8em;\n  border-radius: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 5px;\n}\n.rating[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 18px;\n  width: 18px;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridListComponent, [{
    type: Component,
    args: [{ selector: "app-grid-list", template: `<div class="grid">
            @if (isLoading()) {
                <div class="loading-overlay">
                    <mat-spinner diameter="50"></mat-spinner>
                </div>
            } @else {
                @for (item of items(); track $index) {
                    @let i = $any(item);
                    <mat-card (click)="itemClicked.emit(item)">
                        @let poster = i.poster_url ?? i.cover;
                        @if (poster) {
                            <img
                                class="stream-icon"
                                [ngSrc]="
                                    poster ??
                                    './assets/images/default-poster.png'
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
                        } @else {
                            <img
                                class="stream-icon"
                                src="./assets/images/default-poster.png"
                            />
                        }
                        @let rating = i.rating ?? i.rating_imdb;
                        @if (rating) {
                            <div
                                class="rating"
                                [matTooltip]="'XTREAM.IMDB_RATING' | translate"
                            >
                                <mat-icon>star</mat-icon>{{ rating }}
                            </div>
                        }
                        @let title = i.title ?? i.name;
                        <mat-card-actions>
                            <div class="title">
                                {{ title || 'No name' }}
                            </div>
                        </mat-card-actions>
                    </mat-card>
                } @empty {
                    <app-playlist-error-view
                        [title]="
                            'PORTALS.ERROR_VIEW.EMPTY_CATEGORY.TITLE'
                                | translate
                        "
                        [description]="
                            'PORTALS.ERROR_VIEW.EMPTY_CATEGORY.DESCRIPTION'
                                | translate
                        "
                        [showActionButtons]="false"
                        [viewType]="'EMPTY_CATEGORY'"
                    />
                }
            }
        </div>
        @if (items()?.length > 0) {
            <mat-paginator
                [pageIndex]="pageIndex()"
                [length]="totalPages() * limit()"
                [pageSize]="limit()"
                [pageSizeOptions]="pageSizeOptions()"
                (page)="pageChange.emit($event)"
                aria-label="Select page"
            />
        } `, imports: [
      TranslatePipe,
      PlaylistErrorViewComponent,
      MatCardModule,
      MatIcon,
      MatProgressSpinner,
      MatTooltip,
      NgOptimizedImage,
      MatPaginatorModule
    ], styles: ['/* src/app/shared/components/grid-list/grid-list.component.scss */\nmat-card {\n  overflow: hidden;\n  transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: none;\n}\nmat-card:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n}\n.grid mat-card {\n  cursor: pointer;\n  width: 170px;\n}\n.grid mat-card mat-card-content {\n  padding: 0;\n  margin: 0;\n}\n.grid mat-card .stream-icon {\n  width: 100%;\n  position: relative !important;\n  border-radius: 12px;\n  display: block;\n  background-color: #f0f0f0;\n}\n.grid mat-card .stream-icon-placeholder {\n  width: 100%;\n  background: #999;\n  max-height: 300px;\n  min-height: 255px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.grid mat-card .stream-icon-placeholder::after {\n  content: "No cover";\n}\n.grid mat-card .title {\n  word-break: break-all;\n  text-align: center;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.rating {\n  position: absolute;\n  top: 5px;\n  right: 6px;\n  background-color: #3bb33b;\n  color: #fff;\n  font-size: 0.8em;\n  border-radius: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 5px;\n}\n.rating mat-icon {\n  font-size: 16px;\n  height: 18px;\n  width: 18px;\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridListComponent, { className: "GridListComponent", filePath: "src/app/shared/components/grid-list/grid-list.component.ts", lineNumber: 99 });
})();

// src/app/xtream-tauri/category-content-view/category-content-view.component.ts
function CategoryContentViewComponent_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-vod-details", 0);
    \u0275\u0275listener("playClicked", function CategoryContentViewComponent_Conditional_0_Conditional_1_Conditional_1_Template_app_vod_details_playClicked_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.createLinkToPlayVod(ctx_r1.selectedItem().cmd, ctx_r1.selectedItem().info.name, ctx_r1.selectedItem().info.movie_image));
    })("addToFavoritesClicked", function CategoryContentViewComponent_Conditional_0_Conditional_1_Conditional_1_Template_app_vod_details_addToFavoritesClicked_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addToFavorites($event));
    })("removeFromFavoritesClicked", function CategoryContentViewComponent_Conditional_0_Conditional_1_Conditional_1_Template_app_vod_details_removeFromFavoritesClicked_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeFromFavorites($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("item", ctx_r1.selectedItem());
  }
}
function CategoryContentViewComponent_Conditional_0_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "app-stalker-series-view");
    \u0275\u0275text(2, "\n        ");
  }
}
function CategoryContentViewComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275conditionalCreate(1, CategoryContentViewComponent_Conditional_0_Conditional_1_Conditional_1_Template, 3, 1)(2, CategoryContentViewComponent_Conditional_0_Conditional_1_Conditional_2_Template, 3, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.contentType === "vod" ? 1 : ctx_r1.contentType === "series" ? 2 : -1);
  }
}
function CategoryContentViewComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-grid-list", 1);
    \u0275\u0275listener("itemClicked", function CategoryContentViewComponent_Conditional_0_Conditional_2_Template_app_grid_list_itemClicked_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onItemClick($event));
    })("pageChange", function CategoryContentViewComponent_Conditional_0_Conditional_2_Template_app_grid_list_pageChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("isLoading", ctx_r1.isPaginatedContentLoading())("items", ctx_r1.paginatedContent())("pageIndex", ctx_r1.pageIndex())("totalPages", ctx_r1.totalPages())("limit", ctx_r1.limit())("pageSizeOptions", ctx_r1.pageSizeOptions);
  }
}
function CategoryContentViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275conditionalCreate(1, CategoryContentViewComponent_Conditional_0_Conditional_1_Template, 3, 1)(2, CategoryContentViewComponent_Conditional_0_Conditional_2_Template, 3, 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isStalker && ctx_r1.selectedItem() ? 1 : 2);
  }
}
function CategoryContentViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275element(1, "app-playlist-error-view", 2);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4, "\n");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 4, "PORTALS.ERROR_VIEW.NO_CATEGORY_SELECTED.TITLE"))("description", \u0275\u0275pipeBind1(3, 6, "PORTALS.ERROR_VIEW.NO_CATEGORY_SELECTED.DESCRIPTION"))("showActionButtons", false)("viewType", "EMPTY_CATEGORY");
  }
}
var CategoryContentViewComponent = class _CategoryContentViewComponent {
  constructor() {
    this.activatedRoute = inject(ActivatedRoute);
    this.router = inject(Router);
    this.isStalker = this.activatedRoute.snapshot.data["api"] === "stalker";
    this.contentType = this.activatedRoute.snapshot.data["contentType"];
    this.store = this.isStalker ? inject(StalkerStore) : inject(XtreamStore);
    this.limit = this.store.limit;
    this.pageIndex = this.store.page;
    this.pageSizeOptions = this.isStalker ? [14] : [10, 25, 50, 100];
    this.selectedCategory = this.store.getSelectedCategory;
    this.paginatedContent = this.store.getPaginatedContent;
    this.isPaginatedContentLoading = this.store.isPaginatedContentLoading;
    this.selectedItem = this.store.selectedItem;
    this.totalPages = this.store.getTotalPages;
    this.bigStore = inject(Store);
    this.seasons = [];
  }
  ngOnInit() {
    const { categoryId } = this.activatedRoute.snapshot.params;
    if (categoryId)
      this.store.setSelectedCategory(categoryId);
  }
  onPageChange(event) {
    this.store.setPage(event.pageIndex);
    this.store.setLimit(event.pageSize);
    localStorage.setItem("xtream-page-size", event.pageSize.toString());
  }
  onItemClick(item) {
    const selectedItem = {
      id: item.id,
      cmd: item.cmd,
      info: {
        movie_image: item.screenshot_uri,
        description: item.description,
        name: item.name,
        director: item.director,
        releasedate: item.year,
        genre: item.genres_str,
        actors: item.actors,
        rating_imdb: item.rating_imdb,
        rating_kinopoisk: item.rating_kinopoisk
      }
    };
    this.store.setSelectedItem(selectedItem);
    if (!this.isStalker) {
      this.router.navigate([item.xtream_id], {
        relativeTo: this.activatedRoute
      });
    }
  }
  createLinkToPlayVod(cmd, title, thumbnail) {
    return __async(this, null, function* () {
      yield this.store.createLinkToPlayVod(cmd, title, thumbnail);
    });
  }
  addToFavorites(item) {
    console.debug("Add to favorites", item);
    this.store.addToFavorites(item);
  }
  removeFromFavorites(favoriteId) {
    console.debug("Remove from favorites", favoriteId);
    this.store.removeFromFavorites(favoriteId);
  }
  static {
    this.\u0275fac = function CategoryContentViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoryContentViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryContentViewComponent, selectors: [["app-category-content-view"]], decls: 2, vars: 1, consts: [[3, "playClicked", "addToFavoritesClicked", "removeFromFavoritesClicked", "item"], [3, "itemClicked", "pageChange", "isLoading", "items", "pageIndex", "totalPages", "limit", "pageSizeOptions"], [3, "title", "description", "showActionButtons", "viewType"]], template: function CategoryContentViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CategoryContentViewComponent_Conditional_0_Template, 3, 1)(1, CategoryContentViewComponent_Conditional_1_Template, 5, 8);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.selectedCategory() ? 0 : 1);
      }
    }, dependencies: [
      MatCardModule,
      MatPaginatorModule,
      PlaylistErrorViewComponent,
      VodDetailsComponent,
      GridListComponent,
      StalkerSeriesViewComponent,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  overflow-y: auto;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryContentViewComponent, [{
    type: Component,
    args: [{ selector: "app-category-content-view", imports: [
      MatCardModule,
      MatPaginatorModule,
      PlaylistErrorViewComponent,
      TranslatePipe,
      VodDetailsComponent,
      GridListComponent,
      StalkerSeriesViewComponent
    ], template: `@if (selectedCategory()) {
    @if (isStalker && selectedItem()) {
        @if (contentType === 'vod') {
            <app-vod-details
                [item]="selectedItem()"
                (playClicked)="
                    createLinkToPlayVod(
                        selectedItem().cmd,
                        selectedItem().info.name,
                        selectedItem().info.movie_image
                    )
                "
                (addToFavoritesClicked)="addToFavorites($event)"
                (removeFromFavoritesClicked)="removeFromFavorites($event)"
            />
        } @else if (contentType === 'series') {
            <app-stalker-series-view />
        }
    } @else {
        <app-grid-list
            [isLoading]="isPaginatedContentLoading()"
            [items]="paginatedContent()"
            (itemClicked)="onItemClick($event)"
            [pageIndex]="pageIndex()"
            [totalPages]="totalPages()"
            [limit]="limit()"
            [pageSizeOptions]="pageSizeOptions"
            (pageChange)="onPageChange($event)"
        />
    }
} @else {
    <app-playlist-error-view
        [title]="'PORTALS.ERROR_VIEW.NO_CATEGORY_SELECTED.TITLE' | translate"
        [description]="
            'PORTALS.ERROR_VIEW.NO_CATEGORY_SELECTED.DESCRIPTION' | translate
        "
        [showActionButtons]="false"
        [viewType]="'EMPTY_CATEGORY'"
    />
}
`, styles: ["/* src/app/xtream-tauri/category-content-view/category-content-view.component.scss */\n:host {\n  overflow-y: auto;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryContentViewComponent, { className: "CategoryContentViewComponent", filePath: "src/app/xtream-tauri/category-content-view/category-content-view.component.ts", lineNumber: 28 });
})();
export {
  CategoryContentViewComponent
};
