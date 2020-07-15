(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bug_tracker_view_bug_tracker_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bug-tracker-view/bug-tracker-view.component */ "./src/app/bug-tracker-view/bug-tracker-view.component.ts");
/* harmony import */ var _fish_tracker_view_fish_tracker_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fish-tracker-view/fish-tracker-view.component */ "./src/app/fish-tracker-view/fish-tracker-view.component.ts");
/* harmony import */ var _landing_view_landing_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-view/landing-view.component */ "./src/app/landing-view/landing-view.component.ts");
/* harmony import */ var _song_tracker_view_song_tracker_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./song-tracker-view/song-tracker-view.component */ "./src/app/song-tracker-view/song-tracker-view.component.ts");
/* harmony import */ var _sea_creature_tracker_view_sea_creature_tracker_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sea-creature-tracker-view/sea-creature-tracker-view.component */ "./src/app/sea-creature-tracker-view/sea-creature-tracker-view.component.ts");










const routes = [
    { path: 'bugs', component: _bug_tracker_view_bug_tracker_view_component__WEBPACK_IMPORTED_MODULE_3__["BugTrackerViewComponent"] },
    { path: 'fish', component: _fish_tracker_view_fish_tracker_view_component__WEBPACK_IMPORTED_MODULE_4__["FishTrackerViewComponent"] },
    { path: 'sea-creatures', component: _sea_creature_tracker_view_sea_creature_tracker_view_component__WEBPACK_IMPORTED_MODULE_7__["SeaCreatureTrackerViewComponent"] },
    { path: 'songs', component: _song_tracker_view_song_tracker_view_component__WEBPACK_IMPORTED_MODULE_6__["SongTrackerViewComponent"] },
    { path: '**', component: _landing_view_landing_view_component__WEBPACK_IMPORTED_MODULE_5__["LandingViewComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _sea_creature_tracker_view_actions_sea_creature_tracker_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sea-creature-tracker-view/actions/sea-creature-tracker.actions */ "./src/app/sea-creature-tracker-view/actions/sea-creature-tracker.actions.ts");
/* harmony import */ var _song_tracker_view_actions_song_tracker_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./song-tracker-view/actions/song-tracker.actions */ "./src/app/song-tracker-view/actions/song-tracker.actions.ts");
/* harmony import */ var _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/models/app-state.model */ "./src/app/shared/models/app-state.model.ts");
/* harmony import */ var _bug_tracker_view_reducers_bug_tracker_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bug-tracker-view/reducers/bug-tracker.reducer */ "./src/app/bug-tracker-view/reducers/bug-tracker.reducer.ts");
/* harmony import */ var _bug_tracker_view_actions_bug_tracker_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bug-tracker-view/actions/bug-tracker.actions */ "./src/app/bug-tracker-view/actions/bug-tracker.actions.ts");
/* harmony import */ var _fish_tracker_view_actions_fish_tracker_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fish-tracker-view/actions/fish-tracker.actions */ "./src/app/fish-tracker-view/actions/fish-tracker.actions.ts");
/* harmony import */ var _fish_tracker_view_reducers_fish_tracker_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fish-tracker-view/reducers/fish-tracker.reducer */ "./src/app/fish-tracker-view/reducers/fish-tracker.reducer.ts");
/* harmony import */ var _song_tracker_view_reducers_song_tracker_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./song-tracker-view/reducers/song-tracker.reducer */ "./src/app/song-tracker-view/reducers/song-tracker.reducer.ts");
/* harmony import */ var _sea_creature_tracker_view_reducers_sea_creature_tracker_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sea-creature-tracker-view/reducers/sea-creature-tracker.reducer */ "./src/app/sea-creature-tracker-view/reducers/sea-creature-tracker.reducer.ts");
/* harmony import */ var _shared_services_collection_encoding_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/collection-encoding.service */ "./src/app/shared/services/collection-encoding.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header-nav/header-nav.component */ "./src/app/header-nav/header-nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");






















function AppComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Session Data:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_form_6_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.encodedSessionData = $event; })("ngModelChange", function AppComponent_form_6_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.updateSessionDataEntry($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.sessionDataInputClasses)("ngModel", ctx_r0.encodedSessionData);
} }
class AppComponent {
    constructor(store, activatedRoute) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.title = 'acnh-tracker';
        this.sessionData = {};
        this.encodedSessionData = '';
        this.sessionDataInput = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.sessionQueryParam = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.sessionDataInputClasses = {};
        this.subscriptions = new Array();
        this.bugs$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((state) => Object(_bug_tracker_view_reducers_bug_tracker_reducer__WEBPACK_IMPORTED_MODULE_6__["selectBugTrackerState"])(state)));
        this.fish$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((state) => Object(_fish_tracker_view_reducers_fish_tracker_reducer__WEBPACK_IMPORTED_MODULE_9__["selectFishTrackerState"])(state)));
        this.seaCreatures$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((state) => Object(_sea_creature_tracker_view_reducers_sea_creature_tracker_reducer__WEBPACK_IMPORTED_MODULE_11__["selectSeaCreatureTrackerState"])(state)));
        this.songs$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((state) => Object(_song_tracker_view_reducers_song_tracker_reducer__WEBPACK_IMPORTED_MODULE_10__["selectSongTrackerState"])(state)));
        this.subscriptions.push(this.sessionDataInput
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe((input) => {
            this.setEncodedSessionDataValue(input);
        }));
        this.subscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.bugs$,
            this.fish$,
            this.seaCreatures$,
            this.songs$,
        ]).subscribe(([bugTrackerState, fishTrackerState, seaCreatureTrackerState, songTrackerState,]) => {
            this.encodedSessionData = [
                bugTrackerState.encoded,
                fishTrackerState.encoded,
                seaCreatureTrackerState.encoded,
                songTrackerState.encoded,
            ].join('.');
            this.sessionQueryParam.next(this.encodedSessionData);
        }));
        this.subscriptions.push(this.activatedRoute.queryParamMap.subscribe((queryParamMap) => {
            if (queryParamMap.has('session') &&
                this.validateSessionData(queryParamMap.get('session'))) {
                this.setEncodedSessionDataValue(queryParamMap.get('session'));
            }
        }));
    }
    setEncodedSessionDataValue(value) {
        this.encodedSessionData = value.replace(/\s/g, '');
        const validEntry = this.validateSessionDataEntry();
        this.sessionDataInputClasses = {
            valid: validEntry,
            invalid: !validEntry,
        };
        if (validEntry) {
            this.sessionData = this.getDecodedSession();
            this.dispatchSessionData();
            this.sessionQueryParam.next(this.encodedSessionData);
        }
    }
    validateSessionData(data) {
        if (!data) {
            return false;
        }
        const categories = data.split('.');
        if (categories.some((cat) => {
            if (cat.indexOf('-') < 0) {
                return true;
            }
            const catData = cat.split('-');
            if (catData.length !== 3 ||
                _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__["TrackerCategory"][catData[0]] === undefined ||
                !(catData[1] === '0' || catData[1] === '1')) {
                return true;
            }
            if (catData[2] !== '') {
                const indices = catData[2].split(',');
                return indices.some((index) => /\D/.test(index));
            }
        })) {
            return false;
        }
        return true;
    }
    validateSessionDataEntry() {
        return this.validateSessionData(this.encodedSessionData);
    }
    updateSessionDataEntry(entry) {
        this.sessionDataInput.next(entry);
    }
    showEncodedSession() {
        return Object.keys(this.sessionData).length > 0;
    }
    dispatchSessionData() {
        const supportedCollections = {
            [_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__["TrackerCategory"].BUG_COLLECTION]: _bug_tracker_view_actions_bug_tracker_actions__WEBPACK_IMPORTED_MODULE_7__["updateBugCollectionStateFromSessionAction"],
            [_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__["TrackerCategory"].BUG_MODELS]: _bug_tracker_view_actions_bug_tracker_actions__WEBPACK_IMPORTED_MODULE_7__["updateBugModelStateFromSessionAction"],
            [_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__["TrackerCategory"].BUG_MODEL_SUPPLIES]: _bug_tracker_view_actions_bug_tracker_actions__WEBPACK_IMPORTED_MODULE_7__["updateHaveBugModelSuppliesStateFromSessionAction"],
            [_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__["TrackerCategory"].FISH_COLLECTION]: _fish_tracker_view_actions_fish_tracker_actions__WEBPACK_IMPORTED_MODULE_8__["updateFishCollectionStateFromSessionAction"],
            [_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__["TrackerCategory"].FISH_MODELS]: _fish_tracker_view_actions_fish_tracker_actions__WEBPACK_IMPORTED_MODULE_8__["updateFishModelStateFromSessionAction"],
            [_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__["TrackerCategory"].FISH_MODEL_SUPPLIES]: _fish_tracker_view_actions_fish_tracker_actions__WEBPACK_IMPORTED_MODULE_8__["updateHaveFishModelSuppliesStateFromSessionAction"],
            [_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__["TrackerCategory"].SEA_CREATURE_COLLECTION]: _sea_creature_tracker_view_actions_sea_creature_tracker_actions__WEBPACK_IMPORTED_MODULE_3__["updateSeaCreatureCollectionStateFromSessionAction"],
            [_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__["TrackerCategory"].SONGS]: _song_tracker_view_actions_song_tracker_actions__WEBPACK_IMPORTED_MODULE_4__["updateSongCollectionStateFromSessionAction"],
        };
        Object.keys(this.sessionData).forEach((key) => {
            if (supportedCollections[key]) {
                this.store.dispatch(supportedCollections[key]({ data: this.sessionData[key] }));
            }
        });
    }
    getEncodedSession() {
        let encodedSession = '';
        Object.keys(this.sessionData).forEach((key) => {
            let encodedSessionCategory = key;
            encodedSessionCategory += `-${+this.sessionData[key].inclusive}`;
            encodedSessionCategory += `-${this.sessionData[key].indices.join(',')}`;
            if (!!encodedSession) {
                encodedSession += '.';
            }
            encodedSession += encodedSessionCategory;
        });
        return encodedSession;
    }
    getDecodedSession() {
        const decoded = {};
        const sessionCategories = this.encodedSessionData.split('.');
        sessionCategories.forEach((cat) => {
            const catData = cat.split('-');
            decoded[catData[0]] = {
                inclusive: catData[1],
                indices: catData[2]
                    .split(',')
                    .filter((index) => index !== '')
                    .map((index) => +index.trim()),
            };
        });
        return decoded;
    }
    resetTracker() {
        this.setEncodedSessionDataValue(Object(_shared_services_collection_encoding_service__WEBPACK_IMPORTED_MODULE_12__["getDefaultEncoding"])([
            _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__["TrackerCategory"].BUG_COLLECTION,
            _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__["TrackerCategory"].BUG_MODELS,
            _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__["TrackerCategory"].BUG_MODEL_SUPPLIES,
            _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__["TrackerCategory"].FISH_COLLECTION,
            _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__["TrackerCategory"].FISH_MODELS,
            _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__["TrackerCategory"].FISH_MODEL_SUPPLIES,
            _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__["TrackerCategory"].SEA_CREATURE_COLLECTION,
            _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_5__["TrackerCategory"].SONGS,
        ]));
    }
    ngOnDestroy() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 4, consts: [[1, "app-container", "mat-typography", "mat-app-background", "light-theme"], [1, "app-component-header"], ["mat-stroked-button", "", 3, "click"], [4, "ngIf"], [3, "sessionParam"], [1, "session-input-form"], ["matInput", "", "type", "text", "name", "encodedSessionData", 1, "session-input", 3, "ngClass", "ngModel", "ngModelChange"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ACNH Tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.resetTracker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "RESET TRACKER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_form_6_Template, 5, 2, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "header-nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.encodedSessionData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sessionParam", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx.sessionQueryParam));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_17__["HeaderNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["AsyncPipe"]], styles: [".app-container[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 960px;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.valid[_ngcontent-%COMP%] {\n  color: darkgreen;\n}\n\n.invalid[_ngcontent-%COMP%] {\n  color: red;\n}\n\nmat-form-field.session-input-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.session-input[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 10px;\n  text-align: center;\n}\n\n.app-component-header[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.app-component-header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQUU7RUFDRSxZQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnZhbGlkIHtcbiAgY29sb3I6IGRhcmtncmVlbjtcbn1cblxuLmludmFsaWQge1xuICBjb2xvcjogcmVkO1xufVxuXG5tYXQtZm9ybS1maWVsZC5zZXNzaW9uLWlucHV0LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlc3Npb24taW5wdXQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFwcC1jb21wb25lbnQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgKiB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getBaseHref, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseHref", function() { return getBaseHref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-nav/header-nav.component */ "./src/app/header-nav/header-nav.component.ts");
/* harmony import */ var _creature_tracker_creature_tracker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./creature-tracker/creature-tracker.component */ "./src/app/creature-tracker/creature-tracker.component.ts");
/* harmony import */ var _bug_tracker_view_bug_tracker_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bug-tracker-view/bug-tracker-view.component */ "./src/app/bug-tracker-view/bug-tracker-view.component.ts");
/* harmony import */ var _fish_tracker_view_fish_tracker_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fish-tracker-view/fish-tracker-view.component */ "./src/app/fish-tracker-view/fish-tracker-view.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _landing_view_landing_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./landing-view/landing-view.component */ "./src/app/landing-view/landing-view.component.ts");
/* harmony import */ var _creature_card_creature_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./creature-card/creature-card.component */ "./src/app/creature-card/creature-card.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _bug_tracker_view_reducers_bug_tracker_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bug-tracker-view/reducers/bug-tracker.reducer */ "./src/app/bug-tracker-view/reducers/bug-tracker.reducer.ts");
/* harmony import */ var _song_tracker_view_song_tracker_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./song-tracker-view/song-tracker-view.component */ "./src/app/song-tracker-view/song-tracker-view.component.ts");
/* harmony import */ var _sea_creature_tracker_view_sea_creature_tracker_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sea-creature-tracker-view/sea-creature-tracker-view.component */ "./src/app/sea-creature-tracker-view/sea-creature-tracker-view.component.ts");
/* harmony import */ var _fish_tracker_view_reducers_fish_tracker_reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fish-tracker-view/reducers/fish-tracker.reducer */ "./src/app/fish-tracker-view/reducers/fish-tracker.reducer.ts");
/* harmony import */ var _song_tracker_view_reducers_song_tracker_reducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./song-tracker-view/reducers/song-tracker.reducer */ "./src/app/song-tracker-view/reducers/song-tracker.reducer.ts");
/* harmony import */ var _sea_creature_tracker_view_reducers_sea_creature_tracker_reducer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sea-creature-tracker-view/reducers/sea-creature-tracker.reducer */ "./src/app/sea-creature-tracker-view/reducers/sea-creature-tracker.reducer.ts");
/* harmony import */ var _hemisphere_toggle_hemisphere_toggle_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./hemisphere-toggle/hemisphere-toggle.component */ "./src/app/hemisphere-toggle/hemisphere-toggle.component.ts");
/* harmony import */ var _collected_filter_toggle_collected_filter_toggle_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./collected-filter-toggle/collected-filter-toggle.component */ "./src/app/collected-filter-toggle/collected-filter-toggle.component.ts");
/* harmony import */ var _collection_filters_collection_filters_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./collection-filters/collection-filters.component */ "./src/app/collection-filters/collection-filters.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _bug_tracker_view_reducers_bug_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./bug-tracker-view/reducers/bug-tracker-filter.reducer */ "./src/app/bug-tracker-view/reducers/bug-tracker-filter.reducer.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _shared_reducers_shared_reducer__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/reducers/shared.reducer */ "./src/app/shared/reducers/shared.reducer.ts");
/* harmony import */ var _fish_tracker_view_reducers_fish_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./fish-tracker-view/reducers/fish-tracker-filter.reducer */ "./src/app/fish-tracker-view/reducers/fish-tracker-filter.reducer.ts");
/* harmony import */ var _sea_creature_tracker_view_reducers_sea_creature_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./sea-creature-tracker-view/reducers/sea-creature-tracker-filter.reducer */ "./src/app/sea-creature-tracker-view/reducers/sea-creature-tracker-filter.reducer.ts");
/* harmony import */ var _song_tracker_view_reducers_song_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./song-tracker-view/reducers/song-tracker-filter.reducer */ "./src/app/song-tracker-view/reducers/song-tracker-filter.reducer.ts");









































function getBaseHref(platformLocation) {
    return platformLocation.getBaseHrefFromDOM();
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"],
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["APP_BASE_HREF"],
            useFactory: getBaseHref,
            deps: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["PlatformLocation"]],
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot({
                bugTrackerState: _bug_tracker_view_reducers_bug_tracker_reducer__WEBPACK_IMPORTED_MODULE_14__["bugTrackerReducer"],
                bugTrackerFilterState: _bug_tracker_view_reducers_bug_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_32__["bugTrackerFilterReducer"],
                fishTrackerState: _fish_tracker_view_reducers_fish_tracker_reducer__WEBPACK_IMPORTED_MODULE_17__["fishTrackerReducer"],
                fishTrackerFilterState: _fish_tracker_view_reducers_fish_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_35__["fishTrackerFilterReducer"],
                seaCreatureTrackerState: _sea_creature_tracker_view_reducers_sea_creature_tracker_reducer__WEBPACK_IMPORTED_MODULE_19__["seaCreatureTrackerReducer"],
                seaCreatureTrackerFilterState: _sea_creature_tracker_view_reducers_sea_creature_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_36__["seaCreatureTrackerFilterReducer"],
                songTrackerState: _song_tracker_view_reducers_song_tracker_reducer__WEBPACK_IMPORTED_MODULE_18__["songTrackerReducer"],
                songTrackerFilterState: _song_tracker_view_reducers_song_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_37__["songTrackerFilterReducer"],
                sharedTrackerState: _shared_reducers_shared_reducer__WEBPACK_IMPORTED_MODULE_34__["sharedTrackerReducer"],
            }),
            // EffectsModule.forRoot([BugTrackerEffects]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"].instrument({ maxAge: 25 }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatFormFieldModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_31__["MatAutocompleteModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_33__["MatButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_5__["HeaderNavComponent"],
        _creature_tracker_creature_tracker_component__WEBPACK_IMPORTED_MODULE_6__["CreatureTrackerComponent"],
        _bug_tracker_view_bug_tracker_view_component__WEBPACK_IMPORTED_MODULE_7__["BugTrackerViewComponent"],
        _fish_tracker_view_fish_tracker_view_component__WEBPACK_IMPORTED_MODULE_8__["FishTrackerViewComponent"],
        _landing_view_landing_view_component__WEBPACK_IMPORTED_MODULE_10__["LandingViewComponent"],
        _creature_card_creature_card_component__WEBPACK_IMPORTED_MODULE_11__["CreatureCardComponent"],
        _song_tracker_view_song_tracker_view_component__WEBPACK_IMPORTED_MODULE_15__["SongTrackerViewComponent"],
        _sea_creature_tracker_view_sea_creature_tracker_view_component__WEBPACK_IMPORTED_MODULE_16__["SeaCreatureTrackerViewComponent"],
        _hemisphere_toggle_hemisphere_toggle_component__WEBPACK_IMPORTED_MODULE_20__["HemisphereToggleComponent"],
        _collected_filter_toggle_collected_filter_toggle_component__WEBPACK_IMPORTED_MODULE_21__["CollectedFilterToggleComponent"],
        _collection_filters_collection_filters_component__WEBPACK_IMPORTED_MODULE_22__["CollectionFiltersComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_31__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_33__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_5__["HeaderNavComponent"],
                    _creature_tracker_creature_tracker_component__WEBPACK_IMPORTED_MODULE_6__["CreatureTrackerComponent"],
                    _bug_tracker_view_bug_tracker_view_component__WEBPACK_IMPORTED_MODULE_7__["BugTrackerViewComponent"],
                    _fish_tracker_view_fish_tracker_view_component__WEBPACK_IMPORTED_MODULE_8__["FishTrackerViewComponent"],
                    _landing_view_landing_view_component__WEBPACK_IMPORTED_MODULE_10__["LandingViewComponent"],
                    _creature_card_creature_card_component__WEBPACK_IMPORTED_MODULE_11__["CreatureCardComponent"],
                    _song_tracker_view_song_tracker_view_component__WEBPACK_IMPORTED_MODULE_15__["SongTrackerViewComponent"],
                    _sea_creature_tracker_view_sea_creature_tracker_view_component__WEBPACK_IMPORTED_MODULE_16__["SeaCreatureTrackerViewComponent"],
                    _hemisphere_toggle_hemisphere_toggle_component__WEBPACK_IMPORTED_MODULE_20__["HemisphereToggleComponent"],
                    _collected_filter_toggle_collected_filter_toggle_component__WEBPACK_IMPORTED_MODULE_21__["CollectedFilterToggleComponent"],
                    _collection_filters_collection_filters_component__WEBPACK_IMPORTED_MODULE_22__["CollectionFiltersComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot({
                        bugTrackerState: _bug_tracker_view_reducers_bug_tracker_reducer__WEBPACK_IMPORTED_MODULE_14__["bugTrackerReducer"],
                        bugTrackerFilterState: _bug_tracker_view_reducers_bug_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_32__["bugTrackerFilterReducer"],
                        fishTrackerState: _fish_tracker_view_reducers_fish_tracker_reducer__WEBPACK_IMPORTED_MODULE_17__["fishTrackerReducer"],
                        fishTrackerFilterState: _fish_tracker_view_reducers_fish_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_35__["fishTrackerFilterReducer"],
                        seaCreatureTrackerState: _sea_creature_tracker_view_reducers_sea_creature_tracker_reducer__WEBPACK_IMPORTED_MODULE_19__["seaCreatureTrackerReducer"],
                        seaCreatureTrackerFilterState: _sea_creature_tracker_view_reducers_sea_creature_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_36__["seaCreatureTrackerFilterReducer"],
                        songTrackerState: _song_tracker_view_reducers_song_tracker_reducer__WEBPACK_IMPORTED_MODULE_18__["songTrackerReducer"],
                        songTrackerFilterState: _song_tracker_view_reducers_song_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_37__["songTrackerFilterReducer"],
                        sharedTrackerState: _shared_reducers_shared_reducer__WEBPACK_IMPORTED_MODULE_34__["sharedTrackerReducer"],
                    }),
                    // EffectsModule.forRoot([BugTrackerEffects]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"].instrument({ maxAge: 25 }),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatFormFieldModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_31__["MatAutocompleteModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_33__["MatButtonModule"],
                ],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"],
                    {
                        provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["APP_BASE_HREF"],
                        useFactory: getBaseHref,
                        deps: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["PlatformLocation"]],
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bug-tracker-view/actions/bug-tracker-filter.actions.ts":
/*!************************************************************************!*\
  !*** ./src/app/bug-tracker-view/actions/bug-tracker-filter.actions.ts ***!
  \************************************************************************/
