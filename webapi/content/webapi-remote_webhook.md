
# 3. WEBHOOK TEMPLATE

You have to develop on your side a **dedicated webhook** able to receive our event.

This web server needs to be configured to read & process our events in order that you get informed about the processing of the remote. Below is the webhook template specification, it describes the HTTP callback you will receive.

> **Note:** HTTPS must be supported and a certificate issued by a trusted public and known CA must be provided. Indeed, the URL of your webhook have to be the same as the one specified in when you created the callback.


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
            url: "{{ site.url }}{{site.baseurl}}/assets/openapi/{% if page.subsection == 'b2b' %}api-b2b-webhook-template-v3.yaml{% elsif page.subsection == 'b2c' %}api-b2c-webhook-template.yaml{% endif %}",
            dom_id: '#swagger-ui',
            deepLinking: true,
            presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIStandalonePreset
            ],
            plugins: [
            ],
            layout: "StandaloneLayout",
        })
        // End Swagger UI call region
        window.ui = ui;
    }
</script>

# SEE ALSO

##### STANDARDS

Want to see what it's look like? Browse our {% if page.subsection == 'b2b' %}[Standards]({{ site.baseurl }}/webapi/b2b/overview/standards/){% elsif page.subsection == 'b2c' %}[Standards]({{ site.baseurl }}/webapi/b2c/overview/standards/){% endif %}.

##### TRY OUT!

Retrieve reference of this API, go to the {% if page.subsection == 'b2b' %}[API List]({{ site.baseurl }}/webapi/b2b/api-reference/specification/){% elsif page.subsection == 'b2c' %}[API List]({{ site.baseurl }}/webapi/b2c/api-reference/specification/){% endif %}.