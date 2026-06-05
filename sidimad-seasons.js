import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./sidimad-card.js";
import {
  ActivatedRoute,
  XtreamStore
} from "./sidimad-store.js";
import {
  MatButton,
  MatIcon,
  TranslatePipe
} from "./sidimad-browser.js";
import {
  Component,
  EventEmitter,
  KeyValuePipe,
  Output,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./sidimad-app.js";

// src/app/xtream-tauri/season-container/season-container.component.ts
function SeasonContainerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "button", 1);
    \u0275\u0275listener("click", function SeasonContainerComponent_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedSeason = void 0);
    });
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Back to seasons");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n");
  }
}
function SeasonContainerComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "mat-card", 2);
    \u0275\u0275listener("click", function SeasonContainerComponent_Conditional_6_For_2_Template_mat_card_click_1_listener() {
      const season_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectSeason(season_r4.key));
    });
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "mat-card-content");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n        ");
  }
  if (rf & 2) {
    const season_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Season ", season_r4.key);
  }
}
function SeasonContainerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275repeaterCreate(1, SeasonContainerComponent_Conditional_6_For_2_Template, 7, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(3, "keyvalue");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind2(3, 0, ctx_r1.seasons(), ctx_r1.compareSeasons));
  }
}
function SeasonContainerComponent_Conditional_7_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "mat-card-content")(2, "img", 5);
    \u0275\u0275listener("error", function SeasonContainerComponent_Conditional_7_For_2_Conditional_3_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275text(3, "\n                ");
  }
  if (rf & 2) {
    const episode_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", episode_r6.info.movie_image, \u0275\u0275sanitizeUrl);
  }
}
function SeasonContainerComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "mat-card", 3);
    \u0275\u0275listener("click", function SeasonContainerComponent_Conditional_7_For_2_Template_mat_card_click_1_listener() {
      const episode_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectEpisode(episode_r6));
    });
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275conditionalCreate(3, SeasonContainerComponent_Conditional_7_For_2_Conditional_3_Template, 4, 1);
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n        ");
  }
  if (rf & 2) {
    const episode_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional((episode_r6.info == null ? null : episode_r6.info.movie_image) ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\n                    ", episode_r6.episode_num, ". ", episode_r6.title, "\n                ");
  }
}
function SeasonContainerComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275repeaterCreate(1, SeasonContainerComponent_Conditional_7_For_2_Template, 8, 3, null, null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.seasons()[ctx_r1.selectedSeason]);
  }
}
var SeasonContainerComponent = class _SeasonContainerComponent {
  constructor() {
    this.seasons = input.required(...ngDevMode ? [{ debugName: "seasons" }] : []);
    this.episodeClicked = new EventEmitter();
  }
  compareSeasons(a, b) {
    return Number(a.key) - Number(b.key);
  }
  selectSeason(seasonKey) {
    this.selectedSeason = seasonKey;
  }
  selectEpisode(episode) {
    this.episodeClicked.emit(episode);
  }
  static {
    this.\u0275fac = function SeasonContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeasonContainerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SeasonContainerComponent, selectors: [["app-season-container"]], inputs: { seasons: [1, "seasons"] }, outputs: { episodeClicked: "episodeClicked" }, decls: 9, vars: 2, consts: [[1, "seasons-container"], ["mat-button", "", 1, "back-to-seasons", 3, "click"], [1, "season-item", 3, "click"], [1, "episode-item", 3, "click"], [1, "episode-title"], [1, "episode-cover", 3, "error", "src"]], template: function SeasonContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3");
        \u0275\u0275text(1, "Seasons and Episodes");
        \u0275\u0275elementEnd();
        \u0275\u0275text(2, "\n");
        \u0275\u0275conditionalCreate(3, SeasonContainerComponent_Conditional_3_Template, 10, 0);
        \u0275\u0275elementStart(4, "div", 0);
        \u0275\u0275text(5, "\n    ");
        \u0275\u0275conditionalCreate(6, SeasonContainerComponent_Conditional_6_Template, 4, 3)(7, SeasonContainerComponent_Conditional_7_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.selectedSeason ? 3 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.selectedSeason ? 6 : 7);
      }
    }, dependencies: [MatCardModule, MatCard, MatCardContent, MatIcon, MatButton, KeyValuePipe], styles: ["\n\n.seasons-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: wrap;\n  gap: 10px;\n}\n.season-item[_ngcontent-%COMP%], \n.episode-item[_ngcontent-%COMP%] {\n  min-height: 100px;\n  justify-content: center;\n  width: 150px;\n  cursor: pointer;\n  display: block;\n}\nh3[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.episode-item[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.episode-item[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.episode-item[_ngcontent-%COMP%]   .episode-title[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.episode-item[_ngcontent-%COMP%]   .episode-cover[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.back-to-seasons[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeasonContainerComponent, [{
    type: Component,
    args: [{ selector: "app-season-container", imports: [KeyValuePipe, MatCardModule, MatIcon, MatButton], template: `<h3>Seasons and Episodes</h3>
@if (selectedSeason) {
    <button
        mat-button
        class="back-to-seasons"
        (click)="selectedSeason = undefined"
    >
        <mat-icon>arrow_back</mat-icon>
        <span>Back to seasons</span>
    </button>
}
<div class="seasons-container">
    @if (!selectedSeason) {
        @for (season of seasons() | keyvalue: compareSeasons; track $index) {
            <mat-card class="season-item" (click)="selectSeason(season.key)">
                <mat-card-content>Season {{ season.key }}</mat-card-content>
            </mat-card>
        }
    } @else {
        @for (episode of seasons()[selectedSeason]; track $index) {
            <mat-card class="episode-item" (click)="selectEpisode(episode)">
                @if (episode.info?.movie_image) {
                    <mat-card-content
                        ><img
                            [src]="episode.info.movie_image"
                            (error)="
                                $event.target.src =
                                    './assets/images/default-poster.png'
                            "
                            class="episode-cover"
                    /></mat-card-content>
                }
                <div class="episode-title">
                    {{ episode.episode_num }}. {{ episode.title }}
                </div>
            </mat-card>
        }
    }
</div>
`, styles: ["/* src/app/xtream-tauri/season-container/season-container.component.scss */\n.seasons-container {\n  width: 100%;\n  display: flex;\n  flex-flow: wrap;\n  gap: 10px;\n}\n.season-item,\n.episode-item {\n  min-height: 100px;\n  justify-content: center;\n  width: 150px;\n  cursor: pointer;\n  display: block;\n}\nh3 {\n  font-weight: normal;\n}\n.episode-item mat-card-content {\n  padding: 0;\n}\n.episode-item mat-card-title {\n  padding: 10px;\n}\n.episode-item .episode-title {\n  padding: 5px;\n}\n.episode-item .episode-cover {\n  width: 100%;\n}\n.back-to-seasons {\n  margin-bottom: 5px;\n}\n"] }]
  }], null, { episodeClicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SeasonContainerComponent, { className: "SeasonContainerComponent", filePath: "src/app/xtream-tauri/season-container/season-container.component.ts", lineNumber: 14 });
})();

