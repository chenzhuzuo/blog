  document.addEventListener('DOMContentLoaded', function() {
            // 学习路径步骤动画
            const steps = document.querySelectorAll('.step');
            steps.forEach((step, index) => {
                setTimeout(() => {
                    step.classList.add('active');
                }, index * 200);
            });
            
            // 移动端菜单切换
            const menuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            if (menuBtn) {
                menuBtn.addEventListener('click', function() {
                    if (navLinks.style.display === 'flex') {
                        navLinks.style.display = 'none';
                    } else {
                        navLinks.style.display = 'flex';
                    }
                });
            }
            
            // 滚动时导航栏效果
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
                } else {
                    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                }
            });
            
            // FAQ 交互
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    item.classList.toggle('active');
                    
                    // 关闭其他打开的FAQ
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                });
            });
        });
