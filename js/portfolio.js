document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar-nav a.nav-link[href^="#"]');
    const scrollContainer = document.querySelector('.portfolio-grid'); // 내부 스크롤 컨테이너

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetID = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetID);
            if (targetElement && scrollContainer) {
                // 포트폴리오 그리드 내 요소 위치
                const containerTop = scrollContainer.getBoundingClientRect().top;
                const elementTop = targetElement.getBoundingClientRect().top;

                // 이동해야 하는 스크롤 거리 (현재 scrollTop + 목적지 위치 차이)
                const scrollTopTarget = scrollContainer.scrollTop + (elementTop - containerTop);

                // 부드럽게 스크롤하기
                scrollContainer.scrollTo({
                    top: scrollTopTarget,
                    behavior: 'smooth'
                });

                /* 모바일 햄버거 메뉴 자동 닫기 처리 (Bootstrap 5) */
                const collapseElement = document.getElementById('portfolioNavbar');
                const bsCollapse = bootstrap.Collapse.getInstance(collapseElement);
                if (bsCollapse && collapseElement.classList.contains('show')) {
                    bsCollapse.hide();
                }
            }
        });
    });
});
