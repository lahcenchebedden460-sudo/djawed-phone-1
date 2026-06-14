// =============================================
// DJAWED PHONE - COMPLETE STORE APP
// =============================================

// ===== DATA STORE =====
let store = {
  products: [],
  cart: [],
  wishlist: [],
  orders: [],
  users: [],
  currentUser: null,
  searchQuery: '',
  filterBrand: '',
  flashTimer: null,
};

// ===== DEFAULT PRODUCTS =====
const defaultProducts = [
  {
    id: 1, name: 'iPhone 15 Pro Max', brand: 'apple', price: 1699000, oldPrice: 1850000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=800&hei=800&fmt=p-jpg&qlt=80&.v=1692845702708',
    rating: 4.8, stock: 12, type: 'phone', isFlash: true,
    specs: ['256GB تخزين', '8GB رام', 'بطارية 4422 mAh', 'شاشة 6.7 بوصة ProMotion', 'كاميرا 48MP Triple', 'A17 Pro Chip'],
    desc: 'أقوى هاتف آبل على الإطلاق بتصميم تيتانيوم فاخر وكاميرا احترافية مذهلة'
  },
  {
    id: 2, name: 'Samsung Galaxy S24 Ultra', brand: 'samsung', price: 1499000, oldPrice: 1799000,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/global/2401/gallery/global-galaxy-s24-ultra-s928-sm-s928bzadeub-thumb-539600700',
    rating: 4.9, stock: 8, type: 'phone', isFlash: false,
    specs: ['256GB تخزين', '12GB رام', 'بطارية 5000 mAh', 'شاشة 6.8 بوصة 120Hz', 'كاميرا 200MP', 'S-Pen مدمج'],
    desc: 'ملك الأندرويد مع قلم S-Pen وكاميرا 200 ميجابكسل للتصوير الاحترافي'
  },
  {
    id: 3, name: 'Xiaomi 14 Pro', brand: 'xiaomi', price: 1199000, oldPrice: null,
    image: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-14-pro/4bec5b00c94ea5218cde58ae6e6be1e0.png',
    rating: 4.7, stock: 15, type: 'phone', isFlash: false,
    specs: ['512GB تخزين', '12GB رام', 'بطارية 4880 mAh', 'شاشة 6.73 بوصة LTPO', 'كاميرا Leica Triple', 'Snapdragon 8 Gen 3'],
    desc: 'معالج Snapdragon 8 Gen 3 وكاميرا Leica الاحترافية بسعر منافس'
  },
  {
    id: 4, name: 'OnePlus 12', brand: 'oneplus', price: 999000, oldPrice: null,
    image: 'https://oasis.opstatics.com/content/dam/oasis/page/2024/global/products/one-plus-12/spec/silky-black.png',
    rating: 4.6, stock: 20, type: 'phone', isFlash: false,
    specs: ['256GB تخزين', '12GB رام', 'بطارية 5400 mAh', 'شاشة 6.82 بوصة', 'كاميرا Hasselblad', 'شحن 100W'],
    desc: 'بطارية ضخمة مع شحن فائق السرعة 100W وكاميرا Hasselblad'
  },
  {
    id: 5, name: 'Samsung Galaxy A55', brand: 'samsung', price: 599000, oldPrice: 650000,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/global/2401/gallery/global-galaxy-a55-5g-sm-a556elbaeub-thumb-539608804',
    rating: 4.4, stock: 30, type: 'phone', isFlash: false,
    specs: ['128GB تخزين', '8GB رام', 'بطارية 5000 mAh', 'شاشة 6.6 بوصة AMOLED', 'كاميرا 50MP Triple', '5G'],
    desc: 'أفضل هاتف متوسط المدى من سامسونج بشاشة Super AMOLED رائعة'
  },
  {
    id: 6, name: 'Xiaomi Redmi Note 13 Pro', brand: 'xiaomi', price: 399000, oldPrice: null,
    image: 'https://i02.appmifile.com/mi-com-product/fly-birds/redmi-note-13-pro-5g/e9b72a2e534c4f2e4a4e0c3e9e0e2c2e.png',
    rating: 4.5, stock: 45, type: 'phone', isFlash: false,
    specs: ['256GB تخزين', '8GB رام', 'بطارية 5000 mAh', 'شاشة 6.67 بوصة AMOLED', 'كاميرا 200MP', '5G'],
    desc: 'كاميرا 200 ميجابكسل بسعر لا يصدق مع شاشة AMOLED فائقة الجودة'
  },
  {
    id: 7, name: 'Realme GT 5 Pro', brand: 'realme', price: 649000, oldPrice: 699000,
    image: 'https://image.realme.com/global/img/product/realme-gt5-pro/white.png',
    rating: 4.5, stock: 18, type: 'phone', isFlash: false,
    specs: ['256GB تخزين', '12GB رام', 'بطارية 5400 mAh', 'شاشة 6.78 بوصة', 'كاميرا Sony IMX890', 'شحن 100W'],
    desc: 'أداء رائع بسعر معقول مع كاميرا Sony وشحن 100W خارق السرعة'
  },
  {
    id: 8, name: 'Tecno Spark 20 Pro', brand: 'tecno', price: 299000, oldPrice: null,
    image: 'https://www.tecno-mobile.com/uploads/media/global/product/Spark20Pro-midnight-shadow-en.png',
    rating: 4.2, stock: 60, type: 'phone', isFlash: false,
    specs: ['256GB تخزين', '8GB رام', 'بطارية 5000 mAh', 'شاشة 6.6 بوصة', 'كاميرا 64MP', 'شحن 18W'],
    desc: 'هاتف اقتصادي ممتاز بمواصفات عالية وسعر في متناول الجميع'
  },
  {
    id: 9, name: 'Infinix Note 40 Pro', brand: 'infinix', price: 349000, oldPrice: 389000,
    image: 'https://de.infinixmobility.com/media/catalog/product/i/n/infinix-note-40-pro-golden-hour.png',
    rating: 4.3, stock: 35, type: 'phone', isFlash: false,
    specs: ['256GB تخزين', '8GB رام', 'بطارية 5000 mAh', 'شاشة 6.78 بوصة AMOLED', 'كاميرا 108MP', 'شحن 100W لاسلكي'],
    desc: 'شحن لاسلكي 100W الأول في فئته مع شاشة AMOLED وكاميرا 108MP'
  },
  {
    id: 10, name: 'iPhone 14', brand: 'apple', price: 1199000, oldPrice: 1350000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=800&hei=800&fmt=p-jpg&qlt=80&.v=1660803972361',
    rating: 4.6, stock: 7, type: 'phone', isFlash: false,
    specs: ['128GB تخزين', '6GB رام', 'بطارية 3279 mAh', 'شاشة 6.1 بوصة Super Retina', 'كاميرا 12MP Dual', 'A15 Bionic'],
    desc: 'آيفون 14 الأنيق بأداء رائع وكاميرا ممتازة بسعر مناسب الآن'
  },
  // Accessories
  {
    id: 101, name: 'سماعة AirPods Pro 2', brand: 'apple', price: 299000, oldPrice: 350000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=600&hei=600&fmt=jpeg&qlt=90&.v=1660803972361',
    rating: 4.8, stock: 25, type: 'accessory', isFlash: false,
    specs: ['إلغاء الضوضاء النشط', 'بطارية 6 ساعات', 'مقاومة للماء IPX4', 'صوت مكاني ثلاثي الأبعاد'],
    desc: 'أفضل سماعات لاسلكية بخاصية إلغاء الضوضاء الاحترافية'
  },
  {
    id: 102, name: 'غطاء سيليكون iPhone 15', brand: 'apple', price: 45000, oldPrice: null,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT0Y3_AV1?wid=600&hei=600&fmt=jpeg&qlt=90',
    rating: 4.5, stock: 100, type: 'accessory', isFlash: false,
    specs: ['متوافق مع iPhone 15', 'سيليكون ناعم عالي الجودة', 'حماية من السقوط', 'متوفر بعدة ألوان'],
    desc: 'غطاء حماية أصلي من آبل بجودة عالية لحماية هاتفك'
  },
  {
    id: 103, name: 'شاحن سريع 65W USB-C', brand: 'xiaomi', price: 35000, oldPrice: null,
    image: 'https://i01.appmifile.com/mi-com-product/fly-birds/mi-65w-charger/charger.png',
    rating: 4.7, stock: 80, type: 'accessory', isFlash: false,
    specs: ['قوة 65W', 'USB-C', 'متوافق مع جميع الهواتف', 'شحن ذكي وآمن'],
    desc: 'شاحن سريع 65W يشحن هاتفك بالكامل في أقل من ساعة'
  },
  {
    id: 104, name: 'سماعة Galaxy Buds 3 Pro', brand: 'samsung', price: 189000, oldPrice: 220000,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/global/2407/gallery/global-galaxy-buds3-pro-sm-r630nzaaxfe-thumb-542048499',
    rating: 4.6, stock: 40, type: 'accessory', isFlash: false,
    specs: ['إلغاء الضوضاء النشط', 'بطارية 6+26 ساعات', 'مقاومة الماء IPX7', 'صوت Dolby Atmos'],
    desc: 'سماعات سامسونج المتطورة بجودة صوت رائعة ومقاومة ممتازة'
  },
];

