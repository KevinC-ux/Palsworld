 // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Testimonials Slider
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial-card');
        const prevBtn = document.querySelector('.slider-btn.prev');
        const nextBtn = document.querySelector('.slider-btn.next');

        function showTestimonial(index) {
            testimonials.forEach(testimonial => {
                testimonial.classList.remove('active');
            });
            testimonials[index].classList.add('active');
        }

        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }

        function prevTestimonial() {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        }

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', nextTestimonial);
            prevBtn.addEventListener('click', prevTestimonial);
        }

        // Auto-advance testimonials
        setInterval(nextTestimonial, 5000);

        // FAQ Accordion
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });

        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Contact Form Handling
        const contactForm = document.getElementById('contactForm');

        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(contactForm);
                const email = formData.get('email');
                const message = formData.get('message');
                
                // Simple validation
                if (!email || !message) {
                    alert('Please fill in all fields');
                    return;
                }
                
                // Simulate form submission
                alert('Thank you for your message! We\'ll get back to you within 12 hours.');
                contactForm.reset();
            });
        }

        // Scroll Animation for Cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards for animation
        document.querySelectorAll('.service-card, .resource-card, .testimonial-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        // Header Background Change on Scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.background = '#fff';
                navbar.style.backdropFilter = 'none';
            }
        });


         const products = [
            {
                id: 1,
                name: "Luxury Matte Lipstick",
                category: "makeup",
                price: 24.99,
                description: "Long-lasting matte lipstick with rich pigmentation",
                rating: 4.8,
                reviews: 156,
                badge: "Bestseller",
                emoji: "💄",
                keywords: ["lipstick", "matte", "luxury", "makeup", "lips"]
            },
            {
                id: 2,
                name: "Hydrating Face Serum",
                category: "skincare",
                price: 45.00,
                description: "Vitamin C serum for glowing, hydrated skin",
                rating: 4.9,
                reviews: 203,
                badge: "New",
                emoji: "🧴",
                keywords: ["serum", "skincare", "vitamin c", "hydrating", "face"]
            },
            {
                id: 3,
                name: "Full Coverage Foundation",
                category: "makeup",
                price: 32.50,
                description: "24-hour wear foundation with buildable coverage",
                rating: 4.6,
                reviews: 89,
                badge: "",
                emoji: "🎨",
                keywords: ["foundation", "makeup", "coverage", "face", "base"]
            },
            {
                id: 4,
                name: "Rose Gold Eyeshadow Palette",
                category: "makeup",
                price: 38.00,
                description: "12-shade eyeshadow palette with shimmer and matte finishes",
                rating: 4.7,
                reviews: 124,
                badge: "Limited",
                emoji: "✨",
                keywords: ["eyeshadow", "palette", "rose gold", "makeup", "eyes"]
            },
            {
                id: 5,
                name: "Anti-Aging Night Cream",
                category: "skincare",
                price: 52.00,
                description: "Retinol-infused night cream for youthful skin",
                rating: 4.5,
                reviews: 67,
                badge: "",
                emoji: "🌙",
                keywords: ["night cream", "anti-aging", "retinol", "skincare", "moisturizer"]
            },
            {
                id: 6,
                name: "Floral Eau de Parfum",
                category: "fragrance",
                price: 68.00,
                description: "Elegant floral fragrance with notes of jasmine and rose",
                rating: 4.4,
                reviews: 45,
                badge: "",
                emoji: "🌸",
                keywords: ["perfume", "fragrance", "floral", "jasmine", "rose"]
            },
            {
                id: 7,
                name: "Professional Makeup Brush Set",
                category: "tools",
                price: 29.99,
                description: "10-piece professional makeup brush collection",
                rating: 4.6,
                reviews: 98,
                badge: "",
                emoji: "🖌️",
                keywords: ["brushes", "tools", "makeup", "professional", "set"]
            },
            {
                id: 8,
                name: "Gentle Cleansing Foam",
                category: "skincare",
                price: 18.50,
                description: "pH-balanced foam cleanser for all skin types",
                rating: 4.3,
                reviews: 156,
                badge: "",
                emoji: "🧼",
                keywords: ["cleanser", "foam", "gentle", "skincare", "face wash"]
            },
            {
                id: 9,
                name: "Waterproof Mascara",
                category: "makeup",
                price: 22.00,
                description: "Volumizing waterproof mascara for dramatic lashes",
                rating: 4.5,
                reviews: 134,
                badge: "",
                emoji: "👁️",
                keywords: ["mascara", "waterproof", "lashes", "makeup", "eyes"]
            },
            {
                id: 10,
                name: "Citrus Body Mist",
                category: "fragrance",
                price: 15.99,
                description: "Refreshing citrus body spray for everyday wear",
                rating: 4.2,
                reviews: 78,
                badge: "",
                emoji: "🍊",
                keywords: ["body mist", "citrus", "fragrance", "spray", "fresh"]
            },
            {
                id: 11,
                name: "LED Makeup Mirror",
                category: "tools",
                price: 42.00,
                description: "Touch-controlled LED mirror with 3 lighting modes",
                rating: 4.7,
                reviews: 89,
                badge: "Popular",
                emoji: "🪞",
                keywords: ["mirror", "LED", "makeup", "tools", "lighting"]
            },
            {
                id: 12,
                name: "Exfoliating Face Scrub",
                category: "skincare",
                price: 21.50,
                description: "Natural exfoliating scrub with sea salt and oils",
                rating: 4.4,
                reviews: 112,
                badge: "",
                emoji: "🌊",
                keywords: ["scrub", "exfoliating", "face", "skincare", "natural"]
            }
        ];

        // DOM elements
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const productsGrid = document.getElementById('productsGrid');
        const resultsCount = document.getElementById('resultsCount');
        const sortDropdown = document.getElementById('sortDropdown');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const noResults = document.getElementById('noResults');
        const clearSearchBtn = document.getElementById('clearSearchBtn');
        const loadingSpinner = document.getElementById('loadingSpinner');

        // State variables
        let currentProducts = [...products];
        let currentCategory = 'all';
        let currentSearchTerm = '';
        let currentSort = 'name';

        // Initialize the page
        function init() {
            displayProducts(currentProducts);
            setupEventListeners();
        }

        // Setup event listeners
        function setupEventListeners() {
            searchInput.addEventListener('input', handleSearch);
            searchBtn.addEventListener('click', handleSearch);
            sortDropdown.addEventListener('change', handleSort);
            clearSearchBtn.addEventListener('click', clearSearch);

            filterButtons.forEach(btn => {
                btn.addEventListener('click', handleFilter);
            });

            // Enter key search
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    handleSearch();
                }
            });
        }

        // Handle search functionality
        function handleSearch() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            currentSearchTerm = searchTerm;
            
            showLoading();
            
            setTimeout(() => {
                filterAndDisplayProducts();
                hideLoading();
            }, 300);
        }

        // Handle category filtering
        function handleFilter(e) {
            const category = e.target.dataset.category;
            currentCategory = category;

            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            showLoading();
            
            setTimeout(() => {
                filterAndDisplayProducts();
                hideLoading();
            }, 200);
        }

        // Handle sorting
        function handleSort() {
            currentSort = sortDropdown.value;
            showLoading();
            
            setTimeout(() => {
                filterAndDisplayProducts();
                hideLoading();
            }, 200);
        }

        // Filter and display products
        function filterAndDisplayProducts() {
            let filteredProducts = [...products];

            // Filter by category
            if (currentCategory !== 'all') {
                filteredProducts = filteredProducts.filter(product => 
                    product.category === currentCategory
                );
            }

            // Filter by search term
            if (currentSearchTerm) {
                filteredProducts = filteredProducts.filter(product => {
                    const searchFields = [
                        product.name,
                        product.description,
                        product.category,
                        ...product.keywords
                    ].join(' ').toLowerCase();
                    
                    return searchFields.includes(currentSearchTerm);
                });
            }

            // Sort products
            filteredProducts = sortProducts(filteredProducts, currentSort);

            currentProducts = filteredProducts;
            displayProducts(filteredProducts);
            updateResultsCount(filteredProducts.length);
        }

        // Sort products
        function sortProducts(products, sortBy) {
            const sorted = [...products];
            
            switch (sortBy) {
                case 'name':
                    return sorted.sort((a, b) => a.name.localeCompare(b.name));
                case 'price-low':
                    return sorted.sort((a, b) => a.price - b.price);
                case 'price-high':
                    return sorted.sort((a, b) => b.price - a.price);
                case 'rating':
                    return sorted.sort((a, b) => b.rating - a.rating);
                case 'newest':
                    return sorted.sort((a, b) => b.id - a.id);
                default:
                    return sorted;
            }
        }

        // Display products
        function displayProducts(products) {
            if (products.length === 0) {
                productsGrid.style.display = 'none';
                noResults.style.display = 'block';
                return;
            }

            productsGrid.style.display = 'grid';
            noResults.style.display = 'none';

            productsGrid.innerHTML = products.map(product => `
                <div class="product-card" data-product-id="${product.id}">
                    <div class="product-image">
                        ${product.emoji}
                        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <div class="product-rating">
                            <div class="stars">${generateStars(product.rating)}</div>
                            <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
                        </div>
                        <button class="order" onclick="order(${product.id})">
                            Order
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Generate star rating
        function generateStars(rating) {
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 !== 0;
            let stars = '';

            for (let i = 0; i < fullStars; i++) {
                stars += '★';
            }

            if (hasHalfStar) {
                stars += '☆';
            }

            return stars;
        }

        // Update results count
        function updateResultsCount(count) {
            const searchText = currentSearchTerm ? ` for "${currentSearchTerm}"` : '';
            const categoryText = currentCategory !== 'all' ? ` in ${currentCategory}` : '';
            resultsCount.textContent = `Showing ${count} product${count !== 1 ? 's' : ''}${searchText}${categoryText}`;
        }

        // Clear search
        function clearSearch() {
            searchInput.value = '';
            currentSearchTerm = '';
            currentCategory = 'all';
            
            // Reset active filter
            filterButtons.forEach(btn => btn.classList.remove('active'));
            filterButtons[0].classList.add('active');
            
            filterAndDisplayProducts();
        }

        // Show loading
        function showLoading() {
            loadingSpinner.style.display = 'block';
            productsGrid.style.opacity = '0.5';
        }

        // Hide loading
        function hideLoading() {
            loadingSpinner.style.display = 'none';
            productsGrid.style.opacity = '1';
        }

        // Add to cart function
        function order(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                alert(`Added "${product.name}" to cart!`);
                // Here you would typically integrate with your cart system
            }
        }

        // Initialize the application
        init();