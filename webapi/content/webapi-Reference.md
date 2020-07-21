</div>
</div>
</div>
</div>
</div>
</div>
</main>

<style>

html {
scroll-behavior: unset;
background-color: white;
}
body {
background-color: white;
}
.bd-main{
background:#1e2336;
}

.bd-content {
background: #1e2336;
}

.tabs {
border-radius: 2px;
}

#tabs{
    margin: 0 !important;
}

.bd-content .content{
    padding: 0;
}

h1, h2, h3, h4, h5 {
    padding-top: inherit;
    margin-top: inherit;
}

#redoc-container h3 {
    padding-bottom: 1rem;
    padding-top: 1rem;
}

#redoc-container .api-content { 
    word-wrap: anywhere;
}

#base-url{
    border-radius: 1px;
    padding: 1.5rem 3rem;
}

#redoc-container .number {
    align-items: inherit;
    background-color: inherit;
    border-radius: inherit;
    display: inherit;
    font-size: inherit;
    height: inherit;
    justify-content: inherit;
    margin-right: inherit;
    min-width: inherit;
    padding: inherit;
    text-align: inherit;
    vertical-align: inherit;
}

#redoc-container code { 
background: inherit;
font-size: inherit;
} 


@media screen and (min-width: 1088px) {

    .version p,.version p strong, .version ul > li {
        color: white;
    }
    .is-info.is-border, .is-info.is-border:hover {
        border-right: 1px solid white;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
    }
    .bd-lead {
    margin-bottom: 2rem;
    }
}

@media screen and (max-width: 1087px) {
    .is-white-mobile {
        background: white;
        padding: 2rem;
    }
}

@media screen and (max-width: 800px) {
    .is-white-mobile {
        padding: 2rem 2rem 0;
    }
}

</style>

<div id="redoc-container">
</div>

<script src="https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js"> </script>
<script>

var mq = window.matchMedia( "(max-width: 1088px)" );
if (mq.matches) {
     Redoc.init('{{ urlReference | prepend: site.baseurl }}', {
        "unstable_ignoreMimeParameters": true,
        disableSearch: true,
        hideHostname: true,
        noAutoAuth: true,
        expandResponses: "200,201,202",
        theme: {
            colors: {
                primary: {
                    main: '#1e2336',
                }
            },
            "typography": {
                fontSize: '14px',
                "fontFamily": "'Roboto', sans-serif;",
                headings: {
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: '400',
                    lineHeight: '1.6em',
                },
                code: {
                    fontSize: '13px',
                    fontFamily: 'Inconsolata, monospace',
                    wrap: false,
                },
            },
            codeBlock: {
                backgroundColor: "#2A3A51"
            },
            "sidebar": {
                "level1Items": {
                    "textTransform": "uppercase"
                },
                "arrow": {
                "size": "18px"
                }
            },
            "rightPanel": {
                "backgroundColor": "#1e2336",
                "textColor": "white"
            },
        }
    }, document.getElementById('redoc-container'))
}
else {
     Redoc.init('{{ urlReference | prepend: site.baseurl }}', {
        scrollYOffset: 102,
        "unstable_ignoreMimeParameters": true,
        disableSearch: true,
        hideHostname: true,
        noAutoAuth: true,
        expandResponses: "200,201,202",
        theme: {
            colors: {
                primary: {
                    main: '#1e2336',
                }
            },
            "typography": {
                fontSize: '14px',
                "fontFamily": "'Roboto', sans-serif;",
                headings: {
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: '400',
                    lineHeight: '1.6em',
                },
                code: {
                    fontSize: '13px',
                    fontFamily: 'Inconsolata, monospace',
                    wrap: false,
                },
            },
            codeBlock: {
                backgroundColor: "#2A3A51"
            },
            "sidebar": {
                "level1Items": {
                    "textTransform": "uppercase"
                },
                "arrow": {
                "size": "18px"
                }
            },
            "rightPanel": {
                "backgroundColor": "#1e2336",
                "textColor": "white"
            },
        }
    }, document.getElementById('redoc-container'))
}

   
</script>

<main class="bd-main">
<div class="bd-main-container container">
<div class="container">
<div class="">
<div class="">
<div class="">
<div class="">