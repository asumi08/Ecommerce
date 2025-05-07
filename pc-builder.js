const components = {
    cpu: [
        { id: 101, name: "AMD Ryzen 7 7800X3D", price: 17024, specs: "8-Core, 16-Thread, Up to 5.0GHz", socket: "AM5", tdp: 120 },
        { id: 102, name: "AMD Ryzen 5 7600X", price: 11799, specs: "6-Core, 12-Thread, Up to 5.3GHz", socket: "AM5", tdp: 105 },
        { id: 103, name: "Intel Core i9-14900K", price: 28999, specs: "24-Core (8P+16E), 32-Thread, Up to 6.0GHz", socket: "LGA1700", tdp: 125 },
        { id: 104, name: "Intel Core i5-14600K", price: 15999, specs: "14-Core (6P+8E), 20-Thread, Up to 5.3GHz", socket: "LGA1700", tdp: 125 }
    ],
    motherboard: [
        { id: 201, name: "ASUS ROG Strix X670E-E Gaming", price: 24079.44, specs: "AMD AM5, DDR5, PCIe 5.0, ATX", socket: "AM5", form: "ATX" },
        { id: 202, name: "MSI MPG B650 CARBON WIFI", price: 15499, specs: "AMD AM5, DDR5, PCIe 4.0, ATX", socket: "AM5", form: "ATX" },
        { id: 203, name: "ASUS ROG Maximus Z790 Hero", price: 29999, specs: "Intel LGA1700, DDR5, PCIe 5.0, ATX", socket: "LGA1700", form: "ATX" },
        { id: 204, name: "MSI MAG B760M MORTAR WIFI", price: 9999, specs: "Intel LGA1700, DDR4, PCIe 4.0, mATX", socket: "LGA1700", form: "mATX" }
    ],
    gpu: [
        { id: 301, name: "NVIDIA RTX 4080 SUPER", price: 55999.44, specs: "16GB GDDR6X, 10240 CUDA Cores", power: 320, length: 304 },
        { id: 302, name: "NVIDIA RTX 4070 Ti SUPER", price: 41999, specs: "16GB GDDR6X, 8448 CUDA Cores", power: 285, length: 285 },
        { id: 303, name: "AMD Radeon RX 7900 XTX", price: 49999, specs: "24GB GDDR6, 96 Compute Units", power: 355, length: 287 },
        { id: 304, name: "AMD Radeon RX 7800 XT", price: 31999, specs: "16GB GDDR6, 60 Compute Units", power: 263, length: 267 }
    ],
    ram: [
        { id: 401, name: "Corsair Vengeance RGB DDR5-6000", price: 8999, specs: "32GB (2x16GB), CL36", type: "DDR5" },
        { id: 402, name: "G.Skill Trident Z5 RGB", price: 7499, specs: "32GB (2x16GB), DDR5-6400, CL32", type: "DDR5" },
        { id: 403, name: "Kingston Fury Beast", price: 4999, specs: "32GB (2x16GB), DDR4-3600, CL18", type: "DDR4" },
        { id: 404, name: "Crucial Ballistix", price: 3899, specs: "16GB (2x8GB), DDR4-3200, CL16", type: "DDR4" }
    ],
    storage: [
        { id: 501, name: "Samsung 990 PRO 2TB", price: 11199.44, specs: "M.2 NVMe SSD, PCIe 4.0, 7450MB/s Read" },
        { id: 502, name: "WD Black SN850X 1TB", price: 7999, specs: "M.2 NVMe SSD, PCIe 4.0, 7300MB/s Read" },
        { id: 503, name: "Samsung 870 EVO 2TB", price: 8499, specs: "SATA SSD, 560MB/s Read" },
        { id: 504, name: "Seagate Barracuda 4TB", price: 4999, specs: "HDD, 5400RPM, 256MB Cache" }
    ],
    psu: [
        { id: 601, name: "Corsair RM850x", price: 7499, specs: "850W, 80+ Gold, Fully Modular", watts: 850 },
        { id: 602, name: "EVGA SuperNOVA 750 G5", price: 5999, specs: "750W, 80+ Gold, Fully Modular", watts: 750 },
        { id: 603, name: "Seasonic FOCUS GX-650", price: 4999, specs: "650W, 80+ Gold, Fully Modular", watts: 650 },
        { id: 604, name: "Thermaltake Toughpower GF 1000W", price: 9999, specs: "1000W, 80+ Gold, Fully Modular", watts: 1000 }
    ],
    case: [
        { id: 701, name: "Lian Li PC-O11 Dynamic", price: 6999, specs: "Mid Tower, Tempered Glass, E-ATX Support", form: ["ATX", "mATX", "ITX", "E-ATX"], max_gpu: 420 },
        { id: 702, name: "Corsair 4000D Airflow", price: 4999, specs: "Mid Tower, Mesh Front Panel, ATX", form: ["ATX", "mATX", "ITX"], max_gpu: 360 },
        { id: 703, name: "NZXT H510 Flow", price: 3999, specs: "Mid Tower, Perforated Front, ATX", form: ["ATX", "mATX", "ITX"], max_gpu: 360 },
        { id: 704, name: "Fractal Design Meshify 2", price: 7499, specs: "Mid Tower, High-Airflow, E-ATX Support", form: ["ATX", "mATX", "ITX", "E-ATX"], max_gpu: 467 }
    ],
    cooler: [
        { id: 801, name: "Noctua NH-D15", price: 5999, specs: "Dual Tower, 2x 140mm Fans, Air Cooler", socket: ["AM4", "AM5", "LGA1700", "LGA1200"] },
        { id: 802, name: "Corsair iCUE H150i ELITE CAPELLIX", price: 9999, specs: "360mm AIO, RGB Pump & Fans", socket: ["AM4", "AM5", "LGA1700", "LGA1200"] },
        { id: 803, name: "be quiet! Dark Rock Pro 4", price: 4999, specs: "Dual Tower, Silent Wings Fan, Air Cooler", socket: ["AM4", "AM5", "LGA1700", "LGA1200"] },
        { id: 804, name: "ARCTIC Liquid Freezer II 240", price: 5499, specs: "240mm AIO, VRM Fan, High Efficiency", socket: ["AM4", "AM5", "LGA1700", "LGA1200"] }
    ]
};

