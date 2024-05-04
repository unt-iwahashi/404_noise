export const randomWord = () => {
  const randomChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+{}|[]\\;\':"<>?,./`~';
  const randomWordElements: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.js-randomWord');

  function getRandomChar(): string {
    return randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }

  function displayRandomWords(element: HTMLParagraphElement) {
    const targetWord: string = element.textContent!;
    let currentIndex: number = 0;

    const interval = setInterval(() => {
      let displayText: string = '';
      let allMatch: boolean = true;

      for (let i = 0; i < targetWord.length; i++) {
        if (i < currentIndex) {
          displayText += targetWord.charAt(i);
        } else {
          const randomChar: string = getRandomChar();
          displayText += randomChar;
          if (randomChar !== targetWord.charAt(i)) {
            allMatch = false;
          }
        }
      }

      element.textContent = displayText;

      if (allMatch) {
        clearInterval(interval);
      } else {
        currentIndex++;
      }
    }, 50);
  }

  randomWordElements.forEach(displayRandomWords);
};
