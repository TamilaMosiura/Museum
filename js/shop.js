const items = [
    {
        id: "item0001",
        name: "Copy of fossilized dinosaur bone",
        imageName: "bone",
        unitPrice: "5",
        description: "A high-quality copy of a fossilized dinosaur bone, perfect for collectors and enthusiasts of paleontology. This replica is made from durable materials and is a great addition to any natural history collection."
    },
    {
        id: "item0002",
        name: "Tooth of a mammoth",
        imageName: "tooth",
        unitPrice: "55",
        description: "A rare and fascinating artifact, this tooth of a mammoth is a unique piece of history. Mammoths were majestic creatures that roamed the Earth during the Ice Age, and their remains provide valuable insights into prehistoric life. This tooth is a remarkable specimen for collectors and enthusiasts of paleontology."
    },
    {
        id: "item0003",
        name: "Replica of a prehistoric cave painting",
        imageName: "painting",
        unitPrice: "150",
        description: "This replica of a prehistoric cave painting captures the essence of ancient art and culture. The original cave paintings were created by early humans and depict scenes of hunting, animals, and daily life. This replica is a beautiful representation of our ancestors' creativity and serves as a reminder of our shared human history."
    },
    {
        id: "item0004",
        name: "Ancient pottery shard",
        imageName: "pottery",
        unitPrice: "250",
        description: "This ancient pottery shard is a fragment of a vessel that dates back to a bygone era. Pottery shards like this one provide valuable insights into the daily lives and cultures of ancient civilizations. This shard is a tangible connection to the past and a fascinating piece for collectors and history enthusiasts."
    },
    {
        id: "item0005",
        name: "Replica of a medieval helmet",
        imageName: "helmet",
        unitPrice: "1000",
        description: "This replica of a medieval knight's helmet is a stunning piece of craftsmanship that pays homage to the chivalry and valor of the Middle Ages. The original helmets were worn by knights in battle and tournaments, serving both as protection and as a symbol of status. This replica is a great addition to any collection of medieval artifacts or for those interested in the history of warfare."
    }
]

const shopDiv = document.getElementById("shop-items");

items.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("shop-cart");
    itemDiv.classList.add("souvenir-item");
    const imageSrc = `../images/shop/${item.imageName}.png`;

    itemDiv.innerHTML = `
        <img 
            src="${imageSrc}"
            alt="${item.name}"
            onclick="openModal({src: '${imageSrc}', alt: '${item.name}'})"
        >
        <p>${item.name}</p>
        <p><strong>Price: </strong>$${item.unitPrice}</p> 
        <span class="qty-badge" aria-live="polite">Qty: 0</span>
        <p>${item.description}</p>

        <button 
            class="buy-button" 
            onclick="addToCart(this)"
            data-id="${item.id}"
            data-name="${item.name}"
            data-price="${item.unitPrice}"
            data-image="${imageSrc}"
        >Add ${item.name} to Cart</button>
    `;

    document.getElementById("shop-items").appendChild(itemDiv);
});

const CART_KEY = 'museumCartV1';


// This function reads the Cart information and write it to JSON  
function readCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
}

function writeCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
 
    /*This function is called by the addToCart button the first part reads the dataset contined in the buttons and asssigns the values to variables */

function addToCart(btn) {
    const id = btn.dataset.id;
    const name = btn.dataset.name;
    const unitPrice = Number(btn.dataset.price);
    const image = btn.dataset.image;

    /* This part puts all of the individual items and puts them into an object called cart and writes it to LocalStorage   */

    let cart = readCart();
    const idx = cart.findIndex(it => it.id === id);
    if (idx >= 0) {
        cart[idx].qty += 1;
    } else {
        cart.push({ id, name, unitPrice, qty: 1, image });
    }
    writeCart(cart);

    // Update the item card's qty badge
    const card = btn.closest('.souvenir-item');
    if (card) {
        const badge = card.querySelector('.qty-badge');
        if (badge) {
            const item = cart.find(it => it.id === id);
            badge.textContent = item ? `Qty: ${item.qty}` : 'Qty: 0';
        }
    }
}

function openModal(imgElement) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    modalImage.src = imgElement.src;
    modalImage.alt = imgElement.alt;
    modal.classList.add("active");
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("active");
}

// Optional: Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
    closeModal();
    }
}
