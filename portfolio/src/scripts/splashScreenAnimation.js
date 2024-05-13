export function splashScreenAnimation() {
    return new Promise((resolve) => {
      let timeoutId = setTimeout(() => {
        resolve(false);
      }, 2000);
  
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          clearTimeout(timeoutId);
          resolve(false);
        }
      }, { once: true });
    });
  }
  