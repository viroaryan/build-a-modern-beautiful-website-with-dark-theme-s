```javascript
// Add event listener to call-to-action button
document.querySelector('.call-to-action').addEventListener('click', () => {
    // Add animation to call-to-action button
    document.querySelector('.call-to-action').classList.add('animate');
    // Remove animation after 1 second
    setTimeout(() => {
        document.querySelector('.call-to-action').classList.remove('animate');
    }, 1000);
});