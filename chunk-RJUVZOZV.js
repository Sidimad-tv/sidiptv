import {
  ContentType
} from "./chunk-VQ4Q64L7.js";
import {
  PlaylistsService
} from "./chunk-L3VXQT5F.js";
import {
  MatSnackBar,
  PlayerService,
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState
} from "./chunk-QHT262RL.js";
import {
  DataService,
  STALKER_REQUEST,
  TranslateService
} from "./chunk-W4GTA6ZI.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  resource,
  signal
} from "./chunk-7EPDPDBX.js";

// shared/stalker-portal-actions.enum.ts
var StalkerPortalActions;
(function(StalkerPortalActions2) {
  StalkerPortalActions2["GetCategories"] = "get_categories";
  StalkerPortalActions2["GetGenres"] = "get_genres";
  StalkerPortalActions2["CreateLink"] = "create_link";
  StalkerPortalActions2["GetOrderedList"] = "get_ordered_list";
  StalkerPortalActions2["Favorites"] = "favorites";
  StalkerPortalActions2["Handshake"] = "handshake";
  StalkerPortalActions2["DoAuth"] = "do_auth";
})(StalkerPortalActions || (StalkerPortalActions = {}));

// src/app/stalker/stalker-content-types.ts
var StalkerContentTypes = {
  stb: {
    doAuth: "do_auth",
    handshake: "handshake"
  },
  itv: {
    title: "Live streams",
    getContentAction: StalkerPortalActions.GetOrderedList,
    getCategoryAction: StalkerPortalActions.GetGenres,
    getLink: StalkerPortalActions.CreateLink
  },
  vod: {
    title: "VOD streams",
    getContentAction: StalkerPortalActions.GetOrderedList,
    getCategoryAction: StalkerPortalActions.GetCategories,
    getLink: StalkerPortalActions.CreateLink
  },
  series: {
    title: "Series",
    getContentAction: StalkerPortalActions.GetOrderedList,
    getCategoryAction: StalkerPortalActions.GetCategories,
    getLink: StalkerPortalActions.CreateLink
  }
  /* radio: {
      title: 'Radio',
      getContentAction: StalkerPortalActions.GetOrderedList,
      getCategoryAction: StalkerPortalActions.GetOrderedList,
      getLink: StalkerPortalActions.CreateLink,
  }, */
};