// ===== INIT =====
function init() {
  loadStore();
  if (store.products.length === 0) {
    store.products = defaultProducts;
    saveStore();
  }
  renderProducts();
  renderAccessories();
  updateFlashOffer();
  startFlashTimer();
  updateCounts();
  checkAuthState();
  setupScrollBehavior();
  // Admin default user
  if (!store.users.find(u => u.email === 'admin@djawed.com')) {
    store.users.push({ id: 'admin', name: 'Admin', email: 'admin@djawed.com', password: 'admin123', phone: '0555123456', role: 'admin', joinDate: new Date().toLocaleDateString('ar-DZ'), orders: [] });
    saveStore();
  }
}

// ===== LOCAL STORAGE =====
function loadStore() {
  try {
    const data = localStorage.getItem('djawed_store');
    if (data) {
      const parsed = JSON.parse(data);
      store.products = parsed.products || [];
      store.cart = parsed.cart || [];
      store.wishlist = parsed.wishlist || [];
      store.orders = parsed.orders || [];
      store.users = parsed.users || [];
      const uid = localStorage.getItem('djawed_user');
      if (uid) store.currentUser = store.users.find(u => u.id === uid) || null;
    }
  } catch(e) {}
}

function saveStore() {
  try {
    localStorage.setItem('djawed_store', JSON.stringify({
      products: store.products, cart: store.cart,
      wishlist: store.wishlist, orders: store.orders, users: store.users
    }));
  } catch(e) {}
}

// ===== RENDER PRODUCTS =====
function renderProducts(products, containerId = 'productsGrid') {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  const list = products || store.products.filter(p => p.type === 'phone');
  if (list.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:#999"><i class="fas fa-search" style="font-size:40px;display:block;margin-bottom:12px;color:#ddd"></i>لا توجد منتجات</div>';
    return;
  }
  grid.innerHTML = list.map(p => productCard(p)).join('');
}

function renderAccessories() {
  const grid = document.getElementById('accessoriesGrid');
  if (!grid) return;
  const accs = store.products.filter(p => p.type === 'accessory');
  grid.innerHTML = accs.map(p => productCard(p)).join('');
}

