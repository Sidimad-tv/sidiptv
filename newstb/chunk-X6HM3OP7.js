import {
  MatProgressSpinnerModule
} from "./chunk-4AWO2KFL.js";
import {
  ActivatedRoute,
  SettingsStore,
  XtreamStore
} from "./chunk-QHT262RL.js";
import {
  DomSanitizer,
  MatButton,
  MatIcon,
  TranslateModule,
  TranslatePipe
} from "./chunk-W4GTA6ZI.js";
import {
  Component,
  Pipe,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
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
  ɵɵreadContextLet,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7EPDPDBX.js";

// src/app/xtream-tauri/vod-details/safe.pipe.ts
var SafePipe = class _SafePipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  static {
    this.\u0275fac = function SafePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SafePipe)(\u0275\u0275directiveInject(DomSanitizer, 16));
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "safe", type: _SafePipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafePipe, [{
    type: Pipe,
    args: [{ name: "safe", standalone: true }]
  }], () => [{ type: DomSanitizer }], null);
})();

// src/app/xtream-tauri/vod-details/vod-details.component.ts
function VodDetailsComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "img", 5);
    \u0275\u0275listener("error", function VodDetailsComponent_Conditional_2_Conditional_5_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n            ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const item_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r3.info == null ? null : item_r3.info.movie_image, \u0275\u0275sanitizeUrl);
  }
}
function VodDetailsComponent_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275text(2, "\n            ");
  }
}
function VodDetailsComponent_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const item_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                    ", (item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.description) || (item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.plot), "\n                ");
  }
}
function VodDetailsComponent_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n            ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const item_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(5, 2, "XTREAM.RELEASE_DATE"), ":\n                    ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                    ", item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.releasedate, "\n                ");
  }
}
function VodDetailsComponent_Conditional_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n            ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const item_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "XTREAM.GENRE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                    ", item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.genre, "\n                ");
  }
}
function VodDetailsComponent_Conditional_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n            ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const item_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "XTREAM.COUNTRY"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                    ", item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.country, "\n                ");
  }
}
function VodDetailsComponent_Conditional_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n            ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const item_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "XTREAM.ACTORS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                    ", (item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.actors) || (item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.cast), "\n                ");
  }
}
function VodDetailsComponent_Conditional_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n            ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const item_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(5, 2, "XTREAM.DIRECTOR"), ":\n                    ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                    ", item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.director, "\n                ");
  }
}
function VodDetailsComponent_Conditional_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n            ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const item_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(5, 2, "XTREAM.DURATION"), ":\n                    ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                    ", item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.duration, "\n                ");
  }
}
function VodDetailsComponent_Conditional_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n            ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const item_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(5, 2, "XTREAM.IMDB_RATING"), ":\n                    ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                    ", item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.rating_imdb, "\n                ");
  }
}
function VodDetailsComponent_Conditional_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n            ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const item_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(5, 2, "XTREAM.KINOPOISK_RATING"), ":\n                    ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                    ", item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.rating_kinopoisk, "\n                ");
  }
}
function VodDetailsComponent_Conditional_2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "button", 8);
    \u0275\u0275listener("click", function VodDetailsComponent_Conditional_2_Conditional_31_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleFavorite());
    });
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "star_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                ");
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(6, 1, "PORTALS.ADD_TO_FAVORITES"), "\n                    ");
  }
}
function VodDetailsComponent_Conditional_2_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "button", 8);
    \u0275\u0275listener("click", function VodDetailsComponent_Conditional_2_Conditional_32_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleFavorite());
    });
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                ");
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(6, 1, "PORTALS.REMOVE_FROM_FAVORITES"), "\n                    ");
  }
}
function VodDetailsComponent_Conditional_2_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
    \u0275\u0275element(7, "iframe", 10);
    \u0275\u0275pipe(8, "safe");
    \u0275\u0275text(9, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n    ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const item_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "XTREAM.YOUTUBE_TRAILER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", \u0275\u0275pipeBind1(8, 4, "https://www.youtube.com/embed/" + (item_r3.info == null ? null : item_r3.info.youtube_trailer)), \u0275\u0275sanitizeResourceUrl);
  }
}
function VodDetailsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275conditionalCreate(5, VodDetailsComponent_Conditional_2_Conditional_5_Template, 3, 1)(6, VodDetailsComponent_Conditional_2_Conditional_6_Template, 3, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementStart(8, "div", 2);
    \u0275\u0275text(9, "\n            ");
    \u0275\u0275elementStart(10, "h2");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n            ");
    \u0275\u0275conditionalCreate(13, VodDetailsComponent_Conditional_2_Conditional_13_Template, 4, 1);
    \u0275\u0275conditionalCreate(14, VodDetailsComponent_Conditional_2_Conditional_14_Template, 8, 4);
    \u0275\u0275conditionalCreate(15, VodDetailsComponent_Conditional_2_Conditional_15_Template, 8, 4);
    \u0275\u0275conditionalCreate(16, VodDetailsComponent_Conditional_2_Conditional_16_Template, 8, 4);
    \u0275\u0275conditionalCreate(17, VodDetailsComponent_Conditional_2_Conditional_17_Template, 8, 4);
    \u0275\u0275conditionalCreate(18, VodDetailsComponent_Conditional_2_Conditional_18_Template, 8, 4);
    \u0275\u0275conditionalCreate(19, VodDetailsComponent_Conditional_2_Conditional_19_Template, 8, 4);
    \u0275\u0275conditionalCreate(20, VodDetailsComponent_Conditional_2_Conditional_20_Template, 8, 4);
    \u0275\u0275conditionalCreate(21, VodDetailsComponent_Conditional_2_Conditional_21_Template, 8, 4);
    \u0275\u0275elementStart(22, "div", 3);
    \u0275\u0275text(23, "\n                ");
    \u0275\u0275elementStart(24, "button", 4);
    \u0275\u0275listener("click", function VodDetailsComponent_Conditional_2_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      const item_r3 = \u0275\u0275readContextLet(0);
      return \u0275\u0275resetView(ctx_r3.playVod(item_r3));
    });
    \u0275\u0275text(25, "\n                    ");
    \u0275\u0275elementStart(26, "mat-icon");
    \u0275\u0275text(27, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, "\xA0\n                ");
    \u0275\u0275conditionalCreate(31, VodDetailsComponent_Conditional_2_Conditional_31_Template, 8, 3)(32, VodDetailsComponent_Conditional_2_Conditional_32_Template, 8, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, "\n    ");
    \u0275\u0275conditionalCreate(36, VodDetailsComponent_Conditional_2_Conditional_36_Template, 11, 6);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const item_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", (item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.backdrop_path) && (item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.backdrop_path.length) > 0 ? ctx_r3.theme() === "DARK_THEME" ? "linear-gradient(to top, rgba(29,29,29,1) 0%, rgba(0,0,0,0.5) 100%), url(" + (item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.backdrop_path[0]) + ") repeat-x" : "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 100%), url(" + (item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.backdrop_path[0]) + ") repeat-x" : "none");
    \u0275\u0275advance(4);
    \u0275\u0275conditional((item_r3.info == null ? null : item_r3.info.movie_image) ? 5 : 6);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.name) || (item_r3 == null ? null : item_r3.movie_data == null ? null : item_r3.movie_data.name));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.description) || (item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.plot) ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.releasedate) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.genre) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.country) ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.actors) || (item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.cast) ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.director) ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.duration) ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.rating_imdb) ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.rating_kinopoisk) ? 21 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(29, 16, "XTREAM.PLAY"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r3.isFavorite() ? 31 : 32);
    \u0275\u0275advance(5);
    \u0275\u0275conditional((item_r3 == null ? null : item_r3.info == null ? null : item_r3.info.youtube_trailer) ? 36 : -1);
  }
}
var VodDetailsComponent = class _VodDetailsComponent {
  constructor() {
    this.settingsStore = inject(SettingsStore);
    this.route = inject(ActivatedRoute);
    this.xtreamStore = inject(XtreamStore);
    this.theme = this.settingsStore.theme;
    this.isFavorite = this.xtreamStore.isFavorite;
    this.selectedItem = this.xtreamStore.selectedItem;
  }
  ngOnInit() {
    const { categoryId, vodId } = this.route.snapshot.params;
    this.xtreamStore.fetchVodDetailsWithMetadata({ vodId, categoryId });
    this.xtreamStore.checkFavoriteStatus(vodId, this.xtreamStore.currentPlaylist().id);
  }
  ngOnDestroy() {
    this.xtreamStore.setSelectedItem(null);
  }
  playVod(vodItem) {
    this.addToRecentlyViewed();
    const streamUrl = this.xtreamStore.constructVodStreamUrl(vodItem);
    this.xtreamStore.openPlayer(streamUrl, vodItem.info.name ?? vodItem?.movie_data?.name, vodItem.info.movie_image);
  }
  toggleFavorite() {
    this.xtreamStore.toggleFavorite(this.route.snapshot.params.vodId, this.xtreamStore.currentPlaylist().id);
  }
  addToRecentlyViewed() {
    this.xtreamStore.addRecentItem({
      contentId: this.route.snapshot.params.vodId,
      playlist: this.xtreamStore.currentPlaylist
    });
  }
  static {
    this.\u0275fac = function VodDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VodDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VodDetailsComponent, selectors: [["ng-component"]], decls: 3, vars: 2, consts: [[1, "container"], [1, "image"], [1, "details"], [1, "action-buttons"], ["mat-flat-button", "", "color", "accent", 3, "click"], [3, "error", "src"], ["src", "./assets/images/default-poster.png"], [1, "label"], ["mat-stroked-button", "", "color", "accent", 3, "click"], [1, "youtube-trailer"], ["width", "100%", "height", "450", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", "", 3, "src"]], template: function VodDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275text(1, "\n");
        \u0275\u0275conditionalCreate(2, VodDetailsComponent_Conditional_2_Template, 37, 18);
      }
      if (rf & 2) {
        const item_r7 = \u0275\u0275storeLet(ctx.selectedItem());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(item_r7 && item_r7.info ? 2 : -1);
      }
    }, dependencies: [
      MatButton,
      MatIcon,
      TranslateModule,
      MatProgressSpinnerModule,
      SafePipe,
      TranslatePipe
    ], styles: ['\n\n[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  margin-top: 0;\n}\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: minmax(250px, 30%) minmax(300px, 1fr);\n  grid-template-areas: "image details" "seasons seasons";\n  padding: 20px;\n  max-width: 100%;\n  box-sizing: border-box;\n  height: auto;\n  min-height: calc(100vh - 73px);\n}\n.container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  z-index: -1;\n  background-repeat: no-repeat;\n}\n.seasons[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.image[_ngcontent-%COMP%] {\n  grid-area: image;\n  margin: 0;\n  border-radius: 12px;\n  max-width: 100%;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 12px;\n  object-fit: cover;\n  max-width: 450px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 2/3;\n  background-color: #999;\n  border-radius: 12px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%]::after {\n  content: "No cover";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\napp-season-container[_ngcontent-%COMP%] {\n  grid-area: seasons;\n  width: 100%;\n}\n@media (max-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-areas: "image" "details" "seasons";\n    padding: 10px;\n  }\n  .image[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%] {\n    width: 100%;\n    flex: 1 1 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n  }\n  .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 500px;\n    object-fit: contain;\n    border-radius: 0;\n  }\n  .details[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n  .youtube-trailer[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n.label[_ngcontent-%COMP%] {\n  font-weight: 100;\n  font-size: 0.9em;\n  padding: 5px 0;\n  text-decoration: underline;\n  opacity: 0.6;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.youtube-trailer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-self: center;\n  width: 100%;\n  max-width: 650px;\n  margin: 0 auto;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VodDetailsComponent, [{
    type: Component,
    args: [{ imports: [
      MatButton,
      MatIcon,
      SafePipe,
      TranslateModule,
      MatProgressSpinnerModule
    ], template: `@let item = selectedItem();
@if (item && item.info) {
    <div
        class="container"
        [style.background]="
            item?.info?.backdrop_path && item?.info?.backdrop_path.length > 0
                ? theme() === 'DARK_THEME'
                    ? 'linear-gradient(to top, rgba(29,29,29,1) 0%, rgba(0,0,0,0.5) 100%), url(' +
                      item?.info?.backdrop_path[0] +
                      ') repeat-x'
                    : 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 100%), url(' +
                      item?.info?.backdrop_path[0] +
                      ') repeat-x'
                : 'none'
        "
    >
        <div class="image">
            @if (item.info?.movie_image) {
                <img
                    [src]="item.info?.movie_image"
                    (error)="
                        $event.target.src = './assets/images/default-poster.png'
                    "
                />
            } @else {
                <img src="./assets/images/default-poster.png" />
            }
        </div>
        <div class="details">
            <h2>{{ item?.info?.name || item?.movie_data?.name }}</h2>
            @if (item?.info?.description || item?.info?.plot) {
                <label>
                    {{ item?.info?.description || item?.info?.plot }}
                </label>
            }
            @if (item?.info?.releasedate) {
                <label>
                    <div class="label">
                        {{ 'XTREAM.RELEASE_DATE' | translate }}:
                    </div>
                    {{ item?.info?.releasedate }}
                </label>
            }
            @if (item?.info?.genre) {
                <label>
                    <div class="label">{{ 'XTREAM.GENRE' | translate }}:</div>
                    {{ item?.info?.genre }}
                </label>
            }
            @if (item?.info?.country) {
                <label>
                    <div class="label">{{ 'XTREAM.COUNTRY' | translate }}:</div>
                    {{ item?.info?.country }}
                </label>
            }
            @if (item?.info?.actors || item?.info?.cast) {
                <div>
                    <div class="label">{{ 'XTREAM.ACTORS' | translate }}:</div>
                    {{ item?.info?.actors || item?.info?.cast }}
                </div>
            }
            @if (item?.info?.director) {
                <label>
                    <div class="label">
                        {{ 'XTREAM.DIRECTOR' | translate }}:
                    </div>
                    {{ item?.info?.director }}
                </label>
            }
            @if (item?.info?.duration) {
                <label>
                    <div class="label">
                        {{ 'XTREAM.DURATION' | translate }}:
                    </div>
                    {{ item?.info?.duration }}
                </label>
            }
            @if (item?.info?.rating_imdb) {
                <label>
                    <div class="label">
                        {{ 'XTREAM.IMDB_RATING' | translate }}:
                    </div>
                    {{ item?.info?.rating_imdb }}
                </label>
            }
            @if (item?.info?.rating_kinopoisk) {
                <label>
                    <div class="label">
                        {{ 'XTREAM.KINOPOISK_RATING' | translate }}:
                    </div>
                    {{ item?.info?.rating_kinopoisk }}
                </label>
            }
            <div class="action-buttons">
                <button mat-flat-button color="accent" (click)="playVod(item)">
                    <mat-icon>play_arrow</mat-icon>
                    {{ 'XTREAM.PLAY' | translate }}</button
                >&nbsp;
                @if (!isFavorite()) {
                    <button
                        mat-stroked-button
                        color="accent"
                        (click)="toggleFavorite()"
                    >
                        <mat-icon>star_outline</mat-icon>
                        {{ 'PORTALS.ADD_TO_FAVORITES' | translate }}
                    </button>
                } @else {
                    <button
                        mat-stroked-button
                        color="accent"
                        (click)="toggleFavorite()"
                    >
                        <mat-icon>star</mat-icon>
                        {{ 'PORTALS.REMOVE_FROM_FAVORITES' | translate }}
                    </button>
                }
            </div>
        </div>
    </div>
    @if (item?.info?.youtube_trailer) {
        <div class="youtube-trailer">
            <h3>{{ 'XTREAM.YOUTUBE_TRAILER' | translate }}</h3>
            <iframe
                width="100%"
                height="450"
                [src]="
                    'https://www.youtube.com/embed/' +
                        item.info?.youtube_trailer | safe
                "
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        </div>
    }
}
`, styles: ['/* src/app/xtream-tauri/detail-view.scss */\n:host {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.details h2 {\n  word-wrap: break-word;\n  margin-top: 0;\n}\n.container {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: minmax(250px, 30%) minmax(300px, 1fr);\n  grid-template-areas: "image details" "seasons seasons";\n  padding: 20px;\n  max-width: 100%;\n  box-sizing: border-box;\n  height: auto;\n  min-height: calc(100vh - 73px);\n}\n.container::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  z-index: -1;\n  background-repeat: no-repeat;\n}\n.seasons {\n  padding: 20px;\n}\n.seasons .episodes {\n  margin-bottom: 10px;\n}\n.seasons .episodes button {\n  margin-top: 5px;\n}\n.image {\n  grid-area: image;\n  margin: 0;\n  border-radius: 12px;\n  max-width: 100%;\n}\n.image img {\n  width: 100%;\n  height: auto;\n  border-radius: 12px;\n  object-fit: cover;\n  max-width: 450px;\n}\n.image .placeholder-cover {\n  width: 100%;\n  aspect-ratio: 2/3;\n  background-color: #999;\n  border-radius: 12px;\n}\n.image .placeholder-cover::after {\n  content: "No cover";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\napp-season-container {\n  grid-area: seasons;\n  width: 100%;\n}\n@media (max-width: 800px) {\n  .container {\n    grid-template-columns: 1fr;\n    grid-template-areas: "image" "details" "seasons";\n    padding: 10px;\n  }\n  .image,\n  .details {\n    width: 100%;\n    flex: 1 1 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n  }\n  .image img,\n  .details img {\n    max-height: 500px;\n    object-fit: contain;\n    border-radius: 0;\n  }\n  .details {\n    padding: 0 10px;\n  }\n  .youtube-trailer {\n    width: 100% !important;\n  }\n}\n.label {\n  font-weight: 100;\n  font-size: 0.9em;\n  padding: 5px 0;\n  text-decoration: underline;\n  opacity: 0.6;\n}\n.action-buttons {\n  margin-top: 10px;\n}\n.youtube-trailer {\n  display: flex;\n  flex-wrap: wrap;\n  align-self: center;\n  width: 100%;\n  max-width: 650px;\n  margin: 0 auto;\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VodDetailsComponent, { className: "VodDetailsComponent", filePath: "src/app/xtream-tauri/vod-details/vod-details.component.ts", lineNumber: 23 });
})();
export {
  VodDetailsComponent
};
