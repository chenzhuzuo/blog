
        // 页面加载完成后执行
        document.addEventListener('DOMContentLoaded', function() {
            // 学习路径步骤动画
            const steps = document.querySelectorAll('.step');
            steps.forEach((step, index) => {
                setTimeout(() => {
                    step.classList.add('active');
                }, index * 300);
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
                        navLinks.style.flexDirection = 'column';
                        navLinks.style.position = 'absolute';
                        navLinks.style.top = '100%';
                        navLinks.style.left = '0';
                        navLinks.style.right = '0';
                        navLinks.style.backgroundColor = 'var(--dark-color)';
                        navLinks.style.padding = '20px';
                        navLinks.style.zIndex = '100';
                    }
                });
            }
            
            // 滚动时导航栏效果
            window.addEventListener('scroll', function() {
                const header = document.querySelector('.elementor-header');
                if (window.scrollY > 50) {
                    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
                } else {
                    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                }
            });
            
            // 卡片悬停效果增强
            const cards = document.querySelectorAll('.elementor-card, .article-card, .video-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = this.classList.contains('elementor-card') 
                        ? 'translateY(-10px)' 
                        : 'translateY(-5px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });
// FAQ交互
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
   
