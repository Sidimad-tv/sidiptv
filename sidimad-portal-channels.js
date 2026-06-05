import {
  EpgViewComponent
} from "./sidimad-epg-view.js";
import {
  FilterPipe
} from "./sidimad-filter-pipe.js";
import "./sidimad-epg-desc.js";
import {
  CategoryViewComponent,
  MpvPlayerBarComponent
} from "./sidimad-external-player.js";
import "./sidimad-tauri.js";
import {
  MatListItem,
  MatListItemAvatar,
  MatListItemMeta,
  MatListItemTitle,
  MatListModule,
  MatNavList
} from "./sidimad-list.js";
import {
  MatCardModule
} from "./sidimad-card.js";
import "./sidimad-PVDG46DZ.js";
import "./sidimad-playlist-error-db.js";
import "./sidimad-dialogs.js";
import "./sidimad-database.js";
import {
  ActivatedRoute,
  FavoritesService,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix,
  SettingsStore,
  WebPlayerViewComponent,
  XtreamStore
} from "./sidimad-store.js";
import {
  MatTooltipModule
} from "./sidimad-tooltip.js";
import "./sidimad-checkbox.js";
import "./sidimad-divider.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  DefaultValueAccessor,
  FormsModule,
  MatIcon,
  MatIconButton,
  NgControlStatus,
  NgModel,
  ScrollingModule,
  TranslatePipe
} from "./sidimad-browser.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DatePipe,
  EventEmitter,
  Output,
  ViewChild,
  __async,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./sidimad-app.js";

