import {
  StalkerStore
} from "./sidimad-stalker-store.js";
import {
  PlaylistsService
} from "./sidimad-database.js";
import {
  MatDivider
} from "./sidimad-divider.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule,
  TranslateModule,
  TranslatePipe
} from "./sidimad-browser.js";
import {
  AsyncPipe,
  BehaviorSubject,
  Component,
  __spreadProps,
  __spreadValues,
  inject,
  input,
  map,
  output,
  setClassMetadata,
  switchMap,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./sidimad-app.js";

// src/app/stalker/favorites-button/favorites-button.component.ts
function FavoritesButtonComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "button", 0);
    \u0275\u0275listener("click", function FavoritesButtonComponent_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToFavorites());
    });
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "star_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n");
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(6, 1, "PORTALS.ADD_TO_FAVORITES"), "\n    ");
  }
}
function FavoritesButtonComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "button", 1);
    \u0275\u0275listener("click", function FavoritesButtonComponent_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeFromFavorites());
    });
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n");
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(6, 1, "PORTALS.REMOVE_FROM_FAVORITES"), "\n    ");
  }
}
var FavoritesButtonComponent = class _FavoritesButtonComponent {
  constructor() {
    this.playlistService = inject(PlaylistsService);
    this.itemId = input.required(...ngDevMode ? [{ debugName: "itemId" }] : []);
    this.addToFavoritesClicked = output();
    this.removeFromFavoritesClicked = output();
    this.favoritesChanged$ = new BehaviorSubject(void 0);
    this.isFavorite$ = this.favoritesChanged$.pipe(switchMap(() => this.playlistService.getPortalFavorites()), map((favorites) => favorites.some((i) => i.movie_id === this.itemId() || i.id === this.itemId())));
  }
  removeFromFavorites() {
    this.removeFromFavoritesClicked.emit();
    setTimeout(() => {
      this.favoritesChanged$.next();
    }, 100);
  }
  addToFavorites() {
    this.addToFavoritesClicked.emit();
    setTimeout(() => {
      this.favoritesChanged$.next();
    }, 100);
  }
  static {
    this.\u0275fac = function FavoritesButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FavoritesButtonComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FavoritesButtonComponent, selectors: [["app-favorites-button"]], inputs: { itemId: [1, "itemId"] }, outputs: { addToFavoritesClicked: "addToFavoritesClicked", removeFromFavoritesClicked: "removeFromFavoritesClicked" }, decls: 5, vars: 3, consts: [["mat-flat-button", "", "color", "accent", 3, "click"], ["mat-stroked-button", "", "color", "accent", 3, "click"]], template: function FavoritesButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275text(2, "\n");
        \u0275\u0275conditionalCreate(3, FavoritesButtonComponent_Conditional_3_Template, 8, 3)(4, FavoritesButtonComponent_Conditional_4_Template, 8, 3);
      }
      if (rf & 2) {
        const isFavorite_r4 = \u0275\u0275pipeBind1(1, 1, ctx.isFavorite$);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(isFavorite_r4 === false ? 3 : 4);
      }
    }, dependencies: [MatButtonModule, MatButton, MatIconModule, MatIcon, TranslateModule, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FavoritesButtonComponent, [{
    type: Component,
    args: [{ selector: "app-favorites-button", imports: [AsyncPipe, MatButtonModule, MatIconModule, TranslateModule], template: `@let isFavorite = isFavorite$ | async;
@if (isFavorite === false) {
    <button mat-flat-button color="accent" (click)="addToFavorites()">
        <mat-icon>star_outline</mat-icon>
        {{ 'PORTALS.ADD_TO_FAVORITES' | translate }}
    </button>
} @else {
    <button mat-stroked-button color="accent" (click)="removeFromFavorites()">
        <mat-icon>star</mat-icon>
        {{ 'PORTALS.REMOVE_FROM_FAVORITES' | translate }}
    </button>
}
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FavoritesButtonComponent, { className: "FavoritesButtonComponent", filePath: "src/app/stalker/favorites-button/favorites-button.component.ts", lineNumber: 14 });
})();

// src/app/stalker/stalker-series-view/stalker-series-view.component.ts
function StalkerSeriesViewComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "img", 7);
    \u0275\u0275listener("error", function StalkerSeriesViewComponent_Conditional_3_Conditional_3_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n            ");
  }
  if (rf & 2) {
    const serial_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", serial_r3.info.movie_image, \u0275\u0275sanitizeUrl);
  }
}
function StalkerSeriesViewComponent_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275text(2, "\n            ");
  }
}
function StalkerSeriesViewComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275conditionalCreate(3, StalkerSeriesViewComponent_Conditional_3_Conditional_3_Template, 3, 1)(4, StalkerSeriesViewComponent_Conditional_3_Conditional_4_Template, 3, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n\n        ");
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275text(7, "\n            ");
    \u0275\u0275elementStart(8, "h2");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n            ");
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n            ");
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15, "\n                ");
    \u0275\u0275elementStart(16, "div", 4);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n            ");
    \u0275\u0275elementStart(21, "div");
    \u0275\u0275text(22, "\n                ");
    \u0275\u0275elementStart(23, "div", 4);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "\n            ");
    \u0275\u0275elementStart(28, "div");
    \u0275\u0275text(29, "\n                ");
    \u0275\u0275elementStart(30, "div", 4);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, "\n            ");
    \u0275\u0275elementStart(35, "div");
    \u0275\u0275text(36, "\n                ");
    \u0275\u0275elementStart(37, "div", 4);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, "\n            ");
    \u0275\u0275elementStart(42, "div");
    \u0275\u0275text(43, "\n                ");
    \u0275\u0275elementStart(44, "div", 4);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, "\n            ");
    \u0275\u0275elementStart(49, "div");
    \u0275\u0275text(50, "\n                ");
    \u0275\u0275elementStart(51, "div", 4);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, "\n            ");
    \u0275\u0275elementStart(56, "div", 5);
    \u0275\u0275text(57, "\n                ");
    \u0275\u0275elementStart(58, "app-favorites-button", 6);
    \u0275\u0275listener("addToFavoritesClicked", function StalkerSeriesViewComponent_Conditional_3_Template_app_favorites_button_addToFavoritesClicked_58_listener() {
      const serial_r3 = \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addToFavorites(serial_r3));
    })("removeFromFavoritesClicked", function StalkerSeriesViewComponent_Conditional_3_Template_app_favorites_button_removeFromFavoritesClicked_58_listener() {
      const serial_r3 = \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeFromFavorites(serial_r3.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, "\n    ");
  }
  if (rf & 2) {
    const serial_r3 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(serial_r3.info.movie_image ? 3 : 4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(serial_r3.info.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                ", serial_r3.info.description, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(18, 16, "XTREAM.DIRECTOR"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r3.info.director, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(25, 18, "XTREAM.ACTORS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r3.info.actors, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(32, 20, "XTREAM.YEAR"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r3.info.releasedate, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(39, 22, "XTREAM.GENRE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r3.info.genre, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(46, 24, "XTREAM.IMDB_RATING"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r3.info.rating_imdb, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(53, 26, "XTREAM.KINOPOISK_RATING"), ":\n                ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r3.info.rating_kinopoisk, "\n            ");
    \u0275\u0275advance(4);
    \u0275\u0275property("itemId", serial_r3.id);
  }
}
function StalkerSeriesViewComponent_For_8_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 10);
    \u0275\u0275listener("click", function StalkerSeriesViewComponent_For_8_For_9_Template_button_click_1_listener() {
      const episode_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const item_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.playEpisodeClicked(episode_r6, item_r7.cmd));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n            ");
  }
  if (rf & 2) {
    const episode_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\n                    ", \u0275\u0275pipeBind1(3, 2, "XTREAM.EPISODE"), " ", episode_r6, "\n                ");
  }
}
function StalkerSeriesViewComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275element(1, "mat-divider");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275text(7, "\n            ");
    \u0275\u0275repeaterCreate(8, StalkerSeriesViewComponent_For_8_For_9_Template, 5, 4, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n    ");
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r7.name);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(item_r7.series);
  }
}
var StalkerSeriesViewComponent = class _StalkerSeriesViewComponent {
  constructor() {
    this.stalkerStore = inject(StalkerStore);
    this.selectedItem = this.stalkerStore.selectedItem;
    this.seasonsData = this.stalkerStore.getSerialSeasonsResource;
  }
  playEpisodeClicked(episode, cmd) {
    const item = this.selectedItem();
    this.stalkerStore.createLinkToPlayVod(cmd, item.info.name, item.info.movie_image, episode);
  }
  addToFavorites(item) {
    this.stalkerStore.addToFavorites(__spreadProps(__spreadValues({}, item), {
      title: item.info.name,
      cover: item.info.movie_image,
      series_id: item.id,
      added_at: (/* @__PURE__ */ new Date()).toISOString(),
      category_id: "series"
    }));
  }
  removeFromFavorites(serialId) {
    this.stalkerStore.removeFromFavorites(serialId);
  }
  static {
    this.\u0275fac = function StalkerSeriesViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StalkerSeriesViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StalkerSeriesViewComponent, selectors: [["app-stalker-series-view"]], decls: 10, vars: 1, consts: [[1, "container"], [1, "seasons"], [1, "image"], [1, "details"], [1, "label"], [1, "action-buttons"], [3, "addToFavoritesClicked", "removeFromFavoritesClicked", "itemId"], [2, "position", "relative", 3, "error", "src"], [1, "placeholder-cover"], [1, "episodes"], ["mat-stroked-button", "", 3, "click"]], template: function StalkerSeriesViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0, "\n");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275text(2, "\n    ");
        \u0275\u0275conditionalCreate(3, StalkerSeriesViewComponent_Conditional_3_Template, 62, 28);
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, "\n");
        \u0275\u0275elementStart(5, "div", 1);
        \u0275\u0275text(6, "\n    ");
        \u0275\u0275repeaterCreate(7, StalkerSeriesViewComponent_For_8_Template, 11, 1, null, null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, "\n");
      }
      if (rf & 2) {
        let tmp_1_0;
        const seasons_r8 = ctx.seasonsData;
        \u0275\u0275advance(3);
        \u0275\u0275conditional((tmp_1_0 = ctx.selectedItem()) ? 3 : -1, tmp_1_0);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(seasons_r8());
      }
    }, dependencies: [FavoritesButtonComponent, MatButton, MatDivider, TranslatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 320px 1fr;\n  padding: 0 10px;\n}\n.container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  z-index: -1;\n  background-repeat: no-repeat;\n}\n.seasons[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.image[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 20px 10px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 500px;\n  background-color: #999;\n  border-radius: 5px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%]::after {\n  content: "No cover";\n  position: relative;\n  top: 230px;\n  left: 115px;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 5px;\n  width: 300px;\n}\n@media (max-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    max-width: 1200px;\n  }\n  .image[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n  }\n  .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .details[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n  .youtube-trailer[_ngcontent-%COMP%] {\n    width: 95% !important;\n  }\n}\n.label[_ngcontent-%COMP%] {\n  font-weight: 100;\n  font-size: 0.9em;\n  padding: 5px 0;\n  text-decoration: underline;\n  opacity: 0.6;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.youtube-trailer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-self: center;\n  width: 650px;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StalkerSeriesViewComponent, [{
    type: Component,
    args: [{ selector: "app-stalker-series-view", imports: [FavoritesButtonComponent, MatButton, MatDivider, TranslatePipe], template: `@let seasons = seasonsData;
<div class="container">
    @if (selectedItem(); as serial) {
        <div class="image">
            @if (serial.info.movie_image) {
                <img
                    [src]="serial.info.movie_image"
                    style="position: relative"
                    (error)="
                        $event.target.src = './assets/images/default-poster.png'
                    "
                />
            } @else {
                <div class="placeholder-cover"></div>
            }
        </div>

        <div class="details">
            <h2>{{ serial.info.name }}</h2>
            <div>
                {{ serial.info.description }}
            </div>
            <div>
                <div class="label">{{ 'XTREAM.DIRECTOR' | translate }}:</div>
                {{ serial.info.director }}
            </div>
            <div>
                <div class="label">{{ 'XTREAM.ACTORS' | translate }}:</div>
                {{ serial.info.actors }}
            </div>
            <div>
                <div class="label">{{ 'XTREAM.YEAR' | translate }}:</div>
                {{ serial.info.releasedate }}
            </div>
            <div>
                <div class="label">{{ 'XTREAM.GENRE' | translate }}:</div>
                {{ serial.info.genre }}
            </div>
            <div>
                <div class="label">{{ 'XTREAM.IMDB_RATING' | translate }}:</div>
                {{ serial.info.rating_imdb }}
            </div>
            <div>
                <div class="label">
                    {{ 'XTREAM.KINOPOISK_RATING' | translate }}:
                </div>
                {{ serial.info.rating_kinopoisk }}
            </div>
            <div class="action-buttons">
                <app-favorites-button
                    [itemId]="serial.id"
                    (addToFavoritesClicked)="addToFavorites(serial)"
                    (removeFromFavoritesClicked)="
                        removeFromFavorites(serial.id)
                    "
                />
            </div>
        </div>
    }
</div>
<div class="seasons">
    @for (item of seasons(); track $index) {
        <mat-divider />
        <h4>{{ item.name }}</h4>
        <div class="episodes">
            @for (episode of item.series; track $index) {
                <button
                    mat-stroked-button
                    (click)="playEpisodeClicked(episode, item.cmd)"
                >
                    {{ 'XTREAM.EPISODE' | translate }} {{ episode }}
                </button>
            }
        </div>
    }
</div>
`, styles: ['/* src/app/xtream/detail-view.scss */\n:host {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.details h2 {\n  word-wrap: break-word;\n}\n.container {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 320px 1fr;\n  padding: 0 10px;\n}\n.container::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  z-index: -1;\n  background-repeat: no-repeat;\n}\n.seasons {\n  padding: 20px;\n}\n.seasons .episodes {\n  margin-bottom: 10px;\n}\n.seasons .episodes button {\n  margin-top: 5px;\n}\n.image {\n  width: 300px;\n  padding: 20px 10px;\n}\n.image .placeholder-cover {\n  width: 300px;\n  height: 500px;\n  background-color: #999;\n  border-radius: 5px;\n}\n.image .placeholder-cover::after {\n  content: "No cover";\n  position: relative;\n  top: 230px;\n  left: 115px;\n}\n.image img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 5px;\n  width: 300px;\n}\n@media (max-width: 800px) {\n  .container {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    max-width: 1200px;\n  }\n  .image,\n  .details {\n    flex: 1 1 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n  }\n  .image img,\n  .details img {\n    border-radius: 0;\n  }\n  .details {\n    padding: 0 10px;\n  }\n  .youtube-trailer {\n    width: 95% !important;\n  }\n}\n.label {\n  font-weight: 100;\n  font-size: 0.9em;\n  padding: 5px 0;\n  text-decoration: underline;\n  opacity: 0.6;\n}\n.action-buttons {\n  margin-top: 10px;\n}\n.youtube-trailer {\n  display: flex;\n  flex-wrap: wrap;\n  align-self: center;\n  width: 650px;\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StalkerSeriesViewComponent, { className: "StalkerSeriesViewComponent", filePath: "src/app/stalker/stalker-series-view/stalker-series-view.component.ts", lineNumber: 14 });
})();

export {
  StalkerSeriesViewComponent
};
