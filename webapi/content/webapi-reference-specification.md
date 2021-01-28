<div id="redoc-container">
</div>

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