/*! exports provided: filterBugsByNameAction, setBugCollectionStatusFilterAction, resetBugFilterStateAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterBugsByNameAction", function() { return filterBugsByNameAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBugCollectionStatusFilterAction", function() { return setBugCollectionStatusFilterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetBugFilterStateAction", function() { return resetBugFilterStateAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const filterBugsByNameAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bug Tracker] Filter by Name', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setBugCollectionStatusFilterAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bug Tracker] Set Collection Status', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const resetBugFilterStateAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bug Tracker] Reset Filter State');


/***/ }),

/***/ "./src/app/bug-tracker-view/actions/bug-tracker.actions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/bug-tracker-view/actions/bug-tracker.actions.ts ***!
  \*****************************************************************/
/*! exports provided: toggleBugCollectedAction, toggleBugModelObtainedAction, toggleHaveBugModelSuppliesAction, updateBugCollectionStateFromSessionAction, updateBugModelStateFromSessionAction, updateHaveBugModelSuppliesStateFromSessionAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleBugCollectedAction", function() { return toggleBugCollectedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleBugModelObtainedAction", function() { return toggleBugModelObtainedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleHaveBugModelSuppliesAction", function() { return toggleHaveBugModelSuppliesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBugCollectionStateFromSessionAction", function() { return updateBugCollectionStateFromSessionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBugModelStateFromSessionAction", function() { return updateBugModelStateFromSessionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHaveBugModelSuppliesStateFromSessionAction", function() { return updateHaveBugModelSuppliesStateFromSessionAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const toggleBugCollectedAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bug Tracker] Toggle Collected', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleBugModelObtainedAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bug Tracker] Toggle Model Obtained', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleHaveBugModelSuppliesAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bug Tracker] Have Model Supplies', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateBugCollectionStateFromSessionAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bug Tracker] Update Collection State from Session', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateBugModelStateFromSessionAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bug Tracker] Update Model State from Session', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateHaveBugModelSuppliesStateFromSessionAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Bug Tracker] Update Have Model Supplies State from Session', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/bug-tracker-view/actions/index.ts":
/*!***************************************************!*\
  !*** ./src/app/bug-tracker-view/actions/index.ts ***!
  \***************************************************/
/*! exports provided: BugTrackerActions, BugTrackerFilterActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bug_tracker_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bug-tracker.actions */ "./src/app/bug-tracker-view/actions/bug-tracker.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "BugTrackerActions", function() { return _bug_tracker_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _bug_tracker_filter_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bug-tracker-filter.actions */ "./src/app/bug-tracker-view/actions/bug-tracker-filter.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "BugTrackerFilterActions", function() { return _bug_tracker_filter_actions__WEBPACK_IMPORTED_MODULE_1__; });





/***/ }),

/***/ "./src/app/bug-tracker-view/bug-tracker-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/bug-tracker-view/bug-tracker-view.component.ts ***!
  \****************************************************************/
/*! exports provided: BugTrackerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugTrackerViewComponent", function() { return BugTrackerViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _reducers_bug_tracker_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/bug-tracker.reducer */ "./src/app/bug-tracker-view/reducers/bug-tracker.reducer.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_reducers_shared_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/reducers/shared.reducer */ "./src/app/shared/reducers/shared.reducer.ts");
/* harmony import */ var _shared_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/actions */ "./src/app/shared/actions/index.ts");
/* harmony import */ var _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/models/filter.model */ "./src/app/shared/models/filter.model.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions */ "./src/app/bug-tracker-view/actions/index.ts");
/* harmony import */ var _reducers_bug_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers/bug-tracker-filter.reducer */ "./src/app/bug-tracker-view/reducers/bug-tracker-filter.reducer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _collection_filters_collection_filters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../collection-filters/collection-filters.component */ "./src/app/collection-filters/collection-filters.component.ts");
/* harmony import */ var _collected_filter_toggle_collected_filter_toggle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../collected-filter-toggle/collected-filter-toggle.component */ "./src/app/collected-filter-toggle/collected-filter-toggle.component.ts");
/* harmony import */ var _creature_tracker_creature_tracker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../creature-tracker/creature-tracker.component */ "./src/app/creature-tracker/creature-tracker.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


















class BugTrackerViewComponent {
    constructor(store, activatedRoute) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.CollectionStatusFilterType = _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_6__["CollectionStatusFilterType"];
        this.reset = true;
        this.subscriptions = new Array();
        this.bugs$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((state) => Object(_reducers_bug_tracker_reducer__WEBPACK_IMPORTED_MODULE_2__["selectBugs"])(state)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((value) => !!value));
        this.hemisphere$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((state) => Object(_shared_reducers_shared_reducer__WEBPACK_IMPORTED_MODULE_4__["selectHemisphere"])(state)));
        this.nameFilter$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_reducers_bug_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_8__["selectBugNameFilter"]));
        this.collectionStatusFilter$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_reducers_bug_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_8__["selectBugCollectionStatusFilter"], {
            filterType: _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_6__["CollectionStatusFilterType"].COLLECTIBLE,
        }));
        this.modelStatusFilter$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_reducers_bug_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_8__["selectBugCollectionStatusFilter"], {
            filterType: _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_6__["CollectionStatusFilterType"].MODEL,
        }));
        this.modelSuppliesStatusFilter$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_reducers_bug_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_8__["selectBugCollectionStatusFilter"], {
            filterType: _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_6__["CollectionStatusFilterType"].MODEL_SUPPLIES,
        }));
    }
    ngOnInit() { }
    onFilterByName(partialName) {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["BugTrackerFilterActions"].filterBugsByNameAction({ partialName }));
    }
    toggleBugCollected(collectible) {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["BugTrackerActions"].toggleBugCollectedAction({ collectible }));
    }
    toggleBugModelCollected(collectible) {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["BugTrackerActions"].toggleBugModelObtainedAction({ collectible }));
    }
    toggleHaveBugModelSupplies(collectible) {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["BugTrackerActions"].toggleHaveBugModelSuppliesAction({ collectible }));
    }
    resetFilters() {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["BugTrackerFilterActions"].resetBugFilterStateAction());
        this.reset = !this.reset; // value irrelevant, just triggers function
    }
    setHemisphereToggleValue(hemisphere) {
        this.store.dispatch(_shared_actions__WEBPACK_IMPORTED_MODULE_5__["SharedTrackerActions"].setHemisphereToggleValue({ hemisphere }));
    }
    setBugCollectionStatusStatusFilter(collectionType, subset) {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["BugTrackerFilterActions"].setBugCollectionStatusFilterAction({
            collectionType,
            subset,
        }));
    }
}
BugTrackerViewComponent.ɵfac = function BugTrackerViewComponent_Factory(t) { return new (t || BugTrackerViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"])); };
BugTrackerViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BugTrackerViewComponent, selectors: [["app-bug-tracker-view"]], decls: 18, vars: 28, consts: [[1, "bug-tracker-view-container"], [1, "left-content"], ["mat-stroked-button", "", 3, "click"], [3, "collectibles", "resetNameFilterInput", "partialName", "hemisphereToggleValue"], [3, "filterType", "resetCollectionStatusFilterType", "collectionStatus"], [1, "right-content"], [1, "bug-tracker-container"], [3, "collectibles", "hemisphere", "partialName", "collectibleCollectionSubset", "modelCollectionSubset", "modelSuppliesCollectionSubset", "collectibleCollected", "collectibleModelCollected", "haveCollectibleModelSupplies"]], template: function BugTrackerViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aside", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BugTrackerViewComponent_Template_button_click_2_listener() { return ctx.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "RESET FILTERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-collection-filters", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("partialName", function BugTrackerViewComponent_Template_app_collection_filters_partialName_4_listener($event) { return ctx.onFilterByName($event); })("hemisphereToggleValue", function BugTrackerViewComponent_Template_app_collection_filters_hemisphereToggleValue_4_listener($event) { return ctx.setHemisphereToggleValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-collected-filter-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("collectionStatus", function BugTrackerViewComponent_Template_app_collected_filter_toggle_collectionStatus_6_listener($event) { return ctx.setBugCollectionStatusStatusFilter(ctx.CollectionStatusFilterType.COLLECTIBLE, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-collected-filter-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("collectionStatus", function BugTrackerViewComponent_Template_app_collected_filter_toggle_collectionStatus_7_listener($event) { return ctx.setBugCollectionStatusStatusFilter(ctx.CollectionStatusFilterType.MODEL, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-collected-filter-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("collectionStatus", function BugTrackerViewComponent_Template_app_collected_filter_toggle_collectionStatus_8_listener($event) { return ctx.setBugCollectionStatusStatusFilter(ctx.CollectionStatusFilterType.MODEL_SUPPLIES, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-creature-tracker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("collectibleCollected", function BugTrackerViewComponent_Template_app_creature_tracker_collectibleCollected_11_listener($event) { return ctx.toggleBugCollected($event); })("collectibleModelCollected", function BugTrackerViewComponent_Template_app_creature_tracker_collectibleModelCollected_11_listener($event) { return ctx.toggleBugModelCollected($event); })("haveCollectibleModelSupplies", function BugTrackerViewComponent_Template_app_creature_tracker_haveCollectibleModelSupplies_11_listener($event) { return ctx.toggleHaveBugModelSupplies($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectibles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 14, ctx.bugs$))("resetNameFilterInput", ctx.reset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterType", ctx.CollectionStatusFilterType.COLLECTIBLE)("resetCollectionStatusFilterType", ctx.reset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterType", ctx.CollectionStatusFilterType.MODEL)("resetCollectionStatusFilterType", ctx.reset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterType", ctx.CollectionStatusFilterType.MODEL_SUPPLIES)("resetCollectionStatusFilterType", ctx.reset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectibles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 16, ctx.bugs$))("hemisphere", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 18, ctx.hemisphere$))("partialName", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 20, ctx.nameFilter$))("collectibleCollectionSubset", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 22, ctx.collectionStatusFilter$))("modelCollectionSubset", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 24, ctx.modelStatusFilter$))("modelSuppliesCollectionSubset", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 26, ctx.modelSuppliesStatusFilter$));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _collection_filters_collection_filters_component__WEBPACK_IMPORTED_MODULE_11__["CollectionFiltersComponent"], _collected_filter_toggle_collected_filter_toggle_component__WEBPACK_IMPORTED_MODULE_12__["CollectedFilterToggleComponent"], _creature_tracker_creature_tracker_component__WEBPACK_IMPORTED_MODULE_13__["CreatureTrackerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]], styles: [".bug-tracker-view-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.global-filter-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVnLXRyYWNrZXItdmlldy9idWctdHJhY2tlci12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9idWctdHJhY2tlci12aWV3L2J1Zy10cmFja2VyLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idWctdHJhY2tlci12aWV3LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5nbG9iYWwtZmlsdGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BugTrackerViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bug-tracker-view',
                templateUrl: './bug-tracker-view.component.html',
                styleUrls: ['./bug-tracker-view.component.css'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/bug-tracker-view/reducers/bug-tracker-filter.reducer.ts":
/*!*************************************************************************!*\
  !*** ./src/app/bug-tracker-view/reducers/bug-tracker-filter.reducer.ts ***!
  \*************************************************************************/
/*! exports provided: initialState, selectBugTrackerFilterState, selectBugFilters, selectBugCollectionStatusFilter, selectBugNameFilter, bugTrackerFilterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBugTrackerFilterState", function() { return selectBugTrackerFilterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBugFilters", function() { return selectBugFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBugCollectionStatusFilter", function() { return selectBugCollectionStatusFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBugNameFilter", function() { return selectBugNameFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bugTrackerFilterReducer", function() { return bugTrackerFilterReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/bug-tracker-view/actions/index.ts");
/* harmony import */ var _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/collectible.model */ "./src/app/shared/models/collectible.model.ts");
/* harmony import */ var src_app_shared_models_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/filter.model */ "./src/app/shared/models/filter.model.ts");




const initialState = {
    filters: {
        [src_app_shared_models_filter_model__WEBPACK_IMPORTED_MODULE_3__["CollectionStatusFilterType"].COLLECTIBLE]: _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_2__["CollectionSubset"].ALL,
        [src_app_shared_models_filter_model__WEBPACK_IMPORTED_MODULE_3__["CollectionStatusFilterType"].MODEL]: _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_2__["CollectionSubset"].ALL,
        [src_app_shared_models_filter_model__WEBPACK_IMPORTED_MODULE_3__["CollectionStatusFilterType"].MODEL_SUPPLIES]: _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_2__["CollectionSubset"].ALL,
        partialName: '',
    },
};
const selectBugTrackerFilterState = (state) => state.bugTrackerFilterState;
const selectBugFilters = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBugTrackerFilterState, (state) => {
    return state.filters;
});
const selectBugCollectionStatusFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBugFilters, (filters, props) => filters[props.filterType]);
const selectBugNameFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBugFilters, (filters) => {
    return filters.partialName;
});
const _bugTrackerFilterReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["BugTrackerFilterActions"].filterBugsByNameAction, (state, { partialName }) => {
    return Object.assign(Object.assign({}, state), { filters: Object.assign(Object.assign({}, state.filters), { partialName }) });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["BugTrackerFilterActions"].setBugCollectionStatusFilterAction, (state, { collectionType, subset }) => {
    return Object.assign(Object.assign({}, state), { filters: Object.assign(Object.assign({}, state.filters), { [collectionType]: subset }) });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["BugTrackerFilterActions"].resetBugFilterStateAction, (state) => {
    return initialState;
}));
function bugTrackerFilterReducer(state, action) {
    return _bugTrackerFilterReducer(state, action);
}


/***/ }),

/***/ "./src/app/bug-tracker-view/reducers/bug-tracker.reducer.ts":
/*!******************************************************************!*\
  !*** ./src/app/bug-tracker-view/reducers/bug-tracker.reducer.ts ***!
  \******************************************************************/
/*! exports provided: selectBugTrackerState, selectBugs, getUpdatedBugStateForProperty, bugTrackerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBugTrackerState", function() { return selectBugTrackerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBugs", function() { return selectBugs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdatedBugStateForProperty", function() { return getUpdatedBugStateForProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bugTrackerReducer", function() { return bugTrackerReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _shared_models_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/constants */ "./src/app/shared/models/constants.ts");
/* harmony import */ var _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/collectible.model */ "./src/app/shared/models/collectible.model.ts");
/* harmony import */ var _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/app-state.model */ "./src/app/shared/models/app-state.model.ts");
/* harmony import */ var _shared_services_collection_encoding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/collection-encoding.service */ "./src/app/shared/services/collection-encoding.service.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/app/bug-tracker-view/actions/index.ts");
/* harmony import */ var _shared_helpers_reducer_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/helpers/reducer.helper */ "./src/app/shared/helpers/reducer.helper.ts");







const initialState = {
    collectibles: _shared_models_constants__WEBPACK_IMPORTED_MODULE_1__["BUG_DATA"],
    encoded: Object(_shared_services_collection_encoding_service__WEBPACK_IMPORTED_MODULE_4__["getDefaultEncoding"])([
        _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_COLLECTION,
        _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_MODELS,
        _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_MODEL_SUPPLIES,
    ]),
};
const selectBugTrackerState = (state) => state.bugTrackerState;
const selectBugs = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBugTrackerState, (state) => state.collectibles);
// TODO: genericise for use with any modelable collection state
const getEncodedState = (bugs) => {
    const sessionData = {};
    const collected = new Array();
    const uncollected = new Array();
    const haveModels = new Array();
    const missingModels = new Array();
    const haveModelSupplies = new Array();
    const missingModelSupplies = new Array();
    Object.keys(bugs).forEach((key) => {
        bugs[key].collected ? collected.push(+key) : uncollected.push(+key);
        bugs[key].haveModel ? haveModels.push(+key) : missingModels.push(+key);
        bugs[key].haveModelSupplies
            ? haveModelSupplies.push(+key)
            : missingModelSupplies.push(+key);
        sessionData[_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_COLLECTION] = {
            inclusive: collected.length <= uncollected.length,
            indices: collected.length <= uncollected.length ? collected : uncollected,
        };
        sessionData[_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_MODELS] = {
            inclusive: haveModels.length <= missingModels.length,
            indices: haveModels.length <= missingModels.length ? haveModels : missingModels,
        };
        sessionData[_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_MODEL_SUPPLIES] = {
            inclusive: haveModelSupplies.length <= missingModelSupplies.length,
            indices: haveModelSupplies.length <= missingModelSupplies.length
                ? haveModelSupplies
                : missingModelSupplies,
        };
    });
    return Object(_shared_services_collection_encoding_service__WEBPACK_IMPORTED_MODULE_4__["encodeSessionData"])(sessionData);
};
const _bugTrackerReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_5__["BugTrackerActions"].toggleBugCollectedAction, (state, { collectible }) => {
    const updated = Object.assign(Object.assign({}, state), { collectibles: Object.assign(Object.assign({}, state.collectibles), { [collectible.index]: Object.assign(Object.assign({}, state.collectibles[collectible.index]), { collected: !state.collectibles[collectible.index].collected }) }) });
    updated.encoded = Object(_shared_helpers_reducer_helper__WEBPACK_IMPORTED_MODULE_6__["getEncodedCollectibleState"])(updated.collectibles, {
        collection: _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_COLLECTION,
        models: _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_MODELS,
        modelSupplies: _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_MODEL_SUPPLIES,
    });
    return updated;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_5__["BugTrackerActions"].toggleBugModelObtainedAction, (state, { collectible }) => {
    const updated = Object.assign(Object.assign({}, state), { collectibles: Object.assign(Object.assign({}, state.collectibles), { [collectible.index]: Object.assign(Object.assign({}, state.collectibles[collectible.index]), { haveModel: !state.collectibles[collectible.index].haveModel }) }) });
    updated.encoded = Object(_shared_helpers_reducer_helper__WEBPACK_IMPORTED_MODULE_6__["getEncodedCollectibleState"])(updated.collectibles, {
        collection: _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_COLLECTION,
        models: _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_MODELS,
        modelSupplies: _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_MODEL_SUPPLIES,
    });
    return updated;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_5__["BugTrackerActions"].toggleHaveBugModelSuppliesAction, (state, { collectible }) => {
    const updated = Object.assign(Object.assign({}, state), { collectibles: Object.assign(Object.assign({}, state.collectibles), { [collectible.index]: Object.assign(Object.assign({}, state.collectibles[collectible.index]), { haveModelSupplies: !state.collectibles[collectible.index]
                    .haveModelSupplies }) }) });
    updated.encoded = Object(_shared_helpers_reducer_helper__WEBPACK_IMPORTED_MODULE_6__["getEncodedCollectibleState"])(updated.collectibles, {
        collection: _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_COLLECTION,
        models: _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_MODELS,
        modelSupplies: _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_MODEL_SUPPLIES,
    });
    return updated;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_5__["BugTrackerActions"].updateBugCollectionStateFromSessionAction, (state, { data }) => getUpdatedBugStateForProperty(state, data, _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_2__["COLLECTIBLE_KEY_COLLECTED"])), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_5__["BugTrackerActions"].updateBugModelStateFromSessionAction, (state, { data }) => 
// getUpdatedBugStateForProperty(state, data, COLLECTIBLE_KEY_HAVE_MODEL)
Object(_shared_helpers_reducer_helper__WEBPACK_IMPORTED_MODULE_6__["getUpdatedCollectibleStateForProperty"])(state, data, _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_2__["COLLECTIBLE_KEY_HAVE_MODEL"], {
    collection: _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_COLLECTION,
    models: _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_MODELS,
    modelSupplies: _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].BUG_MODEL_SUPPLIES,
})), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_5__["BugTrackerActions"].updateHaveBugModelSuppliesStateFromSessionAction, (state, { data }) => getUpdatedBugStateForProperty(state, data, _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_2__["COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES"])));
function getUpdatedBugStateForProperty(state, data, propName) {
    const updated = JSON.parse(JSON.stringify(state));
    for (const key of Object.keys(state.collectibles)) {
        updated.collectibles[key] = Object.assign({}, state.collectibles[key]);
        updated.collectibles[key][propName] = data.inclusive
            ? data.indices.indexOf(+key) > -1
            : data.indices.indexOf(+key) < 0;
    }
    updated.encoded = getEncodedState(updated.collectibles);
    return updated;
}
function bugTrackerReducer(state, action) {
    return _bugTrackerReducer(state, action);
}


/***/ }),

