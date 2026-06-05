import {
  MatCard,
  MatCardModule
} from "./sidimad-card.js";
import {
  MatCheckbox,
  MatCheckboxModule,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix
} from "./sidimad-store.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatIcon,
  MatIconModule,
  NgControlStatus,
  NgModel,
  TranslatePipe
} from "./sidimad-browser.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  model,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./sidimad-app.js";

// src/app/shared/components/search-form/search-form.component.ts
var _c0 = ["searchInput"];
var _forTrack0 = ($index, $item) => $item.key;
function SearchFormComponent_Conditional_14_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const filter_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(1, 1, filter_r3.translationKey), "\n                    ");
  }
}
function SearchFormComponent_Conditional_14_For_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const filter_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1("\n                        ", filter_r3.label, "\n                    ");
  }
}
function SearchFormComponent_Conditional_14_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "mat-checkbox", 6);
    \u0275\u0275twoWayListener("ngModelChange", function SearchFormComponent_Conditional_14_For_4_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const filter_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.filters[filter_r3.key], $event) || (ctx_r3.filters[filter_r3.key] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SearchFormComponent_Conditional_14_For_4_Template_mat_checkbox_ngModelChange_1_listener() {
      const filter_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onFilterChange(filter_r3.key));
    });
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275conditionalCreate(3, SearchFormComponent_Conditional_14_For_4_Conditional_3_Template, 2, 3)(4, SearchFormComponent_Conditional_14_For_4_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
  }
  if (rf & 2) {
    const filter_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.filters[filter_r3.key]);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(filter_r3.translationKey ? 3 : 4);
  }
}
function SearchFormComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275repeaterCreate(3, SearchFormComponent_Conditional_14_For_4_Template, 6, 2, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n    ");
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.filterConfig);
  }
}
var SearchFormComponent = class _SearchFormComponent {
  constructor() {
    this.placeholder = "Search";
    this.filters = {};
    this.filterConfig = [];
    this.singleSelection = false;
    this.searchTerm = model("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
    this.filtersChange = new EventEmitter();
    this.search = new EventEmitter();
  }
  onFilterChange(changedKey) {
    if (this.singleSelection) {
      Object.keys(this.filters).forEach((key) => {
        if (key !== changedKey) {
          this.filters[key] = false;
        }
      });
    }
    this.filtersChange.emit(this.filters);
    this.search.emit();
  }
  onSearchTermChange() {
    setTimeout(() => {
      this.searchTerm.set(this.searchInput.nativeElement.value);
    }, 500);
  }
  focusSearchInput() {
    this.searchInput.nativeElement.focus();
  }
  static {
    this.\u0275fac = function SearchFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchFormComponent, selectors: [["app-search-form"]], viewQuery: function SearchFormComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
      }
    }, inputs: { placeholder: "placeholder", filters: "filters", filterConfig: "filterConfig", singleSelection: "singleSelection", searchTerm: [1, "searchTerm"] }, outputs: { searchTerm: "searchTermChange", filtersChange: "filtersChange", search: "search" }, decls: 16, vars: 3, consts: [["searchInput", ""], [1, "search-container"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "spellcheck", "false", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], [1, "type-filters"], [3, "ngModelChange", "ngModel"]], template: function SearchFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-form-field", 2);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "mat-label");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "\n        ");
        \u0275\u0275elementStart(7, "input", 3, 0);
        \u0275\u0275listener("ngModelChange", function SearchFormComponent_Template_input_ngModelChange_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSearchTermChange());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, "\n        ");
        \u0275\u0275elementStart(10, "mat-icon", 4);
        \u0275\u0275text(11, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, "\n\n    ");
        \u0275\u0275conditionalCreate(14, SearchFormComponent_Conditional_14_Template, 6, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.placeholder);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.searchTerm());
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.filterConfig.length > 0 ? 14 : -1);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, MatIconModule, MatIcon, MatCheckboxModule, MatCheckbox, TranslatePipe], styles: ["\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchFormComponent, [{
    type: Component,
    args: [{ selector: "app-search-form", standalone: true, imports: [
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatCheckboxModule,
      TranslatePipe
    ], template: '<div class="search-container">\n    <mat-form-field appearance="outline" class="search-field">\n        <mat-label>{{ placeholder }}</mat-label>\n        <input\n            #searchInput\n            matInput\n            spellcheck="false"\n            [ngModel]="searchTerm()"\n            (ngModelChange)="onSearchTermChange()"\n        />\n        <mat-icon matSuffix>search</mat-icon>\n    </mat-form-field>\n\n    @if (filterConfig.length > 0) {\n        <div class="type-filters">\n            @for (filter of filterConfig; track filter.key) {\n                <mat-checkbox\n                    [(ngModel)]="filters[filter.key]"\n                    (ngModelChange)="onFilterChange(filter.key)"\n                >\n                    @if (filter.translationKey) {\n                        {{ filter.translationKey | translate }}\n                    } @else {\n                        {{ filter.label }}\n                    }\n                </mat-checkbox>\n            }\n        </div>\n    }\n</div>\n', styles: ["/* angular:styles/component:css;f113b5e1f49a56a9b9a4520f268d567113fb5b698e5aef9ecd483118033cf19e;/vercel/path0/src/app/shared/components/search-form/search-form.component.ts */\n.search-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n"] }]
  }], null, { searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }], placeholder: [{
    type: Input
  }], filters: [{
    type: Input
  }], filterConfig: [{
    type: Input
  }], singleSelection: [{
    type: Input
  }], filtersChange: [{
    type: Output
  }], search: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchFormComponent, { className: "SearchFormComponent", filePath: "src/app/shared/components/search-form/search-form.component.ts", lineNumber: 49 });
})();

