import {
  PlaylistErrorViewComponent
} from "./sidimad-playlist-error.js";
import {
  CategoryViewComponent,
  MpvPlayerBarComponent
} from "./sidimad-external-player.js";
import "./sidimad-tauri.js";
import {
  NgxSkeletonLoaderComponent,
  NgxSkeletonLoaderModule
} from "./sidimad-skeleton.js";
import {
  MatListItem,
  MatListItemAvatar,
  MatListItemMeta,
  MatListModule,
  MatNavList
} from "./sidimad-list.js";
import {
  MatPaginatorModule
} from "./sidimad-paginator.js";
import "./sidimad-playlist-error-db.js";
import {
  StalkerStore
} from "./sidimad-stalker-store.js";
import "./sidimad-content-type.js";
import "./sidimad-select.js";
import "./sidimad-dialogs.js";
import {
  PlaylistsService
} from "./sidimad-database.js";
import {
  ActivatedRoute,
  MatSnackBar,
  Router,
  RouterOutlet
} from "./sidimad-store.js";
import "./sidimad-tooltip.js";
import "./sidimad-checkbox.js";
import {
  MatDivider
} from "./sidimad-divider.js";
import {
  MatButton,
  MatIcon,
  MatIconButton,
  TranslatePipe
} from "./sidimad-browser.js";
import {
  Component,
  __spreadProps,
  __spreadValues,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./sidimad-app.js";

// src/app/stalker/stalker-main-container.component.ts
var _c0 = () => ({ width: "95%", height: "48px", borderRadius: "40px" });
function StalkerMainContainerComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "button", 5);
    \u0275\u0275listener("click", function StalkerMainContainerComponent_Conditional_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToCategories());
    });
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n        ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.selectedCategoryTitle());
  }
}
function StalkerMainContainerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "button", 6);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 1, "PORTALS.ALL_CATEGORIES"));
  }
}
function StalkerMainContainerComponent_Conditional_8_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "mat-list-item", 8);
    \u0275\u0275listener("click", function StalkerMainContainerComponent_Conditional_8_For_4_Template_mat_list_item_click_1_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createLinkToPlayItv(item_r4));
    });
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "img", 9);
    \u0275\u0275listener("error", function StalkerMainContainerComponent_Conditional_8_For_4_Template_img_error_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "button", 10);
    \u0275\u0275listener("click", function StalkerMainContainerComponent_Conditional_8_For_4_Template_button_click_5_listener($event) {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.toggleFavorite(item_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(6, "\n                        ");
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n            ");
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r4.logo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                    ", item_r4.name, "\n                    ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.favorites.get(item_r4.id) ? "star" : "star_outline");
  }
}
function StalkerMainContainerComponent_Conditional_8_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1("\n                        Loading page ", ctx_r1.pageIndex() + 1, "...\n                    ");
  }
}
function StalkerMainContainerComponent_Conditional_8_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1("\n                        Load More (Page ", ctx_r1.pageIndex() + 1, ")\n                    ");
  }
}
function StalkerMainContainerComponent_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "mat-divider");
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementStart(5, "button", 11);
    \u0275\u0275listener("click", function StalkerMainContainerComponent_Conditional_8_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275text(6, "\n                    ");
    \u0275\u0275conditionalCreate(7, StalkerMainContainerComponent_Conditional_8_Conditional_6_Conditional_7_Template, 1, 1)(8, StalkerMainContainerComponent_Conditional_8_Conditional_6_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n        ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.isLoadingMore());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isLoadingMore() ? 7 : 8);
  }
}
function StalkerMainContainerComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "mat-nav-list", 7);
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275repeaterCreate(3, StalkerMainContainerComponent_Conditional_8_For_4_Template, 12, 3, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n\n        ");
    \u0275\u0275conditionalCreate(6, StalkerMainContainerComponent_Conditional_8_Conditional_6_Template, 11, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.itvChannels());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.hasMoreItems() && !ctx_r1.isContentLoading() ? 6 : -1);
  }
}
function StalkerMainContainerComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "ngx-skeleton-loader", 12);
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("theme", \u0275\u0275pureFunction0(1, _c0));
  }
}
function StalkerMainContainerComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "app-playlist-error-view", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 2, "PORTALS.ERROR_VIEW.UNKNOWN_ERROR.TITLE"))("description", \u0275\u0275pipeBind1(3, 4, "PORTALS.ERROR_VIEW.UNKNOWN_ERROR.DESCRIPTION"));
  }
}
function StalkerMainContainerComponent_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-category-view", 14);
    \u0275\u0275listener("categoryClicked", function StalkerMainContainerComponent_Conditional_9_Conditional_3_Template_app_category_view_categoryClicked_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.categoryClicked($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r1.categories())("selectedCategoryId", ctx_r1.stalkerStore.selectedCategoryId());
  }
}
function StalkerMainContainerComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275conditionalCreate(1, StalkerMainContainerComponent_Conditional_9_Conditional_1_Template, 3, 2)(2, StalkerMainContainerComponent_Conditional_9_Conditional_2_Template, 5, 6)(3, StalkerMainContainerComponent_Conditional_9_Conditional_3_Template, 3, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isCategoryLoading() ? 1 : ctx_r1.isCategoryFailed() ? 2 : 3);
  }
}
function StalkerMainContainerComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 5);
    \u0275\u0275listener("click", function StalkerMainContainerComponent_Conditional_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.historyBack());
    });
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
  }
}
function StalkerMainContainerComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 6);
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "category");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\n                ", ctx_r1.selectedCategoryTitle(), "\n            ");
  }
}
function StalkerMainContainerComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n            ");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(3, 1, "PORTALS.SELECT_CATEGORY"), "\n                ");
  }
}
var StalkerMainContainerComponent = class _StalkerMainContainerComponent {
  /* readonly contentResource = resource({
          request: () => ({
              contentType: this.stalkerStore.selectedContentType(),
              category: this.stalkerStore.selectedCategoryId(),
              action: StalkerPortalActions.GetOrderedList,
              search: this.searchPhrase,
              pageIndex: this.pageIndex(),
          }),
          loader: async ({ request }) => {
              if (
                  !request.category ||
                  request.category === null ||
                  request.category === ''
              ) {
                  return Promise.resolve(undefined);
              }
  
              const { portalUrl, macAddress } = this.currentPlaylist();
              const params = {
                  action: StalkerContentTypes[request.contentType]
                      .getContentAction,
                  type: request.contentType,
                  category: request.category ?? '',
                  genre: request.category ?? '',
                  //sortby: 'added',
                  ...(request.search !== '' ? { search: request.search } : {}),
                  p: request.pageIndex,
              };
  
              const response = await this.dataService.sendIpcEvent(
                  STALKER_REQUEST,
                  {
                      url: portalUrl,
                      macAddress,
                      params,
                  }
              );
  
              if (response) {
                  const newItems = response.js.data.map((item) => ({
                      ...item,
                      cover: item.screenshot_uri,
                  }));
  
                  // Check if we're loading the first page or loading more
                  if (request.pageIndex === 0) {
                      this.itvChannels.set(newItems);
                  } else {
                      // Append new items to existing ones
                      this.itvChannels.update((items) => [
                          ...items,
                          ...newItems,
                      ]);
                  }
  
                  // Update hasMoreItems based on total count and current items
                  const totalLoaded = this.itvChannels().length;
                  this.hasMoreItems.set(totalLoaded < response.js.total_items);
  
                  return newItems;
              } else {
                  this.currentLayout = 'not-available';
                  this.showErrorAsNotification({
                      message: 'Error',
                      status: 500,
                  });
                  throw new Error(
                      `Error: ${response.message} (Status: ${response.status})`
                  );
              }
          },
      }); */
  constructor(activatedRoute, playlistService, router, snackBar) {
    this.activatedRoute = activatedRoute;
    this.playlistService = playlistService;
    this.router = router;
    this.snackBar = snackBar;
    this.stalkerStore = inject(StalkerStore);
    this.currentLayout = "category_content";
    this.pageIndex = this.stalkerStore.page;
    this.isLoadingMore = signal(false, ...ngDevMode ? [{ debugName: "isLoadingMore" }] : []);
    this.favorites = /* @__PURE__ */ new Map();
    this.hasMoreItems = this.stalkerStore.hasMoreChannels;
    this.itvChannels = this.stalkerStore.itvChannels;
    this.selectedCategoryTitle = this.stalkerStore.getSelectedCategoryName;
    this.categories = this.stalkerStore.getCategoryResource;
    this.isCategoryLoading = this.stalkerStore.isCategoryResourceLoading;
    this.isCategoryFailed = this.stalkerStore.isCategoryResourceFailed;
    this.contentItems = this.stalkerStore.getPaginatedContent;
    this.isContentLoading = this.stalkerStore.isPaginatedContentLoading;
    effect(() => {
      this.stalkerStore.selectedContentType();
    });
    effect(() => {
      this.stalkerStore.selectedCategoryId();
      this.stalkerStore.setItvChannels([]);
      this.stalkerStore.setPage(0);
    });
    effect(() => {
      if (this.contentItems() !== void 0) {
        this.isLoadingMore.set(false);
      }
    });
    this.playlistService.getPortalFavorites().subscribe((favorites) => {
      favorites.forEach((fav) => {
        this.favorites.set(fav.id, true);
      });
    });
  }
  handshake() {
  }
  categoryClicked(item) {
    this.stalkerStore.setSelectedCategory(Number(item.category_id));
    this.currentLayout = "category_content";
    this.stalkerStore.setPage(0);
    this.stalkerStore.setSelectedItem(void 0);
    if (this.stalkerStore.selectedContentType() === "itv")
      return;
    this.router.navigate([".", item.category_id], {
      relativeTo: this.activatedRoute
    });
  }
  createLinkToPlayItv(item) {
    this.stalkerStore.setSelectedItem(item);
    this.stalkerStore.createLinkToPlayVod(item.cmd, item.name, item.logo);
  }
  toggleFavorite(item) {
    if (this.favorites.has(item.id)) {
      this.stalkerStore.removeFromFavorites(item.id);
      this.favorites.delete(item.id);
      this.snackBar.open("Removed from favorites", null, {
        duration: 1e3
      });
    } else {
      this.stalkerStore.addToFavorites(__spreadProps(__spreadValues({}, item), {
        category_id: "itv",
        title: item.name,
        cover: item.logo,
        added_at: (/* @__PURE__ */ new Date()).toISOString()
      }));
      this.favorites.set(item.id, true);
      this.snackBar.open("Added to favorites", null, {
        duration: 1e3
      });
    }
  }
  loadMore() {
    if (this.isLoadingMore() || !this.hasMoreItems()) {
      return;
    }
    this.isLoadingMore.set(true);
    const nextPage = this.pageIndex() + 1;
    this.stalkerStore.setPage(nextPage);
  }
  historyBack() {
    this.currentLayout = "category_content";
  }
  backToCategories() {
    this.stalkerStore.setSelectedCategory(null);
  }
  static {
    this.\u0275fac = function StalkerMainContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StalkerMainContainerComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PlaylistsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StalkerMainContainerComponent, selectors: [["app-stalker-main-container"]], decls: 30, vars: 5, consts: [[1, "sidebar", 2, "display", "flex", "flex-direction", "column"], [1, "sidebar-header"], [1, "main-content"], [1, "content-header"], [1, "scrollable-content"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", "disabled", ""], [2, "overflow", "auto", "flex", "1"], [3, "click"], ["matListItemAvatar", "", 1, "stream-icon", 3, "error", "src"], ["mat-icon-button", "", "matListItemMeta", "", 3, "click"], ["mat-button", "", 2, "width", "100%", 3, "click", "disabled"], ["count", "20", 3, "theme"], [3, "title", "description"], [3, "categoryClicked", "items", "selectedCategoryId"]], template: function StalkerMainContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275text(4, "\n        ");
        \u0275\u0275conditionalCreate(5, StalkerMainContainerComponent_Conditional_5_Template, 10, 1)(6, StalkerMainContainerComponent_Conditional_6_Template, 11, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n    ");
        \u0275\u0275conditionalCreate(8, StalkerMainContainerComponent_Conditional_8_Template, 7, 1)(9, StalkerMainContainerComponent_Conditional_9_Template, 4, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n\n");
        \u0275\u0275elementStart(11, "div", 2);
        \u0275\u0275text(12, "\n    ");
        \u0275\u0275elementStart(13, "div", 3);
        \u0275\u0275text(14, "\n        ");
        \u0275\u0275elementStart(15, "h2");
        \u0275\u0275text(16, "\n            ");
        \u0275\u0275conditionalCreate(17, StalkerMainContainerComponent_Conditional_17_Template, 7, 0);
        \u0275\u0275conditionalCreate(18, StalkerMainContainerComponent_Conditional_18_Template, 7, 1);
        \u0275\u0275conditionalCreate(19, StalkerMainContainerComponent_Conditional_19_Template, 5, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, "\n\n    ");
        \u0275\u0275elementStart(22, "div", 4);
        \u0275\u0275text(23, "\n        ");
        \u0275\u0275element(24, "router-outlet");
        \u0275\u0275text(25, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "\n    ");
        \u0275\u0275element(27, "app-mpv-player-bar");
        \u0275\u0275text(28, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, "\n");
      }
      if (rf & 2) {
        const isItvCategorySelected_r8 = ctx.stalkerStore.selectedCategoryId() && ctx.stalkerStore.selectedContentType() === "itv";
        \u0275\u0275advance(5);
        \u0275\u0275conditional(isItvCategorySelected_r8 ? 5 : 6);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(isItvCategorySelected_r8 ? 8 : 9);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.currentLayout === "vod-details" || ctx.currentLayout === "serial-details" ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!isItvCategorySelected_r8 ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.contentItems() && !ctx.isContentLoading() ? 19 : -1);
      }
    }, dependencies: [
      CategoryViewComponent,
      MatButton,
      MatIcon,
      MatIconButton,
      MatListModule,
      MatNavList,
      MatListItem,
      MatListItemAvatar,
      MatDivider,
      MatListItemMeta,
      MatPaginatorModule,
      MpvPlayerBarComponent,
      NgxSkeletonLoaderModule,
      NgxSkeletonLoaderComponent,
      PlaylistErrorViewComponent,
      RouterOutlet,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n  justify-content: flex-start;\n}\n.loading-wrapper[_ngcontent-%COMP%] {\n  display: block;\n  padding: 20px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.category-content-view[_ngcontent-%COMP%] {\n  gap: 30px;\n}\n.category-view[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.sidebar-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.content-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}", "\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.sidebar-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.content-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.content-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.scrollable-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}", "\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  border-right: 1px solid #333;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StalkerMainContainerComponent, [{
    type: Component,
    args: [{ selector: "app-stalker-main-container", imports: [
      CategoryViewComponent,
      MatButton,
      MatIcon,
      MatIconButton,
      MatListModule,
      MatPaginatorModule,
      MpvPlayerBarComponent,
      NgxSkeletonLoaderModule,
      PlaylistErrorViewComponent,
      TranslatePipe,
      RouterOutlet
    ], template: `<div class="sidebar" style="display: flex; flex-direction: column">
    <div class="sidebar-header">
        @let isItvCategorySelected =
            stalkerStore.selectedCategoryId() &&
            stalkerStore.selectedContentType() === 'itv';
        @if (isItvCategorySelected) {
            <button mat-icon-button (click)="backToCategories()">
                <mat-icon>chevron_left</mat-icon>
            </button>
            <h2>{{ selectedCategoryTitle() }}</h2>
        } @else {
            <button mat-icon-button disabled>
                <mat-icon>list</mat-icon>
            </button>
            <h2>{{ 'PORTALS.ALL_CATEGORIES' | translate }}</h2>
        }
    </div>
    @if (isItvCategorySelected) {
        <mat-nav-list style="overflow: auto; flex: 1">
            @for (item of itvChannels(); track $index) {
                <mat-list-item (click)="createLinkToPlayItv(item)">
                    <img
                        matListItemAvatar
                        class="stream-icon"
                        [src]="item.logo"
                        (error)="
                            $event.target.src =
                                './assets/images/default-poster.png'
                        "
                    />
                    {{ item.name }}
                    <button
                        mat-icon-button
                        matListItemMeta
                        (click)="toggleFavorite(item); $event.stopPropagation()"
                    >
                        <mat-icon>{{
                            favorites.get(item.id) ? 'star' : 'star_outline'
                        }}</mat-icon>
                    </button>
                </mat-list-item>
            }
        </mat-nav-list>

        @if (hasMoreItems() && !isContentLoading()) {
            <mat-divider />
            <div>
                <button
                    mat-button
                    (click)="loadMore()"
                    [disabled]="isLoadingMore()"
                    style="width: 100%"
                >
                    @if (isLoadingMore()) {
                        Loading page {{ pageIndex() + 1 }}...
                    } @else {
                        Load More (Page {{ pageIndex() + 1 }})
                    }
                </button>
            </div>
        }
    } @else {
        @if (isCategoryLoading()) {
            <ngx-skeleton-loader
                count="20"
                [theme]="{
                    width: '95%',
                    height: '48px',
                    borderRadius: '40px',
                }"
            />
        } @else if (isCategoryFailed()) {
            <app-playlist-error-view
                [title]="'PORTALS.ERROR_VIEW.UNKNOWN_ERROR.TITLE' | translate"
                [description]="
                    'PORTALS.ERROR_VIEW.UNKNOWN_ERROR.DESCRIPTION' | translate
                "
            />
        } @else {
            <app-category-view
                [items]="categories()"
                [selectedCategoryId]="stalkerStore.selectedCategoryId()"
                (categoryClicked)="categoryClicked($event)"
            />
        }
    }
</div>

<div class="main-content">
    <div class="content-header">
        <h2>
            @if (
                currentLayout === 'vod-details' ||
                currentLayout === 'serial-details'
            ) {
                <button mat-icon-button (click)="historyBack()">
                    <mat-icon>chevron_left</mat-icon>
                </button>
            }

            @if (!isItvCategorySelected) {
                <button mat-icon-button disabled>
                    <mat-icon>category</mat-icon>
                </button>
                {{ selectedCategoryTitle() }}
            }

            @if (!contentItems() && !isContentLoading()) {
                <h2>
                    {{ 'PORTALS.SELECT_CATEGORY' | translate }}
                </h2>
            }
        </h2>
    </div>

    <div class="scrollable-content">
        <router-outlet />
    </div>
    <app-mpv-player-bar />
</div>
`, styles: ["/* src/app/stalker/stalker-main-container.component.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n  justify-content: flex-start;\n}\n.loading-wrapper {\n  display: block;\n  padding: 20px;\n}\n.loading-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.category-content-view {\n  gap: 30px;\n}\n.category-view {\n  gap: 10px;\n}\n.sidebar-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.sidebar-header button {\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.content-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n", "/* src/app/xtream-tauri/xtream-main-container.component.scss */\n:host {\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n.sidebar-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.sidebar-header button {\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.main-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.content-header {\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.content-header h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.scrollable-content {\n  flex: 1;\n  overflow-y: auto;\n}\n", "/* src/app/xtream-tauri/sidebar.scss */\n.sidebar {\n  width: 300px;\n  border-right: 1px solid #333;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar .sidebar-header {\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.sidebar .sidebar-header h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: PlaylistsService }, { type: Router }, { type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StalkerMainContainerComponent, { className: "StalkerMainContainerComponent", filePath: "src/app/stalker/stalker-main-container.component.ts", lineNumber: 38 });
})();
export {
  StalkerMainContainerComponent
};