/***/ "./src/app/collected-filter-toggle/collected-filter-toggle.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/collected-filter-toggle/collected-filter-toggle.component.ts ***!
  \******************************************************************************/
/*! exports provided: CollectedFilterToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectedFilterToggleComponent", function() { return CollectedFilterToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/collectible.model */ "./src/app/shared/models/collectible.model.ts");
/* harmony import */ var _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/filter.model */ "./src/app/shared/models/filter.model.ts");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







class CollectedFilterToggleComponent {
    constructor() {
        this.CollectionSubset = _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["CollectionSubset"];
        this.CollectionStatusFilterType = _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_2__["CollectionStatusFilterType"];
        this.collectionStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set resetCollectionStatusFilterType(reset) {
        this.selected = _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["CollectionSubset"].ALL;
    }
    ngOnInit() {
        this.selected = _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["CollectionSubset"].ALL;
    }
    setCollectionStatusFilter(collectionSubset) {
        this.selected = collectionSubset;
        this.collectionStatus.emit(collectionSubset);
    }
    resetSelectedOption() {
        this.selected = _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["CollectionSubset"].ALL;
    }
}
CollectedFilterToggleComponent.ɵfac = function CollectedFilterToggleComponent_Factory(t) { return new (t || CollectedFilterToggleComponent)(); };
CollectedFilterToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollectedFilterToggleComponent, selectors: [["app-collected-filter-toggle"]], inputs: { filterType: "filterType", resetCollectionStatusFilterType: "resetCollectionStatusFilterType" }, outputs: { collectionStatus: "collectionStatus" }, decls: 11, vars: 14, consts: [[1, "collected-status-toggle-container"], ["vertical", "", "name", "collected-status", 3, "ngModel", "ngModelChange"], [3, "value", "checked", "click"]], template: function CollectedFilterToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-button-toggle-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CollectedFilterToggleComponent_Template_mat_button_toggle_group_ngModelChange_4_listener($event) { return ctx.selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CollectedFilterToggleComponent_Template_mat_button_toggle_click_5_listener() { return ctx.setCollectionStatusFilter(ctx.CollectionSubset.ALL); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CollectedFilterToggleComponent_Template_mat_button_toggle_click_7_listener() { return ctx.setCollectionStatusFilter(ctx.CollectionSubset.COLLECTED); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CollectedFilterToggleComponent_Template_mat_button_toggle_click_9_listener() { return ctx.setCollectionStatusFilter(ctx.CollectionSubset.UNCOLLECTED); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 12, ctx.CollectionStatusFilterType[ctx.filterType]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.CollectionStatusFilterType[ctx.filterType] + " collected status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.CollectionSubset.ALL)("checked", ctx.selected === ctx.CollectionSubset.ALL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.CollectionSubset[ctx.CollectionSubset.ALL]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.CollectionSubset.COLLECTED)("checked", ctx.selected === ctx.CollectionSubset.COLLECTED);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.CollectionSubset[ctx.CollectionSubset.COLLECTED]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.CollectionSubset.UNCOLLECTED)("checked", ctx.selected === ctx.CollectionSubset.UNCOLLECTED);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.CollectionSubset[ctx.CollectionSubset.UNCOLLECTED]);
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: [".collected-status-toggle-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVjdGVkLWZpbHRlci10b2dnbGUvY29sbGVjdGVkLWZpbHRlci10b2dnbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29sbGVjdGVkLWZpbHRlci10b2dnbGUvY29sbGVjdGVkLWZpbHRlci10b2dnbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xsZWN0ZWQtc3RhdHVzLXRvZ2dsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDEwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectedFilterToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-collected-filter-toggle',
                templateUrl: './collected-filter-toggle.component.html',
                styleUrls: ['./collected-filter-toggle.component.css'],
            }]
    }], function () { return []; }, { filterType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resetCollectionStatusFilterType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collectionStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/collection-filters/collection-filters.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/collection-filters/collection-filters.component.ts ***!
  \********************************************************************/
/*! exports provided: CollectionFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionFiltersComponent", function() { return CollectionFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _hemisphere_toggle_hemisphere_toggle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hemisphere-toggle/hemisphere-toggle.component */ "./src/app/hemisphere-toggle/hemisphere-toggle.component.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");












function CollectionFiltersComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collectibleName_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", collectibleName_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", collectibleName_r3, " ");
} }
class CollectionFiltersComponent {
    constructor() {
        this.partialName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hemisphereToggleValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.nameFilterInput = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subscriptions = new Array();
    }
    set resetNameFilterInput(resetInput) {
        this.control.setValue('');
    }
    ngOnInit() {
        this.filteredCollectibleNames = this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((value) => this._filter(value)));
        this.subscriptions.push(this.control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe((name) => {
            this.partialName.emit(name);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
    _filter(value) {
        const filterValue = this._normalizeValue(value);
        return Object.keys(this.collectibles)
            .map((key) => this.collectibles[key].name)
            .filter((name) => this._normalizeValue(name).includes(filterValue));
    }
    _normalizeValue(value) {
        return value.toLowerCase().replace(/\s/g, '');
    }
    updateNameFilterInput(entry) {
        this.nameFilterInput.next(entry);
    }
    setHemisphereToggleValue(hemisphere) {
        this.hemisphereToggleValue.emit(hemisphere);
    }
}
CollectionFiltersComponent.ɵfac = function CollectionFiltersComponent_Factory(t) { return new (t || CollectionFiltersComponent)(); };
CollectionFiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollectionFiltersComponent, selectors: [["app-collection-filters"]], inputs: { collectibles: "collectibles", resetNameFilterInput: "resetNameFilterInput" }, outputs: { partialName: "partialName", hemisphereToggleValue: "hemisphereToggleValue" }, decls: 12, vars: 5, consts: [[1, "collection-filters-container"], [1, "name-filter-input"], ["matInput", "", "type", "text", "placeholder", "Search by name", 1, "name-input", 3, "formControl", "matAutocomplete", "keydown.enter"], ["trigger", "matAutocompleteTrigger"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "hemisphereToggleValue"], [3, "value"]], template: function CollectionFiltersComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter Names:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function CollectionFiltersComponent_Template_input_keydown_enter_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); $event.target.blur(); return _r0.closePanel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-autocomplete", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CollectionFiltersComponent_mat_option_9_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-hemisphere-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hemisphereToggleValue", function CollectionFiltersComponent_Template_app_hemisphere_toggle_hemisphereToggleValue_11_listener($event) { return ctx.setHemisphereToggleValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, ctx.filteredCollectibleNames));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _hemisphere_toggle_hemisphere_toggle_component__WEBPACK_IMPORTED_MODULE_8__["HemisphereToggleComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlY3Rpb24tZmlsdGVycy9jb2xsZWN0aW9uLWZpbHRlcnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionFiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-collection-filters',
                templateUrl: './collection-filters.component.html',
                styleUrls: ['./collection-filters.component.css'],
            }]
    }], function () { return []; }, { collectibles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resetNameFilterInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], partialName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], hemisphereToggleValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/creature-card/creature-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/creature-card/creature-card.component.ts ***!
  \**********************************************************/
/*! exports provided: CreatureCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatureCardComponent", function() { return CreatureCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/collectible.model */ "./src/app/shared/models/collectible.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/app-state.model */ "./src/app/shared/models/app-state.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");










function CreatureCardComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatureCardComponent_span_5_Template_mat_checkbox_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.markCollectibleModelCollected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "HAVE MODEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatureCardComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatureCardComponent_span_6_Template_mat_checkbox_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.markHaveCollectibleModelSupplies(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "HAVE SUPPLIES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatureCardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("L: ", ctx_r2.getLocation(), "");
} }
function CreatureCardComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Mo: ", ctx_r3.getMonths(), " ");
} }
function CreatureCardComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("T: ", ctx_r4.getTimes(), "");
} }
function CreatureCardComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Sz: ", ctx_r5.SilhouetteSize[ctx_r5.collectible.size], " ");
} }
function CreatureCardComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" St: ", ctx_r6.SwimStyle[ctx_r6.collectible.swimStyle], " ");
} }
function CreatureCardComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Md: ", ctx_r7.SongMood[ctx_r7.collectible.mood], " ");
} }
class CreatureCardComponent {
    constructor(baseHref, formBuilder, datePipe) {
        this.baseHref = baseHref;
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.SwimStyle = _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["SwimStyle"];
        this.SongMood = _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["SongMood"];
        this.SilhouetteSize = _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["SilhouetteSize"];
        this.collectibleCollected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.collectibleModelCollected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.haveCollectibleModelSupplies = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.collectionForm = this.formBuilder.group({
            collected: [this.collectible.collected],
            haveModel: [this.collectible.haveModel],
            haveModelSupplies: [this.collectible.haveModelSupplies],
        });
        this.imageSrc = this.getImageSrc();
    }
    markCollectibleCollected() {
        this.collectibleCollected.emit(this.collectible);
    }
    markCollectibleModelCollected() {
        this.collectibleModelCollected.emit(this.collectible);
    }
    markHaveCollectibleModelSupplies() {
        this.haveCollectibleModelSupplies.emit(this.collectible);
    }
    getLocation() {
        return this.collectible.location
            .map((loc) => {
            return this.collectible.type === _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["CollectibleType"].BUG
                ? _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["BugLocation"][+loc]
                : _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["FishLocation"][+loc];
        })
            .join(', ');
    }
    getMonths() {
        return this.collectible.monthsActive.length
            ? this.collectible.monthsActive
                .map((activityWindow) => {
                const start = new Date();
                const end = new Date();
                const offset = this.hemisphere === _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["Hemisphere"].NORTH ? 0 : 6;
                start.setMonth(activityWindow.start + offset);
                end.setMonth(activityWindow.end + offset);
                return activityWindow.start === activityWindow.end
                    ? this.datePipe.transform(start, 'MMM')
                    : `${this.datePipe.transform(start, 'MMM')}-${this.datePipe.transform(end, 'MMM')}`;
            })
                .join(', ')
            : 'ALL YEAR';
    }
    getTimes() {
        return this.collectible.timesActive.length
            ? this.collectible.timesActive
                .map((activityWindow) => {
                const start = new Date();
                const end = new Date();
                start.setHours(activityWindow.start);
                end.setHours(activityWindow.end);
                return activityWindow.start === activityWindow.end
                    ? this.datePipe.transform(start, 'h a')
                    : `${this.datePipe.transform(start, 'h a')}-${this.datePipe.transform(end, 'h a')}`;
            })
                .join(', ')
            : 'ALL DAY';
    }
    getImageSrc() {
        if (!!this.collectible &&
            this.collectible.index !== undefined &&
            !!this.collectible.name &&
            this.collectible.type !== undefined &&
            this.collectible.type === _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["CollectibleType"].BUG) {
            let collectibleType;
            switch (+this.collectible.type) {
                case _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["CollectibleType"].BUG: {
                    collectibleType = 'bugs';
                    break;
                }
                // TODO: enable after renaming fish assets
                // case CollectibleType.FISH: {
                //   collectibleType = 'fish';
                //   break;
                // }
            }
            const fileName = `${this.collectible.index}-${this.collectible.name.replace(/\W/g, '')}.png`;
            return (this.baseHref + `assets/collectibles/${collectibleType}/${fileName}`);
        }
        return this.baseHref + 'assets/default.png';
    }
}
CreatureCardComponent.ɵfac = function CreatureCardComponent_Factory(t) { return new (t || CreatureCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"])); };
CreatureCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatureCardComponent, selectors: [["app-collectible-card"]], inputs: { collectible: "collectible", hemisphere: "hemisphere" }, outputs: { collectibleCollected: "collectibleCollected", collectibleModelCollected: "collectibleModelCollected", haveCollectibleModelSupplies: "haveCollectibleModelSupplies" }, decls: 22, vars: 14, consts: [[1, "collectible-card", 3, "formGroup"], [1, "collection-checks", 3, "formGroup"], ["formControlName", "collected", 3, "click"], [4, "ngIf"], [1, "collectible-image"], [3, "src"], [1, "collectible-info"], ["formControlName", "haveModel", 3, "click"], ["type", "checkbox", "formControlName", "haveModelSupplies", 3, "click"]], template: function CreatureCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatureCardComponent_Template_mat_checkbox_click_3_listener() { return ctx.markCollectibleCollected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "COLLECTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreatureCardComponent_span_5_Template, 3, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreatureCardComponent_span_6_Template, 3, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreatureCardComponent_div_12_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreatureCardComponent_div_13_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CreatureCardComponent_div_14_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CreatureCardComponent_div_15_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreatureCardComponent_div_16_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CreatureCardComponent_div_21_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.collectionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.collectionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collectible.haveModel !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collectible.haveModelSupplies !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.collectible.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collectible.location !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collectible.monthsActive !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collectible.timesActive !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collectible.size !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collectible.swimStyle !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$: ", ctx.collectible.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#: ", ctx.collectible.index, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collectible.mood !== undefined);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".collectible-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding: 5px;\n  margin: 10px 10px 10px 10px;\n}\n\n.collection-checks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.collectible-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 64px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXR1cmUtY2FyZC9jcmVhdHVyZS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NyZWF0dXJlLWNhcmQvY3JlYXR1cmUtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGxlY3RpYmxlLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbn1cblxuLmNvbGxlY3Rpb24tY2hlY2tzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbGxlY3RpYmxlLWltYWdlIGltZyB7XG4gIG1heC13aWR0aDogNjRweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatureCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-collectible-card',
                templateUrl: './creature-card.component.html',
                styleUrls: ['./creature-card.component.css'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }]; }, { collectible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hemisphere: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collectibleCollected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], collectibleModelCollected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], haveCollectibleModelSupplies: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/creature-tracker/creature-tracker.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/creature-tracker/creature-tracker.component.ts ***!
  \****************************************************************/
/*! exports provided: CreatureTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatureTrackerComponent", function() { return CreatureTrackerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/collectible.model */ "./src/app/shared/models/collectible.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _creature_card_creature_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../creature-card/creature-card.component */ "./src/app/creature-card/creature-card.component.ts");






function CreatureTrackerComponent_div_0_app_collectible_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-collectible-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("collectibleCollected", function CreatureTrackerComponent_div_0_app_collectible_card_1_Template_app_collectible_card_collectibleCollected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.markCollectibleCollected($event); })("collectibleModelCollected", function CreatureTrackerComponent_div_0_app_collectible_card_1_Template_app_collectible_card_collectibleModelCollected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.markCollectibleModelCollected($event); })("haveCollectibleModelSupplies", function CreatureTrackerComponent_div_0_app_collectible_card_1_Template_app_collectible_card_haveCollectibleModelSupplies_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.markHaveCollectibleModelSupplies($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collectible_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectible", collectible_r3)("hemisphere", ctx_r2.hemisphere);
} }
function CreatureTrackerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreatureTrackerComponent_div_0_app_collectible_card_1_Template, 1, 2, "app-collectible-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.filteredCollectibles);
} }
function CreatureTrackerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " NO COLLECTIBLES\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CreatureTrackerComponent {
    constructor() {
        this._collectibles = [];
        this.collectibleCollected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.collectibleModelCollected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.haveCollectibleModelSupplies = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set collectibles(collectibles) {
        this._collectibles = Object.keys(collectibles).map((key) => collectibles[key]);
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        this.filteredCollectibles = this._collectibles
            .filter(this.filterByCollectionSubset(this.collectibleCollectionSubset, _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["COLLECTIBLE_KEY_COLLECTED"]))
            .filter(this.filterByCollectionSubset(this.modelCollectionSubset, _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["COLLECTIBLE_KEY_HAVE_MODEL"]))
            .filter(this.filterByCollectionSubset(this.modelSuppliesCollectionSubset, _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES"]))
            .filter(this.filterByName());
    }
    filterByCollectionSubset(collectionSubset, property) {
        return (collectible) => {
            return (collectionSubset === _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["CollectionSubset"].ALL ||
                collectible[property] === undefined ||
                (collectionSubset === _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["CollectionSubset"].COLLECTED &&
                    collectible[property]) ||
                (collectionSubset === _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["CollectionSubset"].UNCOLLECTED &&
                    !collectible[property]));
        };
    }
    filterByName() {
        return (collectible) => {
            return (!this.partialName ||
                collectible.name
                    .toLowerCase()
                    .replace(/(\s|')/g, '')
                    .includes(this.partialName.toLowerCase().replace(/(\s|')/g, '')));
        };
    }
    markCollectibleCollected(collectible) {
        this.collectibleCollected.emit(collectible);
    }
    markCollectibleModelCollected(collectible) {
        this.collectibleModelCollected.emit(collectible);
    }
    markHaveCollectibleModelSupplies(collectible) {
        this.haveCollectibleModelSupplies.emit(collectible);
    }
}
CreatureTrackerComponent.ɵfac = function CreatureTrackerComponent_Factory(t) { return new (t || CreatureTrackerComponent)(); };
CreatureTrackerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatureTrackerComponent, selectors: [["app-creature-tracker"]], inputs: { collectibles: "collectibles", hemisphere: "hemisphere", collectibleCollectionSubset: "collectibleCollectionSubset", modelCollectionSubset: "modelCollectionSubset", modelSuppliesCollectionSubset: "modelSuppliesCollectionSubset", partialName: "partialName" }, outputs: { collectibleCollected: "collectibleCollected", collectibleModelCollected: "collectibleModelCollected", haveCollectibleModelSupplies: "haveCollectibleModelSupplies" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [["class", "collectible-tracker-container", 4, "ngIf"], [4, "ngIf"], [1, "collectible-tracker-container"], [3, "collectible", "hemisphere", "collectibleCollected", "collectibleModelCollected", "haveCollectibleModelSupplies", 4, "ngFor", "ngForOf"], [3, "collectible", "hemisphere", "collectibleCollected", "collectibleModelCollected", "haveCollectibleModelSupplies"]], template: function CreatureTrackerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CreatureTrackerComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreatureTrackerComponent_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._collectibles.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.filteredCollectibles.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _creature_card_creature_card_component__WEBPACK_IMPORTED_MODULE_3__["CreatureCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0dXJlLXRyYWNrZXIvY3JlYXR1cmUtdHJhY2tlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatureTrackerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-creature-tracker',
                templateUrl: './creature-tracker.component.html',
                styleUrls: ['./creature-tracker.component.css'],
            }]
    }], function () { return []; }, { collectibles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hemisphere: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collectibleCollectionSubset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], modelCollectionSubset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], modelSuppliesCollectionSubset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], partialName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collectibleCollected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], collectibleModelCollected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], haveCollectibleModelSupplies: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/fish-tracker-view/actions/fish-tracker-filter.actions.ts":
/*!**************************************************************************!*\
  !*** ./src/app/fish-tracker-view/actions/fish-tracker-filter.actions.ts ***!
  \**************************************************************************/
/*! exports provided: filterFishByNameAction, setFishCollectionStatusFilterAction, resetFishFilterStateAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterFishByNameAction", function() { return filterFishByNameAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFishCollectionStatusFilterAction", function() { return setFishCollectionStatusFilterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetFishFilterStateAction", function() { return resetFishFilterStateAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const filterFishByNameAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Fish Tracker] Filter by Name', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setFishCollectionStatusFilterAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Fish Tracker] Set Collection Status', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const resetFishFilterStateAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Fish Tracker] Reset Filter State');


/***/ }),

/***/ "./src/app/fish-tracker-view/actions/fish-tracker.actions.ts":
/*!*******************************************************************!*\
  !*** ./src/app/fish-tracker-view/actions/fish-tracker.actions.ts ***!
  \*******************************************************************/
/*! exports provided: toggleFishCollectedAction, toggleFishModelObtainedAction, toggleHaveFishModelSuppliesAction, updateFishCollectionStateFromSessionAction, updateFishModelStateFromSessionAction, updateHaveFishModelSuppliesStateFromSessionAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleFishCollectedAction", function() { return toggleFishCollectedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleFishModelObtainedAction", function() { return toggleFishModelObtainedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleHaveFishModelSuppliesAction", function() { return toggleHaveFishModelSuppliesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFishCollectionStateFromSessionAction", function() { return updateFishCollectionStateFromSessionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFishModelStateFromSessionAction", function() { return updateFishModelStateFromSessionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHaveFishModelSuppliesStateFromSessionAction", function() { return updateHaveFishModelSuppliesStateFromSessionAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const toggleFishCollectedAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Fish Tracker] Toggle Collected', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleFishModelObtainedAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Fish Tracker] Toggle Model Obtained', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleHaveFishModelSuppliesAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Fish Tracker] Have Model Supplies', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateFishCollectionStateFromSessionAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Fish Tracker] Update Collection State from Session', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateFishModelStateFromSessionAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Fish Tracker] Update Model State from Session', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateHaveFishModelSuppliesStateFromSessionAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Fish Tracker] Update Have Model Supplies State from Session', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/fish-tracker-view/actions/index.ts":
/*!****************************************************!*\
  !*** ./src/app/fish-tracker-view/actions/index.ts ***!
  \****************************************************/
/*! exports provided: FishTrackerActions, FishTrackerFilterActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fish_tracker_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fish-tracker.actions */ "./src/app/fish-tracker-view/actions/fish-tracker.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "FishTrackerActions", function() { return _fish_tracker_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _fish_tracker_filter_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fish-tracker-filter.actions */ "./src/app/fish-tracker-view/actions/fish-tracker-filter.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "FishTrackerFilterActions", function() { return _fish_tracker_filter_actions__WEBPACK_IMPORTED_MODULE_1__; });





/***/ }),

/***/ "./src/app/fish-tracker-view/fish-tracker-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/fish-tracker-view/fish-tracker-view.component.ts ***!
  \******************************************************************/
