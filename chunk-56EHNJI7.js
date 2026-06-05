import {
  DataService,
  XTREAM_REQUEST
} from "./chunk-W4GTA6ZI.js";
import {
  Injectable,
  __async,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-7EPDPDBX.js";

// src/app/services/portal-status.service.ts
var PortalStatusService = class _PortalStatusService {
  constructor() {
    this.dataService = inject(DataService);
  }
  /**
   * Checks the status of an Xtream Code portal
   *
   * @param serverUrl The base URL of the server
   * @param username The username for authentication
   * @param password The password for authentication
   * @returns A promise that resolves to the portal status
   */
  checkPortalStatus(serverUrl, username, password) {
    return __async(this, null, function* () {
      try {
        let normalizedUrl = serverUrl;
        if (serverUrl && !serverUrl.endsWith("/")) {
          normalizedUrl = serverUrl;
        }
        let response = yield this.dataService.sendIpcEvent(XTREAM_REQUEST, {
          url: normalizedUrl,
          params: {
            password,
            username,
            action: "get_account_info"
          }
        });
        response = response?.payload;
        if (!response?.user_info?.status) {
          return "unavailable";
        }
        if (response.user_info.status === "Active") {
          const expDate = new Date(parseInt(response.user_info.exp_date) * 1e3);
          return expDate < /* @__PURE__ */ new Date() ? "expired" : "active";
        } else {
          return "inactive";
        }
      } catch (error) {
        console.error("Error checking portal status:", error);
        return "unavailable";
      }
    });
  }
  /**
   * Gets a user-friendly message based on the portal status
   *
   * @param status The portal status
   * @returns A message describing the status
   */
  getStatusMessage(status) {
    switch (status) {
      case "active":
        return "Connection successful! Portal is active.";
      case "inactive":
        return "Portal is inactive.";
      case "expired":
        return "Portal subscription has expired.";
      case "unavailable":
        return "Could not connect to the portal.";
      default:
        return "";
    }
  }
  /**
   * Gets a CSS class name based on the portal status
   *
   * @param status The portal status
   * @returns A CSS class name
   */
  getStatusClass(status) {
    return status ? `status-${status}` : "";
  }
  /**
   * Gets an icon name based on the portal status
   *
   * @param status The portal status
   * @returns A material icon name
   */
  getStatusIcon(status) {
    switch (status) {
      case "active":
        return "check_circle";
      case "inactive":
        return "cancel";
      case "expired":
        return "warning";
      case "unavailable":
      default:
        return "error";
    }
  }
  static {
    this.\u0275fac = function PortalStatusService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PortalStatusService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PortalStatusService, factory: _PortalStatusService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalStatusService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  PortalStatusService
};
