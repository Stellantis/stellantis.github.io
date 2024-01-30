import { openBlock as A, createElementBlock as _, createElementVNode as m, Fragment as I, renderList as P, toDisplayString as S, createCommentVNode as q, normalizeClass as Ye, createTextVNode as $r, ref as qr, createVNode as Nn, createBlock as fe, withDirectives as W, vModelText as Yr, vModelSelect as ne, createStaticVNode as Vr, resolveComponent as tn, createApp as Kr } from "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js";
const Wr = "http://json-schema.org/draft-07/schema#", zr = "1.2.0", Gr = {
  api_availability: {
    oneOf: [
      {
        const: !1
      },
      {
        type: "array",
        items: {
          type: "string"
        }
      }
    ]
  }
}, Jr = "object", Xr = {
  schema_version: {
    type: "string",
    enum: [
      "1.0.1",
      "1.1.0",
      "1.2.0"
    ]
  },
  info: {
    type: "object",
    properties: {
      title: {
        type: "string"
      },
      description: {
        type: "string"
      },
      version: {
        type: "string"
      }
    },
    required: [
      "title",
      "description",
      "version"
    ],
    additionalProperties: !1
  },
  data: {
    type: "array",
    items: {
      type: "object",
      properties: {
        name: {
          type: "string"
        },
        description: {
          type: "string"
        },
        domain: {
          type: "string",
          enum: [
            "location",
            "alert",
            "collision",
            "maintenance",
            "monitor",
            "picture",
            "remote",
            "telemetry",
            "trip",
            "vehicle_info"
          ]
        },
        type: {
          type: "string",
          enum: [
            "string",
            "number",
            "integer",
            "array",
            "boolean",
            "object"
          ]
        },
        scope: {
          oneOf: [
            {
              const: !1
            },
            {
              type: "array",
              items: {
                type: "string",
                enum: [
                  "data:telemetry",
                  "data:position",
                  "data:trip",
                  "data:alert",
                  "data:collision",
                  "remote:door:write",
                  "remote:preconditioning:write",
                  "remote:horn:write",
                  "remote:charging:write",
                  "remote:lights:write",
                  "remote:wakeup:write",
                  "remote:navigation:write"
                ]
              }
            }
          ]
        },
        enum: {
          oneOf: [
            {
              type: "string"
            },
            {
              type: "array",
              items: {
                oneOf: [
                  {
                    type: "string"
                  },
                  {
                    type: [
                      "number",
                      "integer"
                    ]
                  },
                  {
                    type: "boolean"
                  }
                ]
              }
            }
          ]
        },
        items: {
          oneOf: [
            {
              const: "string"
            },
            {
              const: "number"
            },
            {
              const: "integer"
            },
            {
              const: "boolean"
            }
          ]
        },
        unit: {
          type: "string"
        },
        availability: {
          type: "object",
          properties: {
            apis: {
              type: "object",
              properties: {
                webapi_b2b_v3: {
                  $ref: "#/definitions/api_availability",
                  title: "Web API v3 - Fleet Owner"
                },
                webapi_b2c_v4: {
                  $ref: "#/definitions/api_availability",
                  title: "Web API v4 - Accessing Party for End-Users"
                }
              },
              additionalProperties: !1,
              minProperties: 2
            },
            vehicle_types: {
              type: "object",
              properties: {
                ICE: {
                  type: "boolean"
                },
                BEV: {
                  type: "boolean"
                },
                PHEV: {
                  type: "boolean"
                },
                FCEV: {
                  type: "boolean"
                }
              },
              additionalProperties: !1,
              minProperties: 4
            }
          },
          additionalProperties: !1,
          minProperties: 2
        }
      },
      required: [
        "name",
        "description",
        "domain",
        "type",
        "availability"
      ],
      additionalProperties: !1
    }
  }
}, Qr = [
  "info",
  "data",
  "schema_version"
], Zr = !1, ei = {
  $schema: Wr,
  id: zr,
  definitions: Gr,
  type: Jr,
  properties: Xr,
  required: Qr,
  additionalProperties: Zr
}, ni = { class: "data-item-availability" }, ri = /* @__PURE__ */ m("span", { class: "availability-api-title-container" }, [
  /* @__PURE__ */ m("span", { class: "availability-api-title" }, "Web API v4 Accessing Party for End-Users Scopes:")
], -1), ii = { class: "availability-api-list" }, ti = {
  __name: "ItemScope",
  props: {
    dataScopes: Array
  },
  setup(e) {
    return (n, r) => (A(), _("div", ni, [
      ri,
      m("ul", ii, [
        (A(!0), _(I, null, P(e.dataScopes, (i) => (A(), _("li", { key: i }, S(i), 1))), 128))
      ])
    ]));
  }
}, oi = { class: "data-item-availability" }, li = /* @__PURE__ */ m("span", { class: "availability-api-title-container" }, [
  /* @__PURE__ */ m("span", { class: "availability-api-title" }, "API Availability:")
], -1), si = { class: "availability-api-list" }, ai = { key: 0 }, ci = { key: 1 }, ui = ["href"], fi = {
  __name: "ItemAPIAvailability",
  props: {
    APIAvailability: Object,
    schemaItemProp: Object,
    apiUrls: Object
  },
  setup(e) {
    return (n, r) => (A(), _("nav", oi, [
      li,
      m("ul", si, [
        (A(!0), _(I, null, P(e.APIAvailability, (i, t) => (A(), _("li", { key: t }, [
          m("span", null, S(e.schemaItemProp.availability.properties.apis.properties[t].title) + ": ", 1),
          typeof i == "boolean" ? (A(), _("span", ai, S(i ? "Available" : "Not Available"), 1)) : Array.isArray(i) ? (A(), _("span", ci, [
            m("ul", null, [
              (A(!0), _(I, null, P(i, (l, o) => (A(), _("li", { key: o }, [
                m("a", {
                  href: e.apiUrls[t] + l,
                  target: "_blank"
                }, S(l), 9, ui)
              ]))), 128))
            ])
          ])) : q("", !0)
        ]))), 128))
      ])
    ]));
  }
}, pi = { class: "data-item-type" }, di = /* @__PURE__ */ m("span", { class: "data-item-subtitle" }, "Type: ", -1), hi = {
  key: 0,
  class: "data-item-enum"
}, mi = /* @__PURE__ */ m("span", { class: "data-item-subtitle" }, "Enum: ", -1), yi = { key: 0 }, gi = { key: 1 }, xi = {
  key: 1,
  class: "data-item-items"
}, Ai = /* @__PURE__ */ m("span", { class: "data-item-subtitle" }, "Items: ", -1), bi = {
  key: 2,
  class: "data-item-unit"
}, vi = /* @__PURE__ */ m("span", { class: "data-item-subtitle" }, "Unit: ", -1), _i = {
  __name: "ItemType",
  props: {
    type: String,
    enumeration: {
      type: [String, Array]
    },
    items: String,
    unit: String
  },
  setup(e) {
    return (n, r) => (A(), _(I, null, [
      m("div", pi, [
        di,
        m("span", null, S(e.type), 1)
      ]),
      e.enumeration ? (A(), _("div", hi, [
        mi,
        typeof e.enumeration == "string" ? (A(), _("span", yi, S(e.enumeration), 1)) : (A(), _("span", gi, [
          (A(!0), _(I, null, P(e.enumeration, (i, t) => (A(), _("span", { key: t }, S(i), 1))), 128))
        ]))
      ])) : q("", !0),
      e.items ? (A(), _("div", xi, [
        Ai,
        m("span", null, S(e.items), 1)
      ])) : q("", !0),
      e.unit ? (A(), _("div", bi, [
        vi,
        m("span", null, S(e.unit), 1)
      ])) : q("", !0)
    ], 64));
  }
}, Ei = { class: "data-item-availability data-item-availability-vehicles" }, wi = /* @__PURE__ */ m("div", { class: "availability-api-title-container" }, [
  /* @__PURE__ */ m("span", { class: "availability-api-title" }, "Vehicles Motorization Availability:")
], -1), Si = { class: "availability-api-list" }, Ci = { class: "icon" }, Oi = {
  __name: "ItemVehicleType",
  props: {
    VehicleTypeAvailability: Object
  },
  setup(e) {
    return (n, r) => (A(), _("nav", Ei, [
      wi,
      m("ul", Si, [
        (A(!0), _(I, null, P(e.VehicleTypeAvailability, (i, t) => (A(), _("li", { key: t }, [
          m("span", Ci, [
            m("i", {
              class: Ye("fas " + (i ? "fa-check" : "fa-times"))
            }, null, 2)
          ]),
          $r(" " + S(t), 1)
        ]))), 128))
      ])
    ]));
  }
}, Ti = { class: "data-item-category" }, Fi = ["title"], Ri = /* @__PURE__ */ m("i", { class: "fa fas fa-exclamation-circle" }, null, -1), Ni = [
  Ri
], ki = { class: "data-item-domain-name" }, Ii = { class: "data-item-content" }, Li = { class: "data-item-info" }, Pi = { class: "data-item-title" }, Di = { class: "data-item-description" }, Bi = { class: "non-highlighted-icon" }, Ui = { class: "icon" }, Mi = {
  key: 0,
  class: "fas fa-cloud"
}, ji = /* @__PURE__ */ m("div", { class: "data-item-expand-arrow" }, [
  /* @__PURE__ */ m("span", { class: "icon is-medium" }, [
    /* @__PURE__ */ m("i", { class: "fa fa-2x fa-angle-right" })
  ])
], -1), Hi = {
  __name: "TableItem",
  props: {
    dataElement: Object,
    schemaItemProp: Object,
    apiUrls: Object
  },
  setup(e) {
    const n = qr(!1);
    return (r, i) => (A(), _("div", {
      class: Ye(["data-item", { "data-item-highlighted": n.value }]),
      onClick: i[0] || (i[0] = (t) => n.value = !n.value)
    }, [
      m("div", Ti, [
        m("span", {
          title: "API Domain: " + e.dataElement.domain.charAt(0).toUpperCase() + e.dataElement.domain.slice(1),
          class: "icon is-large"
        }, Ni, 8, Fi),
        m("span", ki, S(e.dataElement.domain), 1)
      ]),
      m("div", Ii, [
        m("div", Li, [
          m("div", Pi, S(e.dataElement.name), 1),
          m("div", Di, S(e.dataElement.description), 1)
        ]),
        Nn(_i, {
          type: e.dataElement.type,
          enumeration: e.dataElement.enum,
          items: e.dataElement.items,
          unit: e.dataElement.unit
        }, null, 8, ["type", "enumeration", "items", "unit"]),
        e.dataElement.availability.vehicle_types ? (A(), fe(Oi, {
          key: 0,
          VehicleTypeAvailability: e.dataElement.availability.vehicle_types
        }, null, 8, ["VehicleTypeAvailability"])) : q("", !0),
        e.dataElement.availability.apis ? (A(), fe(fi, {
          key: 1,
          APIAvailability: e.dataElement.availability.apis,
          schemaItemProp: e.schemaItemProp,
          apiUrls: e.apiUrls
        }, null, 8, ["APIAvailability", "schemaItemProp", "apiUrls"])) : q("", !0),
        e.dataElement.scope ? (A(), fe(ti, {
          key: 2,
          dataScopes: e.dataElement.scope
        }, null, 8, ["dataScopes"])) : q("", !0),
        m("div", Bi, [
          m("span", Ui, [
            e.dataElement.availability.apis.webapi_b2b_v3 || e.dataElement.availability.apis.webapi_b2c_v4 ? (A(), _("i", Mi)) : q("", !0)
          ])
        ])
      ]),
      ji
    ], 2));
  }
};
function $i(e, n) {
  if (!n)
    return e;
  const r = n.toLowerCase();
  return e.filter((i) => i.name.toLowerCase().includes(r) || i.description.toLowerCase().includes(r));
}
function qi(e, n) {
  return n ? e.filter((r) => r.availability.vehicle_types[n]) : e;
}
function Yi(e, n) {
  return n ? e.filter((r) => {
    const i = r.availability;
    if (!i || !i.apis)
      return !1;
    if (n === "")
      return Object.values(i.apis).some((l) => Array.isArray(l) && l.length > 0);
    const t = i.apis[n];
    return Array.isArray(t) && t.length > 0;
  }) : e;
}
function Vi(e, n) {
  return !n || n.length === 0 ? e : e.filter((r) => !r.scope || r.scope.length === 0 ? !1 : r.scope.some((i) => n.includes(i)));
}
function Ki(e, n) {
  return !n || n.length === 0 ? e : e.filter((r) => r.domain === n);
}
function Wi(e, n) {
  if (!n || n.length === 0)
    return e;
  const r = [];
  for (const i of e)
    if (i.availability && i.availability.apis) {
      const t = i.availability.apis;
      for (const l in t) {
        const o = t[l];
        if (Array.isArray(o) && o.includes(n)) {
          r.push(i);
          break;
        }
      }
    }
  return r;
}
const kn = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [i, t] of n)
    r[i] = t;
  return r;
}, zi = {
  data() {
    return {
      displayFilters: !1,
      searchTerm: "",
      selectedVehicleType: "",
      vehicleTypes: Object.keys(this.schemaItemProp.availability.properties.vehicle_types.properties),
      selectedApiType: "",
      scopesList: this.schemaItemProp.scope.oneOf[1].items.enum,
      selectedScope: "",
      domainsList: this.schemaItemProp.domain.enum,
      selectedDomain: "",
      selectedApiEndpoint: ""
    };
  },
  methods: {
    resetFilters() {
      this.searchTerm = "", this.selectedVehicleType = "", this.selectedApiType = "", this.selectedScope = "", this.selectedDomain = "", this.selectedApiEndpoint = "";
    },
    formattedString(e) {
      return e.replace(/_/g, " ").replace(/^(.)(.*)$/, (n, r, i) => r.toUpperCase() + i.toLowerCase());
    }
  },
  computed: {
    apiProducts() {
      const e = this.schemaItemProp.availability.properties.apis.properties;
      return Object.keys(e).map((r) => ({ value: r, name: e[r].title }));
    },
    filteredData() {
      let e = this.dataCatalog;
      return e = $i(e, this.searchTerm), e = Yi(e, this.selectedApiType), e = qi(e, this.selectedVehicleType), e = Vi(e, this.selectedScope), e = Ki(e, this.selectedDomain), e = Wi(e, this.selectedApiEndpoint), this.$emit("filtered-data", e), e;
    },
    apiEndpoints() {
      const e = /* @__PURE__ */ new Set();
      for (const n of this.dataCatalog)
        if (n.availability && n.availability.apis) {
          const r = n.availability.apis;
          for (const i in r) {
            const t = r[i];
            Array.isArray(t) && t.forEach((l) => e.add(l));
          }
        }
      return Array.from(e);
    }
  },
  emits: ["filtered-data"],
  props: {
    dataCatalog: Array,
    schemaItemProp: Object
  }
}, Gi = { class: "data-count" }, Ji = { class: "table-header-search-and-reset" }, Xi = { class: "data-header-search field" }, Qi = { class: "control has-icons-left" }, Zi = /* @__PURE__ */ m("span", { class: "icon is-small is-left" }, [
  /* @__PURE__ */ m("i", {
    class: "fas fa-search",
    style: { color: "darkgrey" }
  })
], -1), et = /* @__PURE__ */ m("span", null, "Reset all Filters", -1), nt = /* @__PURE__ */ m("span", { class: "icon" }, [
  /* @__PURE__ */ m("i", { class: "fas fa-times" })
], -1), rt = [
  et,
  nt
], it = { class: "table-header-filter" }, tt = /* @__PURE__ */ Vr('<span class="table-header-filter-title"><i class="fas fa-filter"></i> Filters </span><span class="table-header-filter-arrow icon is-large is-white"><i class="fas fa-plus"></i><i class="fas fa-minus"></i></span>', 2), ot = [
  tt
], lt = { class: "table-header-filter-dropdown-content" }, st = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "Vehicle Type", -1), at = /* @__PURE__ */ m("option", { value: "" }, "All Types", -1), ct = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "---------", -1), ut = ["value"], ft = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, " Scopes for Web API Accessing Party for End User ", -1), pt = /* @__PURE__ */ m("option", { value: "" }, "All Scopes", -1), dt = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "----------", -1), ht = ["value"], mt = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "Domain", -1), yt = /* @__PURE__ */ m("option", { value: "" }, "All Domains", -1), gt = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "-----------", -1), xt = ["value"], At = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "API Products", -1), bt = /* @__PURE__ */ m("option", { value: "" }, "All APIs", -1), vt = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "--------", -1), _t = ["value"], Et = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "API Endpoints", -1), wt = /* @__PURE__ */ m("option", { value: "" }, "All Endpoints", -1), St = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "------------", -1), Ct = ["value"];
function Ot(e, n, r, i, t, l) {
  return A(), _(I, null, [
    m("div", Gi, " Showing " + S(l.filteredData.length) + " results on a total of " + S(r.dataCatalog.length) + ". ", 1),
    m("div", Ji, [
      m("div", Xi, [
        m("p", Qi, [
          W(m("input", {
            class: "input",
            type: "text",
            placeholder: "Search in table",
            id: "data-header-search-area",
            "onUpdate:modelValue": n[0] || (n[0] = (o) => t.searchTerm = o)
          }, null, 512), [
            [Yr, t.searchTerm]
          ]),
          Zi
        ])
      ]),
      m("button", {
        onClick: n[1] || (n[1] = (o) => l.resetFilters()),
        class: "table-header-filter-reset"
      }, rt)
    ]),
    m("div", it, [
      m("div", {
        class: Ye(["table-header-filter-dropdown", { "table-header-filter-displayed": t.displayFilters }])
      }, [
        m("div", {
          class: "table-header-filter-title-container",
          onClick: n[2] || (n[2] = (o) => t.displayFilters = !t.displayFilters)
        }, ot),
        m("div", lt, [
          W(m("select", {
            class: "table-header-filter-select",
            "onUpdate:modelValue": n[3] || (n[3] = (o) => t.selectedVehicleType = o)
          }, [
            st,
            at,
            ct,
            (A(!0), _(I, null, P(t.vehicleTypes, (o) => (A(), _("option", {
              key: o,
              value: o
            }, S(o), 9, ut))), 128))
          ], 512), [
            [ne, t.selectedVehicleType]
          ]),
          W(m("select", {
            class: "table-header-filter-select",
            "onUpdate:modelValue": n[4] || (n[4] = (o) => t.selectedScope = o)
          }, [
            ft,
            pt,
            dt,
            (A(!0), _(I, null, P(t.scopesList, (o) => (A(), _("option", {
              key: o,
              value: o
            }, S(o), 9, ht))), 128))
          ], 512), [
            [ne, t.selectedScope]
          ]),
          W(m("select", {
            class: "table-header-filter-select",
            "onUpdate:modelValue": n[5] || (n[5] = (o) => t.selectedDomain = o)
          }, [
            mt,
            yt,
            gt,
            (A(!0), _(I, null, P(t.domainsList, (o) => (A(), _("option", {
              key: o,
              value: o
            }, S(l.formattedString(o)), 9, xt))), 128))
          ], 512), [
            [ne, t.selectedDomain]
          ]),
          W(m("select", {
            "onUpdate:modelValue": n[6] || (n[6] = (o) => t.selectedApiType = o),
            class: "table-header-filter-select"
          }, [
            At,
            bt,
            vt,
            (A(!0), _(I, null, P(l.apiProducts, (o) => (A(), _("option", {
              key: o.value,
              value: o.value
            }, S(o.name), 9, _t))), 128))
          ], 512), [
            [ne, t.selectedApiType]
          ]),
          W(m("select", {
            "onUpdate:modelValue": n[7] || (n[7] = (o) => t.selectedApiEndpoint = o),
            class: "table-header-filter-select"
          }, [
            Et,
            wt,
            St,
            (A(!0), _(I, null, P(l.apiEndpoints, (o) => (A(), _("option", {
              key: o,
              value: o
            }, S(o), 9, Ct))), 128))
          ], 512), [
            [ne, t.selectedApiEndpoint]
          ])
        ])
      ], 2)
    ])
  ], 64);
}
const Tt = /* @__PURE__ */ kn(zi, [["render", Ot]]);
function In(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: Ft } = Object.prototype, { getPrototypeOf: Ve } = Object, ve = /* @__PURE__ */ ((e) => (n) => {
  const r = Ft.call(n);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), U = (e) => (e = e.toLowerCase(), (n) => ve(n) === e), _e = (e) => (n) => typeof n === e, { isArray: ee } = Array, te = _e("undefined");
function Rt(e) {
  return e !== null && !te(e) && e.constructor !== null && !te(e.constructor) && L(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ln = U("ArrayBuffer");
function Nt(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && Ln(e.buffer), n;
}
const kt = _e("string"), L = _e("function"), Pn = _e("number"), Ee = (e) => e !== null && typeof e == "object", It = (e) => e === !0 || e === !1, pe = (e) => {
  if (ve(e) !== "object")
    return !1;
  const n = Ve(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Lt = U("Date"), Pt = U("File"), Dt = U("Blob"), Bt = U("FileList"), Ut = (e) => Ee(e) && L(e.pipe), Mt = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || L(e.append) && ((n = ve(e)) === "formdata" || // detect form-data instance
  n === "object" && L(e.toString) && e.toString() === "[object FormData]"));
}, jt = U("URLSearchParams"), Ht = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ce(e, n, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let i, t;
  if (typeof e != "object" && (e = [e]), ee(e))
    for (i = 0, t = e.length; i < t; i++)
      n.call(null, e[i], i, e);
  else {
    const l = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = l.length;
    let s;
    for (i = 0; i < o; i++)
      s = l[i], n.call(null, e[s], s, e);
  }
}
function Dn(e, n) {
  n = n.toLowerCase();
  const r = Object.keys(e);
  let i = r.length, t;
  for (; i-- > 0; )
    if (t = r[i], n === t.toLowerCase())
      return t;
  return null;
}
const Bn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Un = (e) => !te(e) && e !== Bn;
function Le() {
  const { caseless: e } = Un(this) && this || {}, n = {}, r = (i, t) => {
    const l = e && Dn(n, t) || t;
    pe(n[l]) && pe(i) ? n[l] = Le(n[l], i) : pe(i) ? n[l] = Le({}, i) : ee(i) ? n[l] = i.slice() : n[l] = i;
  };
  for (let i = 0, t = arguments.length; i < t; i++)
    arguments[i] && ce(arguments[i], r);
  return n;
}
const $t = (e, n, r, { allOwnKeys: i } = {}) => (ce(n, (t, l) => {
  r && L(t) ? e[l] = In(t, r) : e[l] = t;
}, { allOwnKeys: i }), e), qt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Yt = (e, n, r, i) => {
  e.prototype = Object.create(n.prototype, i), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), r && Object.assign(e.prototype, r);
}, Vt = (e, n, r, i) => {
  let t, l, o;
  const s = {};
  if (n = n || {}, e == null)
    return n;
  do {
    for (t = Object.getOwnPropertyNames(e), l = t.length; l-- > 0; )
      o = t[l], (!i || i(o, e, n)) && !s[o] && (n[o] = e[o], s[o] = !0);
    e = r !== !1 && Ve(e);
  } while (e && (!r || r(e, n)) && e !== Object.prototype);
  return n;
}, Kt = (e, n, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= n.length;
  const i = e.indexOf(n, r);
  return i !== -1 && i === r;
}, Wt = (e) => {
  if (!e)
    return null;
  if (ee(e))
    return e;
  let n = e.length;
  if (!Pn(n))
    return null;
  const r = new Array(n);
  for (; n-- > 0; )
    r[n] = e[n];
  return r;
}, zt = /* @__PURE__ */ ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && Ve(Uint8Array)), Gt = (e, n) => {
  const i = (e && e[Symbol.iterator]).call(e);
  let t;
  for (; (t = i.next()) && !t.done; ) {
    const l = t.value;
    n.call(e, l[0], l[1]);
  }
}, Jt = (e, n) => {
  let r;
  const i = [];
  for (; (r = e.exec(n)) !== null; )
    i.push(r);
  return i;
}, Xt = U("HTMLFormElement"), Qt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, i, t) {
    return i.toUpperCase() + t;
  }
), on = (({ hasOwnProperty: e }) => (n, r) => e.call(n, r))(Object.prototype), Zt = U("RegExp"), Mn = (e, n) => {
  const r = Object.getOwnPropertyDescriptors(e), i = {};
  ce(r, (t, l) => {
    let o;
    (o = n(t, l, e)) !== !1 && (i[l] = o || t);
  }), Object.defineProperties(e, i);
}, eo = (e) => {
  Mn(e, (n, r) => {
    if (L(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const i = e[r];
    if (L(i)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, no = (e, n) => {
  const r = {}, i = (t) => {
    t.forEach((l) => {
      r[l] = !0;
    });
  };
  return ee(e) ? i(e) : i(String(e).split(n)), r;
}, ro = () => {
}, io = (e, n) => (e = +e, Number.isFinite(e) ? e : n), Oe = "abcdefghijklmnopqrstuvwxyz", ln = "0123456789", jn = {
  DIGIT: ln,
  ALPHA: Oe,
  ALPHA_DIGIT: Oe + Oe.toUpperCase() + ln
}, to = (e = 16, n = jn.ALPHA_DIGIT) => {
  let r = "";
  const { length: i } = n;
  for (; e--; )
    r += n[Math.random() * i | 0];
  return r;
};
function oo(e) {
  return !!(e && L(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const lo = (e) => {
  const n = new Array(10), r = (i, t) => {
    if (Ee(i)) {
      if (n.indexOf(i) >= 0)
        return;
      if (!("toJSON" in i)) {
        n[t] = i;
        const l = ee(i) ? [] : {};
        return ce(i, (o, s) => {
          const a = r(o, t + 1);
          !te(a) && (l[s] = a);
        }), n[t] = void 0, l;
      }
    }
    return i;
  };
  return r(e, 0);
}, so = U("AsyncFunction"), ao = (e) => e && (Ee(e) || L(e)) && L(e.then) && L(e.catch), f = {
  isArray: ee,
  isArrayBuffer: Ln,
  isBuffer: Rt,
  isFormData: Mt,
  isArrayBufferView: Nt,
  isString: kt,
  isNumber: Pn,
  isBoolean: It,
  isObject: Ee,
  isPlainObject: pe,
  isUndefined: te,
  isDate: Lt,
  isFile: Pt,
  isBlob: Dt,
  isRegExp: Zt,
  isFunction: L,
  isStream: Ut,
  isURLSearchParams: jt,
  isTypedArray: zt,
  isFileList: Bt,
  forEach: ce,
  merge: Le,
  extend: $t,
  trim: Ht,
  stripBOM: qt,
  inherits: Yt,
  toFlatObject: Vt,
  kindOf: ve,
  kindOfTest: U,
  endsWith: Kt,
  toArray: Wt,
  forEachEntry: Gt,
  matchAll: Jt,
  isHTMLForm: Xt,
  hasOwnProperty: on,
  hasOwnProp: on,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Mn,
  freezeMethods: eo,
  toObjectSet: no,
  toCamelCase: Qt,
  noop: ro,
  toFiniteNumber: io,
  findKey: Dn,
  global: Bn,
  isContextDefined: Un,
  ALPHABET: jn,
  generateString: to,
  isSpecCompliantForm: oo,
  toJSONObject: lo,
  isAsyncFn: so,
  isThenable: ao
};
function E(e, n, r, i, t) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), r && (this.config = r), i && (this.request = i), t && (this.response = t);
}
f.inherits(E, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: f.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Hn = E.prototype, $n = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  $n[e] = { value: e };
});
Object.defineProperties(E, $n);
Object.defineProperty(Hn, "isAxiosError", { value: !0 });
E.from = (e, n, r, i, t, l) => {
  const o = Object.create(Hn);
  return f.toFlatObject(e, o, function(a) {
    return a !== Error.prototype;
  }, (s) => s !== "isAxiosError"), E.call(o, e.message, n, r, i, t), o.cause = e, o.name = e.name, l && Object.assign(o, l), o;
};
const co = null;
function Pe(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function qn(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function sn(e, n, r) {
  return e ? e.concat(n).map(function(t, l) {
    return t = qn(t), !r && l ? "[" + t + "]" : t;
  }).join(r ? "." : "") : n;
}
function uo(e) {
  return f.isArray(e) && !e.some(Pe);
}
const fo = f.toFlatObject(f, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function we(e, n, r) {
  if (!f.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), r = f.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, b) {
    return !f.isUndefined(b[h]);
  });
  const i = r.metaTokens, t = r.visitor || p, l = r.dots, o = r.indexes, a = (r.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(n);
  if (!f.isFunction(t))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null)
      return "";
    if (f.isDate(d))
      return d.toISOString();
    if (!a && f.isBlob(d))
      throw new E("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(d) || f.isTypedArray(d) ? a && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function p(d, h, b) {
    let w = d;
    if (d && !b && typeof d == "object") {
      if (f.endsWith(h, "{}"))
        h = i ? h : h.slice(0, -2), d = JSON.stringify(d);
      else if (f.isArray(d) && uo(d) || (f.isFileList(d) || f.endsWith(h, "[]")) && (w = f.toArray(d)))
        return h = qn(h), w.forEach(function(H, Hr) {
          !(f.isUndefined(H) || H === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? sn([h], Hr, l) : o === null ? h : h + "[]",
            u(H)
          );
        }), !1;
    }
    return Pe(d) ? !0 : (n.append(sn(b, h, l), u(d)), !1);
  }
  const c = [], y = Object.assign(fo, {
    defaultVisitor: p,
    convertValue: u,
    isVisitable: Pe
  });
  function g(d, h) {
    if (!f.isUndefined(d)) {
      if (c.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      c.push(d), f.forEach(d, function(w, v) {
        (!(f.isUndefined(w) || w === null) && t.call(
          n,
          w,
          f.isString(v) ? v.trim() : v,
          h,
          y
        )) === !0 && g(w, h ? h.concat(v) : [v]);
      }), c.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), n;
}
function an(e) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(i) {
    return n[i];
  });
}
function Ke(e, n) {
  this._pairs = [], e && we(e, this, n);
}
const Yn = Ke.prototype;
Yn.append = function(n, r) {
  this._pairs.push([n, r]);
};
Yn.toString = function(n) {
  const r = n ? function(i) {
    return n.call(this, i, an);
  } : an;
  return this._pairs.map(function(t) {
    return r(t[0]) + "=" + r(t[1]);
  }, "").join("&");
};
function po(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Vn(e, n, r) {
  if (!n)
    return e;
  const i = r && r.encode || po, t = r && r.serialize;
  let l;
  if (t ? l = t(n, r) : l = f.isURLSearchParams(n) ? n.toString() : new Ke(n, r).toString(i), l) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + l;
  }
  return e;
}
class ho {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(n, r, i) {
    return this.handlers.push({
      fulfilled: n,
      rejected: r,
      synchronous: i ? i.synchronous : !1,
      runWhen: i ? i.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(n) {
    this.handlers[n] && (this.handlers[n] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(n) {
    f.forEach(this.handlers, function(i) {
      i !== null && n(i);
    });
  }
}
const cn = ho, Kn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, mo = typeof URLSearchParams < "u" ? URLSearchParams : Ke, yo = typeof FormData < "u" ? FormData : null, go = typeof Blob < "u" ? Blob : null, xo = {
  isBrowser: !0,
  classes: {
    URLSearchParams: mo,
    FormData: yo,
    Blob: go
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Wn = typeof window < "u" && typeof document < "u", Ao = ((e) => Wn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), bo = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Wn,
  hasStandardBrowserEnv: Ao,
  hasStandardBrowserWebWorkerEnv: bo
}, Symbol.toStringTag, { value: "Module" })), D = {
  ...vo,
  ...xo
};
function _o(e, n) {
  return we(e, new D.classes.URLSearchParams(), Object.assign({
    visitor: function(r, i, t, l) {
      return D.isNode && f.isBuffer(r) ? (this.append(i, r.toString("base64")), !1) : l.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function Eo(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function wo(e) {
  const n = {}, r = Object.keys(e);
  let i;
  const t = r.length;
  let l;
  for (i = 0; i < t; i++)
    l = r[i], n[l] = e[l];
  return n;
}
function zn(e) {
  function n(r, i, t, l) {
    let o = r[l++];
    const s = Number.isFinite(+o), a = l >= r.length;
    return o = !o && f.isArray(t) ? t.length : o, a ? (f.hasOwnProp(t, o) ? t[o] = [t[o], i] : t[o] = i, !s) : ((!t[o] || !f.isObject(t[o])) && (t[o] = []), n(r, i, t[o], l) && f.isArray(t[o]) && (t[o] = wo(t[o])), !s);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const r = {};
    return f.forEachEntry(e, (i, t) => {
      n(Eo(i), t, r, 0);
    }), r;
  }
  return null;
}
function So(e, n, r) {
  if (f.isString(e))
    try {
      return (n || JSON.parse)(e), f.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (r || JSON.stringify)(e);
}
const We = {
  transitional: Kn,
  adapter: ["xhr", "http"],
  transformRequest: [function(n, r) {
    const i = r.getContentType() || "", t = i.indexOf("application/json") > -1, l = f.isObject(n);
    if (l && f.isHTMLForm(n) && (n = new FormData(n)), f.isFormData(n))
      return t && t ? JSON.stringify(zn(n)) : n;
    if (f.isArrayBuffer(n) || f.isBuffer(n) || f.isStream(n) || f.isFile(n) || f.isBlob(n))
      return n;
    if (f.isArrayBufferView(n))
      return n.buffer;
    if (f.isURLSearchParams(n))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let s;
    if (l) {
      if (i.indexOf("application/x-www-form-urlencoded") > -1)
        return _o(n, this.formSerializer).toString();
      if ((s = f.isFileList(n)) || i.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return we(
          s ? { "files[]": n } : n,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return l || t ? (r.setContentType("application/json", !1), So(n)) : n;
  }],
  transformResponse: [function(n) {
    const r = this.transitional || We.transitional, i = r && r.forcedJSONParsing, t = this.responseType === "json";
    if (n && f.isString(n) && (i && !this.responseType || t)) {
      const o = !(r && r.silentJSONParsing) && t;
      try {
        return JSON.parse(n);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? E.from(s, E.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return n;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: D.classes.FormData,
    Blob: D.classes.Blob
  },
  validateStatus: function(n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
f.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  We.headers[e] = {};
});
const ze = We, Co = f.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Oo = (e) => {
  const n = {};
  let r, i, t;
  return e && e.split(`
`).forEach(function(o) {
    t = o.indexOf(":"), r = o.substring(0, t).trim().toLowerCase(), i = o.substring(t + 1).trim(), !(!r || n[r] && Co[r]) && (r === "set-cookie" ? n[r] ? n[r].push(i) : n[r] = [i] : n[r] = n[r] ? n[r] + ", " + i : i);
  }), n;
}, un = Symbol("internals");
function re(e) {
  return e && String(e).trim().toLowerCase();
}
function de(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(de) : String(e);
}
function To(e) {
  const n = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; i = r.exec(e); )
    n[i[1]] = i[2];
  return n;
}
const Fo = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Te(e, n, r, i, t) {
  if (f.isFunction(i))
    return i.call(this, n, r);
  if (t && (n = r), !!f.isString(n)) {
    if (f.isString(i))
      return n.indexOf(i) !== -1;
    if (f.isRegExp(i))
      return i.test(n);
  }
}
function Ro(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, r, i) => r.toUpperCase() + i);
}
function No(e, n) {
  const r = f.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(e, i + r, {
      value: function(t, l, o) {
        return this[i].call(this, n, t, l, o);
      },
      configurable: !0
    });
  });
}
class Se {
  constructor(n) {
    n && this.set(n);
  }
  set(n, r, i) {
    const t = this;
    function l(s, a, u) {
      const p = re(a);
      if (!p)
        throw new Error("header name must be a non-empty string");
      const c = f.findKey(t, p);
      (!c || t[c] === void 0 || u === !0 || u === void 0 && t[c] !== !1) && (t[c || a] = de(s));
    }
    const o = (s, a) => f.forEach(s, (u, p) => l(u, p, a));
    return f.isPlainObject(n) || n instanceof this.constructor ? o(n, r) : f.isString(n) && (n = n.trim()) && !Fo(n) ? o(Oo(n), r) : n != null && l(r, n, i), this;
  }
  get(n, r) {
    if (n = re(n), n) {
      const i = f.findKey(this, n);
      if (i) {
        const t = this[i];
        if (!r)
          return t;
        if (r === !0)
          return To(t);
        if (f.isFunction(r))
          return r.call(this, t, i);
        if (f.isRegExp(r))
          return r.exec(t);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, r) {
    if (n = re(n), n) {
      const i = f.findKey(this, n);
      return !!(i && this[i] !== void 0 && (!r || Te(this, this[i], i, r)));
    }
    return !1;
  }
  delete(n, r) {
    const i = this;
    let t = !1;
    function l(o) {
      if (o = re(o), o) {
        const s = f.findKey(i, o);
        s && (!r || Te(i, i[s], s, r)) && (delete i[s], t = !0);
      }
    }
    return f.isArray(n) ? n.forEach(l) : l(n), t;
  }
  clear(n) {
    const r = Object.keys(this);
    let i = r.length, t = !1;
    for (; i--; ) {
      const l = r[i];
      (!n || Te(this, this[l], l, n, !0)) && (delete this[l], t = !0);
    }
    return t;
  }
  normalize(n) {
    const r = this, i = {};
    return f.forEach(this, (t, l) => {
      const o = f.findKey(i, l);
      if (o) {
        r[o] = de(t), delete r[l];
        return;
      }
      const s = n ? Ro(l) : String(l).trim();
      s !== l && delete r[l], r[s] = de(t), i[s] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const r = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (i, t) => {
      i != null && i !== !1 && (r[t] = n && f.isArray(i) ? i.join(", ") : i);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, r]) => n + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...r) {
    const i = new this(n);
    return r.forEach((t) => i.set(t)), i;
  }
  static accessor(n) {
    const i = (this[un] = this[un] = {
      accessors: {}
    }).accessors, t = this.prototype;
    function l(o) {
      const s = re(o);
      i[s] || (No(t, o), i[s] = !0);
    }
    return f.isArray(n) ? n.forEach(l) : l(n), this;
  }
}
Se.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors(Se.prototype, ({ value: e }, n) => {
  let r = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => e,
    set(i) {
      this[r] = i;
    }
  };
});
f.freezeMethods(Se);
const M = Se;
function Fe(e, n) {
  const r = this || ze, i = n || r, t = M.from(i.headers);
  let l = i.data;
  return f.forEach(e, function(s) {
    l = s.call(r, l, t.normalize(), n ? n.status : void 0);
  }), t.normalize(), l;
}
function Gn(e) {
  return !!(e && e.__CANCEL__);
}
function ue(e, n, r) {
  E.call(this, e ?? "canceled", E.ERR_CANCELED, n, r), this.name = "CanceledError";
}
f.inherits(ue, E, {
  __CANCEL__: !0
});
function ko(e, n, r) {
  const i = r.config.validateStatus;
  !r.status || !i || i(r.status) ? e(r) : n(new E(
    "Request failed with status code " + r.status,
    [E.ERR_BAD_REQUEST, E.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Io = D.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, n, r, i, t, l) {
      const o = [e + "=" + encodeURIComponent(n)];
      f.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), f.isString(i) && o.push("path=" + i), f.isString(t) && o.push("domain=" + t), l === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const n = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return n ? decodeURIComponent(n[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Lo(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Po(e, n) {
  return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function Jn(e, n) {
  return e && !Lo(n) ? Po(e, n) : n;
}
const Do = D.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const n = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let i;
    function t(l) {
      let o = l;
      return n && (r.setAttribute("href", o), o = r.href), r.setAttribute("href", o), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return i = t(window.location.href), function(o) {
      const s = f.isString(o) ? t(o) : o;
      return s.protocol === i.protocol && s.host === i.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function Bo(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function Uo(e, n) {
  e = e || 10;
  const r = new Array(e), i = new Array(e);
  let t = 0, l = 0, o;
  return n = n !== void 0 ? n : 1e3, function(a) {
    const u = Date.now(), p = i[l];
    o || (o = u), r[t] = a, i[t] = u;
    let c = l, y = 0;
    for (; c !== t; )
      y += r[c++], c = c % e;
    if (t = (t + 1) % e, t === l && (l = (l + 1) % e), u - o < n)
      return;
    const g = p && u - p;
    return g ? Math.round(y * 1e3 / g) : void 0;
  };
}
function fn(e, n) {
  let r = 0;
  const i = Uo(50, 250);
  return (t) => {
    const l = t.loaded, o = t.lengthComputable ? t.total : void 0, s = l - r, a = i(s), u = l <= o;
    r = l;
    const p = {
      loaded: l,
      total: o,
      progress: o ? l / o : void 0,
      bytes: s,
      rate: a || void 0,
      estimated: a && o && u ? (o - l) / a : void 0,
      event: t
    };
    p[n ? "download" : "upload"] = !0, e(p);
  };
}
const Mo = typeof XMLHttpRequest < "u", jo = Mo && function(e) {
  return new Promise(function(r, i) {
    let t = e.data;
    const l = M.from(e.headers).normalize();
    let { responseType: o, withXSRFToken: s } = e, a;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    let p;
    if (f.isFormData(t)) {
      if (D.hasStandardBrowserEnv || D.hasStandardBrowserWebWorkerEnv)
        l.setContentType(!1);
      else if ((p = l.getContentType()) !== !1) {
        const [h, ...b] = p ? p.split(";").map((w) => w.trim()).filter(Boolean) : [];
        l.setContentType([h || "multipart/form-data", ...b].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", b = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      l.set("Authorization", "Basic " + btoa(h + ":" + b));
    }
    const y = Jn(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Vn(y, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function g() {
      if (!c)
        return;
      const h = M.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), w = {
        data: !o || o === "text" || o === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: h,
        config: e,
        request: c
      };
      ko(function(H) {
        r(H), u();
      }, function(H) {
        i(H), u();
      }, w), c = null;
    }
    if ("onloadend" in c ? c.onloadend = g : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, c.onabort = function() {
      c && (i(new E("Request aborted", E.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      i(new E("Network Error", E.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let b = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const w = e.transitional || Kn;
      e.timeoutErrorMessage && (b = e.timeoutErrorMessage), i(new E(
        b,
        w.clarifyTimeoutError ? E.ETIMEDOUT : E.ECONNABORTED,
        e,
        c
      )), c = null;
    }, D.hasStandardBrowserEnv && (s && f.isFunction(s) && (s = s(e)), s || s !== !1 && Do(y))) {
      const h = e.xsrfHeaderName && e.xsrfCookieName && Io.read(e.xsrfCookieName);
      h && l.set(e.xsrfHeaderName, h);
    }
    t === void 0 && l.setContentType(null), "setRequestHeader" in c && f.forEach(l.toJSON(), function(b, w) {
      c.setRequestHeader(w, b);
    }), f.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), o && o !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", fn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", fn(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (h) => {
      c && (i(!h || h.type ? new ue(null, e, c) : h), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const d = Bo(y);
    if (d && D.protocols.indexOf(d) === -1) {
      i(new E("Unsupported protocol " + d + ":", E.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(t || null);
  });
}, De = {
  http: co,
  xhr: jo
};
f.forEach(De, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const pn = (e) => `- ${e}`, Ho = (e) => f.isFunction(e) || e === null || e === !1, Xn = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: n } = e;
    let r, i;
    const t = {};
    for (let l = 0; l < n; l++) {
      r = e[l];
      let o;
      if (i = r, !Ho(r) && (i = De[(o = String(r)).toLowerCase()], i === void 0))
        throw new E(`Unknown adapter '${o}'`);
      if (i)
        break;
      t[o || "#" + l] = i;
    }
    if (!i) {
      const l = Object.entries(t).map(
        ([s, a]) => `adapter ${s} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = n ? l.length > 1 ? `since :
` + l.map(pn).join(`
`) : " " + pn(l[0]) : "as no adapter specified";
      throw new E(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return i;
  },
  adapters: De
};
function Re(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ue(null, e);
}
function dn(e) {
  return Re(e), e.headers = M.from(e.headers), e.data = Fe.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Xn.getAdapter(e.adapter || ze.adapter)(e).then(function(i) {
    return Re(e), i.data = Fe.call(
      e,
      e.transformResponse,
      i
    ), i.headers = M.from(i.headers), i;
  }, function(i) {
    return Gn(i) || (Re(e), i && i.response && (i.response.data = Fe.call(
      e,
      e.transformResponse,
      i.response
    ), i.response.headers = M.from(i.response.headers))), Promise.reject(i);
  });
}
const hn = (e) => e instanceof M ? e.toJSON() : e;
function Q(e, n) {
  n = n || {};
  const r = {};
  function i(u, p, c) {
    return f.isPlainObject(u) && f.isPlainObject(p) ? f.merge.call({ caseless: c }, u, p) : f.isPlainObject(p) ? f.merge({}, p) : f.isArray(p) ? p.slice() : p;
  }
  function t(u, p, c) {
    if (f.isUndefined(p)) {
      if (!f.isUndefined(u))
        return i(void 0, u, c);
    } else
      return i(u, p, c);
  }
  function l(u, p) {
    if (!f.isUndefined(p))
      return i(void 0, p);
  }
  function o(u, p) {
    if (f.isUndefined(p)) {
      if (!f.isUndefined(u))
        return i(void 0, u);
    } else
      return i(void 0, p);
  }
  function s(u, p, c) {
    if (c in n)
      return i(u, p);
    if (c in e)
      return i(void 0, u);
  }
  const a = {
    url: l,
    method: l,
    data: l,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: s,
    headers: (u, p) => t(hn(u), hn(p), !0)
  };
  return f.forEach(Object.keys(Object.assign({}, e, n)), function(p) {
    const c = a[p] || t, y = c(e[p], n[p], p);
    f.isUndefined(y) && c !== s || (r[p] = y);
  }), r;
}
const Qn = "1.6.2", Ge = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  Ge[e] = function(i) {
    return typeof i === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const mn = {};
Ge.transitional = function(n, r, i) {
  function t(l, o) {
    return "[Axios v" + Qn + "] Transitional option '" + l + "'" + o + (i ? ". " + i : "");
  }
  return (l, o, s) => {
    if (n === !1)
      throw new E(
        t(o, " has been removed" + (r ? " in " + r : "")),
        E.ERR_DEPRECATED
      );
    return r && !mn[o] && (mn[o] = !0, console.warn(
      t(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), n ? n(l, o, s) : !0;
  };
};
function $o(e, n, r) {
  if (typeof e != "object")
    throw new E("options must be an object", E.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(e);
  let t = i.length;
  for (; t-- > 0; ) {
    const l = i[t], o = n[l];
    if (o) {
      const s = e[l], a = s === void 0 || o(s, l, e);
      if (a !== !0)
        throw new E("option " + l + " must be " + a, E.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new E("Unknown option " + l, E.ERR_BAD_OPTION);
  }
}
const Be = {
  assertOptions: $o,
  validators: Ge
}, $ = Be.validators;
class me {
  constructor(n) {
    this.defaults = n, this.interceptors = {
      request: new cn(),
      response: new cn()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(n, r) {
    typeof n == "string" ? (r = r || {}, r.url = n) : r = n || {}, r = Q(this.defaults, r);
    const { transitional: i, paramsSerializer: t, headers: l } = r;
    i !== void 0 && Be.assertOptions(i, {
      silentJSONParsing: $.transitional($.boolean),
      forcedJSONParsing: $.transitional($.boolean),
      clarifyTimeoutError: $.transitional($.boolean)
    }, !1), t != null && (f.isFunction(t) ? r.paramsSerializer = {
      serialize: t
    } : Be.assertOptions(t, {
      encode: $.function,
      serialize: $.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = l && f.merge(
      l.common,
      l[r.method]
    );
    l && f.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete l[d];
      }
    ), r.headers = M.concat(o, l);
    const s = [];
    let a = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(r) === !1 || (a = a && h.synchronous, s.unshift(h.fulfilled, h.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(h) {
      u.push(h.fulfilled, h.rejected);
    });
    let p, c = 0, y;
    if (!a) {
      const d = [dn.bind(this), void 0];
      for (d.unshift.apply(d, s), d.push.apply(d, u), y = d.length, p = Promise.resolve(r); c < y; )
        p = p.then(d[c++], d[c++]);
      return p;
    }
    y = s.length;
    let g = r;
    for (c = 0; c < y; ) {
      const d = s[c++], h = s[c++];
      try {
        g = d(g);
      } catch (b) {
        h.call(this, b);
        break;
      }
    }
    try {
      p = dn.call(this, g);
    } catch (d) {
      return Promise.reject(d);
    }
    for (c = 0, y = u.length; c < y; )
      p = p.then(u[c++], u[c++]);
    return p;
  }
  getUri(n) {
    n = Q(this.defaults, n);
    const r = Jn(n.baseURL, n.url);
    return Vn(r, n.params, n.paramsSerializer);
  }
}
f.forEach(["delete", "get", "head", "options"], function(n) {
  me.prototype[n] = function(r, i) {
    return this.request(Q(i || {}, {
      method: n,
      url: r,
      data: (i || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(n) {
  function r(i) {
    return function(l, o, s) {
      return this.request(Q(s || {}, {
        method: n,
        headers: i ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: l,
        data: o
      }));
    };
  }
  me.prototype[n] = r(), me.prototype[n + "Form"] = r(!0);
});
const he = me;
class Je {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(l) {
      r = l;
    });
    const i = this;
    this.promise.then((t) => {
      if (!i._listeners)
        return;
      let l = i._listeners.length;
      for (; l-- > 0; )
        i._listeners[l](t);
      i._listeners = null;
    }), this.promise.then = (t) => {
      let l;
      const o = new Promise((s) => {
        i.subscribe(s), l = s;
      }).then(t);
      return o.cancel = function() {
        i.unsubscribe(l);
      }, o;
    }, n(function(l, o, s) {
      i.reason || (i.reason = new ue(l, o, s), r(i.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : this._listeners = [n];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(n) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(n);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let n;
    return {
      token: new Je(function(t) {
        n = t;
      }),
      cancel: n
    };
  }
}
const qo = Je;
function Yo(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Vo(e) {
  return f.isObject(e) && e.isAxiosError === !0;
}
const Ue = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Ue).forEach(([e, n]) => {
  Ue[n] = e;
});
const Ko = Ue;
function Zn(e) {
  const n = new he(e), r = In(he.prototype.request, n);
  return f.extend(r, he.prototype, n, { allOwnKeys: !0 }), f.extend(r, n, null, { allOwnKeys: !0 }), r.create = function(t) {
    return Zn(Q(e, t));
  }, r;
}
const O = Zn(ze);
O.Axios = he;
O.CanceledError = ue;
O.CancelToken = qo;
O.isCancel = Gn;
O.VERSION = Qn;
O.toFormData = we;
O.AxiosError = E;
O.Cancel = O.CanceledError;
O.all = function(n) {
  return Promise.all(n);
};
O.spread = Yo;
O.isAxiosError = Vo;
O.mergeConfig = Q;
O.AxiosHeaders = M;
O.formToJSON = (e) => zn(f.isHTMLForm(e) ? new FormData(e) : e);
O.getAdapter = Xn.getAdapter;
O.HttpStatusCode = Ko;
O.default = O;
const Wo = O;
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function er(e) {
  return typeof e > "u" || e === null;
}
function zo(e) {
  return typeof e == "object" && e !== null;
}
function Go(e) {
  return Array.isArray(e) ? e : er(e) ? [] : [e];
}
function Jo(e, n) {
  var r, i, t, l;
  if (n)
    for (l = Object.keys(n), r = 0, i = l.length; r < i; r += 1)
      t = l[r], e[t] = n[t];
  return e;
}
function Xo(e, n) {
  var r = "", i;
  for (i = 0; i < n; i += 1)
    r += e;
  return r;
}
function Qo(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
var Zo = er, el = zo, nl = Go, rl = Xo, il = Qo, tl = Jo, T = {
  isNothing: Zo,
  isObject: el,
  toArray: nl,
  repeat: rl,
  isNegativeZero: il,
  extend: tl
};
function nr(e, n) {
  var r = "", i = e.reason || "(unknown reason)";
  return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '), r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !n && e.mark.snippet && (r += `

` + e.mark.snippet), i + " " + r) : i;
}
function oe(e, n) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = n, this.message = nr(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
oe.prototype = Object.create(Error.prototype);
oe.prototype.constructor = oe;
oe.prototype.toString = function(n) {
  return this.name + ": " + nr(this, n);
};
var N = oe;
function Ne(e, n, r, i, t) {
  var l = "", o = "", s = Math.floor(t / 2) - 1;
  return i - n > s && (l = " ... ", n = i - s + l.length), r - i > s && (o = " ...", r = i + s - o.length), {
    str: l + e.slice(n, r).replace(/\t/g, "→") + o,
    pos: i - n + l.length
    // relative position
  };
}
function ke(e, n) {
  return T.repeat(" ", n - e.length) + e;
}
function ol(e, n) {
  if (n = Object.create(n || null), !e.buffer)
    return null;
  n.maxLength || (n.maxLength = 79), typeof n.indent != "number" && (n.indent = 1), typeof n.linesBefore != "number" && (n.linesBefore = 3), typeof n.linesAfter != "number" && (n.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, i = [0], t = [], l, o = -1; l = r.exec(e.buffer); )
    t.push(l.index), i.push(l.index + l[0].length), e.position <= l.index && o < 0 && (o = i.length - 2);
  o < 0 && (o = i.length - 1);
  var s = "", a, u, p = Math.min(e.line + n.linesAfter, t.length).toString().length, c = n.maxLength - (n.indent + p + 3);
  for (a = 1; a <= n.linesBefore && !(o - a < 0); a++)
    u = Ne(
      e.buffer,
      i[o - a],
      t[o - a],
      e.position - (i[o] - i[o - a]),
      c
    ), s = T.repeat(" ", n.indent) + ke((e.line - a + 1).toString(), p) + " | " + u.str + `
` + s;
  for (u = Ne(e.buffer, i[o], t[o], e.position, c), s += T.repeat(" ", n.indent) + ke((e.line + 1).toString(), p) + " | " + u.str + `
`, s += T.repeat("-", n.indent + p + 3 + u.pos) + `^
`, a = 1; a <= n.linesAfter && !(o + a >= t.length); a++)
    u = Ne(
      e.buffer,
      i[o + a],
      t[o + a],
      e.position - (i[o] - i[o + a]),
      c
    ), s += T.repeat(" ", n.indent) + ke((e.line + a + 1).toString(), p) + " | " + u.str + `
`;
  return s.replace(/\n$/, "");
}
var ll = ol, sl = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], al = [
  "scalar",
  "sequence",
  "mapping"
];
function cl(e) {
  var n = {};
  return e !== null && Object.keys(e).forEach(function(r) {
    e[r].forEach(function(i) {
      n[String(i)] = r;
    });
  }), n;
}
function ul(e, n) {
  if (n = n || {}, Object.keys(n).forEach(function(r) {
    if (sl.indexOf(r) === -1)
      throw new N('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
  }), this.options = n, this.tag = e, this.kind = n.kind || null, this.resolve = n.resolve || function() {
    return !0;
  }, this.construct = n.construct || function(r) {
    return r;
  }, this.instanceOf = n.instanceOf || null, this.predicate = n.predicate || null, this.represent = n.represent || null, this.representName = n.representName || null, this.defaultStyle = n.defaultStyle || null, this.multi = n.multi || !1, this.styleAliases = cl(n.styleAliases || null), al.indexOf(this.kind) === -1)
    throw new N('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
var F = ul;
function yn(e, n) {
  var r = [];
  return e[n].forEach(function(i) {
    var t = r.length;
    r.forEach(function(l, o) {
      l.tag === i.tag && l.kind === i.kind && l.multi === i.multi && (t = o);
    }), r[t] = i;
  }), r;
}
function fl() {
  var e = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, n, r;
  function i(t) {
    t.multi ? (e.multi[t.kind].push(t), e.multi.fallback.push(t)) : e[t.kind][t.tag] = e.fallback[t.tag] = t;
  }
  for (n = 0, r = arguments.length; n < r; n += 1)
    arguments[n].forEach(i);
  return e;
}
function Me(e) {
  return this.extend(e);
}
Me.prototype.extend = function(n) {
  var r = [], i = [];
  if (n instanceof F)
    i.push(n);
  else if (Array.isArray(n))
    i = i.concat(n);
  else if (n && (Array.isArray(n.implicit) || Array.isArray(n.explicit)))
    n.implicit && (r = r.concat(n.implicit)), n.explicit && (i = i.concat(n.explicit));
  else
    throw new N("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(l) {
    if (!(l instanceof F))
      throw new N("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (l.loadKind && l.loadKind !== "scalar")
      throw new N("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (l.multi)
      throw new N("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), i.forEach(function(l) {
    if (!(l instanceof F))
      throw new N("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var t = Object.create(Me.prototype);
  return t.implicit = (this.implicit || []).concat(r), t.explicit = (this.explicit || []).concat(i), t.compiledImplicit = yn(t, "implicit"), t.compiledExplicit = yn(t, "explicit"), t.compiledTypeMap = fl(t.compiledImplicit, t.compiledExplicit), t;
};
var rr = Me, ir = new F("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(e) {
    return e !== null ? e : "";
  }
}), tr = new F("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(e) {
    return e !== null ? e : [];
  }
}), or = new F("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(e) {
    return e !== null ? e : {};
  }
}), lr = new rr({
  explicit: [
    ir,
    tr,
    or
  ]
});
function pl(e) {
  if (e === null)
    return !0;
  var n = e.length;
  return n === 1 && e === "~" || n === 4 && (e === "null" || e === "Null" || e === "NULL");
}
function dl() {
  return null;
}
function hl(e) {
  return e === null;
}
var sr = new F("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: pl,
  construct: dl,
  predicate: hl,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function ml(e) {
  if (e === null)
    return !1;
  var n = e.length;
  return n === 4 && (e === "true" || e === "True" || e === "TRUE") || n === 5 && (e === "false" || e === "False" || e === "FALSE");
}
function yl(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
function gl(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
var ar = new F("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: ml,
  construct: yl,
  predicate: gl,
  represent: {
    lowercase: function(e) {
      return e ? "true" : "false";
    },
    uppercase: function(e) {
      return e ? "TRUE" : "FALSE";
    },
    camelcase: function(e) {
      return e ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function xl(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
function Al(e) {
  return 48 <= e && e <= 55;
}
function bl(e) {
  return 48 <= e && e <= 57;
}
function vl(e) {
  if (e === null)
    return !1;
  var n = e.length, r = 0, i = !1, t;
  if (!n)
    return !1;
  if (t = e[r], (t === "-" || t === "+") && (t = e[++r]), t === "0") {
    if (r + 1 === n)
      return !0;
    if (t = e[++r], t === "b") {
      for (r++; r < n; r++)
        if (t = e[r], t !== "_") {
          if (t !== "0" && t !== "1")
            return !1;
          i = !0;
        }
      return i && t !== "_";
    }
    if (t === "x") {
      for (r++; r < n; r++)
        if (t = e[r], t !== "_") {
          if (!xl(e.charCodeAt(r)))
            return !1;
          i = !0;
        }
      return i && t !== "_";
    }
    if (t === "o") {
      for (r++; r < n; r++)
        if (t = e[r], t !== "_") {
          if (!Al(e.charCodeAt(r)))
            return !1;
          i = !0;
        }
      return i && t !== "_";
    }
  }
  if (t === "_")
    return !1;
  for (; r < n; r++)
    if (t = e[r], t !== "_") {
      if (!bl(e.charCodeAt(r)))
        return !1;
      i = !0;
    }
  return !(!i || t === "_");
}
function _l(e) {
  var n = e, r = 1, i;
  if (n.indexOf("_") !== -1 && (n = n.replace(/_/g, "")), i = n[0], (i === "-" || i === "+") && (i === "-" && (r = -1), n = n.slice(1), i = n[0]), n === "0")
    return 0;
  if (i === "0") {
    if (n[1] === "b")
      return r * parseInt(n.slice(2), 2);
    if (n[1] === "x")
      return r * parseInt(n.slice(2), 16);
    if (n[1] === "o")
      return r * parseInt(n.slice(2), 8);
  }
  return r * parseInt(n, 10);
}
function El(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !T.isNegativeZero(e);
}
var cr = new F("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: vl,
  construct: _l,
  predicate: El,
  represent: {
    binary: function(e) {
      return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
    },
    octal: function(e) {
      return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
    },
    decimal: function(e) {
      return e.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(e) {
      return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), wl = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function Sl(e) {
  return !(e === null || !wl.test(e) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e[e.length - 1] === "_");
}
function Cl(e) {
  var n, r;
  return n = e.replace(/_/g, "").toLowerCase(), r = n[0] === "-" ? -1 : 1, "+-".indexOf(n[0]) >= 0 && (n = n.slice(1)), n === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : n === ".nan" ? NaN : r * parseFloat(n, 10);
}
var Ol = /^[-+]?[0-9]+e/;
function Tl(e, n) {
  var r;
  if (isNaN(e))
    switch (n) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e)
    switch (n) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e)
    switch (n) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (T.isNegativeZero(e))
    return "-0.0";
  return r = e.toString(10), Ol.test(r) ? r.replace("e", ".e") : r;
}
function Fl(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || T.isNegativeZero(e));
}
var ur = new F("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: Sl,
  construct: Cl,
  predicate: Fl,
  represent: Tl,
  defaultStyle: "lowercase"
}), fr = lr.extend({
  implicit: [
    sr,
    ar,
    cr,
    ur
  ]
}), pr = fr, dr = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), hr = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function Rl(e) {
  return e === null ? !1 : dr.exec(e) !== null || hr.exec(e) !== null;
}
function Nl(e) {
  var n, r, i, t, l, o, s, a = 0, u = null, p, c, y;
  if (n = dr.exec(e), n === null && (n = hr.exec(e)), n === null)
    throw new Error("Date resolve error");
  if (r = +n[1], i = +n[2] - 1, t = +n[3], !n[4])
    return new Date(Date.UTC(r, i, t));
  if (l = +n[4], o = +n[5], s = +n[6], n[7]) {
    for (a = n[7].slice(0, 3); a.length < 3; )
      a += "0";
    a = +a;
  }
  return n[9] && (p = +n[10], c = +(n[11] || 0), u = (p * 60 + c) * 6e4, n[9] === "-" && (u = -u)), y = new Date(Date.UTC(r, i, t, l, o, s, a)), u && y.setTime(y.getTime() - u), y;
}
function kl(e) {
  return e.toISOString();
}
var mr = new F("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: Rl,
  construct: Nl,
  instanceOf: Date,
  represent: kl
});
function Il(e) {
  return e === "<<" || e === null;
}
var yr = new F("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: Il
}), Xe = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Ll(e) {
  if (e === null)
    return !1;
  var n, r, i = 0, t = e.length, l = Xe;
  for (r = 0; r < t; r++)
    if (n = l.indexOf(e.charAt(r)), !(n > 64)) {
      if (n < 0)
        return !1;
      i += 6;
    }
  return i % 8 === 0;
}
function Pl(e) {
  var n, r, i = e.replace(/[\r\n=]/g, ""), t = i.length, l = Xe, o = 0, s = [];
  for (n = 0; n < t; n++)
    n % 4 === 0 && n && (s.push(o >> 16 & 255), s.push(o >> 8 & 255), s.push(o & 255)), o = o << 6 | l.indexOf(i.charAt(n));
  return r = t % 4 * 6, r === 0 ? (s.push(o >> 16 & 255), s.push(o >> 8 & 255), s.push(o & 255)) : r === 18 ? (s.push(o >> 10 & 255), s.push(o >> 2 & 255)) : r === 12 && s.push(o >> 4 & 255), new Uint8Array(s);
}
function Dl(e) {
  var n = "", r = 0, i, t, l = e.length, o = Xe;
  for (i = 0; i < l; i++)
    i % 3 === 0 && i && (n += o[r >> 18 & 63], n += o[r >> 12 & 63], n += o[r >> 6 & 63], n += o[r & 63]), r = (r << 8) + e[i];
  return t = l % 3, t === 0 ? (n += o[r >> 18 & 63], n += o[r >> 12 & 63], n += o[r >> 6 & 63], n += o[r & 63]) : t === 2 ? (n += o[r >> 10 & 63], n += o[r >> 4 & 63], n += o[r << 2 & 63], n += o[64]) : t === 1 && (n += o[r >> 2 & 63], n += o[r << 4 & 63], n += o[64], n += o[64]), n;
}
function Bl(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
var gr = new F("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: Ll,
  construct: Pl,
  predicate: Bl,
  represent: Dl
}), Ul = Object.prototype.hasOwnProperty, Ml = Object.prototype.toString;
function jl(e) {
  if (e === null)
    return !0;
  var n = [], r, i, t, l, o, s = e;
  for (r = 0, i = s.length; r < i; r += 1) {
    if (t = s[r], o = !1, Ml.call(t) !== "[object Object]")
      return !1;
    for (l in t)
      if (Ul.call(t, l))
        if (!o)
          o = !0;
        else
          return !1;
    if (!o)
      return !1;
    if (n.indexOf(l) === -1)
      n.push(l);
    else
      return !1;
  }
  return !0;
}
function Hl(e) {
  return e !== null ? e : [];
}
var xr = new F("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: jl,
  construct: Hl
}), $l = Object.prototype.toString;
function ql(e) {
  if (e === null)
    return !0;
  var n, r, i, t, l, o = e;
  for (l = new Array(o.length), n = 0, r = o.length; n < r; n += 1) {
    if (i = o[n], $l.call(i) !== "[object Object]" || (t = Object.keys(i), t.length !== 1))
      return !1;
    l[n] = [t[0], i[t[0]]];
  }
  return !0;
}
function Yl(e) {
  if (e === null)
    return [];
  var n, r, i, t, l, o = e;
  for (l = new Array(o.length), n = 0, r = o.length; n < r; n += 1)
    i = o[n], t = Object.keys(i), l[n] = [t[0], i[t[0]]];
  return l;
}
var Ar = new F("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: ql,
  construct: Yl
}), Vl = Object.prototype.hasOwnProperty;
function Kl(e) {
  if (e === null)
    return !0;
  var n, r = e;
  for (n in r)
    if (Vl.call(r, n) && r[n] !== null)
      return !1;
  return !0;
}
function Wl(e) {
  return e !== null ? e : {};
}
var br = new F("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: Kl,
  construct: Wl
}), Qe = pr.extend({
  implicit: [
    mr,
    yr
  ],
  explicit: [
    gr,
    xr,
    Ar,
    br
  ]
}), V = Object.prototype.hasOwnProperty, ye = 1, vr = 2, _r = 3, ge = 4, Ie = 1, zl = 2, gn = 3, Gl = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Jl = /[\x85\u2028\u2029]/, Xl = /[,\[\]\{\}]/, Er = /^(?:!|!!|![a-z\-]+!)$/i, wr = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function xn(e) {
  return Object.prototype.toString.call(e);
}
function B(e) {
  return e === 10 || e === 13;
}
function K(e) {
  return e === 9 || e === 32;
}
function k(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
function J(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
function Ql(e) {
  var n;
  return 48 <= e && e <= 57 ? e - 48 : (n = e | 32, 97 <= n && n <= 102 ? n - 97 + 10 : -1);
}
function Zl(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
function es(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
function An(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
function ns(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
    (e - 65536 >> 10) + 55296,
    (e - 65536 & 1023) + 56320
  );
}
var Sr = new Array(256), Cr = new Array(256);
for (var z = 0; z < 256; z++)
  Sr[z] = An(z) ? 1 : 0, Cr[z] = An(z);
function rs(e, n) {
  this.input = e, this.filename = n.filename || null, this.schema = n.schema || Qe, this.onWarning = n.onWarning || null, this.legacy = n.legacy || !1, this.json = n.json || !1, this.listener = n.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function Or(e, n) {
  var r = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    // omit trailing \0
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart
  };
  return r.snippet = ll(r), new N(n, r);
}
function x(e, n) {
  throw Or(e, n);
}
function xe(e, n) {
  e.onWarning && e.onWarning.call(null, Or(e, n));
}
var bn = {
  YAML: function(n, r, i) {
    var t, l, o;
    n.version !== null && x(n, "duplication of %YAML directive"), i.length !== 1 && x(n, "YAML directive accepts exactly one argument"), t = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), t === null && x(n, "ill-formed argument of the YAML directive"), l = parseInt(t[1], 10), o = parseInt(t[2], 10), l !== 1 && x(n, "unacceptable YAML version of the document"), n.version = i[0], n.checkLineBreaks = o < 2, o !== 1 && o !== 2 && xe(n, "unsupported YAML version of the document");
  },
  TAG: function(n, r, i) {
    var t, l;
    i.length !== 2 && x(n, "TAG directive accepts exactly two arguments"), t = i[0], l = i[1], Er.test(t) || x(n, "ill-formed tag handle (first argument) of the TAG directive"), V.call(n.tagMap, t) && x(n, 'there is a previously declared suffix for "' + t + '" tag handle'), wr.test(l) || x(n, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      l = decodeURIComponent(l);
    } catch {
      x(n, "tag prefix is malformed: " + l);
    }
    n.tagMap[t] = l;
  }
};
function Y(e, n, r, i) {
  var t, l, o, s;
  if (n < r) {
    if (s = e.input.slice(n, r), i)
      for (t = 0, l = s.length; t < l; t += 1)
        o = s.charCodeAt(t), o === 9 || 32 <= o && o <= 1114111 || x(e, "expected valid JSON character");
    else
      Gl.test(s) && x(e, "the stream contains non-printable characters");
    e.result += s;
  }
}
function vn(e, n, r, i) {
  var t, l, o, s;
  for (T.isObject(r) || x(e, "cannot merge mappings; the provided source object is unacceptable"), t = Object.keys(r), o = 0, s = t.length; o < s; o += 1)
    l = t[o], V.call(n, l) || (n[l] = r[l], i[l] = !0);
}
function X(e, n, r, i, t, l, o, s, a) {
  var u, p;
  if (Array.isArray(t))
    for (t = Array.prototype.slice.call(t), u = 0, p = t.length; u < p; u += 1)
      Array.isArray(t[u]) && x(e, "nested arrays are not supported inside keys"), typeof t == "object" && xn(t[u]) === "[object Object]" && (t[u] = "[object Object]");
  if (typeof t == "object" && xn(t) === "[object Object]" && (t = "[object Object]"), t = String(t), n === null && (n = {}), i === "tag:yaml.org,2002:merge")
    if (Array.isArray(l))
      for (u = 0, p = l.length; u < p; u += 1)
        vn(e, n, l[u], r);
    else
      vn(e, n, l, r);
  else
    !e.json && !V.call(r, t) && V.call(n, t) && (e.line = o || e.line, e.lineStart = s || e.lineStart, e.position = a || e.position, x(e, "duplicated mapping key")), t === "__proto__" ? Object.defineProperty(n, t, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: l
    }) : n[t] = l, delete r[t];
  return n;
}
function Ze(e) {
  var n;
  n = e.input.charCodeAt(e.position), n === 10 ? e.position++ : n === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : x(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
function C(e, n, r) {
  for (var i = 0, t = e.input.charCodeAt(e.position); t !== 0; ) {
    for (; K(t); )
      t === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), t = e.input.charCodeAt(++e.position);
    if (n && t === 35)
      do
        t = e.input.charCodeAt(++e.position);
      while (t !== 10 && t !== 13 && t !== 0);
    if (B(t))
      for (Ze(e), t = e.input.charCodeAt(e.position), i++, e.lineIndent = 0; t === 32; )
        e.lineIndent++, t = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return r !== -1 && i !== 0 && e.lineIndent < r && xe(e, "deficient indentation"), i;
}
function Ce(e) {
  var n = e.position, r;
  return r = e.input.charCodeAt(n), !!((r === 45 || r === 46) && r === e.input.charCodeAt(n + 1) && r === e.input.charCodeAt(n + 2) && (n += 3, r = e.input.charCodeAt(n), r === 0 || k(r)));
}
function en(e, n) {
  n === 1 ? e.result += " " : n > 1 && (e.result += T.repeat(`
`, n - 1));
}
function is(e, n, r) {
  var i, t, l, o, s, a, u, p, c = e.kind, y = e.result, g;
  if (g = e.input.charCodeAt(e.position), k(g) || J(g) || g === 35 || g === 38 || g === 42 || g === 33 || g === 124 || g === 62 || g === 39 || g === 34 || g === 37 || g === 64 || g === 96 || (g === 63 || g === 45) && (t = e.input.charCodeAt(e.position + 1), k(t) || r && J(t)))
    return !1;
  for (e.kind = "scalar", e.result = "", l = o = e.position, s = !1; g !== 0; ) {
    if (g === 58) {
      if (t = e.input.charCodeAt(e.position + 1), k(t) || r && J(t))
        break;
    } else if (g === 35) {
      if (i = e.input.charCodeAt(e.position - 1), k(i))
        break;
    } else {
      if (e.position === e.lineStart && Ce(e) || r && J(g))
        break;
      if (B(g))
        if (a = e.line, u = e.lineStart, p = e.lineIndent, C(e, !1, -1), e.lineIndent >= n) {
          s = !0, g = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = o, e.line = a, e.lineStart = u, e.lineIndent = p;
          break;
        }
    }
    s && (Y(e, l, o, !1), en(e, e.line - a), l = o = e.position, s = !1), K(g) || (o = e.position + 1), g = e.input.charCodeAt(++e.position);
  }
  return Y(e, l, o, !1), e.result ? !0 : (e.kind = c, e.result = y, !1);
}
function ts(e, n) {
  var r, i, t;
  if (r = e.input.charCodeAt(e.position), r !== 39)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, i = t = e.position; (r = e.input.charCodeAt(e.position)) !== 0; )
    if (r === 39)
      if (Y(e, i, e.position, !0), r = e.input.charCodeAt(++e.position), r === 39)
        i = e.position, e.position++, t = e.position;
      else
        return !0;
    else
      B(r) ? (Y(e, i, t, !0), en(e, C(e, !1, n)), i = t = e.position) : e.position === e.lineStart && Ce(e) ? x(e, "unexpected end of the document within a single quoted scalar") : (e.position++, t = e.position);
  x(e, "unexpected end of the stream within a single quoted scalar");
}
function os(e, n) {
  var r, i, t, l, o, s;
  if (s = e.input.charCodeAt(e.position), s !== 34)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, r = i = e.position; (s = e.input.charCodeAt(e.position)) !== 0; ) {
    if (s === 34)
      return Y(e, r, e.position, !0), e.position++, !0;
    if (s === 92) {
      if (Y(e, r, e.position, !0), s = e.input.charCodeAt(++e.position), B(s))
        C(e, !1, n);
      else if (s < 256 && Sr[s])
        e.result += Cr[s], e.position++;
      else if ((o = Zl(s)) > 0) {
        for (t = o, l = 0; t > 0; t--)
          s = e.input.charCodeAt(++e.position), (o = Ql(s)) >= 0 ? l = (l << 4) + o : x(e, "expected hexadecimal character");
        e.result += ns(l), e.position++;
      } else
        x(e, "unknown escape sequence");
      r = i = e.position;
    } else
      B(s) ? (Y(e, r, i, !0), en(e, C(e, !1, n)), r = i = e.position) : e.position === e.lineStart && Ce(e) ? x(e, "unexpected end of the document within a double quoted scalar") : (e.position++, i = e.position);
  }
  x(e, "unexpected end of the stream within a double quoted scalar");
}
function ls(e, n) {
  var r = !0, i, t, l, o = e.tag, s, a = e.anchor, u, p, c, y, g, d = /* @__PURE__ */ Object.create(null), h, b, w, v;
  if (v = e.input.charCodeAt(e.position), v === 91)
    p = 93, g = !1, s = [];
  else if (v === 123)
    p = 125, g = !0, s = {};
  else
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = s), v = e.input.charCodeAt(++e.position); v !== 0; ) {
    if (C(e, !0, n), v = e.input.charCodeAt(e.position), v === p)
      return e.position++, e.tag = o, e.anchor = a, e.kind = g ? "mapping" : "sequence", e.result = s, !0;
    r ? v === 44 && x(e, "expected the node content, but found ','") : x(e, "missed comma between flow collection entries"), b = h = w = null, c = y = !1, v === 63 && (u = e.input.charCodeAt(e.position + 1), k(u) && (c = y = !0, e.position++, C(e, !0, n))), i = e.line, t = e.lineStart, l = e.position, Z(e, n, ye, !1, !0), b = e.tag, h = e.result, C(e, !0, n), v = e.input.charCodeAt(e.position), (y || e.line === i) && v === 58 && (c = !0, v = e.input.charCodeAt(++e.position), C(e, !0, n), Z(e, n, ye, !1, !0), w = e.result), g ? X(e, s, d, b, h, w, i, t, l) : c ? s.push(X(e, null, d, b, h, w, i, t, l)) : s.push(h), C(e, !0, n), v = e.input.charCodeAt(e.position), v === 44 ? (r = !0, v = e.input.charCodeAt(++e.position)) : r = !1;
  }
  x(e, "unexpected end of the stream within a flow collection");
}
function ss(e, n) {
  var r, i, t = Ie, l = !1, o = !1, s = n, a = 0, u = !1, p, c;
  if (c = e.input.charCodeAt(e.position), c === 124)
    i = !1;
  else if (c === 62)
    i = !0;
  else
    return !1;
  for (e.kind = "scalar", e.result = ""; c !== 0; )
    if (c = e.input.charCodeAt(++e.position), c === 43 || c === 45)
      Ie === t ? t = c === 43 ? gn : zl : x(e, "repeat of a chomping mode identifier");
    else if ((p = es(c)) >= 0)
      p === 0 ? x(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? x(e, "repeat of an indentation width identifier") : (s = n + p - 1, o = !0);
    else
      break;
  if (K(c)) {
    do
      c = e.input.charCodeAt(++e.position);
    while (K(c));
    if (c === 35)
      do
        c = e.input.charCodeAt(++e.position);
      while (!B(c) && c !== 0);
  }
  for (; c !== 0; ) {
    for (Ze(e), e.lineIndent = 0, c = e.input.charCodeAt(e.position); (!o || e.lineIndent < s) && c === 32; )
      e.lineIndent++, c = e.input.charCodeAt(++e.position);
    if (!o && e.lineIndent > s && (s = e.lineIndent), B(c)) {
      a++;
      continue;
    }
    if (e.lineIndent < s) {
      t === gn ? e.result += T.repeat(`
`, l ? 1 + a : a) : t === Ie && l && (e.result += `
`);
      break;
    }
    for (i ? K(c) ? (u = !0, e.result += T.repeat(`
`, l ? 1 + a : a)) : u ? (u = !1, e.result += T.repeat(`
`, a + 1)) : a === 0 ? l && (e.result += " ") : e.result += T.repeat(`
`, a) : e.result += T.repeat(`
`, l ? 1 + a : a), l = !0, o = !0, a = 0, r = e.position; !B(c) && c !== 0; )
      c = e.input.charCodeAt(++e.position);
    Y(e, r, e.position, !1);
  }
  return !0;
}
function _n(e, n) {
  var r, i = e.tag, t = e.anchor, l = [], o, s = !1, a;
  if (e.firstTabInLine !== -1)
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = l), a = e.input.charCodeAt(e.position); a !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, x(e, "tab characters must not be used in indentation")), !(a !== 45 || (o = e.input.charCodeAt(e.position + 1), !k(o)))); ) {
    if (s = !0, e.position++, C(e, !0, -1) && e.lineIndent <= n) {
      l.push(null), a = e.input.charCodeAt(e.position);
      continue;
    }
    if (r = e.line, Z(e, n, _r, !1, !0), l.push(e.result), C(e, !0, -1), a = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > n) && a !== 0)
      x(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < n)
      break;
  }
  return s ? (e.tag = i, e.anchor = t, e.kind = "sequence", e.result = l, !0) : !1;
}
function as(e, n, r) {
  var i, t, l, o, s, a, u = e.tag, p = e.anchor, c = {}, y = /* @__PURE__ */ Object.create(null), g = null, d = null, h = null, b = !1, w = !1, v;
  if (e.firstTabInLine !== -1)
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = c), v = e.input.charCodeAt(e.position); v !== 0; ) {
    if (!b && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, x(e, "tab characters must not be used in indentation")), i = e.input.charCodeAt(e.position + 1), l = e.line, (v === 63 || v === 58) && k(i))
      v === 63 ? (b && (X(e, c, y, g, d, null, o, s, a), g = d = h = null), w = !0, b = !0, t = !0) : b ? (b = !1, t = !0) : x(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, v = i;
    else {
      if (o = e.line, s = e.lineStart, a = e.position, !Z(e, r, vr, !1, !0))
        break;
      if (e.line === l) {
        for (v = e.input.charCodeAt(e.position); K(v); )
          v = e.input.charCodeAt(++e.position);
        if (v === 58)
          v = e.input.charCodeAt(++e.position), k(v) || x(e, "a whitespace character is expected after the key-value separator within a block mapping"), b && (X(e, c, y, g, d, null, o, s, a), g = d = h = null), w = !0, b = !1, t = !1, g = e.tag, d = e.result;
        else if (w)
          x(e, "can not read an implicit mapping pair; a colon is missed");
        else
          return e.tag = u, e.anchor = p, !0;
      } else if (w)
        x(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e.tag = u, e.anchor = p, !0;
    }
    if ((e.line === l || e.lineIndent > n) && (b && (o = e.line, s = e.lineStart, a = e.position), Z(e, n, ge, !0, t) && (b ? d = e.result : h = e.result), b || (X(e, c, y, g, d, h, o, s, a), g = d = h = null), C(e, !0, -1), v = e.input.charCodeAt(e.position)), (e.line === l || e.lineIndent > n) && v !== 0)
      x(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < n)
      break;
  }
  return b && X(e, c, y, g, d, null, o, s, a), w && (e.tag = u, e.anchor = p, e.kind = "mapping", e.result = c), w;
}
function cs(e) {
  var n, r = !1, i = !1, t, l, o;
  if (o = e.input.charCodeAt(e.position), o !== 33)
    return !1;
  if (e.tag !== null && x(e, "duplication of a tag property"), o = e.input.charCodeAt(++e.position), o === 60 ? (r = !0, o = e.input.charCodeAt(++e.position)) : o === 33 ? (i = !0, t = "!!", o = e.input.charCodeAt(++e.position)) : t = "!", n = e.position, r) {
    do
      o = e.input.charCodeAt(++e.position);
    while (o !== 0 && o !== 62);
    e.position < e.length ? (l = e.input.slice(n, e.position), o = e.input.charCodeAt(++e.position)) : x(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !k(o); )
      o === 33 && (i ? x(e, "tag suffix cannot contain exclamation marks") : (t = e.input.slice(n - 1, e.position + 1), Er.test(t) || x(e, "named tag handle cannot contain such characters"), i = !0, n = e.position + 1)), o = e.input.charCodeAt(++e.position);
    l = e.input.slice(n, e.position), Xl.test(l) && x(e, "tag suffix cannot contain flow indicator characters");
  }
  l && !wr.test(l) && x(e, "tag name cannot contain such characters: " + l);
  try {
    l = decodeURIComponent(l);
  } catch {
    x(e, "tag name is malformed: " + l);
  }
  return r ? e.tag = l : V.call(e.tagMap, t) ? e.tag = e.tagMap[t] + l : t === "!" ? e.tag = "!" + l : t === "!!" ? e.tag = "tag:yaml.org,2002:" + l : x(e, 'undeclared tag handle "' + t + '"'), !0;
}
function us(e) {
  var n, r;
  if (r = e.input.charCodeAt(e.position), r !== 38)
    return !1;
  for (e.anchor !== null && x(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), n = e.position; r !== 0 && !k(r) && !J(r); )
    r = e.input.charCodeAt(++e.position);
  return e.position === n && x(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(n, e.position), !0;
}
function fs(e) {
  var n, r, i;
  if (i = e.input.charCodeAt(e.position), i !== 42)
    return !1;
  for (i = e.input.charCodeAt(++e.position), n = e.position; i !== 0 && !k(i) && !J(i); )
    i = e.input.charCodeAt(++e.position);
  return e.position === n && x(e, "name of an alias node must contain at least one character"), r = e.input.slice(n, e.position), V.call(e.anchorMap, r) || x(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], C(e, !0, -1), !0;
}
function Z(e, n, r, i, t) {
  var l, o, s, a = 1, u = !1, p = !1, c, y, g, d, h, b;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, l = o = s = ge === r || _r === r, i && C(e, !0, -1) && (u = !0, e.lineIndent > n ? a = 1 : e.lineIndent === n ? a = 0 : e.lineIndent < n && (a = -1)), a === 1)
    for (; cs(e) || us(e); )
      C(e, !0, -1) ? (u = !0, s = l, e.lineIndent > n ? a = 1 : e.lineIndent === n ? a = 0 : e.lineIndent < n && (a = -1)) : s = !1;
  if (s && (s = u || t), (a === 1 || ge === r) && (ye === r || vr === r ? h = n : h = n + 1, b = e.position - e.lineStart, a === 1 ? s && (_n(e, b) || as(e, b, h)) || ls(e, h) ? p = !0 : (o && ss(e, h) || ts(e, h) || os(e, h) ? p = !0 : fs(e) ? (p = !0, (e.tag !== null || e.anchor !== null) && x(e, "alias node should not have any properties")) : is(e, h, ye === r) && (p = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : a === 0 && (p = s && _n(e, b))), e.tag === null)
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (e.result !== null && e.kind !== "scalar" && x(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), c = 0, y = e.implicitTypes.length; c < y; c += 1)
      if (d = e.implicitTypes[c], d.resolve(e.result)) {
        e.result = d.construct(e.result), e.tag = d.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (V.call(e.typeMap[e.kind || "fallback"], e.tag))
      d = e.typeMap[e.kind || "fallback"][e.tag];
    else
      for (d = null, g = e.typeMap.multi[e.kind || "fallback"], c = 0, y = g.length; c < y; c += 1)
        if (e.tag.slice(0, g[c].tag.length) === g[c].tag) {
          d = g[c];
          break;
        }
    d || x(e, "unknown tag !<" + e.tag + ">"), e.result !== null && d.kind !== e.kind && x(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + d.kind + '", not "' + e.kind + '"'), d.resolve(e.result, e.tag) ? (e.result = d.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : x(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || p;
}
function ps(e) {
  var n = e.position, r, i, t, l = !1, o;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (o = e.input.charCodeAt(e.position)) !== 0 && (C(e, !0, -1), o = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || o !== 37)); ) {
    for (l = !0, o = e.input.charCodeAt(++e.position), r = e.position; o !== 0 && !k(o); )
      o = e.input.charCodeAt(++e.position);
    for (i = e.input.slice(r, e.position), t = [], i.length < 1 && x(e, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; K(o); )
        o = e.input.charCodeAt(++e.position);
      if (o === 35) {
        do
          o = e.input.charCodeAt(++e.position);
        while (o !== 0 && !B(o));
        break;
      }
      if (B(o))
        break;
      for (r = e.position; o !== 0 && !k(o); )
        o = e.input.charCodeAt(++e.position);
      t.push(e.input.slice(r, e.position));
    }
    o !== 0 && Ze(e), V.call(bn, i) ? bn[i](e, i, t) : xe(e, 'unknown document directive "' + i + '"');
  }
  if (C(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, C(e, !0, -1)) : l && x(e, "directives end mark is expected"), Z(e, e.lineIndent - 1, ge, !1, !0), C(e, !0, -1), e.checkLineBreaks && Jl.test(e.input.slice(n, e.position)) && xe(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && Ce(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, C(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    x(e, "end of the stream or a document separator is expected");
  else
    return;
}
function Tr(e, n) {
  e = String(e), n = n || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var r = new rs(e, n), i = e.indexOf("\0");
  for (i !== -1 && (r.position = i, x(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    ps(r);
  return r.documents;
}
function ds(e, n, r) {
  n !== null && typeof n == "object" && typeof r > "u" && (r = n, n = null);
  var i = Tr(e, r);
  if (typeof n != "function")
    return i;
  for (var t = 0, l = i.length; t < l; t += 1)
    n(i[t]);
}
function hs(e, n) {
  var r = Tr(e, n);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new N("expected a single document in the stream, but found more");
  }
}
var ms = ds, ys = hs, Fr = {
  loadAll: ms,
  load: ys
}, Rr = Object.prototype.toString, Nr = Object.prototype.hasOwnProperty, nn = 65279, gs = 9, le = 10, xs = 13, As = 32, bs = 33, vs = 34, je = 35, _s = 37, Es = 38, ws = 39, Ss = 42, kr = 44, Cs = 45, Ae = 58, Os = 61, Ts = 62, Fs = 63, Rs = 64, Ir = 91, Lr = 93, Ns = 96, Pr = 123, ks = 124, Dr = 125, R = {};
R[0] = "\\0";
R[7] = "\\a";
R[8] = "\\b";
R[9] = "\\t";
R[10] = "\\n";
R[11] = "\\v";
R[12] = "\\f";
R[13] = "\\r";
R[27] = "\\e";
R[34] = '\\"';
R[92] = "\\\\";
R[133] = "\\N";
R[160] = "\\_";
R[8232] = "\\L";
R[8233] = "\\P";
var Is = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
], Ls = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function Ps(e, n) {
  var r, i, t, l, o, s, a;
  if (n === null)
    return {};
  for (r = {}, i = Object.keys(n), t = 0, l = i.length; t < l; t += 1)
    o = i[t], s = String(n[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), a = e.compiledTypeMap.fallback[o], a && Nr.call(a.styleAliases, s) && (s = a.styleAliases[s]), r[o] = s;
  return r;
}
function Ds(e) {
  var n, r, i;
  if (n = e.toString(16).toUpperCase(), e <= 255)
    r = "x", i = 2;
  else if (e <= 65535)
    r = "u", i = 4;
  else if (e <= 4294967295)
    r = "U", i = 8;
  else
    throw new N("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + T.repeat("0", i - n.length) + n;
}
var Bs = 1, se = 2;
function Us(e) {
  this.schema = e.schema || Qe, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = T.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = Ps(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = e.quotingType === '"' ? se : Bs, this.forceQuotes = e.forceQuotes || !1, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function En(e, n) {
  for (var r = T.repeat(" ", n), i = 0, t = -1, l = "", o, s = e.length; i < s; )
    t = e.indexOf(`
`, i), t === -1 ? (o = e.slice(i), i = s) : (o = e.slice(i, t + 1), i = t + 1), o.length && o !== `
` && (l += r), l += o;
  return l;
}
function He(e, n) {
  return `
` + T.repeat(" ", e.indent * n);
}
function Ms(e, n) {
  var r, i, t;
  for (r = 0, i = e.implicitTypes.length; r < i; r += 1)
    if (t = e.implicitTypes[r], t.resolve(n))
      return !0;
  return !1;
}
function be(e) {
  return e === As || e === gs;
}
function ae(e) {
  return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== nn || 65536 <= e && e <= 1114111;
}
function wn(e) {
  return ae(e) && e !== nn && e !== xs && e !== le;
}
function Sn(e, n, r) {
  var i = wn(e), t = i && !be(e);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      i
    ) : i && e !== kr && e !== Ir && e !== Lr && e !== Pr && e !== Dr) && e !== je && !(n === Ae && !t) || wn(n) && !be(n) && e === je || n === Ae && t
  );
}
function js(e) {
  return ae(e) && e !== nn && !be(e) && e !== Cs && e !== Fs && e !== Ae && e !== kr && e !== Ir && e !== Lr && e !== Pr && e !== Dr && e !== je && e !== Es && e !== Ss && e !== bs && e !== ks && e !== Os && e !== Ts && e !== ws && e !== vs && e !== _s && e !== Rs && e !== Ns;
}
function Hs(e) {
  return !be(e) && e !== Ae;
}
function ie(e, n) {
  var r = e.charCodeAt(n), i;
  return r >= 55296 && r <= 56319 && n + 1 < e.length && (i = e.charCodeAt(n + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function Br(e) {
  var n = /^\n* /;
  return n.test(e);
}
var Ur = 1, $e = 2, Mr = 3, jr = 4, G = 5;
function $s(e, n, r, i, t, l, o, s) {
  var a, u = 0, p = null, c = !1, y = !1, g = i !== -1, d = -1, h = js(ie(e, 0)) && Hs(ie(e, e.length - 1));
  if (n || o)
    for (a = 0; a < e.length; u >= 65536 ? a += 2 : a++) {
      if (u = ie(e, a), !ae(u))
        return G;
      h = h && Sn(u, p, s), p = u;
    }
  else {
    for (a = 0; a < e.length; u >= 65536 ? a += 2 : a++) {
      if (u = ie(e, a), u === le)
        c = !0, g && (y = y || // Foldable line = too long, and not more-indented.
        a - d - 1 > i && e[d + 1] !== " ", d = a);
      else if (!ae(u))
        return G;
      h = h && Sn(u, p, s), p = u;
    }
    y = y || g && a - d - 1 > i && e[d + 1] !== " ";
  }
  return !c && !y ? h && !o && !t(e) ? Ur : l === se ? G : $e : r > 9 && Br(e) ? G : o ? l === se ? G : $e : y ? jr : Mr;
}
function qs(e, n, r, i, t) {
  e.dump = function() {
    if (n.length === 0)
      return e.quotingType === se ? '""' : "''";
    if (!e.noCompatMode && (Is.indexOf(n) !== -1 || Ls.test(n)))
      return e.quotingType === se ? '"' + n + '"' : "'" + n + "'";
    var l = e.indent * Math.max(1, r), o = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - l), s = i || e.flowLevel > -1 && r >= e.flowLevel;
    function a(u) {
      return Ms(e, u);
    }
    switch ($s(
      n,
      s,
      e.indent,
      o,
      a,
      e.quotingType,
      e.forceQuotes && !i,
      t
    )) {
      case Ur:
        return n;
      case $e:
        return "'" + n.replace(/'/g, "''") + "'";
      case Mr:
        return "|" + Cn(n, e.indent) + On(En(n, l));
      case jr:
        return ">" + Cn(n, e.indent) + On(En(Ys(n, o), l));
      case G:
        return '"' + Vs(n) + '"';
      default:
        throw new N("impossible error: invalid scalar style");
    }
  }();
}
function Cn(e, n) {
  var r = Br(e) ? String(n) : "", i = e[e.length - 1] === `
`, t = i && (e[e.length - 2] === `
` || e === `
`), l = t ? "+" : i ? "" : "-";
  return r + l + `
`;
}
function On(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
function Ys(e, n) {
  for (var r = /(\n+)([^\n]*)/g, i = function() {
    var u = e.indexOf(`
`);
    return u = u !== -1 ? u : e.length, r.lastIndex = u, Tn(e.slice(0, u), n);
  }(), t = e[0] === `
` || e[0] === " ", l, o; o = r.exec(e); ) {
    var s = o[1], a = o[2];
    l = a[0] === " ", i += s + (!t && !l && a !== "" ? `
` : "") + Tn(a, n), t = l;
  }
  return i;
}
function Tn(e, n) {
  if (e === "" || e[0] === " ")
    return e;
  for (var r = / [^ ]/g, i, t = 0, l, o = 0, s = 0, a = ""; i = r.exec(e); )
    s = i.index, s - t > n && (l = o > t ? o : s, a += `
` + e.slice(t, l), t = l + 1), o = s;
  return a += `
`, e.length - t > n && o > t ? a += e.slice(t, o) + `
` + e.slice(o + 1) : a += e.slice(t), a.slice(1);
}
function Vs(e) {
  for (var n = "", r = 0, i, t = 0; t < e.length; r >= 65536 ? t += 2 : t++)
    r = ie(e, t), i = R[r], !i && ae(r) ? (n += e[t], r >= 65536 && (n += e[t + 1])) : n += i || Ds(r);
  return n;
}
function Ks(e, n, r) {
  var i = "", t = e.tag, l, o, s;
  for (l = 0, o = r.length; l < o; l += 1)
    s = r[l], e.replacer && (s = e.replacer.call(r, String(l), s)), (j(e, n, s, !1, !1) || typeof s > "u" && j(e, n, null, !1, !1)) && (i !== "" && (i += "," + (e.condenseFlow ? "" : " ")), i += e.dump);
  e.tag = t, e.dump = "[" + i + "]";
}
function Fn(e, n, r, i) {
  var t = "", l = e.tag, o, s, a;
  for (o = 0, s = r.length; o < s; o += 1)
    a = r[o], e.replacer && (a = e.replacer.call(r, String(o), a)), (j(e, n + 1, a, !0, !0, !1, !0) || typeof a > "u" && j(e, n + 1, null, !0, !0, !1, !0)) && ((!i || t !== "") && (t += He(e, n)), e.dump && le === e.dump.charCodeAt(0) ? t += "-" : t += "- ", t += e.dump);
  e.tag = l, e.dump = t || "[]";
}
function Ws(e, n, r) {
  var i = "", t = e.tag, l = Object.keys(r), o, s, a, u, p;
  for (o = 0, s = l.length; o < s; o += 1)
    p = "", i !== "" && (p += ", "), e.condenseFlow && (p += '"'), a = l[o], u = r[a], e.replacer && (u = e.replacer.call(r, a, u)), j(e, n, a, !1, !1) && (e.dump.length > 1024 && (p += "? "), p += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), j(e, n, u, !1, !1) && (p += e.dump, i += p));
  e.tag = t, e.dump = "{" + i + "}";
}
function zs(e, n, r, i) {
  var t = "", l = e.tag, o = Object.keys(r), s, a, u, p, c, y;
  if (e.sortKeys === !0)
    o.sort();
  else if (typeof e.sortKeys == "function")
    o.sort(e.sortKeys);
  else if (e.sortKeys)
    throw new N("sortKeys must be a boolean or a function");
  for (s = 0, a = o.length; s < a; s += 1)
    y = "", (!i || t !== "") && (y += He(e, n)), u = o[s], p = r[u], e.replacer && (p = e.replacer.call(r, u, p)), j(e, n + 1, u, !0, !0, !0) && (c = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, c && (e.dump && le === e.dump.charCodeAt(0) ? y += "?" : y += "? "), y += e.dump, c && (y += He(e, n)), j(e, n + 1, p, !0, c) && (e.dump && le === e.dump.charCodeAt(0) ? y += ":" : y += ": ", y += e.dump, t += y));
  e.tag = l, e.dump = t || "{}";
}
function Rn(e, n, r) {
  var i, t, l, o, s, a;
  for (t = r ? e.explicitTypes : e.implicitTypes, l = 0, o = t.length; l < o; l += 1)
    if (s = t[l], (s.instanceOf || s.predicate) && (!s.instanceOf || typeof n == "object" && n instanceof s.instanceOf) && (!s.predicate || s.predicate(n))) {
      if (r ? s.multi && s.representName ? e.tag = s.representName(n) : e.tag = s.tag : e.tag = "?", s.represent) {
        if (a = e.styleMap[s.tag] || s.defaultStyle, Rr.call(s.represent) === "[object Function]")
          i = s.represent(n, a);
        else if (Nr.call(s.represent, a))
          i = s.represent[a](n, a);
        else
          throw new N("!<" + s.tag + '> tag resolver accepts not "' + a + '" style');
        e.dump = i;
      }
      return !0;
    }
  return !1;
}
function j(e, n, r, i, t, l, o) {
  e.tag = null, e.dump = r, Rn(e, r, !1) || Rn(e, r, !0);
  var s = Rr.call(e.dump), a = i, u;
  i && (i = e.flowLevel < 0 || e.flowLevel > n);
  var p = s === "[object Object]" || s === "[object Array]", c, y;
  if (p && (c = e.duplicates.indexOf(r), y = c !== -1), (e.tag !== null && e.tag !== "?" || y || e.indent !== 2 && n > 0) && (t = !1), y && e.usedDuplicates[c])
    e.dump = "*ref_" + c;
  else {
    if (p && y && !e.usedDuplicates[c] && (e.usedDuplicates[c] = !0), s === "[object Object]")
      i && Object.keys(e.dump).length !== 0 ? (zs(e, n, e.dump, t), y && (e.dump = "&ref_" + c + e.dump)) : (Ws(e, n, e.dump), y && (e.dump = "&ref_" + c + " " + e.dump));
    else if (s === "[object Array]")
      i && e.dump.length !== 0 ? (e.noArrayIndent && !o && n > 0 ? Fn(e, n - 1, e.dump, t) : Fn(e, n, e.dump, t), y && (e.dump = "&ref_" + c + e.dump)) : (Ks(e, n, e.dump), y && (e.dump = "&ref_" + c + " " + e.dump));
    else if (s === "[object String]")
      e.tag !== "?" && qs(e, e.dump, n, l, a);
    else {
      if (s === "[object Undefined]")
        return !1;
      if (e.skipInvalid)
        return !1;
      throw new N("unacceptable kind of an object to dump " + s);
    }
    e.tag !== null && e.tag !== "?" && (u = encodeURI(
      e.tag[0] === "!" ? e.tag.slice(1) : e.tag
    ).replace(/!/g, "%21"), e.tag[0] === "!" ? u = "!" + u : u.slice(0, 18) === "tag:yaml.org,2002:" ? u = "!!" + u.slice(18) : u = "!<" + u + ">", e.dump = u + " " + e.dump);
  }
  return !0;
}
function Gs(e, n) {
  var r = [], i = [], t, l;
  for (qe(e, r, i), t = 0, l = i.length; t < l; t += 1)
    n.duplicates.push(r[i[t]]);
  n.usedDuplicates = new Array(l);
}
function qe(e, n, r) {
  var i, t, l;
  if (e !== null && typeof e == "object")
    if (t = n.indexOf(e), t !== -1)
      r.indexOf(t) === -1 && r.push(t);
    else if (n.push(e), Array.isArray(e))
      for (t = 0, l = e.length; t < l; t += 1)
        qe(e[t], n, r);
    else
      for (i = Object.keys(e), t = 0, l = i.length; t < l; t += 1)
        qe(e[i[t]], n, r);
}
function Js(e, n) {
  n = n || {};
  var r = new Us(n);
  r.noRefs || Gs(e, r);
  var i = e;
  return r.replacer && (i = r.replacer.call({ "": i }, "", i)), j(r, 0, i, !0, !0) ? r.dump + `
` : "";
}
var Xs = Js, Qs = {
  dump: Xs
};
function rn(e, n) {
  return function() {
    throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + n + " instead, which is now safe by default.");
  };
}
var Zs = F, ea = rr, na = lr, ra = fr, ia = pr, ta = Qe, oa = Fr.load, la = Fr.loadAll, sa = Qs.dump, aa = N, ca = {
  binary: gr,
  float: ur,
  map: or,
  null: sr,
  pairs: Ar,
  set: br,
  timestamp: mr,
  bool: ar,
  int: cr,
  merge: yr,
  omap: xr,
  seq: tr,
  str: ir
}, ua = rn("safeLoad", "load"), fa = rn("safeLoadAll", "loadAll"), pa = rn("safeDump", "dump"), da = {
  Type: Zs,
  Schema: ea,
  FAILSAFE_SCHEMA: na,
  JSON_SCHEMA: ra,
  CORE_SCHEMA: ia,
  DEFAULT_SCHEMA: ta,
  load: oa,
  loadAll: la,
  dump: sa,
  YAMLException: aa,
  types: ca,
  safeLoad: ua,
  safeLoadAll: fa,
  safeDump: pa
};
const ha = {
  data() {
    return {
      dataCatalog: [],
      filteredData: [],
      dataCatalogSchema: ei
    };
  },
  props: {
    dataUrl: String,
    apiUrls: Object
  },
  components: {
    TableItem: Hi,
    Filters: Tt
  },
  mounted() {
    Wo.get(this.dataUrl).then((e) => {
      const n = da.load(e.data);
      this.dataCatalog = n.data;
    }).catch((e) => {
      console.error("Error loading YAML file:", e);
    });
  }
}, ma = { class: "data-catalog-container" }, ya = { class: "data-header" }, ga = { id: "data-catalog" };
function xa(e, n, r, i, t, l) {
  const o = tn("Filters"), s = tn("TableItem");
  return A(), _("div", ma, [
    m("div", ya, [
      Nn(o, {
        dataCatalog: t.dataCatalog,
        schemaItemProp: t.dataCatalogSchema.properties.data.items.properties,
        onFilteredData: n[0] || (n[0] = (a) => t.filteredData = a)
      }, null, 8, ["dataCatalog", "schemaItemProp"])
    ]),
    m("div", ga, [
      (A(!0), _(I, null, P(t.filteredData, (a, u) => (A(), fe(s, {
        key: u,
        class: "data-catalog-row",
        role: "row",
        dataElement: a,
        schemaItemProp: t.dataCatalogSchema.properties.data.items.properties,
        apiUrls: r.apiUrls
      }, null, 8, ["dataElement", "schemaItemProp", "apiUrls"]))), 128))
    ])
  ]);
}
const Aa = /* @__PURE__ */ kn(ha, [["render", xa]]);
function va(e) {
  Kr(
    Aa,
    {
      dataUrl: e.dataCatalogURL,
      apiUrls: {
        webapi_b2b_v3: e.apiUrls.webapi_b2b_v3,
        webapi_b2c_v4: e.apiUrls.webapi_b2c_v4
      }
    }
  ).mount(e.mountElement);
}
export {
  va as initDataCatalog
};