/*! exports provided: FishTrackerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FishTrackerViewComponent", function() { return FishTrackerViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _reducers_fish_tracker_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/fish-tracker.reducer */ "./src/app/fish-tracker-view/reducers/fish-tracker.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/filter.model */ "./src/app/shared/models/filter.model.ts");
/* harmony import */ var _shared_reducers_shared_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/reducers/shared.reducer */ "./src/app/shared/reducers/shared.reducer.ts");
/* harmony import */ var _reducers_fish_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/fish-tracker-filter.reducer */ "./src/app/fish-tracker-view/reducers/fish-tracker-filter.reducer.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions */ "./src/app/fish-tracker-view/actions/index.ts");
/* harmony import */ var _shared_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/actions */ "./src/app/shared/actions/index.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _collection_filters_collection_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../collection-filters/collection-filters.component */ "./src/app/collection-filters/collection-filters.component.ts");
/* harmony import */ var _collected_filter_toggle_collected_filter_toggle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../collected-filter-toggle/collected-filter-toggle.component */ "./src/app/collected-filter-toggle/collected-filter-toggle.component.ts");
/* harmony import */ var _creature_tracker_creature_tracker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../creature-tracker/creature-tracker.component */ "./src/app/creature-tracker/creature-tracker.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
















class FishTrackerViewComponent {
    constructor(store) {
        this.store = store;
        this.CollectionStatusFilterType = _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_4__["CollectionStatusFilterType"];
        this.reset = true;
        this.fish$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((state) => Object(_reducers_fish_tracker_reducer__WEBPACK_IMPORTED_MODULE_1__["selectFish"])(state)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((value) => !!value));
        this.hemisphere$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((state) => Object(_shared_reducers_shared_reducer__WEBPACK_IMPORTED_MODULE_5__["selectHemisphere"])(state)));
        this.nameFilter$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers_fish_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_6__["selectFishNameFilter"]));
        this.collectionStatusFilter$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers_fish_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_6__["selectFishCollectionStatusFilter"], {
            filterType: _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_4__["CollectionStatusFilterType"].COLLECTIBLE,
        }));
        this.modelStatusFilter$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers_fish_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_6__["selectFishCollectionStatusFilter"], {
            filterType: _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_4__["CollectionStatusFilterType"].MODEL,
        }));
        this.modelSuppliesStatusFilter$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers_fish_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_6__["selectFishCollectionStatusFilter"], {
            filterType: _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_4__["CollectionStatusFilterType"].MODEL_SUPPLIES,
        }));
    }
    ngOnInit() { }
    onFilterByName(partialName) {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["FishTrackerFilterActions"].filterFishByNameAction({ partialName }));
    }
    toggleFishCollected(collectible) {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["FishTrackerActions"].toggleFishCollectedAction({ collectible }));
    }
    toggleFishModelCollected(collectible) {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["FishTrackerActions"].toggleFishModelObtainedAction({ collectible }));
    }
    toggleHaveFishModelSupplies(collectible) {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["FishTrackerActions"].toggleHaveFishModelSuppliesAction({ collectible }));
    }
    resetFilters() {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["FishTrackerFilterActions"].resetFishFilterStateAction());
        this.reset = !this.reset; // value irrelevant, just triggers function
    }
    setHemisphereToggleValue(hemisphere) {
        this.store.dispatch(_shared_actions__WEBPACK_IMPORTED_MODULE_8__["SharedTrackerActions"].setHemisphereToggleValue({ hemisphere }));
    }
    setFishCollectionStatusStatusFilter(collectionType, subset) {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["FishTrackerFilterActions"].setFishCollectionStatusFilterAction({
            collectionType,
            subset,
        }));
    }
}
FishTrackerViewComponent.ɵfac = function FishTrackerViewComponent_Factory(t) { return new (t || FishTrackerViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
FishTrackerViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FishTrackerViewComponent, selectors: [["app-fish-tracker-view"]], decls: 18, vars: 28, consts: [[1, "fish-tracker-view-container"], [1, "left-content"], ["mat-stroked-button", "", 3, "click"], [3, "collectibles", "resetNameFilterInput", "partialName", "hemisphereToggleValue"], [3, "filterType", "resetCollectionStatusFilterType", "collectionStatus"], [1, "right-content"], [1, "fish-tracker-container"], [3, "collectibles", "hemisphere", "partialName", "collectibleCollectionSubset", "modelCollectionSubset", "modelSuppliesCollectionSubset", "collectibleCollected", "collectibleModelCollected", "haveCollectibleModelSupplies"]], template: function FishTrackerViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aside", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FishTrackerViewComponent_Template_button_click_2_listener() { return ctx.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "RESET FILTERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-collection-filters", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("partialName", function FishTrackerViewComponent_Template_app_collection_filters_partialName_4_listener($event) { return ctx.onFilterByName($event); })("hemisphereToggleValue", function FishTrackerViewComponent_Template_app_collection_filters_hemisphereToggleValue_4_listener($event) { return ctx.setHemisphereToggleValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-collected-filter-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("collectionStatus", function FishTrackerViewComponent_Template_app_collected_filter_toggle_collectionStatus_6_listener($event) { return ctx.setFishCollectionStatusStatusFilter(ctx.CollectionStatusFilterType.COLLECTIBLE, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-collected-filter-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("collectionStatus", function FishTrackerViewComponent_Template_app_collected_filter_toggle_collectionStatus_7_listener($event) { return ctx.setFishCollectionStatusStatusFilter(ctx.CollectionStatusFilterType.MODEL, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-collected-filter-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("collectionStatus", function FishTrackerViewComponent_Template_app_collected_filter_toggle_collectionStatus_8_listener($event) { return ctx.setFishCollectionStatusStatusFilter(ctx.CollectionStatusFilterType.MODEL_SUPPLIES, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-creature-tracker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("collectibleCollected", function FishTrackerViewComponent_Template_app_creature_tracker_collectibleCollected_11_listener($event) { return ctx.toggleFishCollected($event); })("collectibleModelCollected", function FishTrackerViewComponent_Template_app_creature_tracker_collectibleModelCollected_11_listener($event) { return ctx.toggleFishModelCollected($event); })("haveCollectibleModelSupplies", function FishTrackerViewComponent_Template_app_creature_tracker_haveCollectibleModelSupplies_11_listener($event) { return ctx.toggleHaveFishModelSupplies($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectibles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 14, ctx.fish$))("resetNameFilterInput", ctx.reset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterType", ctx.CollectionStatusFilterType.COLLECTIBLE)("resetCollectionStatusFilterType", ctx.reset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterType", ctx.CollectionStatusFilterType.MODEL)("resetCollectionStatusFilterType", ctx.reset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterType", ctx.CollectionStatusFilterType.MODEL_SUPPLIES)("resetCollectionStatusFilterType", ctx.reset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectibles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 16, ctx.fish$))("hemisphere", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 18, ctx.hemisphere$))("partialName", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 20, ctx.nameFilter$))("collectibleCollectionSubset", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 22, ctx.collectionStatusFilter$))("modelCollectionSubset", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 24, ctx.modelStatusFilter$))("modelSuppliesCollectionSubset", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 26, ctx.modelSuppliesStatusFilter$));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _collection_filters_collection_filters_component__WEBPACK_IMPORTED_MODULE_10__["CollectionFiltersComponent"], _collected_filter_toggle_collected_filter_toggle_component__WEBPACK_IMPORTED_MODULE_11__["CollectedFilterToggleComponent"], _creature_tracker_creature_tracker_component__WEBPACK_IMPORTED_MODULE_12__["CreatureTrackerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: [".fish-tracker-view-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.global-filter-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlzaC10cmFja2VyLXZpZXcvZmlzaC10cmFja2VyLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Zpc2gtdHJhY2tlci12aWV3L2Zpc2gtdHJhY2tlci12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlzaC10cmFja2VyLXZpZXctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmdsb2JhbC1maWx0ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FishTrackerViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fish-tracker-view',
                templateUrl: './fish-tracker-view.component.html',
                styleUrls: ['./fish-tracker-view.component.css'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/fish-tracker-view/reducers/fish-tracker-filter.reducer.ts":
/*!***************************************************************************!*\
  !*** ./src/app/fish-tracker-view/reducers/fish-tracker-filter.reducer.ts ***!
  \***************************************************************************/
/*! exports provided: initialState, selectFishTrackerFilterState, selectFishFilters, selectFishCollectionStatusFilter, selectFishNameFilter, fishTrackerFilterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFishTrackerFilterState", function() { return selectFishTrackerFilterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFishFilters", function() { return selectFishFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFishCollectionStatusFilter", function() { return selectFishCollectionStatusFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFishNameFilter", function() { return selectFishNameFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fishTrackerFilterReducer", function() { return fishTrackerFilterReducer; });
/* harmony import */ var _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/models/filter.model */ "./src/app/shared/models/filter.model.ts");
/* harmony import */ var _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/collectible.model */ "./src/app/shared/models/collectible.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/app/fish-tracker-view/actions/index.ts");




const initialState = {
    filters: {
        [_shared_models_filter_model__WEBPACK_IMPORTED_MODULE_0__["CollectionStatusFilterType"].COLLECTIBLE]: _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["CollectionSubset"].ALL,
        [_shared_models_filter_model__WEBPACK_IMPORTED_MODULE_0__["CollectionStatusFilterType"].MODEL]: _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["CollectionSubset"].ALL,
        [_shared_models_filter_model__WEBPACK_IMPORTED_MODULE_0__["CollectionStatusFilterType"].MODEL_SUPPLIES]: _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["CollectionSubset"].ALL,
        partialName: '',
    },
};
const selectFishTrackerFilterState = (state) => state.fishTrackerFilterState;
const selectFishFilters = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFishTrackerFilterState, (state) => {
    return state.filters;
});
const selectFishCollectionStatusFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFishFilters, (filters, props) => filters[props.filterType]);
const selectFishNameFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFishFilters, (filters) => {
    return filters.partialName;
});
const _fishTrackerFilterReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions__WEBPACK_IMPORTED_MODULE_3__["FishTrackerFilterActions"].filterFishByNameAction, (state, { partialName }) => {
    return Object.assign(Object.assign({}, state), { filters: Object.assign(Object.assign({}, state.filters), { partialName }) });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions__WEBPACK_IMPORTED_MODULE_3__["FishTrackerFilterActions"].setFishCollectionStatusFilterAction, (state, { collectionType, subset }) => {
    return Object.assign(Object.assign({}, state), { filters: Object.assign(Object.assign({}, state.filters), { [collectionType]: subset }) });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions__WEBPACK_IMPORTED_MODULE_3__["FishTrackerFilterActions"].resetFishFilterStateAction, (state) => {
    return initialState;
}));
function fishTrackerFilterReducer(state, action) {
    return _fishTrackerFilterReducer(state, action);
}


/***/ }),

/***/ "./src/app/fish-tracker-view/reducers/fish-tracker.reducer.ts":
/*!********************************************************************!*\
  !*** ./src/app/fish-tracker-view/reducers/fish-tracker.reducer.ts ***!
  \********************************************************************/
/*! exports provided: selectFishTrackerState, selectFish, getUpdatedFishStateForProperty, fishTrackerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFishTrackerState", function() { return selectFishTrackerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFish", function() { return selectFish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdatedFishStateForProperty", function() { return getUpdatedFishStateForProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fishTrackerReducer", function() { return fishTrackerReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _shared_models_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/constants */ "./src/app/shared/models/constants.ts");
/* harmony import */ var _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/app-state.model */ "./src/app/shared/models/app-state.model.ts");
/* harmony import */ var _shared_services_collection_encoding_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/collection-encoding.service */ "./src/app/shared/services/collection-encoding.service.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/app/fish-tracker-view/actions/index.ts");
/* harmony import */ var _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/models/collectible.model */ "./src/app/shared/models/collectible.model.ts");






const initialState = {
    collectibles: _shared_models_constants__WEBPACK_IMPORTED_MODULE_1__["FISH_DATA"],
    encoded: Object(_shared_services_collection_encoding_service__WEBPACK_IMPORTED_MODULE_3__["getDefaultEncoding"])([
        _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_2__["TrackerCategory"].FISH_COLLECTION,
        _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_2__["TrackerCategory"].FISH_MODELS,
        _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_2__["TrackerCategory"].FISH_MODEL_SUPPLIES,
    ]),
};
const selectFishTrackerState = (state) => state.fishTrackerState;
const selectFish = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFishTrackerState, (state) => state.collectibles);
// TODO: genericise for use with any modelable collection state
const getEncodedState = (collectibles) => {
    const sessionData = {};
    const collected = new Array();
    const uncollected = new Array();
    const haveModels = new Array();
    const missingModels = new Array();
    const haveModelSupplies = new Array();
    const missingModelSupplies = new Array();
    Object.keys(collectibles).forEach((key) => {
        collectibles[key].collected ? collected.push(+key) : uncollected.push(+key);
        collectibles[key].haveModel
            ? haveModels.push(+key)
            : missingModels.push(+key);
        collectibles[key].haveModelSupplies
            ? haveModelSupplies.push(+key)
            : missingModelSupplies.push(+key);
        sessionData[_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_2__["TrackerCategory"].FISH_COLLECTION] = {
            inclusive: collected.length <= uncollected.length,
            indices: collected.length <= uncollected.length ? collected : uncollected,
        };
        sessionData[_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_2__["TrackerCategory"].FISH_MODELS] = {
            inclusive: haveModels.length <= missingModels.length,
            indices: haveModels.length <= missingModels.length ? haveModels : missingModels,
        };
        sessionData[_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_2__["TrackerCategory"].FISH_MODEL_SUPPLIES] = {
            inclusive: haveModelSupplies.length <= missingModelSupplies.length,
            indices: haveModelSupplies.length <= missingModelSupplies.length
                ? haveModelSupplies
                : missingModelSupplies,
        };
    });
    return Object(_shared_services_collection_encoding_service__WEBPACK_IMPORTED_MODULE_3__["encodeSessionData"])(sessionData);
};
const _fishTrackerReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_4__["FishTrackerActions"].toggleFishCollectedAction, (state, { collectible }) => {
    const updated = Object.assign(Object.assign({}, state), { collectibles: Object.assign(Object.assign({}, state.collectibles), { [collectible.index]: Object.assign(Object.assign({}, state.collectibles[collectible.index]), { collected: !state.collectibles[collectible.index].collected }) }) });
    updated.encoded = getEncodedState(updated.collectibles);
    return updated;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_4__["FishTrackerActions"].toggleFishModelObtainedAction, (state, { collectible }) => {
    const updated = Object.assign(Object.assign({}, state), { collectibles: Object.assign(Object.assign({}, state.collectibles), { [collectible.index]: Object.assign(Object.assign({}, state.collectibles[collectible.index]), { haveModel: !state.collectibles[collectible.index].haveModel }) }) });
    updated.encoded = getEncodedState(updated.collectibles);
    return updated;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_4__["FishTrackerActions"].toggleHaveFishModelSuppliesAction, (state, { collectible }) => {
    const updated = Object.assign(Object.assign({}, state), { collectibles: Object.assign(Object.assign({}, state.collectibles), { [collectible.index]: Object.assign(Object.assign({}, state.collectibles[collectible.index]), { haveModelSupplies: !state.collectibles[collectible.index]
                    .haveModelSupplies }) }) });
    updated.encoded = getEncodedState(updated.collectibles);
    return updated;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_4__["FishTrackerActions"].updateFishCollectionStateFromSessionAction, (state, { data }) => getUpdatedFishStateForProperty(state, data, _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_5__["COLLECTIBLE_KEY_COLLECTED"])), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_4__["FishTrackerActions"].updateFishModelStateFromSessionAction, (state, { data }) => getUpdatedFishStateForProperty(state, data, _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_5__["COLLECTIBLE_KEY_HAVE_MODEL"])), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_4__["FishTrackerActions"].updateHaveFishModelSuppliesStateFromSessionAction, (state, { data }) => getUpdatedFishStateForProperty(state, data, _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_5__["COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES"])));
function getUpdatedFishStateForProperty(state, data, propName) {
    const updated = JSON.parse(JSON.stringify(state));
    for (const key of Object.keys(state.collectibles)) {
        updated.collectibles[key] = Object.assign({}, state.collectibles[key]);
        updated.collectibles[key][propName] = data.inclusive
            ? data.indices.indexOf(+key) > -1
            : data.indices.indexOf(+key) < 0;
    }
    updated.encoded = getEncodedState(updated.collectibles);
    return updated;
}
function fishTrackerReducer(state, action) {
    return _fishTrackerReducer(state, action);
}


/***/ }),

/***/ "./src/app/header-nav/header-nav.component.ts":
/*!****************************************************!*\
  !*** ./src/app/header-nav/header-nav.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavComponent", function() { return HeaderNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function (a0) { return { session: a0 }; };
class HeaderNavComponent {
    constructor() { }
    ngOnInit() { }
}
HeaderNavComponent.ɵfac = function HeaderNavComponent_Factory(t) { return new (t || HeaderNavComponent)(); };
HeaderNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderNavComponent, selectors: [["header-nav"]], inputs: { sessionParam: "sessionParam" }, decls: 12, vars: 20, consts: [[1, "header-nav"], [1, "list-horizontal"], ["mat-list-item", "", 1, "nav-link", 3, "routerLink", "queryParams"]], template: function HeaderNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-nav-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "LANDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BUGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "FISH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "SEA CREATURES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SONGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.sessionParam));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/bugs")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.sessionParam));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/fish")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.sessionParam));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/sea-creatures")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.sessionParam));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/songs")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.sessionParam));
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".header-nav[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 600px;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\nmat-nav-list.list-horizontal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLW5hdi9oZWFkZXItbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci1uYXYvaGVhZGVyLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4ubmF2LWxpbmsge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5tYXQtbmF2LWxpc3QubGlzdC1ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'header-nav',
                templateUrl: './header-nav.component.html',
                styleUrls: ['./header-nav.component.css'],
            }]
    }], function () { return []; }, { sessionParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/hemisphere-toggle/hemisphere-toggle.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/hemisphere-toggle/hemisphere-toggle.component.ts ***!
  \******************************************************************/
/*! exports provided: HemisphereToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HemisphereToggleComponent", function() { return HemisphereToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/app-state.model */ "./src/app/shared/models/app-state.model.ts");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");




class HemisphereToggleComponent {
    constructor() {
        this.Hemisphere = _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_1__["Hemisphere"]; // expose enum value to template
        this.hemisphereToggleValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    setHemisphereToggleValue(hemisphere) {
        this.hemisphereToggleValue.emit(hemisphere);
    }
}
HemisphereToggleComponent.ɵfac = function HemisphereToggleComponent_Factory(t) { return new (t || HemisphereToggleComponent)(); };
HemisphereToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HemisphereToggleComponent, selectors: [["app-hemisphere-toggle"]], outputs: { hemisphereToggleValue: "hemisphereToggleValue" }, decls: 6, vars: 2, consts: [[1, "hemisphere-toggle-container"], ["name", "hemisphere", "value", "Hemisphere.NORTH", "aria-label", "Hemisphere Selection"], ["value", "Hemisphere.NORTH", 3, "click"], ["value", "Hemisphere.SOUTH", 3, "click"]], template: function HemisphereToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-button-toggle-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HemisphereToggleComponent_Template_mat_button_toggle_click_2_listener() { return ctx.setHemisphereToggleValue(ctx.Hemisphere.NORTH); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HemisphereToggleComponent_Template_mat_button_toggle_click_4_listener() { return ctx.setHemisphereToggleValue(ctx.Hemisphere.SOUTH); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Hemisphere[ctx.Hemisphere.NORTH]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Hemisphere[ctx.Hemisphere.SOUTH]);
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggle"]], styles: [".hemisphere-toggle-container[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVtaXNwaGVyZS10b2dnbGUvaGVtaXNwaGVyZS10b2dnbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hlbWlzcGhlcmUtdG9nZ2xlL2hlbWlzcGhlcmUtdG9nZ2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVtaXNwaGVyZS10b2dnbGUtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HemisphereToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hemisphere-toggle',
                templateUrl: './hemisphere-toggle.component.html',
                styleUrls: ['./hemisphere-toggle.component.css'],
            }]
    }], function () { return []; }, { hemisphereToggleValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/landing-view/landing-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-view/landing-view.component.ts ***!
  \********************************************************/
/*! exports provided: LandingViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingViewComponent", function() { return LandingViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LandingViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingViewComponent.ɵfac = function LandingViewComponent_Factory(t) { return new (t || LandingViewComponent)(); };
LandingViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingViewComponent, selectors: [["app-landing-view"]], decls: 6, vars: 0, template: function LandingViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " This tool is primarily intended to assist in tracking completion progress of the various collections available in Animal Crossing: New Horizons. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctdmlldy9sYW5kaW5nLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-view',
                templateUrl: './landing-view.component.html',
                styleUrls: ['./landing-view.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sea-creature-tracker-view/actions/index.ts":
/*!************************************************************!*\
  !*** ./src/app/sea-creature-tracker-view/actions/index.ts ***!
  \************************************************************/
/*! exports provided: SeaCreatureTrackerActions, SeaCreatureTrackerFilterActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sea_creature_tracker_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sea-creature-tracker.actions */ "./src/app/sea-creature-tracker-view/actions/sea-creature-tracker.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SeaCreatureTrackerActions", function() { return _sea_creature_tracker_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _sea_creature_tracker_filter_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sea-creature-tracker-filter.actions */ "./src/app/sea-creature-tracker-view/actions/sea-creature-tracker-filter.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SeaCreatureTrackerFilterActions", function() { return _sea_creature_tracker_filter_actions__WEBPACK_IMPORTED_MODULE_1__; });





/***/ }),