function productCard(p) {
  const discount = p.oldPrice ? Math.round((1 - p.price/p.oldPrice)*100) : 0;
  const isWished = store.wishlist.includes(p.id);
  const stars = renderStars(p.rating);
  const specMini = p.specs && p.specs[0] ? p.specs[0] : '';
  const stockBadge = p.stock === 0 ? '<span class="badge-out">نفذ</span>' : p.isFlash || discount > 5 ? '<span class="badge-new">جديد</span>' : '';
  const discountBadge = discount > 5 ? `<span class="badge-discount">-${discount}%</span>` : '';
  return `
  <div class="product-card" onclick="openProduct(${p.id})" id="card-${p.id}">
    <div class="product-card-badge">${stockBadge}${discountBadge}</div>
    <button class="product-wishlist-btn ${isWished?'active':''}" onclick="toggleWishlist(event,${p.id})">
      <i class="fa${isWished?'s':'r'} fa-heart"></i>
    </button>
    <div class="product-image-wrap">
      <img src="${p.image}" alt="${p.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23f5f5f5%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 fill=%22%23ccc%22 font-size=%2250%22>📱</text></svg>'">
    </div>
    <div class="product-info">
      <div class="product-brand">${getBrandLabel(p.brand)}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-specs-mini">${specMini}</div>
      <div class="product-rating">
        <span class="stars">${stars}</span>
        <span class="rating-val">${p.rating}</span>
      </div>
      <div class="product-price">
        <span class="price-new">${formatPrice(p.price)}</span>
        ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ''}
        ${discount>5 ? `<span class="price-discount">-${discount}%</span>` : ''}
      </div>
      <div class="product-actions">
        <button class="btn-add-cart" onclick="addToCart(event,${p.id})" ${p.stock===0?'disabled':''}>
          <i class="fas fa-cart-plus"></i> ${p.stock===0?'نفذ المخزون':'أضف للسلة'}
        </button>
        <button class="btn-details" onclick="openProduct(${p.id});event.stopPropagation()" title="عرض التفاصيل">
          <i class="fas fa-eye"></i>
        </button>
      </div>
    </div>
  </div>`;
}

function getBrandLabel(b) {
  const map = { apple:'Apple', samsung:'Samsung', xiaomi:'Xiaomi', realme:'Realme', tecno:'Tecno', infinix:'Infinix', oneplus:'OnePlus' };
  return map[b] || b;
}
function formatPrice(n) { return n.toLocaleString('ar-DZ') + ' دج'; }
function renderStars(r) {
  const full = Math.floor(r), half = r % 1 >= 0.5;
  let s = '';
  for(let i=0;i<full;i++) s += '<i class="fas fa-star"></i>';
  if(half) s += '<i class="fas fa-star-half-alt"></i>';
  for(let i=full+(half?1:0);i<5;i++) s += '<i class="far fa-star"></i>';
  return s;
}

// ===== FLASH OFFER =====
function updateFlashOffer() {
  const flashProducts = store.products.filter(p => p.isFlash && p.type === 'phone');
  const p = flashProducts[0] || store.products[0];
  if (!p) return;
  const discount = p.oldPrice ? Math.round((1 - p.price/p.oldPrice)*100) : 0;
  const el = document.getElementById('flashProduct');
  if (!el) return;
  el.innerHTML = `
    <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'">
    <h3>${p.name}</h3>
    <div class="flash-specs">${p.specs && p.specs[0] ? p.specs[0] : ''}</div>
    <div class="flash-prices">
      ${p.oldPrice ? `<div class="old-price">${formatPrice(p.oldPrice)}</div>` : ''}
      <div class="new-price">${formatPrice(p.price)}</div>
    </div>
    <button class="btn-white" onclick="addToCart(event,${p.id})"><i class="fas fa-cart-plus"></i> اطلب الآن</button>
  `;
}

function startFlashTimer() {
  let totalSecs = 8 * 3600 + 32 * 60 + 15;
  const tick = () => {
    if (totalSecs <= 0) { totalSecs = 24*3600; }
    totalSecs--;
    const h = Math.floor(totalSecs/3600);
    const m = Math.floor((totalSecs%3600)/60);
    const s = totalSecs%60;
    const pad = n => String(n).padStart(2,'0');
    const th = document.getElementById('timerH');
    const tm = document.getElementById('timerM');
    const ts = document.getElementById('timerS');
    if (th) th.textContent = pad(h);
    if (tm) tm.textContent = pad(m);
    if (ts) ts.textContent = pad(s);
  };
  if (store.flashTimer) clearInterval(store.flashTimer);
  store.flashTimer = setInterval(tick, 1000);
}

// ===== CART =====
function addToCart(e, id) {
  if (e) e.stopPropagation();
  const p = store.products.find(x => x.id === id);
  if (!p || p.stock === 0) return;
  const existing = store.cart.find(x => x.id === id);
  if (existing) {
    if (existing.qty >= p.stock) { showToast('وصلت للحد الأقصى المتاح', 'error'); return; }
    existing.qty++;
  } else {
    store.cart.push({ id, qty: 1 });
  }
  saveStore();
  updateCounts();
  showToast(`<i class="fas fa-check"></i> تمت إضافة ${p.name} للسلة`, 'success');
}

function removeFromCart(id) {
  store.cart = store.cart.filter(x => x.id !== id);
  saveStore();
  updateCounts();
  renderCart();
}

function updateQty(id, delta) {
  const item = store.cart.find(x => x.id === id);
  const p = store.products.find(x => x.id === id);
  if (!item) return;
  item.qty = Math.max(1, Math.min(item.qty + delta, p ? p.stock : 99));
  if (item.qty === 0) removeFromCart(id);
  saveStore();
  updateCounts();
  renderCart();
}

function openCart() {
  renderCart();
  openModal('cartModal');
}

function renderCart() {
  const el = document.getElementById('cartModalBody');
  if (!el) return;
  if (store.cart.length === 0) {
    el.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-cart"></i><p>السلة فارغة</p></div>';
    return;
  }
  let total = 0;
  let itemsHtml = store.cart.map(ci => {
    const p = store.products.find(x => x.id === ci.id);
    if (!p) return '';
    const sub = p.price * ci.qty;
    total += sub;
    return `
    <div class="cart-item">
      <img class="cart-item-img" src="${p.image}" alt="${p.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23f5f5f5%22/><text x=%2250%25%22 y=%2255%25%22 text-anchor=%22middle%22 fill=%22%23ccc%22 font-size=%2230%22>📱</text></svg>'">
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">${formatPrice(p.price)} × ${ci.qty} = ${formatPrice(sub)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQty(${p.id},-1)">−</button>
          <span class="qty-val">${ci.qty}</span>
          <button class="qty-btn" onclick="updateQty(${p.id},1)">+</button>
        </div>
      </div>
      <button class="cart-remove" onclick="removeFromCart(${p.id})" title="حذف"><i class="fas fa-trash"></i></button>
    </div>`;
  }).join('');
  el.innerHTML = `
    <div class="cart-items">${itemsHtml}</div>
    <div class="cart-total">
      <strong>الإجمالي:</strong>
      <span class="total-price">${formatPrice(total)}</span>
    </div>
    <button class="btn-red full-width" onclick="closeModal('cartModal'); openModal('checkoutModal'); renderCheckoutSummary()">
      <i class="fas fa-credit-card"></i> إتمام الطلب
    </button>`;
}

