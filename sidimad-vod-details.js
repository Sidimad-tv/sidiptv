import {
  MatProgressSpinnerModule
} from "./sidimad-spinner.js";
import {
  PlaylistsService
} from "./sidimad-database.js";
import {
  ActivatedRoute
} from "./sidimad-store.js";
import {
  DomSanitizer,
  MatButton,
  MatButtonModule,
  MatIcon,
  TranslatePipe
} from "./sidimad-browser.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  Pipe,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./sidimad-app.js";

// src/app/xtream/vod-details/safe.pipe.ts
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

// src/app/xtream/vod-details/vod-details.component.ts
function VodDetailsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "img", 5);
    \u0275\u0275listener("error", function VodDetailsComponent_Conditional_4_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.item.info == null ? null : ctx_r1.item.info.movie_image, \u0275\u0275sanitizeUrl);
  }
}
function VodDetailsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275text(2, "\n    ");
  }
}
function VodDetailsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n    ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n        ", ctx_r1.item.info.description, "\n      ");
  }
}
function VodDetailsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "XTREAM.RELEASE_DATE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n        ", ctx_r1.item.info.releasedate, "\n      ");
  }
}
function VodDetailsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "XTREAM.GENRE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n        ", ctx_r1.item.info.genre, "\n      ");
  }
}
function VodDetailsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "XTREAM.COUNTRY"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n        ", ctx_r1.item.info.country, "\n      ");
  }
}
function VodDetailsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "XTREAM.ACTORS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n        ", ctx_r1.item.info.actors, "\n      ");
  }
}
function VodDetailsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "XTREAM.DIRECTOR"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n        ", ctx_r1.item.info.director, "\n      ");
  }
}
function VodDetailsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "XTREAM.DURATION"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n        ", ctx_r1.item.info.duration, "\n      ");
  }
}
function VodDetailsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "XTREAM.IMDB_RATING"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n        ", ctx_r1.item.info.rating_imdb, "\n      ");
  }
}
function VodDetailsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n          ", \u0275\u0275pipeBind1(5, 2, "XTREAM.KINOPOISK_RATING"), ":\n        ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n        ", ctx_r1.item.info.rating_kinopoisk, "\n      ");
  }
}
function VodDetailsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n          ");
    \u0275\u0275elementStart(1, "button", 8);
    \u0275\u0275listener("click", function VodDetailsComponent_Conditional_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavorite());
    });
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "star_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(6, 1, "PORTALS.ADD_TO_FAVORITES"), "\n          ");
  }
}
function VodDetailsComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n          ");
    \u0275\u0275elementStart(1, "button", 8);
    \u0275\u0275listener("click", function VodDetailsComponent_Conditional_31_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavorite());
    });
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(6, 1, "PORTALS.REMOVE_FROM_FAVORITES"), "\n          ");
  }
}
function VodDetailsComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275text(2, "\n      ");
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n      ");
    \u0275\u0275element(7, "iframe", 10);
    \u0275\u0275pipe(8, "safe");
    \u0275\u0275text(9, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n  ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "XTREAM.YOUTUBE_TRAILER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", \u0275\u0275pipeBind1(8, 4, "https://www.youtube.com/embed/" + (ctx_r1.item.info == null ? null : ctx_r1.item.info.youtube_trailer)), \u0275\u0275sanitizeResourceUrl);
  }
}
var VodDetailsComponent = class _VodDetailsComponent {
  constructor() {
    this.addToFavoritesClicked = new EventEmitter();
    this.playClicked = new EventEmitter();
    this.removeFromFavoritesClicked = new EventEmitter();
    this.playlistService = inject(PlaylistsService);
    this.route = inject(ActivatedRoute);
    this.portalId = this.route.snapshot.paramMap.get("id") ?? this.route.parent.snapshot.params.id;
    this.isFavorite = false;
    this.isLoading = false;
  }
  ngOnInit() {
    this.checkFavoriteStatus();
  }
  checkFavoriteStatus() {
    this.playlistService.getPortalFavorites(this.portalId).subscribe((favorites) => {
      if (!favorites || favorites.length === 0) {
        this.isFavorite = false;
      } else {
        this.isFavorite = favorites.some((i) => {
          const hasStreamId = i?.stream_id !== void 0 && this.item?.movie_data?.stream_id !== void 0;
          const hasId = i?.details?.id !== void 0 && this.item?.id !== void 0;
          return hasStreamId && i.stream_id === this.item.movie_data.stream_id || hasId && i.details.id === this.item.id;
        });
      }
    });
  }
  toggleFavorite() {
    if (this.isFavorite) {
      this.removeFromFavoritesClicked.emit(this.item?.movie_data?.stream_id || this.item?.id);
    } else {
      if (this.item.cmd) {
        this.addToFavoritesClicked.emit({
          name: this.item.info.name,
          stream_id: this.item.id,
          cover: this.item.info.movie_image,
          cmd: this.item.cmd || "",
          details: this.item
        });
      } else {
        this.addToFavoritesClicked.emit({
          name: this.item.movie_data.name,
          stream_id: this.item.movie_data.stream_id,
          container_extension: this.item.movie_data.container_extension,
          cover: this.item.info.movie_image,
          stream_type: "movie"
        });
      }
    }
    this.isFavorite = !this.isFavorite;
  }
  static {
    this.\u0275fac = function VodDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VodDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VodDetailsComponent, selectors: [["app-vod-details"]], inputs: { item: "item" }, outputs: { addToFavoritesClicked: "addToFavoritesClicked", playClicked: "playClicked", removeFromFavoritesClicked: "removeFromFavoritesClicked" }, decls: 36, vars: 18, consts: [[1, "container"], [1, "image"], [1, "details"], [1, "action-buttons"], ["mat-flat-button", "", "color", "accent", 3, "click"], [3, "error", "src"], [1, "placeholder-cover"], [1, "label"], ["mat-stroked-button", "", "color", "accent", 3, "click"], [1, "youtube-trailer"], ["width", "100%", "height", "450", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", "", 3, "src"]], template: function VodDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n  ");
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275text(3, "\n    ");
        \u0275\u0275conditionalCreate(4, VodDetailsComponent_Conditional_4_Template, 3, 1)(5, VodDetailsComponent_Conditional_5_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "\n  ");
        \u0275\u0275elementStart(7, "div", 2);
        \u0275\u0275text(8, "\n    ");
        \u0275\u0275elementStart(9, "h2");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n    ");
        \u0275\u0275conditionalCreate(12, VodDetailsComponent_Conditional_12_Template, 4, 1);
        \u0275\u0275conditionalCreate(13, VodDetailsComponent_Conditional_13_Template, 8, 4);
        \u0275\u0275conditionalCreate(14, VodDetailsComponent_Conditional_14_Template, 8, 4);
        \u0275\u0275conditionalCreate(15, VodDetailsComponent_Conditional_15_Template, 8, 4);
        \u0275\u0275conditionalCreate(16, VodDetailsComponent_Conditional_16_Template, 8, 4);
        \u0275\u0275conditionalCreate(17, VodDetailsComponent_Conditional_17_Template, 8, 4);
        \u0275\u0275conditionalCreate(18, VodDetailsComponent_Conditional_18_Template, 8, 4);
        \u0275\u0275conditionalCreate(19, VodDetailsComponent_Conditional_19_Template, 8, 4);
        \u0275\u0275conditionalCreate(20, VodDetailsComponent_Conditional_20_Template, 8, 4);
        \u0275\u0275elementStart(21, "div", 3);
        \u0275\u0275text(22, "\n      ");
        \u0275\u0275elementStart(23, "button", 4);
        \u0275\u0275listener("click", function VodDetailsComponent_Template_button_click_23_listener() {
          return ctx.playClicked.emit(ctx.item);
        });
        \u0275\u0275text(24, "\n        ");
        \u0275\u0275elementStart(25, "mat-icon");
        \u0275\u0275text(26, "play_arrow");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, "\xA0\n        ");
        \u0275\u0275conditionalCreate(30, VodDetailsComponent_Conditional_30_Template, 8, 3)(31, VodDetailsComponent_Conditional_31_Template, 8, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "\n  ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, "\n  ");
        \u0275\u0275conditionalCreate(35, VodDetailsComponent_Conditional_35_Template, 11, 6);
      }
      if (rf & 2) {
        \u0275\u0275styleProp("background", (ctx.item == null ? null : ctx.item.info == null ? null : ctx.item.info.backdrop_path) && (ctx.item == null ? null : ctx.item.info == null ? null : ctx.item.info.backdrop_path.length) > 0 ? "linear-gradient(to top, rgba(29,29,29,1) 0%, rgba(0,0,0,0.5) 100%), url(" + (ctx.item == null ? null : ctx.item.info == null ? null : ctx.item.info.backdrop_path[0]) + ") repeat-x" : "none");
        \u0275\u0275advance(4);
        \u0275\u0275conditional((ctx.item.info == null ? null : ctx.item.info.movie_image) ? 4 : 5);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.item.info.name);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.item.info.description ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.info.releasedate ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.info.genre ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.info.country ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.info.actors ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.info.director ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.info.duration ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.info.rating_imdb ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.info.rating_kinopoisk ? 20 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(28, 16, "XTREAM.PLAY"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.isFavorite ? 30 : 31);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.item.info.youtube_trailer ? 35 : -1);
      }
    }, dependencies: [
      MatButtonModule,
      MatButton,
      MatIcon,
      MatProgressSpinnerModule,
      SafePipe,
      TranslatePipe
    ], styles: ['\n\n[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 320px 1fr;\n  padding: 0 10px;\n}\n.container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  z-index: -1;\n  background-repeat: no-repeat;\n}\n.seasons[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.image[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 20px 10px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 500px;\n  background-color: #999;\n  border-radius: 5px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%]::after {\n  content: "No cover";\n  position: relative;\n  top: 230px;\n  left: 115px;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 5px;\n  width: 300px;\n}\n@media (max-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    max-width: 1200px;\n  }\n  .image[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n  }\n  .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .details[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n  .youtube-trailer[_ngcontent-%COMP%] {\n    width: 95% !important;\n  }\n}\n.label[_ngcontent-%COMP%] {\n  font-weight: 100;\n  font-size: 0.9em;\n  padding: 5px 0;\n  text-decoration: underline;\n  opacity: 0.6;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.youtube-trailer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-self: center;\n  width: 650px;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VodDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-vod-details", imports: [
      MatButtonModule,
      MatIcon,
      MatProgressSpinnerModule,
      SafePipe,
      TranslatePipe
    ], template: `<div
  class="container"
    [style.background]="
        item?.info?.backdrop_path && item?.info?.backdrop_path.length > 0
            ? 'linear-gradient(to top, rgba(29,29,29,1) 0%, rgba(0,0,0,0.5) 100%), url(' +
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
      <div class="placeholder-cover"></div>
    }
  </div>
  <div class="details">
    <h2>{{ item.info.name }}</h2>
    @if (item.info.description) {
      <label>
        {{ item.info.description }}
      </label>
    }
    @if (item.info.releasedate) {
      <label>
        <div class="label">{{ 'XTREAM.RELEASE_DATE' | translate }}:</div>
        {{ item.info.releasedate }}
      </label>
    }
    @if (item.info.genre) {
      <label>
        <div class="label">{{ 'XTREAM.GENRE' | translate }}:</div>
        {{ item.info.genre }}
      </label>
    }
    @if (item.info.country) {
      <label>
        <div class="label">{{ 'XTREAM.COUNTRY' | translate }}:</div>
        {{ item.info.country }}
      </label>
    }
    @if (item.info.actors) {
      <div>
        <div class="label">{{ 'XTREAM.ACTORS' | translate }}:</div>
        {{ item.info.actors }}
      </div>
    }
    @if (item.info.director) {
      <label>
        <div class="label">{{ 'XTREAM.DIRECTOR' | translate }}:</div>
        {{ item.info.director }}
      </label>
    }
    @if (item.info.duration) {
      <label>
        <div class="label">{{ 'XTREAM.DURATION' | translate }}:</div>
        {{ item.info.duration }}
      </label>
    }
    @if (item.info.rating_imdb) {
      <label>
        <div class="label">{{ 'XTREAM.IMDB_RATING' | translate }}:</div>
        {{ item.info.rating_imdb }}
      </label>
    }
    @if (item.info.rating_kinopoisk) {
      <label>
        <div class="label">
          {{ 'XTREAM.KINOPOISK_RATING' | translate }}:
        </div>
        {{ item.info.rating_kinopoisk }}
      </label>
    }
    <div class="action-buttons">
      <button
        mat-flat-button
        color="accent"
        (click)="playClicked.emit(item)"
        >
        <mat-icon>play_arrow</mat-icon>
        {{ 'XTREAM.PLAY' | translate }}</button
        >&nbsp;
        @if (!isFavorite) {
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
  @if (item.info.youtube_trailer) {
    <div class="youtube-trailer">
      <h3>{{ 'XTREAM.YOUTUBE_TRAILER' | translate }}</h3>
      <iframe
        width="100%"
        height="450"
        [src]="
            'https://www.youtube.com/embed/' + item.info?.youtube_trailer | safe
        "
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  }
`, styles: ['/* src/app/xtream/detail-view.scss */\n:host {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.details h2 {\n  word-wrap: break-word;\n}\n.container {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 320px 1fr;\n  padding: 0 10px;\n}\n.container::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  z-index: -1;\n  background-repeat: no-repeat;\n}\n.seasons {\n  padding: 20px;\n}\n.seasons .episodes {\n  margin-bottom: 10px;\n}\n.seasons .episodes button {\n  margin-top: 5px;\n}\n.image {\n  width: 300px;\n  padding: 20px 10px;\n}\n.image .placeholder-cover {\n  width: 300px;\n  height: 500px;\n  background-color: #999;\n  border-radius: 5px;\n}\n.image .placeholder-cover::after {\n  content: "No cover";\n  position: relative;\n  top: 230px;\n  left: 115px;\n}\n.image img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 5px;\n  width: 300px;\n}\n@media (max-width: 800px) {\n  .container {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    max-width: 1200px;\n  }\n  .image,\n  .details {\n    flex: 1 1 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n  }\n  .image img,\n  .details img {\n    border-radius: 0;\n  }\n  .details {\n    padding: 0 10px;\n  }\n  .youtube-trailer {\n    width: 95% !important;\n  }\n}\n.label {\n  font-weight: 100;\n  font-size: 0.9em;\n  padding: 5px 0;\n  text-decoration: underline;\n  opacity: 0.6;\n}\n.action-buttons {\n  margin-top: 10px;\n}\n.youtube-trailer {\n  display: flex;\n  flex-wrap: wrap;\n  align-self: center;\n  width: 650px;\n}\n'] }]
  }], null, { item: [{
    type: Input,
    args: [{ required: true }]
  }], addToFavoritesClicked: [{
    type: Output
  }], playClicked: [{
    type: Output
  }], removeFromFavoritesClicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VodDetailsComponent, { className: "VodDetailsComponent", filePath: "src/app/xtream/vod-details/vod-details.component.ts", lineNumber: 31 });
})();

export {
  VodDetailsComponent
};
