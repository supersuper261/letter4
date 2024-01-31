function toggleEnvelope(envelope) {
    envelope.classList.toggle("open");
    // Add or remove 'letter-case-open' class to toggle the opening of the letter case
    document.querySelector('.letter-case').classList.toggle('letter-case-open');
}