// src/app/stalker/stalker.store.ts
var initialState = {
  selectedContentType: "vod",
  selectedCategoryId: void 0,
  selectedVodId: void 0,
  selectedSerialId: void 0,
  selectedItvId: void 0,
  limit: 14,
  page: 0,
  searchPhrase: "",
  currentPlaylist: void 0,
  totalCount: 0,
  selectedItem: void 0,
  vodCategories: [],
  seriesCategories: [],
  itvCategories: [],
  hasMoreChannels: false,
  itvChannels: []
};
function extractNumericValue(str) {
  const matches = str.match(/\d+/);
  if (matches) {
    return parseInt(matches[0], 10);
  }
  return 0;
}
function sortByNumericValue(array) {
  if (!array)
    return [];
  const key = "name";
  return array.sort((a, b) => {
    const numericA = extractNumericValue(a[key]);
    const numericB = extractNumericValue(b[key]);
    return numericA - numericB;
  });
}
var StalkerStore = signalStore({ providedIn: "root" }, withState(initialState), withProps((store, dataService = inject(DataService)) => ({
  getCategoryResource: resource({
    params: () => ({
      contentType: store.selectedContentType(),
      action: StalkerPortalActions.GetCategories,
      currentPlaylist: store.currentPlaylist()
    }),
    loader: (_0) => __async(null, [_0], function* ({ params }) {
      if (params.currentPlaylist === void 0)
        return;
      switch (params.contentType) {
        case "itv":
          if (store.itvCategories().length > 0) {
            return store.itvCategories();
          }
          break;
        case "vod":
          if (store.vodCategories().length > 0) {
            return store.vodCategories();
          }
          break;
        case "series":
          if (store.seriesCategories().length > 0) {
            return store.seriesCategories();
          }
          break;
      }
      const { portalUrl, macAddress } = params.currentPlaylist;
      const response = yield dataService.sendIpcEvent(STALKER_REQUEST, {
        url: portalUrl,
        macAddress,
        params: {
          action: StalkerContentTypes[params.contentType].getCategoryAction,
          type: params.contentType
        }
      });
      if (response) {
        const categories = response.js.map((item) => ({
          category_name: item.title,
          category_id: item.id
        })).sort((a, b) => a.category_name.localeCompare(b.category_name));
        patchState(store, {
          [`${params.contentType}Categories`]: categories
        });
        return categories;
      } else {
        throw new Error(`Error: ${response.message} (Status: ${response.status})`);
      }
    })
  }),
  getContentResource: resource({
    params: () => ({
      contentType: store.selectedContentType(),
      category: store.selectedCategoryId(),
      action: StalkerPortalActions.GetOrderedList,
      search: store.searchPhrase(),
      pageIndex: store.page() + 1
    }),
    loader: (_0) => __async(null, [_0], function* ({ params }) {
      if (!params.category || params.category === null || params.category === "") {
        return Promise.resolve(void 0);
      }
      const currentPlaylist = store.currentPlaylist;
      const queryParams = __spreadProps(__spreadValues({
        action: StalkerContentTypes[params.contentType].getContentAction,
        type: params.contentType,
        category: params.category ?? "",
        genre: params.category ?? "",
        sortby: "added"
      }, params.search !== "" ? { search: params.search } : {}), {
        p: params.pageIndex
      });
      const response = yield dataService.sendIpcEvent(STALKER_REQUEST, {
        url: currentPlaylist().portalUrl,
        macAddress: currentPlaylist().macAddress,
        params: queryParams
      });
      patchState(store, { totalCount: response.js.total_items });
      if (response) {
        const newItems = response.js.data.map((item) => __spreadProps(__spreadValues({}, item), {
          cover: item.screenshot_uri
        }));
        if (store.selectedContentType() === "itv") {
          if (params.pageIndex === 1) {
            patchState(store, { itvChannels: newItems });
          } else {
            patchState(store, {
              itvChannels: [
                ...store.itvChannels(),
                ...newItems
              ]
            });
          }
          const totalLoaded = store.itvChannels().length;
          patchState(store, {
            hasMoreChannels: totalLoaded < response.js.total_items
          });
        }
        return newItems;
      } else {
        throw new Error(`Error: ${response.message} (Status: ${response.status})`);
      }
    })
  }),
  serialSeasonsResource: resource({
    params: () => ({
      itemId: store.selectedSerialId()
    }),
    loader: (_0) => __async(null, [_0], function* ({ params }) {
      const { portalUrl, macAddress } = store.currentPlaylist();
      const queryParams = {
        action: StalkerContentTypes.series.getContentAction,
        type: "series",
        movie_id: params.itemId
      };
      const response = yield dataService.sendIpcEvent(STALKER_REQUEST, {
        url: portalUrl,
        macAddress,
        params: queryParams
      });
      return sortByNumericValue(response.js.data);
    })
  })
})), withComputed((store) => ({
  getTotalPages: computed(() => {
    return Math.ceil(store.totalCount() / store.limit());
  }),
  /** category content */
  getPaginatedContent: computed(() => store.getContentResource.value()),
  isPaginatedContentLoading: computed(() => store.getContentResource.isLoading()),
  isPaginatedContentFailed: computed(() => store.getContentResource.error()),
  /** serials */
  getSerialSeasonsResource: computed(() => store.serialSeasonsResource.value()),
  /** category resource */
  getCategoryResource: computed(() => store.getCategoryResource.value()),
  isCategoryResourceLoading: computed(() => store.getCategoryResource.isLoading()),
  isCategoryResourceFailed: computed(() => store.getCategoryResource.error()),
  getSelectedCategoryName: computed(() => {
    const type = store.selectedContentType();
    const selectedCategoryId = store.selectedCategoryId();
    if (!selectedCategoryId)
      return "";
    let categories = [];
    if (type === "vod") {
      categories = store.vodCategories();
    } else if (type === "series") {
      categories = store.seriesCategories();
    } else if (type === "itv") {
      categories = store.itvCategories();
    }
    const category = categories.find((cat) => String(cat.category_id) === String(selectedCategoryId));
    return category ? category.category_name : "";
  })
})), withMethods((store, dataService = inject(DataService), playerService = inject(PlayerService), playlistService = inject(PlaylistsService), snackBar = inject(MatSnackBar), translate = inject(TranslateService)) => ({
  /** selectors */
  setSelectedContentType(type) {
    patchState(store, { selectedContentType: type });
  },
  setSelectedCategory(id) {
    patchState(store, {
      selectedCategoryId: id !== null ? String(id) : null,
      page: 0
    });
  },
  setSelectedSerialId(id) {
    patchState(store, { selectedSerialId: id });
  },
  setSelectedVodId(id) {
    patchState(store, { selectedVodId: id });
  },
  setSelectedItvId(id) {
    patchState(store, { selectedItvId: id });
  },
  setLimit(limit) {
    patchState(store, { limit });
  },
  setPage(page) {
    patchState(store, { page });
  },
  setCurrentPlaylist(playlist) {
    patchState(store, { currentPlaylist: playlist });
  },
  setSelectedItem(selectedItem) {
    patchState(store, {
      selectedVodId: selectedItem?.id ?? void 0,
      selectedSerialId: selectedItem?.id ?? void 0,
      selectedItvId: selectedItem?.id ?? void 0,
      selectedItem
    });
  },
  setCategories(type, categories) {
    if (type === "vod") {
      patchState(store, { vodCategories: categories });
    } else if (type === "series") {
      patchState(store, { seriesCategories: categories });
    } else if (type === "itv") {
      patchState(store, { itvCategories: categories });
    }
  },
  resetCategories() {
    patchState(store, {
      vodCategories: [],
      seriesCategories: [],
      itvCategories: []
    });
  },
  setItvChannels(channels) {
    patchState(store, { itvChannels: channels });
  },
  /** getters */
  getSelectedCategory() {
    return signal(store.selectedCategoryId());
  },
  /** API */
  fetchLinkToPlay(portalUrl, macAddress, cmd, series) {
    return __async(this, null, function* () {
      const type = series ? ContentType.VODS : store.selectedContentType();
      const params = __spreadValues({
        action: StalkerContentTypes[store.selectedContentType()].getLink,
        type,
        cmd,
        forced_storage: "undefined",
        disable_ad: "0",
        JsHttpRequest: "1-xml"
      }, series ? { series } : {});
      const response = yield dataService.sendIpcEvent(STALKER_REQUEST, {
        url: portalUrl + "?" + cmd,
        macAddress,
        params
      });
      let url = response.js.cmd;
      if (url?.startsWith("ffmpeg")) {
        url = url.split(" ")[1];
      }
      return url;
    });
  },
  getExpireDate() {
    return __async(this, null, function* () {
      const params = {
        type: "account_info",
        action: "get_main_info",
        JsHttpRequest: "1-xml"
      };
      try {
        const response = yield dataService.sendIpcEvent(STALKER_REQUEST, {
          url: store.currentPlaylist().portalUrl,
          macAddress: store.currentPlaylist().macAddress,
          params
        });
        if (response && response.js && response.js.account_info) {
          const expireDate = response.js.account_info.expire_date;
          if (expireDate && !isNaN(expireDate)) {
            const date = new Date(expireDate * 1e3);
            return date.toLocaleDateString();
          }
          return expireDate || "Unknown";
        }
        return "Unknown";
      } catch (error) {
        console.error("Failed to fetch expire date:", error);
        return "Error fetching data";
      }
    });
  },
  addToFavorites(item) {
    playlistService.addPortalFavorite(this.currentPlaylist()?._id, __spreadProps(__spreadValues({}, item), {
      category_id: store.selectedContentType(),
      added_at: Date.now(),
      id: item.stream_id ?? item.id
    })).subscribe(() => {
      snackBar.open(translate.instant("PORTALS.ADDED_TO_FAVORITES"), null, {
        duration: 1e3
      });
    });
  },
  removeFromFavorites(favoriteId) {
    playlistService.removeFromPortalFavorites(this.currentPlaylist()?._id, favoriteId).subscribe(() => {
      snackBar.open(translate.instant("PORTALS.REMOVED_FROM_FAVORITES"), null, {
        duration: 1e3
      });
    });
  },
  createLinkToPlayVod(cmd, title, thumbnail, episode) {
    return __async(this, null, function* () {
      const url = yield this.fetchLinkToPlay(this.currentPlaylist().portalUrl, this.currentPlaylist().macAddress, cmd ?? this.selectedItem().cmd, episode);
      const item = this.selectedItem();
      this.addToRecentlyViewed(__spreadProps(__spreadValues({}, item), {
        id: item.id,
        cmd,
        cover: thumbnail,
        title
      }));
      playerService.openPlayer(url, title, thumbnail);
    });
  },
  addToRecentlyViewed(item) {
    console.log("Adding to recently viewed", item);
    playlistService.addPortalRecentlyViewed(__spreadProps(__spreadValues({}, item), {
      category_id: store.selectedContentType(),
      added_at: Date.now()
    })).subscribe();
  },
  removeFromRecentlyViewed(itemId) {
    playlistService.removeFromPortalRecentlyViewed(itemId).subscribe();
  }
})));

export {
  StalkerPortalActions,
  StalkerContentTypes,
  StalkerStore
};
