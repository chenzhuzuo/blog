  document.addEventListener('DOMContentLoaded', function() {
            // 学习路径步骤动画
            const steps = document.querySelectorAll('.step');
            steps.forEach((step, index) => {
                setTimeout(() => {
                    step.classList.add('active');
                }, index * 400);
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
                        navLinks.style.backgroundColor = 'var(--primary)';
                        navLinks.style.padding = '20px';
                    }
                });
            }
            
            // 滚动时导航栏效果
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.25)';
                } else {
                    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                }
            });
            
            // FAQ交互功能
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    
                    // 关闭所有项目
                    faqItems.forEach(faqItem => {
                        faqItem.classList.remove('active');
                    });
                    
                    // 如果点击的不是当前活动项目，则打开它
                    if (!isActive) {
                        item.classList.add('active');
                    }
                });
            });
            
            // 社群转化跟踪
            document.querySelectorAll('.pricing-btn').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const plan = this.closest('.pricing-plan').querySelector('.plan-name').textContent;
                    
                    // 实际应用中这里会调用GA或其它分析工具
                    console.log(`用户点击了${plan}按钮`);
                    
                    // 模拟跳转到注册页面
                    alert(`即将跳转到${plan}注册页面`);
                });
            });
        });
