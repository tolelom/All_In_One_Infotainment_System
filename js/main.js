function handleMenuClick(menuType) {
    console.log(`${menuType} 메뉴가 클릭되었습니다.`);

    switch(menuType) {
        case 'music':
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