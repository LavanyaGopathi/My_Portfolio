{
    const playingClass = 'playing';

    const playSound = e => {
        const keyCode = e.keyCode,
            keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

        if (!keyElement) return;

        const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
        audioElement.currentTime = 0;
        audioElement.play();

        keyElement.classList.add(playingClass);
    };

    const removeKeyTransition = e => {
        if (e.propertyName !== 'transform') return;

        e.target.classList.remove(playingClass)
    };

    const drumKeys = Array.from(document.querySelectorAll('.key'));

    drumKeys.forEach(key => {
        key.addEventListener('transitionend', removeKeyTransition);
    });

    window.addEventListener('keydown', playSound);

}