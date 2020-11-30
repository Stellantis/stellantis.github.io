
# WEBHOOK TEMPLATE

What we offer with monitor is a simple way to process large amount of vehicle data. Although, you have to develop on your side a **dedicated webhook** able to receive our events.

This web server needs to be configured to read & process our events in order that you get informed about what's happening to your vehicles in real time. Below is the webhook template specification, it describes the HTTP callback you will receive.

> **Note:** HTTPS must be supported and a certificate issued by a trusted public and known CA must be provided. Indeed, the URL of your webhook must be the same as the one specified in when you created the callback.

<style>
h1, h2, h3, h4, h5 {
    padding-top: inherit;
    margin-top: inherit;
}
.content h1:not(:first-child), .content h2:not(:first-child), .content h3:not(:first-child), .content h4, .content h5 {
    padding-top: inherit;
    margin-top: inherit;  
}
</style>

<div id="swagger-ui"></div>
<script src="{{ '/assets/js/swagger-ui-bundle.js' | prepend: site.baseurl | prepend: site.url }}"> </script>
<script src="{{ '/assets/js/swagger-ui-standalone-preset.js' | prepend: site.baseurl | prepend: site.url }}"> </script>
<script>
    window.onload = function () {
        // Begin Swagger UI call region
        const ui = SwaggerUIBundle({
            url: "{{ site.url }}{{site.baseurl}}/assets/openapi/{% if page.subsection == 'b2b' %}{% if page.title contains "v3" %}api-b2b-webhook-template-v3.yaml{% elsif page.title contains "v2" %}api-b2b-webhook-template-v2.yaml{% endif %}{% elsif page.subsection == 'b2c' %}api-b2c-webhook-template.yaml{% endif %}",
            dom_id: '#swagger-ui',
            deepLinking: true,
            presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIStandalonePreset
            ],
            plugins: [
                SwaggerUIBundle.plugins.DownloadUrl
            ],
            layout: "StandaloneLayout",
        })
        // End Swagger UI call region
        window.ui = ui;
    }
</script>

# SEE ALSO

##### QUICK-START

Need to see examples of request to the API? Browse our {% if page.subsection == 'b2b' %}[Quick-Start]({{site.baseurl}}/webapi/b2b/quickstart/examples/){% elsif page.subsection == 'b2c' %}[Quick-Start]({{site.baseurl}}/webapi/b2c/quickstart/examples/){% endif %}.

##### TRY OUT!

Retrieve reference of this API, go to the {% if page.subsection == 'b2b' %}[API List]({{ site.baseurl }}/webapi/b2b/api-reference/specification/){% elsif page.subsection == 'b2c' %}[API List]({{ site.baseurl }}/webapi/b2c/api-reference/specification/){% endif %}.