function renderCheckoutSummary() {
  const el = document.getElementById('checkoutSummary');
  if (!el) return;
  let total = 0;
  let rows = store.cart.map(ci => {
    const p = store.products.find(x => x.id === ci.id);
    if (!p) return '';
    const sub = p.price * ci.qty;
    total += sub;
    return `<div class="summary-row"><span>${p.name} ×${ci.qty}</span><span>${formatPrice(sub)}</span></div>`;
  }).join('');
  el.innerHTML = `
    <div style="font-weight:700;margin-bottom:8px;font-size:14px">ملخص الطلب</div>
    ${rows}
    <div class="summary-row summary-total"><strong>الإجمالي</strong><strong>${formatPrice(total)}</strong></div>`;

  // Prefill user data
  if (store.currentUser) {
    const n = document.getElementById('coName');
    const ph = document.getElementById('coPhone');
    if (n) n.value = store.currentUser.name;
    if (ph) ph.value = store.currentUser.phone;
  }
}

// ===== WISHLIST =====
function toggleWishlist(e, id) {
  if (e) e.stopPropagation();
  const idx = store.wishlist.indexOf(id);
  if (idx > -1) {
    store.wishlist.splice(idx, 1);
    showToast('تم الحذف من المفضلة', 'success');
  } else {
    store.wishlist.push(id);
    showToast('<i class="fas fa-heart"></i> تمت الإضافة للمفضلة', 'success');
  }
  saveStore();
  updateCounts();
  // Update card button
  const btn = document.querySelector(`#card-${id} .product-wishlist-btn`);
  if (btn) {
    const isWished = store.wishlist.includes(id);
    btn.className = `product-wishlist-btn ${isWished?'active':''}`;
    btn.innerHTML = `<i class="fa${isWished?'s':'r'} fa-heart"></i>`;
  }
}

function renderWishlist() {
  const el = document.getElementById('wishlistModalBody');
  if (!el) return;
  if (store.wishlist.length === 0) {
    el.innerHTML = '<div class="cart-empty"><i class="fas fa-heart" style="color:#ffcdd2"></i><p>قائمة المفضلة فارغة</p></div>';
    return;
  }
  const items = store.wishlist.map(id => {
    const p = store.products.find(x => x.id === id);
    if (!p) return '';
    return `
    <div class="wishlist-item">
      <img src="${p.image}" alt="${p.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23f5f5f5%22/></svg>'">
      <div class="wishlist-item-info">
        <h4>${p.name}</h4>
        <div class="price">${formatPrice(p.price)}</div>
        <button class="btn-add-cart" style="font-size:12px;padding:6px 12px;margin-top:6px" onclick="addToCart(null,${id})"><i class="fas fa-cart-plus"></i> أضف للسلة</button>
      </div>
      <button class="wishlist-remove" onclick="toggleWishlist(null,${id});renderWishlist()"><i class="fas fa-times"></i></button>
    </div>`;
  }).join('');
  el.innerHTML = `<div class="wishlist-grid">${items}</div>`;
}

// ===== ORDERS =====
function placeOrder() {
  const name = document.getElementById('coName')?.value.trim();
  const phone = document.getElementById('coPhone')?.value.trim();
  const wilaya = document.getElementById('coWilaya')?.value;
  const address = document.getElementById('coAddress')?.value.trim();
  const payment = document.querySelector('input[name="payment"]:checked')?.value;
  const errEl = document.getElementById('checkoutError');

  if (!name || !phone || !wilaya || !address) {
    if (errEl) { errEl.style.display='block'; errEl.textContent='يرجى ملء جميع الحقول المطلوبة'; }
    return;
  }
  if (store.cart.length === 0) {
    if (errEl) { errEl.style.display='block'; errEl.textContent='السلة فارغة'; }
    return;
  }

  let total = 0;
  const items = store.cart.map(ci => {
    const p = store.products.find(x => x.id === ci.id);
    total += (p?.price||0) * ci.qty;
    return { id: ci.id, name: p?.name||'', qty: ci.qty, price: p?.price||0 };
  });

  const orderId = 'ORD-' + Date.now();
  const order = {
    id: orderId, customer: name, phone, wilaya, address,
    payment: payment === 'cash' ? 'الدفع عند الاستلام' : 'دفع إلكتروني',
    items, total, status: 'pending',
    statusLabel: 'قيد الانتظار',
    date: new Date().toLocaleDateString('ar-DZ'),
    userId: store.currentUser?.id || null
  };

  store.orders.push(order);

  // Reduce stock
  store.cart.forEach(ci => {
    const p = store.products.find(x => x.id === ci.id);
    if (p) p.stock = Math.max(0, p.stock - ci.qty);
  });

  // Link to user
  if (store.currentUser) {
    if (!store.currentUser.orders) store.currentUser.orders = [];
    store.currentUser.orders.push(orderId);
  }

  store.cart = [];
  saveStore();
  updateCounts();
  closeModal('checkoutModal');
  showToast(`<i class="fas fa-check-circle"></i> تم تأكيد طلبك! رقم الطلب: ${orderId}`, 'success');

  // Show order confirmation
  setTimeout(() => {
    const msg = `تم تأكيد طلبك بنجاح!\n\nرقم الطلب: ${orderId}\nالإجمالي: ${formatPrice(total)}\nطريقة الدفع: ${order.payment}\n\nسيتم التواصل معك قريباً على: ${phone}`;
    if (confirm(msg + '\n\nهل تريد تتبع طلبك؟')) {
      document.getElementById('trackingInput').value = orderId;
      trackOrder();
    }
  }, 500);
}

