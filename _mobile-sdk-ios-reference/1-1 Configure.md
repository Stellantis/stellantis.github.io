---
title: 'configureWithEnvironement:'
type: ios api

---

### `configureWithEnvironement:`

To configure ADSDManager environment, use:

```objective_c
- (void)configureWithEnvironement:(ADSDEnvironment)environment;
```


#### Parameters

Parameter | Type | Description | Requirement
----|----|----|----
`environment` | *ADSDEnvironment* | Enum prod or preProd. | Required.

Where GPCVEnvironment is an enum declared like this:

```objective_c
typedef NS_ENUM(NSUInteger, GPCVEnvironment){
    /// Value to work in PRE-PRODUCTION environments
GPCVPreProduction,
    /// Value to work in PRODUCTION environments
GPCVProduction
};
```