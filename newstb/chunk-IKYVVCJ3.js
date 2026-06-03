import {
  EpgItemDescriptionComponent
} from "./chunk-KT6EFL7E.js";
import {
  MatList,
  MatListItem,
  MatListItemLine,
  MatListItemMeta,
  MatListItemTitle,
  MatListModule
} from "./chunk-JHEQ34EK.js";
import {
  MatDialog
} from "./chunk-QHT262RL.js";
import {
  MatIcon,
  MatIconButton,
  TranslateModule,
  TranslatePipe
} from "./chunk-W4GTA6ZI.js";
import {
  Component,
  DatePipe,
  Input,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7EPDPDBX.js";

// src/app/portals/epg-view/epg-view.component.ts
function EpgViewComponent_For_7_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275element(3, "div", 8);
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r2.getProgress(item_r2), "%");
  }
}
function EpgViewComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "mat-list-item", 1);
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n            ");
    \u0275\u0275elementStart(9, "div", 4);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n            ");
    \u0275\u0275elementStart(14, "span", 5);
    \u0275\u0275text(15, "\n                ");
    \u0275\u0275elementStart(16, "button", 6);
    \u0275\u0275listener("click", function EpgViewComponent_For_7_Template_button_click_16_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showDetails(item_r2));
    });
    \u0275\u0275text(17, "\n                    ");
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "\n            ");
    \u0275\u0275conditionalCreate(23, EpgViewComponent_For_7_Conditional_23_Template, 6, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n    ");
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("current-program", ctx_r2.isCurrentProgram(item_r2));
    \u0275\u0275property("lines", 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                ", item_r2.description, "\n            ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\n                ", \u0275\u0275pipeBind2(11, 8, item_r2.start, "HH:mm"), " -\n                ", \u0275\u0275pipeBind2(12, 11, item_r2.stop ?? item_r2.end, "HH:mm (dd.MM.yyyy)"), "\n            ");
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r2.isCurrentProgram(item_r2) ? 23 : -1);
  }
}
function EpgViewComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "mat-list-item");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n    ");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(3, 1, "EPG.EPG_NOT_AVAILABLE_CHANNEL_TITLE"), "\n        ");
  }
}
var EpgViewComponent = class _EpgViewComponent {
  constructor() {
    this.dialog = inject(MatDialog);
  }
  isCurrentProgram(item) {
    const end = item.stop ?? item.end;
    const now = (/* @__PURE__ */ new Date()).getTime();
    const start = new Date(item.start).getTime();
    const stop = new Date(end).getTime();
    return now >= start && now <= stop;
  }
  getProgress(item) {
    const now = (/* @__PURE__ */ new Date()).getTime();
    const start = new Date(item.start).getTime();
    const end = new Date(item.stop ?? item.end).getTime();
    const total = end - start;
    const current = now - start;
    return Math.min(Math.max(current / total * 100, 0), 100);
  }
  showDetails(item) {
    this.dialog.open(EpgItemDescriptionComponent, {
      data: {
        title: item.title ?? "No title",
        desc: item.description ?? "No description"
      }
    });
  }
  static {
    this.\u0275fac = function EpgViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EpgViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EpgViewComponent, selectors: [["app-epg-view"]], inputs: { epgItems: "epgItems" }, decls: 10, vars: 4, consts: [[1, "epg-title"], [3, "lines"], ["matListItemTitle", "", 1, "title"], ["matListItemLine", "", 1, "description"], ["matListItemLine", ""], ["matListItemMeta", ""], ["mat-icon-button", "", 3, "click"], [1, "progress-container"], [1, "progress"]], template: function EpgViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(3, "\n");
        \u0275\u0275elementStart(4, "mat-list");
        \u0275\u0275text(5, "\n    ");
        \u0275\u0275repeaterCreate(6, EpgViewComponent_For_7_Template, 25, 14, null, null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275conditionalCreate(8, EpgViewComponent_Conditional_8_Template, 5, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "EPG.TITLE"));
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.epgItems);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.epgItems == null ? null : ctx.epgItems.length) === 0 ? 8 : -1);
      }
    }, dependencies: [MatIconButton, MatIcon, MatListModule, MatList, MatListItem, MatListItemLine, MatListItemTitle, MatListItemMeta, TranslateModule, DatePipe, TranslatePipe], styles: ["\n\n.mat-mdc-list-item.current-program[_ngcontent-%COMP%] {\n  background-color: rgba(29, 185, 84, 0.2);\n}\n.mat-mdc-list-item.current-program[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #1db954;\n}\n.title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.epg-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n  padding: 16px;\n}\n.progress-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3px;\n  background: rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.progress-container[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #1db954;\n  transition: width 1s linear;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EpgViewComponent, [{
    type: Component,
    args: [{ selector: "app-epg-view", imports: [DatePipe, MatIconButton, MatIcon, MatListModule, TranslateModule], template: `<div class="epg-title">{{ 'EPG.TITLE' | translate }}</div>
<mat-list>
    @for (item of epgItems; track $index) {
        <mat-list-item
            [lines]="3"
            [class.current-program]="isCurrentProgram(item)"
        >
            <div class="title" matListItemTitle>{{ item.title }}</div>
            <div class="description" matListItemLine>
                {{ item.description }}
            </div>
            <div matListItemLine>
                {{ item.start | date: 'HH:mm' }} -
                {{ item.stop ?? item.end | date: 'HH:mm (dd.MM.yyyy)' }}
            </div>
            <span matListItemMeta>
                <button mat-icon-button (click)="showDetails(item)">
                    <mat-icon>info</mat-icon>
                </button>
            </span>
            @if (isCurrentProgram(item)) {
                <div class="progress-container">
                    <div
                        class="progress"
                        [style.width.%]="getProgress(item)"
                    ></div>
                </div>
            }
        </mat-list-item>
    }

    @if (epgItems?.length === 0) {
        <mat-list-item>
            {{ 'EPG.EPG_NOT_AVAILABLE_CHANNEL_TITLE' | translate }}
        </mat-list-item>
    }
</mat-list>
`, styles: ["/* src/app/portals/epg-view/epg-view.component.scss */\n.mat-mdc-list-item.current-program {\n  background-color: rgba(29, 185, 84, 0.2);\n}\n.mat-mdc-list-item.current-program .title {\n  color: #1db954;\n}\n.title {\n  font-weight: bold;\n}\n.epg-title {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n  padding: 16px;\n}\n.progress-container {\n  width: 100%;\n  height: 3px;\n  background: rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.progress-container .progress {\n  height: 100%;\n  background: #1db954;\n  transition: width 1s linear;\n}\n"] }]
  }], null, { epgItems: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EpgViewComponent, { className: "EpgViewComponent", filePath: "src/app/portals/epg-view/epg-view.component.ts", lineNumber: 17 });
})();

export {
  EpgViewComponent
};
