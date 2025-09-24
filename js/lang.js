// Idioma por defecto
const DEFAULT_LANG = (localStorage.getItem('lang') || 'ca');

// Traducciones
const TRANSLATIONS = {
    es: {
        'meta.title': 'Enric Serrat | Frontend Developer & Web Designer · Vic, Barcelona.',
        metaDescription: 'Desarrollador Frontend y Diseñador Web con enfoque en innovación y usabilidad. Descubre mis proyectos únicos que combinan creatividad y tecnología avanzada.',
        metaKeywords: 'desarrollador frontend Vic, diseño web Barcelona, UX/UI diseño, desarrollo responsive, JavaScript profesional, creatividad digital, proyectos web innovadores, soluciones web a medida, portafolio diseño web, servicios de desarrollo web en Barcelona',

        'nav.skills': 'Skills',
        'nav.projects': 'Proyectos',
        'nav.experience': 'Experiencia',
        'nav.contact': 'Contacto',

        'hero.role1': 'Frontend Developer',
        'hero.role2': 'Web Designer',

        'about.title1': '¿Quién soy?',
        'about.title2': '¿Cuáles son mis skills?',
        'about.copy': `¡Ey! Soy Enric, Front-End Developer & Web Designer con +3 años de experiencia. Busco trabajo remoto a
      media jornada y, a la vez, uso este espacio como escaparate de proyectos para futuros clientes. Me
      encanta convertir ideas en webs claras, funcionales y con carácter.
      <a href="https://www.linkedin.com/in/enric-serrat-marc%C3%A9-b885ab204/" target="_blank">¡Hablemos!</a>`,
        'about.cta': '¡Hablemos!',

        'web.h2': 'WEB Projects',
        'web.p': 'Diseño sitios web únicos, rápidos y a medida. Mimo cada detalle para asegurar una experiencia fluida, estética y responsive, con UI/UX limpias, accesibles y bien optimizadas para rendimiento y SEO.',

        'api.h2': 'API Projects',
        'api.p': 'Desarrollo aplicaciones centradas en APIs para conectar datos dinámicos y servicios externos. Diseño interfaces intuitivas y adaptativas, enfocadas en la eficiencia, escalabilidad y una experiencia fluida.',

        'proj.tech': 'Tecnologías utilizadas:',
        'proj.go': 'Ir al proyecto',

        'exp.h2': 'Experiencia',
        'exp.sub': 'A la izquierda, mis inicios como Diseñador Gráfico; a la derecha, mi rol actual en Diseño y Desarrollo Web. Explora mi trayectoria haciendo clic en los puntos destacados.',
        'exp.close': 'Cerrar',

        // Contacto
        'contact.h2': 'Contacto',
        'contact.name': 'TU NOMBRE',
        'contact.email': 'TU CORREO',
        'contact.subject': 'ASUNTO',
        'contact.message': 'MENSAJE',
        'contact.success': '¡Mensaje enviado con éxito!',
        'contact.error': 'Por favor, complete todos los campos.',
        'contact.send': 'ENVIAR MENSAJE',
        'contact.failAlt': 'Error al enviar el mensaje. Intenta más tarde.',

        // Footer
        'footer.about': 'Sobre mí',
        'footer.web': 'WEB Projects',
        'footer.api': 'API Projects',
        'footer.exp': 'Experiencia',

        // Popups experiencia (HTML ya traducido)
        popups: {
            circulo1: `
        <h2>CFGM Asistencia al Producto Gráfico Impreso</h2>
        <ul style="list-style-type:none;padding-left:0;">
          <li><strong>Sitio:</strong> Escola d'Art i Superior de Disseny de Vic</li>
          <li><strong>Fecha:</strong> 2014 - 2016 · 2 años</li>
          <li><strong>Ubicación:</strong> Vic, Cataluña, España</li>
          <li><strong>Aptitudes:</strong> Fotomontaje, ilustración, maquetación, etc.</li>
        </ul>`,
            circulo2: `
        <h2>Diseñador Gráfico</h2>
        <ul style="list-style-type:none;padding-left:0;">
          <li><strong>Sitio:</strong> PIKMENT | Copisteria & Impremta Ràpida</li>
          <li><strong>Fecha:</strong> jul. 2015 - jun. 2016 · 1 año</li>
          <li><strong>Ubicación:</strong> Vic, Cataluña, España</li>
          <li><strong>Aptitudes:</strong> Atención al cliente, fotocopias, diseño de tarjetas, etc.</li>
        </ul>`,
            circulo3: `
        <h2>Encargado de Almacén</h2>
        <ul style="list-style-type:none;padding-left:0;">
          <li><strong>Sitio:</strong> Ferreteria Comella | Ferretería</li>
          <li><strong>Fecha:</strong> jul. 2017 - ago. 2020 · 3 años 2 meses</li>
          <li><strong>Ubicación:</strong> Vic, Cataluña, España</li>
          <li><strong>Aptitudes:</strong> Atención al cliente, almacén, reposición, preparación de pedidos, etc.</li>
        </ul>`,
            circulo4: `
        <h2>Mozo de Almacén</h2>
        <ul style="list-style-type:none;padding-left:0;">
          <li><strong>Sitio:</strong> Bon Preu Balenyà | Magatzem</li>
          <li><strong>Fecha:</strong> abr. 2021 - sept. 2021 · 6 meses</li>
          <li><strong>Ubicación:</strong> Els Hostalets de Balenyà, Cataluña, España</li>
          <li><strong>Aptitudes:</strong> Picking y preparación de comandas con transpaleta eléctrica.</li>
        </ul>`,
            circuloPathMobile: `
        <h2>Mozo de Almacén</h2>
        <ul style="list-style-type:none;padding-left:0;">
          <li><strong>Sitio:</strong> Bon Preu Balenyà | Magatzem</li>
          <li><strong>Fecha:</strong> abr. 2021 - sept. 2021 · 6 meses</li>
          <li><strong>Ubicación:</strong> Els Hostalets de Balenyà, Cataluña, España</li>
          <li><strong>Aptitudes:</strong> Picking y preparación de comandas con transpaleta eléctrica.</li>
        </ul>`,
            circulo5Mobile: `
        <h2>Desarrollador de Sitios Web</h2>
        <ul style="list-style-type:none;padding-left:0;">
          <li><strong>Empresa:</strong> <a href="https://www.lasevaweb.com/ca" target="_blank">Lasevaweb Global Web Services S.L.</a></li>
          <li><strong>Fecha:</strong> septiembre 2023 - febrero 2025 · 1 año 6 meses</li>
          <li><strong>Ubicación:</strong> Vic, Cataluña, España - Presencial</li>
          <li><strong>Jornada:</strong> Completa</li>
          <br>
          <li><strong>*<em>Actualmente busco trabajo remoto como Front-End Developer y Diseñador Web.</em></strong></li>
        </ul>`,
            circuloPath: `
        <h2>Desarrollador de Sitios Web</h2>
        <ul style="list-style-type:none;padding-left:0;">
          <li><strong>Empresa:</strong> <a href="https://www.lasevaweb.com/ca" target="_blank">Lasevaweb Global Web Services S.L.</a></li>
          <li><strong>Fecha:</strong> septiembre 2023 - febrero 2025 · 1 año 6 meses</li>
          <li><strong>Ubicación:</strong> Vic, Cataluña, España - Presencial</li>
          <li><strong>Jornada:</strong> Completa</li>
          <br>
          <li><strong>*<em>Actualmente busco trabajo remoto como Front-End Developer y Diseñador Web.</em></strong></li>
        </ul>`
        }
    },

    ca: {
        'meta.title': 'Enric Serrat | Frontend Developer & Web Designer · Vic, Barcelona.',
        metaDescription: 'Desenvolupador Frontend i Dissenyador Web amb enfocament en innovació i usabilitat. Descobreix els meus projectes que combinen creativitat i tecnologia avançada.',
        metaKeywords: 'desenvolupador frontend Vic, disseny web Barcelona, UX/UI disseny, desenvolupament responsive, JavaScript professional, creativitat digital, projectes web innovadors, solucions web a mida, portafolis disseny web, serveis de desenvolupament web a Barcelona',

        'nav.skills': 'Skills',
        'nav.projects': 'Projectes',
        'nav.experience': 'Experiència',
        'nav.contact': 'Contacte',

        'hero.role1': 'Frontend Developer',
        'hero.role2': 'Web Designer',

        'about.title1': 'Qui soc?',
        'about.title2': 'Quines són les meves skills?',
        'about.copy': `Ei! Soc l’Enric, Desenvolupador Front-End & Dissenyador Web amb +3 anys d’experiència. Busco feina remota
      a mitja jornada i, alhora, utilitzo aquest espai com a aparador de projectes per a futurs clients. M’encanta
      convertir idees en webs clares, funcionals i amb caràcter.
      <a href="https://www.linkedin.com/in/enric-serrat-marc%C3%A9-b885ab204/" target="_blank">Parlem!</a>`,
        'about.cta': 'Parlem!',

        'web.h2': 'WEB Projects',
        'web.p': 'Dissenyo llocs web únics, ràpids i a mida. Cuido cada detall per garantir una experiència fluida, estètica i responsive, amb UI/UX netes, accessibles i ben optimitzades per a rendiment i SEO.',

        'api.h2': 'API Projects',
        'api.p': 'Desenvolupo aplicacions centrades en APIs per connectar dades dinàmiques i serveis externs. Dissenyo interfícies intuïtives i adaptatives, enfocades en l’eficiència, escalabilitat i una experiència fluida.',

        'proj.tech': 'Tecnologies utilitzades:',
        'proj.go': 'Anar al projecte',

        'exp.h2': 'Experiència',
        'exp.sub': 'A l’esquerra, els meus inicis com a Dissenyador Gràfic; a la dreta, el meu rol actual en Disseny i Desenvolupament Web. Explora la meva trajectòria fent clic als punts destacats.',
        'exp.close': 'Tancar',

        'contact.h2': 'Contacte',
        'contact.name': 'EL TEU NOM',
        'contact.email': 'EL TEU CORREU',
        'contact.subject': 'ASSUMPTE',
        'contact.message': 'MISSATGE',
        'contact.success': 'Missatge enviat amb èxit!',
        'contact.error': 'Si us plau, completa tots els camps.',
        'contact.send': 'ENVIAR MISSATGE',
        'contact.failAlt': 'Error en enviar el missatge. Torna-ho a provar més tard.',

        'footer.about': 'Sobre mi',
        'footer.web': 'WEB Projects',
        'footer.api': 'API Projects',
        'footer.exp': 'Experiència',

        popups: {
            circulo1: `
        <h2>CFGM Assistència al Producte Gràfic Imprès</h2>
        <ul style="list-style-type:none;padding-left:0;">
          <li><strong>Lloc:</strong> Escola d'Art i Superior de Disseny de Vic</li>
          <li><strong>Data:</strong> 2014 - 2016 · 2 anys</li>
          <li><strong>Ubicació:</strong> Vic, Catalunya, Espanya</li>
          <li><strong>Habilitats:</strong> Fotomuntatge, il·lustració, maquetació, etc.</li>
        </ul>`,
            circulo2: `
        <h2>Dissenyador Gràfic</h2>
        <ul style="list-style-type:none;padding-left:0;">
          <li><strong>Lloc:</strong> PIKMENT | Copisteria & Impremta Ràpida</li>
          <li><strong>Data:</strong> jul. 2015 - juny 2016 · 1 any</li>
          <li><strong>Ubicació:</strong> Vic, Catalunya, Espanya</li>
          <li><strong>Habilitats:</strong> Atenció al client, fotocòpies, disseny de targetes, etc.</li>
        </ul>`,
            circulo3: `
        <h2>Encarregat de Magatzem</h2>
        <ul style="list-style-type:none;padding-left:0;">
          <li><strong>Lloc:</strong> Ferreteria Comella | Ferreteria</li>
          <li><strong>Data:</strong> jul. 2017 - ag. 2020 · 3 anys i 2 mesos</li>
          <li><strong>Ubicació:</strong> Vic, Catalunya, Espanya</li>
          <li><strong>Habilitats:</strong> Atenció al client, magatzem, reposició, preparació de comandes, etc.</li>
        </ul>`,
            circulo4: `
        <h2>Mosso de Magatzem</h2>
        <ul style="list-style-type:none;padding-left:0;">
          <li><strong>Lloc:</strong> Bon Preu Balenyà | Magatzem</li>
          <li><strong>Data:</strong> abr. 2021 - set. 2021 · 6 mesos</li>
          <li><strong>Ubicació:</strong> Els Hostalets de Balenyà, Catalunya, Espanya</li>
          <li><strong>Habilitats:</strong> Picking i preparació de comandes amb transpaleta elèctrica.</li>
        </ul>`,
            circuloPathMobile: `
        <h2>Mosso de Magatzem</h2>
        <ul style="list-style-type:none;padding-left:0;">
          <li><strong>Lloc:</strong> Bon Preu Balenyà | Magatzem</li>
          <li><strong>Data:</strong> abr. 2021 - set. 2021 · 6 mesos</li>
          <li><strong>Ubicació:</strong> Els Hostalets de Balenyà, Catalunya, Espanya</li>
          <li><strong>Habilitats:</strong> Picking i preparació de comandes amb transpaleta elèctrica.</li>
        </ul>`,
            circulo5Mobile: `
        <h2>Desenvolupador de Llocs Web</h2>
        <ul style="list-style-type:none;padding-left:0;">
          <li><strong>Empresa:</strong> <a href="https://www.lasevaweb.com/ca" target="_blank">Lasevaweb Global Web Services S.L.</a></li>
          <li><strong>Data:</strong> setembre 2023 - febrer 2025 · 1 any i 6 mesos</li>
          <li><strong>Ubicació:</strong> Vic, Catalunya, Espanya - Presencial</li>
          <li><strong>Jornada:</strong> Completa</li>
          <br>
          <li><strong>*<em>Actualment busco feina remota com a Front-End Developer i Dissenyador Web.</em></strong></li>
        </ul>`,
            circuloPath: `
        <h2>Desenvolupador de Llocs Web</h2>
        <ul style="list-style-type:none;padding-left:0;">
          <li><strong>Empresa:</strong> <a href="https://www.lasevaweb.com/ca" target="_blank">Lasevaweb Global Web Services S.L.</a></li>
          <li><strong>Data:</strong> setembre 2023 - febrer 2025 · 1 any i 6 mesos</li>
          <li><strong>Ubicació:</strong> Vic, Catalunya, Espanya - Presencial</li>
          <li><strong>Jornada:</strong> Completa</li>
          <br>
          <li><strong>*<em>Actualment busco feina remota com a Front-End Developer i Dissenyador Web.</em></strong></li>
        </ul>`
        }
    }
};

