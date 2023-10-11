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
    {% assign callbackLink = site.baseurl | append: "/"| append: page.section | append: "/" | append: page.subsection | append: "/" | append: page.categorie | downcase | append: "/" | append:"set-up/#1-post-remote-callback"%}
{% else %}
    {% assign callbackLink = site.baseurl | append: "/" | append: page.section | append: "/" | append: page.subsection | append: "/" | append: page.categorie | downcase | append: "/" | append:"set-up/#2-callback-configuration"%}
{% endif %}

When a {{page.categorie | downcase}} is set up, you have to decide a [retry policy]({{callbackLink}}) in case the HTTP notification does not reach your server.

**Retry policy** will be triggered when your server is not processing the HTTP notification correctly. It means that your response to the HTTP notification is anything else than an HTTP 2XX.

Retry policy can be set to *none*, *bounded* or *always*, but in any case the maximum period of retry for a notification message is **3 days**. 
# Available Policies

Retry policy is applied if your server is **not responding** HTTP code `2XX` (for example, *another HTTP code or a time-out*) to a notification send by the {{page.categorie | downcase}}. 

In this case the notification message will be stored & we will try to send it againg based on the `retryPolicy` decided for this {{page.categorie | downcase}}.

> **Be careful:** retry policy is not made for data storage use! It is a remedial tool used to help when a service failure (on your side). It has a limited tolerance for unavailability and therefore a limited storage depth. 


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


When the retry policy is set to *None* or *Bounded*, if the HTTP notification is not received on your side, the message will be sent again:
- `None`: only one single retry.
- `Bounded`: with a limited number of retries set with `retryNumber` & `retryDelay` for a maximum of **3 days**.

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


When the retry policy is set to `Always`, if the HTTP notification is not received on your side, the message will be sent again for **3 days** maximum.

The frequency of retry depends on the `retryDelay` parameter.

{% endif %}
## Maximum of 3 Days

We can not store your messages forever, because doing so, it would be very likely that the {{page.categorie | downcase }} service would undergo slowdown when too many messages are enqueued.

In case your retry policy is set to  `Bounded` {% if page.categorie == "Monitor" %}or `Always`{% endif %} our server will try to send you the HTTP notification for a maximum of **3 days** at the frequency set in `retryDelay`.

After these 3 days of retry we will **stop sending and storing** this notification message.

After the first message not processed on your side, **other notification** messages being triggered in this monitor will also continue to be sent during 3 days after the moment they were triggered.

However, after 3 days, it's still possible to retrieve data using the REST API within the normal period of 2 months.

> **Info:** The retry policy impact the notification message, not the [callback]({{callbackLink}}). Others {{page.categorie | downcase }} related to a callback are not affected by the retry policy. 
It means also that your server needs to respond a 2XX to a message send for this particular {{page.categorie | downcase }} in order to get out of the retry policy.

## Enter in Retry Policy

When an event failed to be processed by your server, the retry policy process will be triggered.

The event HTTP notification is stored in our database, and we will try to send it again according to your [policy](#available-policies).
## Get Out of Retry Policy

To get out of retry policy your server needs to **respond a 2XX** to any new HTTP notification of this {{page.categorie | downcase}}.

Once an event is triggered, or on frequency based on your `retryDelay`, a message is sent to your server.

If your server respond a 2XX, your {{page.categorie | downcase}} is removed from retry policy and **all stored HTTP notifications are sent**.
