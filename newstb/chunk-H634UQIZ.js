import {
  SettingsComponent
} from "./chunk-32WWAGYR.js";
import {
  MatList,
  MatListItem,
  MatListItemIcon,
  MatListItemTitle,
  MatListModule,
  MatNavList
} from "./chunk-JHEQ34EK.js";
import {
  PlaylistInfoComponent
} from "./chunk-BSW44WEY.js";
import {
  ActivatedRoute,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle,
  RouterLink,
  RouterLinkActive,
  Store,
  XtreamStore,
  selectActivePlaylist,
  selectPlaylistById
} from "./chunk-QHT262RL.js";
import {
  MatTooltip
} from "./chunk-BPPYQAMP.js";
import {
  DataService,
  MatButton,
  MatIcon,
  MatIconButton,
  TranslatePipe
} from "./chunk-W4GTA6ZI.js";
import {
  Component,
  Inject,
  __async,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7EPDPDBX.js";

// src/app/xtream-tauri/account-info/account-info.component.ts
function AccountInfoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                    ", ctx_r0.accountInfo == null ? null : ctx_r0.accountInfo.user_info == null ? null : ctx_r0.accountInfo.user_info.message, "\n                ");
  }
}
var AccountInfoComponent = class _AccountInfoComponent {
  constructor(data) {
    this.dataService = inject(DataService);
    this.store = inject(Store);
    this.currentPlaylist = this.store.selectSignal(selectActivePlaylist);
    this.setAccountInfo();
    this.vodStreamsCount = data.vodStreamsCount;
    this.liveStreamsCount = data.liveStreamsCount;
    this.seriesCount = data.seriesCount;
  }
  setAccountInfo() {
    return __async(this, null, function* () {
      const playlist = this.currentPlaylist();
      console.log(playlist);
      if (!playlist)
        return;
      try {
        this.accountInfo = yield this.dataService.fetchData(`${playlist.serverUrl}/player_api.php`, {
          username: playlist.username,
          password: playlist.password,
          action: "get_account_info"
        });
        console.log(this.accountInfo);
        if (this.accountInfo) {
          this.formattedExpDate = new Date(parseInt(this.accountInfo.user_info.exp_date) * 1e3).toLocaleDateString();
          this.formattedCreatedDate = new Date(parseInt(this.accountInfo.user_info.created_at) * 1e3).toLocaleDateString();
        }
      } catch (error) {
        console.error("Failed to fetch account info:", error);
      }
    });
  }
  get isActive() {
    return this.accountInfo?.user_info?.status === "Active";
  }
  get isTrial() {
    return this.accountInfo?.user_info?.is_trial === "1";
  }
  static {
    this.\u0275fac = function AccountInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountInfoComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountInfoComponent, selectors: [["app-account-info"]], decls: 102, vars: 26, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [1, "info-grid"], [1, "info-section"], [1, "formats"], [1, "ports"], ["mat-button", "", "mat-dialog-close", "", "color", "accent"], [1, "welcome-message"]], template: function AccountInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0, "\n        ");
        \u0275\u0275elementStart(1, "h2", 0);
        \u0275\u0275text(2, "Account Information");
        \u0275\u0275elementEnd();
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "mat-dialog-content", 1);
        \u0275\u0275text(5, "\n            ");
        \u0275\u0275conditionalCreate(6, AccountInfoComponent_Conditional_6_Template, 4, 1);
        \u0275\u0275elementStart(7, "div", 2);
        \u0275\u0275text(8, "\n                ");
        \u0275\u0275elementStart(9, "div", 3);
        \u0275\u0275text(10, "\n                    ");
        \u0275\u0275elementStart(11, "h3");
        \u0275\u0275text(12, "User Information");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, "\n                    ");
        \u0275\u0275elementStart(14, "mat-list");
        \u0275\u0275text(15, "\n                        ");
        \u0275\u0275elementStart(16, "mat-list-item");
        \u0275\u0275text(17, "\n                            Status:\n                            ");
        \u0275\u0275elementStart(18, "span");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, "\n                        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, "\n                        ");
        \u0275\u0275elementStart(22, "mat-list-item");
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, "\n                        ");
        \u0275\u0275elementStart(25, "mat-list-item");
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, "\n                        ");
        \u0275\u0275elementStart(28, "mat-list-item");
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, "\n                        ");
        \u0275\u0275elementStart(31, "mat-list-item");
        \u0275\u0275text(32);
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "\n                        ");
        \u0275\u0275elementStart(34, "mat-list-item");
        \u0275\u0275text(35, "\n                            Trial Account:\n                            ");
        \u0275\u0275elementStart(36, "span");
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, "\n                        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, "\n                        ");
        \u0275\u0275elementStart(40, "mat-list-item");
        \u0275\u0275text(41, "\n                            Allowed Formats:\n                            ");
        \u0275\u0275elementStart(42, "span", 4);
        \u0275\u0275text(43);
        \u0275\u0275elementEnd();
        \u0275\u0275text(44, "\n                        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, "\n                    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(47, "\n\n                ");
        \u0275\u0275elementStart(48, "div", 3);
        \u0275\u0275text(49, "\n                    ");
        \u0275\u0275elementStart(50, "h3");
        \u0275\u0275text(51, "Server Information");
        \u0275\u0275elementEnd();
        \u0275\u0275text(52, "\n                    ");
        \u0275\u0275elementStart(53, "mat-list");
        \u0275\u0275text(54, "\n                        ");
        \u0275\u0275elementStart(55, "mat-list-item");
        \u0275\u0275text(56);
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, "\n                        ");
        \u0275\u0275elementStart(58, "mat-list-item");
        \u0275\u0275text(59);
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, "\n                        ");
        \u0275\u0275elementStart(61, "mat-list-item");
        \u0275\u0275text(62);
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, "\n                        ");
        \u0275\u0275elementStart(64, "mat-list-item");
        \u0275\u0275text(65);
        \u0275\u0275elementEnd();
        \u0275\u0275text(66, "\n                        ");
        \u0275\u0275elementStart(67, "mat-list-item");
        \u0275\u0275text(68);
        \u0275\u0275elementEnd();
        \u0275\u0275text(69, "\n                        ");
        \u0275\u0275elementStart(70, "mat-list-item");
        \u0275\u0275text(71);
        \u0275\u0275elementEnd();
        \u0275\u0275text(72, "\n                        ");
        \u0275\u0275elementStart(73, "mat-list-item");
        \u0275\u0275text(74);
        \u0275\u0275elementEnd();
        \u0275\u0275text(75, "\n                        ");
        \u0275\u0275elementStart(76, "mat-list-item");
        \u0275\u0275text(77, "\n                            Ports:\n                            ");
        \u0275\u0275elementStart(78, "div", 5);
        \u0275\u0275text(79, "\n                                ");
        \u0275\u0275elementStart(80, "span");
        \u0275\u0275text(81);
        \u0275\u0275elementEnd();
        \u0275\u0275text(82, "\n                                ");
        \u0275\u0275elementStart(83, "span");
        \u0275\u0275text(84);
        \u0275\u0275elementEnd();
        \u0275\u0275text(85, "\n                                ");
        \u0275\u0275elementStart(86, "span");
        \u0275\u0275text(87);
        \u0275\u0275elementEnd();
        \u0275\u0275text(88, "\n                            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(89, "\n                        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(90, "\n                    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(91, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(92, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(93, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(94, "\n        ");
        \u0275\u0275elementStart(95, "mat-dialog-actions");
        \u0275\u0275text(96, "\n            ");
        \u0275\u0275elementStart(97, "button", 6);
        \u0275\u0275text(98);
        \u0275\u0275pipe(99, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(100, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(101, "\n    ");
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional((ctx.accountInfo == null ? null : ctx.accountInfo.user_info == null ? null : ctx.accountInfo.user_info.message) ? 6 : -1);
        \u0275\u0275advance(12);
        \u0275\u0275classProp("active", ctx.isActive);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.accountInfo == null ? null : ctx.accountInfo.user_info == null ? null : ctx.accountInfo.user_info.status);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n                            Username:\n                            ", ctx.accountInfo == null ? null : ctx.accountInfo.user_info == null ? null : ctx.accountInfo.user_info.username, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("\n                            Active Connections:\n                            ", ctx.accountInfo == null ? null : ctx.accountInfo.user_info == null ? null : ctx.accountInfo.user_info.active_cons, "/", ctx.accountInfo == null ? null : ctx.accountInfo.user_info == null ? null : ctx.accountInfo.user_info.max_connections, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                            Created:\n                            ", ctx.formattedCreatedDate, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                            Expires: ", ctx.formattedExpDate, "\n                        ");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("trial", ctx.isTrial);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.isTrial ? "Yes" : "No");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("\n                                ", ctx.accountInfo == null ? null : ctx.accountInfo.user_info == null ? null : ctx.accountInfo.user_info.allowed_output_formats == null ? null : ctx.accountInfo.user_info.allowed_output_formats.join(", "), "\n                            ");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1("\n                            Live TV:\n                            ", ctx.liveStreamsCount, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                            Movies:\n                            ", ctx.vodStreamsCount, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                            TV Series:\n                            ", ctx.seriesCount, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                            URL:\n                            ", ctx.accountInfo == null ? null : ctx.accountInfo.server_info == null ? null : ctx.accountInfo.server_info.url, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                            Protocol:\n                            ", ctx.accountInfo == null ? null : ctx.accountInfo.server_info == null ? null : ctx.accountInfo.server_info.server_protocol, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                            Timezone:\n                            ", ctx.accountInfo == null ? null : ctx.accountInfo.server_info == null ? null : ctx.accountInfo.server_info.timezone, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                            Server Time:\n                            ", ctx.accountInfo == null ? null : ctx.accountInfo.server_info == null ? null : ctx.accountInfo.server_info.time_now, "\n                        ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("HTTP:\n                                    ", ctx.accountInfo == null ? null : ctx.accountInfo.server_info == null ? null : ctx.accountInfo.server_info.port);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("HTTPS:\n                                    ", ctx.accountInfo == null ? null : ctx.accountInfo.server_info == null ? null : ctx.accountInfo.server_info.https_port);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("RTMP:\n                                    ", ctx.accountInfo == null ? null : ctx.accountInfo.server_info == null ? null : ctx.accountInfo.server_info.rtmp_port);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(99, 24, "CLOSE"), "\n            ");
      }
    }, dependencies: [MatButton, MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatListModule, MatList, MatListItem, TranslatePipe], styles: ["\n\n.account-info-card[_ngcontent-%COMP%] {\n  margin: 16px;\n  max-width: 1200px;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.info-section[_ngcontent-%COMP%] {\n  border: 1px solid #333;\n  border-radius: 8px;\n  padding: 16px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.info-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding-left: 16px;\n  font-size: 1.1em;\n  border-bottom: 1px solid #333;\n  padding-bottom: 8px;\n}\nmat-list-item[_ngcontent-%COMP%] {\n  height: auto !important;\n  margin-bottom: 8px;\n  padding: 8px 16px;\n}\nstrong[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  min-width: 140px;\n  display: inline-block;\n}\n.active[_ngcontent-%COMP%] {\n  color: #4caf50;\n  font-weight: 500;\n}\n.trial[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-weight: 500;\n}\n.formats[_ngcontent-%COMP%] {\n  color: #2196f3;\n}\n.ports[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.ports[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  background: #2196f3;\n  border-radius: 4px;\n  font-size: 0.9em;\n}\n.welcome-message[_ngcontent-%COMP%] {\n  border: 1px solid #333;\n  padding: 16px;\n  border-radius: 4px;\n  margin-bottom: 16px;\n  text-align: center;\n  font-style: italic;\n}\n@media (max-width: 768px) {\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .account-info-card[_ngcontent-%COMP%] {\n    margin: 8px;\n  }\n  .ports[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountInfoComponent, [{
    type: Component,
    args: [{ selector: "app-account-info", imports: [MatButton, MatDialogModule, MatListModule, TranslatePipe], template: `
        <h2 mat-dialog-title>Account Information</h2>
        <mat-dialog-content class="mat-typography">
            @if (accountInfo?.user_info?.message) {
                <div class="welcome-message">
                    {{ accountInfo?.user_info?.message }}
                </div>
            }
            <div class="info-grid">
                <div class="info-section">
                    <h3>User Information</h3>
                    <mat-list>
                        <mat-list-item>
                            Status:
                            <span [class.active]="isActive">{{
                                accountInfo?.user_info?.status
                            }}</span>
                        </mat-list-item>
                        <mat-list-item>
                            Username:
                            {{ accountInfo?.user_info?.username }}
                        </mat-list-item>
                        <mat-list-item>
                            Active Connections:
                            {{ accountInfo?.user_info?.active_cons }}/{{
                                accountInfo?.user_info?.max_connections
                            }}
                        </mat-list-item>
                        <mat-list-item>
                            Created:
                            {{ formattedCreatedDate }}
                        </mat-list-item>
                        <mat-list-item>
                            Expires: {{ formattedExpDate }}
                        </mat-list-item>
                        <mat-list-item>
                            Trial Account:
                            <span [class.trial]="isTrial">{{
                                isTrial ? 'Yes' : 'No'
                            }}</span>
                        </mat-list-item>
                        <mat-list-item>
                            Allowed Formats:
                            <span class="formats">
                                {{
                                    accountInfo?.user_info?.allowed_output_formats?.join(
                                        ', '
                                    )
                                }}
                            </span>
                        </mat-list-item>
                    </mat-list>
                </div>

                <div class="info-section">
                    <h3>Server Information</h3>
                    <mat-list>
                        <mat-list-item>
                            Live TV:
                            {{ liveStreamsCount }}
                        </mat-list-item>
                        <mat-list-item>
                            Movies:
                            {{ vodStreamsCount }}
                        </mat-list-item>
                        <mat-list-item>
                            TV Series:
                            {{ seriesCount }}
                        </mat-list-item>
                        <mat-list-item>
                            URL:
                            {{ accountInfo?.server_info?.url }}
                        </mat-list-item>
                        <mat-list-item>
                            Protocol:
                            {{ accountInfo?.server_info?.server_protocol }}
                        </mat-list-item>
                        <mat-list-item>
                            Timezone:
                            {{ accountInfo?.server_info?.timezone }}
                        </mat-list-item>
                        <mat-list-item>
                            Server Time:
                            {{ accountInfo?.server_info?.time_now }}
                        </mat-list-item>
                        <mat-list-item>
                            Ports:
                            <div class="ports">
                                <span
                                    >HTTP:
                                    {{ accountInfo?.server_info?.port }}</span
                                >
                                <span
                                    >HTTPS:
                                    {{
                                        accountInfo?.server_info?.https_port
                                    }}</span
                                >
                                <span
                                    >RTMP:
                                    {{
                                        accountInfo?.server_info?.rtmp_port
                                    }}</span
                                >
                            </div>
                        </mat-list-item>
                    </mat-list>
                </div>
            </div>
        </mat-dialog-content>
        <mat-dialog-actions>
            <button mat-button mat-dialog-close color="accent">
                {{ 'CLOSE' | translate }}
            </button>
        </mat-dialog-actions>
    `, styles: ["/* src/app/xtream-tauri/account-info/account-info.component.scss */\n.account-info-card {\n  margin: 16px;\n  max-width: 1200px;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.info-section {\n  border: 1px solid #333;\n  border-radius: 8px;\n  padding: 16px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.info-section h3 {\n  margin-bottom: 16px;\n  padding-left: 16px;\n  font-size: 1.1em;\n  border-bottom: 1px solid #333;\n  padding-bottom: 8px;\n}\nmat-list-item {\n  height: auto !important;\n  margin-bottom: 8px;\n  padding: 8px 16px;\n}\nstrong {\n  margin-right: 8px;\n  min-width: 140px;\n  display: inline-block;\n}\n.active {\n  color: #4caf50;\n  font-weight: 500;\n}\n.trial {\n  color: #ff9800;\n  font-weight: 500;\n}\n.formats {\n  color: #2196f3;\n}\n.ports {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.ports span {\n  padding: 4px 8px;\n  background: #2196f3;\n  border-radius: 4px;\n  font-size: 0.9em;\n}\n.welcome-message {\n  border: 1px solid #333;\n  padding: 16px;\n  border-radius: 4px;\n  margin-bottom: 16px;\n  text-align: center;\n  font-style: italic;\n}\n@media (max-width: 768px) {\n  .info-grid {\n    grid-template-columns: 1fr;\n  }\n  .account-info-card {\n    margin: 8px;\n  }\n  .ports {\n    flex-direction: column;\n    gap: 8px;\n  }\n}\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountInfoComponent, { className: "AccountInfoComponent", filePath: "src/app/xtream-tauri/account-info/account-info.component.ts", lineNumber: 132 });
})();

// src/app/xtream-tauri/navigation/navigation.component.ts
var _c0 = () => ({ exact: true });
var _forTrack0 = ($index, $item) => $item.id;
function NavigationComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.xtreamStore.portalStatus());
  }
}
function NavigationComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 8);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function NavigationComponent_Conditional_29_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openAccountInfo());
    });
    \u0275\u0275text(3, "\n                    ");
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n            ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 1, "PORTALS.SIDEBAR.ACCOUNT_INFO"));
  }
}
function NavigationComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "a", 17);
    \u0275\u0275listener("click", function NavigationComponent_For_49_Template_a_click_1_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.categoryClick.emit(item_r4.id));
    });
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "mat-icon", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n        ");
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.isContentTypeActive(item_r4.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, item_r4.labelKey));
  }
}
var NavigationComponent = class _NavigationComponent {
  constructor() {
    this.activatedRoute = inject(ActivatedRoute);
    this.dialog = inject(MatDialog);
    this.store = inject(Store);
    this.xtreamStore = inject(XtreamStore);
    this.portalStatus = input(...ngDevMode ? [void 0, { debugName: "portalStatus" }] : []);
    this.selectedContentType = input(...ngDevMode ? [void 0, { debugName: "selectedContentType" }] : []);
    this.categoryClick = output();
    this.pageClicked = output();
    this.currentPlaylist = this.store.selectSignal(selectPlaylistById(this.activatedRoute.snapshot.params.id));
    this.isStalkerPlaylist = computed(() => this.currentPlaylist().macAddress, ...ngDevMode ? [{ debugName: "isStalkerPlaylist" }] : []);
    this.navigationItems = input(...ngDevMode ? [void 0, { debugName: "navigationItems" }] : []);
  }
  getStatusColor() {
    if (this.isStalkerPlaylist())
      return "status-active";
    switch (this.portalStatus()) {
      case "active":
        return "status-active";
      case "inactive":
        return "status-inactive";
      case "expired":
        return "status-expired";
      default:
        return "status-unavailable";
    }
  }
  getStatusIcon() {
    if (this.isStalkerPlaylist())
      return "play_circle";
    switch (this.portalStatus()) {
      case "active":
        return "check_circle";
      case "inactive":
        return "cancel";
      case "expired":
        return "warning";
      default:
        return "error";
    }
  }
  openAccountInfo() {
    this.dialog.open(AccountInfoComponent, {
      width: "80%",
      maxWidth: "1200px",
      maxHeight: "90vh",
      data: {
        vodStreamsCount: this.xtreamStore.vodStreams().length,
        liveStreamsCount: this.xtreamStore.liveStreams().length,
        seriesCount: this.xtreamStore.serialStreams().length
      }
    });
  }
  openSettings() {
    this.dialog.open(SettingsComponent, {
      width: "80%",
      maxWidth: "1200px",
      maxHeight: "90vh",
      data: {
        isDialog: true
      }
    });
  }
  isContentTypeActive(type) {
    return this.selectedContentType() === type;
  }
  openPlaylistInfo() {
    this.dialog.open(PlaylistInfoComponent, {
      data: this.currentPlaylist()
    });
  }
  pageSwitch(page) {
    this.pageClicked.emit(page);
    this.xtreamStore.setSelectedContentType(void 0);
  }
  static {
    this.\u0275fac = function NavigationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavigationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavigationComponent, selectors: [["app-navigation"]], inputs: { portalStatus: [1, "portalStatus"], selectedContentType: [1, "selectedContentType"], navigationItems: [1, "navigationItems"] }, outputs: { categoryClick: "categoryClick", pageClicked: "pageClicked" }, decls: 108, vars: 34, consts: [[1, "portal-status-container"], [1, "portal-status-wrapper"], [1, "portal-header"], [1, "portal-icon"], [1, "portal-info"], [1, "portal-name"], [1, "portal-actions"], ["mat-icon-button", "", "routerLink", "/", "routerLinkActive", "active", 1, "action-button", 3, "routerLinkActiveOptions", "matTooltip"], ["mat-icon-button", "", 1, "action-button", 3, "click", "matTooltip"], [1, "nav-section"], [1, "nav-group-label"], ["mat-list-item", "", "routerLink", "./search", "routerLinkActive", "active", 3, "click"], ["matListItemIcon", ""], ["matListItemTitle", ""], ["mat-list-item", "", "routerLink", "./recent", "routerLinkActive", "active", 3, "click"], ["mat-list-item", "", "routerLink", "./favorites", "routerLinkActive", "active", 3, "click"], [1, "navigation-bottom"], ["mat-list-item", "", 3, "click"], [1, "portal-label"]], template: function NavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275text(5, "\n            ");
        \u0275\u0275elementStart(6, "div", 3);
        \u0275\u0275text(7, "\n                ");
        \u0275\u0275elementStart(8, "mat-icon");
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, "\n        ");
        \u0275\u0275elementStart(13, "div", 4);
        \u0275\u0275text(14, "\n            ");
        \u0275\u0275elementStart(15, "span", 5);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, "\n            ");
        \u0275\u0275conditionalCreate(18, NavigationComponent_Conditional_18_Template, 4, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, "\n        ");
        \u0275\u0275elementStart(20, "div", 6);
        \u0275\u0275text(21, "\n            ");
        \u0275\u0275elementStart(22, "button", 7);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275text(24, "\n                ");
        \u0275\u0275elementStart(25, "mat-icon");
        \u0275\u0275text(26, "home");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, "\n            ");
        \u0275\u0275conditionalCreate(29, NavigationComponent_Conditional_29_Template, 8, 3);
        \u0275\u0275elementStart(30, "button", 8);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275listener("click", function NavigationComponent_Template_button_click_30_listener() {
          return ctx.openPlaylistInfo();
        });
        \u0275\u0275text(32, "\n                ");
        \u0275\u0275elementStart(33, "mat-icon");
        \u0275\u0275text(34, "playlist_play");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, "\n\n");
        \u0275\u0275elementStart(40, "div", 9);
        \u0275\u0275text(41, "\n    ");
        \u0275\u0275elementStart(42, "div", 10);
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, "\n    ");
        \u0275\u0275elementStart(46, "mat-nav-list");
        \u0275\u0275text(47, "\n        ");
        \u0275\u0275repeaterCreate(48, NavigationComponent_For_49_Template, 11, 6, null, null, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(50, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, "\n\n");
        \u0275\u0275elementStart(52, "div", 9);
        \u0275\u0275text(53, "\n    ");
        \u0275\u0275elementStart(54, "div", 10);
        \u0275\u0275text(55);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, "\n    ");
        \u0275\u0275elementStart(58, "mat-nav-list");
        \u0275\u0275text(59, "\n        ");
        \u0275\u0275elementStart(60, "a", 11);
        \u0275\u0275listener("click", function NavigationComponent_Template_a_click_60_listener() {
          return ctx.pageSwitch("search");
        });
        \u0275\u0275text(61, "\n            ");
        \u0275\u0275elementStart(62, "mat-icon", 12);
        \u0275\u0275text(63, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(64, "\n            ");
        \u0275\u0275elementStart(65, "span", 13);
        \u0275\u0275text(66);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(68, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(69, "\n        ");
        \u0275\u0275elementStart(70, "a", 14);
        \u0275\u0275listener("click", function NavigationComponent_Template_a_click_70_listener() {
          return ctx.pageSwitch("recent");
        });
        \u0275\u0275text(71, "\n            ");
        \u0275\u0275elementStart(72, "mat-icon", 12);
        \u0275\u0275text(73, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275text(74, "\n            ");
        \u0275\u0275elementStart(75, "span", 13);
        \u0275\u0275text(76);
        \u0275\u0275pipe(77, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(78, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(79, "\n        ");
        \u0275\u0275elementStart(80, "a", 15);
        \u0275\u0275listener("click", function NavigationComponent_Template_a_click_80_listener() {
          return ctx.pageSwitch("favorites");
        });
        \u0275\u0275text(81, "\n            ");
        \u0275\u0275elementStart(82, "mat-icon", 12);
        \u0275\u0275text(83, "favorite");
        \u0275\u0275elementEnd();
        \u0275\u0275text(84, "\n            ");
        \u0275\u0275elementStart(85, "span", 13);
        \u0275\u0275text(86);
        \u0275\u0275pipe(87, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(88, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(89, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(90, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(91, "\n\n");
        \u0275\u0275elementStart(92, "div", 16);
        \u0275\u0275text(93, "\n    ");
        \u0275\u0275elementStart(94, "mat-nav-list");
        \u0275\u0275text(95, "\n        ");
        \u0275\u0275elementStart(96, "a", 17);
        \u0275\u0275listener("click", function NavigationComponent_Template_a_click_96_listener() {
          return ctx.openSettings();
        });
        \u0275\u0275text(97, "\n            ");
        \u0275\u0275elementStart(98, "mat-icon", 12);
        \u0275\u0275text(99, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(100, "\n            ");
        \u0275\u0275elementStart(101, "span", 13);
        \u0275\u0275text(102);
        \u0275\u0275pipe(103, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(104, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(105, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(106, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(107, "\n");
      }
      if (rf & 2) {
        let tmp_3_0;
        \u0275\u0275classMap(ctx.getStatusColor());
        \u0275\u0275advance(6);
        \u0275\u0275classMap(ctx.getStatusColor());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.getStatusIcon());
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(((tmp_3_0 = ctx.currentPlaylist()) == null ? null : tmp_3_0.title) || "Unknown Portal");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.isStalkerPlaylist() ? 18 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(33, _c0))("matTooltip", \u0275\u0275pipeBind1(23, 17, "PORTALS.SIDEBAR.HOME"));
        \u0275\u0275advance(7);
        \u0275\u0275conditional(!ctx.isStalkerPlaylist() ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(31, 19, "PORTALS.SIDEBAR.PLAYLIST_INFO"));
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 21, "PORTALS.SIDEBAR.MAIN"));
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.navigationItems());
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(56, 23, "PORTALS.SIDEBAR.LIBRARY"), "\n    ");
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 25, "PORTALS.SIDEBAR.SEARCH"));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 27, "PORTALS.SIDEBAR.RECENT"));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 29, "PORTALS.SIDEBAR.FAVORITES"));
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 31, "MENU.SETTINGS"));
      }
    }, dependencies: [
      MatIcon,
      MatIconButton,
      MatListModule,
      MatNavList,
      MatListItem,
      MatListItemIcon,
      MatListItemTitle,
      MatTooltip,
      RouterLink,
      RouterLinkActive,
      TranslatePipe
    ], styles: ['\n\n[_nghost-%COMP%] {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.mat-nav-list[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.navigation-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid #333;\n  margin-top: auto;\n  padding-bottom: 16px;\n}\n.active[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n  background: rgba(63, 81, 181, 0.12);\n  color: #3f51b5;\n  border-left: 4px solid #3f51b5;\n}\n.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\nmat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.portal-status-container[_ngcontent-%COMP%] {\n  margin: -10px -10px 0px;\n  padding: 16px;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(18, 18, 18, 0.8) 0%,\n      transparent 100%);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  min-height: 120px;\n}\n.portal-status-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  opacity: 0.8;\n  transition: background 0.3s ease;\n}\n.portal-status-container.status-active[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(76, 175, 80, 0.3) 0%,\n      transparent 100%);\n}\n.portal-status-container.status-inactive[_ngcontent-%COMP%]::before, \n.portal-status-container.status-unavailable[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(244, 67, 54, 0.3) 0%,\n      transparent 100%);\n}\n.portal-status-container.status-expired[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 152, 0, 0.3) 0%,\n      transparent 100%);\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-status-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  height: 100%;\n  min-width: 0;\n  width: 100%;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 4px;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  margin: 0;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-icon.status-active[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-icon.status-inactive[_ngcontent-%COMP%], \n.portal-status-container[_ngcontent-%COMP%]   .portal-icon.status-unavailable[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-icon.status-expired[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-info[_ngcontent-%COMP%]   .portal-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: rgba(255, 255, 255, 0.95);\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 4px;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-info[_ngcontent-%COMP%]   .portal-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  color: rgba(255, 255, 255, 0.7);\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 4px;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  transition: all 0.2s ease;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.portal-status-container[_ngcontent-%COMP%]   .info-button[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  margin-left: 8px;\n}\n.portal-status-container[_ngcontent-%COMP%]   .info-button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.nav-section[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding: 5px 0;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-group-label[_ngcontent-%COMP%] {\n  padding: 0 16px 0;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n  opacity: 0.7;\n}\n.nav-section[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%] {\n  padding: 0;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 8px;\n  overflow: hidden;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationComponent, [{
    type: Component,
    args: [{ selector: "app-navigation", imports: [
      MatIcon,
      MatIconButton,
      MatListModule,
      MatTooltip,
      RouterLink,
      RouterLinkActive,
      TranslatePipe
    ], template: `<div class="portal-status-container" [class]="getStatusColor()">
    <div class="portal-status-wrapper">
        <div class="portal-header">
            <div class="portal-icon" [class]="getStatusColor()">
                <mat-icon>{{ getStatusIcon() }}</mat-icon>
            </div>
        </div>
        <div class="portal-info">
            <span class="portal-name">{{
                currentPlaylist()?.title || 'Unknown Portal'
            }}</span>
            @if (!isStalkerPlaylist()) {
                <span class="portal-label">{{
                    xtreamStore.portalStatus()
                }}</span>
            }
        </div>
        <div class="portal-actions">
            <button
                mat-icon-button
                class="action-button"
                routerLink="/"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                [matTooltip]="'PORTALS.SIDEBAR.HOME' | translate"
            >
                <mat-icon>home</mat-icon>
            </button>
            @if (!isStalkerPlaylist()) {
                <button
                    mat-icon-button
                    class="action-button"
                    (click)="openAccountInfo()"
                    [matTooltip]="'PORTALS.SIDEBAR.ACCOUNT_INFO' | translate"
                >
                    <mat-icon>person</mat-icon>
                </button>
            }
            <button
                mat-icon-button
                class="action-button"
                (click)="openPlaylistInfo()"
                [matTooltip]="'PORTALS.SIDEBAR.PLAYLIST_INFO' | translate"
            >
                <mat-icon>playlist_play</mat-icon>
            </button>
        </div>
    </div>
</div>

<div class="nav-section">
    <div class="nav-group-label">{{ 'PORTALS.SIDEBAR.MAIN' | translate }}</div>
    <mat-nav-list>
        @for (item of navigationItems(); track item.id) {
            <a
                mat-list-item
                [class.active]="isContentTypeActive(item.id)"
                (click)="categoryClick.emit(item.id)"
            >
                <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
                <span matListItemTitle>{{ item.labelKey | translate }}</span>
            </a>
        }
    </mat-nav-list>
</div>

<div class="nav-section">
    <div class="nav-group-label">
        {{ 'PORTALS.SIDEBAR.LIBRARY' | translate }}
    </div>
    <mat-nav-list>
        <a
            mat-list-item
            routerLink="./search"
            routerLinkActive="active"
            (click)="pageSwitch('search')"
        >
            <mat-icon matListItemIcon>search</mat-icon>
            <span matListItemTitle>{{
                'PORTALS.SIDEBAR.SEARCH' | translate
            }}</span>
        </a>
        <a
            mat-list-item
            routerLink="./recent"
            routerLinkActive="active"
            (click)="pageSwitch('recent')"
        >
            <mat-icon matListItemIcon>history</mat-icon>
            <span matListItemTitle>{{
                'PORTALS.SIDEBAR.RECENT' | translate
            }}</span>
        </a>
        <a
            mat-list-item
            routerLink="./favorites"
            routerLinkActive="active"
            (click)="pageSwitch('favorites')"
        >
            <mat-icon matListItemIcon>favorite</mat-icon>
            <span matListItemTitle>{{
                'PORTALS.SIDEBAR.FAVORITES' | translate
            }}</span>
        </a>
    </mat-nav-list>
</div>

<div class="navigation-bottom">
    <mat-nav-list>
        <a mat-list-item (click)="openSettings()">
            <mat-icon matListItemIcon>settings</mat-icon>
            <span matListItemTitle>{{ 'MENU.SETTINGS' | translate }}</span>
        </a>
    </mat-nav-list>
</div>
`, styles: ['/* src/app/xtream-tauri/navigation/navigation.component.scss */\n:host {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.mat-nav-list {\n  padding-top: 0;\n}\n.navigation-bottom {\n  border-top: 1px solid #333;\n  margin-top: auto;\n  padding-bottom: 16px;\n}\n.active {\n  transition: all 0.2s ease;\n  background: rgba(63, 81, 181, 0.12);\n  color: #3f51b5;\n  border-left: 4px solid #3f51b5;\n}\n.active mat-icon {\n  color: #3f51b5;\n}\nmat-divider {\n  margin: 8px 0;\n}\nmat-icon {\n  margin-right: 8px;\n}\n.portal-status-container {\n  margin: -10px -10px 0px;\n  padding: 16px;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(18, 18, 18, 0.8) 0%,\n      transparent 100%);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  min-height: 120px;\n}\n.portal-status-container::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  opacity: 0.8;\n  transition: background 0.3s ease;\n}\n.portal-status-container.status-active::before {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(76, 175, 80, 0.3) 0%,\n      transparent 100%);\n}\n.portal-status-container.status-inactive::before,\n.portal-status-container.status-unavailable::before {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(244, 67, 54, 0.3) 0%,\n      transparent 100%);\n}\n.portal-status-container.status-expired::before {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 152, 0, 0.3) 0%,\n      transparent 100%);\n}\n.portal-status-container .portal-status-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  height: 100%;\n  min-width: 0;\n  width: 100%;\n}\n.portal-status-container .portal-header {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 4px;\n}\n.portal-status-container .portal-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.portal-status-container .portal-icon mat-icon {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  margin: 0;\n}\n.portal-status-container .portal-icon.status-active {\n  color: #4caf50;\n}\n.portal-status-container .portal-icon.status-inactive,\n.portal-status-container .portal-icon.status-unavailable {\n  color: #f44336;\n}\n.portal-status-container .portal-icon.status-expired {\n  color: #ff9800;\n}\n.portal-status-container .portal-info {\n  text-align: center;\n}\n.portal-status-container .portal-info .portal-name {\n  font-size: 16px;\n  font-weight: 600;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: rgba(255, 255, 255, 0.95);\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 4px;\n}\n.portal-status-container .portal-info .portal-label {\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  color: rgba(255, 255, 255, 0.7);\n}\n.portal-status-container .portal-actions {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 4px;\n}\n.portal-status-container .portal-actions .action-button {\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n}\n.portal-status-container .portal-actions .action-button mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  transition: all 0.2s ease;\n}\n.portal-status-container .portal-actions .action-button:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.portal-status-container .portal-actions .action-button:hover mat-icon {\n  transform: scale(1.1);\n}\n.portal-status-container .info-button {\n  opacity: 0.7;\n  margin-left: 8px;\n}\n.portal-status-container .info-button:hover {\n  opacity: 1;\n}\n.nav-section {\n  margin: 10px 0;\n  padding: 5px 0;\n}\n.nav-section .nav-group-label {\n  padding: 0 16px 0;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n  opacity: 0.7;\n}\n.nav-section .mat-nav-list {\n  padding: 0;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 8px;\n  overflow: hidden;\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavigationComponent, { className: "NavigationComponent", filePath: "src/app/xtream-tauri/navigation/navigation.component.ts", lineNumber: 31 });
})();

export {
  NavigationComponent
};
