document.addEventListener('DOMContentLoaded', function() {
    const askButton = document.getElementById('askButton');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const message = document.getElementById('message');
    const responseButtons = document.getElementById('responseButtons');
    const buttonSound = document.getElementById('buttonSound');
    const messageSound = document.getElementById('messageSound');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const yesMusic = document.getElementById('yesMusic');

    // Check if all elements exist
    if (!askButton || !yesButton || !noButton || !message || !responseButtons || !buttonSound || !messageSound || !backgroundMusic || !yesMusic) {
        console.error('One or more elements are missing in the DOM');
        return;
    }

    // Play background music on first interaction
    backgroundMusic.play().catch(error => {
        console.log("Background music play failed:", error);
    });

    askButton.addEventListener('click', function() {
        buttonSound.play().catch(error => {
            console.log("Button sound play failed:", error);
        });
        message.textContent = 'I LOVE YOU AND FOREVER WOULD CHERISH YOU';
        message.classList.remove('hidden');
        responseButtons.classList.remove('hidden');
        message.style.animation = 'bounceIn 1s ease-in-out';
        messageSound.play().catch(error => {
            console.log("Message sound play failed:", error);
        });
    });

    yesButton.addEventListener('click', function() {
        yesMusic.play().catch(error => {
            console.log("Yes music play failed:", error);
        });
        alert('Enjoy the music');
    });

    noButton.addEventListener('click', function() {
        backgroundMusic.pause();
        message.textContent = 'This button doesnt do anything';
        message.style.animation = 'bounceIn 1s ease-in-out';
    });
});
