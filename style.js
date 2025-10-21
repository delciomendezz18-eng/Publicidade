const productsData = {
            "hp": {
                "clicks": 0,
                "models": [
                    { "name": "HP Spectre x360", "price": "€1.299,00" },
                    { "name": "HP Omen 16", "price": "€2.499,00" }
                ]
            },
            "iphone": {
                "clicks": 0,
                "models": [
                    { "name": "iPhone 15 Pro", "price": "€1.199,00" },
                    { "name": "iPhone 15", "price": "€949,00" }
                ]
            }
        };
        
        // Elementos DOM
        const hpClicksElement = document.getElementById("hp-clicks");
        const iphoneClicksElement = document.getElementById("iphone-clicks");
                const totalClicksElement = document.getElementById("total-clicks");
        const notificationElement = document.getElementById("notification");
        
        // Função para mostrar notificação
        function showNotification(productType) {
            const messages = {
                "hp": "Computador HP adicionado ao carrinho!",
                "iphone": "iPhone adicionado ao carrinho!"
            };
            
            notificationElement.textContent = messages[productType];
            notificationElement.classList.add("show");
            
            setTimeout(() => {
                notificationElement.classList.remove("show");
            }, 3000);
        }
        
        // Função para atualizar estatísticas
        function updateStats() {
            hpClicksElement.textContent = productsData.hp.clicks;
            iphoneClicksElement.textContent = productsData.iphone.clicks;
            totalClicksElement.textContent = productsData.hp.clicks + productsData.iphone.clicks;
        }
        
        // Manipulador do botão HP
        function handleHPButton() {
            productsData.hp.clicks++;
            updateStats();
            showNotification("hp");
            
            // Efeito visual adicional
            const button = event.target;
            button.style.transform = "scale(0.95)";
            setTimeout(() => {
                button.style.transform = "scale(1)";
            }, 150);
        }
        
        // Manipulador do botão iPhone
        function handleiPhoneButton() {
            productsData.iphone.clicks++;
            updateStats();
            showNotification("iphone");
            
            // Efeito visual adicional
            const button = event.target;
            button.style.transform = "scale(0.95)";
            setTimeout(() => {
                button.style.transform = "scale(1)";
            }, 150);
        }
        
        // Efeitos de hover nos cards
        document.addEventListener("DOMContentLoaded", function() {
            const cards = document.querySelectorAll(".product-card");
            
            cards.forEach(card => {
                card.addEventListener("mouseenter", function() {
                    this.style.transform = "translateY(-5px)";
                    this.style.boxShadow = "0 15px 40px rgba(0,0,0,0.3)";
                });
                
                card.addEventListener("mouseleave", function() {
                    this.style.transform = "translateY(0)";
                    this.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
                });
            });
            
            // Inicializar estatísticas
            updateStats();
        });
        
        // Animação de contador para as estatísticas
        function animateCounter(element, target) {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 20);
        }
        
        // Atualizar a função updateStats para incluir animação
        const originalUpdateStats = updateStats;
        updateStats = function() {
            animateCounter(hpClicksElement, productsData.hp.clicks);
            animateCounter(iphoneClicksElement, productsData.iphone.clicks);
            animateCounter(totalClicksElement, productsData.hp.clicks + productsData.iphone.clicks);
        };