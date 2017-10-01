(async _ => {
  const typedInitDelay = 325;
  const typedDelay = 2000;
  const typedDuration = 500;

  const typedData = ['talks', 'sprints', 'tutorials'];
  
  const typedTextQuery = '.typed-text__dynamic';
  const typedElement = document.querySelector(typedTextQuery);

  const delay = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  };

  const typedUpdate = async (element, text, remove = false) => {
    const letterTypeDelay = typedDuration / (text.length * (remove ? 2 : 1));

    for (let i = 1; i <= text.length; i++) {
      await delay(letterTypeDelay);
      element.innerText = text.slice(0, remove ? (text.length - i) : i);
    }
  };

  const typed = async _ => {
    while (true) {
      for (let text of typedData) {
        await delay(typedInitDelay);
        await typedUpdate(typedElement, text);
        await delay(typedDelay);
        await typedUpdate(typedElement, text, true);
      }
    }
  };

  window.addEventListener('DOMContentLoaded', _ => {
    typed();
  });

})();