// src/app/xtream-tauri/portal-channels-list/portal-channels-list.component.ts
function PortalChannelsListComponent_mat_list_item_16_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                            ");
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2, "\n                                ");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                                ");
    \u0275\u0275elementStart(7, "div", 14);
    \u0275\u0275text(8, "\n                                    ");
    \u0275\u0275element(9, "div", 15);
    \u0275\u0275text(10, "\n                                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n                                ");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n                            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n                        ");
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 4, (tmp_4_0 = ctx_r2.programTimings.get(item_r2.xtream_id)) == null ? null : tmp_4_0.start, "HH:mm"));
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r2.currentProgramsProgress.get(item_r2.xtream_id), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 7, (tmp_6_0 = ctx_r2.programTimings.get(item_r2.xtream_id)) == null ? null : tmp_6_0.end, "HH:mm"));
  }
}
function PortalChannelsListComponent_mat_list_item_16_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                        ");
    \u0275\u0275conditionalCreate(6, PortalChannelsListComponent_mat_list_item_16_Conditional_9_Conditional_6_Template, 17, 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                ");
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                            ", ctx_r2.currentPrograms.get(item_r2.xtream_id), "\n                        ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.currentProgramsProgress.has(item_r2.xtream_id) ? 6 : -1);
  }
}
function PortalChannelsListComponent_mat_list_item_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275element(3, "div", 17);
    \u0275\u0275text(4, "\n                        ");
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275text(6, "\n                            ");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "--:--");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                            ");
    \u0275\u0275element(10, "div", 14);
    \u0275\u0275text(11, "\n                            ");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "--:--");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n                ");
  }
}
function PortalChannelsListComponent_mat_list_item_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list-item", 6);
    \u0275\u0275listener("click", function PortalChannelsListComponent_mat_list_item_16_Template_mat_list_item_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.playClicked.emit(item_r2));
    });
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "img", 7);
    \u0275\u0275listener("error", function PortalChannelsListComponent_mat_list_item_16_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n                ");
    \u0275\u0275conditionalCreate(9, PortalChannelsListComponent_mat_list_item_16_Conditional_9_Template, 8, 2)(10, PortalChannelsListComponent_mat_list_item_16_Conditional_10_Template, 17, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n            ");
    \u0275\u0275elementStart(12, "button", 10);
    \u0275\u0275listener("click", function PortalChannelsListComponent_mat_list_item_16_Template_button_click_12_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFavorite($event, item_r2));
    });
    \u0275\u0275text(13, "\n                ");
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("activated", ((tmp_2_0 = ctx_r2.xtreamStore.selectedItem()) == null ? null : tmp_2_0.xtream_id) === item_r2.xtream_id);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", item_r2.stream_icon ?? item_r2.poster_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.currentPrograms.get(item_r2.xtream_id) ? 9 : 10);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\n                    ", ctx_r2.favorites.get(item_r2.xtream_id) ? "star" : "star_outline", "\n                ");
  }
}
var PortalChannelsListComponent = class _PortalChannelsListComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.playClicked = new EventEmitter();
    this.xtreamStore = inject(XtreamStore);
    this.favoritesService = inject(FavoritesService);
    this.route = inject(ActivatedRoute);
    this.channels = this.xtreamStore.selectItemsFromSelectedCategory;
    this.favorites = /* @__PURE__ */ new Map();
    this.searchString = signal("", ...ngDevMode ? [{ debugName: "searchString" }] : []);
    this.currentPrograms = /* @__PURE__ */ new Map();
    this.currentProgramsProgress = /* @__PURE__ */ new Map();
    this.programTimings = /* @__PURE__ */ new Map();
    this.requestedChannels = /* @__PURE__ */ new Set();
  }
  trackBy(_index, item) {
    return item.xtream_id;
  }
  ngOnInit() {
    const { categoryId } = this.route.snapshot.params;
    if (categoryId)
      this.xtreamStore.setSelectedCategory(Number(categoryId));
    const playlist = this.xtreamStore.currentPlaylist();
    if (playlist) {
      this.favoritesService.getFavorites(playlist.id).subscribe((favorites) => {
        favorites.forEach((fav) => {
          this.favorites.set(fav.xtream_id, true);
        });
        console.log(this.favorites);
      });
    }
  }
  ngAfterViewInit() {
    if (this.viewport && this.xtreamStore.selectedContentType() === "live") {
      this.viewport.renderedRangeStream.subscribe((range) => {
        const visibleChannels = this.channels().slice(range.start, range.end);
        this.loadEpgForVisibleChannels(visibleChannels);
      });
    }
  }
  loadEpgForVisibleChannels(channels) {
    return __async(this, null, function* () {
      const playlist = this.xtreamStore.currentPlaylist();
      if (!playlist)
        return;
      for (const channel of channels) {
        if (this.requestedChannels.has(channel.xtream_id) || this.currentPrograms.has(channel.xtream_id)) {
          continue;
        }
        this.requestedChannels.add(channel.xtream_id);
        try {
          const epgData = yield this.xtreamStore.loadChannelEpg(channel.xtream_id);
          if (epgData && epgData.length > 0) {
            this.currentPrograms.set(channel.xtream_id, epgData[0].title);
            this.updateProgramProgress(channel.xtream_id, epgData[0]);
            this.cdr.detectChanges();
          }
        } catch (error) {
          console.error(`Failed to load EPG for channel ${channel.xtream_id}:`, error);
        }
      }
    });
  }
  updateProgramProgress(streamId, program) {
    const now = (/* @__PURE__ */ new Date()).getTime() / 1e3;
    const start = parseInt(program.start_timestamp);
    const end = parseInt(program.stop_timestamp);
    if (now >= start && now <= end) {
      const duration = end - start;
      const elapsed = now - start;
      const progress = elapsed / duration * 100;
      this.currentProgramsProgress.set(streamId, progress);
      this.programTimings.set(streamId, {
        start: start * 1e3,
        // Convert to milliseconds for date pipe
        end: end * 1e3
        // Convert to milliseconds for date pipe
      });
    }
  }
  isSelected(item) {
    const selectedCategory = this.xtreamStore.selectedCategoryId();
    const itemId = Number(item.category_id || item.id);
    return selectedCategory !== null && selectedCategory === itemId;
  }
  toggleFavorite(event, item) {
    event.stopPropagation();
    this.xtreamStore.toggleFavorite(item.xtream_id, this.xtreamStore.currentPlaylist().id).then((result) => {
      if (result) {
        this.favorites.set(item.xtream_id, true);
      } else {
        this.favorites.delete(item.xtream_id);
      }
      this.cdr.detectChanges();
    });
  }
  static {
    this.\u0275fac = function PortalChannelsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PortalChannelsListComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortalChannelsListComponent, selectors: [["app-portal-channels-list"]], viewQuery: function PortalChannelsListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkVirtualScrollViewport, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.viewport = _t.first);
      }
    }, outputs: { playClicked: "playClicked" }, decls: 21, vars: 12, consts: [[1, "search-panel"], ["subscriptSizing", "dynamic", 1, "search-bar"], ["matPrefix", ""], ["matInput", "", "spellcheck", "false", "type", "search", 3, "ngModelChange", "placeholder", "ngModel"], [1, "scroll-viewport-portals", 3, "itemSize"], ["templateCacheSize", "200", 3, "activated", "click", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], ["templateCacheSize", "200", 3, "click", "activated"], ["matListItemAvatar", "", 1, "stream-icon", 3, "error", "src"], ["matListItemTitle", "", 1, "channel-info"], [1, "title"], ["mat-icon-button", "", "matListItemMeta", "", 3, "click"], [1, "program-info"], [1, "current-program"], [1, "progress-container"], [1, "progress-bar"], [1, "progress"], [1, "program-info", "no-epg-placeholder"], [1, "placeholder-bar"]], template: function PortalChannelsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-form-field", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "mat-icon", 2);
        \u0275\u0275text(5, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "\n        ");
        \u0275\u0275elementStart(7, "input", 3);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function PortalChannelsListComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchString, $event) || (ctx.searchString = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n\n");
        \u0275\u0275elementStart(12, "mat-nav-list");
        \u0275\u0275text(13, "\n    ");
        \u0275\u0275elementStart(14, "cdk-virtual-scroll-viewport", 4);
        \u0275\u0275text(15, "\n        ");
        \u0275\u0275template(16, PortalChannelsListComponent_mat_list_item_16_Template, 18, 5, "mat-list-item", 5);
        \u0275\u0275pipe(17, "filterBy");
        \u0275\u0275text(18, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 6, "CHANNELS.SEARCH_CHANNEL"));
        \u0275\u0275twoWayProperty("ngModel", ctx.searchString);
        \u0275\u0275advance(7);
        \u0275\u0275property("itemSize", 48);
        \u0275\u0275advance(2);
        \u0275\u0275property("cdkVirtualForOf", \u0275\u0275pipeBind3(17, 8, ctx.channels(), ctx.searchString(), "title"))("cdkVirtualForTrackBy", ctx.trackBy)("cdkVirtualForTemplateCacheSize", 0);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      ScrollingModule,
      CdkFixedSizeVirtualScroll,
      CdkVirtualForOf,
      CdkVirtualScrollViewport,
      MatCardModule,
      MatIcon,
      MatIconButton,
      MatListModule,
      MatNavList,
      MatListItem,
      MatListItemAvatar,
      MatListItemTitle,
      MatListItemMeta,
      MatInputModule,
      MatInput,
      MatTooltipModule,
      DatePipe,
      FilterPipe,
      TranslatePipe
    ], styles: ["\n\nmat-nav-list[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  display: block;\n}\nmat-list-item[_ngcontent-%COMP%] {\n  width: 280px !important;\n}\n.scroll-viewport-portals[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 114px) !important;\n  width: 100%;\n  padding: 4px 0;\n}\n.title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  min-width: 0;\n  flex: 1;\n}\nmat-list-item[_ngcontent-%COMP%] {\n  width: 325px;\n  min-width: 0;\n  box-sizing: border-box;\n  height: 80px !important;\n  transition: background-color 0.2s ease;\n  border-radius: 4px;\n  margin: 2px 8px;\n}\nmat-list-item[_ngcontent-%COMP%]     .mdc-list-item__content {\n  overflow: hidden;\n  flex: 1;\n}\nmat-list-item[_ngcontent-%COMP%]:hover {\n  z-index: 1;\n  background-color: rgba(255, 255, 255, 0.1);\n}\nmat-list-item[_ngcontent-%COMP%]:hover   .channel-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #1db954;\n}\nmat-list-item.mat-mdc-list-item-active[_ngcontent-%COMP%] {\n  background-color: rgba(29, 185, 84, 0.2);\n}\nmat-list-item.mat-mdc-list-item-active[_ngcontent-%COMP%]   .channel-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #1db954;\n}\n.search-bar[_ngcontent-%COMP%] {\n  width: 90%;\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.search-panel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n  .search-bar div {\n  border-radius: 20px;\n}\n  div[matformfieldlineripple] {\n  display: none;\n}\n.stream-icon[_ngcontent-%COMP%] {\n  background: none;\n  border-radius: 4px;\n  width: 48px;\n  height: 48px;\n  object-fit: cover;\n  margin-right: 16px;\n}\n.channel-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 4px;\n}\n.channel-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  transition: color 0.2s ease;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.channel-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:hover {\n  overflow: visible;\n  text-overflow: clip;\n  animation: _ngcontent-%COMP%_marquee 6s linear infinite;\n}\n.channel-info[_ngcontent-%COMP%]   .current-program[_ngcontent-%COMP%] {\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  margin-top: 2px;\n}\n.channel-info[_ngcontent-%COMP%]   .current-program[_ngcontent-%COMP%]:hover {\n  overflow: visible;\n  text-overflow: clip;\n  animation: _ngcontent-%COMP%_marquee 6s linear infinite;\n}\n.channel-info[_ngcontent-%COMP%]   .program-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.channel-info[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  opacity: 0.6;\n  padding: 0 2px;\n}\n.channel-info[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 3px;\n  background: rgba(255, 255, 255, 0.1);\n  opacity: 0.6;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.channel-info[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #1db954;\n  transition: width 1s linear;\n}\n.channel-info[_ngcontent-%COMP%]   .no-epg-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.channel-info[_ngcontent-%COMP%]   .no-epg-placeholder[_ngcontent-%COMP%]   .placeholder-bar[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 60%;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 2px;\n  margin: 4px 0;\n}\n.channel-info[_ngcontent-%COMP%]   .no-epg-placeholder[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.channel-info[_ngcontent-%COMP%]   .no-epg-placeholder[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n}\n@keyframes _ngcontent-%COMP%_marquee {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n  .mdc-list-item__primary-text {\n  overflow: visible !important;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalChannelsListComponent, [{
    type: Component,
    args: [{ selector: "app-portal-channels-list", imports: [
      DatePipe,
      FilterPipe,
      FormsModule,
      MatFormFieldModule,
      ScrollingModule,
      MatCardModule,
      MatIcon,
      MatIconButton,
      MatListModule,
      MatInputModule,
      TranslatePipe,
      MatTooltipModule
    ], template: `<div class="search-panel">
    <mat-form-field class="search-bar" subscriptSizing="dynamic">
        <mat-icon matPrefix>search</mat-icon>
        <input
            matInput
            spellcheck="false"
            type="search"
            [placeholder]="'CHANNELS.SEARCH_CHANNEL' | translate"
            [(ngModel)]="searchString"
        />
    </mat-form-field>
</div>

<mat-nav-list>
    <cdk-virtual-scroll-viewport
        [itemSize]="48"
        class="scroll-viewport-portals"
    >
        <mat-list-item
            *cdkVirtualFor="
                let item of channels() | filterBy: searchString() : 'title';
                trackBy: trackBy;
                templateCacheSize: 0
            "
            templateCacheSize="200"
            (click)="playClicked.emit(item)"
            [activated]="
                xtreamStore.selectedItem()?.xtream_id === item.xtream_id
            "
        >
            <img
                matListItemAvatar
                class="stream-icon"
                [src]="item.stream_icon ?? item.poster_url"
                (error)="
                    $event.target.src = './assets/images/default-poster.png'
                "
            />
            <div matListItemTitle class="channel-info">
                <div class="title">{{ item.title }}</div>
                @if (currentPrograms.get(item.xtream_id)) {
                    <div class="program-info">
                        <div class="current-program">
                            {{ currentPrograms.get(item.xtream_id) }}
                        </div>
                        @if (currentProgramsProgress.has(item.xtream_id)) {
                            <div class="progress-container">
                                <span>{{
                                    programTimings.get(item.xtream_id)?.start
                                        | date: 'HH:mm'
                                }}</span>
                                <div class="progress-bar">
                                    <div
                                        class="progress"
                                        [style.width.%]="
                                            currentProgramsProgress.get(
                                                item.xtream_id
                                            )
                                        "
                                    ></div>
                                </div>
                                <span>{{
                                    programTimings.get(item.xtream_id)?.end
                                        | date: 'HH:mm'
                                }}</span>
                            </div>
                        }
                    </div>
                } @else {
                    <div class="program-info no-epg-placeholder">
                        <div class="placeholder-bar"></div>
                        <div class="progress-container">
                            <span>--:--</span>
                            <div class="progress-bar"></div>
                            <span>--:--</span>
                        </div>
                    </div>
                }
            </div>
            <button
                mat-icon-button
                matListItemMeta
                (click)="toggleFavorite($event, item)"
            >
                <mat-icon>
                    {{
                        favorites.get(item.xtream_id) ? 'star' : 'star_outline'
                    }}
                </mat-icon>
            </button>
        </mat-list-item>
    </cdk-virtual-scroll-viewport>
</mat-nav-list>
`, styles: ["/* src/app/xtream-tauri/portal-channels-list/portal-channels-list.component.scss */\nmat-nav-list {\n  width: 100%;\n  overflow: hidden;\n  display: block;\n}\nmat-list-item {\n  width: 280px !important;\n}\n.scroll-viewport-portals {\n  min-height: calc(100vh - 114px) !important;\n  width: 100%;\n  padding: 4px 0;\n}\n.title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  min-width: 0;\n  flex: 1;\n}\nmat-list-item {\n  width: 325px;\n  min-width: 0;\n  box-sizing: border-box;\n  height: 80px !important;\n  transition: background-color 0.2s ease;\n  border-radius: 4px;\n  margin: 2px 8px;\n}\nmat-list-item ::ng-deep .mdc-list-item__content {\n  overflow: hidden;\n  flex: 1;\n}\nmat-list-item:hover {\n  z-index: 1;\n  background-color: rgba(255, 255, 255, 0.1);\n}\nmat-list-item:hover .channel-info .title {\n  color: #1db954;\n}\nmat-list-item.mat-mdc-list-item-active {\n  background-color: rgba(29, 185, 84, 0.2);\n}\nmat-list-item.mat-mdc-list-item-active .channel-info .title {\n  color: #1db954;\n}\n.search-bar {\n  width: 90%;\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.search-panel {\n  display: flex;\n  justify-content: center;\n}\n::ng-deep .search-bar div {\n  border-radius: 20px;\n}\n::ng-deep div[matformfieldlineripple] {\n  display: none;\n}\n.stream-icon {\n  background: none;\n  border-radius: 4px;\n  width: 48px;\n  height: 48px;\n  object-fit: cover;\n  margin-right: 16px;\n}\n.channel-info {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 4px;\n}\n.channel-info .title {\n  font-weight: 600;\n  font-size: 14px;\n  transition: color 0.2s ease;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.channel-info .title:hover {\n  overflow: visible;\n  text-overflow: clip;\n  animation: marquee 6s linear infinite;\n}\n.channel-info .current-program {\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  margin-top: 2px;\n}\n.channel-info .current-program:hover {\n  overflow: visible;\n  text-overflow: clip;\n  animation: marquee 6s linear infinite;\n}\n.channel-info .program-info {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.channel-info .progress-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  opacity: 0.6;\n  padding: 0 2px;\n}\n.channel-info .progress-container .progress-bar {\n  flex: 1;\n  height: 3px;\n  background: rgba(255, 255, 255, 0.1);\n  opacity: 0.6;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.channel-info .progress-container .progress-bar .progress {\n  height: 100%;\n  background: #1db954;\n  transition: width 1s linear;\n}\n.channel-info .no-epg-placeholder {\n  opacity: 0.7;\n}\n.channel-info .no-epg-placeholder .placeholder-bar {\n  height: 10px;\n  width: 60%;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 2px;\n  margin: 4px 0;\n}\n.channel-info .no-epg-placeholder .progress-container {\n  opacity: 0.5;\n}\n.channel-info .no-epg-placeholder .progress-container .progress-bar {\n  background: rgba(255, 255, 255, 0.05);\n}\n@keyframes marquee {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n::ng-deep .mdc-list-item__primary-text {\n  overflow: visible !important;\n}\n"] }]
  }], () => [{ type: ChangeDetectorRef }], { playClicked: [{
    type: Output
  }], viewport: [{
    type: ViewChild,
    args: [CdkVirtualScrollViewport]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortalChannelsListComponent, { className: "PortalChannelsListComponent", filePath: "src/app/xtream-tauri/portal-channels-list/portal-channels-list.component.ts", lineNumber: 60 });
})();

