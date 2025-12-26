   <!-- JavaScript -->
 
        // 移动菜单切换
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('.nav-links').style.display = 
                document.querySelector('.nav-links').style.display === 'flex' ? 'none' : 'flex';
        });
        
        // FAQ切换
        document.querySelectorAll('.faq-question').forEach(item => {
            item.addEventListener('click', () => {
                const parent = item.parentElement;
                parent.classList.toggle('active');
            });
        });
        
        // 滚动动画
        function checkScroll() {
            const elements = document.querySelectorAll('.fade-in-up');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            });
        }
        
        // 初始设置
        document.querySelectorAll('.fade-in-up').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });
        
        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);
        
        // 会员统计动画
        function animateCounter(element, target, duration) {
            let start = 0;
            const increment = target / (duration / 16); // 60fps
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    element.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(start).toLocaleString();
                }
            }, 16);
        }
        
        // 页面加载后开始动画
        window.addEventListener('load', () => {
            const memberCount = document.querySelector('.member-count strong');
            if (memberCount) {
                animateCounter(memberCount, 5123, 2000);
            }
        });
        
        // 平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
   