function renderOrders() {
  const el = document.getElementById('ordersModalBody');
  if (!el) return;
  let userOrders = store.orders.filter(o => store.currentUser && o.userId === store.currentUser.id);
  if (!store.currentUser) userOrders = [];
  if (userOrders.length === 0) {
    el.innerHTML = '<div class="cart-empty"><i class="fas fa-box" style="color:#ddd;font-size:50px;display:block;margin-bottom:12px"></i><p>لا توجد طلبات حتى الآن</p></div>';
    return;
  }
  el.innerHTML = userOrders.reverse().map(o => {
    const statusClass = { pending:'status-pending', confirmed:'status-confirmed', shipped:'status-shipped', delivered:'status-delivered' }[o.status] || 'status-pending';
    const itemsList = o.items.map(i => `<div class="order-item"><span>${i.name} ×${i.qty}</span><span>${formatPrice(i.price*i.qty)}</span></div>`).join('');
    return `
    <div class="order-card">
      <div class="order-header">
        <span class="order-id">🧾 ${o.id}</span>
        <span class="order-status ${statusClass}">${o.statusLabel}</span>
      </div>
      ${itemsList}
      <div class="order-footer">
        <span>📅 ${o.date}</span>
        <strong>${formatPrice(o.total)}</strong>
      </div>
    </div>`;
  }).join('');
}

function trackOrder() {
  const id = document.getElementById('trackingInput')?.value.trim();
  if (!id) return;
  const o = store.orders.find(x => x.id === id);
  if (!o) {
    showToast('رقم الطلب غير موجود', 'error');
    return;
  }
  const statusLabels = { pending:'⏳ قيد الانتظار', confirmed:'✅ تم التأكيد', shipped:'🚚 في الطريق', delivered:'📦 تم التسليم' };
  showToast(`طلب ${o.id}: ${statusLabels[o.status] || o.status}`, 'success');
}

// ===== PRODUCT DETAIL =====
function openProduct(id) {
  const p = store.products.find(x => x.id === id);
  if (!p) return;
  const discount = p.oldPrice ? Math.round((1-p.price/p.oldPrice)*100) : 0;
  const specsHtml = (p.specs || []).map(s => {
    const parts = s.split(' ');
    const val = parts[0], label = parts.slice(1).join(' ');
    return `<div class="spec-row"><span class="spec-label">${label}</span><span class="spec-val">${val}</span></div>`;
  }).join('');
  const stockInfo = p.stock === 0 ? '<span class="stock-out">نفذ من المخزون</span>' : p.stock < 5 ? `<span class="stock-low">⚠️ متبقي ${p.stock} فقط</span>` : `<span class="stock-in">✅ متوفر (${p.stock})</span>`;
  document.getElementById('productModalTitle').textContent = p.name;
  document.getElementById('productModalBody').innerHTML = `
    <div class="product-detail-grid">
      <div class="product-detail-image">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22250%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23f5f5f5%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 fill=%22%23ccc%22 font-size=%2260%22>📱</text></svg>'">
      </div>
      <div class="product-detail-info">
        <div class="product-brand" style="font-size:12px;color:#999;font-weight:700;margin-bottom:6px">${getBrandLabel(p.brand)}</div>
        <h2>${p.name}</h2>
        <div class="product-rating" style="margin:8px 0"><span class="stars">${renderStars(p.rating)}</span> <span style="color:#999;font-size:13px">${p.rating}</span></div>
        <div>${stockInfo}</div>
        <div class="product-price" style="margin:12px 0">
          <span class="price-new" style="font-size:24px">${formatPrice(p.price)}</span>
          ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ''}
          ${discount>5 ? `<span class="price-discount">-${discount}%</span>` : ''}
        </div>
        ${p.desc ? `<p style="font-size:13px;color:#666;margin-bottom:12px;line-height:1.7">${p.desc}</p>` : ''}
        <div class="product-detail-specs">${specsHtml}</div>
        <div class="qty-selector">
          <label>الكمية:</label>
          <button class="qty-btn" onclick="adjustDetailQty(-1)">−</button>
          <span class="qty-val" id="detailQty">1</span>
          <button class="qty-btn" onclick="adjustDetailQty(1)">+</button>
        </div>
        <div style="display:flex;gap:10px;margin-top:4px">
          <button class="btn-add-cart" style="flex:2" onclick="addToCartDetail(${p.id})" ${p.stock===0?'disabled':''}>
            <i class="fas fa-cart-plus"></i> أضف للسلة
          </button>
          <button class="btn-details" onclick="toggleWishlist(null,${p.id})" style="flex:1">
            <i class="fa${store.wishlist.includes(p.id)?'s':'r'} fa-heart" style="color:var(--red)"></i>
          </button>
        </div>
      </div>
    </div>`;
  openModal('productModal');
}

let detailQty = 1;
function adjustDetailQty(d) {
  detailQty = Math.max(1, detailQty + d);
  const el = document.getElementById('detailQty');
  if (el) el.textContent = detailQty;
}
function addToCartDetail(id) {
  const p = store.products.find(x => x.id === id);
  if (!p) return;
  for(let i=0;i<detailQty;i++) addToCart(null, id);
  detailQty = 1;
  closeModal('productModal');
}

// ===== SEARCH =====
function liveSearch(query) {
  const dropdown = document.getElementById('searchDropdown');
  if (!query || query.length < 2) { dropdown.style.display='none'; return; }
  const results = store.products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    getBrandLabel(p.brand).toLowerCase().includes(query.toLowerCase())
  ).slice(0, 6);
  if (results.length === 0) { dropdown.style.display='none'; return; }
  dropdown.innerHTML = results.map(p => `
    <div class="search-dropdown-item" onclick="openProduct(${p.id});document.getElementById('searchDropdown').style.display='none';document.getElementById('headerSearch').value=''">
      <img src="${p.image}" alt="${p.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23f5f5f5%22/></svg>'">
      <div class="item-info">
        <div class="item-name">${p.name}</div>
        <div class="item-price">${formatPrice(p.price)}</div>
      </div>
    </div>`).join('');
  dropdown.style.display='block';
}

function doSearch() {
  const query = document.getElementById('headerSearch')?.value.trim();
  if (!query) return;
  showSearchResults(query);
}

function showAllProducts() {
  showSearchResults('', 'جميع الهواتف');
}

