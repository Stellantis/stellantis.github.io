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

redoc .api-content { 
    word-wrap: anywhere;
}

#base-url{
    border-radius: 1px;
    padding: 1.5rem 3rem;
}

redoc .number {
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

redoc code { 
    background-color: inherit;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    padding: inherit;
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
    redoc .menu-content{
        top: 0 !important;
    	height: calc(100vh) !important;
    }
}

@media screen and (max-width: 800px) {
    .is-white-mobile {
        padding: 2rem 2rem 0;
    }
}

</style>

<redoc spec-url='{{ urlReference | prepend: site.baseurl }}' disable-search hide-hostname no-auto-auth scroll-y-offset="103" expand-responses="200,201,202"></redoc>

<script src="https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js"> </script>

<main class="bd-main">
<div class="bd-main-container container">
<div class="container">
<div class="">
<div class="">
<div class="">
<div class="">