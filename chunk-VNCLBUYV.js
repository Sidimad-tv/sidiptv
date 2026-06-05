import {
  CategoryViewComponent,
  MpvPlayerBarComponent
} from "./chunk-3Z54PZEX.js";
import "./chunk-2NO6Q4PC.js";
import "./chunk-JHEQ34EK.js";
import "./chunk-MBWMGKRM.js";
import "./chunk-BSW44WEY.js";
import "./chunk-L3VXQT5F.js";
import {
  ActivatedRoute,
  Router,
  RouterOutlet,
  XtreamStore
} from "./chunk-QHT262RL.js";
import "./chunk-BQRDSFE6.js";
import "./chunk-KMRXFGXG.js";
import {
  MatIcon,
  MatIconButton,
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-W4GTA6ZI.js";
import {
  Component,
  inject,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7EPDPDBX.js";

// src/app/xtream-tauri/xtream-main-container.component.ts
function XtreamMainContainerComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 7);
    \u0275\u0275listener("click", function XtreamMainContainerComponent_Conditional_24_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
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
function XtreamMainContainerComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 2);
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "category");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
  }
}
var XtreamMainContainerComponent = class _XtreamMainContainerComponent {
  constructor() {
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.translateService = inject(TranslateService);
    this.xtreamStore = inject(XtreamStore);
    this.categories = this.xtreamStore.getCategoriesBySelectedType;
    this.selectedCategoryId = this.xtreamStore.selectedCategoryId;
  }
  ngOnInit() {
    const { categoryId } = this.route.snapshot.params;
    if (categoryId)
      this.xtreamStore.setSelectedCategory(Number(categoryId));
  }
  categoryClicked(category) {
    const categoryId = category.category_id ?? category.id;
    this.xtreamStore.setSelectedCategory(Number(categoryId));
    this.router.navigate([categoryId], {
      relativeTo: this.route
    });
  }
  getContentLabel() {
    if (this.xtreamStore.getSelectedCategory() === null || this.xtreamStore.getSelectedCategory() === void 0) {
      return this.translateService.instant("PORTALS.SELECT_CATEGORY");
    } else {
      const selectedCategory = this.xtreamStore.getSelectedCategory();
      return selectedCategory ? `Content for ${selectedCategory.name}` : "Category Content";
    }
  }
  historyBack() {
    this.router.navigate([".", this.xtreamStore.selectedCategoryId()], {
      relativeTo: this.route
    });
  }
  static {
    this.\u0275fac = function XtreamMainContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _XtreamMainContainerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _XtreamMainContainerComponent, selectors: [["app-xtream-main-container"]], decls: 37, vars: 7, consts: [[1, "sidebar"], [1, "sidebar-header"], ["mat-icon-button", "", "disabled", ""], [3, "categoryClicked", "items", "selectedCategoryId"], [1, "main-content"], [1, "content-header"], [1, "scrollable-content"], ["mat-icon-button", "", 3, "click"]], template: function XtreamMainContainerComponent_Template(rf, ctx) {
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
        \u0275\u0275listener("categoryClicked", function XtreamMainContainerComponent_Template_app_category_view_categoryClicked_15_listener($event) {
          return ctx.categoryClicked($event);
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
        \u0275\u0275conditionalCreate(24, XtreamMainContainerComponent_Conditional_24_Template, 7, 0)(25, XtreamMainContainerComponent_Conditional_25_Template, 7, 0);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, "\n    ");
        \u0275\u0275elementStart(29, "div", 6);
        \u0275\u0275text(30, "\n        ");
        \u0275\u0275element(31, "router-outlet");
        \u0275\u0275text(32, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "\n    ");
        \u0275\u0275element(34, "app-mpv-player-bar");
        \u0275\u0275text(35, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 5, "PORTALS.ALL_CATEGORIES"));
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.categories())("selectedCategoryId", ctx.selectedCategoryId());
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.xtreamStore.selectedItem() ? 24 : 25);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\n            ", ctx.getContentLabel(), "\n        ");
      }
    }, dependencies: [
      CategoryViewComponent,
      TranslateModule,
      RouterOutlet,
      MpvPlayerBarComponent,
      MatIcon,
      MatIconButton,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.sidebar-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.content-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.content-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.scrollable-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}", "\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  border-right: 1px solid #333;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XtreamMainContainerComponent, [{
    type: Component,
    args: [{ selector: "app-xtream-main-container", imports: [
      CategoryViewComponent,
      TranslateModule,
      RouterOutlet,
      MpvPlayerBarComponent,
      MatIcon,
      MatIconButton
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
        (categoryClicked)="categoryClicked($event)"
    />
</div>

<div class="main-content">
    <div class="content-header">
        <h2>
            @if (xtreamStore.selectedItem()) {
                <button mat-icon-button (click)="historyBack()">
                    <mat-icon>chevron_left</mat-icon>
                </button>
            } @else {
                <button mat-icon-button disabled>
                    <mat-icon>category</mat-icon>
                </button>
            }
            {{ getContentLabel() }}
        </h2>
    </div>
    <div class="scrollable-content">
        <router-outlet />
    </div>
    <app-mpv-player-bar />
</div>
`, styles: ["/* src/app/xtream-tauri/xtream-main-container.component.scss */\n:host {\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n.sidebar-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.sidebar-header button {\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.main-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.content-header {\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.content-header h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.scrollable-content {\n  flex: 1;\n  overflow-y: auto;\n}\n", "/* src/app/xtream-tauri/sidebar.scss */\n.sidebar {\n  width: 300px;\n  border-right: 1px solid #333;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar .sidebar-header {\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.sidebar .sidebar-header h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(XtreamMainContainerComponent, { className: "XtreamMainContainerComponent", filePath: "src/app/xtream-tauri/xtream-main-container.component.ts", lineNumber: 25 });
})();
export {
  XtreamMainContainerComponent
};