/***/ "./src/app/sea-creature-tracker-view/actions/sea-creature-tracker-filter.actions.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/sea-creature-tracker-view/actions/sea-creature-tracker-filter.actions.ts ***!
  \******************************************************************************************/
/*! exports provided: filterSeaCreaturesByNameAction, setSeaCreatureCollectionStatusFilterAction, resetSeaCreatureFilterStateAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSeaCreaturesByNameAction", function() { return filterSeaCreaturesByNameAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSeaCreatureCollectionStatusFilterAction", function() { return setSeaCreatureCollectionStatusFilterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSeaCreatureFilterStateAction", function() { return resetSeaCreatureFilterStateAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const filterSeaCreaturesByNameAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Sea Creature Tracker] Filter by Name', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setSeaCreatureCollectionStatusFilterAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Sea Creature Tracker] Set Collection Status', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const resetSeaCreatureFilterStateAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Sea Creature Tracker] Reset Filter State');


/***/ }),

/***/ "./src/app/sea-creature-tracker-view/actions/sea-creature-tracker.actions.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/sea-creature-tracker-view/actions/sea-creature-tracker.actions.ts ***!
  \***********************************************************************************/
/*! exports provided: toggleSeaCreatureCollectedAction, updateSeaCreatureCollectionStateFromSessionAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSeaCreatureCollectedAction", function() { return toggleSeaCreatureCollectedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSeaCreatureCollectionStateFromSessionAction", function() { return updateSeaCreatureCollectionStateFromSessionAction; });
/* harmony import */ var _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/models/collectible.model */ "./src/app/shared/models/collectible.model.ts");
/* harmony import */ var src_app_shared_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/actions */ "./src/app/shared/actions/index.ts");


// export const toggleSeaCreatureCollectedAction = createAction(
//   '[Sea Creature Tracker] Toggle Collected',
//   props<{ creature: Creature }>()
// );
const toggleSeaCreatureCollectedAction = src_app_shared_actions__WEBPACK_IMPORTED_MODULE_1__["TrackerActionFactory"].createToggleCreatureCollectedAction(_shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE);
// export const updateSeaCreatureCollectionStateFromSessionAction = createAction(
//   '[Sea Creature Tracker] Update Collection State from Session',
//   props<{ data: SessionCategoryData }>()
// );
const updateSeaCreatureCollectionStateFromSessionAction = src_app_shared_actions__WEBPACK_IMPORTED_MODULE_1__["TrackerActionFactory"].createUpdateCollectionStateFromSessionAction(_shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE);


/***/ }),

/***/ "./src/app/sea-creature-tracker-view/reducers/sea-creature-tracker-filter.reducer.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/sea-creature-tracker-view/reducers/sea-creature-tracker-filter.reducer.ts ***!
  \*******************************************************************************************/
/*! exports provided: initialState, selectSeaCreatureTrackerFilterState, selectSeaCreatureFilters, selectSeaCreatureCollectionStatusFilter, selectSeaCreatureNameFilter, seaCreatureTrackerFilterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSeaCreatureTrackerFilterState", function() { return selectSeaCreatureTrackerFilterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSeaCreatureFilters", function() { return selectSeaCreatureFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSeaCreatureCollectionStatusFilter", function() { return selectSeaCreatureCollectionStatusFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSeaCreatureNameFilter", function() { return selectSeaCreatureNameFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seaCreatureTrackerFilterReducer", function() { return seaCreatureTrackerFilterReducer; });
/* harmony import */ var _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/models/filter.model */ "./src/app/shared/models/filter.model.ts");
/* harmony import */ var _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/collectible.model */ "./src/app/shared/models/collectible.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/app/sea-creature-tracker-view/actions/index.ts");




const initialState = {
    filters: {
        [_shared_models_filter_model__WEBPACK_IMPORTED_MODULE_0__["CollectionStatusFilterType"].COLLECTIBLE]: _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["CollectionSubset"].ALL,
        partialName: '',
    },
};
const selectSeaCreatureTrackerFilterState = (state) => state.seaCreatureTrackerFilterState;
const selectSeaCreatureFilters = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectSeaCreatureTrackerFilterState, (state) => {
    return state.filters;
});
const selectSeaCreatureCollectionStatusFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectSeaCreatureFilters, (filters, props) => filters[props.filterType]);
const selectSeaCreatureNameFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectSeaCreatureFilters, (filters) => {
    return filters.partialName;
});
const _seaCreatureTrackerFilterReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions__WEBPACK_IMPORTED_MODULE_3__["SeaCreatureTrackerFilterActions"].filterSeaCreaturesByNameAction, (state, { partialName }) => {
    return Object.assign(Object.assign({}, state), { filters: Object.assign(Object.assign({}, state.filters), { partialName }) });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions__WEBPACK_IMPORTED_MODULE_3__["SeaCreatureTrackerFilterActions"].setSeaCreatureCollectionStatusFilterAction, (state, { collectionType, subset }) => {
    return Object.assign(Object.assign({}, state), { filters: Object.assign(Object.assign({}, state.filters), { [collectionType]: subset }) });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions__WEBPACK_IMPORTED_MODULE_3__["SeaCreatureTrackerFilterActions"].resetSeaCreatureFilterStateAction, (state) => {
    return initialState;
}));
function seaCreatureTrackerFilterReducer(state, action) {
    return _seaCreatureTrackerFilterReducer(state, action);
}


/***/ }),

/***/ "./src/app/sea-creature-tracker-view/reducers/sea-creature-tracker.reducer.ts":
/*!************************************************************************************!*\
  !*** ./src/app/sea-creature-tracker-view/reducers/sea-creature-tracker.reducer.ts ***!
  \************************************************************************************/
/*! exports provided: selectSeaCreatureTrackerState, selectSeaCreatures, getUpdatedSeaCreatureStateForProperty, seaCreatureTrackerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSeaCreatureTrackerState", function() { return selectSeaCreatureTrackerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSeaCreatures", function() { return selectSeaCreatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdatedSeaCreatureStateForProperty", function() { return getUpdatedSeaCreatureStateForProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seaCreatureTrackerReducer", function() { return seaCreatureTrackerReducer; });
/* harmony import */ var _shared_models_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/models/constants */ "./src/app/shared/models/constants.ts");
/* harmony import */ var _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/collectible.model */ "./src/app/shared/models/collectible.model.ts");
/* harmony import */ var _shared_services_collection_encoding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/collection-encoding.service */ "./src/app/shared/services/collection-encoding.service.ts");
/* harmony import */ var _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/app-state.model */ "./src/app/shared/models/app-state.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/app/sea-creature-tracker-view/actions/index.ts");






const initialState = {
    collectibles: _shared_models_constants__WEBPACK_IMPORTED_MODULE_0__["SEA_CREATURE_DATA"],
    encoded: Object(_shared_services_collection_encoding_service__WEBPACK_IMPORTED_MODULE_2__["getDefaultEncoding"])([_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].SEA_CREATURE_COLLECTION]),
};
const selectSeaCreatureTrackerState = (state) => state.seaCreatureTrackerState;
const selectSeaCreatures = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectSeaCreatureTrackerState, (state) => state.collectibles);
// TODO: genericise for use with any modelable collection state
const getEncodedState = (collectibles) => {
    const sessionData = {};
    const collected = new Array();
    const uncollected = new Array();
    Object.keys(collectibles).forEach((key) => {
        collectibles[key].collected ? collected.push(+key) : uncollected.push(+key);
        sessionData[_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_3__["TrackerCategory"].SEA_CREATURE_COLLECTION] = {
            inclusive: collected.length <= uncollected.length,
            indices: collected.length <= uncollected.length ? collected : uncollected,
        };
    });
    return Object(_shared_services_collection_encoding_service__WEBPACK_IMPORTED_MODULE_2__["encodeSessionData"])(sessionData);
};
const _seaCreatureTrackerReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["on"])(_actions__WEBPACK_IMPORTED_MODULE_5__["SeaCreatureTrackerActions"].toggleSeaCreatureCollectedAction, (state, { collectible }) => {
    const updated = Object.assign(Object.assign({}, state), { collectibles: Object.assign(Object.assign({}, state.collectibles), { [collectible.index]: Object.assign(Object.assign({}, state.collectibles[collectible.index]), { collected: !state.collectibles[collectible.index].collected }) }) });
    updated.encoded = getEncodedState(updated.collectibles);
    return updated;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["on"])(_actions__WEBPACK_IMPORTED_MODULE_5__["SeaCreatureTrackerActions"].updateSeaCreatureCollectionStateFromSessionAction, (state, { data }) => getUpdatedSeaCreatureStateForProperty(state, data, _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["COLLECTIBLE_KEY_COLLECTED"])));
function getUpdatedSeaCreatureStateForProperty(state, data, propName) {
    const updated = JSON.parse(JSON.stringify(state));
    for (const key of Object.keys(state.collectibles)) {
        updated.collectibles[key] = Object.assign({}, state.collectibles[key]);
        updated.collectibles[key][propName] = data.inclusive
            ? data.indices.indexOf(+key) > -1
            : data.indices.indexOf(+key) < 0;
    }
    updated.encoded = getEncodedState(updated.collectibles);
    return updated;
}
function seaCreatureTrackerReducer(state, action) {
    return _seaCreatureTrackerReducer(state, action);
}


/***/ }),

/***/ "./src/app/sea-creature-tracker-view/sea-creature-tracker-view.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/sea-creature-tracker-view/sea-creature-tracker-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SeaCreatureTrackerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeaCreatureTrackerViewComponent", function() { return SeaCreatureTrackerViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _reducers_sea_creature_tracker_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/sea-creature-tracker.reducer */ "./src/app/sea-creature-tracker-view/reducers/sea-creature-tracker.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/filter.model */ "./src/app/shared/models/filter.model.ts");
/* harmony import */ var _shared_reducers_shared_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/reducers/shared.reducer */ "./src/app/shared/reducers/shared.reducer.ts");
/* harmony import */ var _reducers_sea_creature_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/sea-creature-tracker-filter.reducer */ "./src/app/sea-creature-tracker-view/reducers/sea-creature-tracker-filter.reducer.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions */ "./src/app/sea-creature-tracker-view/actions/index.ts");
/* harmony import */ var _shared_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/actions */ "./src/app/shared/actions/index.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _collection_filters_collection_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../collection-filters/collection-filters.component */ "./src/app/collection-filters/collection-filters.component.ts");
/* harmony import */ var _collected_filter_toggle_collected_filter_toggle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../collected-filter-toggle/collected-filter-toggle.component */ "./src/app/collected-filter-toggle/collected-filter-toggle.component.ts");
/* harmony import */ var _creature_tracker_creature_tracker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../creature-tracker/creature-tracker.component */ "./src/app/creature-tracker/creature-tracker.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
















class SeaCreatureTrackerViewComponent {
    constructor(store) {
        this.store = store;
        this.CollectionStatusFilterType = _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_4__["CollectionStatusFilterType"];
        this.reset = true;
        this.seaCreatures$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((state) => Object(_reducers_sea_creature_tracker_reducer__WEBPACK_IMPORTED_MODULE_1__["selectSeaCreatures"])(state)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((value) => !!value));
        this.hemisphere$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((state) => Object(_shared_reducers_shared_reducer__WEBPACK_IMPORTED_MODULE_5__["selectHemisphere"])(state)));
        this.nameFilter$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers_sea_creature_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_6__["selectSeaCreatureNameFilter"]));
        this.collectionStatusFilter$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers_sea_creature_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_6__["selectSeaCreatureCollectionStatusFilter"], {
            filterType: _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_4__["CollectionStatusFilterType"].COLLECTIBLE,
        }));
        this.modelStatusFilter$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers_sea_creature_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_6__["selectSeaCreatureCollectionStatusFilter"], {
            filterType: _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_4__["CollectionStatusFilterType"].MODEL,
        }));
        this.modelSuppliesStatusFilter$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers_sea_creature_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_6__["selectSeaCreatureCollectionStatusFilter"], {
            filterType: _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_4__["CollectionStatusFilterType"].MODEL_SUPPLIES,
        }));
    }
    ngOnInit() { }
    onFilterByName(partialName) {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["SeaCreatureTrackerFilterActions"].filterSeaCreaturesByNameAction({
            partialName,
        }));
    }
    toggleSeaCreatureCollected(collectible) {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["SeaCreatureTrackerActions"].toggleSeaCreatureCollectedAction({
            collectible,
        }));
    }
    resetFilters() {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["SeaCreatureTrackerFilterActions"].resetSeaCreatureFilterStateAction());
        this.reset = !this.reset; // value irrelevant, just triggers function
    }
    setHemisphereToggleValue(hemisphere) {
        this.store.dispatch(_shared_actions__WEBPACK_IMPORTED_MODULE_8__["SharedTrackerActions"].setHemisphereToggleValue({ hemisphere }));
    }
    setSeaCreatureCollectionStatusStatusFilter(collectionType, subset) {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["SeaCreatureTrackerFilterActions"].setSeaCreatureCollectionStatusFilterAction({
            collectionType,
            subset,
        }));
    }
}
SeaCreatureTrackerViewComponent.ɵfac = function SeaCreatureTrackerViewComponent_Factory(t) { return new (t || SeaCreatureTrackerViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
SeaCreatureTrackerViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeaCreatureTrackerViewComponent, selectors: [["app-sea-creature-tracker-view"]], decls: 16, vars: 24, consts: [[1, "sea-creature-tracker-view-container"], [1, "left-content"], ["mat-stroked-button", "", 3, "click"], [3, "collectibles", "resetNameFilterInput", "partialName", "hemisphereToggleValue"], [3, "filterType", "resetCollectionStatusFilterType", "collectionStatus"], [1, "right-content"], [1, "sea-creature-tracker-container"], [3, "collectibles", "hemisphere", "partialName", "collectibleCollectionSubset", "modelCollectionSubset", "modelSuppliesCollectionSubset", "collectibleCollected"]], template: function SeaCreatureTrackerViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aside", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SeaCreatureTrackerViewComponent_Template_button_click_2_listener() { return ctx.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "RESET FILTERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-collection-filters", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("partialName", function SeaCreatureTrackerViewComponent_Template_app_collection_filters_partialName_4_listener($event) { return ctx.onFilterByName($event); })("hemisphereToggleValue", function SeaCreatureTrackerViewComponent_Template_app_collection_filters_hemisphereToggleValue_4_listener($event) { return ctx.setHemisphereToggleValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-collected-filter-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("collectionStatus", function SeaCreatureTrackerViewComponent_Template_app_collected_filter_toggle_collectionStatus_6_listener($event) { return ctx.setSeaCreatureCollectionStatusStatusFilter(ctx.CollectionStatusFilterType.COLLECTIBLE, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-creature-tracker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("collectibleCollected", function SeaCreatureTrackerViewComponent_Template_app_creature_tracker_collectibleCollected_9_listener($event) { return ctx.toggleSeaCreatureCollected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectibles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, ctx.seaCreatures$))("resetNameFilterInput", ctx.reset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterType", ctx.CollectionStatusFilterType.COLLECTIBLE)("resetCollectionStatusFilterType", ctx.reset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectibles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, ctx.seaCreatures$))("hemisphere", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 14, ctx.hemisphere$))("partialName", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 16, ctx.nameFilter$))("collectibleCollectionSubset", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 18, ctx.collectionStatusFilter$))("modelCollectionSubset", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 20, ctx.modelStatusFilter$))("modelSuppliesCollectionSubset", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 22, ctx.modelSuppliesStatusFilter$));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _collection_filters_collection_filters_component__WEBPACK_IMPORTED_MODULE_10__["CollectionFiltersComponent"], _collected_filter_toggle_collected_filter_toggle_component__WEBPACK_IMPORTED_MODULE_11__["CollectedFilterToggleComponent"], _creature_tracker_creature_tracker_component__WEBPACK_IMPORTED_MODULE_12__["CreatureTrackerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: [".sea-creature-tracker-view-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.global-filter-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhLWNyZWF0dXJlLXRyYWNrZXItdmlldy9zZWEtY3JlYXR1cmUtdHJhY2tlci12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zZWEtY3JlYXR1cmUtdHJhY2tlci12aWV3L3NlYS1jcmVhdHVyZS10cmFja2VyLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWEtY3JlYXR1cmUtdHJhY2tlci12aWV3LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5nbG9iYWwtZmlsdGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeaCreatureTrackerViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sea-creature-tracker-view',
                templateUrl: './sea-creature-tracker-view.component.html',
                styleUrls: ['./sea-creature-tracker-view.component.css'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/actions/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/actions/index.ts ***!
  \*****************************************/
/*! exports provided: SharedTrackerActions, TrackerActionFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.actions */ "./src/app/shared/actions/shared.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SharedTrackerActions", function() { return _shared_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _tracker_action_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracker-action-factory */ "./src/app/shared/actions/tracker-action-factory.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "TrackerActionFactory", function() { return _tracker_action_factory__WEBPACK_IMPORTED_MODULE_1__; });





/***/ }),

/***/ "./src/app/shared/actions/shared.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/actions/shared.actions.ts ***!
  \**************************************************/
/*! exports provided: setHemisphereToggleValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHemisphereToggleValue", function() { return setHemisphereToggleValue; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const setHemisphereToggleValue = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Shared] Set Hemisphere Toggle', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/shared/actions/tracker-action-factory.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/actions/tracker-action-factory.ts ***!
  \**********************************************************/
/*! exports provided: createToggleCreatureCollectedAction, createUpdateCollectionStateFromSessionAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createToggleCreatureCollectedAction", function() { return createToggleCreatureCollectedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUpdateCollectionStateFromSessionAction", function() { return createUpdateCollectionStateFromSessionAction; });
/* harmony import */ var _models_collectible_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/collectible.model */ "./src/app/shared/models/collectible.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");


const createToggleCreatureCollectedAction = (collectibleType) => {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(`[${_models_collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"][collectibleType]} Tracker] Toggle Collected`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
};
const createUpdateCollectionStateFromSessionAction = (collectibleType) => {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(`[${_models_collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"][collectibleType]} Tracker] Update Collection State from Session`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
};


/***/ }),

/***/ "./src/app/shared/helpers/reducer.helper.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/helpers/reducer.helper.ts ***!
  \**************************************************/
/*! exports provided: getEncodedCollectibleState, getUpdatedCollectibleStateForProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEncodedCollectibleState", function() { return getEncodedCollectibleState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdatedCollectibleStateForProperty", function() { return getUpdatedCollectibleStateForProperty; });
/* harmony import */ var _services_collection_encoding_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/collection-encoding.service */ "./src/app/shared/services/collection-encoding.service.ts");

const getEncodedCollectibleState = (collectibles, options) => {
    const sessionData = {};
    const collected = new Array();
    const uncollected = new Array();
    let haveModels;
    let missingModels;
    if (options.models) {
        haveModels = new Array();
        missingModels = new Array();
    }
    let haveModelSupplies;
    let missingModelSupplies;
    if (options.modelSupplies) {
        haveModelSupplies = new Array();
        missingModelSupplies = new Array();
    }
    Object.keys(collectibles).forEach((key) => {
        collectibles[key].collected ? collected.push(+key) : uncollected.push(+key);
        sessionData[options.collection] = {
            inclusive: collected.length <= uncollected.length,
            indices: collected.length <= uncollected.length ? collected : uncollected,
        };
        if (options.models) {
            collectibles[key].haveModel
                ? haveModels.push(+key)
                : missingModels.push(+key);
            sessionData[options.models] = {
                inclusive: haveModels.length <= missingModels.length,
                indices: haveModels.length <= missingModels.length
                    ? haveModels
                    : missingModels,
            };
        }
        if (options.modelSupplies) {
            collectibles[key].haveModelSupplies
                ? haveModelSupplies.push(+key)
                : missingModelSupplies.push(+key);
            sessionData[options.modelSupplies] = {
                inclusive: haveModelSupplies.length <= missingModelSupplies.length,
                indices: haveModelSupplies.length <= missingModelSupplies.length
                    ? haveModelSupplies
                    : missingModelSupplies,
            };
        }
    });
    return Object(_services_collection_encoding_service__WEBPACK_IMPORTED_MODULE_0__["encodeSessionData"])(sessionData);
};
function getUpdatedCollectibleStateForProperty(state, data, propName, options) {
    const updated = JSON.parse(JSON.stringify(state));
    for (const key of Object.keys(state.collectibles)) {
        updated.collectibles[key] = Object.assign({}, state.collectibles[key]);
        updated.collectibles[key][propName] = data.inclusive
            ? data.indices.indexOf(+key) > -1
            : data.indices.indexOf(+key) < 0;
    }
    updated.encoded = getEncodedCollectibleState(updated.collectibles, options);
    return updated;
}


/***/ }),

/***/ "./src/app/shared/models/app-state.model.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/app-state.model.ts ***!
  \**************************************************/
/*! exports provided: TrackerCategory, Hemisphere */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerCategory", function() { return TrackerCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hemisphere", function() { return Hemisphere; });
/* harmony import */ var _filter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.model */ "./src/app/shared/models/filter.model.ts");

