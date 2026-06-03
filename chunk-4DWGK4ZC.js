import {
  MatSnackBar,
  Store,
  invoke,
  isTauri,
  setEpgAvailableFlag
} from "./chunk-QHT262RL.js";
import {
  TranslateService
} from "./chunk-W4GTA6ZI.js";
import {
  BehaviorSubject,
  Injectable,
  __spreadProps,
  __spreadValues,
  catchError,
  from,
  map,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7EPDPDBX.js";

// src/app/services/epg.service.ts
var EpgService = class _EpgService {
  constructor(snackBar, translate, store) {
    this.snackBar = snackBar;
    this.translate = translate;
    this.store = store;
    this.epgAvailable = new BehaviorSubject(false);
    this.currentEpgPrograms = new BehaviorSubject([]);
    this.epgAvailable$ = this.epgAvailable.asObservable();
    this.currentEpgPrograms$ = this.currentEpgPrograms.asObservable();
  }
  /**
   * Fetches EPG from the given URLs
   */
  fetchEpg(urls) {
    if (!isTauri())
      return;
    this.showFetchSnackbar();
    const validUrls = urls.filter((url) => url?.trim());
    if (validUrls.length === 0)
      return;
    from(invoke("fetch_epg", { url: validUrls })).pipe(tap(() => {
      this.epgAvailable.next(true);
      this.showSuccessSnackbar();
    }), catchError((err) => {
      console.error("EPG fetch error:", err);
      this.epgAvailable.next(false);
      this.showErrorSnackbar();
      throw err;
    })).subscribe();
  }
  /**
   * Gets EPG programs for a specific channel
   */
  getChannelPrograms(channelId) {
    if (!isTauri())
      return;
    console.log("Fetching EPG for channel ID:", channelId);
    from(invoke("get_channel_programs", { channelId })).pipe(tap((programs) => {
      console.log("Received programs:", programs);
    }), map((programs) => programs.map((program) => __spreadProps(__spreadValues({}, program), {
      start: new Date(program.start).toISOString(),
      stop: new Date(program.stop).toISOString()
    }))), catchError((err) => {
      console.error("EPG get programs error:", err);
      this.showErrorSnackbar();
      this.currentEpgPrograms.next([]);
      throw err;
    })).subscribe((programs) => {
      if (programs.length === 0) {
        this.store.dispatch(setEpgAvailableFlag({ value: false }));
      } else {
        this.store.dispatch(setEpgAvailableFlag({ value: true }));
      }
      this.currentEpgPrograms.next(programs);
      console.log("Updated programs:", programs);
    });
  }
  /**
   * Shows fetch in progress snackbar
   */
  showFetchSnackbar() {
    this.snackBar.open(this.translate.instant("EPG.FETCH_EPG"), null, {
      duration: 2e3,
      horizontalPosition: "start"
    });
  }
  /**
   * Shows success snackbar
   */
  showSuccessSnackbar() {
    this.snackBar.open(this.translate.instant("EPG.FETCH_SUCCESS"), null, {
      duration: 2e3,
      horizontalPosition: "start"
    });
  }
  /**
   * Shows error snackbar
   */
  showErrorSnackbar() {
    this.snackBar.open(this.translate.instant("EPG.ERROR"), this.translate.instant("CLOSE"), {
      duration: 2e3,
      horizontalPosition: "start"
    });
  }
  static {
    this.\u0275fac = function EpgService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EpgService)(\u0275\u0275inject(MatSnackBar), \u0275\u0275inject(TranslateService), \u0275\u0275inject(Store));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EpgService, factory: _EpgService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EpgService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: MatSnackBar }, { type: TranslateService }, { type: Store }], null);
})();

export {
  EpgService
};
