'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">sbl-municipio documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-f87569e8c25cdae08b607b0db3a4105a5b2a739ea15f5defb3422c2788d39417100c3e6c1a8e4b43d768e8f44f20383df72d939ae4743c1c056676b9bb20b9b9"' : 'data-bs-target="#xs-components-links-module-AppModule-f87569e8c25cdae08b607b0db3a4105a5b2a739ea15f5defb3422c2788d39417100c3e6c1a8e4b43d768e8f44f20383df72d939ae4743c1c056676b9bb20b9b9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f87569e8c25cdae08b607b0db3a4105a5b2a739ea15f5defb3422c2788d39417100c3e6c1a8e4b43d768e8f44f20383df72d939ae4743c1c056676b9bb20b9b9"' :
                                            'id="xs-components-links-module-AppModule-f87569e8c25cdae08b607b0db3a4105a5b2a739ea15f5defb3422c2788d39417100c3e6c1a8e4b43d768e8f44f20383df72d939ae4743c1c056676b9bb20b9b9"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AreasDeIncumbenciaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AreasDeIncumbenciaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BotonEditarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotonEditarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatosDeContactoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatosDeContactoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatosDeCursoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatosDeCursoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatosDeIdiomaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatosDeIdiomaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatosDeNivelEducativoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatosDeNivelEducativoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatosExperienciaLaboralComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatosExperienciaLaboralComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatosInformaticaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatosInformaticaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatosPersonalesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatosPersonalesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DescargarCvAutogeneradoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DescargarCvAutogeneradoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditarFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditarFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormAreasDeIncumbenciaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormAreasDeIncumbenciaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormDatosCvCursoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormDatosCvCursoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormDatosCvIdiomaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormDatosCvIdiomaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormDatosCvNivelEducativoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormDatosCvNivelEducativoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormDatosDeContactoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormDatosDeContactoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormDatosPersonalesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormDatosPersonalesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormExperienciaLaboralComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormExperienciaLaboralComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormInformaticaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormInformaticaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutFlowFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutFlowFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutFlowFormCvComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutFlowFormCvComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MensajeErrorFetchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MensajeErrorFetchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrincipalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrincipalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgressBarFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProgressBarFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResumenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScreenFinCargaCvComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScreenFinCargaCvComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScreenFinDeCargaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScreenFinDeCargaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectAutocompleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectAutocompleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubirArchivoCvComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubirArchivoCvComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AreasService.html" data-type="entity-link" >AreasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatosAdicionalesService.html" data-type="entity-link" >DatosAdicionalesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OptionFormService.html" data-type="entity-link" >OptionFormService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostulanteService.html" data-type="entity-link" >PostulanteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidarFormHelperService.html" data-type="entity-link" >ValidarFormHelperService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuardDatosAdicionales.html" data-type="entity-link" >AuthGuardDatosAdicionales</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuardPostulante.html" data-type="entity-link" >AuthGuardPostulante</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Area.html" data-type="entity-link" >Area</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AreaPostulante.html" data-type="entity-link" >AreaPostulante</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Calle.html" data-type="entity-link" >Calle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConocimientoInformatica.html" data-type="entity-link" >ConocimientoInformatica</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Curso.html" data-type="entity-link" >Curso</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatosAdicionales.html" data-type="entity-link" >DatosAdicionales</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EducacionPostulante.html" data-type="entity-link" >EducacionPostulante</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EducacionPostulanteRequestDTO.html" data-type="entity-link" >EducacionPostulanteRequestDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EstadoCivil.html" data-type="entity-link" >EstadoCivil</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExperienciaLaboral.html" data-type="entity-link" >ExperienciaLaboral</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileData.html" data-type="entity-link" >FileData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Genero.html" data-type="entity-link" >Genero</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Idioma.html" data-type="entity-link" >Idioma</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IdiomaPostulante.html" data-type="entity-link" >IdiomaPostulante</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Localidad.html" data-type="entity-link" >Localidad</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NivelEducativo.html" data-type="entity-link" >NivelEducativo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pais.html" data-type="entity-link" >Pais</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Partido.html" data-type="entity-link" >Partido</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PostulanteFakeHeader.html" data-type="entity-link" >PostulanteFakeHeader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PostulantePerfil.html" data-type="entity-link" >PostulantePerfil</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PrincipalConDatosRequeridos.html" data-type="entity-link" >PrincipalConDatosRequeridos</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PrincipalSinDatosRequeridos.html" data-type="entity-link" >PrincipalSinDatosRequeridos</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Provincia.html" data-type="entity-link" >Provincia</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StepProgressBar.html" data-type="entity-link" >StepProgressBar</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TipoDocumento.html" data-type="entity-link" >TipoDocumento</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Titulos.html" data-type="entity-link" >Titulos</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});