var TrackerCategory;
(function (TrackerCategory) {
    TrackerCategory[TrackerCategory["BUG_COLLECTION"] = 0] = "BUG_COLLECTION";
    TrackerCategory[TrackerCategory["BUG_MODELS"] = 1] = "BUG_MODELS";
    TrackerCategory[TrackerCategory["BUG_MODEL_SUPPLIES"] = 2] = "BUG_MODEL_SUPPLIES";
    TrackerCategory[TrackerCategory["FISH_COLLECTION"] = 3] = "FISH_COLLECTION";
    TrackerCategory[TrackerCategory["FISH_MODELS"] = 4] = "FISH_MODELS";
    TrackerCategory[TrackerCategory["FISH_MODEL_SUPPLIES"] = 5] = "FISH_MODEL_SUPPLIES";
    TrackerCategory[TrackerCategory["SEA_CREATURE_COLLECTION"] = 6] = "SEA_CREATURE_COLLECTION";
    TrackerCategory[TrackerCategory["SONGS"] = 7] = "SONGS";
})(TrackerCategory || (TrackerCategory = {}));
var Hemisphere;
(function (Hemisphere) {
    Hemisphere[Hemisphere["NORTH"] = 0] = "NORTH";
    Hemisphere[Hemisphere["SOUTH"] = 1] = "SOUTH";
})(Hemisphere || (Hemisphere = {}));


/***/ }),

/***/ "./src/app/shared/models/collectible.model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/models/collectible.model.ts ***!
  \****************************************************/
/*! exports provided: COLLECTIBLE_KEY_COLLECTED, COLLECTIBLE_KEY_HAVE_MODEL, COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES, SwimStyle, SongMood, BugLocation, FishLocation, SilhouetteSize, CollectibleType, CollectionSubset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTIBLE_KEY_COLLECTED", function() { return COLLECTIBLE_KEY_COLLECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTIBLE_KEY_HAVE_MODEL", function() { return COLLECTIBLE_KEY_HAVE_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES", function() { return COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwimStyle", function() { return SwimStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongMood", function() { return SongMood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugLocation", function() { return BugLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FishLocation", function() { return FishLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SilhouetteSize", function() { return SilhouetteSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectibleType", function() { return CollectibleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionSubset", function() { return CollectionSubset; });
const COLLECTIBLE_KEY_COLLECTED = 'collected';
const COLLECTIBLE_KEY_HAVE_MODEL = 'haveModel';
const COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES = 'haveModelSupplies';
var SwimStyle;
(function (SwimStyle) {
    SwimStyle[SwimStyle["STATIONARY"] = 0] = "STATIONARY";
    SwimStyle[SwimStyle["SLOW_SHORT"] = 1] = "SLOW_SHORT";
    SwimStyle[SwimStyle["SLOW_LONG"] = 2] = "SLOW_LONG";
    SwimStyle[SwimStyle["SLOW_CONSISTENT"] = 3] = "SLOW_CONSISTENT";
    SwimStyle[SwimStyle["MODERATE_SHORT"] = 4] = "MODERATE_SHORT";
    SwimStyle[SwimStyle["MODERATE_LONG"] = 5] = "MODERATE_LONG";
    SwimStyle[SwimStyle["MODERATE_CONSISTENT"] = 6] = "MODERATE_CONSISTENT";
    SwimStyle[SwimStyle["FAST_SHORT"] = 7] = "FAST_SHORT";
    SwimStyle[SwimStyle["FAST_LONG"] = 8] = "FAST_LONG";
    SwimStyle[SwimStyle["FAST_CONSISTENT"] = 9] = "FAST_CONSISTENT";
})(SwimStyle || (SwimStyle = {}));
var SongMood;
(function (SongMood) {
    SongMood[SongMood["GRUMPY"] = 0] = "GRUMPY";
    SongMood[SongMood["LAID_BACK"] = 1] = "LAID_BACK";
    SongMood[SongMood["REQUEST"] = 2] = "REQUEST";
    SongMood[SongMood["GOOD"] = 3] = "GOOD";
    SongMood[SongMood["BLUE"] = 4] = "BLUE";
    SongMood[SongMood["HARD_TO_SAY"] = 5] = "HARD_TO_SAY";
    SongMood[SongMood["CHEERFUL_UPBEAT"] = 6] = "CHEERFUL_UPBEAT";
})(SongMood || (SongMood = {}));
var BugLocation;
(function (BugLocation) {
    BugLocation[BugLocation["UNDERGROUND"] = 0] = "UNDERGROUND";
    BugLocation[BugLocation["GROUND"] = 1] = "GROUND";
    BugLocation[BugLocation["FLYING"] = 2] = "FLYING";
    BugLocation[BugLocation["FLOWER"] = 3] = "FLOWER";
    BugLocation[BugLocation["SHRUB"] = 4] = "SHRUB";
    BugLocation[BugLocation["ROCK"] = 5] = "ROCK";
    BugLocation[BugLocation["TREE_TRUNK"] = 6] = "TREE_TRUNK";
    BugLocation[BugLocation["TREE_COCONUT"] = 7] = "TREE_COCONUT";
    BugLocation[BugLocation["TREE_STUMP"] = 8] = "TREE_STUMP";
    BugLocation[BugLocation["TREE_SHAKE"] = 9] = "TREE_SHAKE";
    BugLocation[BugLocation["WATER_POND"] = 10] = "WATER_POND";
    BugLocation[BugLocation["WATER_RIVER"] = 11] = "WATER_RIVER";
    BugLocation[BugLocation["TRASH"] = 12] = "TRASH";
    BugLocation[BugLocation["ROTTEN_FOOD"] = 13] = "ROTTEN_FOOD";
    BugLocation[BugLocation["VILLAGER"] = 14] = "VILLAGER";
    BugLocation[BugLocation["BEACH"] = 15] = "BEACH";
})(BugLocation || (BugLocation = {}));
var FishLocation;
(function (FishLocation) {
    FishLocation[FishLocation["SEA"] = 0] = "SEA";
    FishLocation[FishLocation["PIER"] = 1] = "PIER";
    FishLocation[FishLocation["SEA_RAINY"] = 2] = "SEA_RAINY";
    FishLocation[FishLocation["RIVER"] = 3] = "RIVER";
    FishLocation[FishLocation["RIVER_CLIFF"] = 4] = "RIVER_CLIFF";
    FishLocation[FishLocation["RIVER_MOUTH"] = 5] = "RIVER_MOUTH";
    FishLocation[FishLocation["POND"] = 6] = "POND";
    FishLocation[FishLocation["POND_CLIFF"] = 7] = "POND_CLIFF";
})(FishLocation || (FishLocation = {}));
var SilhouetteSize;
(function (SilhouetteSize) {
    SilhouetteSize[SilhouetteSize["SMALLEST"] = 0] = "SMALLEST";
    SilhouetteSize[SilhouetteSize["SMALL"] = 1] = "SMALL";
    SilhouetteSize[SilhouetteSize["MEDIUM"] = 2] = "MEDIUM";
    SilhouetteSize[SilhouetteSize["LARGE"] = 3] = "LARGE";
    SilhouetteSize[SilhouetteSize["LARGE_FIN"] = 4] = "LARGE_FIN";
    SilhouetteSize[SilhouetteSize["EXTRA_LARGE"] = 5] = "EXTRA_LARGE";
    SilhouetteSize[SilhouetteSize["LARGEST"] = 6] = "LARGEST";
    SilhouetteSize[SilhouetteSize["LARGEST_FIN"] = 7] = "LARGEST_FIN";
    SilhouetteSize[SilhouetteSize["NARROW"] = 8] = "NARROW";
})(SilhouetteSize || (SilhouetteSize = {}));
var CollectibleType;
(function (CollectibleType) {
    CollectibleType[CollectibleType["BUG"] = 0] = "BUG";
    CollectibleType[CollectibleType["FISH"] = 1] = "FISH";
    CollectibleType[CollectibleType["SEA_CREATURE"] = 2] = "SEA_CREATURE";
    CollectibleType[CollectibleType["SONG"] = 3] = "SONG";
})(CollectibleType || (CollectibleType = {}));
var CollectionSubset;
(function (CollectionSubset) {
    CollectionSubset[CollectionSubset["ALL"] = 0] = "ALL";
    CollectionSubset[CollectionSubset["COLLECTED"] = 1] = "COLLECTED";
    CollectionSubset[CollectionSubset["UNCOLLECTED"] = 2] = "UNCOLLECTED";
})(CollectionSubset || (CollectionSubset = {}));


/***/ }),

/***/ "./src/app/shared/models/constants.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/constants.ts ***!
  \********************************************/
/*! exports provided: BUG_DATA, FISH_DATA, SEA_CREATURE_DATA, SONG_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUG_DATA", function() { return BUG_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FISH_DATA", function() { return FISH_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEA_CREATURE_DATA", function() { return SEA_CREATURE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SONG_DATA", function() { return SONG_DATA; });
/* harmony import */ var _collectible_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collectible.model */ "./src/app/shared/models/collectible.model.ts");


