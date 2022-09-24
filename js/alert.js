export const displayAlert = (status, message) => {

    const messageContainer = document.getElementById('message');

    messageContainer.textContent = message;
    messageContainer.className = `is-${status}`;
}