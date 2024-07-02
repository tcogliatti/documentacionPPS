'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _inherits(_class, _HTMLElement);
  return _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">sbl-municipio documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-AppModule-f87569e8c25cdae08b607b0db3a4105a5b2a739ea15f5defb3422c2788d39417100c3e6c1a8e4b43d768e8f44f20383df72d939ae4743c1c056676b9bb20b9b9"' : 'data-bs-target="#xs-components-links-module-AppModule-f87569e8c25cdae08b607b0db3a4105a5b2a739ea15f5defb3422c2788d39417100c3e6c1a8e4b43d768e8f44f20383df72d939ae4743c1c056676b9bb20b9b9"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-f87569e8c25cdae08b607b0db3a4105a5b2a739ea15f5defb3422c2788d39417100c3e6c1a8e4b43d768e8f44f20383df72d939ae4743c1c056676b9bb20b9b9"' : 'id="xs-components-links-module-AppModule-f87569e8c25cdae08b607b0db3a4105a5b2a739ea15f5defb3422c2788d39417100c3e6c1a8e4b43d768e8f44f20383df72d939ae4743c1c056676b9bb20b9b9"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AreasDeIncumbenciaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AreasDeIncumbenciaComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/BotonEditarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BotonEditarComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DatosDeContactoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DatosDeContactoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DatosDeCursoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DatosDeCursoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DatosDeIdiomaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DatosDeIdiomaComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DatosDeNivelEducativoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DatosDeNivelEducativoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DatosExperienciaLaboralComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DatosExperienciaLaboralComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DatosInformaticaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DatosInformaticaComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DatosPersonalesComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DatosPersonalesComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DescargarCvAutogeneradoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DescargarCvAutogeneradoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/EditarFormComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EditarFormComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FooterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FooterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FormAreasDeIncumbenciaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FormAreasDeIncumbenciaComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FormDatosCvCursoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FormDatosCvCursoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FormDatosCvIdiomaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FormDatosCvIdiomaComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FormDatosCvNivelEducativoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FormDatosCvNivelEducativoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FormDatosDeContactoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FormDatosDeContactoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FormDatosPersonalesComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FormDatosPersonalesComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FormExperienciaLaboralComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FormExperienciaLaboralComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FormInformaticaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FormInformaticaComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HeaderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HeaderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LayoutFlowFormComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LayoutFlowFormComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LayoutFlowFormCvComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LayoutFlowFormCvComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LoaderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoaderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MensajeErrorFetchComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MensajeErrorFetchComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PrincipalComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PrincipalComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ProgressBarFormComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ProgressBarFormComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ResumenComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ResumenComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ScreenFinCargaCvComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ScreenFinCargaCvComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ScreenFinDeCargaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ScreenFinDeCargaComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SelectAutocompleteComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SelectAutocompleteComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SubirArchivoCvComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SubirArchivoCvComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links"' : 'data-bs-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AreasService.html\" data-type=\"entity-link\" >AreasService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/DatosAdicionalesService.html\" data-type=\"entity-link\" >DatosAdicionalesService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/OptionFormService.html\" data-type=\"entity-link\" >OptionFormService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/PostulanteService.html\" data-type=\"entity-link\" >PostulanteService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ValidarFormHelperService.html\" data-type=\"entity-link\" >ValidarFormHelperService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#guards-links"' : 'data-bs-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/AuthGuardDatosAdicionales.html\" data-type=\"entity-link\" >AuthGuardDatosAdicionales</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"guards/AuthGuardPostulante.html\" data-type=\"entity-link\" >AuthGuardPostulante</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interfaces-links"' : 'data-bs-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/Area.html\" data-type=\"entity-link\" >Area</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/AreaPostulante.html\" data-type=\"entity-link\" >AreaPostulante</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Calle.html\" data-type=\"entity-link\" >Calle</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ConocimientoInformatica.html\" data-type=\"entity-link\" >ConocimientoInformatica</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Curso.html\" data-type=\"entity-link\" >Curso</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DatosAdicionales.html\" data-type=\"entity-link\" >DatosAdicionales</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/EducacionPostulante.html\" data-type=\"entity-link\" >EducacionPostulante</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/EducacionPostulanteRequestDTO.html\" data-type=\"entity-link\" >EducacionPostulanteRequestDTO</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/EstadoCivil.html\" data-type=\"entity-link\" >EstadoCivil</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ExperienciaLaboral.html\" data-type=\"entity-link\" >ExperienciaLaboral</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/FileData.html\" data-type=\"entity-link\" >FileData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Genero.html\" data-type=\"entity-link\" >Genero</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Idioma.html\" data-type=\"entity-link\" >Idioma</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IdiomaPostulante.html\" data-type=\"entity-link\" >IdiomaPostulante</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Localidad.html\" data-type=\"entity-link\" >Localidad</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/NivelEducativo.html\" data-type=\"entity-link\" >NivelEducativo</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Pais.html\" data-type=\"entity-link\" >Pais</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Partido.html\" data-type=\"entity-link\" >Partido</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PostulanteFakeHeader.html\" data-type=\"entity-link\" >PostulanteFakeHeader</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PostulantePerfil.html\" data-type=\"entity-link\" >PostulantePerfil</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PrincipalConDatosRequeridos.html\" data-type=\"entity-link\" >PrincipalConDatosRequeridos</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PrincipalSinDatosRequeridos.html\" data-type=\"entity-link\" >PrincipalSinDatosRequeridos</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Provincia.html\" data-type=\"entity-link\" >Provincia</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/StepProgressBar.html\" data-type=\"entity-link\" >StepProgressBar</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TipoDocumento.html\" data-type=\"entity-link\" >TipoDocumento</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Titulos.html\" data-type=\"entity-link\" >Titulos</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));