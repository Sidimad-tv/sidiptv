import {
  BehaviorSubject,
  CommonModule,
  Component,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  __spreadValues,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./sidimad-app.js";

// node_modules/ngx-whats-new/fesm2020/ngx-whats-new.mjs
function NgxWhatsNewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "img", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r0.items[ctx_r0.selected] == null ? null : ctx_r0.items[ctx_r0.selected].imageBgColor)("height", (ctx_r0.items[ctx_r0.selected] == null ? null : ctx_r0.items[ctx_r0.selected].imageHeight) + "px");
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.items[ctx_r0.selected] == null ? null : ctx_r0.items[ctx_r0.selected].imageSrc, \u0275\u0275sanitizeUrl);
  }
}
function NgxWhatsNewComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.items[ctx_r0.selected] == null ? null : ctx_r0.items[ctx_r0.selected].title, " ");
  }
}
function NgxWhatsNewComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.items[ctx_r0.selected] == null ? null : ctx_r0.items[ctx_r0.selected].text, " ");
  }
}
function NgxWhatsNewComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r0.items[ctx_r0.selected] == null ? null : ctx_r0.items[ctx_r0.selected].html, \u0275\u0275sanitizeHtml);
  }
}
function NgxWhatsNewComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 16);
    \u0275\u0275listener("click", function NgxWhatsNewComponent_div_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToNext());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const btn_r3 = ctx.ngIf;
    \u0275\u0275styleProp("text-align", (btn_r3 == null ? null : btn_r3.position) || "center");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", btn_r3 == null ? null : btn_r3.bgColor)("color", btn_r3 == null ? null : btn_r3.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", btn_r3.text, " ");
  }
}
function NgxWhatsNewComponent_ul_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 19);
    \u0275\u0275listener("click", function NgxWhatsNewComponent_ul_8_li_1_Template_li_click_0_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.navigateTo(i_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("clickable", ctx_r0._options.clickableNavigationDots)("active", i_r5 === ctx_r0.selected)("inactive", i_r5 !== ctx_r0.selected);
  }
}
function NgxWhatsNewComponent_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 17);
    \u0275\u0275template(1, NgxWhatsNewComponent_ul_8_li_1_Template, 1, 6, "li", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.items);
  }
}
var DEFAULT_OPTIONS = {
  width: "500px",
  disableClose: false
};
var NgxWhatsNewComponent = class {
  constructor() {
    this.items = [];
    this.closeModal = new EventEmitter();
    this.selected = 0;
  }
  /** Set some default options */
  set options(options) {
    this._options = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS), options);
  }
  /**
   * Registers a listener for keyboard-based navigation between modals
   * @param $event keyboard event
   */
  navigateByKeyboard($event) {
    if (this._options.enableKeyboardNavigation) {
      switch ($event.key) {
        case "ArrowRight":
          if (this.selected < this.items.length - 1) {
            this.selected = this.selected + 1;
          }
          break;
        case "ArrowLeft":
          if ($event.key === "ArrowLeft" && this.selected > 0) {
            this.selected = this.selected - 1;
          }
          break;
        case "Escape":
          this.close();
          break;
        default:
          break;
      }
    }
  }
  /**
   * Navigates to the next modal
   */
  goToNext() {
    if (this.selected < this.items.length - 1) {
      this.selected = this.selected + 1;
    } else {
      this.closeModal.emit();
    }
  }
  /**
   * Navigates to the modal with the provided index
   * @param index number of the modal window
   */
  navigateTo(index) {
    if (this._options.clickableNavigationDots) {
      this.selected = index;
    }
  }
  /**
   * Closes the modal dialog
   */
  close() {
    if (!this._options.disableClose) {
      this.closeModal.emit();
    }
  }
};
NgxWhatsNewComponent.\u0275fac = function NgxWhatsNewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxWhatsNewComponent)();
};
NgxWhatsNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: NgxWhatsNewComponent,
  selectors: [["ngx-whats-new"]],
  hostBindings: function NgxWhatsNewComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function NgxWhatsNewComponent_keydown_HostBindingHandler($event) {
        return ctx.navigateByKeyboard($event);
      }, \u0275\u0275resolveWindow);
    }
  },
  inputs: {
    items: "items",
    options: "options"
  },
  outputs: {
    closeModal: "closeModal"
  },
  standalone: false,
  decls: 10,
  vars: 18,
  consts: [[1, "modal"], [1, "modal-layout"], [1, "modal-body"], ["class", "image", 3, "background-color", "height", 4, "ngIf"], ["class", "title", 4, "ngIf"], ["class", "text", 4, "ngIf"], ["class", "text", 3, "innerHTML", 4, "ngIf"], ["class", "button", 3, "text-align", 4, "ngIf"], ["class", "navigation", 4, "ngIf"], ["id", "backdrop", 3, "click"], [1, "image"], [3, "src"], [1, "title"], [1, "text"], [1, "text", 3, "innerHTML"], [1, "button"], [3, "click"], [1, "navigation"], ["class", "dot", 3, "clickable", "active", "inactive", "click", 4, "ngFor", "ngForOf"], [1, "dot", 3, "click"]],
  template: function NgxWhatsNewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275template(3, NgxWhatsNewComponent_div_3_Template, 2, 5, "div", 3)(4, NgxWhatsNewComponent_div_4_Template, 2, 1, "div", 4)(5, NgxWhatsNewComponent_div_5_Template, 2, 1, "div", 5)(6, NgxWhatsNewComponent_div_6_Template, 1, 1, "div", 6)(7, NgxWhatsNewComponent_div_7_Template, 3, 7, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, NgxWhatsNewComponent_ul_8_Template, 2, 1, "ul", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 9);
      \u0275\u0275listener("click", function NgxWhatsNewComponent_Template_div_click_9_listener() {
        return ctx.close();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx._options.customStyle == null ? null : ctx._options.customStyle.width)("border-radius", ctx._options.customStyle == null ? null : ctx._options.customStyle.borderRadius)("border", ctx._options.customStyle == null ? null : ctx._options.customStyle.borderSize)("box-shadow", ctx._options.customStyle == null ? null : ctx._options.customStyle.boxShadow)("background-color", ctx._options.customStyle == null ? null : ctx._options.customStyle.backgroundColor)("color", ctx._options.customStyle == null ? null : ctx._options.customStyle.textColor);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.items[ctx.selected] == null ? null : ctx.items[ctx.selected].imageSrc);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.items[ctx.selected] == null ? null : ctx.items[ctx.selected].title);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.items[ctx.selected] == null ? null : ctx.items[ctx.selected].text);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.items[ctx.selected] == null ? null : ctx.items[ctx.selected].html);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.items[ctx.selected] == null ? null : ctx.items[ctx.selected].button);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.items.length > 1);
    }
  },
  dependencies: [NgForOf, NgIf],
  styles: [".modal[_ngcontent-%COMP%]{width:500px;height:auto;top:50%;left:50%;transform:translate(-50%,-50%);position:fixed;z-index:1000}.modal-layout[_ngcontent-%COMP%]{display:grid;place-content:center}.modal-layout[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{background:#fff;overflow:hidden}.modal-layout[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{overflow:hidden;align-items:center;display:flex;justify-content:center}.modal-layout[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.3em;font-weight:100;margin:20px 20px 0;text-align:center}.modal-layout[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:20px;text-align:center}.modal-layout[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{padding:0 20px 20px}.modal-layout[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;padding:10px 35px;text-transform:uppercase;cursor:pointer;outline:none}.modal-layout[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:.9}.modal-layout[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center;list-style-type:none;margin:20px;padding:0}.modal-layout[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{border-radius:9999px;height:12px;width:12px;margin:0 4px}.modal-layout[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:#000c;border:1px solid rgba(0,0,0,0)}.modal-layout[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .inactive[_ngcontent-%COMP%]{background-color:transparent;border:1px solid rgba(0,0,0,.3)}.modal-layout[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .clickable[_ngcontent-%COMP%]   .inactive[_ngcontent-%COMP%]{cursor:pointer}#backdrop[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);z-index:900;position:fixed;inset:0;background-color:#0000004d}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxWhatsNewComponent, [{
    type: Component,
    args: [{
      selector: "ngx-whats-new",
      template: `<div class="modal">
  <div class="modal-layout">
    <div
      class="modal-body"
      [style.width]="_options.customStyle?.width"
      [style.border-radius]="_options.customStyle?.borderRadius"
      [style.border]="_options.customStyle?.borderSize"
      [style.boxShadow]="_options.customStyle?.boxShadow"
      [style.backgroundColor]="_options.customStyle?.backgroundColor"
      [style.color]="_options.customStyle?.textColor"
    >
      <div
        *ngIf="items[selected]?.imageSrc"
        class="image"
        [style.background-color]="items[selected]?.imageBgColor"
        [style.height]="items[selected]?.imageHeight + 'px'"
      >
        <img [src]="items[selected]?.imageSrc" />
      </div>
      <div class="title" *ngIf="items[selected]?.title">
        {{ items[selected]?.title }}
      </div>
      <div class="text" *ngIf="items[selected]?.text">
        {{ items[selected]?.text }}
      </div>
      <div
        class="text"
        *ngIf="items[selected]?.html"
        [innerHTML]="items[selected]?.html"
      ></div>
      <div
        class="button"
        [style.text-align]="btn?.position || 'center'"
        *ngIf="items[selected]?.button as btn"
      >
        <button
          [style.background-color]="btn?.bgColor"
          [style.color]="btn?.textColor"
          (click)="goToNext()"
        >
          {{ btn.text }}
        </button>
      </div>
    </div>
    <ul class="navigation" *ngIf="items.length > 1">
      <li
        class="dot"
        [class.clickable]="_options.clickableNavigationDots"
        (click)="navigateTo(i)"
        [class.active]="i === selected"
        [class.inactive]="i !== selected"
        *ngFor="let item of items; let i = index"
      ></li>
    </ul>
  </div>
</div>
<div id="backdrop" (click)="close()"></div>
`,
      styles: [".modal{width:500px;height:auto;top:50%;left:50%;transform:translate(-50%,-50%);position:fixed;z-index:1000}.modal-layout{display:grid;place-content:center}.modal-layout .modal-body{background:#fff;overflow:hidden}.modal-layout .modal-body .image{overflow:hidden;align-items:center;display:flex;justify-content:center}.modal-layout .modal-body .title{font-size:1.3em;font-weight:100;margin:20px 20px 0;text-align:center}.modal-layout .modal-body .text{margin:20px;text-align:center}.modal-layout .modal-body .button{padding:0 20px 20px}.modal-layout .modal-body .button button{border:none;padding:10px 35px;text-transform:uppercase;cursor:pointer;outline:none}.modal-layout .modal-body .button button:hover{opacity:.9}.modal-layout .navigation{align-items:center;display:flex;justify-content:center;list-style-type:none;margin:20px;padding:0}.modal-layout .navigation .dot{border-radius:9999px;height:12px;width:12px;margin:0 4px}.modal-layout .navigation .active{background-color:#000c;border:1px solid rgba(0,0,0,0)}.modal-layout .navigation .inactive{background-color:transparent;border:1px solid rgba(0,0,0,.3)}.modal-layout .navigation .clickable .inactive{cursor:pointer}#backdrop{-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);z-index:900;position:fixed;inset:0;background-color:#0000004d}\n"]
    }]
  }], null, {
    items: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    closeModal: [{
      type: Output
    }],
    navigateByKeyboard: [{
      type: HostListener,
      args: ["window:keydown", ["$event"]]
    }]
  });
})();
var NgxWhatsNewModule = class {
};
NgxWhatsNewModule.\u0275fac = function NgxWhatsNewModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxWhatsNewModule)();
};
NgxWhatsNewModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: NgxWhatsNewModule,
  declarations: [NgxWhatsNewComponent],
  imports: [CommonModule],
  exports: [NgxWhatsNewComponent]
});
NgxWhatsNewModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxWhatsNewModule, [{
    type: NgModule,
    args: [{
      declarations: [NgxWhatsNewComponent],
      imports: [CommonModule],
      exports: [NgxWhatsNewComponent]
    }]
  }], null, null);
})();

