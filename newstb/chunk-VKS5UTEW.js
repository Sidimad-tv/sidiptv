import {
  CategoryViewComponent,
  MpvPlayerBarComponent
} from "./chunk-3Z54PZEX.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-GCLSZAZE.js";
import {
  MatTooltip
} from "./chunk-BPPYQAMP.js";
import {
  MatIcon,
  MatIconButton,
  TranslatePipe
} from "./chunk-W4GTA6ZI.js";
import {
  Component,
  DatePipe,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7EPDPDBX.js";

// src/app/shared/components/favorites-layout/favorites-layout.component.ts
function FavoritesLayoutComponent_Conditional_35_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "mat-card", 8);
    \u0275\u0275listener("click", function FavoritesLayoutComponent_Conditional_35_For_4_Template_mat_card_click_1_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openFavorite(item_r2));
    });
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275elementStart(3, "img", 9);
    \u0275\u0275listener("error", function FavoritesLayoutComponent_Conditional_35_For_4_Template_img_error_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n                        ");
    \u0275\u0275elementStart(5, "mat-card-content");
    \u0275\u0275text(6, "\n                            ");
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                            ");
    \u0275\u0275elementStart(10, "p", 10);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n                        ");
    \u0275\u0275elementStart(15, "button", 11);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("click", function FavoritesLayoutComponent_Conditional_35_For_4_Template_button_click_15_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.removeFavorite(item_r2));
    });
    \u0275\u0275text(17, "\n                            ");
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "\n                ");
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r2.poster_url || item_r2.cover || "assets/default-" + ctx_r2.selectedCategoryId() + ".png", \u0275\u0275sanitizeUrl)("alt", item_r2.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n                                ", (item_r2 == null ? null : item_r2.title) || (item_r2 == null ? null : item_r2.details == null ? null : item_r2.details.info == null ? null : item_r2.details.info.name), "\n                            ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                                Added:\n                                ", \u0275\u0275pipeBind2(12, 5, item_r2 == null ? null : item_r2.added_at, "d MMMM, y, HH:MM"), "\n                            ");
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(16, 8, "CHANNELS.REMOVE_FAVORITE"));
  }
}
function FavoritesLayoutComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275repeaterCreate(3, FavoritesLayoutComponent_Conditional_35_For_4_Template, 23, 10, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.favorites());
  }
}
function FavoritesLayoutComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "favorite_border");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "No items in the selected category");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n        ");
  }
}
var FavoritesLayoutComponent = class _FavoritesLayoutComponent {
  constructor() {
    this.categories = input([], ...ngDevMode ? [{ debugName: "categories" }] : []);
    this.favorites = input([], ...ngDevMode ? [{ debugName: "favorites" }] : []);
    this.selectedCategoryId = input("movie", ...ngDevMode ? [{ debugName: "selectedCategoryId" }] : []);
    this.titleTranslationString = input("CHANNELS.FAVORITES", ...ngDevMode ? [{ debugName: "titleTranslationString" }] : []);
    this.categoryClicked = output();
    this.removeFromFavorites = output();
    this.openItem = output();
  }
  setCategoryId(categoryId) {
    this.categoryClicked.emit({ category_id: categoryId });
  }
  removeFavorite(item) {
    this.removeFromFavorites.emit(item);
  }
  openFavorite(item) {
    this.openItem.emit(item);
  }
  static {
    this.\u0275fac = function FavoritesLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FavoritesLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FavoritesLayoutComponent, selectors: [["app-favorites-layout"]], inputs: { categories: [1, "categories"], favorites: [1, "favorites"], selectedCategoryId: [1, "selectedCategoryId"], titleTranslationString: [1, "titleTranslationString"] }, outputs: { categoryClicked: "categoryClicked", removeFromFavorites: "removeFromFavorites", openItem: "openItem" }, decls: 41, vars: 9, consts: [[1, "sidebar"], [1, "sidebar-header"], ["mat-icon-button", "", "disabled", ""], [3, "categoryClicked", "items", "selectedCategoryId"], [1, "main-content"], [1, "content-header"], [1, "scrollable-content"], [1, "items-grid"], [1, "item-card", 3, "click"], [1, "item-image", 3, "error", "src", "alt"], [1, "added-date"], ["mat-icon-button", "", "color", "warn", 1, "favorite-button", 3, "click", "matTooltip"], [1, "no-items"]], template: function FavoritesLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275text(5, "\n            ");
        \u0275\u0275elementStart(6, "mat-icon");
        \u0275\u0275text(7, "list");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, "\n        ");
        \u0275\u0275elementStart(10, "h2");
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, "\n    ");
        \u0275\u0275elementStart(15, "app-category-view", 3);
        \u0275\u0275listener("categoryClicked", function FavoritesLayoutComponent_Template_app_category_view_categoryClicked_15_listener($event) {
          return ctx.setCategoryId($event.category_id);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, "\n\n");
        \u0275\u0275elementStart(18, "div", 4);
        \u0275\u0275text(19, "\n    ");
        \u0275\u0275elementStart(20, "div", 5);
        \u0275\u0275text(21, "\n        ");
        \u0275\u0275elementStart(22, "h2");
        \u0275\u0275text(23, "\n            ");
        \u0275\u0275elementStart(24, "button", 2);
        \u0275\u0275text(25, "\n                ");
        \u0275\u0275elementStart(26, "mat-icon");
        \u0275\u0275text(27, "movie");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, "\n    ");
        \u0275\u0275elementStart(33, "div", 6);
        \u0275\u0275text(34, "\n        ");
        \u0275\u0275conditionalCreate(35, FavoritesLayoutComponent_Conditional_35_Template, 6, 0)(36, FavoritesLayoutComponent_Conditional_36_Template, 10, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, "\n    ");
        \u0275\u0275element(38, "app-mpv-player-bar");
        \u0275\u0275text(39, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 5, "PORTALS.ALL_CATEGORIES"));
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.categories())("selectedCategoryId", ctx.selectedCategoryId());
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(30, 7, ctx.titleTranslationString()) + " (" + ctx.selectedCategoryId() + ")", "\n        ");
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.favorites().length ? 35 : 36);
      }
    }, dependencies: [
      CategoryViewComponent,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatIcon,
      MatIconButton,
      MpvPlayerBarComponent,
      MatTooltip,
      DatePipe,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.content-header[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.content-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.scrollable-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.favorites-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.items-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 16px;\n  padding: 16px;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0;\n}\n.item-card[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  transition: transform 0.2s;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.item-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.item-image[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 2/3;\n  object-fit: cover;\n}\n.favorite-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  z-index: 1;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  padding: 12px;\n  flex-grow: 1;\n}\nmat-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 1.2;\n  max-height: 2.4em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  white-space: normal;\n}\n.added-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  margin: 4px 0 0 0;\n}\n.no-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.no-items[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 1rem;\n}\n.no-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 0;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.sidebar-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}", "\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  border-right: 1px solid #333;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FavoritesLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-favorites-layout", imports: [
      CategoryViewComponent,
      DatePipe,
      MatCardModule,
      MatIcon,
      MatIconButton,
      MpvPlayerBarComponent,
      MatTooltip,
      TranslatePipe
    ], template: `<div class="sidebar">
    <div class="sidebar-header">
        <button mat-icon-button disabled>
            <mat-icon>list</mat-icon>
        </button>
        <h2>{{ 'PORTALS.ALL_CATEGORIES' | translate }}</h2>
    </div>
    <app-category-view
        [items]="categories()"
        [selectedCategoryId]="selectedCategoryId()"
        (categoryClicked)="setCategoryId($event.category_id)"
    />
</div>

<div class="main-content">
    <div class="content-header">
        <h2>
            <button mat-icon-button disabled>
                <mat-icon>movie</mat-icon>
            </button>
            {{
                (titleTranslationString() | translate) +
                    ' (' +
                    selectedCategoryId() +
                    ')'
            }}
        </h2>
    </div>
    <div class="scrollable-content">
        @if (favorites().length) {
            <div class="items-grid">
                @for (item of favorites(); track $index) {
                    <mat-card class="item-card" (click)="openFavorite(item)">
                        <img
                            [src]="
                                item.poster_url ||
                                item.cover ||
                                'assets/default-' +
                                    selectedCategoryId() +
                                    '.png'
                            "
                            (error)="
                                $event.target.src =
                                    './assets/images/default-poster.png'
                            "
                            [alt]="item.title"
                            class="item-image"
                        />
                        <mat-card-content>
                            <h3>
                                {{ item?.title || item?.details?.info?.name }}
                            </h3>
                            <p class="added-date">
                                Added:
                                {{ item?.added_at | date: 'd MMMM, y, HH:MM' }}
                            </p>
                        </mat-card-content>
                        <button
                            mat-icon-button
                            color="warn"
                            class="favorite-button"
                            [matTooltip]="
                                'CHANNELS.REMOVE_FAVORITE' | translate
                            "
                            (click)="
                                $event.stopPropagation(); removeFavorite(item)
                            "
                        >
                            <mat-icon>delete</mat-icon>
                        </button>
                    </mat-card>
                }
            </div>
        } @else {
            <div class="no-items">
                <mat-icon>favorite_border</mat-icon>
                <p>No items in the selected category</p>
            </div>
        }
    </div>
    <app-mpv-player-bar />
</div>
`, styles: ["/* src/app/shared/components/favorites-layout/favorites-layout.component.scss */\n:host {\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n.main-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.content-header {\n  text-transform: capitalize;\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.content-header h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.scrollable-content {\n  flex: 1;\n  overflow-y: auto;\n}\n.favorites-container {\n  padding: 20px;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.items-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 16px;\n  padding: 16px;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0;\n}\n.item-card {\n  position: relative;\n  cursor: pointer;\n  transition: transform 0.2s;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.item-card:hover {\n  transform: scale(1.02);\n}\n.item-image {\n  width: 100%;\n  aspect-ratio: 2/3;\n  object-fit: cover;\n}\n.favorite-button {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  z-index: 1;\n}\nmat-card-content {\n  padding: 12px;\n  flex-grow: 1;\n}\nmat-card-content h3 {\n  margin: 0;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 1.2;\n  max-height: 2.4em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  white-space: normal;\n}\n.added-date {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  margin: 4px 0 0 0;\n}\n.no-items {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.no-items mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 1rem;\n}\n.no-items p {\n  font-size: 1.1rem;\n  margin: 0;\n}\n.sidebar-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.sidebar-header button {\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n", "/* src/app/xtream-tauri/sidebar.scss */\n.sidebar {\n  width: 300px;\n  border-right: 1px solid #333;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar .sidebar-header {\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.sidebar .sidebar-header h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FavoritesLayoutComponent, { className: "FavoritesLayoutComponent", filePath: "src/app/shared/components/favorites-layout/favorites-layout.component.ts", lineNumber: 29 });
})();

export {
  FavoritesLayoutComponent
};
