import {
  DialogService,
  PlaylistInfoComponent
} from "./chunk-BSW44WEY.js";
import {
  MatDialog,
  Router,
  RouterLink,
  Store,
  removePlaylist,
  selectCurrentPlaylist
} from "./chunk-QHT262RL.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule,
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-W4GTA6ZI.js";
import {
  Component,
  Input,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7EPDPDBX.js";

// src/app/xtream/playlist-error-view/playlist-error-view.component.ts
function PlaylistErrorViewComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "img", 2);
    \u0275\u0275text(2, "\n        ");
  }
}
function PlaylistErrorViewComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "img", 3);
    \u0275\u0275text(2, "\n        ");
  }
}
function PlaylistErrorViewComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "mat-icon", 4);
    \u0275\u0275text(2, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n        ");
  }
}
function PlaylistErrorViewComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "button", 6);
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n            ");
    \u0275\u0275elementStart(10, "button", 7);
    \u0275\u0275listener("click", function PlaylistErrorViewComponent_Conditional_14_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPlaylistDetails());
    });
    \u0275\u0275text(11, "\n                ");
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n            ");
    \u0275\u0275elementStart(17, "button", 8);
    \u0275\u0275listener("click", function PlaylistErrorViewComponent_Conditional_14_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeClicked());
    });
    \u0275\u0275text(18, "\n                ");
    \u0275\u0275elementStart(19, "mat-icon");
    \u0275\u0275text(20, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n    ");
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(8, 3, "PORTALS.ERROR_VIEW.HOME"), "\n            ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(15, 5, "PORTALS.ERROR_VIEW.PLAYLIST_SETTINGS"), "\n            ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(22, 7, "PORTALS.ERROR_VIEW.DELETE"), "\n            ");
  }
}
var PlaylistErrorViewComponent = class _PlaylistErrorViewComponent {
  constructor() {
    this.dialog = inject(MatDialog);
    this.dialogService = inject(DialogService);
    this.router = inject(Router);
    this.store = inject(Store);
    this.translate = inject(TranslateService);
    this.currentPlaylist = this.store.selectSignal(selectCurrentPlaylist);
    this.showActionButtons = true;
    this.viewType = "ERROR";
  }
  openPlaylistDetails() {
    this.dialog.open(PlaylistInfoComponent, {
      data: this.currentPlaylist()
    });
  }
  removeClicked() {
    this.dialogService.openConfirmDialog({
      title: this.translate.instant("HOME.PLAYLISTS.REMOVE_DIALOG.TITLE"),
      message: this.translate.instant("HOME.PLAYLISTS.REMOVE_DIALOG.MESSAGE"),
      onConfirm: () => this.removePlaylist(this.currentPlaylist()._id)
    });
  }
  removePlaylist(playlistId) {
    this.store.dispatch(removePlaylist({ playlistId }));
    this.router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function PlaylistErrorViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistErrorViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistErrorViewComponent, selectors: [["app-playlist-error-view"]], inputs: { description: "description", showActionButtons: "showActionButtons", title: "title", viewType: "viewType" }, decls: 16, vars: 4, consts: [[1, "expired-account"], [1, "image-container"], ["src", "./assets/images/broken-tv.svg"], ["src", "./assets/images/empty-category.svg", 2, "max-width", "350px"], [1, "icon"], [1, "actions"], ["mat-stroked-button", "", "routerLink", "/"], ["mat-stroked-button", "", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"]], template: function PlaylistErrorViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275conditionalCreate(4, PlaylistErrorViewComponent_Conditional_4_Template, 3, 0)(5, PlaylistErrorViewComponent_Conditional_5_Template, 3, 0)(6, PlaylistErrorViewComponent_Conditional_6_Template, 4, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n    ");
        \u0275\u0275elementStart(8, "div");
        \u0275\u0275text(9, "\n        ");
        \u0275\u0275elementStart(10, "h3");
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, "\n\n    ");
        \u0275\u0275conditionalCreate(14, PlaylistErrorViewComponent_Conditional_14_Template, 25, 9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.viewType === "ERROR" ? 4 : ctx.viewType === "EMPTY_CATEGORY" ? 5 : ctx.viewType === "NO_SEARCH_RESULTS" ? 6 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n        ", ctx.description, "\n    ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showActionButtons ? 14 : -1);
      }
    }, dependencies: [MatButtonModule, MatButton, MatIconModule, MatIcon, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n.expired-account[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  align-items: center;\n  gap: 10px;\n  text-align: center;\n}\n.expired-account[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: invert(80%);\n}\n.image-container[_ngcontent-%COMP%] {\n  max-width: 400px;\n  height: auto;\n}\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  height: 64px;\n  width: 64px;\n}\n  .dark-theme .expired-account img {\n  filter: invert(10%) !important;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistErrorViewComponent, [{
    type: Component,
    args: [{ selector: "app-playlist-error-view", imports: [MatButtonModule, MatIconModule, RouterLink, TranslateModule], template: `<div class="expired-account">
    <div class="image-container">
        @if (viewType === 'ERROR') {
            <img src="./assets/images/broken-tv.svg" />
        } @else if (viewType === 'EMPTY_CATEGORY') {
            <img
                style="max-width: 350px"
                src="./assets/images/empty-category.svg"
            />
        } @else if (viewType === 'NO_SEARCH_RESULTS') {
            <mat-icon class="icon">search</mat-icon>
        }
    </div>
    <div>
        <h3>{{ title }}</h3>
        {{ description }}
    </div>

    @if (showActionButtons) {
        <div class="actions">
            <button mat-stroked-button routerLink="/">
                <mat-icon>home</mat-icon>
                {{ 'PORTALS.ERROR_VIEW.HOME' | translate }}
            </button>
            <button mat-stroked-button (click)="openPlaylistDetails()">
                <mat-icon>settings</mat-icon>
                {{ 'PORTALS.ERROR_VIEW.PLAYLIST_SETTINGS' | translate }}
            </button>
            <button mat-stroked-button color="warn" (click)="removeClicked()">
                <mat-icon>delete</mat-icon>
                {{ 'PORTALS.ERROR_VIEW.DELETE' | translate }}
            </button>
        </div>
    }
</div>
`, styles: ["/* src/app/xtream/playlist-error-view/playlist-error-view.component.scss */\n.expired-account {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  align-items: center;\n  gap: 10px;\n  text-align: center;\n}\n.expired-account img {\n  filter: invert(80%);\n}\n.image-container {\n  max-width: 400px;\n  height: auto;\n}\n.image-container img {\n  width: 100%;\n}\n.actions button {\n  margin: 5px 0;\n}\n.icon {\n  font-size: 64px;\n  height: 64px;\n  width: 64px;\n}\n::ng-deep .dark-theme .expired-account img {\n  filter: invert(10%) !important;\n}\n"] }]
  }], null, { description: [{
    type: Input
  }], showActionButtons: [{
    type: Input
  }], title: [{
    type: Input
  }], viewType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistErrorViewComponent, { className: "PlaylistErrorViewComponent", filePath: "src/app/xtream/playlist-error-view/playlist-error-view.component.ts", lineNumber: 19 });
})();

export {
  PlaylistErrorViewComponent
};
