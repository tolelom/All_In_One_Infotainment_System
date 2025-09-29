document.addEventListener('DOMContentLoaded', function() {
    const menuButtons = document.querySelectorAll('.menu-button');

    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 버튼 클릭 효과
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // 버튼 타입 확인 및 함수 호출
            const buttonClasses = Array.from(this.classList);
            const buttonType = buttonClasses.find(cls => cls !== 'menu-button');

            if (buttonType) {
                handleMenuClick(buttonType);
            }
        });
    });
});

function handleMenuClick(menuType) {
    console.log(`${menuType} 메뉴가 클릭되었습니다.`);

    switch(menuType) {
        case 'mypage':
            window.location.href = 'portfolio.html';
            break;
        case 'video':
            break;
        case 'games':
            break;
        case 'news':
            break;
        case 'wifi':
            break;
        case 'settings':
            break;
        default:
            console.log('알 수 없는 메뉴 타입:', menuType);
    }
}