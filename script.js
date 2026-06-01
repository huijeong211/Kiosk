let lastOrder = null;
let orders = [];

const menus = [
    { id: 1, name: "아메리카노", category: "Coffee", price: 3000, stock: 10 },
    { id: 2, name: "카페라떼", category: "Coffee", price: 4000, stock: 10 },
    { id: 3, name: "레몬에이드", category: "Ade", price: 5000, stock: 10 },
    { id: 4, name: "치즈케이크", category: "Dessert", price: 6000, stock: 10 }
];

let cart = [];
let totalSales = 0;
let totalOrders = 0;

displayMenus();

function getCartQty(id) {
    const item = cart.find(c => c.id === id);
    return item ? item.quantity : 0;
}

function displayMenus(menuList = menus) {

    const container = document.getElementById("menu-container");
    container.innerHTML = "";

    menuList.forEach(menu => {

        const availableStock = menu.stock - getCartQty(menu.id);

        container.innerHTML += `
            <div class="menu-item">

                <h3>${menu.name}</h3>
                <p>카테고리 : ${menu.category}</p>
                <p>가격 : ${menu.price}원</p>
                <p>재고 : ${availableStock} (${menu.stock})</p>

                <button onclick="viewDetail(${menu.id})">상세보기</button>

                <button onclick="addToCart(${menu.id})"
                    ${availableStock <= 0 ? "disabled" : ""}>
                    ${availableStock <= 0 ? "품절" : "장바구니 추가"}
                </button>

            </div>
        `;
    });
}

function filterCategory(category) {
    displayMenus(menus.filter(m => m.category === category));
}

function viewDetail(id) {

    const menu = menus.find(m => m.id === id);

    alert(
        `메뉴명: ${menu.name}
카테고리: ${menu.category}
가격: ${menu.price}원
재고: ${menu.stock}`
    );
}

function addToCart(id) {

    const menu = menus.find(m => m.id === id);

    const current = cart.find(c => c.id === id);
    const qty = current ? current.quantity : 0;

    if (qty + 1 > menu.stock) {
        alert("재고가 부족합니다.");
        return;
    }

    const item = cart.find(c => c.id === id);

    if (item) item.quantity++;
    else {
        cart.push({
            id: menu.id,
            name: menu.name,
            price: menu.price,
            quantity: 1
        });
    }

    updateCart();
    displayMenus();
}

function updateCart() {

    const container = document.getElementById("cart-container");
    container.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        container.innerHTML += `
            <div>
                ${item.name} (${item.quantity}개)
                <button onclick="increaseQuantity(${item.id})">+</button>
                <button onclick="decreaseQuantity(${item.id})">-</button>
                <button onclick="removeItem(${item.id})">삭제</button>
            </div>
        `;
    });

    document.getElementById("total-price")
        .innerText = `총 금액 : ${total}원`;
}

function increaseQuantity(id) {

    const item = cart.find(c => c.id === id);
    const menu = menus.find(m => m.id === id);

    if (item.quantity + 1 > menu.stock) {
        alert("재고를 초과할 수 없습니다.");
        return;
    }

    item.quantity++;

    updateCart();
    displayMenus();
}

function decreaseQuantity(id) {

    const item = cart.find(c => c.id === id);

    item.quantity--;

    if (item.quantity <= 0) removeItem(id);
    else updateCart();

    displayMenus();
}

function removeItem(id) {

    cart = cart.filter(c => c.id !== id);

    updateCart();
    displayMenus();
}

function calculateTotal() {
    return cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
}

function processPayment() {

    if (cart.length === 0) {
        alert("장바구니가 비어있습니다.");
        return;
    }

    for (let item of cart) {
        const menu = menus.find(m => m.id === item.id);

        if (item.quantity > menu.stock) {
            alert(`${menu.name} 재고 부족`);
            return;
        }
    }

    const total = calculateTotal();

    const order = {
        orderNumber: Date.now(),
        items: JSON.parse(JSON.stringify(cart)),
        total,
        status: "PAID"
    };

    orders.push(order);
    lastOrder = order;

    totalSales += total;
    totalOrders++;

    menus.forEach(menu => {
        const cartItem = cart.find(c => c.id === menu.id);
        if (cartItem) {
            menu.stock = Math.max(0, menu.stock - cartItem.quantity);
        }
    });

    document.getElementById("receipt").innerHTML = `
        <h2>영수증</h2>
        <p>주문번호 : ${order.orderNumber}</p>
        <p>총 결제금액 : ${order.total}원</p>
        <p>결제 완료</p>
    `;

    cart = [];

    updateCart();
    displayMenus();
    updateSalesReport();
    updateOrderHistory();
}

function cancelLastOrder() {

    if (!lastOrder) {
        alert("취소할 주문 없음");
        return;
    }

    if (!confirm("최근 주문을 취소하겠습니까?")) return;

    lastOrder.items.forEach(item => {
        const menu = menus.find(m => m.id === item.id);
        if (menu) menu.stock += item.quantity;
    });

    totalSales -= lastOrder.total;
    totalOrders--;

    lastOrder.status = "CANCELLED";

    document.getElementById("receipt").innerHTML = `
        <h2>환불 영수증</h2>
        <p>주문번호 : ${lastOrder.orderNumber}</p>
        <p>환불금액 : ${lastOrder.total}원</p>
        <p>취소 완료</p>
    `;

    lastOrder = null;

    displayMenus();
    updateSalesReport();
    updateOrderHistory();
}

function updateOrderHistory() {

    const container = document.getElementById("order-history");
    container.innerHTML = "";

    orders.slice().reverse().forEach(order => {

        container.innerHTML += `
            <div style="background:white; padding:10px; margin:10px;">
                <b>주문번호:</b> ${order.orderNumber}<br>
                <b>상태:</b> ${order.status}<br>
                <b>금액:</b> ${order.total}원<br>
                <b>상품:</b>
                ${order.items.map(i => `${i.name}(${i.quantity})`).join(", ")}
            </div>
        `;
    });
}

function updateSalesReport() {

    document.getElementById("sales").innerHTML = `
        총 주문 수 : ${totalOrders}<br>
        총 매출 : ${totalSales}원
    `;
}

function updateStock() {

    const id = Number(document.getElementById("stock-menu").value);
    const stock = Number(document.getElementById("stock-value").value);

    const menu = menus.find(m => m.id === id);

    menu.stock = stock;

    displayMenus();

    alert("재고 수정 완료");
}
