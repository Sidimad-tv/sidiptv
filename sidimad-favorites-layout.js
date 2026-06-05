import {
  FavoritesLayoutComponent
} from "./sidimad-fav-layout.js";
import "./sidimad-external-player.js";
import "./sidimad-tauri.js";
import "./sidimad-list.js";
import {
  MatCardModule
} from "./sidimad-card.js";
import "./sidimad-empty.js";
import "./sidimad-playlist-error-db.js";
import "./sidimad-dialogs.js";
import "./sidimad-database.js";
import {
  ActivatedRoute,
  FavoritesService,
  Router,
  Store,
  XtreamStore,
  selectActivePlaylist
} from "./sidimad-store.js";
import "./sidimad-tooltip.js";
import "./sidimad-checkbox.js";
import "./sidimad-divider.js";
import "./sidimad-browser.js";
import {
  BehaviorSubject,
  Component,
  __async,
  inject,
  setClassMetadata,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./sidimad-app.js";

// src/app/xtream-tauri/favorites/favorites.component.ts
var FavoritesComponent = class _FavoritesComponent {
  constructor() {
    this.favoritesService = inject(FavoritesService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.store = inject(Store);
    this.xtreamStore = inject(XtreamStore);
    this.categories = signal([], ...ngDevMode ? [{ debugName: "categories" }] : []);
    this.series = signal([], ...ngDevMode ? [{ debugName: "series" }] : []);
    this.movies = signal([], ...ngDevMode ? [{ debugName: "movies" }] : []);
    this.live = signal([], ...ngDevMode ? [{ debugName: "live" }] : []);
    this.favoritesToShow = signal([], ...ngDevMode ? [{ debugName: "favoritesToShow" }] : []);
    this.selectedCategoryId = signal("movie", ...ngDevMode ? [{ debugName: "selectedCategoryId" }] : []);
    this.favoritesRefresh$ = new BehaviorSubject(void 0);
  }
  ngOnInit() {
    this.xtreamStore.setSelectedContentType(void 0);
    const playlistId = this.store.selectSignal(selectActivePlaylist)()._id;
    this.favoritesRefresh$.pipe(switchMap(() => this.favoritesService.getFavorites(playlistId))).subscribe((items) => {
      this.movies.set(items.filter((item) => item.type === "movie"));
      this.live.set(items.filter((item) => item.type === "live"));
      this.series.set(items.filter((item) => item.type === "series"));
      this.initCategories();
      this.setCategoryContent(this.selectedCategoryId());
    });
  }
  initCategories() {
    this.categories.set([
      {
        id: 1,
        category_id: "movie",
        category_name: "Movies (" + this.movies().length + ")",
        parent_id: 0
      },
      {
        id: 2,
        category_id: "live",
        category_name: "Live TV (" + this.live().length + ")",
        parent_id: 0
      },
      {
        id: 3,
        category_id: "series",
        category_name: "Series (" + this.series().length + ")",
        parent_id: 0
      }
    ]);
  }
  setCategoryId(categoryId) {
    this.selectedCategoryId.set(categoryId);
    this.setCategoryContent(categoryId);
  }
  setCategoryContent(categoryId) {
    switch (categoryId) {
      case "movie":
        this.favoritesToShow.set(this.movies());
        break;
      case "live":
        this.favoritesToShow.set(this.live());
        break;
      case "series":
        this.favoritesToShow.set(this.series());
        break;
      default:
        this.favoritesToShow.set(this.movies());
        break;
    }
  }
  removeFromFavorites(item) {
    return __async(this, null, function* () {
      yield this.favoritesService.removeFromFavorites(item.id, item.playlist_id);
      this.favoritesRefresh$.next();
    });
  }
  openItem(item) {
    const type = item.type === "movie" ? "vod" : item.type;
    this.xtreamStore.setSelectedContentType(type);
    if (type === "live") {
      const streamUrl = this.xtreamStore.constructStreamUrl(item);
      this.xtreamStore.openPlayer(streamUrl, item.title, item.poster_url);
    } else {
      this.router.navigate(["..", type, item.category_id, item.xtream_id], {
        relativeTo: this.route
      });
    }
  }
  static {
    this.\u0275fac = function FavoritesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FavoritesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FavoritesComponent, selectors: [["app-favorites"]], decls: 2, vars: 3, consts: [[3, "categoryClicked", "removeFavorite", "openItem", "categories", "favorites", "selectedCategoryId"]], template: function FavoritesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-favorites-layout", 0);
        \u0275\u0275listener("categoryClicked", function FavoritesComponent_Template_app_favorites_layout_categoryClicked_0_listener($event) {
          return ctx.setCategoryId($event.category_id);
        })("removeFavorite", function FavoritesComponent_Template_app_favorites_layout_removeFavorite_0_listener($event) {
          return ctx.removeFromFavorites($event);
        })("openItem", function FavoritesComponent_Template_app_favorites_layout_openItem_0_listener($event) {
          return ctx.openItem($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(1, "\n");
      }
      if (rf & 2) {
        \u0275\u0275property("categories", ctx.categories())("favorites", ctx.favoritesToShow())("selectedCategoryId", ctx.selectedCategoryId());
      }
    }, dependencies: [FavoritesLayoutComponent, MatCardModule], styles: ["\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  border-right: 1px solid #333;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FavoritesComponent, [{
    type: Component,
    args: [{ selector: "app-favorites", imports: [FavoritesLayoutComponent, MatCardModule], template: '<app-favorites-layout\n    [categories]="categories()"\n    [favorites]="favoritesToShow()"\n    [selectedCategoryId]="selectedCategoryId()"\n    (categoryClicked)="setCategoryId($event.category_id)"\n    (removeFavorite)="removeFromFavorites($event)"\n    (openItem)="openItem($event)"\n/>\n', styles: ["/* src/app/xtream-tauri/sidebar.scss */\n.sidebar {\n  width: 300px;\n  border-right: 1px solid #333;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar .sidebar-header {\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.sidebar .sidebar-header h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FavoritesComponent, { className: "FavoritesComponent", filePath: "src/app/xtream-tauri/favorites/favorites.component.ts", lineNumber: 19 });
})();
export {
  FavoritesComponent
};