// src/app/shared/components/search-result-item/search-result-item.component.ts
function SearchResultItemComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "img", 1);
    \u0275\u0275listener("error", function SearchResultItemComponent_Conditional_3_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n            ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.posterUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r1.title);
  }
}
function SearchResultItemComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "movie");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
  }
}
function SearchResultItemComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.description);
  }
}
function SearchResultItemComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.type);
  }
}
function SearchResultItemComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                    ");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n            ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.playlistName);
  }
}
var SearchResultItemComponent = class _SearchResultItemComponent {
  constructor() {
    this.title = "";
    this.description = "";
    this.posterUrl = "";
    this.type = "";
    this.playlistName = "";
    this.showPlaylistInfo = false;
    this.itemClick = new EventEmitter();
  }
  static {
    this.\u0275fac = function SearchResultItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchResultItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchResultItemComponent, selectors: [["app-search-result-item"]], inputs: { title: "title", description: "description", posterUrl: "posterUrl", type: "type", playlistName: "playlistName", showPlaylistInfo: "showPlaylistInfo" }, outputs: { itemClick: "itemClick" }, decls: 12, vars: 5, consts: [[3, "click"], [1, "poster", 3, "error", "src", "alt"], [1, "poster-placeholder"], [1, "type-badge"], [1, "playlist-badge"]], template: function SearchResultItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0, "\n        ");
        \u0275\u0275elementStart(1, "mat-card", 0);
        \u0275\u0275listener("click", function SearchResultItemComponent_Template_mat_card_click_1_listener() {
          return ctx.itemClick.emit();
        });
        \u0275\u0275text(2, "\n            ");
        \u0275\u0275conditionalCreate(3, SearchResultItemComponent_Conditional_3_Template, 3, 2)(4, SearchResultItemComponent_Conditional_4_Template, 7, 0);
        \u0275\u0275elementStart(5, "h4");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n            ");
        \u0275\u0275conditionalCreate(8, SearchResultItemComponent_Conditional_8_Template, 4, 1);
        \u0275\u0275conditionalCreate(9, SearchResultItemComponent_Conditional_9_Template, 4, 3);
        \u0275\u0275conditionalCreate(10, SearchResultItemComponent_Conditional_10_Template, 10, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n    ");
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.posterUrl ? 3 : 4);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.description ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.type ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPlaylistInfo && ctx.playlistName ? 10 : -1);
      }
    }, dependencies: [MatCardModule, MatCard, MatIconModule, MatIcon], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\nmat-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nh4[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 8px;\n}\n.poster[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: cover;\n}\n.poster-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.type-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.playlist-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 8px;\n  font-size: 12px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchResultItemComponent, [{
    type: Component,
    args: [{ selector: "app-search-result-item", imports: [MatCardModule, MatIconModule], template: `
        <mat-card (click)="itemClick.emit()">
            @if (posterUrl) {
                <img
                    [src]="posterUrl"
                    [alt]="title"
                    (error)="
                        $event.target.src = './assets/images/default-poster.png'
                    "
                    class="poster"
                />
            } @else {
                <div class="poster-placeholder">
                    <mat-icon>movie</mat-icon>
                </div>
            }
            <h4>{{ title }}</h4>
            @if (description) {
                <p>{{ description }}</p>
            }
            @if (type) {
                <div class="type-badge" [class]="type">{{ type }}</div>
            }
            @if (showPlaylistInfo && playlistName) {
                <div class="playlist-badge">
                    <mat-icon>playlist_play</mat-icon>
                    <span>{{ playlistName }}</span>
                </div>
            }
        </mat-card>
    `, styles: ["/* angular:styles/component:css;ffada237df9bc611af34b8dd6b3734438491b7d60a03fc293149b07c422a98af;/vercel/path0/src/app/shared/components/search-result-item/search-result-item.component.ts */\n:host {\n  display: block;\n}\nmat-card {\n  cursor: pointer;\n}\nh4 {\n  margin: 0;\n  padding: 8px;\n}\n.poster {\n  width: 100%;\n  object-fit: cover;\n}\n.poster-placeholder {\n  width: 100%;\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.type-badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.playlist-badge {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 8px;\n  font-size: 12px;\n}\n"] }]
  }], null, { title: [{
    type: Input
  }], description: [{
    type: Input
  }], posterUrl: [{
    type: Input
  }], type: [{
    type: Input
  }], playlistName: [{
    type: Input
  }], showPlaylistInfo: [{
    type: Input
  }], itemClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchResultItemComponent, { className: "SearchResultItemComponent", filePath: "src/app/shared/components/search-result-item/search-result-item.component.ts", lineNumber: 87 });
})();

export {
  SearchFormComponent,
  SearchResultItemComponent
};
