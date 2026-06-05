import {
  Injectable,
  Pipe,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefinePipe
} from "./sidimad-app.js";

// src/app/shared/pipes/filter.pipe.ts
var FilterPipe = class _FilterPipe {
  transform(array, filter, property) {
    if (!array || !filter) {
      return array;
    }
    return array.filter((item) => item[property].toLowerCase().includes(filter.toLowerCase()));
  }
  static {
    this.\u0275fac = function FilterPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FilterPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "filterBy", type: _FilterPipe, pure: true });
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FilterPipe, factory: _FilterPipe.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterPipe, [{
    type: Pipe,
    args: [{
      name: "filterBy",
      standalone: true
    }]
  }, {
    type: Injectable
  }], null, null);
})();

export {
  FilterPipe
};