// src/app/xtream-tauri/live-stream-layout/live-stream-layout.component.ts
function LiveStreamLayoutComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "button", 3);
    \u0275\u0275listener("click", function LiveStreamLayoutComponent_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToCategories());
    });
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 1, "HOME.PLAYLISTS.CHANNELS"));
  }
}
function LiveStreamLayoutComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "button", 4);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 1, "PORTALS.ALL_CATEGORIES"));
  }
}
function LiveStreamLayoutComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-portal-channels-list", 5);
    \u0275\u0275listener("playClicked", function LiveStreamLayoutComponent_Conditional_9_Template_app_portal_channels_list_playClicked_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.playLive($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
function LiveStreamLayoutComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-category-view", 6);
    \u0275\u0275listener("categoryClicked", function LiveStreamLayoutComponent_Conditional_10_Template_app_category_view_categoryClicked_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCategory($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r1.categories());
  }
}
function LiveStreamLayoutComponent_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275element(3, "app-web-player-view", 10);
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("streamUrl", ctx_r1.streamUrl);
  }
}
function LiveStreamLayoutComponent_Conditional_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275element(1, "app-epg-view", 11);
    \u0275\u0275text(2, "\n                ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("epgItems", ctx_r1.epgItems());
  }
}
function LiveStreamLayoutComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275conditionalCreate(1, LiveStreamLayoutComponent_Conditional_14_Conditional_1_Template, 6, 1);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275conditionalCreate(6, LiveStreamLayoutComponent_Conditional_14_Conditional_6_Template, 3, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n    ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const isEmbeddedPlayer_r5 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275conditional(isEmbeddedPlayer_r5 ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.epgItems().length > 0 ? 6 : -1);
  }
}
function LiveStreamLayoutComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n    ");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(3, 1, "PORTALS.SELECT_CATEGORY"), "\n        ");
  }
}
var LiveStreamLayoutComponent = class _LiveStreamLayoutComponent {
  constructor() {
    this.favoritesService = inject(FavoritesService);
    this.xtreamStore = inject(XtreamStore);
    this.settingsStore = inject(SettingsStore);
    this.categories = this.xtreamStore.getCategoriesBySelectedType;
    this.epgItems = this.xtreamStore.epgItems;
    this.selectedCategoryId = this.xtreamStore.selectedCategoryId;
    this.route = inject(ActivatedRoute);
    this.player = this.settingsStore.player;
    this.favorites = /* @__PURE__ */ new Map();
  }
  ngOnInit() {
    const playlist = this.xtreamStore.currentPlaylist();
    if (playlist) {
      this.favoritesService.getFavorites(playlist.id).subscribe((favorites) => {
        favorites.forEach((fav) => {
          this.favorites.set(fav.xtream_id, true);
        });
      });
    }
    const { categoryId } = this.route.firstChild.snapshot.params;
    if (categoryId)
      this.xtreamStore.setSelectedCategory(Number(categoryId));
  }
  playLive(item) {
    const streamUrl = this.xtreamStore.constructStreamUrl(item);
    this.streamUrl = streamUrl;
    this.xtreamStore.openPlayer(streamUrl, item.title, item.poster_url);
  }
  selectCategory(category) {
    const categoryId = category.category_id ?? category.id;
    this.xtreamStore.setSelectedCategory(categoryId);
  }
  backToCategories() {
    this.xtreamStore.setSelectedCategory(null);
  }
  static {
    this.\u0275fac = function LiveStreamLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LiveStreamLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LiveStreamLayoutComponent, selectors: [["app-live-stream-layout"]], decls: 19, vars: 4, consts: [[1, "sidebar"], [1, "sidebar-header"], [1, "content-container"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", "disabled", ""], [3, "playClicked"], [3, "categoryClicked", "items"], [1, "epg"], [1, "epg-content"], [1, "video-player"], [3, "streamUrl"], [3, "epgItems"], [1, "no-channel-selected"]], template: function LiveStreamLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275text(1, "\n\n");
        \u0275\u0275elementStart(2, "div", 0);
        \u0275\u0275text(3, "\n    ");
        \u0275\u0275elementStart(4, "div", 1);
        \u0275\u0275text(5, "\n        ");
        \u0275\u0275conditionalCreate(6, LiveStreamLayoutComponent_Conditional_6_Template, 11, 3)(7, LiveStreamLayoutComponent_Conditional_7_Template, 11, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, "\n    ");
        \u0275\u0275conditionalCreate(9, LiveStreamLayoutComponent_Conditional_9_Template, 3, 0)(10, LiveStreamLayoutComponent_Conditional_10_Template, 3, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n");
        \u0275\u0275elementStart(12, "div", 2);
        \u0275\u0275text(13, "\n    ");
        \u0275\u0275conditionalCreate(14, LiveStreamLayoutComponent_Conditional_14_Template, 9, 2)(15, LiveStreamLayoutComponent_Conditional_15_Template, 5, 3);
        \u0275\u0275element(16, "app-mpv-player-bar");
        \u0275\u0275text(17, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, "\n");
      }
      if (rf & 2) {
        \u0275\u0275storeLet(ctx.player() === "videojs" || ctx.player() === "html5");
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.selectedCategoryId() ? 6 : 7);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.selectedCategoryId() ? 9 : 10);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.streamUrl ? 14 : 15);
      }
    }, dependencies: [
      CategoryViewComponent,
      EpgViewComponent,
      FormsModule,
      MatFormFieldModule,
      MatIcon,
      MatIconButton,
      MatInputModule,
      MatListModule,
      MpvPlayerBarComponent,
      PortalChannelsListComponent,
      WebPlayerViewComponent,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  min-width: 300px;\n  border-right: 1px solid #111;\n}\n.content-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.video-player[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 50%;\n}\n.epg[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 50%;\n  overflow: hidden;\n}\n.epg-content[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n  padding-bottom: 20px;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.sidebar-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.no-channel-selected[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}", "\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  border-right: 1px solid #333;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveStreamLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-live-stream-layout", imports: [
      CategoryViewComponent,
      EpgViewComponent,
      FormsModule,
      MatFormFieldModule,
      MatIcon,
      MatIconButton,
      MatInputModule,
      MatListModule,
      MpvPlayerBarComponent,
      PortalChannelsListComponent,
      TranslatePipe,
      WebPlayerViewComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `@let isEmbeddedPlayer = player() === 'videojs' || player() === 'html5';

<div class="sidebar">
    <div class="sidebar-header">
        @if (selectedCategoryId()) {
            <button mat-icon-button (click)="backToCategories()">
                <mat-icon>chevron_left</mat-icon>
            </button>
            <h2>{{ 'HOME.PLAYLISTS.CHANNELS' | translate }}</h2>
        } @else {
            <button mat-icon-button disabled>
                <mat-icon>list</mat-icon>
            </button>
            <h2>{{ 'PORTALS.ALL_CATEGORIES' | translate }}</h2>
        }
    </div>
    @if (selectedCategoryId()) {
        <app-portal-channels-list (playClicked)="playLive($event)" />
    } @else {
        <app-category-view
            [items]="categories()"
            (categoryClicked)="selectCategory($event)"
        />
    }
</div>
<div class="content-container">
    @if (streamUrl) {
        @if (isEmbeddedPlayer) {
            <div class="video-player">
                <app-web-player-view [streamUrl]="streamUrl" />
            </div>
        }
        <div class="epg">
            <div class="epg-content">
                @if (epgItems().length > 0) {
                    <app-epg-view [epgItems]="epgItems()" />
                }
            </div>
        </div>
    } @else {
        <div class="no-channel-selected">
            {{ 'PORTALS.SELECT_CATEGORY' | translate }}
        </div>
    }
    <app-mpv-player-bar />
</div>
`, styles: ["/* src/app/xtream-tauri/live-stream-layout/live-stream-layout.component.scss */\n:host {\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n.sidebar {\n  width: 300px;\n  min-width: 300px;\n  border-right: 1px solid #111;\n}\n.content-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.video-player {\n  flex: 1;\n  height: 50%;\n}\n.epg {\n  flex: 1;\n  height: 50%;\n  overflow: hidden;\n}\n.epg-content {\n  height: 100%;\n  overflow-y: auto;\n  padding-bottom: 20px;\n}\n.sidebar-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.sidebar-header button {\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.no-channel-selected {\n  padding: 16px;\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n", "/* src/app/xtream-tauri/sidebar.scss */\n.sidebar {\n  width: 300px;\n  border-right: 1px solid #333;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar .sidebar-header {\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.sidebar .sidebar-header h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LiveStreamLayoutComponent, { className: "LiveStreamLayoutComponent", filePath: "src/app/xtream-tauri/live-stream-layout/live-stream-layout.component.ts", lineNumber: 45 });
})();
export {
  LiveStreamLayoutComponent
};
