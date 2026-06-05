import {
  listen
} from "./sidimad-tauri.js";
import {
  MatListItem,
  MatListModule,
  MatNavList
} from "./sidimad-list.js";
import {
  PlaylistErrorViewComponent
} from "./sidimad-playlist-error-db.js";
import {
  invoke,
  isTauri
} from "./sidimad-store.js";
import {
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  TranslatePipe
} from "./sidimad-browser.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  Injectable,
  __async,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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

// src/app/shared/services/mpv-player.service.ts
var MpvPlayerService = class _MpvPlayerService {
  constructor() {
    this.activeProcessesSubject = new BehaviorSubject([]);
    this.activeProcesses$ = this.activeProcessesSubject.asObservable();
    if (!isTauri()) {
      return;
    }
    this.initializeEventListeners();
    this.loadActiveProcesses();
  }
  initializeEventListeners() {
    return __async(this, null, function* () {
      yield listen("mpv-process-added", (event) => {
        const newProcess = event.payload;
        if (newProcess) {
          const currentProcesses = this.activeProcessesSubject.value;
          this.activeProcessesSubject.next([
            ...currentProcesses,
            newProcess
          ]);
        }
      });
      yield listen("mpv-process-removed", (event) => {
        const removedProcess = event.payload;
        if (removedProcess) {
          const currentProcesses = this.activeProcessesSubject.value;
          this.activeProcessesSubject.next(currentProcesses.filter((p) => p.id !== removedProcess.id));
        }
      });
    });
  }
  loadActiveProcesses() {
    return __async(this, null, function* () {
      try {
        const processes = yield invoke("get_active_mpv_processes");
        this.activeProcessesSubject.next(processes);
      } catch (error) {
        console.error("Failed to load active MPV processes:", error);
      }
    });
  }
  playStream(processId) {
    return __async(this, null, function* () {
      yield invoke("mpv_play", { processId });
    });
  }
  pauseStream(processId) {
    return __async(this, null, function* () {
      yield invoke("mpv_pause", { processId });
    });
  }
  closeStream(processId) {
    return __async(this, null, function* () {
      yield invoke("close_mpv_process", { processId });
    });
  }
  static {
    this.\u0275fac = function MpvPlayerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MpvPlayerService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MpvPlayerService, factory: _MpvPlayerService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MpvPlayerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/shared/components/mpv-player-bar/mpv-player-bar.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MpvPlayerBarComponent_Conditional_0_For_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "img", 8);
    \u0275\u0275listener("error", function MpvPlayerBarComponent_Conditional_0_For_4_Conditional_5_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n          ");
  }
  if (rf & 2) {
    const process_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", process_r3.thumbnail, \u0275\u0275sanitizeUrl)("alt", process_r3.title);
  }
}
function MpvPlayerBarComponent_Conditional_0_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275text(2, "\n              ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "live_tv");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n          ");
  }
}
function MpvPlayerBarComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275text(4, "\n          ");
    \u0275\u0275conditionalCreate(5, MpvPlayerBarComponent_Conditional_0_For_4_Conditional_5_Template, 3, 2)(6, MpvPlayerBarComponent_Conditional_0_For_4_Conditional_6_Template, 7, 0);
    \u0275\u0275elementStart(7, "div", 3);
    \u0275\u0275text(8, "\n            ");
    \u0275\u0275elementStart(9, "span", 4);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n            ");
    \u0275\u0275elementStart(12, "span", 5);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n        ");
    \u0275\u0275elementStart(17, "div", 6);
    \u0275\u0275text(18, "\n          ");
    \u0275\u0275text(19, "\n        ");
    \u0275\u0275elementStart(20, "button", 7);
    \u0275\u0275listener("click", function MpvPlayerBarComponent_Conditional_0_For_4_Template_button_click_20_listener() {
      const process_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closeStream(process_r3.id));
    });
    \u0275\u0275text(21, "\n          ");
    \u0275\u0275elementStart(22, "mat-icon");
    \u0275\u0275text(23, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "\n  ");
  }
  if (rf & 2) {
    const process_r3 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(process_r3.thumbnail ? 5 : 6);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(process_r3.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(process_r3.url);
  }
}
function MpvPlayerBarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n  ");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275text(2, "\n    ");
    \u0275\u0275repeaterCreate(3, MpvPlayerBarComponent_Conditional_0_For_4_Template, 28, 3, null, null, _forTrack0);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n");
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 0, ctx_r3.activeProcesses$));
  }
}
var MpvPlayerBarComponent = class _MpvPlayerBarComponent {
  constructor(mpvPlayerService) {
    this.mpvPlayerService = mpvPlayerService;
    this.activeProcesses$ = this.mpvPlayerService.activeProcesses$;
  }
  closeStream(processId) {
    return __async(this, null, function* () {
      yield this.mpvPlayerService.closeStream(processId);
    });
  }
  static {
    this.\u0275fac = function MpvPlayerBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MpvPlayerBarComponent)(\u0275\u0275directiveInject(MpvPlayerService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MpvPlayerBarComponent, selectors: [["app-mpv-player-bar"]], decls: 2, vars: 3, consts: [[1, "mpv-player-bar"], [1, "player-item"], [1, "player-media"], [1, "media-info"], [1, "media-title"], [1, "media-url"], [1, "player-controls"], ["mat-icon-button", "", "title", "Close", 3, "click"], [1, "media-thumbnail", 3, "error", "src", "alt"], [1, "media-thumbnail-placeholder"]], template: function MpvPlayerBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MpvPlayerBarComponent_Conditional_0_Template, 7, 2);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional(((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.activeProcesses$)) == null ? null : tmp_0_0.length) ? 0 : -1);
      }
    }, dependencies: [CommonModule, MatIconModule, MatIcon, MatButtonModule, MatIconButton, AsyncPipe], styles: ["\n\n.mpv-player-bar[_ngcontent-%COMP%] {\n  background: #282828;\n  color: white;\n  padding: 16px;\n  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n}\n.player-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.player-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  height: 56px;\n}\n.player-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.player-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.player-url[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #a0a0a0;\n  margin-top: 4px;\n}\n.player-media[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n}\n.media-thumbnail[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  object-fit: cover;\n  border-radius: 4px;\n}\n.media-thumbnail-placeholder[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background: #404040;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.media-thumbnail-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #b3b3b3;\n}\n.media-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.media-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.media-url[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #b3b3b3;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.player-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.player-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.player-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #1db954;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MpvPlayerBarComponent, [{
    type: Component,
    args: [{ imports: [CommonModule, MatIconModule, MatButtonModule], selector: "app-mpv-player-bar", template: `@if ((activeProcesses$ | async)?.length) {
  <div class="mpv-player-bar">
    @for (process of activeProcesses$ | async; track process.id) {
      <div class="player-item">
        <div class="player-media">
          @if (process.thumbnail) {
            <img
              [src]="process.thumbnail"
              [alt]="process.title"
              class="media-thumbnail"
                        (error)="
                            $event.target.src =
                                './assets/images/default-poster.png'
                        "
              />
          } @else {
            <div class="media-thumbnail-placeholder">
              <mat-icon>live_tv</mat-icon>
            </div>
          }
          <div class="media-info">
            <span class="media-title">{{ process.title }}</span>
            <span class="media-url">{{ process.url }}</span>
          </div>
        </div>
        <div class="player-controls">
          <!-- <button
          mat-icon-button
          (click)="pauseStream(process.id)"
          title="Pause"
          >
          <mat-icon>pause</mat-icon>
        </button>
        <button
          mat-icon-button
          (click)="playStream(process.id)"
          title="Play"
          >
          <mat-icon>play_arrow</mat-icon>
        </button> -->
        <button
          mat-icon-button
          (click)="closeStream(process.id)"
          title="Close"
          >
          <mat-icon>close</mat-icon>
        </button>
      </div>
    </div>
  }
</div>
}
`, styles: ["/* src/app/shared/components/mpv-player-bar/mpv-player-bar.component.scss */\n.mpv-player-bar {\n  background: #282828;\n  color: white;\n  padding: 16px;\n  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n}\n.player-items {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.player-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  height: 56px;\n}\n.player-info {\n  display: flex;\n  flex-direction: column;\n}\n.player-title {\n  font-size: 14px;\n  font-weight: 500;\n}\n.player-url {\n  font-size: 12px;\n  color: #a0a0a0;\n  margin-top: 4px;\n}\n.player-media {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n}\n.media-thumbnail {\n  width: 56px;\n  height: 56px;\n  object-fit: cover;\n  border-radius: 4px;\n}\n.media-thumbnail-placeholder {\n  width: 56px;\n  height: 56px;\n  background: #404040;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.media-thumbnail-placeholder mat-icon {\n  font-size: 24px;\n  color: #b3b3b3;\n}\n.media-info {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.media-title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.media-url {\n  font-size: 12px;\n  color: #b3b3b3;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.player-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.player-controls button {\n  color: #fff;\n}\n.player-controls button:hover {\n  color: #1db954;\n}\n"] }]
  }], () => [{ type: MpvPlayerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MpvPlayerBarComponent, { className: "MpvPlayerBarComponent", filePath: "src/app/shared/components/mpv-player-bar/mpv-player-bar.component.ts", lineNumber: 17 });
})();