// src/app/xtream-tauri/serial-details/serial-details.component.ts
function SerialDetailsComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "img", 5);
    \u0275\u0275listener("error", function SerialDetailsComponent_Conditional_2_Conditional_5_Template_img_error_1_listener($event) {
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
    \u0275\u0275property("src", item_r3.info.cover, \u0275\u0275sanitizeUrl);
  }
}
function SerialDetailsComponent_Conditional_2_Conditional_12_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate1("\n                    ", item_r3.info.plot, "\n                ");
  }
}
function SerialDetailsComponent_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "div", 6);
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
    \u0275\u0275textInterpolate1("\n                    ", item_r3.info.releaseDate, "\n                ");
  }
}
function SerialDetailsComponent_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "div", 6);
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
    \u0275\u0275textInterpolate1("\n                    ", item_r3.info.genre, "\n                ");
  }
}
function SerialDetailsComponent_Conditional_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "div", 6);
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
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "XTREAM.RATING"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                    ", item_r3.info == null ? null : item_r3.info.rating, "\n                ");
  }
}
function SerialDetailsComponent_Conditional_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "div", 6);
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
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "XTREAM.CAST"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                    ", item_r3.info.cast, "\n                ");
  }
}
function SerialDetailsComponent_Conditional_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "div", 6);
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
    \u0275\u0275textInterpolate1("\n                    ", item_r3.info.director, "\n                ");
  }
}
function SerialDetailsComponent_Conditional_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "div", 6);
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
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(5, 2, "XTREAM.EPISODE_RUN_TIME"), ":\n                    ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                    ", item_r3.info.episode_run_time, "\n                ");
  }
}
function SerialDetailsComponent_Conditional_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "button", 7);
    \u0275\u0275listener("click", function SerialDetailsComponent_Conditional_2_Conditional_21_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.toggleFavorite());
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
function SerialDetailsComponent_Conditional_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "button", 8);
    \u0275\u0275listener("click", function SerialDetailsComponent_Conditional_2_Conditional_22_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.toggleFavorite());
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
function SerialDetailsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275conditionalCreate(5, SerialDetailsComponent_Conditional_2_Conditional_5_Template, 3, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n        ");
    \u0275\u0275elementStart(7, "div", 2);
    \u0275\u0275text(8, "\n            ");
    \u0275\u0275elementStart(9, "h2");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n            ");
    \u0275\u0275conditionalCreate(12, SerialDetailsComponent_Conditional_2_Conditional_12_Template, 4, 1);
    \u0275\u0275conditionalCreate(13, SerialDetailsComponent_Conditional_2_Conditional_13_Template, 8, 4);
    \u0275\u0275conditionalCreate(14, SerialDetailsComponent_Conditional_2_Conditional_14_Template, 8, 4);
    \u0275\u0275conditionalCreate(15, SerialDetailsComponent_Conditional_2_Conditional_15_Template, 8, 4);
    \u0275\u0275conditionalCreate(16, SerialDetailsComponent_Conditional_2_Conditional_16_Template, 8, 4);
    \u0275\u0275conditionalCreate(17, SerialDetailsComponent_Conditional_2_Conditional_17_Template, 8, 4);
    \u0275\u0275conditionalCreate(18, SerialDetailsComponent_Conditional_2_Conditional_18_Template, 8, 4);
    \u0275\u0275elementStart(19, "div", 3);
    \u0275\u0275text(20, "\n                ");
    \u0275\u0275conditionalCreate(21, SerialDetailsComponent_Conditional_2_Conditional_21_Template, 8, 3)(22, SerialDetailsComponent_Conditional_2_Conditional_22_Template, 8, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n        ");
    \u0275\u0275elementStart(25, "app-season-container", 4);
    \u0275\u0275listener("episodeClicked", function SerialDetailsComponent_Conditional_2_Template_app_season_container_episodeClicked_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.playEpisode($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "\n");
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const item_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", (item_r3.info == null ? null : item_r3.info.backdrop_path) && item_r3.info.backdrop_path.length > 0 ? "linear-gradient(to top, rgba(29,29,29,1) 0%, rgba(0,0,0,0.5) 100%), url(" + item_r3.info.backdrop_path[0] + ") repeat-x" : "none");
    \u0275\u0275advance(4);
    \u0275\u0275conditional((item_r3.info == null ? null : item_r3.info.cover) ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r3.info == null ? null : item_r3.info.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((item_r3.info == null ? null : item_r3.info.plot) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r3.info == null ? null : item_r3.info.releaseDate) ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r3.info == null ? null : item_r3.info.genre) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r3.info == null ? null : item_r3.info.rating) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r3.info == null ? null : item_r3.info.cast) ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r3.info == null ? null : item_r3.info.director) ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r3.info == null ? null : item_r3.info.episode_run_time) ? 18 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r4.isFavorite() ? 21 : 22);
    \u0275\u0275advance(4);
    \u0275\u0275property("seasons", item_r3.episodes);
  }
}
var SerialDetailsComponent = class _SerialDetailsComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.xtreamStore = inject(XtreamStore);
    this.selectedItem = this.xtreamStore.selectedItem;
    this.selectedContentType = this.xtreamStore.selectedContentType;
    this.isFavorite = this.xtreamStore.isFavorite;
  }
  ngOnInit() {
    const { categoryId, serialId } = this.route.snapshot.params;
    this.xtreamStore.fetchSerialDetailsWithMetadata({
      serialId,
      categoryId
    });
    this.xtreamStore.checkFavoriteStatus(serialId, this.xtreamStore.currentPlaylist().id);
  }
  playEpisode(episode) {
    this.addToRecentlyViewed(this.route.snapshot.params.serialId);
    const streamUrl = this.xtreamStore.constructEpisodeStreamUrl(episode);
    this.xtreamStore.openPlayer(streamUrl, episode.title, this.selectedItem().info.cover);
  }
  addToRecentlyViewed(xtreamId) {
    this.xtreamStore.addRecentItem({
      contentId: xtreamId,
      playlist: this.xtreamStore.currentPlaylist
    });
  }
  toggleFavorite() {
    this.xtreamStore.toggleFavorite(this.route.snapshot.params.serialId, this.xtreamStore.currentPlaylist().id);
  }
  static {
    this.\u0275fac = function SerialDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SerialDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SerialDetailsComponent, selectors: [["app-serial-details"]], decls: 3, vars: 2, consts: [[1, "container"], [1, "image"], [1, "details"], [1, "action-buttons"], [3, "episodeClicked", "seasons"], [3, "error", "src"], [1, "label"], ["mat-stroked-button", "", "color", "accent", 3, "click"], ["mat-flat-button", "", "color", "accent", 3, "click"]], template: function SerialDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275text(1, "\n");
        \u0275\u0275conditionalCreate(2, SerialDetailsComponent_Conditional_2_Template, 28, 13);
      }
      if (rf & 2) {
        const item_r7 = \u0275\u0275storeLet(ctx.selectedItem());
        \u0275\u0275advance(2);
        \u0275\u0275conditional((item_r7 == null ? null : item_r7.info) ? 2 : -1);
      }
    }, dependencies: [MatButton, MatIcon, SeasonContainerComponent, TranslatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  margin-top: 0;\n}\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: minmax(250px, 30%) minmax(300px, 1fr);\n  grid-template-areas: "image details" "seasons seasons";\n  padding: 20px;\n  max-width: 100%;\n  box-sizing: border-box;\n  height: auto;\n  min-height: calc(100vh - 73px);\n}\n.container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  z-index: -1;\n  background-repeat: no-repeat;\n}\n.seasons[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.image[_ngcontent-%COMP%] {\n  grid-area: image;\n  margin: 0;\n  border-radius: 12px;\n  max-width: 100%;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 12px;\n  object-fit: cover;\n  max-width: 450px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 2/3;\n  background-color: #999;\n  border-radius: 12px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%]::after {\n  content: "No cover";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\napp-season-container[_ngcontent-%COMP%] {\n  grid-area: seasons;\n  width: 100%;\n}\n@media (max-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-areas: "image" "details" "seasons";\n    padding: 10px;\n  }\n  .image[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%] {\n    width: 100%;\n    flex: 1 1 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n  }\n  .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 500px;\n    object-fit: contain;\n    border-radius: 0;\n  }\n  .details[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n  .youtube-trailer[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n.label[_ngcontent-%COMP%] {\n  font-weight: 100;\n  font-size: 0.9em;\n  padding: 5px 0;\n  text-decoration: underline;\n  opacity: 0.6;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.youtube-trailer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-self: center;\n  width: 100%;\n  max-width: 650px;\n  margin: 0 auto;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SerialDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-serial-details", imports: [MatButton, MatIcon, SeasonContainerComponent, TranslatePipe], template: `@let item = selectedItem();
@if (item?.info) {
    <div
        class="container"
        [style.background]="
            item.info?.backdrop_path && item.info.backdrop_path.length > 0
                ? 'linear-gradient(to top, rgba(29,29,29,1) 0%, rgba(0,0,0,0.5) 100%), url(' +
                  item.info.backdrop_path[0] +
                  ') repeat-x'
                : 'none'
        "
    >
        <div class="image">
            @if (item.info?.cover) {
                <img
                    [src]="item.info.cover"
                    (error)="
                        $event.target.src = './assets/images/default-poster.png'
                    "
                />
            }
        </div>
        <div class="details">
            <h2>{{ item.info?.name }}</h2>
            @if (item.info?.plot) {
                <label>
                    {{ item.info.plot }}
                </label>
            }
            @if (item.info?.releaseDate) {
                <label>
                    <div class="label">
                        {{ 'XTREAM.RELEASE_DATE' | translate }}:
                    </div>
                    {{ item.info.releaseDate }}
                </label>
            }
            @if (item.info?.genre) {
                <label>
                    <div class="label">{{ 'XTREAM.GENRE' | translate }}:</div>
                    {{ item.info.genre }}
                </label>
            }
            @if (item.info?.rating) {
                <label>
                    <div class="label">{{ 'XTREAM.RATING' | translate }}:</div>
                    {{ item.info?.rating }}
                </label>
            }
            @if (item.info?.cast) {
                <div>
                    <div class="label">{{ 'XTREAM.CAST' | translate }}:</div>
                    {{ item.info.cast }}
                </div>
            }
            @if (item.info?.director) {
                <label>
                    <div class="label">
                        {{ 'XTREAM.DIRECTOR' | translate }}:
                    </div>
                    {{ item.info.director }}
                </label>
            }
            @if (item.info?.episode_run_time) {
                <label>
                    <div class="label">
                        {{ 'XTREAM.EPISODE_RUN_TIME' | translate }}:
                    </div>
                    {{ item.info.episode_run_time }}
                </label>
            }
            <div class="action-buttons">
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
                        mat-flat-button
                        color="accent"
                        (click)="toggleFavorite()"
                    >
                        <mat-icon>star</mat-icon>
                        {{ 'PORTALS.REMOVE_FROM_FAVORITES' | translate }}
                    </button>
                }
            </div>
        </div>
        <app-season-container
            [seasons]="item.episodes"
            (episodeClicked)="playEpisode($event)"
        />
    </div>
}
`, styles: ['/* src/app/xtream-tauri/detail-view.scss */\n:host {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.details h2 {\n  word-wrap: break-word;\n  margin-top: 0;\n}\n.container {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: minmax(250px, 30%) minmax(300px, 1fr);\n  grid-template-areas: "image details" "seasons seasons";\n  padding: 20px;\n  max-width: 100%;\n  box-sizing: border-box;\n  height: auto;\n  min-height: calc(100vh - 73px);\n}\n.container::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  z-index: -1;\n  background-repeat: no-repeat;\n}\n.seasons {\n  padding: 20px;\n}\n.seasons .episodes {\n  margin-bottom: 10px;\n}\n.seasons .episodes button {\n  margin-top: 5px;\n}\n.image {\n  grid-area: image;\n  margin: 0;\n  border-radius: 12px;\n  max-width: 100%;\n}\n.image img {\n  width: 100%;\n  height: auto;\n  border-radius: 12px;\n  object-fit: cover;\n  max-width: 450px;\n}\n.image .placeholder-cover {\n  width: 100%;\n  aspect-ratio: 2/3;\n  background-color: #999;\n  border-radius: 12px;\n}\n.image .placeholder-cover::after {\n  content: "No cover";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\napp-season-container {\n  grid-area: seasons;\n  width: 100%;\n}\n@media (max-width: 800px) {\n  .container {\n    grid-template-columns: 1fr;\n    grid-template-areas: "image" "details" "seasons";\n    padding: 10px;\n  }\n  .image,\n  .details {\n    width: 100%;\n    flex: 1 1 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n  }\n  .image img,\n  .details img {\n    max-height: 500px;\n    object-fit: contain;\n    border-radius: 0;\n  }\n  .details {\n    padding: 0 10px;\n  }\n  .youtube-trailer {\n    width: 100% !important;\n  }\n}\n.label {\n  font-weight: 100;\n  font-size: 0.9em;\n  padding: 5px 0;\n  text-decoration: underline;\n  opacity: 0.6;\n}\n.action-buttons {\n  margin-top: 10px;\n}\n.youtube-trailer {\n  display: flex;\n  flex-wrap: wrap;\n  align-self: center;\n  width: 100%;\n  max-width: 650px;\n  margin: 0 auto;\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SerialDetailsComponent, { className: "SerialDetailsComponent", filePath: "src/app/xtream-tauri/serial-details/serial-details.component.ts", lineNumber: 16 });
})();
export {
  SerialDetailsComponent
};