const BUG_DATA = {
    0: {
        index: 0,
        name: 'Common Butterfly',
        price: 160,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 8, end: 5 }],
        timesActive: [{ start: 4, end: 19 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    1: {
        index: 1,
        name: 'Yellow Butterfly',
        price: 160,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [
            { start: 2, end: 5 },
            { start: 8, end: 9 },
        ],
        timesActive: [{ start: 4, end: 19 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    2: {
        index: 2,
        name: 'Tiger Butterfly',
        price: 240,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 2, end: 8 }],
        timesActive: [{ start: 4, end: 19 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    3: {
        index: 3,
        name: 'Peacock Butterfly',
        price: 2500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [
            { start: 2, end: 5 },
            { start: 8, end: 9 },
        ],
        timesActive: [{ start: 4, end: 19 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        notes: 'Appears near hybrid flowers',
        haveModelSupplies: false,
    },
    4: {
        index: 4,
        name: 'Common Bluebottle',
        price: 300,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 3, end: 7 }],
        timesActive: [{ start: 4, end: 19 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    5: {
        index: 5,
        name: 'Paper Kite Butterfly',
        price: 1000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [],
        timesActive: [{ start: 8, end: 19 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    6: {
        index: 6,
        name: 'Great Purple Emperor',
        price: 3000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 4, end: 7 }],
        timesActive: [{ start: 4, end: 19 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    7: {
        index: 7,
        name: 'Monarch Butterfly',
        price: 140,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 8, end: 10 }],
        timesActive: [{ start: 4, end: 17 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    8: {
        index: 8,
        name: 'Emperor Butterfly',
        price: 4000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [
            { start: 5, end: 8 },
            { start: 11, end: 2 },
        ],
        timesActive: [{ start: 17, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    9: {
        index: 9,
        name: 'Agrias Butterfly',
        price: 3000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 3, end: 8 }],
        timesActive: [{ start: 8, end: 17 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    10: {
        index: 10,
        name: `Rajah Brooke's Birdwing`,
        price: 2500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [
            { start: 3, end: 8 },
            { start: 11, end: 1 },
        ],
        timesActive: [{ start: 8, end: 17 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        notes: 'Appears near purple flowers',
        haveModelSupplies: false,
    },
    11: {
        index: 11,
        name: `Queen Alexandra's Birdwing`,
        price: 4000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 4, end: 8 }],
        timesActive: [{ start: 8, end: 16 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    12: {
        index: 12,
        name: 'Moth',
        price: 130,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [],
        timesActive: [{ start: 19, end: 4 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        notes: 'Appears near light sources',
        haveModelSupplies: false,
    },
    13: {
        index: 13,
        name: 'Atlas Moth',
        price: 3000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 3, end: 8 }],
        timesActive: [{ start: 19, end: 4 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_TRUNK],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    14: {
        index: 14,
        name: 'Madagascan Sunset Moth',
        price: 2500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 3, end: 8 }],
        timesActive: [{ start: 8, end: 16 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    15: {
        index: 15,
        name: 'Long Locust',
        price: 200,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 3, end: 10 }],
        timesActive: [{ start: 8, end: 19 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].GROUND],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    16: {
        index: 16,
        name: 'Migratory Locust',
        price: 600,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 7, end: 10 }],
        timesActive: [{ start: 8, end: 19 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].GROUND],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    17: {
        index: 17,
        name: 'Rice Grasshopper',
        price: 160,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 10, end: 10 }],
        timesActive: [{ start: 8, end: 19 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].GROUND],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    18: {
        index: 18,
        name: 'Grasshopper',
        price: 160,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 8 }],
        timesActive: [{ start: 8, end: 17 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].GROUND],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    19: {
        index: 19,
        name: 'Cricket',
        price: 130,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 8, end: 10 }],
        timesActive: [{ start: 17, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].GROUND],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    20: {
        index: 20,
        name: 'Bell Cricket',
        price: 430,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 8, end: 9 }],
        timesActive: [{ start: 17, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].GROUND],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    21: {
        index: 21,
        name: 'Mantis',
        price: 430,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 2, end: 10 }],
        timesActive: [{ start: 8, end: 17 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLOWER],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    22: {
        index: 22,
        name: 'Orchid Mantis',
        price: 2400,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 2, end: 10 }],
        timesActive: [{ start: 8, end: 17 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLOWER],
        collected: false,
        haveModel: false,
        notes: 'Appears on white flowers',
        haveModelSupplies: false,
    },
    23: {
        index: 23,
        name: 'Honeybee',
        price: 200,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 2, end: 6 }],
        timesActive: [{ start: 8, end: 17 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    24: {
        index: 24,
        name: 'Wasp',
        price: 2500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_SHAKE],
        collected: false,
        haveModel: false,
        notes: 'Will attack; have net in hand',
        haveModelSupplies: false,
    },
    25: {
        index: 25,
        name: 'Brown Cicada',
        price: 250,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [{ start: 8, end: 17 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_TRUNK],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    26: {
        index: 26,
        name: 'Robust Cicada',
        price: 300,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [{ start: 8, end: 17 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_TRUNK],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    27: {
        index: 27,
        name: 'Giant Cicada',
        price: 600,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [{ start: 8, end: 17 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_TRUNK],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    28: {
        index: 28,
        name: 'Walker Cicada',
        price: 400,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 7, end: 8 }],
        timesActive: [{ start: 8, end: 17 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_TRUNK],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    29: {
        index: 29,
        name: 'Evening Cicada',
        price: 660,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [
            { start: 4, end: 8 },
            { start: 16, end: 19 },
        ],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_TRUNK],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    30: {
        index: 30,
        name: 'Cicada Shell',
        price: 10,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_TRUNK],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    31: {
        index: 31,
        name: 'Red Dragonfly',
        price: 180,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 8, end: 9 }],
        timesActive: [{ start: 8, end: 19 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    32: {
        index: 32,
        name: 'Darner Dragonfly',
        price: 230,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 3, end: 9 }],
        timesActive: [{ start: 8, end: 17 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    33: {
        index: 33,
        name: 'Banded Dragonfly',
        price: 4500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 4, end: 9 }],
        timesActive: [{ start: 8, end: 17 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    34: {
        index: 34,
        name: 'Damselfly',
        price: 500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 10, end: 1 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    35: {
        index: 35,
        name: 'Firefly',
        price: 300,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 5, end: 5 }],
        timesActive: [{ start: 19, end: 4 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    36: {
        index: 36,
        name: 'Mole Cricket',
        price: 500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 10, end: 4 }],
        timesActive: [{ start: 4, end: 19 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].UNDERGROUND],
        collected: false,
        haveModel: false,
        notes: 'Can be heard chirping when near',
        haveModelSupplies: false,
    },
    37: {
        index: 37,
        name: 'Pondskater',
        price: 130,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 4, end: 8 }],
        timesActive: [{ start: 8, end: 19 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].WATER_POND],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    38: {
        index: 38,
        name: 'Diving Beetle',
        price: 800,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 4, end: 8 }],
        timesActive: [{ start: 8, end: 19 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].WATER_POND, _collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].WATER_RIVER],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    39: {
        index: 39,
        name: 'Giant Water Bug',
        price: 2000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 3, end: 8 }],
        timesActive: [{ start: 19, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].WATER_POND, _collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].WATER_RIVER],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    40: {
        index: 40,
        name: 'Stinkbug',
        price: 120,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 2, end: 10 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLOWER],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    41: {
        index: 41,
        name: 'Man-faced Stink Bug',
        price: 1000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 2, end: 10 }],
        timesActive: [{ start: 19, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLOWER],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    42: {
        index: 42,
        name: 'Ladybug',
        price: 200,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [
            { start: 2, end: 5 },
            { start: 9, end: 9 },
        ],
        timesActive: [{ start: 8, end: 17 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLOWER],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    43: {
        index: 43,
        name: 'Tiger Beetle',
        price: 1500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 1, end: 10 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].GROUND],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    44: {
        index: 44,
        name: 'Jewel Beetle',
        price: 2400,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 3, end: 7 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_STUMP],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    45: {
        index: 45,
        name: 'Violin Beetle',
        price: 450,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [
            { start: 4, end: 5 },
            { start: 8, end: 10 },
        ],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_STUMP],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    46: {
        index: 46,
        name: 'Citrus Long-horned Beetle',
        price: 350,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_STUMP],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    47: {
        index: 47,
        name: 'Rosalia Batesi Beetle',
        price: 3000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 4, end: 8 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_STUMP],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    48: {
        index: 48,
        name: 'Blue Weevil Beetle',
        price: 800,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_COCONUT],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    49: {
        index: 49,
        name: 'Dung Beetle',
        price: 3000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 11, end: 1 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].GROUND],
        collected: false,
        haveModel: false,
        notes: 'Appears pushing snowballs',
        haveModelSupplies: false,
    },
    50: {
        index: 50,
        name: 'Earth-boring Dung Beetle',
        price: 300,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 8 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].GROUND],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    51: {
        index: 51,
        name: 'Scarab Beetle',
        price: 10000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [{ start: 23, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_TRUNK],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    52: {
        index: 52,
        name: 'Drone Beetle',
        price: 200,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 5, end: 7 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_TRUNK],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    53: {
        index: 53,
        name: 'Goliath Beetle',
        price: 8000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 5, end: 8 }],
        timesActive: [{ start: 17, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_COCONUT],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    54: {
        index: 54,
        name: 'Saw Stag',
        price: 2000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_TRUNK],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    55: {
        index: 55,
        name: 'Miyama Stag',
        price: 1000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_TRUNK],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    56: {
        index: 56,
        name: 'Giant Stag',
        price: 10000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [{ start: 23, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_TRUNK],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    57: {
        index: 57,
        name: 'Rainbow Stag',
        price: 6000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 5, end: 8 }],
        timesActive: [{ start: 19, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_STUMP],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    58: {
        index: 58,
        name: 'Cyclommatus Stag',
        price: 8000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [{ start: 17, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_COCONUT],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    59: {
        index: 59,
        name: 'Golden Stag',
        price: 12000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [{ start: 17, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_COCONUT],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    60: {
        index: 60,
        name: 'Giraffe Stag',
        price: 12000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [{ start: 17, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_COCONUT],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    61: {
        index: 61,
        name: 'Horned Dynastid',
        price: 1350,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [{ start: 17, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_TRUNK],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    62: {
        index: 62,
        name: 'Horned Atlas',
        price: 8000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [{ start: 17, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_COCONUT],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    63: {
        index: 63,
        name: 'Horned Elephant',
        price: 8000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [{ start: 17, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_COCONUT],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    64: {
        index: 64,
        name: 'Horned Hercules',
        price: 12000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [{ start: 17, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_COCONUT],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    65: {
        index: 65,
        name: 'Walking Stick',
        price: 600,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 10 }],
        timesActive: [
            { start: 4, end: 8 },
            { start: 17, end: 19 },
        ],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_TRUNK],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    66: {
        index: 66,
        name: 'Walking Leaf',
        price: 600,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].GROUND],
        collected: false,
        haveModel: false,
        notes: 'Appears disguised as furniture leaf',
        haveModelSupplies: false,
    },
    67: {
        index: 67,
        name: 'Bagworm',
        price: 600,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_SHAKE],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    68: {
        index: 68,
        name: 'Ant',
        price: 80,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].ROTTEN_FOOD],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    69: {
        index: 69,
        name: 'Hermit Crab',
        price: 1000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [],
        timesActive: [{ start: 19, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].BEACH],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    70: {
        index: 70,
        name: 'Wharf Roach',
        price: 200,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].BEACH],
        collected: false,
        haveModel: false,
        notes: 'Appears on rocks',
        haveModelSupplies: false,
    },
    71: {
        index: 71,
        name: 'Fly',
        price: 60,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TRASH],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    72: {
        index: 72,
        name: 'Mosquito',
        price: 130,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 5, end: 8 }],
        timesActive: [{ start: 17, end: 4 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].FLYING],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    73: {
        index: 73,
        name: 'Flea',
        price: 70,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 3, end: 10 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].VILLAGER],
        collected: false,
        haveModel: false,
        notes: 'Appears jumping on villagers',
        haveModelSupplies: false,
    },
    74: {
        index: 74,
        name: 'Snail',
        price: 250,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].ROCK, _collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].SHRUB],
        collected: false,
        haveModel: false,
        notes: 'Appears during rainy weather',
        haveModelSupplies: false,
    },
    75: {
        index: 75,
        name: 'Pill Bug',
        price: 250,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 8, end: 5 }],
        timesActive: [{ start: 23, end: 16 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].ROCK],
        collected: false,
        haveModel: false,
        notes: 'Appears upon striking rocks with tools',
        haveModelSupplies: false,
    },
    76: {
        index: 76,
        name: 'Centipede',
        price: 300,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 8, end: 5 }],
        timesActive: [{ start: 16, end: 23 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].ROCK],
        collected: false,
        haveModel: false,
        notes: 'Appears upon striking rocks with tools',
        haveModelSupplies: false,
    },
    77: {
        index: 77,
        name: 'Spider',
        price: 480,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [],
        timesActive: [{ start: 19, end: 8 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].TREE_SHAKE],
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    78: {
        index: 78,
        name: 'Tarantula',
        price: 8000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 10, end: 3 }],
        timesActive: [{ start: 19, end: 4 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].GROUND],
        collected: false,
        haveModel: false,
        notes: 'Will attack if threatened by net, approach when calm',
        haveModelSupplies: false,
    },
    79: {
        index: 79,
        name: 'Scorpion',
        price: 8000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].BUG,
        monthsActive: [{ start: 4, end: 9 }],
        timesActive: [{ start: 19, end: 4 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["BugLocation"].GROUND],
        collected: false,
        haveModel: false,
        notes: 'Will attack if threatened by net, approach when calm',
        haveModelSupplies: false,
    },
};
const FISH_DATA = {
    0: {
        index: 0,
        name: 'Bitterling',
        price: 900,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 10, end: 2 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALLEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    1: {
        index: 1,
        name: 'Pale Chub',
        price: 160,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [{ start: 9, end: 16 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALLEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    2: {
        index: 2,
        name: 'Crucian Carp',
        price: 160,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    3: {
        index: 3,
        name: 'Dace',
        price: 240,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    4: {
        index: 4,
        name: 'Carp',
        price: 300,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].POND],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    5: {
        index: 5,
        name: 'Koi',
        price: 4000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].POND],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    6: {
        index: 6,
        name: 'Goldfish',
        price: 1300,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].POND],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALLEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    7: {
        index: 7,
        name: 'Pop-eyed Goldfish',
        price: 1300,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [{ start: 9, end: 16 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].POND],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALLEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    8: {
        index: 8,
        name: 'Ranchu Goldfish',
        price: 4500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [{ start: 9, end: 16 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].POND],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    9: {
        index: 9,
        name: 'Killifish',
        price: 300,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 3, end: 7 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].POND],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALLEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    10: {
        index: 10,
        name: 'Crawfish',
        price: 200,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 3, end: 8 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].POND],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    11: {
        index: 11,
        name: 'Soft-shelled Turtle',
        price: 3750,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 7, end: 8 }],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    12: {
        index: 12,
        name: 'Snapping Turtle',
        price: 5000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 3, end: 9 }],
        timesActive: [{ start: 21, end: 4 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].EXTRA_LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    13: {
        index: 13,
        name: 'Tadpole',
        price: 100,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 2, end: 6 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].POND],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALLEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    14: {
        index: 14,
        name: 'Frog',
        price: 120,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 4, end: 7 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].POND],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    15: {
        index: 15,
        name: 'Freshwater Goby',
        price: 400,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].POND],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    16: {
        index: 16,
        name: 'Loach',
        price: 400,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 2, end: 4 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    17: {
        index: 17,
        name: 'Catfish',
        price: 800,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 4, end: 9 }],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].POND],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    18: {
        index: 18,
        name: 'Giant Snakehead',
        price: 4500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 5, end: 7 }],
        timesActive: [{ start: 9, end: 16 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].POND],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].EXTRA_LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    19: {
        index: 19,
        name: 'Bluegill',
        price: 180,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [{ start: 9, end: 16 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    20: {
        index: 20,
        name: 'Yellow Perch',
        price: 300,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 9, end: 2 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    21: {
        index: 21,
        name: 'Black Bass',
        price: 400,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    22: {
        index: 22,
        name: 'Tilapia',
        price: 800,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 5, end: 9 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    23: {
        index: 23,
        name: 'Pike',
        price: 1800,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 8, end: 11 }],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].EXTRA_LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    24: {
        index: 24,
        name: 'Pond Smelt',
        price: 500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 11, end: 1 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    25: {
        index: 25,
        name: 'Sweetfish',
        price: 900,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 6, end: 8 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    26: {
        index: 26,
        name: 'Cherry Salmon',
        price: 1000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [
            { start: 2, end: 5 },
            { start: 8, end: 10 },
        ],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER_CLIFF],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    27: {
        index: 27,
        name: 'Char',
        price: 3800,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [
            { start: 2, end: 5 },
            { start: 8, end: 10 },
        ],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER_CLIFF],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    28: {
        index: 28,
        name: 'Golden Trout',
        price: 15000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [
            { start: 2, end: 4 },
            { start: 8, end: 10 },
        ],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER_CLIFF],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    29: {
        index: 29,
        name: 'Stringfish',
        price: 15000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 11, end: 2 }],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER_CLIFF],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].EXTRA_LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    30: {
        index: 30,
        name: 'Salmon',
        price: 700,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 8, end: 8 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER_MOUTH],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    31: {
        index: 31,
        name: 'King Salmon',
        price: 1800,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 8, end: 8 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER_MOUTH],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    32: {
        index: 32,
        name: 'Mitten Crab',
        price: 2000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 8, end: 10 }],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    33: {
        index: 33,
        name: 'Guppy',
        price: 1300,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 3, end: 10 }],
        timesActive: [{ start: 9, end: 16 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALLEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    34: {
        index: 34,
        name: 'Nibble Fish',
        price: 1500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 4, end: 8 }],
        timesActive: [{ start: 9, end: 16 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALLEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    35: {
        index: 35,
        name: 'Angelfish',
        price: 3000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 4, end: 9 }],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    36: {
        index: 36,
        name: 'Betta',
        price: 2500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 4, end: 9 }],
        timesActive: [{ start: 9, end: 16 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    37: {
        index: 37,
        name: 'Neon Tetra',
        price: 500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 3, end: 10 }],
        timesActive: [{ start: 9, end: 16 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALLEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    38: {
        index: 38,
        name: 'Rainbowfish',
        price: 800,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 4, end: 9 }],
        timesActive: [{ start: 9, end: 16 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALLEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    39: {
        index: 39,
        name: 'Piranha',
        price: 2500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 5, end: 8 }],
        timesActive: [
            { start: 9, end: 16 },
            { start: 21, end: 4 },
        ],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    40: {
        index: 40,
        name: 'Arowana',
        price: 10000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 5, end: 8 }],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    41: {
        index: 41,
        name: 'Dorado',
        price: 15000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 5, end: 8 }],
        timesActive: [{ start: 4, end: 21 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].EXTRA_LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    42: {
        index: 42,
        name: 'Gar',
        price: 6000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 5, end: 8 }],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].POND],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    43: {
        index: 43,
        name: 'Arapaima',
        price: 10000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 5, end: 8 }],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    44: {
        index: 44,
        name: 'Saddled Bichir',
        price: 4000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 5, end: 8 }],
        timesActive: [{ start: 21, end: 4 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    45: {
        index: 45,
        name: 'Sturgeon',
        price: 10000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 8, end: 2 }],
        timesActive: [{ start: 21, end: 4 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].RIVER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    46: {
        index: 46,
        name: 'Sea Butterfly',
        price: 1000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 11, end: 2 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALLEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    47: {
        index: 47,
        name: 'Sea Horse',
        price: 1100,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 4, end: 10 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALLEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    48: {
        index: 48,
        name: 'Clown Fish',
        price: 650,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 3, end: 8 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALLEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    49: {
        index: 49,
        name: 'Surgeonfish',
        price: 1000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 3, end: 8 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    50: {
        index: 50,
        name: 'Butterfly Fish',
        price: 1000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 3, end: 8 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    51: {
        index: 51,
        name: 'Napoleonfish',
        price: 10000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 6, end: 7 }],
        timesActive: [{ start: 4, end: 21 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    52: {
        index: 52,
        name: 'Zebra Turkeyfish',
        price: 500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 3, end: 10 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    53: {
        index: 53,
        name: 'Blowfish',
        price: 5000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 10, end: 1 }],
        timesActive: [{ start: 21, end: 4 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    54: {
        index: 54,
        name: 'Puffer Fish',
        price: 250,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 6, end: 8 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    55: {
        index: 55,
        name: 'Anchovy',
        price: 200,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [{ start: 4, end: 21 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    56: {
        index: 56,
        name: 'Horse Mackerel',
        price: 150,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    57: {
        index: 57,
        name: 'Barred Knifejaw',
        price: 5000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 2, end: 10 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    58: {
        index: 58,
        name: 'Sea Bass',
        price: 400,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].EXTRA_LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    59: {
        index: 59,
        name: 'Red Snapper',
        price: 3000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    60: {
        index: 60,
        name: 'Dab',
        price: 300,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 9, end: 3 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    61: {
        index: 61,
        name: 'Olive Flounder',
        price: 800,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    62: {
        index: 62,
        name: 'Squid',
        price: 500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 11, end: 7 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    63: {
        index: 63,
        name: 'Moray Eel',
        price: 2000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 7, end: 9 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].NARROW,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    64: {
        index: 64,
        name: 'Ribbon Eel',
        price: 600,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 5, end: 9 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].NARROW,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    65: {
        index: 65,
        name: 'Tuna',
        price: 7000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 10, end: 3 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].PIER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    66: {
        index: 66,
        name: 'Blue Marlin',
        price: 10000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [
            { start: 6, end: 8 },
            { start: 10, end: 3 },
        ],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].PIER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    67: {
        index: 67,
        name: 'Giant Trevally',
        price: 4500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 4, end: 9 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].PIER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].EXTRA_LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    68: {
        index: 68,
        name: 'Mahi-mahi',
        price: 6000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 4, end: 9 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].PIER],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].EXTRA_LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    69: {
        index: 69,
        name: 'Ocean Sunfish',
        price: 4000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 6, end: 8 }],
        timesActive: [{ start: 4, end: 21 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGEST_FIN,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    70: {
        index: 70,
        name: 'Ray',
        price: 3000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 8, end: 10 }],
        timesActive: [{ start: 4, end: 21 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].EXTRA_LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    71: {
        index: 71,
        name: 'Saw Shark',
        price: 12000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 5, end: 8 }],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGEST_FIN,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    72: {
        index: 72,
        name: 'Hammerhead Shark',
        price: 8000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 5, end: 8 }],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGEST_FIN,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    73: {
        index: 73,
        name: 'Great White Shark',
        price: 15000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 5, end: 8 }],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGEST_FIN,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    74: {
        index: 74,
        name: 'Whale Shark',
        price: 13000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 5, end: 8 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGEST_FIN,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    75: {
        index: 75,
        name: 'Suckerfish',
        price: 1500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 5, end: 8 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE_FIN,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    76: {
        index: 76,
        name: 'Football Fish',
        price: 2500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 10, end: 2 }],
        timesActive: [{ start: 16, end: 9 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    77: {
        index: 77,
        name: 'Oarfish',
        price: 9000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [{ start: 11, end: 4 }],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    78: {
        index: 78,
        name: 'Barreleye',
        price: 15000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [{ start: 21, end: 4 }],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
    79: {
        index: 79,
        name: 'Coelacanth',
        price: 15000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].FISH,
        monthsActive: [],
        timesActive: [],
        location: [_collectible_model__WEBPACK_IMPORTED_MODULE_0__["FishLocation"].SEA_RAINY],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGEST,
        collected: false,
        haveModel: false,
        haveModelSupplies: false,
    },
};
const SEA_CREATURE_DATA = {
    0: {
        index: 0,
        name: 'Seaweed',
        price: 600,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 9, end: 6 }],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].STATIONARY,
        collected: false,
    },
    1: {
        index: 1,
        name: 'Sea grapes',
        price: 900,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].STATIONARY,
        collected: false,
    },
    2: {
        index: 2,
        name: 'Sea cucumber',
        price: 500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 10, end: 3 }],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].SLOW_CONSISTENT,
        collected: false,
    },
    3: {
        index: 3,
        name: 'Sea pig',
        price: 10000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 10, end: 1 }],
        timesActive: [{ start: 16, end: 9 }],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].FAST_LONG,
        collected: false,
    },
    4: {
        index: 4,
        name: 'Sea star',
        price: 500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].SLOW_SHORT,
        collected: false,
    },
    5: {
        index: 5,
        name: 'Sea urchin',
        price: 1700,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 4, end: 8 }],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].SLOW_CONSISTENT,
        collected: false,
    },
    6: {
        index: 6,
        name: 'Slate pencil urchin',
        price: 2000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 4, end: 8 }],
        timesActive: [{ start: 16, end: 9 }],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].MODERATE_CONSISTENT,
        collected: false,
    },
    7: {
        index: 7,
        name: 'Sea anemone',
        price: 500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].STATIONARY,
        collected: false,
    },
    8: {
        index: 8,
        name: 'Moon jellyfish',
        price: 600,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 6, end: 8 }],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].SLOW_CONSISTENT,
        collected: false,
    },
    9: {
        index: 9,
        name: 'Sea slug',
        price: 600,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALLEST,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].SLOW_CONSISTENT,
        collected: false,
    },
    10: {
        index: 10,
        name: 'Pearl oyster',
        price: 2800,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].MODERATE_LONG,
        collected: false,
    },
    11: {
        index: 11,
        name: 'Mussel',
        price: 1500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 5, end: 11 }],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].SLOW_CONSISTENT,
        collected: false,
    },
    12: {
        index: 12,
        name: 'Oyster',
        price: 1100,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 8, end: 1 }],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].MODERATE_SHORT,
        collected: false,
    },
    13: {
        index: 13,
        name: 'Scallop',
        price: 1200,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].SLOW_LONG,
        collected: false,
    },
    14: {
        index: 14,
        name: 'Whelk',
        price: 1000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].SLOW_CONSISTENT,
        collected: false,
    },
    15: {
        index: 15,
        name: 'Turban shell',
        price: 1000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [
            { start: 2, end: 4 },
            { start: 8, end: 11 },
        ],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].SLOW_CONSISTENT,
        collected: false,
    },
    16: {
        index: 16,
        name: 'Abalone',
        price: 2000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 5, end: 0 }],
        timesActive: [{ start: 16, end: 9 }],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].MODERATE_CONSISTENT,
        collected: false,
    },
    17: {
        index: 17,
        name: 'Gigas giant clam',
        price: 15000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 4, end: 8 }],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGEST,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].FAST_LONG,
        collected: false,
    },
    18: {
        index: 18,
        name: 'Chambered nautilus',
        price: 1800,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [
            { start: 2, end: 5 },
            { start: 8, end: 10 },
        ],
        timesActive: [{ start: 16, end: 9 }],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].SLOW_CONSISTENT,
        collected: false,
    },
    19: {
        index: 19,
        name: 'Octopus',
        price: 1200,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].MODERATE_LONG,
        collected: false,
    },
    20: {
        index: 20,
        name: 'Umbrella octopus',
        price: 6000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [
            { start: 2, end: 5 },
            { start: 8, end: 10 },
        ],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].FAST_LONG,
        collected: false,
    },
    21: {
        index: 21,
        name: 'Vampire squid',
        price: 10000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 4, end: 7 }],
        timesActive: [{ start: 16, end: 9 }],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].MODERATE_LONG,
        collected: false,
    },
    22: {
        index: 22,
        name: 'Firefly squid',
        price: 1400,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 2, end: 5 }],
        timesActive: [{ start: 21, end: 4 }],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALLEST,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].SLOW_CONSISTENT,
        collected: false,
    },
    23: {
        index: 23,
        name: 'Gazami crab',
        price: 2200,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 5, end: 10 }],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].MODERATE_LONG,
        collected: false,
    },
    24: {
        index: 24,
        name: 'Dungeoness crab',
        price: 1900,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 10, end: 4 }],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].MODERATE_CONSISTENT,
        collected: false,
    },
    25: {
        index: 25,
        name: 'Snow crab',
        price: 6000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 10, end: 3 }],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].FAST_SHORT,
        collected: false,
    },
    26: {
        index: 26,
        name: 'Red king crab',
        price: 8000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 10, end: 2 }],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].FAST_CONSISTENT,
        collected: false,
    },
    27: {
        index: 27,
        name: 'Acorn barnacle',
        price: 600,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALLEST,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].STATIONARY,
        collected: false,
    },
    28: {
        index: 28,
        name: 'Spider crab',
        price: 12000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 2, end: 3 }],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGEST,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].FAST_CONSISTENT,
        collected: false,
    },
    29: {
        index: 29,
        name: 'Tiger prawn',
        price: 3000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 5, end: 8 }],
        timesActive: [{ start: 16, end: 9 }],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].MODERATE_CONSISTENT,
        collected: false,
    },
    30: {
        index: 30,
        name: 'Sweet shrimp',
        price: 1400,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 8, end: 1 }],
        timesActive: [{ start: 16, end: 9 }],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].SLOW_CONSISTENT,
        collected: false,
    },
    31: {
        index: 31,
        name: 'Mantis shrimp',
        price: 2500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [],
        timesActive: [{ start: 16, end: 9 }],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].FAST_SHORT,
        collected: false,
    },
    32: {
        index: 32,
        name: 'Spiny lobster',
        price: 5000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 9, end: 11 }],
        timesActive: [{ start: 21, end: 4 }],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].FAST_CONSISTENT,
        collected: false,
    },
    33: {
        index: 33,
        name: 'Lobster',
        price: 4500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [
            { start: 3, end: 5 },
            { start: 11, end: 0 },
        ],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].LARGE,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].FAST_CONSISTENT,
        collected: false,
    },
    34: {
        index: 34,
        name: 'Giant isopod',
        price: 12000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 6, end: 9 }],
        timesActive: [
            { start: 9, end: 16 },
            { start: 21, end: 4 },
        ],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].FAST_LONG,
        collected: false,
    },
    35: {
        index: 35,
        name: 'Horseshoe crab',
        price: 2500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 6, end: 8 }],
        timesActive: [{ start: 21, end: 4 }],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].FAST_SHORT,
        collected: false,
    },
    36: {
        index: 36,
        name: 'Sea pineapple',
        price: 1500,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].SLOW_LONG,
        collected: false,
    },
    37: {
        index: 37,
        name: 'Spotted garden eel',
        price: 1100,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 4, end: 9 }],
        timesActive: [{ start: 4, end: 21 }],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALL,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].SLOW_CONSISTENT,
        collected: false,
    },
    38: {
        index: 38,
        name: 'Flatworm',
        price: 700,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 7, end: 8 }],
        timesActive: [{ start: 16, end: 9 }],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].SMALLEST,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].SLOW_SHORT,
        collected: false,
    },
    39: {
        index: 39,
        name: `Venus' flower basket`,
        price: 5000,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SEA_CREATURE,
        monthsActive: [{ start: 9, end: 1 }],
        timesActive: [],
        size: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SilhouetteSize"].MEDIUM,
        swimStyle: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SwimStyle"].FAST_LONG,
        collected: false,
    },
};
const SONG_DATA = {
    0: {
        index: 0,
        name: 'Agent K.K.',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    1: {
        index: 1,
        name: 'Aloha K.K.',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    2: {
        index: 2,
        name: 'Animal City',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].REQUEST,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    3: {
        index: 3,
        name: 'Bubblegum K.K.',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    4: {
        index: 4,
        name: 'Café K.K.',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    5: {
        index: 5,
        name: 'Comrade K.K.',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].BLUE,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    6: {
        index: 6,
        name: 'DJ K.K.',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    7: {
        index: 7,
        name: `Drivin'`,
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].REQUEST,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    8: {
        index: 8,
        name: 'Farewell',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].REQUEST,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    9: {
        index: 9,
        name: 'Forest Life',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    10: {
        index: 10,
        name: 'Go K.K. Rider',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    11: {
        index: 11,
        name: 'Hypno K.K.',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].HARD_TO_SAY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    12: {
        index: 12,
        name: 'I Love You',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    13: {
        index: 13,
        name: 'Imperial K.K.',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    14: {
        index: 14,
        name: 'K.K. Adventure',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    15: {
        index: 15,
        name: 'K.K. Aria',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    16: {
        index: 16,
        name: 'K.K. Ballad',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].BLUE,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    17: {
        index: 17,
        name: 'K.K. Bazaar',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    18: {
        index: 18,
        name: 'K.K. Birthday',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].REQUEST,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    19: {
        index: 19,
        name: 'K.K. Blues',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].HARD_TO_SAY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    20: {
        index: 20,
        name: 'K.K. Bossa',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    21: {
        index: 21,
        name: 'K.K. Calypso',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    22: {
        index: 22,
        name: 'K.K. Casbah',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    23: {
        index: 23,
        name: 'K.K. Chorale',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].BLUE,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    24: {
        index: 24,
        name: 'K.K. Condor',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].BLUE,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    25: {
        index: 25,
        name: 'K.K. Country',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    26: {
        index: 26,
        name: `K.K. Cruisin'`,
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    27: {
        index: 27,
        name: 'K.K. D&B',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].HARD_TO_SAY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    28: {
        index: 28,
        name: 'K.K. Dirge',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].BLUE,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    29: {
        index: 29,
        name: 'K.K. Disco',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    30: {
        index: 30,
        name: 'K.K. Dixie',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    31: {
        index: 31,
        name: 'K.K. Étude',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].BLUE,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    32: {
        index: 32,
        name: 'K.K. Faire',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    33: {
        index: 33,
        name: 'K.K. Flamenco',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    34: {
        index: 34,
        name: 'K.K. Folk',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].HARD_TO_SAY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    35: {
        index: 35,
        name: 'K.K. Fusion',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    36: {
        index: 36,
        name: 'K.K. Groove',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    37: {
        index: 37,
        name: 'K.K. Gumbo',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].HARD_TO_SAY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    38: {
        index: 38,
        name: 'K.K. House',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].CHEERFUL_UPBEAT,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    39: {
        index: 39,
        name: 'K.K. Island',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    40: {
        index: 40,
        name: 'K.K. Jazz',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    41: {
        index: 41,
        name: 'K.K. Jongara',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    42: {
        index: 42,
        name: 'K.K. Lament',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].BLUE,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    43: {
        index: 43,
        name: 'K.K. Love Song',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    44: {
        index: 44,
        name: 'K.K. Lullaby',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].BLUE,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    45: {
        index: 45,
        name: 'K.K. Mambo',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    46: {
        index: 46,
        name: 'K.K. Marathon',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].HARD_TO_SAY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    47: {
        index: 47,
        name: 'K.K. March',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    48: {
        index: 48,
        name: 'K.K. Mariachi',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    49: {
        index: 49,
        name: 'K.K. Metal',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    50: {
        index: 50,
        name: 'K.K. Milonga',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].BLUE,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    51: {
        index: 51,
        name: 'K.K. Moody',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    52: {
        index: 52,
        name: 'K.K. Oasis',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].HARD_TO_SAY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    53: {
        index: 53,
        name: 'K.K. Parade',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    54: {
        index: 54,
        name: 'K.K. Ragtime',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    55: {
        index: 55,
        name: 'K.K. Rally',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].HARD_TO_SAY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    56: {
        index: 56,
        name: 'K.K. Reggae',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    57: {
        index: 57,
        name: 'K.K. Rock',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    58: {
        index: 58,
        name: 'K.K. Rockabilly',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    59: {
        index: 59,
        name: 'K.K. Safari',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    60: {
        index: 60,
        name: 'K.K. Salsa',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    61: {
        index: 61,
        name: 'K.K. Samba',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    62: {
        index: 62,
        name: 'K.K. Ska',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    63: {
        index: 63,
        name: 'K.K. Sonata',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].BLUE,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    64: {
        index: 64,
        name: 'K.K. Song',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].HARD_TO_SAY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    65: {
        index: 65,
        name: 'K.K. Soul',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].HARD_TO_SAY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    66: {
        index: 66,
        name: 'K.K. Steppe',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    67: {
        index: 67,
        name: 'K.K. Stroll',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    68: {
        index: 68,
        name: 'K.K. Swing',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    69: {
        index: 69,
        name: 'K.K. Synth',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    70: {
        index: 70,
        name: 'K.K. Tango',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    71: {
        index: 71,
        name: 'K.K. Technopop',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].HARD_TO_SAY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    72: {
        index: 72,
        name: 'K.K. Waltz',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].BLUE,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    73: {
        index: 73,
        name: 'K.K. Western',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].BLUE,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    74: {
        index: 74,
        name: 'King K.K.',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].BLUE,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    75: {
        index: 75,
        name: 'Lucky K.K.',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    76: {
        index: 76,
        name: 'Marine Song 2001',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    77: {
        index: 77,
        name: 'Mountain Song',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    78: {
        index: 78,
        name: 'Mr. K.K.',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    79: {
        index: 79,
        name: 'My Place',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    80: {
        index: 80,
        name: 'Neapolitan',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    81: {
        index: 81,
        name: 'Only Me',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].BLUE,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    82: {
        index: 82,
        name: 'Pondering',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    83: {
        index: 83,
        name: `Rockin' K.K.`,
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    84: {
        index: 84,
        name: 'Soulful K.K.',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    85: {
        index: 85,
        name: 'Space K.K.',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].HARD_TO_SAY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    86: {
        index: 86,
        name: 'Spring Blossoms',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GOOD,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    87: {
        index: 87,
        name: 'Stale Cupcakes',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].BLUE,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    88: {
        index: 88,
        name: 'Steep Hill',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].BLUE,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    89: {
        index: 89,
        name: `Surfin' K.K.`,
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].GRUMPY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    90: {
        index: 90,
        name: 'The K. Funk',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].HARD_TO_SAY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    91: {
        index: 91,
        name: 'To the Edge',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].HARD_TO_SAY,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    92: {
        index: 92,
        name: 'Two Days Ago',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].BLUE,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    93: {
        index: 93,
        name: 'Wandering',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].LAID_BACK,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
    94: {
        index: 94,
        name: 'Welcome Horizons',
        price: 800,
        collected: false,
        mood: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["SongMood"].REQUEST,
        type: _collectible_model__WEBPACK_IMPORTED_MODULE_0__["CollectibleType"].SONG,
    },
};


/***/ }),

/***/ "./src/app/shared/models/filter.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/filter.model.ts ***!
  \***********************************************/
/*! exports provided: CollectionStatusFilterType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionStatusFilterType", function() { return CollectionStatusFilterType; });
var CollectionStatusFilterType;
(function (CollectionStatusFilterType) {
    CollectionStatusFilterType[CollectionStatusFilterType["COLLECTIBLE"] = 0] = "COLLECTIBLE";
    CollectionStatusFilterType[CollectionStatusFilterType["MODEL"] = 1] = "MODEL";
    CollectionStatusFilterType[CollectionStatusFilterType["MODEL_SUPPLIES"] = 2] = "MODEL_SUPPLIES";
})(CollectionStatusFilterType || (CollectionStatusFilterType = {}));


/***/ }),

/***/ "./src/app/shared/reducers/shared.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/reducers/shared.reducer.ts ***!
  \***************************************************/
/*! exports provided: initialState, selectSharedTrackerState, selectHemisphere, sharedTrackerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSharedTrackerState", function() { return selectSharedTrackerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHemisphere", function() { return selectHemisphere; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharedTrackerReducer", function() { return sharedTrackerReducer; });
/* harmony import */ var _models_app_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/app-state.model */ "./src/app/shared/models/app-state.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/app/shared/actions/index.ts");



const initialState = {
    hemisphere: _models_app_state_model__WEBPACK_IMPORTED_MODULE_0__["Hemisphere"].NORTH,
};
const selectSharedTrackerState = (state) => state.sharedTrackerState;
const selectHemisphere = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectSharedTrackerState, (state) => {
    return state.hemisphere;
});
const _sharedTrackerReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["SharedTrackerActions"].setHemisphereToggleValue, (state, { hemisphere }) => {
    return Object.assign(Object.assign({}, state), { hemisphere });
}));
function sharedTrackerReducer(state, action) {
    return _sharedTrackerReducer(state, action);
}


/***/ }),

/***/ "./src/app/shared/services/collection-encoding.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/collection-encoding.service.ts ***!
  \****************************************************************/
/*! exports provided: getDefaultEncoding, encodeSessionData, CollectionEncodingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultEncoding", function() { return getDefaultEncoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeSessionData", function() { return encodeSessionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionEncodingService", function() { return CollectionEncodingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


function getDefaultEncoding(trackerCategories) {
    return trackerCategories.map((cat) => `${cat}-1-`).join('.');
}
function encodeSessionData(sessionData) {
    let encodedSession = '';
    Object.keys(sessionData).forEach((key) => {
        let encodedSessionCategory = key;
        encodedSessionCategory += `-${+sessionData[key].inclusive}`;
        encodedSessionCategory += `-${sessionData[key].indices.join(',')}`;
        if (!!encodedSession) {
            encodedSession += '.';
        }
        encodedSession += encodedSessionCategory;
    });
    return encodedSession;
}
class CollectionEncodingService {
    constructor() { }
}
CollectionEncodingService.ɵfac = function CollectionEncodingService_Factory(t) { return new (t || CollectionEncodingService)(); };
CollectionEncodingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CollectionEncodingService, factory: CollectionEncodingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionEncodingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/song-tracker-view/actions/index.ts":
/*!****************************************************!*\
  !*** ./src/app/song-tracker-view/actions/index.ts ***!
  \****************************************************/
/*! exports provided: SongTrackerActions, SongTrackerFilterActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _song_tracker_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./song-tracker.actions */ "./src/app/song-tracker-view/actions/song-tracker.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SongTrackerActions", function() { return _song_tracker_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _song_tracker_filter_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./song-tracker-filter.actions */ "./src/app/song-tracker-view/actions/song-tracker-filter.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SongTrackerFilterActions", function() { return _song_tracker_filter_actions__WEBPACK_IMPORTED_MODULE_1__; });





/***/ }),

/***/ "./src/app/song-tracker-view/actions/song-tracker-filter.actions.ts":
/*!**************************************************************************!*\
  !*** ./src/app/song-tracker-view/actions/song-tracker-filter.actions.ts ***!
  \**************************************************************************/
/*! exports provided: filterSongsByNameAction, setSongCollectionStatusFilterAction, resetSongFilterStateAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSongsByNameAction", function() { return filterSongsByNameAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSongCollectionStatusFilterAction", function() { return setSongCollectionStatusFilterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSongFilterStateAction", function() { return resetSongFilterStateAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const filterSongsByNameAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Song Tracker] Filter by Name', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setSongCollectionStatusFilterAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Song Tracker] Set Collection Status', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const resetSongFilterStateAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Song Tracker] Reset Filter State');


/***/ }),

/***/ "./src/app/song-tracker-view/actions/song-tracker.actions.ts":
/*!*******************************************************************!*\
  !*** ./src/app/song-tracker-view/actions/song-tracker.actions.ts ***!
  \*******************************************************************/
/*! exports provided: toggleSongCollectedAction, updateSongCollectionStateFromSessionAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSongCollectedAction", function() { return toggleSongCollectedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSongCollectionStateFromSessionAction", function() { return updateSongCollectionStateFromSessionAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const toggleSongCollectedAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Song Tracker] Toggle Collected', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateSongCollectionStateFromSessionAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Song Tracker] Update Collection State from Session', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/song-tracker-view/reducers/song-tracker-filter.reducer.ts":
/*!***************************************************************************!*\
  !*** ./src/app/song-tracker-view/reducers/song-tracker-filter.reducer.ts ***!
  \***************************************************************************/
/*! exports provided: initialState, selectSongTrackerFilterState, selectSongFilters, selectSongCollectionStatusFilter, selectSongNameFilter, songTrackerFilterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSongTrackerFilterState", function() { return selectSongTrackerFilterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSongFilters", function() { return selectSongFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSongCollectionStatusFilter", function() { return selectSongCollectionStatusFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSongNameFilter", function() { return selectSongNameFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "songTrackerFilterReducer", function() { return songTrackerFilterReducer; });
/* harmony import */ var _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/models/filter.model */ "./src/app/shared/models/filter.model.ts");
/* harmony import */ var _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/collectible.model */ "./src/app/shared/models/collectible.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/app/song-tracker-view/actions/index.ts");




const initialState = {
    filters: {
        [_shared_models_filter_model__WEBPACK_IMPORTED_MODULE_0__["CollectionStatusFilterType"].COLLECTIBLE]: _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_1__["CollectionSubset"].ALL,
        partialName: '',
    },
};
const selectSongTrackerFilterState = (state) => state.songTrackerFilterState;
const selectSongFilters = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectSongTrackerFilterState, (state) => {
    return state.filters;
});
const selectSongCollectionStatusFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectSongFilters, (filters, props) => filters[props.filterType]);
const selectSongNameFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectSongFilters, (filters) => {
    return filters.partialName;
});
const _songTrackerFilterReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions__WEBPACK_IMPORTED_MODULE_3__["SongTrackerFilterActions"].filterSongsByNameAction, (state, { partialName }) => {
    return Object.assign(Object.assign({}, state), { filters: Object.assign(Object.assign({}, state.filters), { partialName }) });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions__WEBPACK_IMPORTED_MODULE_3__["SongTrackerFilterActions"].setSongCollectionStatusFilterAction, (state, { collectionType, subset }) => {
    return Object.assign(Object.assign({}, state), { filters: Object.assign(Object.assign({}, state.filters), { [collectionType]: subset }) });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions__WEBPACK_IMPORTED_MODULE_3__["SongTrackerFilterActions"].resetSongFilterStateAction, (state) => {
    return initialState;
}));
function songTrackerFilterReducer(state, action) {
    return _songTrackerFilterReducer(state, action);
}


/***/ }),

/***/ "./src/app/song-tracker-view/reducers/song-tracker.reducer.ts":
/*!********************************************************************!*\
  !*** ./src/app/song-tracker-view/reducers/song-tracker.reducer.ts ***!
  \********************************************************************/
/*! exports provided: selectSongTrackerState, selectSongs, getUpdatedSongStateForProperty, songTrackerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSongTrackerState", function() { return selectSongTrackerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSongs", function() { return selectSongs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdatedSongStateForProperty", function() { return getUpdatedSongStateForProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "songTrackerReducer", function() { return songTrackerReducer; });
/* harmony import */ var _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/models/collectible.model */ "./src/app/shared/models/collectible.model.ts");
/* harmony import */ var _shared_models_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/constants */ "./src/app/shared/models/constants.ts");
/* harmony import */ var _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/app-state.model */ "./src/app/shared/models/app-state.model.ts");
/* harmony import */ var _shared_services_collection_encoding_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/collection-encoding.service */ "./src/app/shared/services/collection-encoding.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/app/song-tracker-view/actions/index.ts");
/* harmony import */ var _shared_helpers_reducer_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/helpers/reducer.helper */ "./src/app/shared/helpers/reducer.helper.ts");







const initialState = {
    collectibles: _shared_models_constants__WEBPACK_IMPORTED_MODULE_1__["SONG_DATA"],
    encoded: Object(_shared_services_collection_encoding_service__WEBPACK_IMPORTED_MODULE_3__["getDefaultEncoding"])([_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_2__["TrackerCategory"].SONGS]),
};
const selectSongTrackerState = (state) => state.songTrackerState;
const selectSongs = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectSongTrackerState, (state) => state.collectibles);
// TODO: genericise for use with any modelable collection state
const getEncodedState = (collectibles) => {
    const sessionData = {};
    const collected = new Array();
    const uncollected = new Array();
    const haveModels = new Array();
    const missingModels = new Array();
    const haveModelSupplies = new Array();
    const missingModelSupplies = new Array();
    Object.keys(collectibles).forEach((key) => {
        collectibles[key].collected ? collected.push(+key) : uncollected.push(+key);
        sessionData[_shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_2__["TrackerCategory"].SONGS] = {
            inclusive: collected.length <= uncollected.length,
            indices: collected.length <= uncollected.length ? collected : uncollected,
        };
    });
    return Object(_shared_services_collection_encoding_service__WEBPACK_IMPORTED_MODULE_3__["encodeSessionData"])(sessionData);
};
const _songTrackerReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["on"])(_actions__WEBPACK_IMPORTED_MODULE_5__["SongTrackerActions"].toggleSongCollectedAction, (state, { collectible }) => {
    const updated = Object.assign(Object.assign({}, state), { collectibles: Object.assign(Object.assign({}, state.collectibles), { [collectible.index]: Object.assign(Object.assign({}, state.collectibles[collectible.index]), { collected: !state.collectibles[collectible.index].collected }) }) });
    updated.encoded = Object(_shared_helpers_reducer_helper__WEBPACK_IMPORTED_MODULE_6__["getEncodedCollectibleState"])(updated.collectibles, {
        collection: _shared_models_app_state_model__WEBPACK_IMPORTED_MODULE_2__["TrackerCategory"].SONGS,
    });
    return updated;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["on"])(_actions__WEBPACK_IMPORTED_MODULE_5__["SongTrackerActions"].updateSongCollectionStateFromSessionAction, (state, { data }) => getUpdatedSongStateForProperty(state, data, _shared_models_collectible_model__WEBPACK_IMPORTED_MODULE_0__["COLLECTIBLE_KEY_COLLECTED"])));
function getUpdatedSongStateForProperty(state, data, propName) {
    const updated = JSON.parse(JSON.stringify(state));
    for (const key of Object.keys(state.collectibles)) {
        updated.collectibles[key] = Object.assign({}, state.collectibles[key]);
        updated.collectibles[key][propName] = data.inclusive
            ? data.indices.indexOf(+key) > -1
            : data.indices.indexOf(+key) < 0;
    }
    updated.encoded = getEncodedState(updated.collectibles);
    return updated;
}
function songTrackerReducer(state, action) {
    return _songTrackerReducer(state, action);
}


/***/ }),

/***/ "./src/app/song-tracker-view/song-tracker-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/song-tracker-view/song-tracker-view.component.ts ***!
  \******************************************************************/
/*! exports provided: SongTrackerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongTrackerViewComponent", function() { return SongTrackerViewComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _reducers_song_tracker_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/song-tracker.reducer */ "./src/app/song-tracker-view/reducers/song-tracker.reducer.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/filter.model */ "./src/app/shared/models/filter.model.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./src/app/song-tracker-view/actions/index.ts");
/* harmony import */ var _shared_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/actions */ "./src/app/shared/actions/index.ts");
/* harmony import */ var _shared_reducers_shared_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/reducers/shared.reducer */ "./src/app/shared/reducers/shared.reducer.ts");
/* harmony import */ var _reducers_song_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers/song-tracker-filter.reducer */ "./src/app/song-tracker-view/reducers/song-tracker-filter.reducer.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _collection_filters_collection_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../collection-filters/collection-filters.component */ "./src/app/collection-filters/collection-filters.component.ts");
/* harmony import */ var _collected_filter_toggle_collected_filter_toggle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../collected-filter-toggle/collected-filter-toggle.component */ "./src/app/collected-filter-toggle/collected-filter-toggle.component.ts");
/* harmony import */ var _creature_tracker_creature_tracker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../creature-tracker/creature-tracker.component */ "./src/app/creature-tracker/creature-tracker.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
















class SongTrackerViewComponent {
    constructor(store) {
        this.store = store;
        this.CollectionStatusFilterType = _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_4__["CollectionStatusFilterType"];
        this.reset = true;
        this.songs$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((state) => Object(_reducers_song_tracker_reducer__WEBPACK_IMPORTED_MODULE_2__["selectSongs"])(state)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((value) => !!value));
        this.hemisphere$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((state) => Object(_shared_reducers_shared_reducer__WEBPACK_IMPORTED_MODULE_7__["selectHemisphere"])(state)));
        this.nameFilter$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_reducers_song_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_8__["selectSongNameFilter"]));
        this.collectionStatusFilter$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_reducers_song_tracker_filter_reducer__WEBPACK_IMPORTED_MODULE_8__["selectSongCollectionStatusFilter"], {
            filterType: _shared_models_filter_model__WEBPACK_IMPORTED_MODULE_4__["CollectionStatusFilterType"].COLLECTIBLE,
        }));
    }
    ngOnInit() { }
    onFilterByName(partialName) {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_5__["SongTrackerFilterActions"].filterSongsByNameAction({ partialName }));
    }
    toggleSongCollected(collectible) {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_5__["SongTrackerActions"].toggleSongCollectedAction({ collectible }));
    }
    resetFilters() {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_5__["SongTrackerFilterActions"].resetSongFilterStateAction());
        this.reset = !this.reset; // value irrelevant, just triggers function
    }
    setHemisphereToggleValue(hemisphere) {
        this.store.dispatch(_shared_actions__WEBPACK_IMPORTED_MODULE_6__["SharedTrackerActions"].setHemisphereToggleValue({ hemisphere }));
    }
    setSongCollectionStatusStatusFilter(collectionType, subset) {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_5__["SongTrackerFilterActions"].setSongCollectionStatusFilterAction({
            collectionType,
            subset,
        }));
    }
}
SongTrackerViewComponent.ɵfac = function SongTrackerViewComponent_Factory(t) { return new (t || SongTrackerViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
SongTrackerViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SongTrackerViewComponent, selectors: [["app-song-tracker-view"]], decls: 14, vars: 18, consts: [[1, "song-tracker-view-container"], [1, "left-content"], ["mat-stroked-button", "", 3, "click"], [3, "collectibles", "resetNameFilterInput", "partialName", "hemisphereToggleValue"], [3, "filterType", "resetCollectionStatusFilterType", "collectionStatus"], [1, "right-content"], [1, "song-tracker-container"], [3, "collectibles", "hemisphere", "partialName", "collectibleCollectionSubset", "collectibleCollected"]], template: function SongTrackerViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "aside", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SongTrackerViewComponent_Template_button_click_2_listener() { return ctx.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "RESET FILTERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-collection-filters", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("partialName", function SongTrackerViewComponent_Template_app_collection_filters_partialName_4_listener($event) { return ctx.onFilterByName($event); })("hemisphereToggleValue", function SongTrackerViewComponent_Template_app_collection_filters_hemisphereToggleValue_4_listener($event) { return ctx.setHemisphereToggleValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-collected-filter-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("collectionStatus", function SongTrackerViewComponent_Template_app_collected_filter_toggle_collectionStatus_6_listener($event) { return ctx.setSongCollectionStatusStatusFilter(ctx.CollectionStatusFilterType.COLLECTIBLE, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-creature-tracker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("collectibleCollected", function SongTrackerViewComponent_Template_app_creature_tracker_collectibleCollected_9_listener($event) { return ctx.toggleSongCollected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collectibles", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, ctx.songs$))("resetNameFilterInput", ctx.reset);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("filterType", ctx.CollectionStatusFilterType.COLLECTIBLE)("resetCollectionStatusFilterType", ctx.reset);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collectibles", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 10, ctx.songs$))("hemisphere", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 12, ctx.hemisphere$))("partialName", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 14, ctx.nameFilter$))("collectibleCollectionSubset", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 16, ctx.collectionStatusFilter$));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _collection_filters_collection_filters_component__WEBPACK_IMPORTED_MODULE_10__["CollectionFiltersComponent"], _collected_filter_toggle_collected_filter_toggle_component__WEBPACK_IMPORTED_MODULE_11__["CollectedFilterToggleComponent"], _creature_tracker_creature_tracker_component__WEBPACK_IMPORTED_MODULE_12__["CreatureTrackerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: [".song-tracker-view-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.global-filter-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZy10cmFja2VyLXZpZXcvc29uZy10cmFja2VyLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NvbmctdHJhY2tlci12aWV3L3NvbmctdHJhY2tlci12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29uZy10cmFja2VyLXZpZXctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmdsb2JhbC1maWx0ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SongTrackerViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-song-tracker-view',
                templateUrl: './song-tracker-view.component.html',
                styleUrls: ['./song-tracker-view.component.css'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aaron\Workspaces\personal-github\acnh-tracker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map