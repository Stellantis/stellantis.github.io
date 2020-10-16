<style>

html {
scroll-behavior: unset;
}


h1, h2, h3, h4, h5 {
    padding-top: inherit;
    margin-top: inherit;
}

.menu-select{
    display: flex;
}


#content-header #page-title {
    font-size: 1.8rem;

}


.page-title-container{
    margin-top:1.2rem;
}

/* .notification.page-disclaimer{
    display: none;
} */

.content {
    margin-bottom: 0 !important;
    padding-top: 3.5rem;
    padding-bottom: 0.7rem;
    max-width: 100%;
}

.content, .is-spec-content {
    padding-left: 7.5%;
    padding-right: 7.5%;
}


@media screen and (max-width: 650px) {
    .spec-background{
        margin: 0;
    }
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

#navbarpsa.bluenavbar .navbar-dropdown .navbar-item{
    display: inherit;
}

#lunr {
    padding-top: 0;
    margin-top: 0;
}

#txtsearchresult {
    padding-top: 80px;
}

.is-spec-content{
    padding-bottom: 2.5rem;
    border-bottom: 1px solid lightgrey;
}

#article {
    background: white;
}

@media screen and (max-width: 920px) {
    .content, .is-spec-content {
    padding-left: 5%;
    padding-right: 5%;
}
}



</style>

<div id="redoc-container">
</div>

<script src="https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js"> </script>
<script>
    Redoc.init('{{ urlReference | prepend: site.baseurl }}', {
    scrollYOffset: 67,
    disableSearch: true,
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
            links: {
            color: "#2689b5"
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
            "backgroundColor": "#fafafa",
        },
    }
}, document.getElementById('redoc-container'))

</script>
