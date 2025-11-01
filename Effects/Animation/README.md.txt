# jQuery Animation Methods — animate(), stop(), finish()
animate() — Moving banners, sliders, progress bars
stop() — Stop animation on user hover
finish() — Skip to final animation state instantly

---

## Methods Covered

| Method | Description | Example |
|:--------|:-------------|:----------|
| **animate()** | Runs a custom animation on CSS properties using numeric values. | `$("#box").animate({ left: "400px" }, 3000);` |
| **stop()** | Immediately stops the currently running animation. | `$("#box").stop();` |
| **finish()** | Instantly completes all animations and jumps to the final state. | `$("#box").finish();` |

---

## Syntax

```js
$(selector).animate(properties, duration, easing, callback);
$(selector).stop(clearQueue, jumpToEnd);
$(selector).finish();


## Use of Methods
animate() – Runs a custom animation on CSS properties.
stop() – Stops the current animation immediately.
finish() – Instantly completes all animations and jumps to the final state.