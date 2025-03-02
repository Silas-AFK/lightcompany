// Toggle Sidebar
const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

// Open Sidebar
menuIcon.addEventListener('click', () => {
    sidebar.style.transform = 'translateX(0)';
});

// Close Sidebar
closeBtn.addEventListener('click', () => {
    sidebar.style.transform = 'translateX(100%)';
});
