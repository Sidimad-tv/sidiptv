import {
  SettingsService,
  require_semver
} from "./sidimad-settings-service.js";
import {
  EpgService
} from "./sidimad-epg.js";
import {
  HeaderComponent
} from "./sidimad-about.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./sidimad-select.js";
import {
  DialogService
} from "./sidimad-dialogs.js";
import {
  PlaylistsService
} from "./sidimad-database.js";
import {
  Language,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatDialogModule,
  MatDialogTitle,
  MatError,
  MatFormField,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSnackBar,
  Router,
  SettingsStore,
  Store,
  StreamFormat,
  Theme,
  VideoPlayer,
  addManyPlaylists,
  removeAllPlaylists,
  selectIsEpgAvailable
} from "./sidimad-store.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./sidimad-tooltip.js";
import {
  MatDivider,
  MatDividerModule
} from "./sidimad-divider.js";
import {
  DataService,
  DefaultValueAccessor,
  FormArray,
  FormArrayName,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  SETTINGS_UPDATE,
  SET_MPV_PLAYER_PATH,
  SET_VLC_PLAYER_PATH,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  Validators,
  ɵNgNoValidate
} from "./sidimad-browser.js";
import {
  CommonModule,
  Component,
  Inject,
  Input,
  KeyValuePipe,
  Optional,
  __spreadProps,
  __spreadValues,
  __toESM,
  inject,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./sidimad-app.js";

// src/app/settings/settings.component.ts
var semver = __toESM(require_semver());
function SettingsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n  ");
    \u0275\u0275element(1, "app-header", 17);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275text(5, "\n");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 2, "SETTINGS.TITLE"))("subtitle", \u0275\u0275pipeBind1(3, 4, "SETTINGS.SUBTITLE") + ". " + \u0275\u0275pipeBind1(4, 6, "SETTINGS.DESCRIPTION"));
  }
}
function SettingsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n  ");
    \u0275\u0275elementStart(1, "h2", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "SETTINGS.TITLE"));
  }
}
function SettingsComponent_Conditional_6_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "mat-form-field", 22);
    \u0275\u0275text(4, "\n                  ");
    \u0275\u0275elementStart(5, "mat-label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n                  ");
    \u0275\u0275element(9, "input", 23, 0);
    \u0275\u0275text(11, "\n                  ");
    \u0275\u0275elementStart(12, "mat-error");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n                ");
    \u0275\u0275elementStart(17, "button", 24);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Conditional_6_For_15_Template_button_click_17_listener() {
      const \u0275$index_42_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.refreshEpg(ctx_r3.epgUrl.value[\u0275$index_42_r3]));
    });
    \u0275\u0275text(19, "\n                  ");
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n                ");
    \u0275\u0275elementStart(24, "button", 25);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Conditional_6_For_15_Template_button_click_24_listener() {
      const \u0275$index_42_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeEpgSource(\u0275$index_42_r3));
    });
    \u0275\u0275text(26, "\n                  ");
    \u0275\u0275elementStart(27, "mat-icon");
    \u0275\u0275text(28, "remove");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, "\n            ");
  }
  if (rf & 2) {
    const \u0275$index_42_r3 = ctx.$index;
    const epgField_r5 = \u0275\u0275reference(10);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "SETTINGS.EPG_URL_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formControlName", \u0275$index_42_r3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 8, "SETTINGS.EPG_URL_ERROR"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(18, 10, "SETTINGS.REFRESH_EPG"))("disabled", epgField_r5.value === "");
    \u0275\u0275advance(7);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(25, 12, "SETTINGS.REFRESH_EPG"));
  }
}
function SettingsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementContainerStart(1, 19);
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275text(4, "\n          ");
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Add single or multiple URLs as EPG sources");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n          ");
    \u0275\u0275elementStart(12, "div", 4);
    \u0275\u0275text(13, "\n            ");
    \u0275\u0275repeaterCreate(14, SettingsComponent_Conditional_6_For_15_Template, 32, 14, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(16, "button", 20);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_6_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addEpgSource());
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n        ");
    \u0275\u0275element(22, "mat-divider");
    \u0275\u0275text(23, "\n      ");
    \u0275\u0275elementContainerEnd();
    \u0275\u0275text(24, "\n    ");
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(7, 2, "SETTINGS.EPG_URL_LABEL"), "\n            ");
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r3.epgUrl.controls);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n              ", \u0275\u0275pipeBind1(18, 4, "SETTINGS.ADD_EPG_SOURCE"), "\n            ");
  }
}
function SettingsComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "mat-option", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    const player_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", player_r6.id);
    \u0275\u0275attribute("data-test-id", player_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", player_r6.label, "\n              ");
  }
}
function SettingsComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n        ");
    \u0275\u0275elementStart(11, "div", 4);
    \u0275\u0275text(12, "\n          ");
    \u0275\u0275elementStart(13, "mat-form-field", 5);
    \u0275\u0275text(14, "\n            ");
    \u0275\u0275elementStart(15, "mat-label", 27);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n            ");
    \u0275\u0275element(19, "input", 28);
    \u0275\u0275text(20, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n    ");
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n          ", \u0275\u0275pipeBind1(5, 3, "SETTINGS.MPV_PLAYER_PATH_LABEL"), "\n          ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(8, 5, "SETTINGS.MPV_PLAYER_PATH_DESCRIPTION"), "\n          ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 7, "SETTINGS.MPV_PLAYER_PATH"));
  }
}
function SettingsComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n      ");
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n        ");
    \u0275\u0275elementStart(11, "div", 4);
    \u0275\u0275text(12, "\n          ");
    \u0275\u0275elementStart(13, "mat-form-field", 5);
    \u0275\u0275text(14, "\n            ");
    \u0275\u0275elementStart(15, "mat-label", 29);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n            ");
    \u0275\u0275element(19, "input", 30);
    \u0275\u0275text(20, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n    ");
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n          ", \u0275\u0275pipeBind1(5, 3, "SETTINGS.VLC_PLAYER_PATH_LABEL"), "\n          ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(8, 5, "SETTINGS.VLC_PLAYER_PATH_DESCRIPTION"), "\n          ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 7, "SETTINGS.VLC_PLAYER_PATH"));
  }
}
function SettingsComponent_For_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "mat-option", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    const streamFormat_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", streamFormat_r7.value);
    \u0275\u0275attribute("data-test-id", streamFormat_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", streamFormat_r7.value, "\n              ");
  }
}
function SettingsComponent_For_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "mat-option", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n              ");
  }
  if (rf & 2) {
    const language_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", language_r8.value);
    \u0275\u0275attribute("data-test-id", language_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "LANGUAGES." + language_r8.key));
  }
}
function SettingsComponent_For_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "mat-option", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n                ");
  }
  if (rf & 2) {
    const theme_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", theme_r9.value);
    \u0275\u0275attribute("data-test-id", theme_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "THEMES." + theme_r9.value));
  }
}
function SettingsComponent_Conditional_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n          ");
    \u0275\u0275element(1, "mat-divider");
    \u0275\u0275text(2, "\n          ");
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n            ");
    \u0275\u0275elementStart(13, "div", 10);
    \u0275\u0275text(14, "\n              ");
    \u0275\u0275elementStart(15, "mat-form-field", 22);
    \u0275\u0275text(16, "\n                ");
    \u0275\u0275element(17, "input", 31);
    \u0275\u0275text(18, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\n              ", \u0275\u0275pipeBind1(7, 2, "SETTINGS.REMOTE_CONTROL_PORT"), "\n              ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(10, 4, "SETTINGS.REMOTE_CONTROL_PORT_DESCRIPTION"), "\n              ");
  }
}
function SettingsComponent_Conditional_202_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n          ");
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "a", 32);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n      ");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(3, 2, "SETTINGS.EPG_NOTE"), "\n            \xA0");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "SETTINGS.EPG_NOTE_URL_TEXT"));
  }
}
var SettingsComponent = class _SettingsComponent {
  /**
   * Creates an instance of SettingsComponent and injects
   * required dependencies into the component
   */
  constructor(dialogService, dataService, epgService, formBuilder, playlistsService, router, settingsService, snackBar, store, translate, matDialog, data) {
    this.dialogService = dialogService;
    this.dataService = dataService;
    this.epgService = epgService;
    this.formBuilder = formBuilder;
    this.playlistsService = playlistsService;
    this.router = router;
    this.settingsService = settingsService;
    this.snackBar = snackBar;
    this.store = store;
    this.translate = translate;
    this.matDialog = matDialog;
    this.isDialog = false;
    this.languageEnum = Language;
    this.streamFormatEnum = StreamFormat;
    this.isTauri = this.dataService.getAppEnvironment() === "tauri";
    this.isPwa = this.dataService.getAppEnvironment() === "pwa";
    this.osPlayers = [
      {
        id: VideoPlayer.MPV,
        label: "MPV Player"
      },
      {
        id: VideoPlayer.VLC,
        label: "VLC"
      }
    ];
    this.players = [
      {
        id: VideoPlayer.Html5Player,
        label: "HTML5 Video Player"
      },
      {
        id: VideoPlayer.VideoJs,
        label: "VideoJs Player"
      },
      {
        id: VideoPlayer.ArtPlayer,
        label: "ArtPlayer"
      },
      ...this.isTauri ? this.osPlayers : []
    ];
    this.epgAvailable$ = this.store.select(selectIsEpgAvailable);
    this.themeEnum = Theme;
    this.settingsForm = this.formBuilder.group(__spreadProps(__spreadValues({
      player: [VideoPlayer.VideoJs]
    }, this.isTauri ? { epgUrl: new FormArray([]) } : {}), {
      streamFormat: StreamFormat.M3u8StreamFormat,
      language: Language.ENGLISH,
      showCaptions: false,
      theme: Theme.LightTheme,
      mpvPlayerPath: "",
      vlcPlayerPath: "",
      remoteControl: false,
      remoteControlPort: 3e3
    }));
    this.epgUrl = this.settingsForm.get("epgUrl");
    this.settingsStore = inject(SettingsStore);
    this.isDialog = data?.isDialog ?? false;
  }
  /**
   * Reads the config object from the browsers
   * storage (indexed db)
   */
  ngOnInit() {
    this.setSettings();
    this.checkAppVersion();
  }
  /**
   * Sets saved settings from the indexed db store
   */
  setSettings() {
    const currentSettings = this.settingsStore.getSettings();
    this.settingsForm.patchValue(currentSettings);
    if (this.isTauri && currentSettings.epgUrl) {
      this.setEpgUrls(currentSettings.epgUrl);
    }
  }
  /**
   * Sets the epg urls to the form array
   * @param epgUrls urls of the EPG sources
   */
  setEpgUrls(epgUrls) {
    const URL_REGEX = /^(http|https|file):\/\/[^ "]+$/;
    const urls = Array.isArray(epgUrls) ? epgUrls : [epgUrls];
    const filteredUrls = urls.map((url) => url.trim()).filter((url) => url !== "");
    filteredUrls.forEach((url) => {
      this.epgUrl.push(new FormControl(url, [Validators.pattern(URL_REGEX)]));
    });
  }
  /**
   * Checks whether the latest version of the application
   * is used and updates the version message in the
   * settings UI
   */
  checkAppVersion() {
    this.settingsService.getAppVersion().pipe(take(1)).subscribe((version) => this.showVersionInformation(version));
  }
  /**
   * Updates the message in settings UI about the used
   * version of the app
   * @param currentVersion current version of the application
   */
  showVersionInformation(currentVersion) {
    const isOutdated = this.isCurrentVersionOutdated(currentVersion);
    if (isOutdated) {
      this.updateMessage = `${this.translate.instant("SETTINGS.NEW_VERSION_AVAILABLE")}: ${currentVersion}`;
    } else {
      this.updateMessage = this.translate.instant("SETTINGS.LATEST_VERSION");
    }
  }
  /**
   * Compares actual with latest version of the
   * application
   * @param latestVersion latest version
   * @returns returns true if an update is available
   */
  isCurrentVersionOutdated(latestVersion) {
    this.version = this.dataService.getAppVersion();
    return semver.lt(this.version, latestVersion);
  }
  /**
   * Triggers on form submit and saves the config object to
   * the indexed db store
   */
  onSubmit() {
    this.settingsStore.updateSettings(this.settingsForm.value).then(() => {
      this.applyChangedSettings();
      this.dataService.sendIpcEvent(SETTINGS_UPDATE, this.settingsForm.value);
      this.dataService.sendIpcEvent(SET_MPV_PLAYER_PATH, this.settingsForm.value.mpvPlayerPath);
      this.dataService.sendIpcEvent(SET_VLC_PLAYER_PATH, this.settingsForm.value.mpvPlayerPath);
    });
    if (this.isDialog) {
      this.matDialog.closeAll();
    }
  }
  /**
   * Applies the changed settings to the app
   */
  applyChangedSettings() {
    this.settingsForm.markAsPristine();
    if (this.isTauri) {
      let epgUrls = this.settingsForm.value.epgUrl;
      if (epgUrls) {
        if (!Array.isArray(epgUrls)) {
          epgUrls = [epgUrls];
        }
        epgUrls = epgUrls.filter((url) => url !== "");
        if (epgUrls.length > 0) {
          this.epgService.fetchEpg(epgUrls);
        }
      }
    }
    this.translate.use(this.settingsForm.value.language);
    this.settingsService.changeTheme(this.settingsForm.value.theme);
    this.snackBar.open(this.translate.instant("SETTINGS.SETTINGS_SAVED"), null, {
      duration: 2e3,
      horizontalPosition: "start"
    });
  }
  /**
   * Navigates back to the applications homepage
   */
  backToHome() {
    if (this.isDialog) {
      this.matDialog.closeAll();
    } else {
      this.router.navigateByUrl("/");
    }
  }
  /**
   * Fetches and updates EPG from the given URL
   * @param url epg source url
   */
  refreshEpg(url) {
    this.epgService.fetchEpg([url]);
  }
  /**
   * Initializes new entry in form array for EPG URL
   */
  addEpgSource() {
    this.epgUrl.insert(this.epgUrl.length, new FormControl("", {
      validators: [
        Validators.pattern(/^(http|https|file):\/\/[^ "]+$/)
      ]
    }));
  }
  /**
   * Removes entry from form array for EPG URL
   * @param index index of the item to remove
   */
  removeEpgSource(index) {
    this.epgUrl.removeAt(index);
    this.settingsForm.markAsDirty();
  }
  exportData() {
    this.playlistsService.getAllData().pipe(take(1)).subscribe((data) => {
      const blob = new Blob([JSON.stringify(data)], {
        type: "text/plain"
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "playlists.json";
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
  importData() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.addEventListener("change", (event) => {
      const target = event.target;
      const file = target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const contents = reader.result;
          try {
            const parsedPlaylists = JSON.parse(contents.toString());
            if (!Array.isArray(parsedPlaylists)) {
              this.snackBar.open(this.translate.instant("SETTINGS.IMPORT_ERROR"), null, {
                duration: 2e3
              });
            } else {
              this.store.dispatch(addManyPlaylists({
                playlists: parsedPlaylists
              }));
            }
          } catch (error) {
            this.snackBar.open(this.translate.instant("SETTINGS.IMPORT_ERROR"), null, {
              duration: 2e3
            });
            console.error(error);
          }
        };
        reader.readAsText(file);
      }
    });
    input.click();
  }
  removeAll() {
    this.dialogService.openConfirmDialog({
      title: this.translate.instant("SETTINGS.REMOVE_DIALOG.TITLE"),
      message: this.translate.instant("SETTINGS.REMOVE_DIALOG.MESSAGE"),
      onConfirm: () => this.store.dispatch(removeAllPlaylists())
    });
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(EpgService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PlaylistsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MAT_DIALOG_DATA, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["ng-component"]], inputs: { isDialog: "isDialog" }, decls: 224, vars: 91, consts: [["epgField", ""], ["data-test-id", "settings-container", 1, "settings-container"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "row"], [1, "column"], ["appearance", "outline"], ["formControlName", "player", "data-test-id", "select-video-player"], ["formControlName", "streamFormat", "data-test-id", "select-stream-format"], ["formControlName", "language", "data-test-id", "select-language"], ["formControlName", "theme", "data-test-id", "select-theme"], [1, "column", 2, "margin-right", "10px"], ["formControlName", "showCaptions", 1, "column"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["align", "end", 1, "action-buttons"], ["mat-button", "", "color", "accent", "type", "reset", "data-test-id", "back-to-home", 3, "click"], ["mat-button", "", "color", "accent", "type", "submit", "data-test-id", "save-settings", 3, "disabled"], [3, "title", "subtitle"], ["mat-dialog-title", ""], ["formArrayName", "epgUrl"], ["mat-button", "", "color", "accent", "type", "button", 3, "click"], [2, "display", "flex"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "url", 3, "formControlName"], ["matLine", "", "mat-icon-button", "", "color", "accent", "type", "button", 3, "click", "matTooltip", "disabled"], ["mat-icon-button", "", "matLine", "", "color", "accent", "type", "button", 3, "click", "matTooltip"], [3, "value"], ["for", "mpvPlayerPath"], ["matInput", "", "type", "text", "id", "mpvPlayerPath", "formControlName", "mpvPlayerPath"], ["for", "vlcPlayerPath"], ["matInput", "", "type", "text", "id", "vlcPlayerPath", "formControlName", "vlcPlayerPath"], ["matInput", "", "type", "text", "id", "remoteControlPort", "formControlName", "remoteControlPort"], ["href", "https://github.com/4gray/iptvnator/releases"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SettingsComponent_Conditional_0_Template, 6, 8)(1, SettingsComponent_Conditional_1_Template, 5, 3);
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275text(3, "\n  ");
        \u0275\u0275elementStart(4, "form", 2);
        \u0275\u0275listener("ngSubmit", function SettingsComponent_Template_form_ngSubmit_4_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275text(5, "\n    ");
        \u0275\u0275conditionalCreate(6, SettingsComponent_Conditional_6_Template, 25, 6);
        \u0275\u0275elementStart(7, "div", 3);
        \u0275\u0275text(8, "\n      ");
        \u0275\u0275elementStart(9, "div", 4);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementStart(12, "p");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n      ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n      ");
        \u0275\u0275elementStart(17, "div", 4);
        \u0275\u0275text(18, "\n        ");
        \u0275\u0275elementStart(19, "mat-form-field", 5);
        \u0275\u0275text(20, "\n          ");
        \u0275\u0275elementStart(21, "mat-label");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, "\n          ");
        \u0275\u0275elementStart(25, "mat-select", 6);
        \u0275\u0275text(26, "\n            ");
        \u0275\u0275repeaterCreate(27, SettingsComponent_For_28_Template, 4, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, "\n      ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, "\n    ");
        \u0275\u0275conditionalCreate(33, SettingsComponent_Conditional_33_Template, 24, 9);
        \u0275\u0275conditionalCreate(34, SettingsComponent_Conditional_34_Template, 24, 9);
        \u0275\u0275element(35, "mat-divider");
        \u0275\u0275text(36, "\n    ");
        \u0275\u0275elementStart(37, "div", 3);
        \u0275\u0275text(38, "\n      ");
        \u0275\u0275elementStart(39, "div", 4);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementStart(42, "p");
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, "\n      ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, "\n      ");
        \u0275\u0275elementStart(47, "div", 4);
        \u0275\u0275text(48, "\n        ");
        \u0275\u0275elementStart(49, "mat-form-field", 5);
        \u0275\u0275text(50, "\n          ");
        \u0275\u0275elementStart(51, "mat-label");
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(54, "\n          ");
        \u0275\u0275elementStart(55, "mat-select", 7);
        \u0275\u0275text(56, "\n            ");
        \u0275\u0275repeaterCreate(57, SettingsComponent_For_58_Template, 4, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(59, "keyvalue");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(61, "\n      ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(62, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, "\n    ");
        \u0275\u0275element(64, "mat-divider");
        \u0275\u0275text(65, "\n    ");
        \u0275\u0275elementStart(66, "div", 3);
        \u0275\u0275text(67, "\n      ");
        \u0275\u0275elementStart(68, "div", 4);
        \u0275\u0275text(69);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275elementStart(71, "p");
        \u0275\u0275text(72);
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(74, "\n      ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(75, "\n      ");
        \u0275\u0275elementStart(76, "div", 4);
        \u0275\u0275text(77, "\n        ");
        \u0275\u0275elementStart(78, "mat-form-field", 5);
        \u0275\u0275text(79, "\n          ");
        \u0275\u0275elementStart(80, "mat-label");
        \u0275\u0275text(81);
        \u0275\u0275pipe(82, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(83, "\n          ");
        \u0275\u0275elementStart(84, "mat-select", 8);
        \u0275\u0275text(85, "\n            ");
        \u0275\u0275repeaterCreate(86, SettingsComponent_For_87_Template, 5, 5, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(88, "keyvalue");
        \u0275\u0275elementEnd();
        \u0275\u0275text(89, "\n          ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(90, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(91, "\n      ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(92, "\n      ");
        \u0275\u0275element(93, "mat-divider");
        \u0275\u0275text(94, "\n      ");
        \u0275\u0275elementStart(95, "div", 3);
        \u0275\u0275text(96, "\n        ");
        \u0275\u0275elementStart(97, "div", 4);
        \u0275\u0275text(98);
        \u0275\u0275pipe(99, "translate");
        \u0275\u0275elementStart(100, "p");
        \u0275\u0275text(101);
        \u0275\u0275pipe(102, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(103, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(104, "\n        ");
        \u0275\u0275elementStart(105, "div", 4);
        \u0275\u0275text(106, "\n          ");
        \u0275\u0275elementStart(107, "mat-form-field", 5);
        \u0275\u0275text(108, "\n            ");
        \u0275\u0275elementStart(109, "mat-label");
        \u0275\u0275text(110);
        \u0275\u0275pipe(111, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(112, "\n            ");
        \u0275\u0275elementStart(113, "mat-select", 9);
        \u0275\u0275text(114, "\n              ");
        \u0275\u0275repeaterCreate(115, SettingsComponent_For_116_Template, 5, 5, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(117, "keyvalue");
        \u0275\u0275elementEnd();
        \u0275\u0275text(118, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(119, "\n          ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(120, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(121, "\n        ");
        \u0275\u0275element(122, "mat-divider");
        \u0275\u0275text(123, "\n        ");
        \u0275\u0275elementStart(124, "div", 3);
        \u0275\u0275text(125, "\n          ");
        \u0275\u0275elementStart(126, "div", 4);
        \u0275\u0275text(127);
        \u0275\u0275pipe(128, "translate");
        \u0275\u0275elementStart(129, "p");
        \u0275\u0275text(130);
        \u0275\u0275pipe(131, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(132, "\n          ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(133, "\n          ");
        \u0275\u0275elementStart(134, "div", 10);
        \u0275\u0275text(135, "\n            ");
        \u0275\u0275element(136, "mat-checkbox", 11);
        \u0275\u0275text(137, "\n          ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(138, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(139, "\n        ");
        \u0275\u0275text(140, "\n        ");
        \u0275\u0275conditionalCreate(141, SettingsComponent_Conditional_141_Template, 22, 6);
        \u0275\u0275element(142, "mat-divider");
        \u0275\u0275text(143, "\n        ");
        \u0275\u0275elementStart(144, "div", 3);
        \u0275\u0275text(145, "\n          ");
        \u0275\u0275elementStart(146, "div", 4);
        \u0275\u0275text(147);
        \u0275\u0275pipe(148, "translate");
        \u0275\u0275elementStart(149, "p");
        \u0275\u0275text(150);
        \u0275\u0275pipe(151, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(152, "\n          ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(153, "\n          ");
        \u0275\u0275elementStart(154, "div", 4);
        \u0275\u0275text(155);
        \u0275\u0275element(156, "br");
        \u0275\u0275text(157);
        \u0275\u0275elementEnd();
        \u0275\u0275text(158, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(159, "\n        ");
        \u0275\u0275element(160, "mat-divider");
        \u0275\u0275text(161, "\n        ");
        \u0275\u0275elementStart(162, "div", 3);
        \u0275\u0275text(163, "\n          ");
        \u0275\u0275elementStart(164, "div", 4);
        \u0275\u0275text(165);
        \u0275\u0275pipe(166, "translate");
        \u0275\u0275elementStart(167, "p");
        \u0275\u0275text(168);
        \u0275\u0275pipe(169, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(170, "\n          ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(171, "\n          ");
        \u0275\u0275elementStart(172, "div", 4);
        \u0275\u0275text(173, "\n            ");
        \u0275\u0275elementStart(174, "button", 12);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_174_listener($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return ctx.importData();
        });
        \u0275\u0275text(175);
        \u0275\u0275pipe(176, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(177, "\n            ");
        \u0275\u0275elementStart(178, "button", 12);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_178_listener($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return ctx.exportData();
        });
        \u0275\u0275text(179);
        \u0275\u0275pipe(180, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(181, "\n          ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(182, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(183, "\n\n        ");
        \u0275\u0275elementStart(184, "div", 3);
        \u0275\u0275text(185, "\n          ");
        \u0275\u0275elementStart(186, "div", 4);
        \u0275\u0275text(187);
        \u0275\u0275pipe(188, "translate");
        \u0275\u0275elementStart(189, "p");
        \u0275\u0275text(190);
        \u0275\u0275pipe(191, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(192, "\n          ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(193, "\n          ");
        \u0275\u0275elementStart(194, "div", 4);
        \u0275\u0275text(195, "\n            ");
        \u0275\u0275elementStart(196, "button", 13);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_196_listener($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return ctx.removeAll();
        });
        \u0275\u0275text(197);
        \u0275\u0275pipe(198, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(199, "\n          ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(200, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(201, "\n\n        ");
        \u0275\u0275conditionalCreate(202, SettingsComponent_Conditional_202_Template, 9, 6);
        \u0275\u0275element(203, "mat-divider");
        \u0275\u0275text(204, "\n      ");
        \u0275\u0275elementStart(205, "div", 14);
        \u0275\u0275text(206, "\n        ");
        \u0275\u0275elementStart(207, "button", 15);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_207_listener() {
          return ctx.backToHome();
        });
        \u0275\u0275text(208, "\n          ");
        \u0275\u0275elementStart(209, "mat-icon");
        \u0275\u0275text(210, "chevron_left");
        \u0275\u0275elementEnd();
        \u0275\u0275text(211);
        \u0275\u0275pipe(212, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(213, "\n        ");
        \u0275\u0275elementStart(214, "button", 16);
        \u0275\u0275text(215, "\n          ");
        \u0275\u0275elementStart(216, "mat-icon");
        \u0275\u0275text(217, "save");
        \u0275\u0275elementEnd();
        \u0275\u0275text(218);
        \u0275\u0275pipe(219, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(220, "\n      ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(221, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(222, "\n  ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(223, "\n");
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.isDialog ? 0 : 1);
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.settingsForm);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isTauri ? 6 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(11, 35, "SETTINGS.VIDEO_PLAYER_LABEL"), "\n        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 37, "SETTINGS.VIDEO_PLAYER_DESCRIPTION"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 39, "SETTINGS.VIDEO_PLAYER_PLACEHOLDER"));
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.players);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.settingsForm.value.player === "mpv" ? 33 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.settingsForm.value.player === "vlc" ? 34 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(41, 41, "SETTINGS.STREAM_FORMAT"), "\n        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 43, "SETTINGS.STREAM_FORMAT_DESCRIPTION"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 45, "SETTINGS.VIDEO_PLAYER_PLACEHOLDER"));
        \u0275\u0275advance(5);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(59, 47, ctx.streamFormatEnum));
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(70, 49, "SETTINGS.LANGUAGE"), "\n        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 51, "SETTINGS.LANGUAGE_DESCRIPTION"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(82, 53, "SETTINGS.VIDEO_PLAYER_PLACEHOLDER"));
        \u0275\u0275advance(5);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(88, 55, ctx.languageEnum));
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1("\n          ", \u0275\u0275pipeBind1(99, 57, "SETTINGS.THEME"), "\n          ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 59, "SETTINGS.THEME_DESCRIPTION"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(111, 61, "SETTINGS.VIDEO_PLAYER_PLACEHOLDER"));
        \u0275\u0275advance(5);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(117, 63, ctx.themeEnum));
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(128, 65, "SETTINGS.SHOW_CAPTIONS"), "\n            ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(131, 67, "SETTINGS.SHOW_CAPTIONS_DESCRIPTION"));
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.settingsForm.value.remoteControl === true ? 141 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(148, 69, ""), "\n            ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(151, 71, ""));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\n            ", "", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\n            ", "", "\n          ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(166, 73, "SETTINGS.IMPORT_EXPORT_DATA"), "\n            ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n              ", \u0275\u0275pipeBind1(169, 75, "SETTINGS.IMPORT_EXPORT_DATA_DESCRIPTION"), "\n            ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("\n              ", \u0275\u0275pipeBind1(176, 77, "SETTINGS.IMPORT_DATA"), "\n            ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n              ", \u0275\u0275pipeBind1(180, 79, "SETTINGS.EXPORT_DATA"), "\n            ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(188, 81, "SETTINGS.REMOVE_ALL"), "\n            ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n              ", \u0275\u0275pipeBind1(191, 83, "SETTINGS.REMOVE_ALL_DESCRIPTION"), "\n            ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("\n              ", \u0275\u0275pipeBind1(198, 85, "SETTINGS.REMOVE_ALL_BUTTON"), "\n            ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(-1);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("\n          ", \u0275\u0275pipeBind1(212, 87, "SETTINGS.BACK_TO_HOME"), "\n        ");
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.settingsForm.pristine || !ctx.settingsForm.valid);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n          ", \u0275\u0275pipeBind1(219, 89, "SETTINGS.SAVE_CHANGES"), "\n        ");
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      HeaderComponent,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatCheckboxModule,
      MatCheckbox,
      MatDividerModule,
      MatDivider,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatFormField,
      MatLabel,
      MatError,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatTooltipModule,
      MatTooltip,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      FormArrayName,
      TranslateModule,
      MatDialogModule,
      MatDialogTitle,
      KeyValuePipe,
      TranslatePipe
    ], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n  text-transform: uppercase;\n}\n.settings-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: calc(100vh - 100px);\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px;\n}\n.row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  text-align: right;\n}\n.row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2)   mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.column[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.column[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  opacity: 0.6;\n  padding: 2px 0;\n  margin: 0;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ imports: [
      CommonModule,
      FormsModule,
      HeaderComponent,
      MatButtonModule,
      MatCheckboxModule,
      MatDividerModule,
      MatIconModule,
      MatInputModule,
      MatSelectModule,
      MatTooltipModule,
      ReactiveFormsModule,
      TranslateModule,
      MatDialogModule
    ], template: `@if (!isDialog) {
  <app-header
    [title]="'SETTINGS.TITLE' | translate"
        [subtitle]="
            ('SETTINGS.SUBTITLE' | translate) +
            '. ' +
            ('SETTINGS.DESCRIPTION' | translate)
        "
    />
} @else {
  <h2 mat-dialog-title>{{ 'SETTINGS.TITLE' | translate }}</h2>
}

<div class="settings-container" data-test-id="settings-container">
  <form [formGroup]="settingsForm" (ngSubmit)="onSubmit()" novalidate>
    @if (isTauri) {
      <ng-container formArrayName="epgUrl">
        <div class="row">
          <div class="column">
            {{ 'SETTINGS.EPG_URL_LABEL' | translate }}
            <p>Add single or multiple URLs as EPG sources</p>
          </div>
          <div class="column">
            @for (_ of epgUrl.controls; track _; let i = $index) {
              <div
                style="display: flex"
                >
                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>{{
                    'SETTINGS.EPG_URL_PLACEHOLDER' | translate
                  }}</mat-label>
                  <input
                    matInput
                    type="url"
                    [formControlName]="i"
                    #epgField
                    />
                  <mat-error>{{
                    'SETTINGS.EPG_URL_ERROR' | translate
                  }}</mat-error>
                </mat-form-field>
                <button
                  matLine
                  mat-icon-button
                  color="accent"
                  [matTooltip]="'SETTINGS.REFRESH_EPG' | translate"
                  type="button"
                  [disabled]="epgField.value === ''"
                  (click)="refreshEpg(epgUrl.value[i])"
                  >
                  <mat-icon>refresh</mat-icon>
                </button>
                <button
                  mat-icon-button
                  matLine
                  color="accent"
                  [matTooltip]="'SETTINGS.REFRESH_EPG' | translate"
                  type="button"
                  (click)="removeEpgSource(i)"
                  >
                  <mat-icon>remove</mat-icon>
                </button>
              </div>
            }
            <button
              mat-button
              color="accent"
              type="button"
              (click)="addEpgSource()"
              >
              {{ 'SETTINGS.ADD_EPG_SOURCE' | translate }}
            </button>
          </div>
        </div>
        <mat-divider />
      </ng-container>
    }
    <div class="row">
      <div class="column">
        {{ 'SETTINGS.VIDEO_PLAYER_LABEL' | translate }}
        <p>{{ 'SETTINGS.VIDEO_PLAYER_DESCRIPTION' | translate }}</p>
      </div>
      <div class="column">
        <mat-form-field appearance="outline">
          <mat-label>{{
            'SETTINGS.VIDEO_PLAYER_PLACEHOLDER' | translate
          }}</mat-label>
          <mat-select
            formControlName="player"
            data-test-id="select-video-player"
            >
            @for (player of players; track player) {
              <mat-option
                [value]="player.id"
                [attr.data-test-id]="player.id"
                >{{ player.label }}
              </mat-option>
            }
          </mat-select>
        </mat-form-field>
      </div>
    </div>
    @if (settingsForm.value.player === 'mpv') {
      <div class="row">
        <div class="column">
          {{ 'SETTINGS.MPV_PLAYER_PATH_LABEL' | translate }}
          <p>
            {{ 'SETTINGS.MPV_PLAYER_PATH_DESCRIPTION' | translate }}
          </p>
        </div>
        <div class="column">
          <mat-form-field appearance="outline">
            <mat-label for="mpvPlayerPath">{{
              'SETTINGS.MPV_PLAYER_PATH' | translate
            }}</mat-label>
            <input
              matInput
              type="text"
              id="mpvPlayerPath"
              formControlName="mpvPlayerPath"
              />
          </mat-form-field>
        </div>
      </div>
    }
    @if (settingsForm.value.player === 'vlc') {
      <div class="row">
        <div class="column">
          {{ 'SETTINGS.VLC_PLAYER_PATH_LABEL' | translate }}
          <p>
            {{ 'SETTINGS.VLC_PLAYER_PATH_DESCRIPTION' | translate }}
          </p>
        </div>
        <div class="column">
          <mat-form-field appearance="outline">
            <mat-label for="vlcPlayerPath">{{
              'SETTINGS.VLC_PLAYER_PATH' | translate
            }}</mat-label>
            <input
              matInput
              type="text"
              id="vlcPlayerPath"
              formControlName="vlcPlayerPath"
              />
          </mat-form-field>
        </div>
      </div>
    }
    <mat-divider />
    <div class="row">
      <div class="column">
        {{ 'SETTINGS.STREAM_FORMAT' | translate }}
        <p>{{ 'SETTINGS.STREAM_FORMAT_DESCRIPTION' | translate }}</p>
      </div>
      <div class="column">
        <mat-form-field appearance="outline">
          <mat-label>{{
            'SETTINGS.VIDEO_PLAYER_PLACEHOLDER' | translate
          }}</mat-label>
          <mat-select
            formControlName="streamFormat"
            data-test-id="select-stream-format"
            >
            @for (streamFormat of streamFormatEnum | keyvalue; track streamFormat) {
              <mat-option
                [value]="streamFormat.value"
                [attr.data-test-id]="streamFormat.value"
                >{{ streamFormat.value }}
              </mat-option>
            }
          </mat-select>
        </mat-form-field>
      </div>
    </div>
    <mat-divider />
    <div class="row">
      <div class="column">
        {{ 'SETTINGS.LANGUAGE' | translate }}
        <p>{{ 'SETTINGS.LANGUAGE_DESCRIPTION' | translate }}</p>
      </div>
      <div class="column">
        <mat-form-field appearance="outline">
          <mat-label>{{
            'SETTINGS.VIDEO_PLAYER_PLACEHOLDER' | translate
          }}</mat-label>
          <mat-select
            formControlName="language"
            data-test-id="select-language"
            >
            @for (language of languageEnum | keyvalue; track language) {
              <mat-option
                [value]="language.value"
                [attr.data-test-id]="language.value"
                >{{
                'LANGUAGES.' + language.key | translate
                }}</mat-option
                >
              }
            </mat-select>
          </mat-form-field>
        </div>
      </div>
      <mat-divider />
      <div class="row">
        <div class="column">
          {{ 'SETTINGS.THEME' | translate }}
          <p>{{ 'SETTINGS.THEME_DESCRIPTION' | translate }}</p>
        </div>
        <div class="column">
          <mat-form-field appearance="outline">
            <mat-label>{{
              'SETTINGS.VIDEO_PLAYER_PLACEHOLDER' | translate
            }}</mat-label>
            <mat-select
              formControlName="theme"
              data-test-id="select-theme"
              >
              @for (theme of themeEnum | keyvalue; track theme) {
                <mat-option
                  [value]="theme.value"
                  [attr.data-test-id]="theme.value"
                  >{{
                  'THEMES.' + theme.value | translate
                  }}</mat-option
                  >
                }
              </mat-select>
            </mat-form-field>
          </div>
        </div>
        <mat-divider />
        <div class="row">
          <div class="column">
            {{ 'SETTINGS.SHOW_CAPTIONS' | translate }}
            <p>{{ 'SETTINGS.SHOW_CAPTIONS_DESCRIPTION' | translate }}</p>
          </div>
          <div class="column" style="margin-right: 10px">
            <mat-checkbox
              class="column"
              formControlName="showCaptions"
            ></mat-checkbox>
          </div>
        </div>
        <!-- not ported to tauri yet
        @if (isPwa || isTauri) {
          <mat-divider />
          <div class="row">
            <div class="column">
              {{ 'SETTINGS.REMOTE_CONTROL' | translate }}
              <p>
                {{ 'SETTINGS.REMOTE_CONTROL_DESCRIPTION' | translate }}
              </p>
            </div>
            <div class="column" style="margin-right: 10px">
              <mat-checkbox
                class="column"
                formControlName="remoteControl"
              ></mat-checkbox>
            </div>
          </div>
        }
        -->
        @if (settingsForm.value.remoteControl === true) {
          <mat-divider />
          <div class="row">
            <div class="column">
              {{ 'SETTINGS.REMOTE_CONTROL_PORT' | translate }}
              <p>
                {{
                'SETTINGS.REMOTE_CONTROL_PORT_DESCRIPTION'
                | translate
                }}
              </p>
            </div>
            <div class="column" style="margin-right: 10px">
              <mat-form-field appearance="outline" class="full-width">
                <input
                  matInput
                  type="text"
                  id="remoteControlPort"
                  formControlName="remoteControlPort"
                  />
              </mat-form-field>
            </div>
          </div>
        }
        <mat-divider />
        <div class="row">
          <div class="column">
            {{ 'SETTINGS.IMPORT_EXPORT_DATA' | translate }}
            <p>
              {{ 'SETTINGS.IMPORT_EXPORT_DATA_DESCRIPTION' | translate }}
            </p>
          </div>
          <div class="column">
            <button
              mat-button
                    (click)="
                        $event.preventDefault();
                        $event.stopPropagation();
                        importData()
                    "
              >
              {{ 'SETTINGS.IMPORT_DATA' | translate }}
            </button>
            <button
              mat-button
                    (click)="
                        $event.preventDefault();
                        $event.stopPropagation();
                        exportData()
                    "
              >
              {{ 'SETTINGS.EXPORT_DATA' | translate }}
            </button>
          </div>
        </div>

        <div class="row">
          <div class="column">
            {{ 'SETTINGS.REMOVE_ALL' | translate }}
            <p>
              {{ 'SETTINGS.REMOVE_ALL_DESCRIPTION' | translate }}
            </p>
          </div>
          <div class="column">
            <button
              mat-button
                    (click)="
                        $event.preventDefault();
                        $event.stopPropagation();
                        removeAll()
                    "
              color="warn"
              >
              {{ 'SETTINGS.REMOVE_ALL_BUTTON' | translate }}
            </button>
          </div>
        </div>

      <mat-divider />
      <div class="action-buttons" align="end">
        <button
          mat-button
          color="accent"
          type="reset"
          (click)="backToHome()"
          data-test-id="back-to-home"
          >
          <mat-icon>chevron_left</mat-icon>
          {{ 'SETTINGS.BACK_TO_HOME' | translate }}
        </button>
        <button
          mat-button
          color="accent"
          type="submit"
          [disabled]="settingsForm.pristine || !settingsForm.valid"
          data-test-id="save-settings"
          >
          <mat-icon>save</mat-icon>
          {{ 'SETTINGS.SAVE_CHANGES' | translate }}
        </button>
      </div>
    </form>
  </div>
`, styles: ["/* src/app/settings/settings.component.scss */\nbutton {\n  cursor: pointer !important;\n  text-transform: uppercase;\n}\n.settings-container {\n  overflow: auto;\n  height: calc(100vh - 100px);\n}\n.row {\n  display: flex;\n  padding: 10px;\n}\n.row :nth-child(2) {\n  text-align: right;\n}\n.row :nth-child(2) mat-form-field {\n  font-size: 14px;\n}\n.column {\n  flex: 1;\n}\n.column p {\n  font-size: 0.9em;\n  opacity: 0.6;\n  padding: 2px 0;\n  margin: 0;\n}\n.action-buttons {\n  margin-top: 10px;\n}\n.action-buttons button {\n  margin: 0 10px;\n}\n"] }]
  }], () => [{ type: DialogService }, { type: DataService }, { type: EpgService }, { type: FormBuilder }, { type: PlaylistsService }, { type: Router }, { type: SettingsService }, { type: MatSnackBar }, { type: Store }, { type: TranslateService }, { type: MatDialog }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], { isDialog: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/settings/settings.component.ts", lineNumber: 76 });
})();

export {
  SettingsComponent
};