// src/app/xtream-tauri/category-view/category-view.component.ts
function CategoryViewComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "mat-list-item", 0);
    \u0275\u0275listener("click", function CategoryViewComponent_Conditional_0_For_4_Template_mat_list_item_click_1_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.categoryClicked.emit(item_r2));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n        ");
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r2.isSelected(item_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", item_r2.category_name || item_r2.name || "No category name", "\n            ");
  }
}
function CategoryViewComponent_Conditional_0_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "app-playlist-error-view", 1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 4, "PORTALS.EMPTY_LIST_VIEW.TITLE"))("description", \u0275\u0275pipeBind1(3, 6, "PORTALS.EMPTY_LIST_VIEW.NO_SEARCH_RESULTS"))("showActionButtons", false)("viewType", "NO_SEARCH_RESULTS");
  }
}
function CategoryViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "mat-nav-list");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275repeaterCreate(3, CategoryViewComponent_Conditional_0_For_4_Template, 4, 3, null, null, \u0275\u0275repeaterTrackByIndex, false, CategoryViewComponent_Conditional_0_ForEmpty_5_Template, 5, 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.items());
  }
}
function CategoryViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275element(1, "app-playlist-error-view", 1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4, "\n");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 4, "PORTALS.ERROR_VIEW.EMPTY_CATEGORY.TITLE"))("description", \u0275\u0275pipeBind1(3, 6, "PORTALS.ERROR_VIEW.EMPTY_CATEGORY.DESCRIPTION"))("showActionButtons", false)("viewType", "EMPTY_CATEGORY");
  }
}
var CategoryViewComponent = class _CategoryViewComponent {
  constructor() {
    this.items = input([], ...ngDevMode ? [{ debugName: "items" }] : []);
    this.selectedCategoryId = input(...ngDevMode ? [void 0, { debugName: "selectedCategoryId" }] : []);
    this.categoryClicked = output();
  }
  isSelected(item) {
    const selectedCategory = this.selectedCategoryId();
    const itemId = item.category_id ?? item.id;
    return selectedCategory !== null && String(selectedCategory) === String(itemId);
  }
  static {
    this.\u0275fac = function CategoryViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoryViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryViewComponent, selectors: [["app-category-view"]], inputs: { items: [1, "items"], selectedCategoryId: [1, "selectedCategoryId"] }, outputs: { categoryClicked: "categoryClicked" }, decls: 2, vars: 1, consts: [[1, "category-item", 3, "click"], [3, "title", "description", "showActionButtons", "viewType"]], template: function CategoryViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CategoryViewComponent_Conditional_0_Template, 7, 1)(1, CategoryViewComponent_Conditional_1_Template, 5, 8);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional(((tmp_0_0 = ctx.items()) == null ? null : tmp_0_0.length) > 0 ? 0 : 1);
      }
    }, dependencies: [MatListModule, MatNavList, MatListItem, PlaylistErrorViewComponent, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n  padding: 0 10px;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n}\n.category-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: auto;\n  transition: all 0.2s ease;\n}\n.category-item.selected[_ngcontent-%COMP%] {\n  background-color: rgba(63, 81, 181, 0.1);\n  border-left: 4px solid #3f51b5;\n  margin-left: 4px;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  overflow-wrap: break-word;\n  padding: 12px;\n}\n@media (max-width: 800px) {\n  .category-item[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 4px;\n  }\n}"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryViewComponent, [{
    type: Component,
    args: [{ selector: "app-category-view", imports: [MatListModule, PlaylistErrorViewComponent, TranslatePipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (items()?.length > 0) {
    <mat-nav-list>
        @for (item of items(); track $index) {
            <mat-list-item
                class="category-item"
                [class.selected]="isSelected(item)"
                (click)="categoryClicked.emit(item)"
            >
                {{
                    item.category_name || $any(item).name || 'No category name'
                }}
            </mat-list-item>
        } @empty {
            <app-playlist-error-view
                [title]="'PORTALS.EMPTY_LIST_VIEW.TITLE' | translate"
                [description]="
                    'PORTALS.EMPTY_LIST_VIEW.NO_SEARCH_RESULTS' | translate
                "
                [showActionButtons]="false"
                [viewType]="'NO_SEARCH_RESULTS'"
            />
        }
    </mat-nav-list>
} @else {
    <app-playlist-error-view
        [title]="'PORTALS.ERROR_VIEW.EMPTY_CATEGORY.TITLE' | translate"
        [description]="
            'PORTALS.ERROR_VIEW.EMPTY_CATEGORY.DESCRIPTION' | translate
        "
        [showActionButtons]="false"
        [viewType]="'EMPTY_CATEGORY'"
    />
}
`, styles: ["/* src/app/xtream-tauri/category-view/category-view.component.scss */\n:host {\n  height: 100%;\n  overflow-y: auto;\n  padding: 0 10px;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n}\n.category-item {\n  cursor: pointer;\n  width: auto;\n  transition: all 0.2s ease;\n}\n.category-item.selected {\n  background-color: rgba(63, 81, 181, 0.1);\n  border-left: 4px solid #3f51b5;\n  margin-left: 4px;\n}\nmat-card-content {\n  overflow-wrap: break-word;\n  padding: 12px;\n}\n@media (max-width: 800px) {\n  .category-item {\n    width: 100%;\n    margin: 4px;\n  }\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryViewComponent, { className: "CategoryViewComponent", filePath: "src/app/xtream-tauri/category-view/category-view.component.ts", lineNumber: 19 });
})();

export {
  MpvPlayerBarComponent,
  CategoryViewComponent
};