function filterByBrand(brand) {
  const brandNames = { apple:'Apple', samsung:'Samsung', xiaomi:'Xiaomi', realme:'Realme', tecno:'Tecno', infinix:'Infinix', oneplus:'OnePlus', all:'جميع الهواتف' };
  showSearchResults(brand === 'all' ? '' : null, brandNames[brand] || brand, brand === 'all' ? '' : brand);
  // Update brand buttons
  document.querySelectorAll('.brand-btn').forEach(btn => btn.classList.remove('active'));
}

function showSearchResults(query, title, brandFilter) {
  store.searchQuery = query || '';
  const overlay = document.getElementById('searchResultsPage');
  if (!overlay) return;
  overlay.style.display='block';
  document.body.style.overflow='hidden';
  document.getElementById('searchResultsTitle').textContent = title || `نتائج: "${query}"`;
  if (brandFilter !== undefined) document.getElementById('filterBrand').value = brandFilter || '';
  applyFilters(query);
}

function applyFilters(queryOverride) {
  const query = queryOverride !== undefined ? queryOverride : store.searchQuery;
  const brand = document.getElementById('filterBrand')?.value;
  const minPrice = parseInt(document.getElementById('filterMinPrice')?.value) || 0;
  const maxPrice = parseInt(document.getElementById('filterMaxPrice')?.value) || Infinity;
  const sort = document.getElementById('filterSort')?.value;

  let results = store.products.filter(p => {
    const matchQ = !query || p.name.toLowerCase().includes(query.toLowerCase()) || getBrandLabel(p.brand).toLowerCase().includes(query.toLowerCase());
    const matchB = !brand || p.brand === brand;
    const matchP = p.price >= minPrice && p.price <= maxPrice;
    return matchQ && matchB && matchP;
  });

  if (sort === 'price-asc') results.sort((a,b) => a.price - b.price);
  else if (sort === 'price-desc') results.sort((a,b) => b.price - a.price);
  else if (sort === 'rating') results.sort((a,b) => b.rating - a.rating);

  renderProducts(results, 'searchResultsGrid');
}

function closeSearchResults() {
  document.getElementById('searchResultsPage').style.display='none';
  document.body.style.overflow='';
  document.getElementById('headerSearch').value='';
}

// ===== AUTH =====
function login() {
  const email = document.getElementById('loginEmail')?.value.trim();
  const password = document.getElementById('loginPassword')?.value;
  const errEl = document.getElementById('loginError');

  const user = store.users.find(u => u.email === email && u.password === password);
  if (!user) {
    if (errEl) { errEl.style.display='block'; errEl.textContent='البريد الإلكتروني أو كلمة المرور غير صحيحة'; }
    return;
  }
  store.currentUser = user;
  localStorage.setItem('djawed_user', user.id);
  closeModal('loginModal');
  checkAuthState();
  showToast(`<i class="fas fa-user-check"></i> مرحباً ${user.name}!`, 'success');
}

function register() {
  const name = document.getElementById('regName')?.value.trim();
  const phone = document.getElementById('regPhone')?.value.trim();
  const email = document.getElementById('regEmail')?.value.trim();
  const password = document.getElementById('regPassword')?.value;
  const errEl = document.getElementById('regError');
  const succEl = document.getElementById('regSuccess');

  if (!name || !phone || !email || !password) {
    if (errEl) { errEl.style.display='block'; errEl.textContent='يرجى ملء جميع الحقول'; succEl.style.display='none'; }
    return;
  }
  if (password.length < 6) {
    if (errEl) { errEl.style.display='block'; errEl.textContent='كلمة المرور يجب أن تكون 6 أحرف على الأقل'; }
    return;
  }
  if (store.users.find(u => u.email === email)) {
    if (errEl) { errEl.style.display='block'; errEl.textContent='البريد الإلكتروني مستخدم مسبقاً'; }
    return;
  }
  const user = { id: 'u_' + Date.now(), name, phone, email, password, role: 'user', joinDate: new Date().toLocaleDateString('ar-DZ'), orders: [] };
  store.users.push(user);
  store.currentUser = user;
  localStorage.setItem('djawed_user', user.id);
  saveStore();
  if (errEl) errEl.style.display='none';
  if (succEl) { succEl.style.display='block'; succEl.textContent='تم إنشاء الحساب بنجاح!'; }
  setTimeout(() => { closeModal('registerModal'); checkAuthState(); showToast(`<i class="fas fa-check-circle"></i> مرحباً ${name}! تم إنشاء حسابك`, 'success'); }, 1000);
}

function logout() {
  store.currentUser = null;
  localStorage.removeItem('djawed_user');
  checkAuthState();
  showToast('تم تسجيل الخروج', 'success');
}

function checkAuthState() {
  const guest = document.getElementById('userMenuGuest');
  const loggedIn = document.getElementById('userMenuLoggedIn');
  const admin = document.getElementById('userMenuAdmin');
  const infoEl = document.getElementById('userInfoMenu');
  if (store.currentUser) {
    if (guest) guest.style.display='none';
    if (store.currentUser.role === 'admin') {
      if (loggedIn) loggedIn.style.display='none';
      if (admin) admin.style.display='block';
    } else {
      if (loggedIn) loggedIn.style.display='block';
      if (admin) admin.style.display='none';
      if (infoEl) infoEl.textContent = `👤 ${store.currentUser.name}`;
    }
  } else {
    if (guest) guest.style.display='block';
    if (loggedIn) loggedIn.style.display='none';
    if (admin) admin.style.display='none';
  }
}

// ===== ADMIN =====
function openAdmin() {
  if (!store.currentUser || store.currentUser.role !== 'admin') {
    showToast('غير مصرح لك بالوصول', 'error');
    return;
  }
  document.getElementById('adminPanel').style.display='flex';
  document.body.style.overflow='hidden';
  renderAdminProducts();
  renderAdminOrders();
  renderAdminCustomers();
  renderAdminStats();
}

function closeAdmin() {
  document.getElementById('adminPanel').style.display='none';
  document.body.style.overflow='';
  renderProducts();
  renderAccessories();
  updateFlashOffer();
}

