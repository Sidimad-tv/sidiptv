import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "./chunk-QHT262RL.js";
import {
  MatButton,
  MatButtonModule,
  TranslatePipe
} from "./chunk-W4GTA6ZI.js";
import {
  Component,
  Inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7EPDPDBX.js";

// src/app/player/components/epg-list/epg-item-description/epg-item-description.component.ts
function EpgItemDescriptionComponent_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n    ");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(3, 1, "EPG.PROGRAM_DIALOG.LANGUAGE"), "\n      ");
  }
}
function EpgItemDescriptionComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n    ");
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
    \u0275\u0275conditionalCreate(8, EpgItemDescriptionComponent_Conditional_6_Conditional_8_Template, 5, 3);
    \u0275\u0275elementStart(9, "p", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n  ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n      ", \u0275\u0275pipeBind1(3, 4, "EPG.PROGRAM_DIALOG.TITLE"), "\n    ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.epgProgram.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.epgProgram.title[0].lang ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.epgProgram.title[0].lang);
  }
}
function EpgItemDescriptionComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n    ");
    \u0275\u0275elementStart(5, "p", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n  ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n      ", \u0275\u0275pipeBind1(3, 2, "EPG.PROGRAM_DIALOG.CATEGORY"), "\n    ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.epgProgram.category);
  }
}
function EpgItemDescriptionComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n    ");
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n  ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n      ", \u0275\u0275pipeBind1(3, 2, "EPG.PROGRAM_DIALOG.DESCRIPTION"), "\n    ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.epgProgram.desc);
  }
}
function EpgItemDescriptionComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n    ");
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n  ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n      ", \u0275\u0275pipeBind1(3, 3, "EPG.PROGRAM_DIALOG.PARENTAL_RATING_SYSTEM"), "\n    ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("\n      ", ctx_r0.epgProgram.rating[0].value, " [", ctx_r0.epgProgram.rating[0].system, "]\n    ");
  }
}
var EpgItemDescriptionComponent = class _EpgItemDescriptionComponent {
  /**
   * Creates an instance of the component and injects the program of the clicked epg program
   * @param epgProgram epg program
   */
  constructor(epgProgram) {
    this.epgProgram = epgProgram;
  }
  static {
    this.\u0275fac = function EpgItemDescriptionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EpgItemDescriptionComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EpgItemDescriptionComponent, selectors: [["app-epg-item-description"]], decls: 18, vars: 10, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "cdkFocusInitial", "", "color", "accent"], [1, "subheading-2"], ["data-test", "title"], ["data-test", "lang"], ["data-test", "category"], ["data-test", "desc"], ["data-test", "rating"]], template: function EpgItemDescriptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(3, "\n");
        \u0275\u0275elementStart(4, "mat-dialog-content", 1);
        \u0275\u0275text(5, "\n  ");
        \u0275\u0275conditionalCreate(6, EpgItemDescriptionComponent_Conditional_6_Template, 12, 6);
        \u0275\u0275conditionalCreate(7, EpgItemDescriptionComponent_Conditional_7_Template, 8, 4);
        \u0275\u0275conditionalCreate(8, EpgItemDescriptionComponent_Conditional_8_Template, 8, 4);
        \u0275\u0275conditionalCreate(9, EpgItemDescriptionComponent_Conditional_9_Template, 8, 5);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n");
        \u0275\u0275elementStart(11, "mat-dialog-actions", 2);
        \u0275\u0275text(12, "\n  ");
        \u0275\u0275elementStart(13, "button", 3);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n  ", \u0275\u0275pipeBind1(2, 6, "EPG.PROGRAM_DIALOG.PROGRAM_DETAILS"), "\n");
        \u0275\u0275advance(5);
        \u0275\u0275conditional((ctx.epgProgram == null ? null : ctx.epgProgram.title == null ? null : ctx.epgProgram.title.length) > 0 ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.epgProgram == null ? null : ctx.epgProgram.category == null ? null : ctx.epgProgram.category.length) > 0 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.epgProgram == null ? null : ctx.epgProgram.desc == null ? null : ctx.epgProgram.desc.length) > 0 ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.epgProgram == null ? null : ctx.epgProgram.rating == null ? null : ctx.epgProgram.rating.length) > 0 ? 9 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\n    ", \u0275\u0275pipeBind1(15, 8, "HOME.PLAYLISTS.INFO_DIALOG.CLOSE"), "\n  ");
      }
    }, dependencies: [MatButtonModule, MatButton, MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, TranslatePipe], styles: ["\n\n.subheading-2[_ngcontent-%COMP%] {\n  color: #666;\n  text-decoration: underline;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 0.9em;\n}\n  .dark-theme .subheading-2 {\n  color: #bdbdbd;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EpgItemDescriptionComponent, [{
    type: Component,
    args: [{ selector: "app-epg-item-description", imports: [MatButtonModule, MatDialogModule, TranslatePipe], template: `<h2 mat-dialog-title>
  {{ 'EPG.PROGRAM_DIALOG.PROGRAM_DETAILS' | translate }}
</h2>
<mat-dialog-content class="mat-typography">
  @if (epgProgram?.title?.length > 0) {
    <div class="subheading-2">
      {{ 'EPG.PROGRAM_DIALOG.TITLE' | translate }}
    </div>
    <p data-test="title">{{ epgProgram.title }}</p>
    @if (epgProgram.title[0].lang) {
      <div class="subheading-2">
        {{ 'EPG.PROGRAM_DIALOG.LANGUAGE' | translate }}
      </div>
    }
    <p data-test="lang">{{ epgProgram.title[0].lang }}</p>
  }
  @if (epgProgram?.category?.length > 0) {
    <div class="subheading-2">
      {{ 'EPG.PROGRAM_DIALOG.CATEGORY' | translate }}
    </div>
    <p data-test="category">{{ epgProgram.category }}</p>
  }
  @if (epgProgram?.desc?.length > 0) {
    <div class="subheading-2">
      {{ 'EPG.PROGRAM_DIALOG.DESCRIPTION' | translate }}
    </div>
    <p data-test="desc">{{ epgProgram.desc }}</p>
  }
  @if (epgProgram?.rating?.length > 0) {
    <div class="subheading-2">
      {{ 'EPG.PROGRAM_DIALOG.PARENTAL_RATING_SYSTEM' | translate }}
    </div>
    <p data-test="rating">
      {{ epgProgram.rating[0].value }} [{{ epgProgram.rating[0].system }}]
    </p>
  }
</mat-dialog-content>
<mat-dialog-actions align="end">
  <button mat-button mat-dialog-close cdkFocusInitial color="accent">
    {{ 'HOME.PLAYLISTS.INFO_DIALOG.CLOSE' | translate }}
  </button>
</mat-dialog-actions>
`, styles: ["/* src/app/player/components/epg-list/epg-item-description/epg-item-description.component.scss */\n.subheading-2 {\n  color: #666;\n  text-decoration: underline;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 0.9em;\n}\n::ng-deep .dark-theme .subheading-2 {\n  color: #bdbdbd;\n}\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EpgItemDescriptionComponent, { className: "EpgItemDescriptionComponent", filePath: "src/app/player/components/epg-list/epg-item-description/epg-item-description.component.ts", lineNumber: 14 });
})();

export {
  EpgItemDescriptionComponent
};