// src/app/services/whats-new.service.ts
var WhatsNewService = class _WhatsNewService {
  constructor() {
    this.dialogState$ = new BehaviorSubject(false);
    this.modals = {
      "0.6.0": [
        {
          imageHeight: 470,
          imageBgColor: "#333",
          imageSrc: "./assets/updates/060/dark-theme.png",
          title: "New in v0.6.0 - Dark theme \u{1F389}",
          text: "Finally, the dark theme is now available. Check the settings page of the application to change the theme.",
          button: {
            text: "OKAY",
            textColor: "#ccc",
            bgColor: "#111"
          }
        },
        {
          imageHeight: 470,
          imageBgColor: "#333",
          imageSrc: "./assets/updates/060/channel-logos.png",
          title: "Channel logos \u{1F4FA}",
          text: "The channel list was extended with the visualization of logotypes (only visible if they are defined in the playlist)",
          button: {
            text: "OKAY",
            textColor: "#ccc",
            bgColor: "#111"
          }
        },
        {
          imageHeight: 470,
          imageBgColor: "#333",
          imageSrc: "./assets/updates/060/custom-user-agent.png",
          title: "Custom user agent \u{1F575}\uFE0F\u200D\u2642\uFE0F",
          text: "Some IPTV providers need a specific user-agent in order to play their playlist. Support of custom user agent is available now.",
          button: {
            text: "GOT IT",
            textColor: "#ccc",
            bgColor: "#111"
          }
        }
      ],
      "0.7.0": [
        {
          imageHeight: 500,
          imageBgColor: "#333",
          imageSrc: "./assets/updates/070/refresh-playlist.png",
          title: "New in v0.7.0 - Refresh playlists \u{1F389}",
          text: "Now you don't have to delete and re-add a playlist if it changes, you can simply update it directly from the user interface.",
          button: {
            text: "Nice!",
            textColor: "#ccc",
            bgColor: "#111"
          }
        },
        {
          imageHeight: 500,
          imageBgColor: "#333",
          imageSrc: "./assets/updates/070/auto-refresh.png",
          title: "Auto-refresh playlists \u{1F389}",
          text: "In addition, an auto-refresh playlist function is available so that the playlists will be updated automatically every time the app is started.",
          button: {
            text: "Okay",
            textColor: "#ccc",
            bgColor: "#111"
          }
        }
      ],
      "0.8.0": [
        {
          imageHeight: 310,
          imageBgColor: "#333",
          imageSrc: "./assets/updates/080/translations.png",
          title: "New in v0.8.0 - New translations \u{1F389}",
          html: 'The new release includes the localization of the application into two new languages: Korean and Spanish. Many thanks to the contributors for the translation! (<a target="_blank" href="https://github.com/chaeya">@chaeya</a>, <a target="_blank" href="https://github.com/sguinetti">@sguinetti</a>, <a target="_blank" href="https://github.com/anthonyaxenov">anthonyaxenov</a>)',
          button: {
            text: "Nice!",
            textColor: "#ccc",
            bgColor: "#111"
          }
        },
        {
          title: "User-Agent Support on Channel Level",
          html: 'Now user-agent support can be specified not only on the playlist level but also on the level of individual channels. For this purpose, support for Kodi <a target="_blank" href="https://github.com/4gray/iptvnator/issues/57">playlist format</a> was added to the application.',
          button: {
            text: "Next!",
            textColor: "#ccc",
            bgColor: "#111"
          }
        },
        {
          title: "Information about current EPG program",
          html: 'Similarly to digital receivers, after you switch channels at the bottom of the screen you will see a pop-up window with information about the current program <a target="_blank" href="https://github.com/4gray/iptvnator/issues/51">#51</a>',
          imageHeight: 250,
          imageBgColor: "#333",
          imageSrc: "./assets/updates/080/channel-info.png",
          button: {
            text: "Next!",
            textColor: "#ccc",
            bgColor: "#111"
          }
        },
        {
          title: "This and that",
          html: 'In addition to the already mentioned new features, some bugs have been fixed and the internal dependencies of the application have been updated. Thanks for all the <a href="https://github.com/4gray/iptvnator/issues" target="_blank">ideas</a>, contributions and <a target="_blank" href="https://github.com/sponsors/4gray">first donations.</a>',
          button: {
            text: "YAY!",
            textColor: "#ccc",
            bgColor: "#111"
          }
        }
      ],
      "0.9.0": [
        {
          imageHeight: 310,
          imageBgColor: "#333",
          imageSrc: "./assets/updates/090/reorder-playlists.gif",
          title: "\u{1F389} v0.9.0 - rearrange playlists",
          html: 'The new version of the app has an option to <a href="https://github.com/4gray/iptvnator/issues/77" target="_blank">sort the playlists</a> using drag&drop.',
          button: {
            text: "YAY!",
            textColor: "#ccc",
            bgColor: "#111"
          }
        },
        {
          imageHeight: 310,
          imageBgColor: "#333",
          imageSrc: "./assets/updates/090/subtitle-option.png",
          title: "Global subtitle display setting",
          html: "The new version has the ability to enable/disable subtitles on a global level for all channels.",
          button: {
            text: "YAY!",
            textColor: "#ccc",
            bgColor: "#111"
          }
        },
        {
          imageHeight: 310,
          imageBgColor: "#333",
          imageSrc: "./assets/updates/090/languages.png",
          title: "Chinese translation",
          html: 'Thanks to <a target="_blank" href="https://github.com/JoJenH">@JoJenH</a> for the translation.',
          button: {
            text: "YAY!",
            textColor: "#ccc",
            bgColor: "#111"
          }
        },
        {
          title: "This & That",
          html: `
                    * improved english translation (thanks to <a target="_blank" href="https://github.com/mbuett">@mbuett</a>)<br />
                    * bugfixes and visual improvements, see <a href="https://github.com/4gray/iptvnator/blob/master/CHANGELOG.md">changelog</a> for more details
                `,
          button: {
            text: "YAY!",
            textColor: "#ccc",
            bgColor: "#111"
          }
        }
      ],
      "0.10.0": [
        {
          title: "\u{1F389} v0.10.0 - What's new",
          html: `
                    <h3>Playlist navigation from the sidebar</h3>
                    Switching between playlists is now possible directly from the sidebar and without interrupting channel viewing.
                    
                    <h3>Global favorites</h3>
                    Additional playlist has been added, which is generated on the fly and contains favorite channels from all existing playlists.

                    <h3>PWA</h3>
                    IPTVnator is now available as a <a href="https://iptvnator.vercel.app/" target="_blank">web-application</a>, which means that you can use it directly from the browser. This means that application can be run on smartphones, tablets, set-top boxes or smart tv browsers.

                    <h3>French localization</h3>
                    The app has been translated into another language and is now available in French. Many thanks to <a href="https://github.com/m-p-3" target="_blank">@m-p-3</a> for the translation!
                `,
          button: {
            text: "Close",
            textColor: "#ccc",
            bgColor: "#111"
          }
        }
      ],
      "0.11.0": [
        {
          imageHeight: 400,
          imageBgColor: "#333",
          imageSrc: "./assets/updates/0110/multiple-epg-sources.png",
          title: "Multiple EPG sources",
          html: "In the new version of the application, you can add more than one URL as a source of the EPG program.",
          button: {
            text: "NEXT",
            textColor: "#ccc",
            bgColor: "#111"
          }
        },
        {
          imageHeight: 400,
          imageBgColor: "#333",
          imageSrc: "./assets/updates/0110/multi-epg-view.png",
          title: "\u{1F389} Multi-EPG view",
          html: "The first version of multi-EPG view was developed, which is familiar to many users from set-top boxes. At this stage the view works in purely informative mode.",
          button: {
            text: "NEXT",
            textColor: "#ccc",
            bgColor: "#111"
          }
        },
        {
          imageHeight: 400,
          imageBgColor: "#333",
          imageSrc: "./assets/updates/0110/import-playlist-as-text.png",
          title: "Import playlist from plain text",
          html: "Another playlist import option became available - import m3u(8) as text. Just copy the playlist to the clipboard and paste it into the application without having to save it to disk.",
          button: {
            text: "NEXT",
            textColor: "#ccc",
            bgColor: "#111"
          }
        },
        {
          title: "This&that",
          html: `<h2>Improvements in PWA</h2> 
                A number of visual changes have been made to improve the experience of using the app on mobile devices.
                <br />
                <h2>Internalization</h2> The localization of the project has been improved, but help is still needed with the translation into different languages.
                <br />
                <h2>Dependencies updates</h2> 
                The basic libraries used in the application have been updated (angular, electron etc)`,
          button: {
            text: "CLOSE",
            textColor: "#ccc",
            bgColor: "#111"
          }
        }
      ],
      "0.13.0": [
        {
          imageHeight: 400,
          imageBgColor: "#333",
          imageSrc: "./assets/updates/0130/mpv-player.png",
          title: "\u{1F680} MPV player integration",
          html: 'Long-awaited mpv player support, which can now be selected from the settings. Before activating the player from the settings page, make sure it is installed on your system. For more details about mvp integration, check the <a target="_blank" href="https://github.com/4gray/iptvnator/wiki/What-is-mpv-video-player-and-how-to-install-it-on-different-operating-systems%3F">wiki page</a>.',
          button: {
            text: "YAY",
            textColor: "#ccc",
            bgColor: "#111"
          }
        }
      ],
      "0.14.0": [
        {
          title: "\u{1F680} New in v0.14.0",
          html: `The main feature of this release is &mdash; Xtream Code IPTV support. The feature is also available in PWA, but works best in electron version of the application and combination with mpv player.<br />
                
                <h3>Other updates:</h3>
                * possibility to specify custom path for mpv player<br/>
                * fixed an annoying bug that appeared when reopening mpv player<br/>
                * updated libraries used under the hood<br/>
                * fixed bug related to user-agent handling`,
          button: {
            text: "GO!",
            textColor: "#ccc",
            bgColor: "#111"
          }
        }
      ]
    };
    this.options = {
      width: "500px",
      customStyle: {
        boxShadow: "0px 0px 10px 5px #111",
        backgroundColor: "#333",
        textColor: "#eee"
      }
    };
  }
  /**
   * Changes the visibility state of the modal dialog
   * @param value flag to set
   */
  changeDialogVisibleState(value) {
    this.dialogState$.next(value);
  }
  /**
   * Returns an array with modals for the provided version of the application
   * @param version version string
   */
  getModalsByVersion(version) {
    return this.modals[version] || [];
  }
  /**
   * Returns modals with latest changes
   */
  getLatestChanges() {
    const modalsLength = Object.keys(this.modals).length;
    const lastVersion = Object.keys(this.modals)[modalsLength - 1];
    return this.modals[lastVersion];
  }
  static {
    this.\u0275fac = function WhatsNewService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WhatsNewService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WhatsNewService, factory: _WhatsNewService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WhatsNewService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  NgxWhatsNewComponent,
  NgxWhatsNewModule,
  WhatsNewService
};