function showAdminTab(tab) {
  document.querySelectorAll('.admin-tab').forEach(el => el.style.display='none');
  document.querySelectorAll('.admin-nav-item').forEach(el => el.classList.remove('active'));
  document.getElementById(`tab-${tab}`).style.display='block';
  event.currentTarget.classList.add('active');
}

function renderAdminProducts() {
  const tbody = document.getElementById('adminProductsBody');
  if (!tbody) return;
  tbody.innerHTML = store.products.map(p => `
    <tr>
      <td><img src="${p.image}" alt="${p.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2250%22 height=%2250%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23f5f5f5%22/></svg>'"></td>
      <td><strong>${p.name}</strong></td>
      <td>${formatPrice(p.price)}</td>
      <td>${p.oldPrice ? `<del>${formatPrice(p.oldPrice)}</del>` : '—'}</td>
      <td>${getBrandLabel(p.brand)}</td>
      <td><span class="${p.stock===0?'stock-out':p.stock<5?'stock-low':'stock-in'}">${p.stock}</span></td>
      <td>${p.type === 'phone' ? '📱 هاتف' : '🎧 إكسسوار'}</td>
      <td>
        <div class="admin-actions">
          <button class="btn-edit" onclick="editProduct(${p.id})"><i class="fas fa-edit"></i> تعديل</button>
          <button class="btn-delete" onclick="deleteProduct(${p.id})"><i class="fas fa-trash"></i> حذف</button>
        </div>
      </td>
    </tr>`).join('');
}

