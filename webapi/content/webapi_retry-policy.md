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

When a {{page.categorie | downcase}} is set up, you have to decide a [retry policy]({{site.baseurl | append:"/" | append: page.section | append:"/"| append : page.subsection | | append:"/"| append : page.categorie | downcase | append: "/set-up/#2-callback-configuration"}}) in case the notification does not reach your server.

**Retry policy** will be triggered when your server is not receiving a {{page.categorie | downcase}} notification. It means that your response to the notification is anything else than an HTTP 2XX.

Retry policy can be set to *none*, *bounded* or *always*, but after a certain number of retries we will limit the notifications sent.
# AVAILABLE POLICIES

Retry policy is applied if your server is **not responding** HTTP code `2XX` (for example, *another HTTP code or a time-out*) to a notification send by the {{page.categorie | downcase}}. 

In this case the notification will be stored & we will retry to send the notification to your server based on the policy you decided when you register your {{page.categorie | downcase}}.

> **Be careful:** retry policy is not made for data storage use! It is a remedial tool used to help when a service failure (on your side). It has a limited tolerance for unavailability and therefore a limited storage depth. 


##### NONE & BOUNDED


<div class="tile is-ancestor">
    <div class="tile is-parent">
        <article class="tile is-child notification">
            <div class="language-json"><pre class="highlight"><code><span class="nl">"retryPolicy"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span><span class="w">
    </span><span class="nl">"policy"</span><span class="p">:</span><span class="w"> </span><span class="s2">"None"</span><span class="w">
    </span><span class="p">}</span><span class="w">
</span></code></pre></div>
        </article>
    </div>
    <div class="tile is-parent">
        <article class="tile is-child notification">
            <div class="language-json"><pre class="highlight"><code><span class="nl">"retryPolicy"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span><span class="w">
    </span><span class="nl">"policy"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Bounded"</span><span class="w">
    </span><span class="p">}</span><span class="w">
</span></code></pre></div>
        </article>
    </div>
</div>


When the retry policy is set to *None* or *Bounded*, if the notification is not received on your side, the message will be sent:
- `None`: only one single retry.
- `Bounded`: with a limited number of retries set with `retryNumber` & `retryDelay`. There is a **[limit](#limitation) of retries** as explained below.

##### ALWAYS

<div class="tile is-ancestor">
    <div class="tile is-parent">
        <article class="tile is-child notification">
            <div class="language-json"><pre class="highlight"><code><span class="nl">"retryPolicy"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span><span class="w">
    </span><span class="nl">"policy"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Always"</span><span class="w">
    </span><span class="p">}</span><span class="w">
</span></code></pre></div>
        </article>
    </div>
</div>


When the retry policy is set to `Always`, if the notification is not received on your side, the message will be sent again and again, but there is a **limit of retries** as explained below.

## LIMITATION

In case your retry policy is set to `Always` or `Bounded` our server will try to send you the notification again for the longest period possible.

**However**, we can not store your messages forever, because doing so, it would be very likely that this {{page.categorie | downcase | append:"ing"}} service would undergo slowdown when too many messages are enqueued.

That's why a **limitation process** is triggered on you {{page.categorie | downcase}}, at the same time as the retry policy, when your server did not answer. Your {{page.categorie | downcase}} can be under 3 levels of limitation. After level 3, the events will not be sent to your server anymore.


<div class="tile is-ancestor">
    <div class="tile is-parent">
        <article class="tile is-child notification">
            <p class="title">Level 1</p>
            <ul>
                <li>Min 60 sec between each retry</li>
                <li>10 unsuccessful attempts</li>
                <li>After 10 attempts, limitation will go to level 2</li>
            </ul>
        </article>
    </div>
    <div class="tile is-parent">
        <article class="tile is-child notification">
            <p class="title">Level 2</p>
            <ul>
                <li>Min 300 sec between each retry</li>
                <li>10 unsuccessful attempts</li>
                <li>After 10  attempts, limitation will go to level 3</li>
            </ul>
        </article>
    </div>
    <div class="tile is-parent">
        <article class="tile is-child notification">
            <p class="title">Level 3</p>
            <ul>
                <li>Min 1800 sec between each retry</li>
                <li>10 unsuccessful attempts</li>
                <li>After 10 attempts, events will not be sent anymore. <br><em>It's still possible to retrieve data using the REST API within 2 months.</em></li>
            </ul>
        </article>
    </div>
</div>



#### ENTER IN LIMITATION

When an event failed to being sent to your server, the limitation process will be triggered: 
- If the {{page.categorie | downcase}} **was not under limitation**, level 1 or 2 will be assigned depending on the HTTP error code (or time-out).
- If it **was already limited**, one attempt will be added (only if the failed attempt occurred after the end of the current level refresh, *see [level](#limitation)*) to the count of failed attempt and eventually progress to the next level.

If it's not receveid the event notification is stored in our database, and when your server will not be under limitation (*see [getting out of limitation](#get-out-of-limitation)*) it will be sent again to your server.

If your {{page.categorie | downcase}} reach level 3 + 10 failed attempts, the event will not be sent anymore. This is to ensure the reliability of the {{page.categorie | downcase}} service. <br>*However, it's still  possible to retrieve data about a vehicle using the **REST API**, all data are available during 2 months*.

![limitation-start]({{site.baseurl}}/assets/images/limitation-start.svg)

#### GET OUT OF LIMITATION

To get out of limitation you just have to wait that your server **respond a 2XX** to any new notification of this {{page.categorie | downcase}}.

Once an event is triggered, if the {{page.categorie | downcase}} is not under refreshment between 2 retries (according to his *[level](#limitation) of limitation*), a notification is sent to your server.

If the notification is received, your {{page.categorie | downcase}} is removed from limitation and **all stored notifications are sent**.

![limitation-end]({{site.baseurl}}/assets/images/limitation-end.svg)