// Motor i18n
const I18N = {
    lang: DEFAULT_LANG,
    t(key) {
        const dict = TRANSLATIONS[this.lang];
        if (!dict) return key;
        // Soporta key dentro de texto de input value
        const val = (dict[key] ?? key);
        return val;
    },
    apply() {
        // <html lang="">
        document.documentElement.setAttribute('lang', this.lang);

        // <title>
        const titleEl = document.querySelector('title[data-i18n]');
        if (titleEl) titleEl.textContent = this.t(titleEl.getAttribute('data-i18n'));

        // metas
        const md = document.getElementById('meta-description');
        if (md) md.setAttribute('content', TRANSLATIONS[this.lang].metaDescription);
        const mk = document.getElementById('meta-keywords');
        if (mk) mk.setAttribute('content', TRANSLATIONS[this.lang].metaKeywords);

        // elementos con data-i18n (innerHTML)
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.innerHTML = this.t(key);
        });

        // placeholders
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            el.setAttribute('placeholder', this.t(key));
        });

        // inputs con data-i18n-value
        document.querySelectorAll('[data-i18n-value]').forEach(el => {
            const key = el.getAttribute('data-i18n-value');
            el.setAttribute('value', this.t(key));
        });

        // Popups
        this.popups = TRANSLATIONS[this.lang].popups || {};
        window.I18N = this;

        // Botones activos
        document.getElementById('btn-es')?.classList.toggle('active', this.lang === 'es');
        document.getElementById('btn-ca')?.classList.toggle('active', this.lang === 'ca');
    },
    switchTo(lang) {
        this.lang = lang;
        localStorage.setItem('lang', lang);
        this.apply();
    }
};

// Init
document.addEventListener('DOMContentLoaded', () => {
    I18N.apply();
    document.getElementById('btn-es')?.addEventListener('click', () => I18N.switchTo('es'));
    document.getElementById('btn-ca')?.addEventListener('click', () => I18N.switchTo('ca'));
});
