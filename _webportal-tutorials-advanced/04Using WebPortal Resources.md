---
type: tutorial advanced
---

# Using Resources

Your Application has at its disposition multiple resources given by the WebPortal or it can even use its own resources.  
You can access these different resources with a simple `XMLHttpRequest`.

```javascript
const req = new XMLHttpRequest();
req.open('GET', '/apps/MyApp/fonts/NAC-Icons.ttf', true);
req.send();
// In order to reuse a cached resource, you need to make a call to the exact same url or it will try to load it again.
```