function renderAdminOrders() {
  const tbody = document.getElementById('adminOrdersBody');
  if (!tbody) return;
  if (store.orders.length === 0) { tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;padding:30px;color:#999">لا توجد طلبات</td></tr>'; return; }
  const statusOpts = ['pending','confirmed','shipped','delivered'].map(s => `<option value="${s}">${{pending:'قيد الانتظار',confirmed:'تم التأكيد',shipped:'في الطريق',delivered:'تم التسليم'}[s]}</option>`).join('');
  tbody.innerHTML = [...store.orders].reverse().map(o => `
    <tr>
      <td><strong>${o.id}</strong></td>
      <td>${o.customer}</td>
      <td>${o.phone}</td>
      <td>${o.items.map(i=>i.name+'×'+i.qty).join('<br>')}</td>
      <td><strong>${formatPrice(o.total)}</strong></td>
      <td>${o.payment}</td>
      <td>
        <select onchange="updateOrderStatus('${o.id}',this.value)" style="padding:5px 8px;border:2px solid #eee;border-radius:6px;font-family:Cairo,sans-serif;font-size:12px">
          ${['pending','confirmed','shipped','delivered'].map(s=>`<option value="${s}" ${o.status===s?'selected':''}>${{pending:'قيد الانتظار',confirmed:'تم التأكيد',shipped:'في الطريق',delivered:'تم التسليم'}[s]}</option>`).join('')}
        </select>
      </td>
      <td>${o.date}</td>
    </tr>`).join('');
}

function updateOrderStatus(id, status) {
  const o = store.orders.find(x => x.id === id);
  if (o) { o.status = status; o.statusLabel = {pending:'قيد الانتظار',confirmed:'تم التأكيد',shipped:'في الطريق',delivered:'تم التسليم'}[status]; }
  saveStore();
  showToast('تم تحديث حالة الطلب', 'success');
}

function renderAdminCustomers() {
  const tbody = document.getElementById('adminCustomersBody');
  if (!tbody) return;
  const customers = store.users.filter(u => u.role !== 'admin');
  if (customers.length === 0) { tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:30px;color:#999">لا يوجد عملاء</td></tr>'; return; }
  tbody.innerHTML = customers.map(u => `
    <tr>
      <td><strong>${u.name}</strong></td>
      <td>${u.email}</td>
      <td>${u.phone}</td>
      <td>${u.joinDate}</td>
      <td>${(u.orders||[]).length}</td>
    </tr>`).join('');
}

function renderAdminStats() {
  const el = document.getElementById('adminStatsCards');
  if (!el) return;
  const totalRevenue = store.orders.reduce((s,o) => s + o.total, 0);
  const phones = store.products.filter(p => p.type==='phone').length;
  const accessories = store.products.filter(p => p.type==='accessory').length;
  el.innerHTML = `
    <div class="stat-card"><span class="stat-icon"><i class="fas fa-box"></i></span><div class="stat-value">${store.orders.length}</div><div class="stat-name">إجمالي الطلبات</div></div>
    <div class="stat-card"><span class="stat-icon"><i class="fas fa-money-bill-wave"></i></span><div class="stat-value" style="font-size:24px">${formatPrice(totalRevenue)}</div><div class="stat-name">إجمالي الإيرادات</div></div>
    <div class="stat-card"><span class="stat-icon"><i class="fas fa-users"></i></span><div class="stat-value">${store.users.filter(u=>u.role!=='admin').length}</div><div class="stat-name">العملاء</div></div>
    <div class="stat-card"><span class="stat-icon"><i class="fas fa-mobile-alt"></i></span><div class="stat-value">${phones}</div><div class="stat-name">الهواتف</div></div>
    <div class="stat-card"><span class="stat-icon"><i class="fas fa-headphones"></i></span><div class="stat-value">${accessories}</div><div class="stat-name">الإكسسوارات</div></div>
    <div class="stat-card"><span class="stat-icon"><i class="fas fa-tags"></i></span><div class="stat-value">${store.products.length}</div><div class="stat-name">إجمالي المنتجات</div></div>`;
}

function openAddProduct() {
  document.getElementById('productFormTitle').textContent = 'إضافة منتج جديد';
  document.getElementById('editProductId').value = '';
  ['pName','pImage','pSpecs','pDesc'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  ['pPrice','pOldPrice'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  const r=document.getElementById('pRating'); if(r) r.value='4.5';
  const s=document.getElementById('pStock'); if(s) s.value='10';
  openModal('productFormModal');
}

function editProduct(id) {
  const p = store.products.find(x => x.id === id);
  if (!p) return;
  document.getElementById('productFormTitle').textContent = 'تعديل المنتج';
  document.getElementById('editProductId').value = id;
  const set = (elId, val) => { const el=document.getElementById(elId); if(el) el.value=val||''; };
  set('pName', p.name); set('pImage', p.image); set('pPrice', p.price); set('pOldPrice', p.oldPrice||'');
  set('pRating', p.rating); set('pStock', p.stock); set('pDesc', p.desc||'');
  set('pSpecs', (p.specs||[]).join('\n'));
  const brand=document.getElementById('pBrand'); if(brand) brand.value=p.brand;
  const type=document.getElementById('pType'); if(type) type.value=p.type;
  const flash=document.getElementById('pFlash'); if(flash) flash.value=String(p.isFlash);
  openModal('productFormModal');
}

function saveProduct() {
  const id = document.getElementById('editProductId')?.value;
  const name = document.getElementById('pName')?.value.trim();
  const brand = document.getElementById('pBrand')?.value;
  const price = parseInt(document.getElementById('pPrice')?.value);
  const oldPrice = parseInt(document.getElementById('pOldPrice')?.value) || null;
  const rating = parseFloat(document.getElementById('pRating')?.value) || 4.5;
  const stock = parseInt(document.getElementById('pStock')?.value) || 0;
  const type = document.getElementById('pType')?.value;
  const isFlash = document.getElementById('pFlash')?.value === 'true';
  const image = document.getElementById('pImage')?.value.trim();
  const specsText = document.getElementById('pSpecs')?.value.trim();
  const desc = document.getElementById('pDesc')?.value.trim();

  if (!name || !price || !image) { showToast('يرجى ملء الحقول المطلوبة (الاسم، السعر، الصورة)', 'error'); return; }

  const specs = specsText ? specsText.split('\n').filter(s => s.trim()) : [];

  if (id) {
    const p = store.products.find(x => x.id === parseInt(id));
    if (p) Object.assign(p, { name, brand, price, oldPrice, rating, stock, type, isFlash, image, specs, desc });
  } else {
    const newId = Math.max(...store.products.map(p => p.id), 0) + 1;
    store.products.push({ id: newId, name, brand, price, oldPrice, rating, stock, type, isFlash, image, specs, desc });
  }

  saveStore();
  closeModal('productFormModal');
  renderAdminProducts();
  showToast('<i class="fas fa-check"></i> تم حفظ المنتج بنجاح', 'success');
}

function deleteProduct(id) {
  if (!confirm('هل أنت متأكد من حذف هذا المنتج؟')) return;
  store.products = store.products.filter(p => p.id !== id);
  saveStore();
  renderAdminProducts();
  showToast('تم حذف المنتج', 'success');
}

// ===== EXCHANGE / MAINTENANCE =====
function submitExchange() {
  const brand = document.getElementById('exBrand')?.value.trim();
  const model = document.getElementById('exModel')?.value.trim();
  const phone = document.getElementById('exPhone')?.value.trim();
  if (!brand || !model || !phone) { showToast('يرجى ملء جميع الحقول', 'error'); return; }
  closeModal('exchangeModal');
  showToast('<i class="fas fa-check-circle"></i> تم إرسال طلب الاستبدال! سيتم التواصل معك قريباً', 'success');
}

function submitMaintenance() {
  const name = document.getElementById('mName')?.value.trim();
  const phone = document.getElementById('mPhone')?.value.trim();
  if (!name || !phone) { showToast('يرجى ملء جميع الحقول', 'error'); return; }
  closeModal('maintenanceModal');
  showToast('<i class="fas fa-calendar-check"></i> تم حجز موعد الصيانة! سيتم التواصل معك قريباً', 'success');
}

// ===== UI HELPERS =====
function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('open');
  document.body.style.overflow='hidden';
  // Pre-render content
  if (id === 'wishlistModal') renderWishlist();
  if (id === 'ordersModal') renderOrders();
  // Click outside to close
  el.onclick = (e) => { if(e.target === el) closeModal(id); };
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('open');
  // Only restore overflow if no other modal is open
  if (!document.querySelector('.modal-overlay.open')) {
    document.body.style.overflow='';
  }
}

function switchModal(from, to) {
  closeModal(from);
  setTimeout(() => openModal(to), 150);
}

function toggleUserMenu() {
  const dd = document.getElementById('userDropdown');
  if (dd) dd.style.display = dd.style.display === 'block' ? 'none' : 'block';
}

function closeUserMenu() {
  const dd = document.getElementById('userDropdown');
  if (dd) dd.style.display = 'none';
}

function toggleMobileMenu() {
  const nav = document.getElementById('mainNav');
  nav?.classList.toggle('mobile-open');
}

function togglePwd(id) {
  const el = document.getElementById(id);
  if (el) el.type = el.type === 'password' ? 'text' : 'password';
}

function updateCounts() {
  const cartCount = store.cart.reduce((s, c) => s + c.qty, 0);
  const wishCount = store.wishlist.length;
  const cc = document.getElementById('cartCount');
  const wc = document.getElementById('wishlistCount');
  if (cc) cc.textContent = cartCount;
  if (wc) wc.textContent = wishCount;
}

function showToast(msg, type='success') {
  const el = document.getElementById('toast');
  if (!el) return;
  el.innerHTML = msg;
  el.className = `toast ${type} show`;
  setTimeout(() => el.className = 'toast', 3500);
}

function scrollTo(sel) {
  const el = document.querySelector(sel);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function setupScrollBehavior() {
  window.addEventListener('scroll', () => {
    const scrollBtn = document.getElementById('scrollTop');
    if (scrollBtn) scrollBtn.classList.toggle('visible', window.scrollY > 400);
    const header = document.getElementById('mainHeader');
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Close dropdowns on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.user-btn') && !e.target.closest('.user-dropdown')) {
      closeUserMenu();
    }
    if (!e.target.closest('.search-bar')) {
      const dd = document.getElementById('searchDropdown');
      if (dd) dd.style.display='none';
    }
    if (e.target.closest('.mobile-menu-btn') === null && !e.target.closest('.main-nav')) {
      document.getElementById('mainNav')?.classList.remove('mobile-open');
    }
  });

  // Header search enter key
  document.getElementById('headerSearch')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doSearch();
  });
}

// ===== START =====
document.addEventListener('DOMContentLoaded', init);
