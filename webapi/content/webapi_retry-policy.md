<style>
.tile.is-child {
    background-color: #1E2336;
    color: white;
}
.tile.is-child .title {
    font-size: 1.3rem;
    color: #ff4238;
}
.tile.is-child em {
    font-size: .8rem
}
.notification code, .notification pre {
    background: transparent;
}
</style>

{% if page.categorie == "Remote" %}
    {% assign callbackLink = site.baseurl | append: "/"| append: page.section | append: "/" | append: page.subsection | append: "/" | append: page.categorie | downcase | append: "/" | append:"set-up/#post-callback"%}
{% elsif page.categorie == "Monitor" %}
    {% assign callbackLink = site.baseurl | append: "/" | append: page.section | append: "/" | append: page.subsection | append: "/" | append: page.categorie | downcase | append: "/" | append:"set-up/#post-monitor-request"%}
{% endif %}

{% if page.subsection == "b2b" %}
When a [{{page.categorie | downcase}} is set up]({{callbackLink}}), a retry policy must be set up in case the HTTP notification does not reach the server.
{% endif %}

Retry policy will be triggered when the server in charge of receiving the {{page.categorie}} notification is not acknowledging the notification correctly. It's the case if the response to the HTTP notification is anything else than an HTTP 2XX.

Retry policy is not made for data storage use! It is a remedial tool in case of service failure of the server where the notification should be received.

{% if page.subsection == "b2b" %}

Retry policy can be set to *none*, *bounded* or *always*, but in any case the maximum period of retry for a notification message is **3 days**. 

# Available Policies

In this case the notification message will be stored & it will be sent again based on the retryPolicy decided for this {{page.categorie | downcase}}.

##### Policies - None & Bounded

<div class="tile is-ancestor">
    <div class="tile is-parent">
        <article class="tile is-child HTTP notification">
            <div class="language-json"><pre class="highlight"><code><span class="nl">"retryPolicy"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span><span class="w">
    </span><span class="nl">"policy"</span><span class="p">:</span><span class="w"> </span><span class="s2">"None"</span>
    <span class="p">}</span><span class="w">
</span></code></pre></div>
        </article>
    </div>
    <div class="tile is-parent">
        <article class="tile is-child HTTP notification">
            <div class="language-json"><pre class="highlight"><code><span class="nl">"retryPolicy"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span><span class="w">
    </span><span class="nl">"policy"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Bounded"</span>
    <span class="p">}</span><span class="w">
</span></code></pre></div>
        </article>
    </div>
</div>


When the retry policy is set to *None* or *Bounded*, if the HTTP notification is not received, the message will be sent again:
- `None`: only one single retry.
- `Bounded`: with a limited number of retries set with *retryNumber* & *retryDelay* for a maximum of 3 days.

{% if page.categorie == "Monitor" %}

##### Policy - Always

<div class="tile is-ancestor">
    <div class="tile is-parent">
        <article class="tile is-child HTTP notification">
            <div class="language-json"><pre class="highlight"><code><span class="nl">"retryPolicy"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span><span class="w">
    </span><span class="nl">"policy"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Always"</span><span class="p">}<span class="w">
    </span>
</span></code></pre></div>
        </article>
    </div>
</div>


When the retry policy is set to `Always`, if the HTTP notification is not received, the message will be sent again for 3 days maximum.

The frequency of retry depends on the `retryDelay` parameter.

{% endif %}

{% elsif page.subsection == "b2c" %}

## Policy Description

This policy of retry has different parameters:
- When a message [enters failure](#enter-retry-policy), it will be **sent again until it succeeds**, or retention time exceeded.
- The **retry delay**, periods of time between two retry attempts, is 10 seconds.
- Notifications are sent in **batches**, when 100 notifications are ready, they will be sent in a batch, even if the retry delay of 10 seconds has not been reached. Batches send notification in a JSON array in the HTTP body, specific headers and query parameters will not be available.
- After 3 days (72 hours) of retry policy, the message is **deleted**.

{% endif %}

## Maximum Retention Time

{% if page.subsection == "b2b" %}

In case the retry policy is set to *Bounded* {% if page.categorie == "Monitor" %}or *Always*{% endif %}, the notification will be resent for a maximum of 3 days at the frequency set in *retryDelay*.

{% endif %}

After 3 days of retry the **notification message is deleted**. However, it's still possible to retrieve vehicle data using the REST API within the normal period of 2 months.

After the first notification not processed, other notification messages being triggered in this monitor will also continue to be sent for 3 days after the moment they were triggered.

{% unless page.subsection == "b2b" or page.categorie == "Monitor" %}

> **Info:** The retry policy impacts the {{page.categorie | downcase }}, not the [callback]({{callbackLink}}). Others {{page.categorie | downcase }} related to a callback are not affected by the retry policy. 
It also means that the server needs to respond "2XX" to a message send for this specific {{page.categorie | downcase }} in order to get out of the retry policy.

{% endunless %}

## Enter Retry Policy

Retry policy is applied if the server is **not responding HTTP code 2XX** (for example, *another HTTP code or a time-out*) to a notification send by the {{page.categorie | downcase}}. 

The notification is stored, and it will be sent again according to the [policy]({% if page.subsection == "b2b" %}#available-policies{% elsif page.subsection == "b2c" %}#policy-description{% endif %}).

## Get Out of Retry Policy

To get out of retry policy the server needs to **respond "2XX**" to any new attempt to send the notification. If it happens, the {{page.categorie | downcase}} is removed from retry policy and all stored HTTP notifications are sent. Otherwise, messages are deleted but vehicle data are still available through the REST API.