let selectedComponents = {
    cpu: null,
    motherboard: null,
    gpu: null,
    ram: null,
    storage: null,
    psu: null,
    case: null,
    cooler: null
};

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;
}

function initComponentButtons() {
    const componentBtns = document.querySelectorAll('.component-btn');
    componentBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const componentType = this.dataset.component;
            openComponentModal(componentType);
        });
    });
}

function openComponentModal(componentType) {
    const modal = document.getElementById(`${componentType}-modal`);
    modal.style.display = 'block';
    
    loadComponentItems(componentType);
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function loadComponentItems(componentType) {
    const itemsContainer = document.getElementById(`${componentType}-items`);
    itemsContainer.innerHTML = '';
    
    components[componentType].forEach(component => {
        const itemElement = document.createElement('div');
        itemElement.className = 'modal-item';
        itemElement.dataset.id = component.id;
        
        itemElement.innerHTML = `
            <div class="modal-item-title">${component.name}</div>
            <div class="modal-item-specs">${component.specs}</div>
            <div class="modal-item-price">₱${component.price.toLocaleString('en-PH')}</div>
        `;
        
        itemElement.addEventListener('click', function() {
            selectComponent(componentType, component);
            document.getElementById(`${componentType}-modal`).style.display = 'none';
        });
        
        itemsContainer.appendChild(itemElement);
    });
}

function selectComponent(type, component) {
    selectedComponents[type] = component;
    document.querySelector(`.component-btn[data-component="${type}"]`).textContent = component.name;
    document.getElementById(`${type}-price`).textContent = `₱${component.price.toLocaleString('en-PH')}`;
    
    updateBuildSummary();
    checkCompatibility();
    updatePerformanceMetrics();
}

function updateBuildSummary() {
    const summaryContainer = document.getElementById('summary-items');
    summaryContainer.innerHTML = '';
    
    let totalPrice = 0;
    let hasComponents = false;
    
    for (const [type, component] of Object.entries(selectedComponents)) {
        if (component) {
            hasComponents = true;
            totalPrice += component.price;
            
            const itemElement = document.createElement('div');
            itemElement.className = 'summary-item';
            itemElement.innerHTML = `
                <div>${component.name}</div>
                <div>₱${component.price.toLocaleString('en-PH')}</div>
            `;
            
            summaryContainer.appendChild(itemElement);
        }
    }
    
    if (!hasComponents) {
        const noComponentsElement = document.createElement('div');
        noComponentsElement.className = 'summary-item';
        noComponentsElement.innerHTML = `
            <div>No components selected</div>
            <div>₱0.00</div>
        `;
        summaryContainer.appendChild(noComponentsElement);
    }
    
    document.getElementById('total-price').textContent = `₱${totalPrice.toLocaleString('en-PH')}`;
}

function checkCompatibility() {
    const infoContainer = document.getElementById('compatibility-info');
    let issues = [];
    
    infoContainer.className = 'compatibility-info';
    
    const { cpu, motherboard, gpu, ram, psu, case: pcCase } = selectedComponents;
    
    if (cpu && motherboard) {
        if (cpu.socket !== motherboard.socket) {
            issues.push(`CPU socket (${cpu.socket}) is not compatible with motherboard socket (${motherboard.socket})`);
        }
    }
    
    if (ram && motherboard) {
        const motherboardDDRType = motherboard.specs.includes('DDR5') ? 'DDR5' : 'DDR4';
        if (ram.type !== motherboardDDRType) {
            issues.push(`RAM type (${ram.type}) is not compatible with motherboard (${motherboardDDRType})`);
        }
    }
    
    if (pcCase && motherboard) {
        if (!pcCase.form.includes(motherboard.form)) {
            issues.push(`Motherboard form factor (${motherboard.form}) not supported by case`);
        }
    }
    
    if (gpu && pcCase) {
        if (gpu.length > pcCase.max_gpu) {
            issues.push(`GPU length (${gpu.length}mm) exceeds case maximum (${pcCase.max_gpu}mm)`);
        }
    }
    
    if (psu && cpu && gpu) {
        const estimatedWattage = cpu.tdp + gpu.power + 150; // Adding 150W for other components
        if (psu.watts < estimatedWattage) {
            issues.push(`Power supply (${psu.watts}W) may be insufficient for estimated system power (${estimatedWattage}W)`);
        }
    }
    
    if (selectedComponents.cooler && cpu) {
        if (!selectedComponents.cooler.socket.includes(cpu.socket)) {
            issues.push(`CPU cooler not compatible with CPU socket (${cpu.socket})`);
        }
    }
    
    if (issues.length === 0) {
        if (Object.values(selectedComponents).some(comp => comp !== null)) {
            infoContainer.classList.add('compatibility-pass');
            infoContainer.innerHTML = '<p><strong>Compatibility:</strong> All components are compatible</p>';
        } else {
            infoContainer.classList.add('compatibility-pass');
            infoContainer.innerHTML = '<p><strong>Compatibility:</strong> Start selecting components to check compatibility</p>';
        }
    } else if (issues.length === 1) {
        infoContainer.classList.add('compatibility-warning');
        infoContainer.innerHTML = `<p><strong>Compatibility Warning:</strong> ${issues[0]}</p>`;
    } else {
        infoContainer.classList.add('compatibility-error');
        infoContainer.innerHTML = `
            <p><strong>Compatibility Issues:</strong></p>
            <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                ${issues.map(issue => `<li>${issue}</li>`).join('')}
            </ul>
        `;
    }
}

function updatePerformanceMetrics() {
    const { cpu, gpu, ram, storage } = selectedComponents;
    
    let gamingScore = 0;
    let productivityScore = 0;
    let contentScore = 0;
    
    if (cpu) {
        const cpuScore = Math.min((cpu.price / 30000) * 100, 40); // CPU contributes up to 40% to each metric
        gamingScore += cpuScore * 0.8; // CPU slightly less important for gaming
        productivityScore += cpuScore;
        contentScore += cpuScore * 1.2; // CPU more important for content creation
    }
    
    if (gpu) {
        const gpuScore = Math.min((gpu.price / 60000) * 100, 50); // GPU contributes up to 50% to each metric
        gamingScore += gpuScore * 1.2; // GPU more important for gaming
        productivityScore += gpuScore * 0.8;
        contentScore += gpuScore;
    }
    
    if (ram) {
        const ramScore = Math.min((ram.price / 10000) * 100, 15); // RAM contributes up to 15% to each metric
        gamingScore += ramScore;
        productivityScore += ramScore * 1.2; // RAM more important for productivity
        contentScore += ramScore * 1.1;
    }
    
    if (storage) {
        const storageScore = Math.min((storage.price / 12000) * 100, 10); // Storage contributes up to 10% to each metric
        gamingScore += storageScore;
        productivityScore += storageScore * 1.1;
        contentScore += storageScore * 0.9;
    }
    
    gamingScore = Math.round(Math.min(gamingScore, 100));
    productivityScore = Math.round(Math.min(productivityScore, 100));
    contentScore = Math.round(Math.min(contentScore, 100));
    
    document.getElementById('gaming-score').textContent = `${gamingScore}/100`;
    document.getElementById('productivity-score').textContent = `${productivityScore}/100`;
    document.getElementById('content-score').textContent = `${contentScore}/100`;
    
    document.getElementById('gaming-meter').style.width = `${gamingScore}%`;
    document.getElementById('productivity-meter').style.width = `${productivityScore}%`;
    document.getElementById('content-meter').style.width = `${contentScore}%`;
}

function addToCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    for (const component of Object.values(selectedComponents)) {
        if (component) {
            const existingItem = cart.find(item => item.id === component.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...component,
                    quantity: 1
                });
            }
        }
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function initCartModal() {
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeCartBtn = document.querySelector('.close-cart-modal');
    const continueShoppingBtn = document.getElementById('continue-shopping');
    const proceedCheckoutBtn = document.getElementById('proceed-checkout');
    
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        openCartModal();
    });
    
    closeCartBtn.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    
    continueShoppingBtn.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    
    proceedCheckoutBtn.addEventListener('click', function() {
        alert('Proceeding to checkout...');
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
}

function openCartModal() {
    const cartModal = document.getElementById('cart-modal');
    loadCartItems();
    cartModal.style.display = 'block';
}

function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        document.getElementById('cart-total-price').textContent = '₱0.00';
        return;
    }
    
    let cartHTML = '';
    let totalPrice = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        cartHTML += `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image">
                    <img src="/api/placeholder/80/80" alt="${item.name}">
               (resp)></div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-specs">${item.specs || ''}</div>
                </div>
                <div class="cart-item-price">₱${item.price.toLocaleString('en-PH')}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="99" data-id="${item.id}">
                    <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
                </div>
                <div class="cart-item-remove" data-id="${item.id}">×</div>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = cartHTML;
    document.getElementById('cart-total-price').textContent = `₱${totalPrice.toLocaleString('en-PH')}`;
    
    addCartItemEventListeners();
}

function addCartItemEventListeners() {
    const decreaseButtons = document.querySelectorAll('.decrease-quantity');
    decreaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            updateCartItemQuantity(id, 'decrease');
        });
    });
    
    const increaseButtons = document.querySelectorAll('.increase-quantity');
    increaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            updateCartItemQuantity(id, 'increase');
        });
    });
    
    const quantityInputs = document.querySelectorAll('.quantity-input');
    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            const id = parseInt(this.dataset.id);
            const newQuantity = parseInt(this.value);
            if (newQuantity > 0) {
                updateCartItemQuantity(id, 'set', newQuantity);
            } else {
                this.value = 1;
                updateCartItemQuantity(id, 'set', 1);
            }
        });
    });
    
    const removeButtons = document.querySelectorAll('.cart-item-remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            removeCartItem(id);
        });
    });
}

function updateCartItemQuantity(id, action, value = null) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === id);
    
    if (itemIndex !== -1) {
        if (action === 'increase') {
            cart[itemIndex].quantity += 1;
        } else if (action === 'decrease') {
            if (cart[itemIndex].quantity > 1) {
                cart[itemIndex].quantity -= 1;
            }
        } else if (action === 'set' && value !== null) {
            cart[itemIndex].quantity = value;
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        loadCartItems();
    }
}

function removeCartItem(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    loadCartItems();
}

window.addEventListener('DOMContentLoaded', () => {
    initComponentButtons();
    updateCartCount();
    initCartModal();
    document.getElementById('add-to-cart-btn').addEventListener('click', addToCart);
});